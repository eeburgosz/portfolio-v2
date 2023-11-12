import React from "react";
import style from "./info.module.css";

export const Info = () => {
	return (
		<div className={style.container}>
			<div className={style.info_container}>
				<h1>
					"Obstacles are those frightful things you see when you take your eyes
					off your goals."
				</h1>
				<p>-Henry Ford</p>
			</div>
		</div>
	);
};
