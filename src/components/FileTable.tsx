"use client";

import { Project } from "@/data/projects";

interface FileTableProps {
    projects: Project[];
    selectedId: string | null;
    onSelect: (project: Project) => void;
}

export default function FileTable({
    projects,
    selectedId,
    onSelect,
}: FileTableProps) {
    return (
          <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-[#1a1a1a]">
            {/* Table Header - Finder style */}
                <div className="flex items-center px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex-1 min-w-[200px]">Name</div>div>
                        <div className="w-28 text-right">Date Added</div>div>
                        <div className="w-28 text-right">Kind</div>div>
                </div>div>
          
            {/* Table Body - Scrollable */}
                <div className="flex-1 overflow-y-auto">
                  {projects.length === 0 ? (
                      <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-500">
                                  No projects found
                      </div>div>
                    ) : (
                      projects.map((project) => (
                                    <div
                                                    key={project.id}
                                                    onClick={() => onSelect(project)}
                                                    className={`
                                                                    flex items-center px-4 py-2 cursor-pointer
                                                                                    transition-colors duration-100
                                                                                                    border-b border-gray-100 dark:border-gray-800
                                                                                                                    ${
                                                                                                                                        selectedId === project.id
                                                                                                                                          ? "bg-primary text-white"
                                                                                                                                          : "hover:bg-gray-50 dark:hover:bg-[#222] text-gray-900 dark:text-gray-100"
                                                                                                                      }
                                                                                                                                    `}
                                                  >
                                      {/* File icon + Name */}
                                                  <div className="flex-1 min-w-[200px] flex items-center gap-3">
                                                                  <div
                                                                                      className={`
                                                                                                          w-5 h-5 rounded flex items-center justify-center shrink-0
                                                                                                                              ${
                                                                                                                                                      selectedId === project.id
                                                                                                                                                        ? "bg-white/20"
                                                                                                                                                        : "bg-gray-200 dark:bg-gray-700"
                                                                                                                                }
                                                                                                                                                  `}
                                                                                    >
                                                                                    <svg
                                                                                                          className={`w-3 h-3 ${
                                                                                                                                  selectedId === project.id
                                                                                                                                    ? "text-white"
                                                                                                                                    : "text-gray-500 dark:text-gray-400"
                                                                                                            }`}
                                                                                                          fill="currentColor"
                                                                                                          viewBox="0 0 20 20"
                                                                                                        >
                                                                                                        <path
                                                                                                                                fillRule="evenodd"
                                                                                                                                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                                                                                                                                clipRule="evenodd"
                                                                                                                              />
                                                                                      </svg>svg>
                                                                  </div>div>
                                                                  <span className="text-sm truncate">{project.name}</span>span>
                                                  </div>div>
                                    
                                      {/* Date Added */}
                                                  <div
                                                                    className={`w-28 text-right text-sm ${
                                                                                        selectedId === project.id
                                                                                          ? "text-white/80"
                                                                                          : "text-gray-500 dark:text-gray-400"
                                                                    }`}
                                                                  >
                                                    {project.dateAdded}
                                                  </div>div>
                                    
                                      {/* Kind */}
                                                  <div className="w-28 text-right">
                                                                  <span
                                                                                      className={`
                                                                                                          inline-block px-2 py-0.5 text-xs rounded
                                                                                                                              ${
                                                                                                                                                      selectedId === project.id
                                                                                                                                                        ? "bg-white/20 text-white"
                                                                                                                                                        : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                                                                                                                                }
                                                                                                                                                  `}
                                                                                    >
                                                                    {project.kind}
                                                                  </span>span>
                                                  </div>div>
                                    </div>div>
                                  ))
                    )}
                </div>div>
          </div>div>
        );
}</div>
