'use client'
import Tile1 from "@/components/tiles/Tile1";
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { TbReload } from 'react-icons/tb';
import { GoDotFill } from 'react-icons/go';

export default function Home() {
  const [showBreakingNewsTitle, setShowBreakingNewsTitle] = useState(true)

  const textNewsData = [
    { id: 1, type: "video", link: "", text: "दमदार हेलमेट... Airbag से लैस खास रेसिंग सूट...पैरो में बूट! किसी योद्धा की तरह ट्रैक पर उतरते हैं MotoGP राइडर्स" },
    { id: 2, type: "", link: "", text: "8 साल से कार में रह रहा शख्स, बताया अब तक कौन से फायदे हुए" },
    { id: 3, type: "image", link: "", text: "Asian Games 2023 IND-W Vs BAN-W: क्रिकेट में मिलेगा गोल्ड! बांग्लादेश को हराकर फाइनल में पहुंची टीम इंडिया, अब पाकिस्तान से हो सकती है टक्कर" },
    { id: 4, type: "video", link: "", text: "PM मोदी आज 9 वंदे भारत एक्सप्रेस को दिखाएंगे हरी झंडी, इन 11 राज्यों से गुजरेगी हाइटेक ट्रेन" },
  ]

  const liveUpdate = [
    { id: 1, time: "11:30 AM", news: "26 सितंबर को G20 यूनिवर्सिटी कनेक्ट कार्यक्रम', मन की बात में बोले पीएम मोदी" },
    { id: 2, time: "11:14 AM", news: "चंद्रयान की सफलता से भारतीयों को गहरा लगाव', मन की बात में बोले पीएम मोदी" },
    { id: 3, time: "11:04 AM", news: "एशियन गेम्स में भारत की पुरुष हॉकी टीम ने उज्बेकिस्तान को 16-0 से हराया" },
  ]

  return (
    <>

      { // Breaking News
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

      <div className="grid grid-cols-1 md:grid-cols-12">  {/*This is main Grid = Total Grid is 4*/}

        <div className="col-span-1 md:col-span-3"> {/*This Grid 1 */}
          <h1>सबूत सौंपने की बात आई तो पैंतरेबाजी पर उतरे ट्रूडो, बोले- कनाडा ने कई सप्ताह पहले भारत को दिए थे साक्ष्य</h1>
          <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202309/justin_trudeau-sixteen_nine.png?size=948:533" alt="Test Image" />
          <p>कनाडा के प्रधानमंत्री जस्टिन ट्रूडो भारत को सबूत पेश करने के मामले पैंतरेबाजी कर रहे हैं. ट्रूडो ने अब कहा है कि कनाडा ने "कई सप्ताह पहले" भारत के साथ...</p>
        </div>

        <div className="col-span-1 md:col-span-4"> {/*This Grid 2 */}
          <div className="space-y-5">
            <Tile1 />
            <Tile1 />
            <Tile1 />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 space-y-4"> {/*This Grid 3 */}
          {
            textNewsData?.map((item) => (
              <div key={item.id} className="text-sm">
                <TextNews text={item?.text} />
                <p className="border-b border-gray-300"></p>
              </div>
            ))
          }

        </div>

        <div className="col-span-1 md:col-span-3 mx-2"> {/*This Grid 4 */}
          <div className="flex justify-between">
            <h1 className="font-semibold">लाइव अपडेट</h1>
            <TbReload />
          </div>
          <div>
            {
              liveUpdate?.map((item) => (
                <div key={item.id} className="text-sm">
                  <LiveUpdates time={item.time} news={item?.news} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}


const TextNews = ({ text, link, type }) => {
  return (
    <>
      <div>
        {text}
      </div>
    </>
  )
}

const LiveUpdates = ({ news, link, time }) => {
  return (
    <>
      <div className="">
        <div className="flex">
          <GoDotFill color="red" size={20} />
          <p className="font-semibold text-xs text-gray-900 flex items-center">{time}</p>
        </div>
        <div className="">
          <p className="m-2 px-2 border-l border-gray-300 text-sm text-gray-600 hover:text-gray-800 hover:font-semibold  cursor-pointer">{news}</p>
        </div>

      </div>
    </>
  )
}