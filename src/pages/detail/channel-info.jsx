import millify from "millify"
import { AiOutlineDislike , AiOutlineLike} from "react-icons/ai"

const ChannelInfo = ({video}) => {
  return (
    <div className="flex justify-between items-center">
      {/* Sol */}
      <div className="flex items-center gap-5 ">
        <div className="flex gap-2 items-center sm-gap-4">
          <img src={video?.channelThumbnail[0]?.url} className="rounded-full size-10 sm:size-12" />

          <div>
            <h4 className="font-bold">{video?.channelTitle}</h4>
            <p className="text-gray-400">{video?.subscriberCountText}</p>
          </div>
        </div>
          <button className="bg-white py-1 px-4 text-black rounded-full">Abone Ol</button>
      </div>

      {/* sag */}
      <div className="flex items-center bg-[#272727] cursor-pointer max-sm:w-fit rounded-full">
        <div className="flex py-2 px-3 sm:px-4 items-center gap-2 font-bold border-r border-gray-500">
          <AiOutlineLike />
          <span className="text-sm">{millify(video.likeCount)}</span>
        </div>
        <div className="py-1 px-3 sm:px-4">
          <AiOutlineDislike />
        </div>
      </div>

    </div>
  )
}

export default ChannelInfo