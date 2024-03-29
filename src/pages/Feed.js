import React, { useContext, useEffect } from "react";

import { DataContext } from "../context/contextApi";
import LeftNav from "../components/LeftNav";
import VideoCard from "../components/VideoCard";
import UseOnline from "../utils/UseOnline";
import OfflineComponent from "../shared/OfflineComponent";
import ShimmerVideoCard from "../shared/ShimmerVideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(DataContext);
  // console.log("from feed", searchResults);

  const isOnline = UseOnline();

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex h-[calc(100%-56px)]">
      <LeftNav />

      {!isOnline && (
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <OfflineComponent />
        </div>
      )}
      {isOnline && (
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {/* When loading is true means data is not fetched yet meanwhile that time show Shimmer UI 
             when data fetching is done means loading is false and that means we get searchResults then show the data in the dom */}
            {loading
              ? Array(24)
                  .fill("")
                  .map((e, index) => {
                    return <ShimmerVideoCard key={index} />;
                  })
              : searchResults.map((item, index) => {
                  if (item.type !== "video") return false;
                  return <VideoCard key={index} video={item?.video} />;
                  // i allways prefered to pass unique key that i got from the api and that is standered way also but for this api some unique key like videoId present twice and more in the searchResults, i don't khow why. So, forcefully i chose map index :(
                })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;


// import React from "react";
// import LeftNav from "../components/LeftNav"; // Assuming you have this component
// import VideoCard from "../components/VideoCard"; // Ensure this is the path to your VideoCard component
// import Thumbnail from "../assets/net.jpg";

// const Feed = () => {
//   // Hardcoded array of videos for demonstration
//   const videos = [
//     {
//       id: 1,
//       title: "First Video",
//       thumbnail: "https://semupdates.com/wp-content/uploads/2017/09/video-marketing-how-to-create-a-quick-youtube-campaign-in-just-30-minutes.jpg",
//       views: "1M views",
//       uploadDate: "2 weeks ago",
//       description: "This is the first video in the feed."
//     },
//     {
//       id: 2,
//       title: "Second Video",
//       thumbnail: "https://via.placeholder.com/210x118",
//       views: "500K views",
//       uploadDate: "1 month ago",
//       description: "This is the second video in the feed."
//     },
//     {
//       id: 3,
//       title: "First Video",
//       thumbnail: "https://via.placeholder.com/210x118",
//       views: "1M views",
//       uploadDate: "2 weeks ago",
//       description: "This is the first video in the feed."
//     },
//     {
//       id: 4,
//       title: "Second Video",
//       thumbnail: "https://via.placeholder.com/210x118",
//       views: "500K views",
//       uploadDate: "1 month ago",
//       description: "This is the second video in the feed."
//     },
//     {
//       id: 5,
//       title: "First Video",
//       thumbnail: "https://via.placeholder.com/210x118",
//       views: "1M views",
//       uploadDate: "2 weeks ago",
//       description: "This is the first video in the feed."
//     },
//     {
//       id: 6,
//       title: "Second Video",
//       thumbnail: "https://via.placeholder.com/210x118",
//       views: "500K views",
//       uploadDate: "1 month ago",
//       description: "This is the second video in the feed."
//     },
//     // Add more video objects as needed...
//   ];

//   return (
//     <div className="flex h-[calc(100%-56px)]">
//       <LeftNav />
//       <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
//           {videos.map((video) => (
//             // Assuming VideoCard component accepts props for video details
//             <VideoCard key={video.id} {...video} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feed;
