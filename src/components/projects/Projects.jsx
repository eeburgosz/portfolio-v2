import React from "react";
import style from "./projects.module.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { info } from "../../helpers/projects";

export const Projects = () => {
	return (
		<div className={style.container}>
			<h1>My projects</h1>
			<div className={style.slider_container}>
				<AwesomeSlider animation="cubeAnimation">
					{info.map((project) => (
						<div key={project.id} data-src={project.img} />
					))}
				</AwesomeSlider>
				<div className={style.see_my_projects}>
					<h1>See my projects</h1>
					<div className={style.projects}>
						{info.map((project) => (
							<>
								{project.type ? (
									<div className={style.table}>
										<span className={style.title}>{project.name}</span>
										<div className={style.buttons}>
											<a href={project.URL} target="_blank" rel="noreferrer">
												<button
													className={style.button_content}
													disabled={project.URL ? false : true}
												>
													<span className="pi pi-globe"></span>
													<span>Deploy</span>
												</button>
											</a>
											<a
												href={project.front_repository}
												target="_blank"
												rel="noreferrer"
											>
												<button className={style.button_content}>
													<span className="pi pi-github"></span>
													<span>Front</span>
												</button>
											</a>
											<a
												href={project.back_repository}
												target="_blank"
												rel="noreferrer"
											>
												<button className={style.button_content}>
													<span className="pi pi-github"></span>
													<span>Back</span>
												</button>
											</a>
										</div>
									</div>
								) : null}
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
