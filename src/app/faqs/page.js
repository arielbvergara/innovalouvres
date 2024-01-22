'use client'
import { ContentContext } from "@/components/app";
import Loading from "@/components/loading";
import { useContext, useEffect, useState } from "react";

export default function Faqs({}) {

    const contentContext = useContext(ContentContext)
    const [faqsContent, setFaqsContent] = useState(null);

    useEffect(() => {
        if (contentContext && contentContext.data?.pages?.faqs){
            setFaqsContent(contentContext.data.pages.faqs)
        }        
    }, [contentContext]);

    return(
        faqsContent ? 
        <div className="container mx-auto min-h-[--body-min-height]">
            <header className="py-8 text-center">
                <h1 className="text-4xl">{faqsContent.title}</h1>
                <span className="text-lg">{faqsContent.subTitle}</span>
            </header>
            {
                faqsContent.faqs.map((item, index) => { return (
                    <div className="mx-4 mb-8" key={index}>
                        <h2 className="mb-1 text-2xl">{item.question}</h2>
                        <p>{item.answer}</p>        
                    </div>
                )})
            }
            <footer className="py-8 text-center text-gray-500">{faqsContent.footer}</footer>
        </div>
        :
        <Loading />
    )
}