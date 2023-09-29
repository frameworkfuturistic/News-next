import MainCategory from '@/components/category/MainCategory'
import React from 'react'

const News = () => {

    const data = [
        { id: 1, text: "LIVE:  राघव-परिणीति की शादी, संगीत में थिरके 'दूल्हा-दुल्हन', सामने आई पहली तस्वीर", link: "/news/abc", image: "https://picsum.photos/id/344/2000/1000" },
        { id: 2, text: " मैदान पर तूफान मचाने आ रहा द्रविड़ का बेटा, इस टीम में हुआ सेलेक्शन ", link: "/news/abc", image: "https://picsum.photos/id/524/200/100" },
        { id: 3, text: "रिपीट हुई 'हम दिल दे चुके सनम' की स्टोरी, पति ने पत्नी को प्रेमी संग किया विदा", link: "/news/abc", image: "https://picsum.photos/id/424/200/100" },
        { id: 4, text: "निज्जर की हत्या के बाद खालिस्तानी तत्वों को सावधान कर रहा FBI! न्यूज रिपोर्ट में दावा", link: "/news/abc", image: "https://picsum.photos/id/464/200/100" },
        { id: 5, text: "LIVE:  राघव-परिणीति की शादी, संगीत में थिरके 'दूल्हा-दुल्हन', सामने आई पहली तस्वीर", link: "/news/abc", image: "https://picsum.photos/id/454/200/100" },
        { id: 6, text: " मैदान पर तूफान मचाने आ रहा द्रविड़ का बेटा, इस टीम में हुआ सेलेक्शन ", link: "/news/abc", image: "https://picsum.photos/id/584/200/100" },
        { id: 7, text: " मैदान पर तूफान मचाने आ रहा द्रविड़ का बेटा, इस टीम में हुआ सेलेक्शन ", link: "/news/abc", image: "https://picsum.photos/id/584/200/100" },
        { id: 8, text: "निज्जर की हत्या के बाद खालिस्तानी तत्वों को सावधान कर रहा FBI! न्यूज रिपोर्ट में दावा", link: "/news/abc", image: "https://picsum.photos/id/464/200/100" },
    ]

    return (
        <MainCategory data={data} name={"मुख्य समाचार"} />
    )
}

export default News

export const metadata = {
    title: 'Latest News - Naxatra News Hindi.com',
    description: 'Latest Bihar News',
  }