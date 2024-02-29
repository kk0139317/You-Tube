import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../shared/VideoLength";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            src={video?.thumbnails[0]?.url}
            alt="thumbnails"
            className="h-full w-full object-fill "
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>

        <div className="flex text-black dark:text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                src={video?.author?.avatar[0]?.url}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              {video?.title}
            </span>

            <span className="text-[12px] font-semibold mt-2 text-black/[0.7] dark:text-white/[0.7] flex items-center">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-black/[0.7] dark:text-white/[0.5] text-[12px] ml-1" />
              )}
            </span>

            <div className="flex text-[12px] font-semibold text-black/[0.7] dark:text-white/[0.7] truncate overflow-hidden">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="flex text-[24px] text-black/[0.7] dark:text-white/[0.7] font-bold leading-none relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;


// import React from "react";

// const VideoCard = () => {
//   // Hardcoded data for demonstration
//   const video = {
//     title: "Sample Video",
//     thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASmfxxJ06IShZqj57OlTyLBU8cz2p5Cj6vg&usqp=CAU",
//     views: "2M views",
//     uploadDate: "1 week ago",
//     description: "This is a sample video description to show how you can structure a video card without fetching data from an API."
//   };

//   return (
//     <div className="video-card" style={{ width: "300px", border: "1px solid #ddd", padding: "10px", borderRadius: "8px", margin: "10px" }}>
//       <img src={video.thumbnail} alt="Thumbnail" style={{ width: "100%", height: "auto", borderRadius: "6px" }} />
//       <h3 style={{ marginTop: "10px" }}>{video.title}</h3>
//       <p style={{ marginTop: "5px", fontSize: "0.9rem", color: "#666" }}>{video.views} • {video.uploadDate}</p>
//       <p style={{ marginTop: "5px", fontSize: "0.9rem" }}>{video.description}</p>
//     </div>
//   );
// };

// export default VideoCard;
