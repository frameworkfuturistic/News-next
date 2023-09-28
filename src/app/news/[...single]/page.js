"use client"

import Container from '@/components/Container'
import Title from '@/components/Titile'
import Tile1 from '@/components/tiles/Tile1'
import Image from 'next/image'
import React from 'react'
import { BiLike, BiCommentDetail, BiShareAlt } from 'react-icons/bi'
import { FaWhatsapp } from 'react-icons/fa'
import { CiMenuKebab } from 'react-icons/ci'
import Ads1 from '@/components/ads/Ads1'
import SinglePageNews from '@/components/news/SinglePageNews'

const SingleMainNews = ({ params }) => {

    console.log("params", params)

    const titleWithImage = [
        { id: 1, text: "LIVE:  राघव-परिणीति की शादी, संगीत में थिरके 'दूल्हा-दुल्हन', सामने आई पहली तस्वीर", link: "/abc", image: "https://picsum.photos/id/344/200/100" },
        { id: 2, text: " मैदान पर तूफान मचाने आ रहा द्रविड़ का बेटा, इस टीम में हुआ सेलेक्शन ", link: "/abc", image: "https://picsum.photos/id/524/200/100" },
        { id: 3, text: "रिपीट हुई 'हम दिल दे चुके सनम' की स्टोरी, पति ने पत्नी को प्रेमी संग किया विदा", link: "/abc", image: "https://picsum.photos/id/424/200/100" },
        { id: 4, text: "निज्जर की हत्या के बाद खालिस्तानी तत्वों को सावधान कर रहा FBI! न्यूज रिपोर्ट में दावा", link: "/abc", image: "https://picsum.photos/id/464/200/100" },
        { id: 5, text: "LIVE:  राघव-परिणीति की शादी, संगीत में थिरके 'दूल्हा-दुल्हन', सामने आई पहली तस्वीर", link: "/abc", image: "https://picsum.photos/id/454/200/100" },
        { id: 6, text: " मैदान पर तूफान मचाने आ रहा द्रविड़ का बेटा, इस टीम में हुआ सेलेक्शन ", link: "/abc", image: "https://picsum.photos/id/584/200/100" },
    ]


    return (
        <>
            <SinglePageNews />
        </>
    )
}

export default SingleMainNews