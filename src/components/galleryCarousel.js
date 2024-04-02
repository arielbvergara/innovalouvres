import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function GalleryCarousel({ galleryImages, index }) {

    const { innerWidth: width, innerHeight: height } = window;

    useEffect(
        () => {
            const nextButton = document.getElementsByClassName("gallery-carousel")[0].getElementsByTagName("span")[index];
            nextButton.click()
        },
        [index])

    return (
        <Carousel className="gallery-carousel" >
            {
                galleryImages.map(({ src, name, id }, index2) => (
                    <div className="relative" key={index2}>
                        <Image
                            src={src}
                            alt={name}
                            className={(width < 900 || height < 500) ? "h-[75vh] w-full object-contain lg:h-[85vh]" : "w-full object-cover lg:h-[85vh]" }
                            key={id}
                            height={height}
                            width={width}
                            loading="lazy"
                            placeholder="blur" 
                            blurDataURL={src}
                        />
                    </div>
                ))
            }
        </Carousel>
    );
}