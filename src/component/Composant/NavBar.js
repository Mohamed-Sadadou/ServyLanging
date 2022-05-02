import * as React from "react";
import { useState, useLayoutEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo1 from "../../Images/Logo C (1).png";
import Logo from "../../Images/Logo.png";
import Logo1n from "../../Images/Logo C.png";
import Logon from "../../Images/Logo (1).png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";

function getWindowDimensions() {
	const { innerWidth: width } = window;
	return width;
}

const useStyles = makeStyles((theme) => ({
	Toolbar: {
		width: "100%",
		display: "flex",
		flexdirection: "row",
		[theme.breakpoints.down("900")]: { height: "20px" },
	},
	LogoBloc: {
		marginLeft: "00px",
		width: "10%",
		height: "80%",
		margin: "5px",
	},
	Logo: {
		width: 220,
		height: 78,
		"&:hover": { cursor: "pointer" },
		[theme.breakpoints.down("1100")]: {
			width: 160,
			height: 57,
			marginTop: "-5px",
			marginRight: 10,
		},
		[theme.breakpoints.down("900")]: {
			width: 70,
			height: 70,
			marginRight: 10,
			marginTop: "-10px",
		},
		[theme.breakpoints.down("801")]: {
			width: 70,
			height: 70,
			marginTop: "-12px",
		},
		[theme.breakpoints.down("590")]: {
			marginRight: "0px",
			marginLeft: "-15px",
		},
		[theme.breakpoints.down("590")]: {
			marginRight: "0px",
			marginLeft: "-15px",
		},
	},
	act: {
		fontFamily: " 'Manrope', sans-serif",
		fontWeight: "bold",
		color: "white",
		fontSize: 14,
	},
	ActionBloc: {
		width: "100%",
		minWidth: "130px",
		fontSize: "14px",
		marginLeft: "25px",
		[theme.breakpoints.down("1100")]: {
			width: "35vw",
			fontSize: "13px",
			marginLeft: "25px",
		},
		[theme.breakpoints.down("900")]: {
			marginRight: "125px",
			marginLeft: "15px",
		},
		[theme.breakpoints.down("800")]: {
			width: "35vw",
			fontSize: "10px",
			marginLeft: "5px",
		},
		[theme.breakpoints.down("820")]: {
			width: "35vw",
			fontSize: "10px",
			marginLeft: "5px",
		},
		[theme.breakpoints.down("702")]: {
			width: "35vw",
			fontSize: "10px",
			marginLeft: "5px",
			marginRight: "50px",
		},
		[theme.breakpoints.down("590")]: { marginRight: "10px" },

		marginRight: "45px",
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
	},
	vide: {
		width: "18vw",
		marginRight: "20px",
		height: "40px",
		[theme.breakpoints.down("1000")]: { width: "12vw" },
		[theme.breakpoints.down("600")]: { width: "12vw" },
	},
	vide2: {
		backgroundColor: "green",
		width: "80px",
		height: "10px",
		[theme.breakpoints.down("630")]: { width: "60px" },
	},
	ButtonBloc: {
		width: "25%",
		right: 0,
		height: "40px",
		display: "flex",
		Float: "right",
		[theme.breakpoints.down("650")]: { marginRight: "0px" },
	},
	ActionText: {
		"&:hover": { cursor: "pointer" },
	},
	vidos: {
		width: "15%",
		backgroundColor: "red",
	},
}));

const ButtonSpe = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	width: "95%",
	height: "100%",
	fontSize: 14,
	padding: "6px 12px",
	lineHeight: 1.5,
	border: "solid 0.5px #68A6FD",
	borderRadius: "5px",
	backgroundColor: "#9AC3FE",
	color: "black",
	fontFamily: " 'Manrope', sans-serif",
	fontWeight: "bold",
	"&:hover": {
		backgroundColor: "#68A6FD",
		boxShadow: "none",
	},
});

