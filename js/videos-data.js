/* ==========================================================================
   TECHNOPEDIA ARABIA — Videos data
   Add a new video by copying an object below.
   - youtubeId: the part after "watch?v=" in any YouTube URL
     e.g. https://www.youtube.com/watch?v=XXXXXXXXXXX  ->  youtubeId: "XXXXXXXXXXX"
   - All videos below use a placeholder ID ("jNQXAC9IVRw") — REPLACE with your
     real video IDs. Thumbnail is auto-generated from the YouTube ID, no need
     to upload separate thumbnail images.
   ========================================================================== */

const videosData = [
  {
    id: "how-to-arduino",
    youtubeId: "gB7_gSdMNRM",
    title: {
      ar: "Arduino UNO, 2, 3 ... الجزء 1",
      en: "Arduino UNO, Two, Three ... Part 1",
    },
    desc: {
      ar: "سنسير معاً لنعرف أساسيات الأردوينو: المكونات وبرنامج البرمجة وأول مشروع خطوة بخطوة",
      en: "A full walkthrough of Arduino fundamentals: hardware, the IDE, and your first hands-on project step by step.",
    },
  }
];

if (typeof window !== "undefined") window.videosData = videosData;
