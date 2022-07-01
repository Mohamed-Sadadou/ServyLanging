import React from "react";
import { useState, useContext } from "react";
import LangueContext from "../LangueContext";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import { Link } from "react-scroll";
import Logo from "../../Images/Frame 458logo.svg";
const useStyles = makeStyles((theme) => ({
	Corp7: {
		width: "100%",
		height: "650px",
		backgroundColor: "white",
	},
	Links: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#000000",
		fontSize: "18px",
		fontWeight: "700",
		marginTop: "15px",
		"text-decoration-line": "underline",
		"&:hover": { cursor: "pointer" },
		[theme.breakpoints.down("550")]: { fontSize: "16px", },
		[theme.breakpoints.down("490")]: { fontSize: "12px", },
		[theme.breakpoints.down("250")]: { fontSize: "10px", marginTop: "20px" },
	},
	Text: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#000000",
		fontSize: "24px",
		fontWeight: "700",
		[theme.breakpoints.down("1100")]: { fontSize: "20px" },
		[theme.breakpoints.down("900")]: { fontSize: "18px", marginTop: "20px" },
		[theme.breakpoints.down("750")]: { fontSize: "16px", marginTop: "20px" },
		[theme.breakpoints.down("645")]: { fontSize: "14px", marginTop: "20px" },
		[theme.breakpoints.down("490")]: { fontSize: "10px", marginTop: "20px" },
		[theme.breakpoints.down("250")]: { fontSize: "8px", marginTop: "20px" },
	},
	BlocEcris: {
		width: "90%",
		height: "50%",
		marginLeft: "auto",
		marginRight: "auto",
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	Carre: {
		width: "25%",height:'350px',
	},
	Contenu: {
		width: "100%",
	},
	Logo: {
		width: "100%",
		height: "100%",
		"&:hover": { cursor: "pointer" },
	},
	ContenuLinks: {
		width: "90%",
		height: "120px",
		marginLeft: "auto",
		marginRight: "auto",
	},
}));

export default function LandingPage() {
	const classes = useStyles();
	const [Langue,setLangue]=useState("");
	const { langue } = useContext(LangueContext);
	
	if(langue!==Langue)	setLangue(langue);
	var text;
	if (Langue === "fr") {
		text = {
			content1:"Nous sommes actuellement dans notre phase de test bêta donc il serait bien que nous restions proches, nous voulons ici ce que vous pensez de notre plaltform et pourquoi ne pas nous rejoindre dans nos entretiens utilisateurs dans cette phase.",
			content2:"Si vous voulez une place dans l’équipe de conseil ou dans l’équipe de construction, vous pouvez nous contacter dans nos liens ci-dessous.",
			content3:"Servy est une plateforme et un écosystème qui tente de changer l’expérience du commerce électronique en Algérie d’abord et dans le monde à venir. Joignez-vous à notre parcours et changeons de culture ✨",
		};
	} else {
		text = {
			content1:"We are currently in our Beta testing phase so it would nice if we stay close, we want to here what do you think about our plaltform and why not join us in our user-interviews in this Phase.",
			content2:"In case your want a place in the board team or in the building team you can contact us in our links bellow.",
			content3:"Servy is platform and an Ecosystem that is trying to change the experience of the E-commerce in Algeria first and the world next. Join our Journey and let’s make a Cultural change ✨",
		};
	}
	//************************************************* */
	return (
		<div>
			<div className={classes.Corp7} id="About">
				<div style={{ height: "70px" }}></div>
				<div className={classes.BlocEcris}>
					<div style={{ width: "60%", height: "350px", }}>
						<Box className={classes.Text}>
						{text.content1}	
						</Box>
						<Box className={classes.Text}>
						{text.content2}
						</Box>
						<Box className={classes.Text}>
						{text.content3}
						</Box>
					</div>
					
					<div className={classes.Carre}>
						<div className={classes.Contenu}>
							<Link
							activeClass="active"
							to="first"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							<img src={Logo} className={classes.Logo} alt="fireSpot" />
						</Link>
							

						</div>
					</div>
				</div>

				<div className={classes.ContenuLinks}>
					<Typography component="div">
						<Link
							activeClass="active"
							to="About"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							<Box className={classes.Links}>About Us</Box>
						</Link>
						
						<Link
							activeClass="active"
							to="Services"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							<Box className={classes.Links}>Services</Box>
						</Link>
					</Typography>
				</div>
			</div>
		</div>
	);

	//******************************************** */
}
