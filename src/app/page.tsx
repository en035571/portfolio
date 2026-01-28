"use client";

import { useState, useMemo } from "react";
import { projects, ProjectType, Project, siteConfig } from "@/data/projects";
import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import FileTable from "@/components/FileTable";
import ProjectPanel from "@/components/ProjectPanel";
import SearchBar from "@/components/SearchBar";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  // State
  const [selectedTypes, setSelectedTypes] = useState<ProjectType[]>([]);
  const [sortOrder, setSortOrder] = useState<"oldest" | "newest">("oldest");
  const [searchQuery, setSearchQuery] = useState("");
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
    <div className="h-screen flex flex-col overflow-hidden bg-light-bg dark:bg-dark-bg">
      {/* Main Content */}
      <div className="flex-1 flex min-h-0">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar
            selectedTypes={selectedTypes}
            onTypeToggle={handleTypeToggle}
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
          />
        </div>

        {/* Main Area */}
        <main className="flex-1 flex flex-col min-w-0">
          {/* Top Bar */}
          <header className="flex items-center justify-between gap-4 px-4 py-3 border-b border-light-border dark:border-dark-border bg-light-sidebar/30 dark:bg-dark-sidebar/30">
            {/* Mobile Menu + Search */}
            <div className="flex items-center gap-3 flex-1">
              <MobileSidebar
                selectedTypes={selectedTypes}
                onTypeToggle={handleTypeToggle}
                sortOrder={sortOrder}
                onSortChange={setSortOrder}
              />
              <div className="flex-1 max-w-md">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
            </div>

            {/* Active Filters (Desktop) */}
            <div className="hidden md:flex items-center gap-2">
              {selectedTypes.map((type) => (
                <span
                  key={type}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                >
                  {type}
                </span>
              ))}
            </div>
          </header>

          {/* Content Area - File Table + Project Panel */}
          <div className="flex-1 flex min-h-0">
            {/* File Table */}
            <FileTable
              projects={filteredProjects}
              selectedId={selectedProject?.id || null}
              onSelect={handleSelectProject}
              searchQuery={searchQuery}
            />

            {/* Project Detail Panel */}
            <ProjectPanel
              project={selectedProject}
              onClose={handleClosePanel}
            />
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between px-4 py-3 border-t border-light-border dark:border-dark-border bg-light-sidebar/30 dark:bg-dark-sidebar/30">
        {/* Copyright */}
        <div className="text-xs text-light-textMuted dark:text-dark-textMuted hidden sm:block">
          Copyright © {siteConfig.copyrightYear} by {siteConfig.name}. All rights reserved.
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Spotify Player */}
          <SpotifyPlayer />

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}
