IMAGES FOLDER — Anneke van Tilburg Website
==========================================

All placeholder images currently load from picsum.photos (a free image service).
Replace them by dropping real photos into this folder and updating the src attributes
in the HTML files.

Suggested file names and locations:
-------------------------------------

HERO
  hero-poster.jpg        — Full-screen hero background (min 1920×1080px)
  hero.mp4               — Looping hero video (muted, autoplay, MP4)

ABOUT
  anneke-portrait.jpg    — Warm personal portrait of Anneke
  studio-1.jpg           — Anneke painting in the studio
  studio-2.jpg           — Anneke behind the DJ decks
  studio-3.jpg           — Anneke coaching / in nature

PAINTINGS (gallery + painting page)
  painting-1.jpg through painting-12.jpg (or more)
  Use descriptive names: "untitled-i.jpg", "wild-green.jpg", etc.

WORKSHOPS
  workshop-hero.jpg      — People painting in a workshop
  workshop-process.jpg   — Close-up of painting in action

DJ SETS
  dj-hero.jpg            — Atmospheric dark DJ photo
  dj-portrait.jpg        — Anneke behind the decks

FARM DANCES
  farm-hero.jpg          — Open-air dance / nature photo
  farm-1.jpg through farm-4.jpg — Event gallery photos

COACHING
  coaching-hero.jpg      — Calm nature / coaching photo
  coaching-process.jpg   — Anneke walking in nature

HOW TO SWAP PLACEHOLDERS
-------------------------
1. Add your image to /images/
2. In the HTML file, find the comment:
       <!--REPLACE: description of what photo goes here-->
3. Change the src from:
       src="https://picsum.photos/seed/.../width/height"
   to:
       src="../images/your-photo.jpg"
   (from within /en/ or /nl/ folders)
   or:
       src="./images/your-photo.jpg"
   (from root index.html)

IMAGE OPTIMISATION TIPS
------------------------
- Compress images to < 300KB for web (use squoosh.app or tinypng.com)
- Use WebP format where possible for better compression
- Hero image: 1920×1080px max
- Portrait/tall images: 800×1000px max
- Thumbnail/card images: 600×400px max
