import React from "react";
import { useContext, useState, useEffect, useLayoutEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Back1 from "../../Images/arriere1.jpg";
import Back2 from "../../Images/arriere2.jpg";
import Back3 from "../../Images/arriere3.jpg";
import comp from "../../Images/logos.png";
import NavBar from "../Composant/NavBar";
import { Fade } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
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
	backgroundColor: "#9AC3FE",
	color: "white",
	fontFamily: "",
	"&:hover": {
		backgroundColor: "#68A6FD",
	},
});
const Buttone2 = styled(Button)({
	fontFamily: " 'Manrope', sans-serif",
	boxShadow: "none",
	textTransform: "none",
	width: "200px",
	height: "50px",
	fontSize: 16,
	padding: "6px 12px",
	lineHeight: 1.5,
	borderRadius: "0px 5px 5px 0px",
	backgroundColor: "#9AC3FE",
	color: "white",
	fontFamily: "",
	"&:hover": {
		backgroundColor: "#68A6FD",
	},
});
const useStyles = makeStyles((theme) => ({
	vide: {
		height: "80px",
	},
	Corp1: {
		width: "98.9vw",
		height: "100vh",
		backgroundImage: `url(${Back1})`,
		backgroundPosition: "center",
	},
	Corp2: {
		width: "98.9vw",
		height: "100vh",
		backgroundImage: `url(${Back2})`,
		backgroundPosition: "center",
	},
	Corp3: {
		width: "98.9vw",
		height: "100vh",
		backgroundImage: `url(${Back3})`,
		backgroundPosition: "center",
	},

	Titre: {
		fontFamily: " 'Manrope', sans-serif",
		color: "white",
		fontSize: 56,
		fontWeight: "bold",
		[theme.breakpoints.down("850")]: { fontSize: 42 },
		[theme.breakpoints.down("560")]: { fontSize: 36 },
	},
	Titre1a: {
		fontFamily: " 'Manrope', sans-serif",
		color: "white",
		fontSize: 56,
		marginTop: "-20px",
		fontWeight: "bold",
		[theme.breakpoints.down("850")]: { fontSize: 42 },
		[theme.breakpoints.down("590")]: { fontSize: 32 },
	},
	Titre1b: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#435EF7",
		fontSize: 56,
		marginTop: "-20px",
		fontWeight: "bold",
		[theme.breakpoints.down("850")]: { fontSize: 42 },
		[theme.breakpoints.down("590")]: { fontSize: 32 },
	},
	Titre1c: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#48EA54",
		fontSize: 56,
		marginTop: "-20px",
		fontWeight: "bold",
		[theme.breakpoints.down("850")]: { fontSize: 42 },
		[theme.breakpoints.down("590")]: { fontSize: 32 },
	},
	Boite1: {
		width: "760px",
		padding: "10px",
		display: "flex",
		flexdirection: "row",
		marginRight: "auto",
		marginLeft: "auto",
		[theme.breakpoints.down("850")]: { width: "590px" },
		[theme.breakpoints.down("590")]: { width: "470px" },
	},
	Boite: {
		width: "20px",
	},

	probButton: {
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "50px",
		height: "50px",
		width: "720px",
		backgroundColor: "#E6F0FF",
		// backgroundColor: 'red',
		borderRadius: "5px",
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		[theme.breakpoints.down("850")]: { width: "550px" },
		[theme.breakpoints.down("591")]: { width: "470px" },
		[theme.breakpoints.down("561")]: { width: "400px" },
	},
	input: {
		width: "450px",
		height: "45px",
		marginTop: "5px",
		borderRadius: "5px 0px 00px 5px",
		[theme.breakpoints.down("850")]: { width: "280px" },
		[theme.breakpoints.down("560")]: { width: "200px" },
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
		<div id="first">
			<Fade
				arrows={false}
				autoplay={true}
				duration={2000}
				transitionDuration={1500}
				infinite={true}>
				{fadeImages.map((fadeImage, index) => (
					
					<div className="each-fade"  key={index}>
						<div className={fadeImage.url} >
							<NavBar id="0"/>
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
											alert("Cette fonctionnalité n'est pas encore lancé restez branché pour son lancement !! ");
										}}>
										Register
									</Buttone2>
								)}
								{getWindowDimensions() > 590 && (
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
						</div>
					</div>
				))}
			</Fade>
		</div>
	);

	//******************************************** */
}
