import React from "react";
import {useState,useLayoutEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
function getWindowDimensions() {
	const { innerWidth: width} = window;
	return width;
}
const Buttone = styled(Button)({
	fontFamily: " 'Manrope', sans-serif",
	boxShadow: "none",
	textTransform: "none",
	width: "100%",
	height: "50px",
	fontSize: 16,
	padding: "6px 12px",
	lineHeight: 1.5,
	borderRadius: "0px 5px 5px 0px",
	backgroundColor: "#68A6FD",
	color: "white",
	"&:hover": {
		backgroundColor: "#68A6FD",
		boxShadow: "5px 0px 5px #C4C4C4",
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
	backgroundColor: "#68A6FD",
	color: "white",
	"&:hover": {
		backgroundColor: "#68A6FD",
		boxShadow: "5px 0px 5px #C4C4C4",
	},
});
const useStyles = makeStyles((theme) => ({
	vide2: {
		height: "50px",
	},
	Corp6: {
		width: "98.9vw",
		height: "60vh",
		backgroundColor: "#F7F3EE",
	},
	probButton: {
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "-30px",
		height: "50px",
		width: "60%",
		backgroundColor: "#E6F0FF",
		borderRadius: "5px",
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
	},
	entete: {
		height: "70px",
		padding: "10px",
		width: "98.5vw",
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
	},
	trait: {
		height: "1px",
		width: "32vw",
		backgroundColor: "#C4C4C4",
		marginTop: "30px",
		[theme.breakpoints.down("900")]: { width: "28vw" },
	},
	ins: {
		fontFamily: " 'Manrope', sans-serif",
		color: "black",
		width: "33vw",
		minWidth: "190px",
		fontSize: "26px",
		marginTop: "10px",
		fontWeight: "800",
		[theme.breakpoints.down("1380")]: { fontSize: "26px" },
		[theme.breakpoints.down("1200")]: { fontSize: "18px" },
		[theme.breakpoints.down("900")]: { fontSize: "14px", marginTop: "20px" },
	},
	Titre: {
		fontFamily: " 'Manrope', sans-serif",
		color: "black",
		width: "60%",
		minWidth: "380px",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "-5px",
		fontStyle: "normal",
		fontWeight: "800",
		marginBottom: "60px",
		fontSize: "48px",
		[theme.breakpoints.down("1380")]: { fontSize: "42px" },
		[theme.breakpoints.down("1200")]: { fontSize: "34px" },
		[theme.breakpoints.down("1050")]: { fontSize: "26px", marginTop: "20px" },
	},
	input: {
		width: "100%",
		height: "45px",
		marginTop: "5px",
		borderRadius: "5px 0px 00px 5px",
	},
}));

export default function LandingPage() {
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
		<div>
			<div className={classes.Corp6} id="2">
				<div className={classes.vide2}></div>
				<div className={classes.entete}>
					<div className={classes.trait}></div>
					<Typography className={classes.ins} align={"center"}>
						Don’t be afraid to try it’s free
					</Typography>
					<div className={classes.trait}></div>
				</div>
				<Typography className={classes.Titre} component="div" align={"center"}>
					ARE YOU READY FOR SERVY ?
				</Typography>
				<div className={classes.probButton}>
					<Box component="form" noValidate autoComplete="off">
						<OutlinedInput
							className={classes.input}
							placeholder="Register by your Email ✉️ or Phone 📞"
						/>
					</Box>

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
          	{getWindowDimensions() <= 600 && (
						<Buttone2
							variant="contained"
							disableRipple
							onClick={(e) => {
								alert("Cette fonctionnalité n'est pas encore lancé restez branché pour son lancement !! ");
							}}>
							Get Link
						</Buttone2>
					)}
				</div>
			</div>
		</div>
	);

	//******************************************** */
}
