"use client"
import { useRouter } from "next/navigation";
import { GoDotFill } from "react-icons/go";

const LiveUpdates = ({ news, link, time }) => {
    
  const route = useRouter()
    return (
      <>
        <div className="">
          <div className="flex">
            <GoDotFill color="red" size={20} />
            <p className="font-semibold text-xs text-gray-900 flex items-center">{time}</p>
          </div>
          <div className="">
            <p onClick={() => route.push(link)} className="m-2 px-2 border-l border-gray-300 text-sm text-gray-600 hover:text-gray-800 hover:font-semibold  cursor-pointer">{news}</p>
          </div>
  
        </div>
      </>
    )
  }

  export default LiveUpdates