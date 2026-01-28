"use client";

import { ProjectType, siteConfig } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Mail, Menu } from "lucide-react";
import { useState } from "react";

interface MobileSidebarProps {
  selectedTypes: ProjectType[];
  onTypeToggle: (type: ProjectType) => void;
  sortOrder: "oldest" | "newest";
  onSortChange: (order: "oldest" | "newest") => void;
}

const projectTypes: ProjectType[] = [
  "Video",
  "Graphic Design",
  "Photography",
  "Creative Direction",
];

export default function MobileSidebar({
  selectedTypes,
  onTypeToggle,
  sortOrder,
  onSortChange,
}: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors"
      >
        <Menu size={24} className="text-light-text dark:text-dark-text" />
      </button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="fixed top-0 left-0 h-full w-72 z-50 flex flex-col bg-light-sidebar dark:bg-dark-sidebar lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-light-border dark:border-dark-border">
                {/* Logo */}
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover"
                >
                  <X size={20} className="text-light-text dark:text-dark-text" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4">
                {/* Project Types */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-light-textMuted dark:text-dark-textMuted mb-3">
                    Project Types
                  </h3>
                  <div className="space-y-1">
                    {projectTypes.map((type) => {
                      const isActive = selectedTypes.includes(type);
                      return (
                        <button
                          key={type}
                          onClick={() => onTypeToggle(type)}
                          className={`
                            w-full text-left px-3 py-2 rounded-lg text-sm
                            transition-all duration-200 ease-out
                            ${
                              isActive
                                ? "bg-primary/10 text-primary dark:bg-primary/20 font-medium"
                                : "text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover"
                            }
                          `}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sort */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-light-textMuted dark:text-dark-textMuted mb-3">
                    Sort
                  </h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => onSortChange("oldest")}
                      className={`
                        w-full text-left px-3 py-2 rounded-lg text-sm
                        transition-all duration-200 ease-out
                        ${
                          sortOrder === "oldest"
                            ? "bg-primary/10 text-primary dark:bg-primary/20 font-medium"
                            : "text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover"
                        }
                      `}
                    >
                      Oldest-New
                    </button>
                    <button
                      onClick={() => onSortChange("newest")}
                      className={`
                        w-full text-left px-3 py-2 rounded-lg text-sm
                        transition-all duration-200 ease-out
                        ${
                          sortOrder === "newest"
                            ? "bg-primary/10 text-primary dark:bg-primary/20 font-medium"
                            : "text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover"
                        }
                      `}
                    >
                      Newest-Old
                    </button>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-4 space-y-2 border-t border-light-border dark:border-dark-border">
                {siteConfig.instagram && (
                  <a
                    href={`https://instagram.com/${siteConfig.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-light-textMuted dark:text-dark-textMuted hover:text-light-text dark:hover:text-dark-text transition-colors"
                  >
                    <Instagram size={16} />
                    <span>{siteConfig.instagram}</span>
                  </a>
                )}
                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-sm text-light-textMuted dark:text-dark-textMuted hover:text-light-text dark:hover:text-dark-text transition-colors"
                  >
                    <Mail size={16} />
                    <span>{siteConfig.email}</span>
                  </a>
                )}
              </div>

              {/* Copyright */}
              <div className="px-4 py-3 text-xs text-light-textMuted dark:text-dark-textMuted">
                © {siteConfig.copyrightYear} {siteConfig.name}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
