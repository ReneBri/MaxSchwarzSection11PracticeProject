import styles from "./Modal.module.css";

import {createPortal} from "react-dom";

const Backdrop = ({onClose}) => {
	return <div onClick={onClose} className={styles.backdrop}></div>;
};

const ModalOverlay = ({children}) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{children}</div>
		</div>
	);
};

const Modal = ({children, onClose}) => {
	return (
		<>
			{createPortal(<Backdrop onClose={onClose} />, document.getElementById("overlays"))}
			{createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				document.getElementById("overlays")
			)}
		</>
	);
};

export default Modal;
