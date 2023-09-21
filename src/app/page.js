'use client'
import Tile1 from "@/components/tiles/Tile1";
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';

export default function Home() {
  const [showBreakingNewsTitle, setShowBreakingNewsTitle] = useState(true)
  return (
    <>

      {
        showBreakingNewsTitle &&
        <div className="flex justify-between items-center bg-red-600 text-white rounded-3xl px-4 py-1 m-4 cursor-pointer font-semibold">
          <div>
            <span className="italic">BREAKING NEWS</span>
            <span className="border border-r mx-2"></span>
            <span>राज्यसभा में भी महिला आरक्षण विधेयक पारित, महिला सांसदों ने PM मोदी के साथ मनाया जश्न</span>
          </div>
          <AiOutlineClose onClick={() => setShowBreakingNewsTitle(false)} size={20} />
        </div>
      }

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>
        <div className="space-y-5">
          <Tile1 />
          <Tile1 />
          <Tile1 />
        </div>
      </div>
    </>
  )
}