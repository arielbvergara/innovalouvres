'use client'

import { ImageModal } from "@/components/imageModal";
import Loading from "@/components/loading";
import { useEffect, useState } from "react";

export default function Gallery({}) {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/content.json');
                const jsonData = await response.json();
                setData(jsonData.images);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

    return (
        <div className="container mx-auto min-h-[--body-min-height]">
            <header className="py-8 text-center">
                <h1 className="text-4xl">Gallery</h1>
            </header>

            <section className="mx-4 mb-8">
                <p className="text-lg">
                    Explore our gallery to see the beauty of our work. From garden rooftops to [other services], each project
                    is a testament to our commitment to excellence and innovation.
                </p>
            </section>
            
            {data ? (
                <section className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3">
                    {
                        data.map(({ src, cardContent }, index) => (
                            <ImageModal src={src} title={cardContent?.title} description={cardContent?.description} alt={cardContent?.alt ?? "roof"} key={index}/>
                        ))
                    }
                </section>
                ) : (
                    <Loading />
                )
            }
            
            <footer className="py-8 text-center text-gray-500">
                <p>Thank you for exploring our gallery. For more information or to start your project, contact us!</p>
            </footer>
        </div>
        
    );
}