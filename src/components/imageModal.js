import React from "react";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
  Card,
} from "@material-tailwind/react";
 
export function ImageModal({src, title, description, alt}) {
  const [open, setOpen] = React.useState(false);
   
  const handleOpen = () => setOpen((cur) => !cur);
   
  return (
    <>
      <Card
        className="max-h-48 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
      >
        <img
          alt={alt}
          className="h-full w-full object-cover object-center"
          src={src}
        />
      </Card>
       <Dialog size="xl" open={open} handler={handleOpen}>
        
        <DialogBody>
          <img
            alt={alt}
            className="max-h-[48rem] w-full rounded-lg object-contain object-center"
            src={src}
          />
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16">
            <div>
                <Typography variant="h5" color="gray" className="font-normal">
                    {title}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                    {description}
                </Typography>
            </div>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}