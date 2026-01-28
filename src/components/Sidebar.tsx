"use client";

import { ProjectType, siteConfig } from "@/data/projects";
import Image from "next/image";

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
          <aside className="w-[280px] shrink-0 h-full flex flex-col bg-white dark:bg-[#1a1a1a]">
            {/* Logo */}
                <div className="p-6 pb-4">
                        <Image
                                    src="/images/logo.png"
                                    alt="Eric Nguyen Logo"
                                    width={80}
                                    height={80}
                                    className="w-20 h-20 object-contain"
                                  />
                </div>
          
            {/* Filters */}
                <div className="px-6 flex-1">
                  {/* Project Types */}
                        <div className="mb-8">
                                  <h3 className="text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400 mb-3">
                                              Project Types
                                  </h3>
                                  <div className="space-y-0.5">
                                    {projectTypes.map((type) => {
                          const isActive = selectedTypes.includes(type);
                          return (
                                            <button
                                                                key={type}
                                                                onClick={() => onTypeToggle(type)}
                                                                className={`
                                                                                    w-full text-left px-2 py-1 text-sm
                                                                                                        transition-all duration-150
                                                                                                                            ${
                                                                                                                                                    isActive
                                                                                                                                                      ? "text-primary font-medium"
                                                                                                                                                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
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
                        <div className="mb-8">
                                  <h3 className="text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400 mb-3">
                                              Sort
                                  </h3>
                                  <div className="space-y-0.5">
                                              <button
                                                              onClick={() => onSortChange("oldest")}
                                                              className={`
                                                                              w-full text-left px-2 py-1 text-sm rounded
                                                                                              transition-all duration-150
                                                                                                              ${
                                                                                                                                  sortOrder === "oldest"
                                                                                                                                    ? "bg-primary text-white"
                                                                                                                                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                                                                                                }
                                                                                                                              `}
                                                            >
                                                            Oldest-New
                                              </button>
                                              <button
                                                              onClick={() => onSortChange("newest")}
                                                              className={`
                                                                              w-full text-left px-2 py-1 text-sm rounded
                                                                                              transition-all duration-150
                                                                                                              ${
                                                                                                                                  sortOrder === "newest"
                                                                                                                                    ? "bg-primary text-white"
                                                                                                                                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                                                                                                }
                                                                                                                              `}
                                                            >
                                                            Newest-Old
                                              </button>
                                  </div>
                        </div>
                </div>
          
            {/* Social Links */}
                <div className="px-6 py-4 space-y-1 text-xs text-gray-500 dark:text-gray-400">
                  {siteConfig.instagram && (
                      <a
                                    href={`https://instagram.com/${siteConfig.instagram.replace("@", "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                  >
                                  instagram: {siteConfig.instagram}
                      </a>
                        )}
                  {siteConfig.email && (
                      <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="block hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                  >
                                  email: {siteConfig.email}
                      </a>
                        )}
                </div>
          
          </aside>
        );
}</aside>
