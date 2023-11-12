import React from "react";
import style from "./footer.module.css";

export const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.container}>
				<div className={style.name}>
					<h2>Ernesto Burgos</h2>
					<span>Full Stack Developer</span>
					<small>Living in Buenos Aires</small>
				</div>
			</div>
			<div className={style.contact}>
				<h5>Contact me</h5>
				<div className={style.sm}>
					<a
						href="https://www.linkedin.com/in/eeburgosz/"
						target="_blank"
						rel="noreferrer"
					>
						<span className="pi pi-linkedin"></span>
					</a>
					<a
						href="https://github.com/eeburgosz"
						target="_blank"
						rel="noreferrer"
					>
						<span className="pi pi-github"></span>
					</a>
					<a
						href="https://www.instagram.com/eburgos88/"
						target="_blank"
						rel="noreferrer"
					>
						<span className="pi pi-instagram"></span>
					</a>
					<a href="wa.me/+5491127352415" target="_blank" rel="noreferrer">
						<span className="pi pi-whatsapp"></span>
					</a>
				</div>
			</div>
			<div className={style.sign}>
				<small>Design By Ernesto Burgos</small>
			</div>
		</footer>
	);
};
