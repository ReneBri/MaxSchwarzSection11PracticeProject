import styles from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";
import {useContext} from "react";
import CartContext from "../../context/cart-context";

const HeaderCartButton = ({onClick}) => {
	const value = useContext(CartContext);
	console.log(value.items.length);
	return (
		<button className={styles.button} onClick={onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>
				{value.items.reduce((accumulator, currentValue) => {
					return accumulator + currentValue;
				}, 0)}
			</span>
		</button>
	);
};

export default HeaderCartButton;
