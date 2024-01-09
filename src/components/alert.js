import { faCircleCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert } from "@material-tailwind/react";
import { useState } from "react";
 
export function AlertSuccess({children, setEmailSuccess}) {
    const [open, setOpen] = useState(true);

    return (
      <Alert
        color="lightBlue"
        open={open}
        onClose={() => {
            setOpen(false); setEmailSuccess(null);
        }}
        animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
        icon={<FontAwesomeIcon icon={faCircleCheck} className="h-5 cursor-pointer"/>}
        className="alert fixed bottom-0 right-0 m-5 w-full rounded-none border-l-4 border-[#2ec946] bg-[#edffef] font-medium text-[#2ec946] sm:w-fit"
      >
        {children}
      </Alert>
    );
  }

  export function AlertWarning({children, setEmailSuccess}) {
    const [open, setOpen] = useState(true);

    return (
      <Alert
        open={open}
        onClose={() => {
            setOpen(false); setEmailSuccess(null);
        }}
        animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
        icon={<FontAwesomeIcon icon={faCircleExclamation} className="h-5 cursor-pointer"/>}
        className="alert fixed bottom-0 right-0 m-5 w-full rounded-none border-l-4 border-[#f2b602] bg-[#fffab8] font-medium text-[#f2b602] sm:w-fit"
      >
        {children}
      </Alert>
    );
  }