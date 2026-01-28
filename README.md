# Eric Nguyen Portfolio

A macOS Finder-inspired portfolio site built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

---

## How to Customize

### Adding Your Projects

Edit the file: **`src/data/projects.ts`**

```typescript
{
  id: "1",
  name: "My Project",           // Filename shown in table
  dateAdded: "01.15.2024",     // Date format: MM.DD.YYYY
  kind: "Commercial",           // Category shown in Kind column
  type: "Video",                // Filter category
  title: "My Project Title",    // Full title
  category: "Music Video",      // Subtitle
  year: "2024",
  description: "Your description here...",
  media: [
    { type: "image", src: "/images/your-image.jpg" },
    { type: "video", src: "https://www.youtube.com/embed/VIDEO_ID" },
  ],
}
```

### Adding Images

1. Put your images in: **`public/images/`**
2. Reference them as: `/images/filename.jpg`

### Adding Videos

For YouTube/Vimeo, use the embed URL:
- YouTube: `https://www.youtube.com/embed/VIDEO_ID`
- Vimeo: `https://player.vimeo.com/video/VIDEO_ID`

### Customizing Your Info

In **`src/data/projects.ts`**, edit `siteConfig`:

```typescript
export const siteConfig = {
  name: "Your Name",
  instagram: "@yourhandle",
  email: "your@email.com",
  copyrightYear: "2024",
  spotify: {
    enabled: true,
    playlistName: "Your Playlist",
    embedUrl: "YOUR_SPOTIFY_EMBED_URL",
  },
};
```

### Customizing Colors

Edit: **`tailwind.config.ts`**

### Customizing Your Logo

Replace the SVG in: **`src/components/Sidebar.tsx`** and **`src/components/MobileSidebar.tsx`**

---

## Deployment

### Option 1: Vercel (Recommended - FREE)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo
4. Deploy!

### Option 2: Netlify (FREE)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repo
4. Deploy!

### Connecting Your Domain

After deploying, add your custom domain (`ericnguyen01.com`) in:
- Vercel: Project Settings → Domains
- Netlify: Site Settings → Domain Management

---

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide Icons** - Icons
