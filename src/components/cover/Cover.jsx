import React from "react";
import cover from "../../assets/media/cover.mp4";
import style from "./cover.module.css";

export const Cover = () => {
	return (
		<div className={style.cover_container}>
			<video className={style.video} src={cover} autoPlay loop muted />
			<h1>Ernesto Burgos</h1>
			<p>Full stack developer</p>
			<span>React.js | Redux | Node.js | Express | Postgresql | Sequelize</span>
		</div>
	);
};
