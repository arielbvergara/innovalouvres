import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect } from "react";

export function GalleryCarousel({ galleryImages, index }) {

    const { innerWidth: width, innerHeight: height } = window;

    useEffect(
        () => {
            const nextButton = document.getElementsByClassName("gallery-carousel")[0].getElementsByTagName("span")[index];
            nextButton.click()
        },
        [index])

    return (
        <Carousel className="gallery-carousel rounded-xl" >
            {
                galleryImages.map(({ src, name, id }, index2) => (
                    <div className="relative" key={index2}>
                        <Image
                            src={src}
                            alt={name}
                            className="w-full object-cover lg:h-[85vh]"
                            key={id}
                            loading="lazy"
                            height={height}
                            width={width}
                            placeholder="blur" 
                            blurDataURL={src}
                        />
                    </div>
                ))
            }
        </Carousel>
    );
}