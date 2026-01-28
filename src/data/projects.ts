// ========================================
// YOUR PROJECTS DATA - EDIT THIS FILE!
// ========================================
// Add your projects below. Each project can have images OR videos (or both).
//
// For images: Add files to /public/images/ and reference them as "/images/filename.jpg"
// For videos: Use YouTube/Vimeo embed URLs or local files in /public/videos/

export type ProjectType = "Video" | "Graphic Design" | "Photography" | "Creative Direction";

export interface Project {
  id: string;
  name: string;
  dateAdded: string;        // Format: "MM.DD.YYYY"
  kind: string;             // Category label shown in table (e.g., "Educational", "Commercial")
  type: ProjectType;        // Used for filtering
  title: string;            // Full project title
  category: string;         // Shown below title (e.g., "Music Video")
  year: string;             // e.g., "2024"
  description: string;      // Project description

  // MEDIA - Add your images and/or videos here
  media: {
    type: "image" | "video";
    src: string;            // URL or path (e.g., "/images/project1.jpg" or YouTube embed URL)
    thumbnail?: string;     // Optional thumbnail for videos
  }[];
}

// ========================================
// EDIT YOUR PROJECTS BELOW
// ========================================
export const projects: Project[] = [
  {
    id: "1",
    name: "IMG_8145",
    dateAdded: "10.08.1992",
    kind: "Educational",
    type: "Video",
    title: "Project Title",
    category: "Project Category",
    year: "2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    media: [
      { type: "image", src: "/images/placeholder.jpg" },
      // Add more images or videos:
      // { type: "video", src: "https://www.youtube.com/embed/VIDEO_ID", thumbnail: "/images/thumb.jpg" },
    ],
  },
  {
    id: "2",
    name: "IMG_8146",
    dateAdded: "10.08.1992",
    kind: "Educational",
    type: "Graphic Design",
    title: "Project Title 2",
    category: "Brand Identity",
    year: "2024",
    description: "Replace this with your project description. Keep it concise but informative.",
    media: [
      { type: "image", src: "/images/placeholder.jpg" },
    ],
  },
  {
    id: "3",
    name: "IMG_8147",
    dateAdded: "10.08.1992",
    kind: "Educational",
    type: "Photography",
    title: "Project Title 3",
    category: "Portrait Series",
    year: "2023",
    description: "Replace this with your project description.",
    media: [
      { type: "image", src: "/images/placeholder.jpg" },
    ],
  },
  {
    id: "4",
    name: "IMG_8148",
    dateAdded: "10.08.1992",
    kind: "Educational",
    type: "Creative Direction",
    title: "Project Title 4",
    category: "Campaign",
    year: "2023",
    description: "Replace this with your project description.",
    media: [
      { type: "image", src: "/images/placeholder.jpg" },
    ],
  },
  {
    id: "5",
    name: "IMG_8149",
    dateAdded: "10.08.1992",
    kind: "Educational",
    type: "Video",
    title: "Project Title 5",
    category: "Music Video",
    year: "2023",
    description: "Replace this with your project description.",
    media: [
      { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
  },
  // ========================================
  // ADD MORE PROJECTS BELOW
  // Copy the template above and customize
  // ========================================
];

// ========================================
// SITE CONFIGURATION - EDIT THESE
// ========================================
export const siteConfig = {
  // Your name/brand
  name: "Eric Nguyen",

  // Social links (leave empty string to hide)
  instagram: "@ericnguyen01_",
  email: "eric@familyaffairsla.com",

  // Copyright year
  copyrightYear: "2026",

  // "Now Live" feature - Spotify playlist
  // Get embed URL: Open Spotify > Share > Embed > Copy the src URL
  spotify: {
    enabled: true,
    playlistName: "SUNBEAM",
    // Replace with your Spotify embed URL:
    embedUrl: "https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID?utm_source=generator&theme=0",
  },
};
