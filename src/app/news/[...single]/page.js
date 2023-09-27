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

const SingleNews = ({ params }) => {

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
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-12 my-5'>

                    <div className='col-span-9'>

                        <h1 className='text-[30px] text-black font-semibold'>MP चुनाव के लिए बीजेपी की दूसरी लिस्ट जारी, नरेंद्र तोमर और विजयवर्गीय को भी टिकट</h1>
                        <p className='text-[20px]'>मध्य प्रदेश विधानसभा चुनाव के लिए पार्टी ने जिन सांसदों को विधानसभा चुनाव के लिए टिकट दिया है. उनमें कृषि मंत्री नरेंद्र सिंह तोमर, फग्गन सिंह कुलस्ते, प्रह्लाद पटेल, गणेश सिंह, राकेश सिंह, रीति पाठक और सांसद उदयप्रताप सिंह शामिल हैं. बीजेपी महासचिव कैलाश विजयवर्गीय को बीजेपी ने विधानसभा चुनाव में उम्मीदवार बनाया है. </p>
                        <Image
                            alt='Demo Image'
                            width={2000}
                            height={1000}
                            src={"https://akm-img-a-in.tosshub.com/aajtak/images/story/202309/28ae2a5f-9096-4856-9d9e-f964ce2c83e4-sixteen_nine_0.jpg"}
                        />
                        <div className='flex justify-between items-center mb-5 p-2 border-b bg-sky-50'>
                            <div className='flex items-center'>
                                <div className='mr-4'>
                                    <img className='rounded-full h-10' src={`https://api.dicebear.com/5.x/initials/svg?seed=Dipu`} alt="Image" />
                                </div>
                                <div>
                                    <p>रवीश पाल सिंह</p>
                                    <p>भोपाल,25 सितंबर 2023,(अपडेटेड 25 सितंबर 2023, 9:40 PM IST) </p>
                                </div>
                            </div>
                            <div className='flex space-x-8 '>
                                <p className='hover:text-red-400 cursor-pointer'><BiLike size={20} /></p>
                                <p className='hover:text-red-400 cursor-pointer'><BiCommentDetail size={20} /></p>
                                <p className='hover:text-red-400 cursor-pointer'><FaWhatsapp size={20} /></p>
                                <p className='hover:text-red-400 cursor-pointer'><BiShareAlt size={20} /></p>
                                <p className='hover:text-red-400 cursor-pointer'><CiMenuKebab size={20} /></p>
                            </div>
                        </div>
                        <div className="space-y-5 text-[20px]">
                            <p className="text-align-justify">मध्य प्रदेश विधानसभा चुनाव के लिए भारतीय जनता पार्टी ने 39 उम्मीदवारों की दूसरी लिस्ट जारी की है. केंद्रीय मंत्रीनरेंद्र सिंह तोमर को भी विधानसभा चुनाव का टिकट दिया गया है. वह दिमनी सीट से चुनाव लड़ेंगे.इन 39 उम्मीदवारों में कई सांसद भी शामिल हैं.वहीं, तीन केंद्रीय मंत्रियों को भी चुनावी मैदान में उतारा गया है.</p>

                            <p className="text-align-justify">पार्टी ने जिन सांसदों को विधानसभा चुनाव के लिए टिकट दिया है. उनमेंकृषि मंत्री नरेंद्र सिंह तोमर,फग्गनसिंह कुलस्ते, प्रह्लाद पटेल, गणेश सिंह, राकेश सिंह, रीति पाठक औरसांसद उदयप्रताप सिंह शामिल हैं. बीजेपी महासचिव कैलाश विजयवर्गीय को बीजेपी ने विधानसभा चुनाव में उम्मीदवार बनाया है.</p>

                            <p className="text-align-justify">सतना से सांसद गणेश सिंह सतना सीट से ही चुनाव लड़ेंगे. सीधी से सांसद रीति पाठक सीधी विधानसभा सीट से चुनाव लड़ेंगी.केंद्रीय मंत्री फग्गन सिंह कुलस्ते को निवास विधानसभा सीट से टिकट दिया गया है. केंद्रीय मंत्री प्रहलाद सिंह पटेल को भी चुनावी मैदान में उतारा गया है. उन्हें नरसिंहपुर से टिकट दिया गया है.</p>

                            <p className="text-align-justify">बता दें कि इससे पहलें बीजेपी ने 17 अगस्त कोपहली लिस्ट जारी की थी, जिसमें39 उम्मीदवारों के नाम की घोषणा की गई थी.बीजेपी अब तक 78 उम्मीदवारों के नाम जारी कर चुकी है.</p>

                            <p><strong>एमपी में 15 महीने में गिर गई थी कांग्रेस सरकार</strong></p>

                            <p>2018 में मध्य प्रदेश विधानसभा चुनाव में कांग्रेस को 230 सदस्यीय विधानसभा में बहुमत से दो कम 114 सीटें मिलीं थीं. वहीं, बीजेपी के खाते में 109 सीटें आई थीं. वहीं बसपा को दो जबकि अन्य को पांच सीटें मिली थीं. तब कांग्रेस ने बसपा, सपा और अन्य का साथ लेकर सरकार बनाई थी और 15 साल बाद राज्य में सत्ता पाई थी. कमलनाथ ने मुख्यमंत्री पद की शपथ ली थी.</p>

                            <p>दिसंबर 2018 से मार्च 2020 तक कांग्रेस की सरकार चली. लेकिन 15 महीने पूरे होते-होते कमलनाथ सरकार की सत्ता से विदाई तय हो गई और कई विधायक बीजेपी के साथ हो गए और फिर बीजेपी ने सत्ता में वापसी की. शिवराज सिंह चौहान फिर मुख्यमंत्री बन गए थे.</p><div id="shoppingWidget_mobile"></div>

                            <p className="edpara">मालूम हो कि 13 सितंबर को बीजेपी की केंद्रीय चुनाव समिति की बैठक हुई थी. इस बैठक में बीजेपी की दूसरी लिस्ट को हरी झंडी दी गई थी. पार्टी अध्यक्ष जेपी नड्डा की अध्यक्षता में हुई इस बैठक में पीएम नरेंद्र मोदी, गृहमंत्री अमित शाह, राजनाथ सिंह और कई वरिष्ठ नेता मौजूद थे.</p>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <Title title={"लेटेस्ट"} />

                        <div className="">
                            {
                                titleWithImage?.map((item, index) => (
                                    <Tile1 key={index} text={item.text} image={item.image} link={item.link} />
                                ))
                            }
                        </div>

                        <div>
                            <Ads1 />
                        </div>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleNews