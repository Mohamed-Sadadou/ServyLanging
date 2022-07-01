import React from "react";
import Typography from "@material-ui/core/Typography";
import { useState, useLayoutEffect, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Presenta from "../Composant/Presenta";
import Box from "@mui/material/Box";
import LangueContext from "../LangueContext";
import Logo from "../../Images/Logo C.png";

const useStyles = makeStyles((theme) => ({
	vide2: {
		height: "50px",
	},
	Corp2: {
		width: "100%",
		height: "1800px",
		[theme.breakpoints.down("1000")]: { height: "1500px" },
		[theme.breakpoints.down("660")]: { height: "1350px" },
		[theme.breakpoints.down("500")]: { height: "2500px" },
	},
	bloc: {
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "10px",
		alignItems: "center",
		height: "1500px",
		width: "90%",
		display: "Grid",
		justifyContent: "center",
		[theme.breakpoints.down("1000")]: { height: "1200px" },
		[theme.breakpoints.down("660")]: { height: "1040px" },
		[theme.breakpoints.down("500")]: { height: "2200px" },
	},
	BlocTitre: {
		width: "92%",
		height: "180px",
		marginLeft: "auto",
		marginRight: "auto",
		display: "flex",
		flexdirection: "row",
	},
	BlocTitreEcris: {
		width: "60%",
		minWidth: "70px",
		height: "220px",
	},
	EcrisBleu: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#024097",
		display: "flex",
		flexdirection: "row",
		fontSize: "55px",
		marginTop: "-10px",
		fontWeight: "bold",
		[theme.breakpoints.down("800")]: { fontSize: "38px" },
		[theme.breakpoints.down("600")]: { fontSize: "34px" },
		[theme.breakpoints.down("525")]: { fontSize: "28px" },
	},
	Ecris1: {
		fontFamily: " 'Manrope', sans-serif",
		color: "black",
		display: "flex",
		flexdirection: "row",
		fontSize: "38px",
		marginTop: "10px",
		fontWeight: "bold",
		[theme.breakpoints.down("1043")]: { fontSize: "32px", marginTop: "15px" },
		[theme.breakpoints.down("920")]: { fontSize: "26px", marginTop: "20px" },
		[theme.breakpoints.down("800")]: { fontSize: "20px", marginTop: "5px" },
		[theme.breakpoints.down("600")]: { fontSize: "16px", marginTop: "5px" },
		[theme.breakpoints.down("525")]: { fontSize: "12px", marginTop: "4px" },
	},
	Ecris2: {
		fontFamily: " 'Manrope', sans-serif",
		color: "black",
		fontSize: "38px",
		marginTop: "-5px",
		fontWeight: "bold",
		marginBottom: "60px",
		[theme.breakpoints.down("1043")]: { fontSize: "32px", marginTop: "15px" },
		[theme.breakpoints.down("920")]: { fontSize: "26px", marginTop: "20px" },
		[theme.breakpoints.down("800")]: { fontSize: "20px", marginTop: "5px" },
		[theme.breakpoints.down("600")]: { fontSize: "16px", marginTop: "5px" },
		[theme.breakpoints.down("525")]: { fontSize: "12px", marginTop: "4px" },
	},
	BlocLogo: {
		width: "20%",
		marginLeft: "auto",
		marginRight: 25,
		height: "100%",
	},
	Logo: {
		width: "20vw",
		height: "20vw",
		marginTop: "-30px",
		[theme.breakpoints.down("600")]: { width: "150px", height: "150px" },
		[theme.breakpoints.down("500")]: { width: "110px", height: "110px" },
		[theme.breakpoints.down("360")]: { width: "90px", height: "90px" },
	},
}));

export default function LandingPage() {
	const classes = useStyles();
	const [Langue,setLangue]=useState("");
		const { langue, setlangue } = useContext(LangueContext);
		
		if(langue!==Langue)	setLangue(langue);
	var text;
	if (Langue === "fr") {
		text = {
			titre: ", L'endroit ou commencer son ",
			titre1: "Projet de vente en ligne...",
			Presenta1Titre:
				"Construisez une boutique où publier vos merveilleux Produis.",
			Presenta1desc:
				" Creez une boutique et commencer a introduire vos produits pour etre connus des consomateurs.",
			Presenta2Titre:
				"Commencez gratuitement et developpez votre business avec les packs Servy.",
			Presenta2desc:
				" Utilisez les packs pour pouvoir developper votre business et pouvoir le gerer plus facilement",
			Presenta3Titre: "Custimizez votre boutique pour etre différent.",
			Presenta3desc:
				" Personnalisez votre boutique et soyez different, demarquez vous et faites les meilleurs ventes",
		};
	} else {
		text = {
			titre: ", Your Place To Start Your",
			titre1: "Selling Online Business...",
			Presenta1Titre: "Build a Shop to publish your Gorgeous Products.",
			Presenta1desc:
				" Create a shop and start filling it with your physical shop products so you can start beiung known to the customers",
			Presenta2Titre: "Start for free and Grow your business by Servy Packs.",
			Presenta2desc:
				" Create a shop and start filling it with your physical shop products so you can start beiung known to the customers",
			Presenta3Titre: "Custimize your Shop to be Different.",
			Presenta3desc:
				" Create a shop and start filling it with your physical shop products so you can start beiung known to the customers",
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
		<div>
			<div className={classes.Corp2} id="2">
				<div className={classes.vide2}>
					<Typography> </Typography>
				</div>
				<div className={classes.BlocTitre}>
					<div className={classes.BlocTitreEcris}>
						<div style={{ height: "30px" }}> </div>
						<Typography
							style={{ display: "flex", flexdirection: "row" }}
							component="div"
							align={"left"}>
							<Box className={classes.EcrisBleu}>Servy </Box>
							<Box className={classes.Ecris1}> {text.titre} </Box>
						</Typography>
						<Typography
							className={classes.Ecris2}
							component="div"
							align={"left"}>
							{text.titre1}
						</Typography>
					</div>
					<div className={classes.BlocLogo}>
						<div style={{ height: "30px" }}> </div>
						<img src={Logo} className={classes.Logo} alt="fireSpot" />
					</div>
				</div>
				<div className={classes.bloc}>
					<Presenta
						num="1"
						Titre={text.Presenta1Titre}
						Desc={text.Presenta1desc}
					/>
					<Presenta
						num="2"
						Titre={text.Presenta2Titre}
						Desc={text.Presenta2desc}
					/>
					<Presenta
						num="3"
						Titre={text.Presenta3Titre}
						Desc={text.Presenta3desc}
					/>
				</div>
			</div>
		</div>
	);

	//******************************************** */
}
