"use client";

import { ProjectType, siteConfig } from "@/data/projects";
import { Instagram, Mail } from "lucide-react";

interface SidebarProps {
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

export default function Sidebar({
  selectedTypes,
  onTypeToggle,
  sortOrder,
  onSortChange,
}: SidebarProps) {
  return (
    <aside className="w-64 shrink-0 h-full flex flex-col bg-light-sidebar dark:bg-dark-sidebar border-r border-light-border dark:border-dark-border">
      {/* Logo */}
      <div className="p-6 pb-8">
        {/* ========================================
            REPLACE WITH YOUR LOGO
            Put your logo file in /public/images/
            ======================================== */}
        <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-10 h-10 text-white"
            fill="currentColor"
          >
            {/* Placeholder icon - replace with your logo */}
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 flex-1">
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
                    w-full text-left px-3 py-1.5 rounded-md text-sm
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
                w-full text-left px-3 py-1.5 rounded-md text-sm
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
                w-full text-left px-3 py-1.5 rounded-md text-sm
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
      <div className="px-6 py-4 space-y-2 border-t border-light-border dark:border-dark-border">
        {siteConfig.instagram && (
          <a
            href={`https://instagram.com/${siteConfig.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-light-textMuted dark:text-dark-textMuted hover:text-light-text dark:hover:text-dark-text transition-colors"
          >
            <Instagram size={16} />
            <span>instagram: {siteConfig.instagram}</span>
          </a>
        )}
        {siteConfig.email && (
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-sm text-light-textMuted dark:text-dark-textMuted hover:text-light-text dark:hover:text-dark-text transition-colors"
          >
            <Mail size={16} />
            <span>email: {siteConfig.email}</span>
          </a>
        )}
      </div>

      {/* Copyright */}
      <div className="px-6 py-4 text-xs text-light-textMuted dark:text-dark-textMuted">
        Copyright © {siteConfig.copyrightYear} by {siteConfig.name}. All rights reserved.
      </div>
    </aside>
  );
}
