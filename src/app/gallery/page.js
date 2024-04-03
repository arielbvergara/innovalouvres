'use client'

import { ContentContext } from "@/components/app";
import { GalleryCarousel } from "@/components/galleryCarousel";
import { ImageModal } from "@/components/imageModal";
import Loading from "@/components/loading";
import { useContext, useEffect, useState } from "react";

export default function Gallery({}) {
    
    const contentContext = useContext(ContentContext)
    const [galleryContent, setGalleryContent] = useState(null);
    const [galleryImages, setGalleryImages] = useState(null);
    const handleOpen = () => setOpen((cur) => !cur);
    const [open, setOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        if (contentContext && contentContext.data?.pages?.gallery){
            setGalleryContent(contentContext.data.pages.gallery)
            setGalleryImages(contentContext.data.images)
        }
    }, [contentContext]);

    return (
        galleryContent ?
        <div className="container mx-auto min-h-[--body-min-height] overflow-y-auto">
            <header className="px-4 py-8 text-center">
                <h1 className="text-4xl">{galleryContent.title}</h1>
            </header>
            
            <section className="mb-8 px-5">
                <p className="text-lg">
                    {galleryContent.subTitle}
                </p>
            </section>
            
            {galleryImages ? (
                <section className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3">
                    {
                        galleryImages.map(({ src, content }, index) => (
                            <ImageModal setSelectedImageIndex={setSelectedImageIndex} handleOpen={handleOpen} src={src} title={content?.title} description={content?.description} alt={content?.alt ?? "roof"} key={index} index={index} galleryImages={galleryImages}/>
                        ))
                    }
                </section>
                ) : (
                    <Loading />
                )
            }

            <GalleryCarousel index={selectedImageIndex} galleryImages={galleryImages} open={open} handleOpen={handleOpen} />
                
            <footer className="py-8 text-center text-gray-500">
                <p>{galleryContent.footer}</p>
            </footer>
        </div>
        : 
        <Loading />
    );
}