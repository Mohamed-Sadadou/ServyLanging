import React from "react";
import { useState, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import back1 from "../../Images/fond1.png";
import back2 from "../../Images/fond2.png";
import back3 from "../../Images/fond3.png";
import back4 from "../../Images/fond4.png";
import back5 from "../../Images/fond5.png";
import back6 from "../../Images/fond6.png";
import back7 from "../../Images/fond7.png";
import back8 from "../../Images/fond8.png";
import NavBar from "./NavBar";
import Footer from "../Pages/Footer";
import ActionPart from "./ActionPart";


const useStyles = makeStyles((theme) => ({
	vide: {
		height: "80px",
	},
	Corp1: {
		width: "100vw",
		height: "800px",
		backgroundColor: "#9AC3FE",
		backgroundImage: `url(${back1})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("315")]: { height: "1000px" },
	},
	Corp2: {
		width: "100vw",
		height: "800px",
		backgroundColor: "#C3CAD5",
		backgroundImage: `url(${back2})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "1000px" },
	},
	Corp3: {
		width: "100vw",
		height: "800px",
		backgroundColor: "#FCD69C",
		backgroundImage: `url(${back3})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "1000px" },

	},
	Corp4: {
		width: "100vw",
		height: "800px",
		backgroundColor: "#DED0BA",
		backgroundImage: `url(${back4})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "1000px" },
	},
	Corp5: {
		width: "100vw",
		height: "800px",
		backgroundColor: "#E4FCE5",
		backgroundImage: `url(${back5})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "1000px" },
	},
	Corp6: {
		width: "100vw",
		height: "800px",
		backgroundColor: "#EBF4EC",
		backgroundImage: `url(${back6})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "1000px" },
	},
	Corp7: {
		width: "100vw",
		height: "800px",
		backgroundColor: "#F2A6A6",
		backgroundImage: `url(${back7})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "1000px" },
	},
	Corp8: {
		width: "100vw",
		height: "800px",
		backgroundColor: "#DDBBBB",
		backgroundImage: `url(${back8})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left bottom",
		[theme.breakpoints.down("1100")]: { height: "1000px" },
	},
	Bloc:{
		height: "77vh" ,
		minHeight:'650px',
		[theme.breakpoints.down("1100")]: { height: "90vh" },
		[theme.breakpoints.down("325")]: { height: "680px" },
		[theme.breakpoints.down("295")]: { height: "790px" },
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
		[theme.breakpoints.down("320")]: { 	fontSize: "30px", },
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
	if (props.id === "1") img = { corp: classes.Corp1 };

	if (props.id === "2") img = { corp: classes.Corp2 };

	if (props.id === "3") img = { corp: classes.Corp3 };

	if (props.id === "3") img = { corp: classes.Corp3 };

	if (props.id === "4") img = { corp: classes.Corp4 };

	if (props.id === "5") img = { corp: classes.Corp5 };

	if (props.id === "6") img = { corp: classes.Corp6 };

	if (props.id === "7") img = { corp: classes.Corp7 };

	if (props.id === "8") img = { corp: classes.Corp8 };

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
