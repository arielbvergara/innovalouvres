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
        <Carousel className="rounded-xl gallery-carousel" >
            {
                galleryImages.map(({ src, name, id }, index2) => (
                    <div className="relative h-[85vh] w-full" key={index2}>
                        <img
                            src={src}
                            alt={name}
                            className="h-full w-full object-cover"
                            key={id}
                        />
                    </div>
                    
                ))
            }
            
        </Carousel>
    );
}