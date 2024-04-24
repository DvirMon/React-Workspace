import React, { forwardRef } from "react";
import classes from "./Dialog.module.css";


interface DialogProps {

}

const ResultDialog = forwardRef<HTMLDialogElement>(function ResultDialog(
  {},
  ref
) {
    return <dialog className={ classes.resultModel} ref={ref}></dialog>;
});
