import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return width;
}
const Buttone = styled(Button)({
	fontFamily: " 'Manrope', sans-serif",
	boxShadow: "none",
	textTransform: "none",
    fontWeight:'bold',
	width: "200px",
	height: "50px",
	fontSize: 16,
	padding: "6px 12px",
	lineHeight: 1.5,
	borderRadius: "0px 5px 5px 0px",
	backgroundColor: "#9AC3FE",
	color: "black",
	fontFamily: "",
	"&:hover": {
		backgroundColor: "#68A6FD",
	},
});
const Buttone2 = styled(Button)({
	fontFamily: " 'Manrope', sans-serif",
	boxShadow: "none",
	textTransform: "none",
	fontWeight:'bold',
	width: "200px",
	height: "35px",
	fontSize: 16,
	padding: "6px 12px",
	lineHeight: 1.5,
	borderRadius: "0px 5px 5px 0px",
	backgroundColor: "#9AC3FE",
	color: "black",
	fontFamily: "",
	"&:hover": {
        backgroundColor: "#68A6FD",
	},
});
const useStyles = makeStyles((theme) => ({
	probButton: {
	    boxShadow:'1px 1px 5px 0px #606060',
		marginTop: "50px",
		height: "50px",
		width: "650px",
		backgroundColor: "#E6F0FF",
		// backgroundColor: 'red',
		borderRadius: "5px",
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		[theme.breakpoints.down("850")]: { width: "480px" },
		[theme.breakpoints.down("591")]: { width: "480px" },
		[theme.breakpoints.down("591")]: { height: "35px" },
		[theme.breakpoints.down("561")]: { width: "400px" },
	},
    input: {
		width: "450px",
		height: "45px",
		marginTop: "5px",
		borderRadius: "5px 0px 00px 5px",
		[theme.breakpoints.down("850")]: { width: "280px" },
		[theme.breakpoints.down("591")]: { height: "30px" },
		[theme.breakpoints.down("560")]: { width: "200px" },
	},
}));

export default function MenuAppBar() {
	const classes = useStyles();

	return (
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
	);
}
