import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import back1 from "../../Images/fond1.png";
import back2 from "../../Images/fond2.png";
import back3 from "../../Images/fond3.png";
import back4 from "../../Images/fond4.png";
import back5 from "../../Images/fond5.png";
import back6 from "../../Images/fond6.png";
import back7 from "../../Images/fond7.png";
import back8 from "../../Images/fond8.png";

const useStyles = makeStyles((theme) => ({
	b1: {
		height: "300px",
		width: "380px",
		marginRight: "10px",
		marginLeft: "10px",
		backgroundPosition: "left bottom",
		backgroundRepeat: "no-repeat",
		backgroundImage: `url(${back1})`,
	},
	b2: {
		height: "300px",
		width: "380px",
		marginRight: "10px",
		marginLeft: "10px",
		backgroundPosition: "left bottom",
		backgroundRepeat: "no-repeat",
		backgroundImage: `url(${back2})`,
	},
	b3: {
		height: "300px",
		width: "380px",
		marginRight: "10px",
		marginLeft: "10px",
		backgroundPosition: "left bottom",
		backgroundRepeat: "no-repeat",
		backgroundImage: `url(${back3})`,
	},
	b4: {
		height: "300px",
		width: "380px",
		marginRight: "10px",
		marginLeft: "10px",
		backgroundPosition: "left bottom",
		backgroundRepeat: "no-repeat",
		backgroundImage: `url(${back4})`,
	},
	b5: {
		height: "300px",
		width: "380px",
		marginRight: "10px",
		marginLeft: "10px",
		backgroundPosition: "left bottom",
		backgroundRepeat: "no-repeat",
		backgroundImage: `url(${back5})`,
	},
	b6: {
		height: "300px",
		width: "380px",
		marginRight: "10px",
		marginLeft: "10px",
		backgroundPosition: "left bottom",
		backgroundRepeat: "no-repeat",
		backgroundImage: `url(${back6})`,
	},
	b7: {
		height: "300px",
		width: "380px",
		marginRight: "10px",
		marginLeft: "10px",
		backgroundPosition: "left bottom",
		backgroundRepeat: "no-repeat",
		backgroundImage: `url(${back7})`,
	},
	b8: {
		height: "300px",
		width: "380px",
		marginRight: "10px",
		marginLeft: "10px",
		backgroundPosition: "left bottom",
		backgroundRepeat: "no-repeat",
		backgroundImage: `url(${back8})`,
	},
	act: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#DF2020",
		display: "flex",
		flexdirection: "row",
		fontSize: "18px",
		marginTop: "10px",
		fontWeight: "800",
		"&:hover": { cursor: "pointer" },
		width: "120px",
	},
}));
const Contenu = (p) => {
	return (
		<Typography>
			<Box
				style={{
					fontFamily: " 'Manrope', sans-serif",
					color: "#2A313C",
					display: "flex",
					flexdirection: "row",
					fontSize: "22px",
					marginTop: "10px",
					fontWeight: "700",
				}}>
				{p.titre}
			</Box>
			<Box
				style={{
					width: "280px",
					fontFamily: " 'Manrope', sans-serif",
					color: "#536379",
					display: "flex",
					flexdirection: "row",
					fontSize: "18px",
					marginTop: "10px",
					fontWeight: "500",
				}}>
				{p.desc}
			</Box>
		</Typography>
	);
};
export default function BasicCard(props) {
	const classes = useStyles();

	return (
		<div>
			{props.serv === "1" && (
				<div className={classes.b1}>
					<div style={{ height: "30px" }}></div>
					<div
						style={{
							height: "280px",
							width: "320px",
							marginRight: "auto",
							marginLeft: "auto",
						}}>
						<Contenu titre={props.titre} desc={props.desc} />
						<Box
							className={classes.act}
							onClick={(e) => {
								window.location.href = "/Delivary";
							}}>
							Let’s Start {" => "}
						</Box>
					</div>
				</div>
			)}
			{props.serv === "2" && (
				<div className={classes.b2}>
					<div style={{ height: "30px" }}></div>
					<div
						style={{
							height: "280px",
							width: "320px",
							marginRight: "auto",
							marginLeft: "auto",
						}}>
						<Contenu titre={props.titre} desc={props.desc} />
						<Box
							className={classes.act}
							onClick={(e) => {
								window.location.href = "/Packaging";
							}}>
							Let’s Start {" => "}
						</Box>
					</div>
				</div>
			)}
			{props.serv === "3" && (
				<div className={classes.b3}>
					<div style={{ height: "30px" }}></div>
					<div
						style={{
							height: "280px",
							width: "320px",
							marginRight: "auto",
							marginLeft: "auto",
						}}>
						<Contenu titre={props.titre} desc={props.desc} />
						<Box
							className={classes.act}
							onClick={(e) => {
								window.location.href = "/Marketing";
							}}>
							Let’s Start {" => "}
						</Box>
					</div>
				</div>
			)}
			{props.serv === "4" && (
				<div className={classes.b4}>
					<div style={{ height: "30px" }}></div>
					<div
						style={{
							height: "280px",
							width: "320px",
							marginRight: "auto",
							marginLeft: "auto",
						}}>
						<Contenu titre={props.titre} desc={props.desc} />
						<Box
							className={classes.act}
							onClick={(e) => {
								window.location.href = "/Copy";
							}}>
							Let’s Start {" => "}
						</Box>
					</div>
				</div>
			)}
			{props.serv === "5" && (
				<div className={classes.b5}>
					<div style={{ height: "30px" }}></div>
					<div
						style={{
							height: "280px",
							width: "320px",
							marginRight: "auto",
							marginLeft: "auto",
						}}>
						<Contenu titre={props.titre} desc={props.desc} />
						<Box
							className={classes.act}
							onClick={(e) => {
								window.location.href = "/Content ";
							}}>
							Let’s Start {" => "}
						</Box>
					</div>
				</div>
			)}
			{props.serv === "6" && (
				<div className={classes.b6}>
					<div style={{ height: "30px" }}></div>
					<div
						style={{
							height: "280px",
							width: "320px",
							marginRight: "auto",
							marginLeft: "auto",
						}}>
						<Contenu titre={props.titre} desc={props.desc} />
						<Box
							className={classes.act}
							onClick={(e) => {
								window.location.href = "/AfterSell ";
							}}>
							Let’s Start {" => "}
						</Box>
					</div>
				</div>
			)}
			{props.serv === "7" && (
				<div className={classes.b7}>
					<div style={{ height: "30px" }}></div>
					<div
						style={{
							height: "280px",
							width: "320px",
							marginRight: "auto",
							marginLeft: "auto",
						}}>
						<Contenu titre={props.titre} desc={props.desc} />
						<Box
							className={classes.act}
							onClick={(e) => {
								window.location.href = "/Photo ";
							}}>
							Let’s Start {" => "}
						</Box>
					</div>
				</div>
			)}
			{props.serv === "8" && (
				<div className={classes.b8}>
					<div style={{ height: "30px" }}></div>
					<div
						style={{
							height: "280px",
							width: "320px",
							marginRight: "auto",
							marginLeft: "auto",
						}}>
						<Contenu titre={props.titre} desc={props.desc} />
						<Box
							className={classes.act}
							onClick={(e) => {
								window.location.href = "/Media ";
							}}>
							Let’s Start {" => "}
						</Box>
					</div>
				</div>
			)}
		</div>
	);
}
