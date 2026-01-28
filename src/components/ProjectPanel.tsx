"use client";

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
                              transition={{ type: "spring", stiffness: 400, damping: 40 }}
                              className="h-full border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] overflow-hidden flex flex-col"
                            >
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
                                                                                                              <iframe
                                                                                                                                      src={currentMedia.src}
                                                                                                                                      className="w-full h-full"
                                                                                                                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                                                                                      allowFullScreen
                                                                                                                                    />
                                                                                                            ) : (
                                                                                                              <div className="relative w-full h-full bg-gray-200 dark:bg-gray-800">
                                                                                                                {currentMedia?.src && currentMedia.src !== "/images/placeholder.jpg" ? (
                                                                                                                                        <Image src={currentMedia.src} alt={project.title} fill className="object-cover" />
                                                                                                                                      ) : (
                                                                                                                                        <div className="w-full h-full flex items-center justify-center text-gray-400">
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
                              {project.media.length > 1 && (
                                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                              {project.media.map((_, index) => (
                                                                <button
                                                                                      key={index}
                                                                                      onClick={() => setCurrentMediaIndex(index)}
                                                                                      className={`w-2 h-2 rounded-full transition-all ${index === currentMediaIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/70"}`}
                                                                                    />
                                                              ))}
                                            </div>div>
                                        )}
                            </div>div>
                            <div className="flex-1 overflow-y-auto p-6">
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                                                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{project.title}</h2>h2>
                                                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.category}, {project.year}</p>p>
                                                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>p>
                                        </motion.div>motion.div>
                            </div>div>
                            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                                        <button onClick={handlePrevMedia} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors">
                                                      <ChevronLeft size={20} />
                                        </button>button>
                                        <button onClick={onClose} className="text-xs text-gray-400 hover:text-gray-600">
                                          {currentMediaIndex + 1} / {project.media.length}
                                        </button>button>
                                        <button onClick={handleNextMedia} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors">
                                                      <ChevronRight size={20} />
                                        </button>button>
                            </div>div>
                  </motion.div>motion.div>
                )}
        </AnimatePresence>AnimatePresence>
      );
}</AnimatePresence>
