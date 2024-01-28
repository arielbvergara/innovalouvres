import React from "react";
import {
  Card,
} from "@material-tailwind/react";


 
export function ImageModal({src, alt, index, handleOpen, setSelectedImageIndex}) {

  return (
    <>
      <Card
        className="max-h-48 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={() => {
          handleOpen()
          setSelectedImageIndex(index)
        }}
        key={index}
      >
        <img
          alt={alt}
          className="h-full w-full object-cover object-center"
          src={src}
          height={200}
          width={400}
        />
      </Card>
    </>
  );
}