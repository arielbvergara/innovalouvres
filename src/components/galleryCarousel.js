import { Carousel } from "@material-tailwind/react";
import { useEffect } from "react";

export function GalleryCarousel({ galleryImages, index }) {
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
                        <img
                            src={src}
                            alt={name}
                            className="w-full object-cover lg:h-[85vh]"
                            key={id}
                            loading="eager"
                        />
                    </div>
                ))
            }
        </Carousel>
    );
}