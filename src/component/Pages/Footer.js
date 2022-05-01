import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import fb from "../../Images/fb.png";
import linkedin from "../../Images/linkedin.png";
import insta from "../../Images/insta.png";
import twitter from "../../Images/twitter.png";

const useStyles = makeStyles((theme) => ({
	Corp8: {
		marginTop:'5px',
		height: "60px",
		position: "static",
		left: 0,
		bottom: 0,
		width: "100%",
		background: "transparent",
		boxShadow: "none",
	},
	bloc: {
		position: "absolute",
		right: 55,
		marginTop: "15px",
	},
	Ecris: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#000000",
		fontSize: "18px",
		fontWeight: "800",
		marginTop: "15px",
		marginLeft: "30px",
		"&:hover": { cursor: "pointer" },
		[theme.breakpoints.down("850")]: { fontSize: "14px" },
		[theme.breakpoints.down("590")]: { fontSize: "11px" },
		[theme.breakpoints.down("550")]: { fontSize: "9px", marginTop: "20px" },
		[theme.breakpoints.down("485")]: { fontSize: "5px", marginTop: "25px" },
	},
	Logo: {
		width: 30,
		height: 30,
		marginLeft: 10,
		"&:hover": { cursor: "pointer" },
		[theme.breakpoints.down("850")]: { width: 15, height: 15 },
		[theme.breakpoints.down("485")]: { width: 10, height: 10 },
	},
}));

export default function LandingPage() {
	const classes = useStyles();

	//************************************************* */
	return (
		<div>
			<div className={classes.Corp8}>
				<div style={{ display: "flex", flexdirection: "row" }}>
					<div style={{ width: "20%" ,}}>
						<Box className={classes.Ecris}>2022 Algeria</Box>
					</div>
					<div style={{ width: "50%",  }}>
						<Box className={classes.Ecris} component="div" align={"center"}>
							servy.mass.dz@gmail.com
						</Box>
					</div>
					<div style={{ width: "30%", height: "60px" }}>
						<div className={classes.bloc}>
							<img
								src={twitter}
								className={classes.Logo}
								onClick={(e) => {
									window.location.href =
										"/LandingPage";
								}}
								alt="fireSpot"
							/>
							<img
								src={insta}
								className={classes.Logo}
								onClick={(e) => {
									window.location.href =
										"https://instagram.com/servy.comm?igshid=YmMyMTA2M2Y=";
								}}
								alt="fireSpot"
							/>

							<img
								src={linkedin}
								className={classes.Logo}
								onClick={(e) => {
									window.location.href =
										"https://www.linkedin.com/company/servydz/";
								}}
								alt="fireSpot"
							/>
							<img
								src={fb}
								className={classes.Logo}
								onClick={(e) => {
									window.location.href =
										"https://web.facebook.com/search/top?q=servy ";
								}}
								alt="fireSpot"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	//******************************************** */
}
