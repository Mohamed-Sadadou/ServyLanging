import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Service from "../Composant/Service";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Langages from "../../Images/Group 47.png";

const Buttone2 = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	width: "360px",
	height: "50px",
	fontSize: "20px",
	padding: "6px 12px",
	lineHeight: 1.5,
	marginTop: "50px",
	borderRadius: "5px",
	boxShadow: "0px 0px 15px #CC2936, 0 -10px 10px -5px #435EF7",
	backgroundColor: "#1F1614",
	color: "white",
	fontFamily: "",
	"&:hover": {
		backgroundColor: "#1F1614",
		boxShadow: "0px 0px 15px #CC2936, 0 -10px 10px -5px #435EF7",
	},
});
const useStyles = makeStyles((theme) => ({
	Corp3: {
		width: "98.9vw",
		height: "1300px",
		minHeight: "1300px",
		backgroundColor: "#F8FBF9",
		[theme.breakpoints.down("1300")]: { height: "1700px", },
    [theme.breakpoints.down("880")]: { height: "2800px", },
	},
	Contenu: {
		height: "1030px",
		width: "1260px",
		padding: "30px",
		marginLeft: "auto",
		marginRight: "auto",
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		[theme.breakpoints.down("1300")]: {width: "900px",height: "1400px", 	gridTemplateColumns: "repeat(2, 1fr)",},
    [theme.breakpoints.down("880")]: {width: "450px",height: "2600px", 	gridTemplateColumns: "repeat(1, 1fr)",},
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
