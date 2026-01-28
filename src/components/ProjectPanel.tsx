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
    setCurrentMediaIndex((prev) =>"use client";

    import { Project } from "@/data/projects";
    import { motion, AnimatePresence } from "framer-motion";
    import { ChevronLeft, ChevronRight } from "lucide-react";
    import { useState, useEffect } from "react";
    import Image from "next/image";

    interface ProjectPanelProps {
        project: Project | null;
        onClose: () => void;
    }

    export default function ProjectPanel({ project, onClose }: ProjectPanelProps) {
        const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

        // Reset media index when project changes
        useEffect(() => {
              setCurrentMediaIndex(0);
        }, [project?.id]);

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
                                    animate={{ width: 380, opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    transition={{
                                                  type: "spring",
                                                  stiffness: 400,
                                                  damping: 40,
                                    }}
                                    className="h-full border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] overflow-hidden flex flex-col"
                                  >
                          {/* Media Preview - Large area like Figma */}
                                  <div className="relative bg-gray-100 dark:bg-gray-800 flex-shrink-0">
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
                                                                                                                      </div>div>
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
                                                                                                                                              <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                                                                                                                                                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                                                                                                                                                                                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                                                                                                                                                          </svg>svg>
                                                                                                                                                </div>div>
                                                                                                                                          )}
                                                                                                                      </div>div>
                                                                                              )}
                                                                            </motion.div>motion.div>
                                                            </AnimatePresence>AnimatePresence>
                                              </div>div>
                                  
                                    {/* Media indicator dots - Only show if multiple media */}
                                    {project.media.length > 1 && (
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
                                                  </div>div>
                                              )}
                                  </div>div>
                        
                          {/* Project Info - Matching Figma styling */}
                                  <div className="flex-1 overflow-y-auto p-6">
                                              <motion.div
                                                              initial={{ opacity: 0, y: 10 }}
                                                              animate={{ opacity: 1, y: 0 }}
                                                              transition={{ delay: 0.1 }}
                                                            >
                                                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                                              {project.title}
                                                            </h2>h2>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                                              {project.category}, {project.year}
                                                            </p>p>
                                                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                              {project.description}
                                                            </p>p>
                                              </motion.div>motion.div>
                                  </div>div>
                        
                          {/* Navigation Footer - Matching Figma arrows */}
                                  <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                                              <button
                                                              onClick={handlePrevMedia}
                                                              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 dark:text-gray-500 transition-colors"
                                                              title="Previous"
                                                            >
                                                            <ChevronLeft size={20} />
                                              </button>button>
                                              <button
                                                              onClick={onClose}
                                                              className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                                                            >
                                                {currentMediaIndex + 1} / {project.media.length}
                                              </button>button>
                                              <button
                                                              onClick={handleNextMedia}
                                                              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 dark:text-gray-500 transition-colors"
                                                              title="Next"
                                                            >
                                                            <ChevronRight size={20} />
                                              </button>button>
                                  </div>div>
                        </motion.div>motion.div>
                      )}
              </AnimatePresence>AnimatePresence>
            );
    }</AnimatePresence>
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
