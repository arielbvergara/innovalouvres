import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Carousel, Dialog, DialogBody } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect } from "react";

export function GalleryCarousel({ galleryImages, index, open, handleOpen }) {

    const { innerWidth: width, innerHeight: height } = window;

    useEffect(
        () => {
            const nextButton = document.getElementsByClassName("gallery-carousel")[0]?.getElementsByTagName("span")[index];
            nextButton?.click()
        },
        [index])

    return (
        <Dialog size="xl" open={open} handler={handleOpen} className={(width < 900 || height < 500) ? "rounded-none bg-transparent":"rounded-none"}>
            <DialogBody className="rounded-none p-0">
                {
                    (width < 900 || height < 500) && <FontAwesomeIcon icon={faCircleXmark} onClick={handleOpen} className="fa-circle-xmark absolute right-0 z-50 float-right mr-5 text-3xl text-white" />
                }
                <Carousel className={"gallery-carousel"}>
                    {
                        galleryImages.map(({ src, name, id }, index2) => (
                            <div className="relative" key={index2}>
                                <Image
                                    src={src}
                                    alt={name}
                                    className={(width < 900 || height < 500) ? "h-[90vh] w-full object-contain" : "w-full object-cover lg:h-[85vh]" }
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
            </DialogBody>
        </Dialog>
    );
}