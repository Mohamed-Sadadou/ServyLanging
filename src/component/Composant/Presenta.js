import * as React from "react";
import Box from "@mui/material/Box";
import {useState,  useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import img1 from "../../Images/1.png";
import img2 from "../../Images/2.png";
import img3 from "../../Images/3.png";
function getWindowDimensions() {
	const { innerWidth: width,  } = window;
	return width;
}
const useStyles = makeStyles((theme) => ({
	corp: {
		height: "70%",
		width: "90%",
		margin: "0px",
	},
	Content: {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		width:'100%',
		height:'100%',
		marginTop:'20px',
		[theme.breakpoints.down("500")]: {gridTemplateColumns: "repeat(1, 1fr)", },
	},
	BlocImage: {
		width: "100%",
		height: "100%",
		marginLeft:'auto',
		marginRight:'auto',
	},
	image: {
		marginTop: "70px",
		maxWidth: "480px",
		maxHeight: "370px",
		width: "100%",
		height: "80%",
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
	},
	BlocContent: {
		width: "100%",
		height: "100%",
	},
	ContenuEcris: {
		width: "50%",
		height: "80%",
		marginRight: "auto",
		marginLeft: "auto",
	},
	TitreBleu: {
		fontFamily: " 'Manrope', sans-serif",
		width: "45vw",
		color: "#012A65",
		display: "flex",
		flexdirection: "row",
		fontSize: "38px",
		marginTop: "10px",
		fontWeight: "700",
		[theme.breakpoints.down("1210")]: { fontSize: "34px" },
		[theme.breakpoints.down("1000")]: { fontSize: "30px" },
		[theme.breakpoints.down("800")]: { fontSize: "24px" },
		[theme.breakpoints.down("650")]: { fontSize: "17px" },
	},
	Desc: {
		width: "45vw",
		fontFamily: " 'Manrope', sans-serif",
		color: "#2A313C",
		display: "flex",
		flexdirection: "row",
		fontSize: "18px",
		marginTop: "10px",
		fontWeight: "500",
		[theme.breakpoints.down("1210")]: { fontSize: "18px" },
		[theme.breakpoints.down("1000")]: { fontSize: "18px" },
		[theme.breakpoints.down("800")]: { fontSize: "16px" },
		[theme.breakpoints.down("670")]: { fontSize: "14px" },
		[theme.breakpoints.down("570")]: { fontSize: "12px" },
	},
	Action: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#DF8906",
		"&:hover": { cursor: "pointer" },
		display: "flex",
		flexdirection: "row",
		fontSize: "18px",
		marginTop: "10px",
		fontWeight: "800",
	},
}));

export default function BasicCard(props) {
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
	if (props.num === "1" || props.num === "3") {
		return (
			<div className={classes.corp}>
				<div className={classes.Content}>
					<div className={classes.BlocImage}>
						{props.num === "1" && (
							<img src={img1} className={classes.image} alt="fireSpot" />
						)}
						{props.num === "3" && (
							<img src={img3} className={classes.image} alt="fireSpot" />
						)}
					</div>
					<div className={classes.BlocContent}>
						{getWindowDimensions() <= 750 && (
							<div style={{ height: "60px" }}></div>
						)}
						{getWindowDimensions() > 750 && (
							<div style={{ height: "80px" }}></div>
						)}

						<div className={classes.ContenuEcris}>
							<Typography>
								<Box className={classes.TitreBleu}>{props.Titre}</Box>
								{getWindowDimensions() <= 660 && (
									<div style={{ height: "5px" }}></div>
								)}
								{getWindowDimensions() > 750 && (
									<div style={{ height: "25px" }}></div>
								)}

								<Box className={classes.Desc}>{props.Desc}</Box>
								{getWindowDimensions() <= 1000 && (
									<div style={{ height: "10px" }}></div>
								)}
								{getWindowDimensions() > 1000 && (
									<div style={{ height: "60px" }}></div>
								)}

								<Box
									className={classes.Action}
									onClick={(e) => {
										window.location.href = "/Journey ";
									}}>
									Let’s Start {"( => )"}
								</Box>
							</Typography>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className={classes.corp}>
				<div className={classes.Content}>
					<div className={classes.BlocContent}>
						{getWindowDimensions() <= 750 && (
							<div style={{ height: "60px" }}></div>
						)}
						{getWindowDimensions() > 750 && (
							<div style={{ height: "80px" }}></div>
						)}
						<div className={classes.ContenuEcris}>
							<Typography>
								<Box className={classes.TitreBleu}>{props.Titre}</Box>
								{getWindowDimensions() <= 660 && (
									<div style={{ height: "5px" }}></div>
								)}
								{getWindowDimensions() > 750 && (
									<div style={{ height: "25px" }}></div>
								)}

								<Box className={classes.Desc}>{props.Desc}</Box>
								{getWindowDimensions() <= 1000 && (
									<div style={{ height: "10px" }}></div>
								)}
								{getWindowDimensions() > 1000 && (
									<div style={{ height: "60px" }}></div>
								)}

								<Box className={classes.Action}>Let’s Start {"( => )"}</Box>
							</Typography>
						</div>
					</div>
					<div className={classes.BlocImage}>
						{props.num === "2" && (
							<img src={img2} className={classes.image} alt="fireSpot" />
						)}
					</div>
				</div>
			</div>
		);
	}
}
