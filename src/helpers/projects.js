import cinematime from "../assets/projects/cinematime.JPG";
import countries_app from "../assets/projects/Countries_app.JPG";
import videogames_app from "../assets/projects/Videogames_app.JPG";
import food_app from "../assets/projects/Food_app.JPG";
import in_progress from "../assets/projects/In_progress.JPG";

export const info = [
	{
		id: 1,
		name: "Cinema Time",
		img: cinematime,
		type: "Group",
		description: "Web",
		deployed: false,
		active: false,
		URL: "https://estudioda.ar/cinema",
		front_repository:
			"https://github.com/samuelmhg97/PF-HENRY/tree/main/Client",
		back_repository: "https://github.com/damiancrue/PF-HENRY-back",
	},
	{
		id: 2,
		name: "Food App",
		img: food_app,
		type: "Individual",
		description: "Web - Responsive",
		deployed: true,
		active: true,
		URL: "https://foodapp-eeburgosz.vercel.app/",
		front_repository: "https://github.com/eeburgosz/front-food",
		back_repository: "https://github.com/eeburgosz/back-food",
	},
	{
		id: 3,
		name: "Videogames App",
		img: videogames_app,
		type: "Individual",
		description: "Web - Responsive",
		deployed: true,
		active: true,
		URL: "https://videogamesapp-eeburgosz.vercel.app/",
		front_repository: "https://github.com/eeburgosz/front-videogames",
		back_repository: "https://github.com/eeburgosz/back-videogames",
	},
	{
		id: 4,
		name: "Countries App",
		img: countries_app,
		type: "Individual",
		description: "Web",
		deployed: true,
		active: false,
		URL: "https://countriesapp-eeburgosz.vercel.app/",
		front_repository: "https://github.com/eeburgosz/front-countries",
		back_repository: "https://github.com/eeburgosz/back-countries",
	},

	{
		id: "inprogress",
		name: "In Progress",
		img: in_progress,
	},
];
