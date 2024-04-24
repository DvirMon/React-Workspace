import { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "./Dialog.module.css";

interface DialogProps {}

const ResultDialog = forwardRef<HTMLDialogElement>(function ResultDialog(
  {},
  ref
) {
  const dialog = useRef<HTMLDialogElement>();

  useImperativeHandle(
    ref,
    () => {
      return {
        ...(dialog.current as HTMLDialogElement),
        opened() {
          dialog.current?.showModal();
        },
      };
    },
    []
  );

  return (
    <dialog ref={dialog} className={classes.resultModal} >
          <h2>You</h2>
          
          <form method="dialog">
              <button>Close</button>
          </form>
    </dialog>
  );
});

export default ResultDialog;
