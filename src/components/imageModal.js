import React from "react";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
  Card,
} from "@material-tailwind/react";
import Image from "next/image";
import { GalleryCarousel } from "./galleryCarousel";
 
export function ImageModal({src, title, description, alt, index, galleryImages}) {
  console.log("Image modal", galleryImages)
  const [open, setOpen] = React.useState(false);
   
  const handleOpen = () => setOpen((cur) => !cur);
   
  return (
    <>
      <Card
        className="max-h-48 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
        key={index}
      >
        <Image
          alt={alt}
          className="h-full w-full object-cover object-center"
          src={src}
          height={200}
          width={400}
        />
      </Card>
       <Dialog size="xl" open={open} handler={handleOpen}>
        
        <DialogBody>
          <GalleryCarousel index={index} galleryImages={galleryImages}/>
        </DialogBody>
      </Dialog>
    </>
  );
}