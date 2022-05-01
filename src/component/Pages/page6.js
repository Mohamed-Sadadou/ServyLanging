import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import { Link } from "react-scroll";
import Logo from "../../Images/Frame 458logo.svg";
const useStyles = makeStyles((theme) => ({
	Corp7: {
		width: "98.9vw",
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
		[theme.breakpoints.down("600")]: { fontSize: "14px", marginTop: "20px" },
		[theme.breakpoints.down("490")]: { fontSize: "10px", marginTop: "20px" },
		[theme.breakpoints.down("250")]: { fontSize: "8px", marginTop: "20px" },
	},
	BlocEcris: {
		width: "90vw",
		height: "65vh",
		marginLeft: "auto",
		marginRight: "auto",
		display: "flex",
		flexDirection: "row",
		//[theme.breakpoints.down("750")]: { height: "550px",},
	},
	Carre: {
		width: "20%",
		height: "350px",
	},
	Contenu: {
		width: "150px",
		height: "220px",
	},
	Logo: {
		width: "20vw",
		height: "20vw",
		marginTop: "-30px",
		"&:hover": { cursor: "pointer" },
	},
	ContenuLinks: {
		width: "90vw",
		height: "120px",
		marginLeft: "auto",
		marginRight: "auto",
	},
}));

export default function LandingPage() {
	const classes = useStyles();

	//************************************************* */
	return (
		<div>
			<div className={classes.Corp7} id="About">
				<div style={{ height: "70px" }}></div>
				<div className={classes.BlocEcris}>
					<div style={{ width: "70%", height: "350px" }}>
						<Box className={classes.Text}>
							We are currently in our Beta testing phase so it would nice if we
							stay close, we want to here what do you think about our plaltform
							and why not join us in our user-interviews in this Phase.
						</Box>
						<Box className={classes.Text}>
							In case your want a place in the board team or in the building
							team you can contact us in our links bellow.
						</Box>
						<Box className={classes.Text}>
							Servy is platform and an Ecosystem that is trying to change the
							experience of the E-commerce in Algeria first and the world next.
							Join our Journey and let’s make a Cultural change ✨
						</Box>
					</div>
					<div style={{ width: "20%" }}></div>
					<div className={classes.Carre}>
						<div className={classes.Contenu}>
							<div style={{ height: "80px" }}></div>
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
							to="About"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							<Box className={classes.Links}></Box>
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
