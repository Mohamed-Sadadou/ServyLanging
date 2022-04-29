import React from "react";
import { useContext, useState, useEffect, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import back1 from "../../Images/fond1.png";
import back2 from "../../Images/fond2.png";
import back3 from "../../Images/fond3.png";
import back4 from "../../Images/fond4.png";
import back5 from "../../Images/fond5.png";
import back6 from "../../Images/fond6.png";
import back7 from "../../Images/fond7.png";
import back8 from "../../Images/fond8.png";
import comp from "../../Images/logos.png";
import NavBar from "./NavBar";
import Footer from "../Pages/Footer";
import ActionPart from "./ActionPart";


const useStyles = makeStyles((theme) => ({
	vide: {
		height: "80px",
	},
	Corp1: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "#9AC3FE",
		backgroundImage: `url(${back1})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "110vh" },
	},
	Corp2: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "#C3CAD5",
		backgroundImage: `url(${back2})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "110vh" },
	},
	Corp3: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "#FCD69C",
		backgroundImage: `url(${back3})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "110vh" },

	},
	Corp4: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "#DED0BA",
		backgroundImage: `url(${back4})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "110vh" },
	},
	Corp5: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "#E4FCE5",
		backgroundImage: `url(${back5})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "110vh" },
	},
	Corp6: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "#EBF4EC",
		backgroundImage: `url(${back6})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "110vh" },
	},
	Corp7: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "#F2A6A6",
		backgroundImage: `url(${back7})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "110vh" },
	},
	Corp8: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "#DDBBBB",
		backgroundImage: `url(${back8})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "110vh" },
	},
	Bloc:{
		height: "77vh" ,
		[theme.breakpoints.down("1100")]: { height: "90vh" },
	},
	BlocTitre: {
		height: "80px",
		width: "95vw",
		marginLeft: "auto",
		marginRight: "auto",
	},
	BlocContenu: {
		width: "95vw",
		height: "60vh",
		marginLeft: "auto",
		marginRight: "auto",
		
	},
	Titre: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#2A313C",
		display: "flex",
		flexdirection: "row",
		fontSize: "40px",
		fontWeight: "bold",
	},
	Text: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#000000",
		fontSize: "14px",
		fontWeight: "500",
		[theme.breakpoints.down("1100")]: { fontSize: "14px" },
		[theme.breakpoints.down("900")]: { fontSize: "12px" },
		[theme.breakpoints.down("750")]: { fontSize: "10px" },
		[theme.breakpoints.down("550")]: { fontSize: "10px" },
	},
}));

export default function LandingPage(props) {
	const classes = useStyles();
	var img;
	if (props.id == 1) img = { corp: classes.Corp1 };

	if (props.id == 2) img = { corp: classes.Corp2 };

	if (props.id == 3) img = { corp: classes.Corp3 };

	if (props.id == 3) img = { corp: classes.Corp3 };

	if (props.id == 4) img = { corp: classes.Corp4 };

	if (props.id == 5) img = { corp: classes.Corp5 };

	if (props.id == 6) img = { corp: classes.Corp6 };

	if (props.id == 7) img = { corp: classes.Corp7 };

	if (props.id == 8) img = { corp: classes.Corp8 };

	function useWindowSize() {
		const [size, setSize] = useState([0, 0]);
		useLayoutEffect(() => {
			function updateSize() {
				setSize([window.innerWidth, window.innerHeight]);
			}
			window.addEventListener("resize", updateSize);
			updateSize();
		}, []);
		return size;
	}
	useWindowSize();

	//************************************************* */
	return (
		<div className={img.corp}>
			<NavBar id="1" />
			<div className={classes.Bloc}>
				<div className={classes.BlocTitre}>
					<Box className={classes.Titre}>{props.Titre}</Box>
				</div>
				<div className={classes.BlocContenu}>
					<Box className={classes.Text}>{props.TextPart1}</Box>
					<div style={{ height: "20px" }}></div>
					<Box className={classes.Text}>{props.TextPart2}</Box>
					<div style={{ height: "20px" }}></div>
					<Box className={classes.Text}>{props.TextPart3}</Box>
					<ActionPart />
				</div>
			</div>
			<Footer />
		</div>
	);

	//******************************************** */
}
