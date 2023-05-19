import styles from "./Modal.module.css";

import {createPortal} from "react-dom";

const Backdrop = () => {
	return <div className={styles.backdrop}></div>;
};

const ModalOverlay = ({children}) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{children}</div>
		</div>
	);
};

const Modal = ({children}) => {
	return (
		<>
			{createPortal(<Backdrop />, document.getElementById("overlays"))}
			{createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				document.getElementById("overlays")
			)}
		</>
	);
};

export default Modal;
