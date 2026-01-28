"use client";

import { Project } from "@/data/projects";
import { FileIcon } from "lucide-react";

interface FileTableProps {
  projects: Project[];
  selectedId: string | null;
  onSelect: (project: Project) => void;
  searchQuery: string;
}

export default function FileTable({
  projects,
  selectedId,
  onSelect,
  searchQuery,
}: FileTableProps) {
  // Filter projects by search query
  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.kind.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Table Header - Finder style */}
      <div className="flex items-center px-4 py-2 border-b border-light-border dark:border-dark-border bg-light-sidebar/50 dark:bg-dark-sidebar/50 text-xs font-medium text-light-textMuted dark:text-dark-textMuted uppercase tracking-wider">
        <div className="flex-1 min-w-[200px]">Name</div>
        <div className="w-32 text-right">Date Added</div>
        <div className="w-32 text-right">Kind</div>
      </div>

      {/* Table Body - Scrollable */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {filteredProjects.length === 0 ? (
          <div className="flex items-center justify-center h-full text-light-textMuted dark:text-dark-textMuted">
            No projects found
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelect(project)}
              className={`
                flex items-center px-4 py-2 cursor-pointer
                transition-all duration-150 ease-out
                border-b border-light-border/50 dark:border-dark-border/50
                ${
                  selectedId === project.id
                    ? "bg-primary text-white"
                    : "hover:bg-light-hover dark:hover:bg-dark-hover text-light-text dark:text-dark-text"
                }
              `}
            >
              {/* File icon + Name */}
              <div className="flex-1 min-w-[200px] flex items-center gap-3">
                <div
                  className={`
                    w-8 h-8 rounded flex items-center justify-center shrink-0
                    ${
                      selectedId === project.id
                        ? "bg-white/20"
                        : "bg-light-hover dark:bg-dark-hover"
                    }
                  `}
                >
                  <FileIcon
                    size={16}
                    className={
                      selectedId === project.id
                        ? "text-white"
                        : "text-light-textMuted dark:text-dark-textMuted"
                    }
                  />
                </div>
                <span className="truncate text-sm">{project.name}</span>
              </div>

              {/* Date */}
              <div
                className={`w-32 text-right text-sm ${
                  selectedId === project.id
                    ? "text-white/80"
                    : "text-light-textMuted dark:text-dark-textMuted"
                }`}
              >
                {project.dateAdded}
              </div>

              {/* Kind */}
              <div
                className={`w-32 text-right text-sm ${
                  selectedId === project.id
                    ? "text-white/80"
                    : "text-light-textMuted dark:text-dark-textMuted"
                }`}
              >
                {project.kind}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