export default function MenuAppBar(props) {
	const classes = useStyles();

	var color;

	if (props.id === "1") color = { color: "black" };
	else color = { color: "white" };
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
	return (
		<Box sx={{ flexGrow: 1, width: "98.9vw" }}>
			<AppBar
				position="static"
				style={{ background: "transparent", boxShadow: "none" }}>
				<Toolbar className={classes.Toolbar}>
					{getWindowDimensions() <= 900 && props.id === "0" && (
						<div
							className={classes.LogoBloc}
							onClick={(e) => {
								window.location.href = "/LandingPage ";
							}}>
							<img src={Logo1} className={classes.Logo} alt="fireSpot" />
						</div>
					)}
					{getWindowDimensions() > 900 && props.id === "0" && (
						<div
							className={classes.LogoBloc}
							onClick={(e) => {
								window.location.href = "/LandingPage ";
							}}>
							<img src={Logo} className={classes.Logo} alt="fireSpot" />
						</div>
					)}
					{getWindowDimensions() <= 900 && props.id === "1" && (
						<div
							className={classes.LogoBloc}
							onClick={(e) => {
								window.location.href = "/LandingPage ";
							}}>
							<img src={Logo1n} className={classes.Logo} alt="fireSpot" />
						</div>
					)}
					{getWindowDimensions() > 900 && props.id === "1" && (
						<div
							className={classes.LogoBloc}
							onClick={(e) => {
								window.location.href = "/LandingPage ";
							}}>
							<img src={Logon} className={classes.Logo} alt="fireSpot" />
						</div>
					)}

					{getWindowDimensions() > 1000 && <div className={classes.vide}></div>}
					<div className={classes.ActionBloc}>
						<Link
							activeClass="active"
							to="About"
							spy={true}
							smooth={true}
							offset={-70}
							duration={1000}>
							<div className={classes.ActionText}>
								<Typography
									style={{
										fontFamily: " 'Manrope', sans-serif",
										fontWeight: "bold",
										color: color.color,
										fontSize: "100%",
									}}
									component="div"
									align={"center"}></Typography>
							</div>
						</Link>
						{getWindowDimensions() >= 702 && (
							<Link
								activeClass="active"
								to="Services"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}>
								<div className={classes.ActionText}>
									<Typography
										style={{
											fontFamily: " 'Manrope', sans-serif",
											fontWeight: "bold",
											color: color.color,
											fontSize: "100%",
										}}
										component="div"
										align={"center"}
										onClick={(e) => {
											if (props.id === "1") {
												window.location.href = "/LandingPage ";
											}
										}}>
										Our services
									</Typography>
								</div>
							</Link>
						)}
						{getWindowDimensions() < 702 && (
							<Link
								activeClass="active"
								to="Services"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}>
								<div className={classes.ActionText}>
									<Typography
										style={{
											fontFamily: " 'Manrope', sans-serif",
											fontWeight: "bold",
											color: color.color,
											fontSize: "100%",
										}}
										component="div"
										align={"center"}>
										services
									</Typography>
								</div>
							</Link>
						)}
						<Link
							activeClass="active"
							to="About"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							<div className={classes.ActionText}>
								<Typography
									style={{
										fontFamily: " 'Manrope', sans-serif",
										fontWeight: "bold",
										color: color.color,
										fontSize: "100%",
									}}
									component="div"
									onClick={(e) => {
										if (props.id === "1") {
											window.location.href = "/LandingPage ";
										}
									}}
									align={"center"}>
									About us
								</Typography>
							</div>
						</Link>
					</div>

					<div className={classes.vidos}></div>
					{getWindowDimensions() > 1100 && (
						<div className={classes.ButtonBloc}>
							<ButtonSpe
								variant="contained"
								disableRipple
								onClick={(e) => {
									window.location.href = "/Journey ";
								}}>
								Start you journey
							</ButtonSpe>
						</div>
					)}

					{getWindowDimensions() <= 1100 && (
						<div className={classes.ButtonBloc}>
							<ButtonSpe
								variant="contained"
								disableRipple
								onClick={(e) => {
									window.location.href = "/Journey ";
								}}>
								Start
							</ButtonSpe>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
