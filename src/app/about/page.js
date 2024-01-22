'use client'

import { ContentContext } from "@/components/app"
import Loading from "@/components/loading";
import { useContext, useEffect, useState } from "react"

export default function About({}) {

    const contentContext = useContext(ContentContext)
    const [aboutContent, setAboutContent] = useState(null);

    useEffect(() => {
        if (contentContext && contentContext.data?.pages?.about){
            setAboutContent(contentContext.data.pages.about)
        }
    }, [contentContext]);

    return (
        aboutContent ? 
        (<div className="container mx-auto min-h-[--body-min-height]">
            <header className="py-8 text-center">
                <h1 className="text-4xl">{aboutContent.title}</h1>
            </header>

            <section className="mx-4 mb-8">
            <h2 className="mb-4 text-2xl">About</h2>

                At Innovalouvres we specialize in Motorised Roof Louvres. Our NZ made and designed system is considered one of the best systems in the louvre industry and has been around for more than 15 years, with regular upgrades to the system over the years. Our fabricators, installers and engineering team have multiple decades of experience in the industry combined. The louvre system is powered by european controls and with a modern and stylish design, this is a fantastic option for creating an all season outdoor living space by controlling the weather. Great for shade, letting the sun in and protecting yourself from the rain; all in a day`&apos;`s NZ weather.
                <br /><br />
                By adding one of our louvred roofs you are adding extra space to live outdoors, you get to control the weather while elevating the visual appeal of your home with its sophisticated and modern design, and you increase your property value in the process.
            </section>

            <section className="mx-4 mb-8">
                <h2 className="mb-4 text-2xl">Innovalouvres&apos; noticeable quality</h2>
                <ul className="list-disc pl-6">
                    <li><strong>NZ Made and Designed Louvre systems:</strong> All our louvre systems were designed by a Professional Chartered Structural engineer with over 30 years of experience in the New Zealand aluminium industry, together with other engineers, lead fabricators and installers with similar years in experience. On top of that, the expertise of New Zealand&apos;s biggest and best aluminium extrusion companies was consulted to create our superior louvre systems. The result is our SR200 Motorised Roof Louvre, the best quality and durability you can ask for.</li>
                    <li><strong> Powder coating: </strong>Our system was designed to withstand NZ weather conditions and powder coating is a huge part of this. We prefer using Dulux powder coating. Dulux has several ranges of powder coating available, among which Duralloy (10 year warranty) and Duratec (20 year warranty) are the most popular ones in the aluminium industry. Innovalouvres uses Dulux Duratec (20 year warranty) powder coating as a standard. We could have decided to use lower quality powder coatings too, but we believe so much in our system&apos;s durability that we expect it to need the 20 years of protection at the very least.</li>
                    <li><strong>Fixings:</strong>At Innovalouvres we only use stainless steel fixings. 304 will be used when the stainless-steel fixing is unexposed and 316 when exposed. However, the location of the louvre adds a variable to this decision-making process, ie; if you live next to the salty ocean, we will use 316 stainless steel only. Small details that make the difference in the long run.</li>
                    <li><strong>Fabrication:</strong>We do our own fabrication. This allows us to be more specific and give much more attention to detail. Our fabrication team has over 20 years of experience in the aluminium louvre and building industry and can handle any custom job. What&apos;s more, our director likes to fabricate too! So you know this process will have an very high level of oversight.</li>
                    <li><strong>Installation:</strong>Our Fab team does the installation as well. This means that our team is fully immersed in the complete process of each of our jobs. We don&apos;t like to give our team simple instructions, but rather like them involved and thinking for themselves. This way we create a model where our employees are happy as well as proud of their job. Having happy and proud employees is a pathway and one of the key aspects to being able to deliver high quality systems.</li>
                </ul>
            </section>

            <footer className="py-8 text-center text-gray-500">
                <p>Thank you for considering Innovalouvres Let&apos;s create something extraordinary together!</p>
            </footer>
        </div>)
        :
        (
            <Loading />
        )
    )
}