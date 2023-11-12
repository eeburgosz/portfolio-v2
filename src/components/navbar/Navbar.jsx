import React from "react";
import style from "./navbar.module.css";
import logo from "../../assets/media/logo.png";

export const Navbar = () => {
	const toTheTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<div className={style.navbar}>
			<div className={style.banner}>
				<img className={style.logo} src={logo} alt="logo" />
			</div>
			<div className={style.navbar_logo} onClick={toTheTop}>
				Ernesto Burgos
			</div>
		</div>
	);
};
