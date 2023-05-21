import styles from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";

import {useContext} from "react";
import CartContext from "../../../context/cart-context";

const MealItem = ({name, description, price, id}) => {
	const formattedPrice = `$${price.toFixed(2)}`;

	const value = useContext(CartContext);

	const addToMealCartHandler = (amount) => {
		value.addItem({
			id: id,
			name: name,
			amount: amount,
			price: price,
		});
	};
	return (
		<li className={styles.meal}>
			<div>
				<h3>{name}</h3>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>{formattedPrice}</div>
			</div>
			<div>
				<MealItemForm id={id} onAddToCart={addToMealCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
