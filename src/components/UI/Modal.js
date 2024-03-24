import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={props.onClose}
      // onClick={props.onCloseCartBackdrop}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> could have done it like this if we were not using createPortal and it is not necessary to use createPortal, we are using it to ensure that the HTML code is not all over the place in the final app */}

      {ReactDOM.createPortal(
        <Backdrop
          onClose={props.onClose}
          // onCloseCartBackdrop={props.onCloseCart}
        />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
