"use client";

import { siteConfig } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { Music, X } from "lucide-react";
import { useState } from "react";

export default function SpotifyPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!siteConfig.spotify.enabled) return null;

  return (
    <div className="relative">
      {/* Expanded Player Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Player Modal */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fixed bottom-20 right-4 z-50 w-80 bg-light-bg dark:bg-dark-bg rounded-xl shadow-2xl overflow-hidden border border-light-border dark:border-dark-border"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-light-border dark:border-dark-border">
                <div className="flex items-center gap-2">
                  <Music size={16} className="text-green-500" />
                  <span className="text-sm font-medium text-light-text dark:text-dark-text">
                    Now Playing
                  </span>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 rounded hover:bg-light-hover dark:hover:bg-dark-hover"
                >
                  <X size={16} className="text-light-textMuted dark:text-dark-textMuted" />
                </button>
              </div>

              {/* Spotify Embed */}
              <div className="p-2">
                <iframe
                  src={siteConfig.spotify.embedUrl}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Collapsed "Now Live" Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          flex items-center gap-2 px-3 py-1.5 rounded-full
          text-sm transition-all duration-200
          ${
            isExpanded
              ? "bg-green-500 text-white"
              : "bg-light-hover dark:bg-dark-hover text-light-text dark:text-dark-text hover:bg-green-500/20"
          }
        `}
      >
        {/* Animated pulse indicator */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span>Now Live:</span>
        <span className="font-medium">{siteConfig.spotify.playlistName}</span>
      </button>
    </div>
  );
}
