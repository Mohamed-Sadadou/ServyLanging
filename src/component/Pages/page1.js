import React from "react";
import { useState, useLayoutEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Back1 from "../../Images/arriere1.jpg";
import NavBar from "../Composant/NavBar";

import "react-slideshow-image/dist/styles.css";
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
	maxWidth:'250px',
	fontSize: 16,
	padding: "6px 12px",
	lineHeight: 1.5,
	borderRadius: "0px 5px 5px 0px",
	backgroundColor: "#9AC3FE",
	color: "black",
	fontWeight:'bold',
	"&:hover": {
		backgroundColor: "#68A6FD",
	},
});
const Buttone2 = styled(Button)({
	fontFamily: " 'Manrope', sans-serif",
	boxShadow: "none",
	textTransform: "none",
	width: "100%",
	height: "50px",
	fontSize: 16,
	padding: "6px 12px",
	lineHeight: 1.5,
	borderRadius: "0px 5px 5px 0px",
	backgroundColor: "#9AC3FE",
	color: "white",
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
		backgroundRepeat: "no-repeat",
		[theme.breakpoints.down("470")]: {height: "80vh", },
	},

	Titre: {
		fontFamily: " 'Manrope', sans-serif",
		color: "white",
		fontSize: 56,
		fontWeight: "bold",
		[theme.breakpoints.down("850")]: { fontSize: 42 },
		[theme.breakpoints.down("560")]: { fontSize: 36 },
		[theme.breakpoints.down("458")]: { fontSize: 26 },
	},
	Titre1a: {
		fontFamily: " 'Manrope', sans-serif",
		color: "white",
		fontSize: 56,
		minWidth:'140px',
		marginTop: "-20px",
		fontWeight: "bold",
		[theme.breakpoints.down("930")]: { fontSize: 42,minWidth:'100px', },
		[theme.breakpoints.down("703")]: { fontSize: 32,minWidth:'80px',  },
		[theme.breakpoints.down("461")]: { fontSize: 18,minWidth:'50px',  },
		[theme.breakpoints.down("271")]: { fontSize: 8,minWidth:'20px',},
	},
	Titre1b: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#435EF7",
		fontSize: 56,
		marginTop: "-20px",
		fontWeight: "bold",
		[theme.breakpoints.down("930")]: { fontSize: 42 },
		[theme.breakpoints.down("703")]: { fontSize: 32 },
		[theme.breakpoints.down("461")]: { fontSize: 18 },
		[theme.breakpoints.down("271")]: { fontSize: 8},
	},
	Titre1c: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#48EA54",
		fontSize: 56,
		marginTop: "-20px",
		fontWeight: "bold",
		[theme.breakpoints.down("930")]: { fontSize: 42 },
		[theme.breakpoints.down("703")]: { fontSize: 32 },
		[theme.breakpoints.down("461")]: { fontSize: 18 },
		[theme.breakpoints.down("271")]: { fontSize: 8},
		
	},
	Boite1: {
		width: "85%",
		padding: "10px",
		display: "grid",
		maxWidth:'760px',
		gridTemplateColumns: "repeat(7, 1fr)",
		marginRight: "auto",
		marginLeft: "auto",
		[theme.breakpoints.down("930")]: { maxWidth:'580px',},
		[theme.breakpoints.down("703")]: { width: "66%",minWidth:'460px',},
		[theme.breakpoints.down("461")]: { width: "40%",minWidth:'270px',},
		[theme.breakpoints.down("271")]: { width: "50%",minWidth:'2px',marginTop:'20px'},
	},
  Boite:{
	  width:'5px',
  },
	probButton: {
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "50px",
		height: "50px",
		width: "70%",
		maxWidth:'500px',
		backgroundColor: "#E6F0FF",
		borderRadius: "5px",
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		[theme.breakpoints.down("590")]: { 	width: "80%", },
	},
	input: {
		width: "100%",
		height: "45px",
		marginTop: "5px",
		borderRadius: "5px 0px 00px 5px",
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
/*
	const fadeImages = [
		{
			url: classes.Corp1,
		},
		{
			url: classes.Corp2,
		},
		{
			url: classes.Corp3,
		},
	];
*/
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
					<NavBar id="0" />
					<div>
						<div className={classes.vide}>
							<Typography> </Typography>
						</div>
						<Typography
							className={classes.Titre}
							component="div"
							align={"center"}>
							Start Your Online Presence
						</Typography>
						{getWindowDimensions()}
						<div className={classes.Boite1}>
							<Box className={classes.Titre1a}>from </Box>
							<div className={classes.Boite}> </div>
							<Box className={classes.Titre1b}>Everywhere </Box>
							<div className={classes.Boite}> </div>
							<Box className={classes.Titre1a}>& For </Box>
							<div className={classes.Boite}> </div>
							<Box className={classes.Titre1c}>Free. </Box>
						</div>
					</div>
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
						{getWindowDimensions() <= 590 && (
							<Buttone2
								variant="contained"
								disableRipple
								onClick={(e) => {
									alert(
										"Cette fonctionnalité n'est pas encore lancé restez branché pour son lancement !! "
									);
								}}>
								Register
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
								Get Registration Link
							</Buttone>
						)}
					</div>
				</div>
			
	);

	//******************************************** */
}
