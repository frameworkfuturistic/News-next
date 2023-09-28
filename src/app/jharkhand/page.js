import MainCategory from '@/components/category/MainCategory'
import React from 'react'

const Jharkhand = () => {
    const data = [
        { id: 1, text: "मुख्यमंत्री के निर्देश का असर, लापता बिरहोर माता-पिता की दो बेटियों का स्कूल में हुआ एडमिशन", link: "/jharkhand/abc", image: "https://picsum.photos/id/364/2000/1000" },
        { id: 2, text: "कारोबारी पुनीत अग्रवाल के ठिकोनों पर जीएसटी का छापा ", link: "/jharkhand/abc", image: "https://picsum.photos/id/532/200/100" },
        { id: 3, text: "रिपीट हुई 'हम दिल दे चुके सनम' की स्टोरी, पति ने पत्नी को प्रेमी संग किया विदा", link: "/jharkhand/abc", image: "https://picsum.photos/id/574/200/100" },
        { id: 4, text: "निज्जर की हत्या के बाद खालिस्तानी तत्वों को सावधान कर रहा FBI! न्यूज रिपोर्ट में दावा", link: "/jharkhand/abc", image: "https://picsum.photos/id/334/200/100" },
        { id: 5, text: "LIVE:  राघव-परिणीति की शादी, संगीत में थिरके 'दूल्हा-दुल्हन', सामने आई पहली तस्वीर", link: "/jharkhand/abc", image: "https://picsum.photos/id/368/200/100" },
        { id: 6, text: " मैदान पर तूफान मचाने आ रहा द्रविड़ का बेटा, इस टीम में हुआ सेलेक्शन ", link: "/jharkhand/abc", image: "https://picsum.photos/id/236/200/100" },
    ]
    return (
        <>
            <MainCategory data={data} name={"झारखंड"} />
        </>
    )
}

export default Jharkhand