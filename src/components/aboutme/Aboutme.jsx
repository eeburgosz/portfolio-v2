import React from "react";
import style from "./aboutme.module.css";
import profile_pic from "../../assets/media/profilePic.jpg";

export const Aboutme = () => {
	return (
		<div className={style.about_container}>
			<div className={style.about_desc}>
				<h3>Let me tell you something about me</h3>
				<p>
					I'm an electronics engineer with an outstanding career as Project
					Manager in a telecommunications company in the field of SMEs, where I
					have accumulated five years of experience.
				</p>
				<br />
				<p>
					My background includes a solid foundation as a fullstack developer,
					acquired through the SoyHenry bootcamp, courses that I have taken on
					my own and research. During my training, I have acquired and applied
					knowledge in essential technologies such as Javascript, React.js,
					Redux, Node.js, Express, Sequelize, Postgresql, CSS, as well as
					mastery of fundamental tools like Postman and GIT and creating my own
					API's. Furthermore, I have worked with various design libraries for
					development frontend.
				</p>
				<br />
				<p>
					My professional profile is characterized by values ​​such as ethics,
					responsibility, dedication, perseverance, proactivity, resilience,
					empathy and the ability to be a good colleague. My colleagues have
					praised me for my active listening skills and my perseverance, which
					contributes to the work environment and team results.
				</p>
				<br />
				<p>
					Regarding my current career goals, I'm focused on consolidating my
					career in web development, a constantly evolving field that demands
					continuous learning and adaptability. Additionally, my experience as
					an electronics engineer has been notable. During my role as Project
					Manager in an SME in the telecommunications sector, I have directed
					projects for leading companies such as YPF, Pluspetrol, Newmont,
					Ausol, GCO, Arcelor-Mittal Acindar, VASA, among others.
				</p>
				<br />
				<p>
					My track record reflects the ability to deliver outstanding results
					within tight deadlines, which is supported by the constant demand for
					services from these companies.
				</p>
			</div>
			<div className={style.about_img}>
				<img src={profile_pic} className={style.profie_pic} alt="profilePic" />
			</div>
		</div>
	);
};
