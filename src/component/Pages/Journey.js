import React from "react";
import { useState, useLayoutEffect, useContext, useEffect } from "react";
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
import LangueContext from "../LangueContext";
function getWindowDimensions() {
	const { innerWidth: width } = window;
	return width;
}
const Buttone = styled(Button)({
	fontFamily: " 'Manrope', sans-serif",
	boxShadow: "none",
	textTransform: "none",
	width: "100%",
	height: "50px",
	maxWidth: "250px",
	fontSize: 16,
	padding: "6px 12px",
	lineHeight: 1.5,
	borderRadius: "0px 5px 5px 0px",
	backgroundColor: "#9AC3FE",
	color: "black",
	fontWeight: "bold",
	"&:hover": {
		backgroundColor: "#68A6FD",
	},
});
const Buttone2 = styled(Button)({
	fontFamily: " 'Manrope', sans-serif",
	boxShadow: "none",
	textTransform: "none",
	width: "100%",
	height: "35px",
	fontSize: 16,
	padding: "6px 12px",
	lineHeight: 1.5,
	borderRadius: "0px 5px 5px 0px",
	backgroundColor: "#9AC3FE",
	color: "black",
	fontWeight: "bold",
	"&:hover": {
		backgroundColor: "#68A6FD",
	},
});
const useStyles = makeStyles((theme) => ({
	Corp1: {
		width: "100%",
		height: "fit-content",
		minHeight: "100vh",
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
		[theme.breakpoints.down("373")]: { height: "110px" },
		[theme.breakpoints.down("240")]: { height: "130px" },
	},
	BlocImg: {
		height: "fit-content",
		width: "85vw",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "6px",
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
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "50px",
		height: "50px",
		width: "90%",
		maxWidth: "1400px",
		backgroundColor: "#E6F0FF",
		borderRadius: "5px",
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		[theme.breakpoints.down("900")]: { width: "70%", maxWidth: "500px" },
		[theme.breakpoints.down("590")]: { width: "80%" },
		[theme.breakpoints.down("600")]: { height: "35px" },
	},
	input: {
		width: "64vw",
		maxWidth: "1150px",
		height: "45px",
		marginTop: "5px",
		borderRadius: "5px 0px 00px 5px",
		[theme.breakpoints.down("1525")]: { width: "60vw" },
		[theme.breakpoints.down("1135")]: { width: "55vw" },
		[theme.breakpoints.down("900")]: { width: "100%" },
		[theme.breakpoints.down("600")]: { height: "30px" },
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
		height:'fit-content',
		[theme.breakpoints.down("692")]: { width: "65vw" },
	},
	Imgs: {
		marginTop:'20px',
		display: "grid",
		gridTemplateColumns: "repeat(6, 1fr)",
		[theme.breakpoints.down("692")]: { gridTemplateColumns: "repeat(3, 1fr)" },
	},
	Logo: {
		width: 150,
		height: 150,
		[theme.breakpoints.down("1000")]: { width: 100, height: 100 },
		[theme.breakpoints.down("800")]: { width: 80, height: 80 },
		[theme.breakpoints.down("692")]: {
			width: 65,
			height: 65,
			marginTop: "20px",
		},
	},
	corp: {
		height: "fit-content",
	},
}));

