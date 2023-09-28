"use client"
import { Noto_Sans_Devanagari } from 'next/font/google';
import React from 'react'
import { useRouter } from "next/navigation";

const notoSans = Noto_Sans_Devanagari({
    weight: '700',
    subsets: ['latin'],
    display: 'swap'
})

const data = [
    { id: 1, text: "LIVE:  राघव-परिणीति की शादी, संगीत में थिरके 'दूल्हा-दुल्हन', सामने आई पहली तस्वीर", link: "/abc", image: "https://picsum.photos/id/344/200/100" },
    { id: 2, text: " मैदान पर तूफान मचाने आ रहा द्रविड़ का बेटा, इस टीम में हुआ सेलेक्शन ", link: "/abc", image: "https://picsum.photos/id/524/200/100" },
    { id: 3, text: "रिपीट हुई 'हम दिल दे चुके सनम' की स्टोरी, पति ने पत्नी को प्रेमी संग किया विदा", link: "/abc", image: "https://picsum.photos/id/424/200/100" },
    { id: 4, text: "निज्जर की हत्या के बाद खालिस्तानी तत्वों को सावधान कर रहा FBI! न्यूज रिपोर्ट में दावा", link: "/abc", image: "https://picsum.photos/id/464/200/100" },
    { id: 5, text: "LIVE:  राघव-परिणीति की शादी, संगीत में थिरके 'दूल्हा-दुल्हन', सामने आई पहली तस्वीर", link: "/abc", image: "https://picsum.photos/id/454/200/100" },
    { id: 6, text: " मैदान पर तूफान मचाने आ रहा द्रविड़ का बेटा, इस टीम में हुआ सेलेक्शन ", link: "/abc", image: "https://picsum.photos/id/584/200/100" },
]

const LatestNewsWithImage = ({ image, text, link }) => {
    const route = useRouter()


    const truncatedText = (text) => text.length > 60 ? `${text.slice(0, 50)}` : text;
    return (
        <>
            {
                data?.map((item, index) => (

                    <div key={index} onClick={() => route.push(item.link)} className='flex items-start w-full mt-0 m-2 cursor-pointer hover:bg-gray-100'>
                        <img className='h-16 w-32 border' src={item.image} alt="Test Image" srcset="" />
                        <p className={` ${notoSans.className} w-full text-md text-gray-800 mx-1`}>{truncatedText(item?.text)}</p>
                    </div>
                ))
            }
        </>
    )
}

export default LatestNewsWithImage