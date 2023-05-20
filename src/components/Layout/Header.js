import styles from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";

import HeaderCartButton from "./HeaderCartButton";

const Header = ({onShowCart}) => {
	return (
		<>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={onShowCart} />
			</header>
			<div className={styles["main-image"]}>
				<img src={mealsImage} alt="A photo of food on a table" />
			</div>
		</>
	);
};

export default Header;