export default function LandingPage(props) {
	const classes = useStyles();
	const [Langue, setLangue] = useState("");
	const [Check, setCheck] = useState(false);
	const { langue, setlangue } = useContext(LangueContext);
	console.log("-----------------------");
	console.log("-----------------------");
	console.log(langue);
	console.log("-----------------------");
	console.log("-----------------------");
	console.log("voila : ", langue, "  --  ", Langue);
	if (langue !== Langue) setLangue(langue);
	var text;
	if (Langue === "fr") {
		text = {
			titre1: "Commencez votre presence en ligne",
			titre2: {
				titre2: "Partout",
				titre3: "&",
				titre4: "Gratuitement.",
			},
			input: {
				input1: "Introduisez votre Email ✉️ ou Phone 📞",
				input2: "Email ✉️ ou Phone 📞",
			},
			bouton: {
				bouton1: "Enregistrer",
				bouton2: "Lien d'enregistrement",
			},
			b2b: "B2B ou B2C ou meme B2B2C",
			act:"Vous avez été correctement enregistré !",
			text:"Vous recevrez un message pour confirmer votre inscription alors vous obtiendrez votre lien referal pour booster votre boutique.A la seconde où vos clients entrent sur le site et s’inscrivent, nous ajouterons des points à votre boutique pour améliorer votre classement. Chaque abonnement de votre personnel votre boutique sera mise en avant sur notre plateforme.",
		};
	} else {
		text = {
			titre1: "Start Your Online Journey, Presence From",
			titre2: {
				titre2: "Everywhere",
				titre3: "& For ",
				titre4: "Free.",
			},
			input: {
				input1: "Register by your Email ✉️ or Phone 📞",
				input2: "Email ✉️ or Phone 📞",
			},
			bouton: {
				bouton1: "Register",
				bouton2: "Get Registration Link",
			},
			b2b: "B2B or B2C or even B2B2C",
			act:"You’ve registered Succesfully !",
			text:"You will receive a message to confirm your registration then you will get your link referal to boost your shop. The second your customers enter the site and register, we will add points to your store to improve your ranking. Each subscription of your staff your shop will be highlighted on our platform.",
		};
	}
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
			<div className={classes.corp}>
				<div style={{ height: "10px" }}></div>
				<div className={classes.BlocTitre}>
					<Box className={classes.Titre} component="div" align={"center"}>
						{text.titre1}
					</Box>
					<div className={classes.Boite1}>
						<div style={{ width: "fit-content", marginRight: "15px" }}>
							<Box className={classes.Titre1a} style={{ color: "#435EF7" }}>
								{text.titre2.titre2}
							</Box>
						</div>
						<div style={{ width: "fit-content", marginRight: "15px", }}>
							<Box className={classes.Titre1a}>{text.titre2.titre3}</Box>
						</div>
						<div style={{ width: "fit-content", marginRight: "15px" }}>
							<Box className={classes.Titre1a} style={{ color: "#48EA54" }}>
								{text.titre2.titre4}
							</Box>
						</div>
					</div>
					<Box className={classes.Titre1d}>{text.b2b} </Box>
				</div>
				<div className={classes.BlocTouche}>
					<div className={classes.probButton}>
						{getWindowDimensions() > 860 && (
							<Box component="form" noValidate autoComplete="off">
								<OutlinedInput
									className={classes.input}
									placeholder={text.input.input1}
								/>
							</Box>
						)}
						{getWindowDimensions() <= 860 && (
							<Box component="form" noValidate autoComplete="off">
								<OutlinedInput
									className={classes.input}
									placeholder={text.input.input2}
								/>
							</Box>
						)}
						{getWindowDimensions() <= 600 && (
							<Buttone2
								variant="contained"
								disableRipple
								onClick={(e) => {
									setCheck(true);
									alert(
										"Cette fonctionnalité n'est pas encore lancé restez branché pour son lancement !! "
									);
								}}>
								{text.bouton.bouton1}
							</Buttone2>
						)}
						{getWindowDimensions() > 600 && (
							<Buttone
								variant="contained"
								disableRipple
								onClick={(e) => {
									setCheck(true);
									alert(
										"Cette fonctionnalité n'est pas encore lancé restez branché pour son lancement !! "
									);
								}}>
								{text.bouton.bouton2}
							</Buttone>
						)}
					</div>
					{Check && (
						<Box className={classes.act}>{text.act}</Box>
					)}
				</div>
				<div className={classes.BlocEcris}>
					<div className={classes.space}>
						<Box className={classes.ecris}>
						{text.text}
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
