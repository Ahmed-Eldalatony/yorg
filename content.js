let videos = [];

const callback = videos => console.log("Scraped Videos: ==== ", videos);

// Function to scrape videos
function scrapeVideos() {
  document.querySelectorAll("ytd-playlist-video-renderer").forEach(video => {
    const title = video.querySelector("#video-title")?.innerText;
    const image = video.getElementsByTagName("img")[0]?.src;

    // Only add new videos (avoid duplicates)
    if (!videos.some(v => v.image === image)) {
      videos.push({ title, image });
      callback(videos);
    }
  });
}

// Function to scroll down and scrape until 300 videos are collected
// async function autoScrollAndScrape() {
//   let lastHeight = 0;
//
//   while (videos.length < 300) {
//     scrapeVideos();
//
//     // Scroll down smoothly
//     window.scrollBy(0, 1000);
//
//     // Wait for new content to load
//     await new Promise(resolve => setTimeout(resolve, 400));
//
//     // Check if we are still loading new content
//     let newHeight = document.documentElement.scrollHeight;
//     if (newHeight === lastHeight) {
//       console.log("Reached bottom, stopping...");
//       break;
//     }
//     lastHeight = newHeight;
//   }
//
//   console.log("✅ Collected 300 videos!", videos);
// }
//
// // Start the script
// autoScrollAndScrape();
