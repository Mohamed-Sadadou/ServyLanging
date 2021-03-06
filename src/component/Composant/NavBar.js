import * as React from "react";
import { useState, useLayoutEffect, useContext } from "react";
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
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LangueContext from "../LangueContext";

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
			marginTop: "5px",
			marginRight: 10,
		},
		[theme.breakpoints.down("1000")]: {
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
		[theme.breakpoints.down("400")]: {
			width: 40,
			height: 40,
			marginTop: "5px",
		},
	},
	act: {
		fontFamily: " 'Manrope', sans-serif",
		fontWeight: "bold",
		color: "white",
		fontSize: 14,
	},
	ActionBloc: {
		height: "30px",
		width: "20%",
		minWidth: "130px",
		fontSize: "14px",
		marginLeft: "auto",
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
		[theme.breakpoints.down("400")]: { width: "50px", },
		marginRight: "45px",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	vide: {
		width: "18%",
		marginRight: "30px",
		height: "40px",
		[theme.breakpoints.down("1000")]: { width: "12%" },
		[theme.breakpoints.down("600")]: { width: "12%" },
	},
	vide2: {
		backgroundColor: "green",
		width: "80px",
		height: "10px",

		[theme.breakpoints.down("630")]: { width: "60px" },
	},
	ButtonBloc: {
		width: "fit-content",
		right: 0,
		height: "40px",
		display: "flex",
		Float: "right",
		[theme.breakpoints.down("650")]: { marginRight: "0px" },
		[theme.breakpoints.down("450")]: {width: "50px", },
	},
	ActionText: {
		"&:hover": { cursor: "pointer" },
	},
	vidos: {
		width: "15%",
	},
	blockLangue: {
		width: 100,
		marginRight: 10,
		marginLeft: 20,
		marginTop: 8,
	},
	blockLangue2:{
		width: 100, marginRight: 0, marginLeft: "auto" 
	},
}));
const ButtonSpe = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	width: "100%",
	height: "100%",
	marginRight: 10,
	marginLeft: "auto",
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
	const [Langue, setLangue] = useState("");
	const { setlangue } = useContext(LangueContext);

	const handleChange = (event) => {
		if (event.target.value === "fr") {
			setLangue("fr");
		} else {
			setLangue("ang");
		}

		setlangue(event.target.value);
	};
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
		<Box sx={{ flexGrow: 0, width: "100%" }}>
			<AppBar
				position="static"
				style={{ background: "transparent", boxShadow: "none" }}>
				<Toolbar className={classes.Toolbar}>
					{getWindowDimensions() <= 1000 && props.id === "0" && (
						<div
							className={classes.LogoBloc}
							onClick={(e) => {
								window.location.href = "/LandingPage ";
							}}>
							<img src={Logo1} className={classes.Logo} alt="fireSpot" />
						</div>
					)}
					{getWindowDimensions() > 1000 && props.id === "0" && (
						<div
							className={classes.LogoBloc}
							onClick={(e) => {
								window.location.href = "/LandingPage ";
							}}>
							<img src={Logo} className={classes.Logo} alt="fireSpot" />
						</div>
					)}
					{getWindowDimensions() <= 1000 && props.id === "1" && (
						<div
							className={classes.LogoBloc}
							onClick={(e) => {
								window.location.href = "/LandingPage ";
							}}>
							<img src={Logo1n} className={classes.Logo} alt="fireSpot" />
						</div>
					)}
					{getWindowDimensions() > 1000 && props.id === "1" && (
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
										className={classes.linkEcris}
										style={{
											fontFamily: " 'Manrope', sans-serif",
											fontWeight: "bold",
											color: color.color,
											fontSize: "100%",
											marginTop: "10px",
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
											marginTop: "10px",
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
										marginTop: "10px",
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
					<div className={classes.blockLangue}>
						<div className={classes.blockLangue2}>
							<FormControl fullWidth>
								<Select
									sx={{
										width: "100px",
										height: "35px",
										fontSize: 12,
										color: color.color,
									}}
									value={Langue}
									label="Langue"
									onChange={handleChange}>
									<MenuItem value={"fr"}>Francais</MenuItem>
									<MenuItem value={"ang"}>Anglais</MenuItem>
								</Select>
							</FormControl>
						</div>
					</div>
					{getWindowDimensions() > 1100 && (
						<div className={classes.ButtonBloc}>
							<ButtonSpe
								variant="contained"
								disableRipple
								onClick={(e) => {
									window.location.href = "/Journey ";
								}}>
								Start your journey
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
