import React from "react";
import {useState, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Logo from "../../Images/Logobleu.png";
import NavBar from "../Composant/NavBar";
import Footer from "../Pages/Footer";
import f1 from "../../Images/f1.png";
import f2 from "../../Images/f2.png";
import f3 from "../../Images/f3.png";
import f4 from "../../Images/f4.png";
import f5 from "../../Images/f5.png";
import f6 from "../../Images/f6.png";

function getWindowDimensions() {
	const { innerWidth: width, } = window;
	return width;
}
const Buttone = styled(Button)({
	fontFamily: " 'Manrope', sans-serif",
	boxShadow: "none",
	textTransform: "none",
	width: "270px",
	height: "50px",
	fontSize: 16,
	padding: "6px 12px",
	lineHeight: 1.5,
	borderRadius: "0px 5px 5px 0px",
	backgroundColor: "#68A6FD",
	color: "white",
	"&:hover": {
		backgroundColor: "#68A6FD",
	},
});
const Buttone2 = styled(Button)({
	fontFamily: " 'Manrope', sans-serif",
	boxShadow: "none",
	textTransform: "none",
	width: "200px",
	height: "40px",
	fontSize: 16,
	padding: "6px 12px",
	lineHeight: 1.5,
	borderRadius: "0px 5px 5px 0px",
	backgroundColor: "#68A6FD",
	color: "white",
	"&:hover": {
		backgroundColor: "#68A6FD",
	},
});
const useStyles = makeStyles((theme) => ({
	Corp1: {
		width: "100vw",
		height: "100vh",
		backgroundColor: "white",
		backgroundImage: `url(${Logo})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left top",
	},
	BlocTitre: {
		height: "25vh",
		width: "85vw",
		marginLeft: "auto",
		marginRight: "auto",
		[theme.breakpoints.down("1100")]: { height: "23vh" },
		[theme.breakpoints.down("692")]: { height: "15vh" },
	},
	BlocTouche: {
		height: "75px",
		width: "85vw",
		marginLeft: "auto",
		marginRight: "auto",
	},
	BlocEcris: {
		height: "80px",
		width: "85vw",
		marginLeft: "auto",
		marginRight: "auto",
	},
	BlocImg: {
		height: "140px",
		width: "85vw",
		marginLeft: "auto",
		marginRight: "auto",
		[theme.breakpoints.down("1100")]: { height: "25vh" },
		[theme.breakpoints.down("692")]: { height: "15vh" },
	},
	Titre: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#2A313C",
		fontSize: "42px",
		fontWeight: "bold",
		[theme.breakpoints.down("1000")]: { fontSize: "35px" },
		[theme.breakpoints.down("800")]: { fontSize: "31px" },
		[theme.breakpoints.down("692")]: { fontSize: "22px" },
	},
	Titre1a: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#2A313C",
		fontSize: "42px",
		fontWeight: "bold",
		[theme.breakpoints.down("1000")]: { fontSize: "35px" },
		[theme.breakpoints.down("800")]: { fontSize: "31px" },
		[theme.breakpoints.down("692")]: { fontSize: "22px" },
	},
	Titre1b: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#435EF7",
		fontSize: "42px",
		fontWeight: "bold",
		[theme.breakpoints.down("1000")]: { fontSize: "35px" },
		[theme.breakpoints.down("800")]: { fontSize: "31px" },
		[theme.breakpoints.down("692")]: { fontSize: "22px" },
	},
	Titre1c: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#48EA54",
		fontSize: "42px",
		fontWeight: "bold",
		[theme.breakpoints.down("1000")]: { fontSize: "35px" },
		[theme.breakpoints.down("800")]: { fontSize: "31px" },
		[theme.breakpoints.down("692")]: { fontSize: "22px" },
	},
	Titre1d: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#687B97",
		fontSize: "20px",
		fontWeight: "bold",
		[theme.breakpoints.down("1000")]: { fontSize: "15px" },
		[theme.breakpoints.down("800")]: { fontSize: "12px" },
		[theme.breakpoints.down("692")]: { fontSize: "9px" },
	},
	ecris: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#687B97",
		fontSize: "15px",
		fontWeight: "500",
		[theme.breakpoints.down("1100")]: { fontSize: "12px" },
		[theme.breakpoints.down("692")]: { fontSize: "10px" },
	},
	Boite1: {
		width: "85vw",
		display: "flex",
		marginTop: "-20px",
		flexdirection: "row",
		[theme.breakpoints.down("1000")]: { marginTop: "-10px" },
		[theme.breakpoints.down("600")]: { marginTop: "-5px" },
	},
	Boite: {
		width: "20px",
	},
	probButton: {
		height: "50px",
		width: "80vw",
		backgroundColor: "#E6F0FF",
		borderRadius: "5px",
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		[theme.breakpoints.down("1000")]: { width: "650px" },
		[theme.breakpoints.down("820")]: { width: "470px" },
		[theme.breakpoints.down("600")]: { width: "400px", height: "40px" },
	},
	input: {
		width: "65vw",
		height: "45px",
		marginTop: "5px",
		borderRadius: "5px 0px 00px 5px",
		[theme.breakpoints.down("1000")]: { width: "480px" },
		[theme.breakpoints.down("820")]: { width: "200px" },
		[theme.breakpoints.down("600")]: { height: "35px" },
	},
	act: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#1AE52A",
		fontSize: "12px",
		marginTop: "5px",
		marginLeft: "10px",
		fontWeight: "bold",
	},
	space: {
		width: "50vw",
		[theme.breakpoints.down("692")]: { width: "65vw" },
	},
	Imgs: {
		display: "grid",
		gridTemplateColumns: "repeat(6, 1fr)",
		[theme.breakpoints.down("692")]: { gridTemplateColumns: "repeat(3, 1fr)", },
	},
	Logo: {
		width: 150,
		height: 150,
		[theme.breakpoints.down("1000")]: { width: 100, height: 100 },
		[theme.breakpoints.down("800")]: { width: 80, height: 80 },
		[theme.breakpoints.down("692")]: { width: 65, height: 65, marginTop:'20px' },
	},
}));

export default function LandingPage(props) {
	const classes = useStyles();

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
		<div className={classes.Corp1}>
			<NavBar id="1" />
			<div style={{ height: "77vh" }}>
				<div style={{ height: "10px" }}></div>
				<div className={classes.BlocTitre}>
					<Box className={classes.Titre} component="div" align={"center"}>
						Start Your Online Journey, Presence From
					</Box>

					<div className={classes.Boite1}>
						<Box className={classes.Titre1b}>Everywhere </Box>
						<div className={classes.Boite}> </div>
						<Box className={classes.Titre1a}>& For </Box>
						<div className={classes.Boite}> </div>
						<Box className={classes.Titre1c}>Free. </Box>
					</div>
					<Box className={classes.Titre1d}>B2B or B2C or even B2B2C </Box>
				</div>
				<div className={classes.BlocTouche}>
					<div className={classes.probButton}>
						{getWindowDimensions() > 860 && (
							<Box component="form" noValidate autoComplete="off">
								<OutlinedInput
									className={classes.input}
									placeholder="Register by your Email ✉️ or Phone 📞"
								/>
							</Box>
						)}
						{getWindowDimensions() <= 860 && (
							<Box component="form" noValidate autoComplete="off">
								<OutlinedInput
									className={classes.input}
									placeholder="Email ✉️ or Phone 📞"
								/>
							</Box>
						)}
						{getWindowDimensions() <= 600 && (
							<Buttone2
								variant="contained"
								disableRipple
								onClick={(e) => {
									alert("Cette fonctionnalité n'est pas encore lancé restez branché pour son lancement !! ");
								}}>
								Register
							</Buttone2>
						)}
						{getWindowDimensions() > 600 && (
							<Buttone
								variant="contained"
								disableRipple
								onClick={(e) => {
									alert("Cette fonctionnalité n'est pas encore lancé restez branché pour son lancement !! ");
								}}>
								Get Registration Link
							</Buttone>
						)}
					</div>
					<Box className={classes.act}>You’ve registered Succesfully !</Box>
				</div>
				<div className={classes.BlocEcris}>
					<div className={classes.space}>
						<Box className={classes.ecris}>
							You will receive and message to confirm then you get your referal
							link to boost your shop. The second they enter the website and
							register we will add points to your shop to higher your Ranking.
							Every subscribe from your people your shop will be trendy in our
							platform.
						</Box>
					</div>
				</div>
				<div className={classes.BlocImg}>
					<div className={classes.Imgs}>
						<img src={f6} className={classes.Logo} alt="fireSpot" />
						<img src={f5} className={classes.Logo} alt="fireSpot" />
						<img src={f4} className={classes.Logo} alt="fireSpot" />
						<img src={f3} className={classes.Logo} alt="fireSpot" />
						<img src={f2} className={classes.Logo} alt="fireSpot" />
						<img src={f1} className={classes.Logo} alt="fireSpot" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);

	//******************************************** */
}
