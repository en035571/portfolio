"use client";

import { useState, useMemo } from "react";
import { projects, ProjectType, Project, siteConfig } from "@/data/projects";
import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import FileTable from "@/components/FileTable";
import ProjectPanel from "@/components/ProjectPanel";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
      // State
  const [selectedTypes, setSelectedTypes] = useState<ProjectType[]>([]);
      const [sortOrder, setSortOrder] = useState<"oldest" | "newest">("oldest");
      const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
          let filtered = [...projects];

                                       // Filter by type
                                       if (selectedTypes.length > 0) {
                                                 filtered = filtered.filter((p) => selectedTypes.includes(p.type));
                                       }

                                       // Sort
                                       filtered.sort((a, b) => {
                                                 const dateA = new Date(a.dateAdded.split(".").reverse().join("-"));
                                                 const dateB = new Date(b.dateAdded.split(".").reverse().join("-"));
                                                 return sortOrder === "oldest"
                                                   ? dateA.getTime() - dateB.getTime()
                                                             : dateB.getTime() - dateA.getTime();
                                       });

                                       return filtered;
  }, [selectedTypes, sortOrder]);

  // Toggle project type filter
  const handleTypeToggle = (type: ProjectType) => {
          setSelectedTypes((prev) =>
                    prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
                               );
  };

  // Handle project selection
  const handleSelectProject = (project: Project) => {
          setSelectedProject(project);
  };

  // Close project panel
  const handleClosePanel = () => {
          setSelectedProject(null);
  };

  return (
          <div className="h-screen flex flex-col overflow-hidden bg-white dark:bg-[#1a1a1a]">
              {/* Main Content */}
                <div className="flex-1 flex min-h-0">
                    {/* Desktop Sidebar */}
                        <div className="hidden lg:block h-full">
                                  <Sidebar
                                                  selectedTypes={selectedTypes}
                                                  onTypeToggle={handleTypeToggle}
                                                  sortOrder={sortOrder}
                                                  onSortChange={setSortOrder}
                                                />
                        </div>
                
                    {/* Main Area */}
                        <main className="flex-1 flex flex-col min-w-0 border-l border-gray-200 dark:border-gray-800">
                            {/* Mobile Header - only shown on mobile */}
                                  <header className="lg:hidden flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                                              <MobileSidebar
                                                                selectedTypes={selectedTypes}
                                                                onTypeToggle={handleTypeToggle}
                                                                sortOrder={sortOrder}
                                                                onSortChange={setSortOrder}
                                                              />
                                  </header>header>
                        
                            {/* Content Area - File Table + Project Panel */}
                                  <div className="flex-1 flex min-h-0">
                                      {/* File Table */}
                                              <FileTable
                                                                projects={filteredProjects}
                                                                selectedId={selectedProject?.id || null}
                                                                onSelect={handleSelectProject}
                                                              />
                                  
                                      {/* Project Detail Panel */}
                                              <ProjectPanel
                                                                project={selectedProject}
                                                                onClose={handleClosePanel}
                                                              />
                                  </div>
                        </main>
                </div>
          
              {/* Footer - matches Figma exactly */}
                <footer className="flex items-center justify-between px-4 py-2 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1a1a]">
                    {/* Copyright */}
                        <div className="text-[10px] text-gray-400 dark:text-gray-500">
                                  Copyright © {siteConfig.copyrightYear} by {siteConfig.name}. All rights reserved.
                        </div>
                
                    {/* Right side controls */}
                        <div className="flex items-center gap-3">
                            {/* Spotify Player */}
                                  <SpotifyPlayer />
                        
                            {/* Theme Toggle */}
                                  <ThemeToggle />
                        </div>
                </footer>
          </div>
        );
}
