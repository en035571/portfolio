"use client";

import { Project } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Info } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface ProjectPanelProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectPanel({ project, onClose }: ProjectPanelProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Reset media index when project changes
  const handlePrevMedia = () => {
    if (!project) return;
    setCurrentMediaIndex((prev) =>
      prev === 0 ? project.media.length - 1 : prev - 1
    );
  };

  const handleNextMedia = () => {
    if (!project) return;
    setCurrentMediaIndex((prev) =>
      prev === project.media.length - 1 ? 0 : prev + 1
    );
  };

  const currentMedia = project?.media[currentMediaIndex];

  return (
    <AnimatePresence mode="wait">
      {project && (
        <motion.div
          key={project.id}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 400, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 40,
          }}
          className="h-full border-l border-light-border dark:border-dark-border bg-light-sidebar dark:bg-dark-sidebar overflow-hidden flex flex-col"
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-light-border dark:border-dark-border">
            <div className="flex items-center gap-2 text-sm text-light-textMuted dark:text-dark-textMuted">
              <Info size={16} />
              <span>Project Info</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
            >
              <X size={16} className="text-light-textMuted dark:text-dark-textMuted" />
            </button>
          </div>

          {/* Media Preview */}
          <div className="relative bg-light-bg dark:bg-dark-bg">
            {/* Media Container - Responsive for both images and videos */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMediaIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  {currentMedia?.type === "video" ? (
                    <div className="w-full h-full">
                      <iframe
                        src={currentMedia.src}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full bg-gray-200 dark:bg-gray-800">
                      {currentMedia?.src && currentMedia.src !== "/images/placeholder.jpg" ? (
                        <Image
                          src={currentMedia.src}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-light-textMuted dark:text-dark-textMuted">
                          <span className="text-sm">Add image to /public/images/</span>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows - Only show if multiple media */}
            {project.media.length > 1 && (
              <>
                <button
                  onClick={handlePrevMedia}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextMedia}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Media indicator dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.media.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMediaIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentMediaIndex
                          ? "bg-white w-4"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Project Info */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-text mb-1">
                {project.title}
              </h2>
              <p className="text-sm text-light-textMuted dark:text-dark-textMuted mb-4">
                {project.category}, {project.year}
              </p>
              <p className="text-sm text-light-text dark:text-dark-text leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          </div>

          {/* Navigation Footer */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-light-border dark:border-dark-border">
            <button
              onClick={handlePrevMedia}
              className="flex items-center gap-1 px-3 py-1.5 rounded hover:bg-light-hover dark:hover:bg-dark-hover text-sm text-light-textMuted dark:text-dark-textMuted transition-colors"
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>
            <button
              onClick={handleNextMedia}
              className="flex items-center gap-1 px-3 py-1.5 rounded hover:bg-light-hover dark:hover:bg-dark-hover text-sm text-light-textMuted dark:text-dark-textMuted transition-colors"
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
