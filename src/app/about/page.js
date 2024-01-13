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
                <h2 className="mb-4 text-2xl">Our Mission</h2>
                <p>Your Company Name is on a mission to [briefly state your company`&apos;`s mission or purpose]. We believe in
                    [core beliefs or principles], driving us to [specific goals or outcomes].</p>
            </section>

            <section className="mx-4 mb-8">
                <h2 className="mb-4 text-2xl">What Sets Us Apart</h2>
                <ul className="list-disc pl-6">
                    <li><strong>Innovation:</strong> We pride ourselves on being at the forefront of [industry-specific
                            innovation or technology].</li>
                    <li><strong>Sustainability:</strong> Committed to a greener future, we integrate eco-friendly practices
                        into every aspect of our work, creating [describe your eco-friendly products or services].</li>
                    <li><strong>Quality Craftsmanship:</strong> Our team of skilled workers ensures that every project,
                        whether it is building garden rooftops or [other services], meets the highest standards of quality.</li>
                </ul>
            </section>

            <section className="mx-4 mb-8">
                <h2 className="mb-4 text-2xl">Our Team</h2>
                <p>Meet the faces behind Your Company Name — a team of dedicated professionals passionate about [industry or
                    mission]. Our diverse team brings together expertise in [relevant fields], creating a dynamic and
                    innovative environment.</p>
                <ul className="list-disc pl-6">
                    <li>[Team Member 1 Name and Position]</li>
                    <li>[Team Member 2 Name and Position]</li>
                    <li>[Team Member 3 Name and Position]</li>
                </ul>
            </section>

            <section className="mx-4 mb-8">
                <h2 className="mb-4 text-2xl">Get in Touch</h2>
                <p>We are excited to embark on this journey with you. Whether you are looking to transform your space with a
                    garden rooftop or [other services], we are here to bring your vision to life.</p>
                <p>[Include Contact Information]</p>
            </section>

            <footer className="py-8 text-center text-gray-500">
                <p>Thank you for considering Your Company Name. Let`&apos;`s create something extraordinary together!</p>
            </footer>
        </div>)

        :

        (
            <Loading />
        )
    )
}