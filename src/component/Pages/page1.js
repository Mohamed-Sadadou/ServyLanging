import React from "react";
import { useState, useLayoutEffect, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Back1 from "../../Images/arriere1.jpg";
import Back2 from "../../Images/arriere2.jpg";
import Back3 from "../../Images/arriere3.jpg";
import LangueContext from "../LangueContext";
import NavBar from "../Composant/NavBar";
import "react-slideshow-image/dist/styles.css";
function getWindowDimensions() {
	const { innerWidth: width } = window;
	return width;
}
const Buttone = styled(Button)({
	fontFamily: " 'Manrope', sans-serif",
	boxShadow: "none",
	marginRight: 0,
	marginLeft: "auto",
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
	width: "50%",
	minWidth: "120px",
	height: "50px",
	marginRight: 0,
	marginLeft: "auto",
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
	vide: {
		height: "80px",
	},
	fade: {
		width: "100%",
		height: "100vh",
	},
	Corp1: {
		width: "100%",
		height: "100vh",
		backgroundImage: `url(${Back1})`,
		backgroundPosition: "center",
		[theme.breakpoints.down("485")]: {height: "70vh", },
	},
	Corp2: {
		width: "100%",
		height: "100vh",
		backgroundImage: `url(${Back2})`,
		backgroundPosition: "center",
	},
	Corp3: {
		width: "100%",
		height: "100vh",
		backgroundImage: `url(${Back3})`,
		backgroundPosition: "center",
	},

	Titre: {
		fontFamily: " 'Manrope', sans-serif",
		color: "white",
		fontSize: 56,
		fontWeight: "bold",
		[theme.breakpoints.down("960")]: { fontSize: 42 },
		[theme.breakpoints.down("725")]: { fontSize: 32 },
		[theme.breakpoints.down("565")]: { fontSize: 28 },
		[theme.breakpoints.down("485")]: { fontSize: 24 },
		[theme.breakpoints.down("415")]: { fontSize: 20 },
		[theme.breakpoints.down("350")]: { fontSize: 16 },
		[theme.breakpoints.down("280")]: { fontSize: 14 },
	},
	Titre1a: {
		fontFamily: " 'Manrope', sans-serif",
		color: "white",
		fontSize: 56,
		marginTop: "-20px",
		fontWeight: "bold",
		[theme.breakpoints.down("960")]: { fontSize: 42 },
		[theme.breakpoints.down("725")]: { fontSize: 32 },
		[theme.breakpoints.down("565")]: { fontSize: 28 },
		[theme.breakpoints.down("485")]: { fontSize: 24 },
		[theme.breakpoints.down("415")]: { fontSize: 20},
		[theme.breakpoints.down("350")]: { fontSize: 16 },
		[theme.breakpoints.down("280")]: { fontSize: 14 },
	},
	Boite1: {
		padding: "10px",
		display: "flex",
		width: "fit-content",
		flexDirection: "row",
		marginRight: "auto",
		marginLeft: "auto",
		
	},
	Boite: {
		width: "5px",
	},
	probButton: {
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "50px",
		height: "50px",
		width: "70%",
		maxWidth: "600px",
		backgroundColor: "#E6F0FF",
		borderRadius: "5px",
		display: "flex",
		flexDirection: "row",
		[theme.breakpoints.down("590")]: { width: "80%" },
	},
	input: {
		width: "190%",
		height: "45px",
		minWidth: "120px",
		marginTop: "5px",
		borderRadius: "5px 0px 00px 5px",
		[theme.breakpoints.down("470")]: {width: "100%", },
	},
	footer: {
		height: "100px",
		width: "98.9vw",
		backgroundColor: "white",
		display: "flex",
		flexItems: 2,
		position: "absolute",
		bottom: "0px",
		flexdirection: "row",
		justifycontent: "flex-start",
		flexwrap: "nowrap",
		alignitems: "stretch",
		aligncontent: "stretch",
	},
}));

export default function LandingPage() {
	const classes = useStyles();
	//const [Langue, setLangue] = useState("fr");
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
	const Content = () => {
		const [Langue,setLangue]=useState("");
		const { langue } = useContext(LangueContext);
		if(langue!==Langue)	setLangue(langue);
		var text;
		if (Langue === "fr") {
			text = {
				titre1: "Commencez votre presence en ligne",
				titre2: {
					titre1: "De",
					titre2: "Partout",
					titre3: "& ",
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
			};
		} else {
			text = {
				titre1: "Start Your Online Presence",
				titre2: {
					titre1: "from",
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
			};
		}
		return (
			<div>
				<NavBar id="0" />
				<div id="first">
					<div className={classes.vide}>
						<Typography> </Typography>
					</div>
					<Typography
						className={classes.Titre}
						component="div"
						align={"center"}>
						{text.titre1}
					</Typography>
					<div className={classes.Boite1}>
						<div style={{ width: "fit-content", marginRight: "15px" }}>
							<Box className={classes.Titre1a}>{text.titre2.titre1} </Box>
						</div>
						<div style={{ width: "fit-content", marginRight: "15px" }}>
							<Box className={classes.Titre1a} style={{ color: "#435EF7" }}>
								{text.titre2.titre2}
							</Box>
						</div>
						<div style={{ width: "fit-content", marginRight: "15px" }}>
							<Box className={classes.Titre1a}>{text.titre2.titre3}</Box>
						</div>
						<div style={{ width: "fit-content", marginRight: "15px" }}>
							<Box className={classes.Titre1a} style={{ color: "#48EA54" }}>
								{text.titre2.titre4}
							</Box>
						</div>
					</div>
				</div>
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
					{getWindowDimensions() <= 590 && (
						<Buttone2
							variant="contained"
							disableRipple
							onClick={(e) => {
								alert(
									"Cette fonctionnalité n'est pas encore lancé restez branché pour son lancement !! "
								);
							}}>
							{text.bouton.bouton1}
						</Buttone2>
					)}
					{getWindowDimensions() > 590 && (
						<Buttone
							variant="contained"
							disableRipple
							onClick={(e) => {
								alert(
									"Cette fonctionnalité n'est pas encore lancé restez branché pour son lancement !! "
								);
							}}>
							{text.bouton.bouton2}
						</Buttone>
					)}
				</div>
			</div>
		);
	};

	//************************************************* */
	return (
		<div className={classes.Corp1}>
			<Content />
		</div>
	);

	//******************************************** */
}
