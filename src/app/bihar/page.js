import MainCategory from '@/components/category/MainCategory'
import React from 'react'

function Bihar() {

    const data = [
        { id: 1, text: "सीएम नीतीश कुमार आज बांका और जमुई जिले के दौरे पर", link: "/bihar/abc", image: "https://picsum.photos/id/234/2000/1000" },
        { id: 2, text: " मैदान पर तूफान मचाने आ रहा द्रविड़ का बेटा, इस टीम में हुआ सेलेक्शन ", link: "/bihar/abc", image: "https://picsum.photos/id/324/200/100" },
        { id: 3, text: "सीएम नीतीश कुमार आज बांका और जमुई जिले के दौरे पर", link: "/bihar/abc", image: "https://picsum.photos/id/543/200/100" },
        { id: 4, text: "निज्जर की हत्या के बाद खालिस्तानी तत्वों को सावधान कर रहा FBI! न्यूज रिपोर्ट में दावा", link: "/bihar/abc", image: "https://picsum.photos/id/345/200/100" },
        { id: 5, text: "LIVE:  राघव-परिणीति की शादी, संगीत में थिरके 'दूल्हा-दुल्हन', सामने आई पहली तस्वीर", link: "/bihar/abc", image: "https://picsum.photos/id/452/200/100" },
        { id: 6, text: " मैदान पर तूफान मचाने आ रहा द्रविड़ का बेटा, इस टीम में हुआ सेलेक्शन ", link: "/bihar/abc", image: "https://picsum.photos/id/654/200/100" },
    ]

    return (
        <>
            <MainCategory name={"बिहार"} data={data} />
        </>
    )
}

export default Bihar