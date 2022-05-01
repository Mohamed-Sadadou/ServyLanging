import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Service from "../Composant/Service";

const useStyles = makeStyles((theme) => ({
	Corp3: {
		width: "100%",
		height: "1300px",
		minHeight: "1300px",
		backgroundColor: "#F8FBF9",
		[theme.breakpoints.down("1300")]: { height: "1700px" },
		[theme.breakpoints.down("880")]: { height: "2800px" },
		[theme.breakpoints.down("469")]: { height: "3000px" },
		[theme.breakpoints.down("530")]: { height: "3600px" },
	},
	Contenu: {
		height: "1030px",
		width: "90%",
		padding: "30px",
		marginLeft: "auto",
		marginRight: "auto",
		backgroundColor: "red",
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		[theme.breakpoints.down("1300")]: {
			width: "85%",
			height: "1400px",
			gridTemplateColumns: "repeat(2, 1fr)",
		},
		[theme.breakpoints.down("880")]: {
			width: "80%",
			height: "2600px",
			gridTemplateColumns: "repeat(1, 1fr)",
		},
		[theme.breakpoints.down("530")]: {
			height: "3200px",
		},
	},
}));

export default function LandingPage() {
	const classes = useStyles();

	//************************************************* */
	return (
		<div id="Services">
			<div className={classes.Corp3} id="4">
				<div style={{ height: "60px" }}></div>
				<Typography
					style={{
						fontFamily: " 'Manrope', sans-serif",
						color: "#8595AB",
						fontSize: "24px",
					}}
					component="div"
					align={"center"}>
					All of these by
				</Typography>
				<Typography
					style={{
						fontFamily: " 'Manrope', sans-serif",
						color: "#2A313C",
						fontSize: "55px",
						marginTop: "10px",
						fontWeight: "bold",
					}}
					component="div"
					align={"center"}
					className={classes.ecrit}>
					Servy Eco-System
				</Typography>
				<div className={classes.Contenu}>
					<Service
						serv="1"
						titre="Delivary Service"
						desc="Here’s some Descritpion of the service and how it will works, how shops will get benefits from the service "
					/>
					<Service
						serv="2"
						titre="Packaging Service"
						desc="Here’s some Descritpion of the service and how it will works, how shops will get benefits from the service "
					/>
					<Service
						serv="3"
						titre="Marketing Service"
						desc="Here’s some Descritpion of the service and how it will works, how shops will get benefits from the service "
					/>
					<Service
						serv="4"
						titre="Copyright Service"
						desc="Here’s some Descritpion of the service and how it will works, how shops will get benefits from the service "
					/>
					<Service
						serv="5"
						titre="Content Service"
						desc="Here’s some Descritpion of the service and how it will works, how shops will get benefits from the service "
					/>
					<Service
						serv="6"
						titre="After-Sell Service"
						desc="Here’s some Descritpion of the service and how it will works, how shops will get benefits from the service "
					/>
					<Service
						serv="7"
						titre="Photgraphy Service"
						desc="Here’s some Descritpion of the service and how it will works, how shops will get benefits from the service "
					/>
					<Service
						serv="8"
						titre="Media Service"
						desc="Here’s some Descritpion of the service and how it will works, how shops will get benefits from the service "
					/>
				</div>
			</div>
		</div>
	);

	//******************************************** */
}
