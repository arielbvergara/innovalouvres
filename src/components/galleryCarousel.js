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

    const [orientation, setOrientation] = useState("");
    useEffect(() => {
          // Function to update the orientation state
          function updateOrientation() {
            setOrientation(window.screen.orientation.type);
          }
          // Initial update of the orientation state
          updateOrientation();
          // Add an event listener for orientation change
          window.addEventListener("orientationchange", updateOrientation);
          // Clean up the event listener when the component unmounts
          return () => {
            window.removeEventListener("orientationchange", updateOrientation);
          };
        }, [orientation]);

    return (
        <Carousel className="gallery-carousel" >
            {
                galleryImages.map(({ src, name, id }, index2) => (
                    <div className="relative" key={index2}>
                        <Image
                            src={src}
                            alt={name}
                            className={orientation === "landscape-primary" ? "h-[75vh] w-full object-cover lg:h-[85vh]" : "w-full object-cover lg:h-[85vh]" }
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