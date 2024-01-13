import { Carousel } from "@material-tailwind/react";
import { useEffect } from "react";

export function GalleryCarousel({ galleryImages, index }) {

    console.log("galleryImages", galleryImages, index)
    
    useEffect(
        () => {
            const nextButton = document.getElementsByClassName("gallery-carousel")[0].getElementsByTagName("span")[index];
            nextButton.click()
        },
        [])

    return (
        <Carousel className="rounded-xl gallery-carousel max-h-[80vh]" >
            {
                galleryImages.map(({ src, name }) => (
                    <img
                        src={src}
                        alt={name}
                        className="h-full w-full object-cover"
                    />
                ))
            }
        </Carousel>
    );
}