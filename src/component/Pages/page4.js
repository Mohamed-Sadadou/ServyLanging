import React from "react";
import Fond from "../../Images/Image4.png";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Rond1 from "../../Images/rond1.png";
import Rond2 from "../../Images/rond2.png";
import Rond3 from "../../Images/rond3.png";

const useStyles = makeStyles((theme) => ({
	Corp4: {
		width: "98.9vw",
		height: "850px",
		backgroundImage: `url(${Fond})`,
		backgroundColor: "#024097",
		backgroundPosition: "right bottom",
		backgroundRepeat: "no-repeat",
		[theme.breakpoints.down("1380")]: { height: "850px" },
		[theme.breakpoints.down("1100")]: { height: "850px" },
		[theme.breakpoints.down("900")]: { height: "800px" },
	},

	Logo: {
		width: "8vw",
		height: "8vw",
		marginLeft: 40,
		[theme.breakpoints.down("1380")]: {},
		[theme.breakpoints.down("1100")]: {},
		[theme.breakpoints.down("900")]: {},
	},
	BlocTitre: {
		height: "80px",
		width: "80%",
		marginLeft: "80px",
	},
	Titre: {
		fontFamily: " 'Manrope', sans-serif",
		color: "white",
		display: "flex",
		flexdirection: "row",
		fontSize: "55px",
		fontWeight: "bold",
		[theme.breakpoints.down("850")]: { fontSize: "48px", },
		[theme.breakpoints.down("700")]: { fontSize: "45px", },
		[theme.breakpoints.down("570")]: { fontSize: "35px", },
	},
	Bloc1: {
		height: "80px",
		width: "85vw",
		marginLeft: "80px",
		[theme.breakpoints.down("1380")]: { marginLeft: "60px" },
		[theme.breakpoints.down("1100")]: { marginLeft: "40px" },
		[theme.breakpoints.down("900")]: { marginLeft: "20px" },
		display: "flex",
		flexdirection: "row",
	},
	WorkTitre: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#E6F0FF",
		display: "flex",
		flexdirection: "row",
		fontSize: "36px",
		fontWeight: "bold",
		marginLeft: "40px",
		[theme.breakpoints.down("1380")]: { fontSize: "32px" },
		[theme.breakpoints.down("1100")]: { fontSize: "26px" },
		[theme.breakpoints.down("900")]: { fontSize: "18px" },
		[theme.breakpoints.down("570")]: { fontSize: "16px" },
	},
	WorkDesc: {
		fontFamily: " 'Manrope', sans-serif",
		color: "#E6F0FF",
		display: "flex",
		flexdirection: "row",
		fontSize: "24px",
		fontWeight: "500",
		marginLeft: "40px",
		[theme.breakpoints.down("1380")]: { fontSize: "22px" },
		[theme.breakpoints.down("1100")]: { fontSize: "16px" },
		[theme.breakpoints.down("900")]: { fontSize: "14px" },
		[theme.breakpoints.down("570")]: { fontSize: "12px" },
	},
	BlocEcris: {
		height: "130px",
		width: "75vw",
		[theme.breakpoints.down("1380")]: { height: "130px", width: "75vw" },
		[theme.breakpoints.down("1100")]: { height: "130px", width: "75vw" },
		[theme.breakpoints.down("900")]: { height: "130px", width: "68vw" },
	},
}));
export default function LandingPage() {
	const classes = useStyles();
	//************************************************* */
	return (
		<div>
			<div className={classes.Corp4} id="4">
				<div style={{ height: "80px" }}></div>
				<div className={classes.BlocTitre}>
					<Box className={classes.Titre}>How it Works ?</Box>
				</div>
				<div style={{ height: "50px" }}></div>
				<div className={classes.Bloc1}>
					<div>
						<img src={Rond1} className={classes.Logo} alt="fireSpot" />
					</div>
					<div className={classes.BlocEcris}>
						<Box className={classes.WorkTitre}>
							Register with your email ✉ or Phone number 📞
						</Box>
						<Box className={classes.WorkDesc}>
							You will receive and message to confirm then you get your referal
							link to boost your shop.
						</Box>
					</div>
				</div>
				{/***********************************************************/}
				<div style={{ height: "80px" }}></div>
				{/***********************************************************/}
				<div className={classes.Bloc1}>
					<div>
						<img src={Rond2} className={classes.Logo} alt="fireSpot" />
					</div>
					<div className={classes.BlocEcris}>
						<Box className={classes.WorkTitre}>
							Send the link to your Friends 👥 , Fans and Followers.
						</Box>
						<Box className={classes.WorkDesc}>
							The second they enter the website and register we will add points
							to your shop to higher your Ranking.
						</Box>
					</div>
				</div>
				{/***********************************************************/}
				<div style={{ height: "80px" }}></div>
				{/***********************************************************/}
				<div className={classes.Bloc1}>
					<div>
						<img src={Rond3} className={classes.Logo} alt="fireSpot" />
					</div>
					<div className={classes.BlocEcris}>
						<Box className={classes.WorkTitre}>
							For Each Subscription you get Raised 🔼
						</Box>
						<Box className={classes.WorkDesc}>
							Every subscribe from your people your shop will be trendy in our
							platform.
						</Box>
					</div>
				</div>
			</div>
		</div>
	);
	//******************************************** */
}
