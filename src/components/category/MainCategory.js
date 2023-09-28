import React from 'react'
import Container from '../Container'
import Tile1 from '../tiles/Tile1'
import Title from '../Titile'
import LatestNewsWithImage from '../tiles/LatestNewsWithImage'
import Image from 'next/image'
import Ads1 from '../ads/Ads1'


const MainCategory = ({ name }) => {

    const data = [
        { id: 1, text: "LIVE:  राघव-परिणीति की शादी, संगीत में थिरके 'दूल्हा-दुल्हन', सामने आई पहली तस्वीर", link: "/abc", image: "https://picsum.photos/id/344/2000/1000" },
        { id: 2, text: " मैदान पर तूफान मचाने आ रहा द्रविड़ का बेटा, इस टीम में हुआ सेलेक्शन ", link: "/abc", image: "https://picsum.photos/id/524/200/100" },
        { id: 3, text: "रिपीट हुई 'हम दिल दे चुके सनम' की स्टोरी, पति ने पत्नी को प्रेमी संग किया विदा", link: "/abc", image: "https://picsum.photos/id/424/200/100" },
        { id: 4, text: "निज्जर की हत्या के बाद खालिस्तानी तत्वों को सावधान कर रहा FBI! न्यूज रिपोर्ट में दावा", link: "/abc", image: "https://picsum.photos/id/464/200/100" },
        { id: 5, text: "LIVE:  राघव-परिणीति की शादी, संगीत में थिरके 'दूल्हा-दुल्हन', सामने आई पहली तस्वीर", link: "/abc", image: "https://picsum.photos/id/454/200/100" },
        { id: 6, text: " मैदान पर तूफान मचाने आ रहा द्रविड़ का बेटा, इस टीम में हुआ सेलेक्शन ", link: "/abc", image: "https://picsum.photos/id/584/200/100" },
    ]

    return (
        <>
            <Container>

                <div className='grid grid-cols-1 md:grid-cols-12'>
                    {/* <div className='col-span-9'>
                        <Title title={name} />
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                            {data?.map((item, index) => (
                                <div key={index} className={`shadow border border-gray-200 hover:opacity-80 cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                                    <Image src={item.image} width={2000} height={2000} />
                                    <div className={` ${index == 0 ? 'h-0 bg-red-100' : 'h-20 bg-white'} `}>
                                        <p className='font-semibold p-2'>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    <div className='col-span-9'>
                        <Title title={name} />
                        <div className='space-y-4'>

                            <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
                                <div className='col-span-1 md:col-span-8 relative'>
                                    <Image src={"https://picsum.photos/id/364/2000/1000"} width={2000} height={1000} />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center p-4">
                                        <p className="font-semibold text-xs md:text-2xl">रिपीट हुई 'हम दिल दे चुके सनम' की स्टोरी, पति ने पत्नी को प्रेमी संग किया विदा</p>
                                    </div>
                                </div>

                                <div className='col-span-1 md:col-span-4'>
                                    <Image src={"https://picsum.photos/id/365/2000/1000"} width={2000} height={2000} />
                                    <p className='font-semibold p-2'>{"रिपीट हुई 'हम दिल दे चुके सनम' की स्टोरी, पति ने पत्नी को प्रेमी संग किया विदा"}</p>
                                </div>

                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                                {data?.map((item, index) => (
                                    <div key={index} className='shadow border border-gray-200 hover:opacity-80 cursor-pointer'>
                                        <Image src={item.image} width={2000} height={2000} />
                                        <div className='h-20 bg-white '>
                                            <p className='font-semibold p-2'>{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <Title title={"लेटेस्ट"} />
                        <LatestNewsWithImage />
                        <Ads1 />
                    </div>
                </div>
            </Container>

        </>
    )
}

export default MainCategory