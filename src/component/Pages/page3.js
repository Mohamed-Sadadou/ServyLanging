import React from "react";
import Typography from "@material-ui/core/Typography";
import { useState, useLayoutEffect, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Service from "../Composant/Service";
import LangueContext from "../LangueContext";

const useStyles = makeStyles((theme) => ({
	Corp3: {
		width: "100%",
		height: "1300px",
		minHeight: "1300px",
		backgroundColor: "#F8FBF9",
		[theme.breakpoints.down("1300")]: { height: "1700px" },
		[theme.breakpoints.down("880")]: { height: "2800px" },
		[theme.breakpoints.down("469")]: { height: "3000px" },
		[theme.breakpoints.down("530")]: { height: "3600px" },
	},
	Contenu: {
		height: "1030px",
		width: "90%",
		padding: "30px",
		marginLeft: "auto",
		marginRight: "auto",
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		[theme.breakpoints.down("1300")]: {
			width: "85%",
			height: "1400px",
			gridTemplateColumns: "repeat(2, 1fr)",
		},
		[theme.breakpoints.down("880")]: {
			width: "80%",
			height: "2600px",
			gridTemplateColumns: "repeat(1, 1fr)",
		},
		[theme.breakpoints.down("530")]: {
			height: "3200px",
		},
	},
}));

export default function LandingPage() {
	const classes = useStyles();
	const [Langue,setLangue]=useState("");
	const { langue, setlangue } = useContext(LangueContext);
	
	if(langue!==Langue)	setLangue(langue);
	var text;
	if (Langue === "fr") {
		text = {
			desc: "Le tout grace au ",
			titre: "Servy Eco-System",
			Service1: {
				titre: "Service livraison",
				desc: "Livrez vos produits en toutes facilités et sans vous tracasser grace au service livraison de servi, avec ce service vous pourrez effectuer la vente de vos produits sans vous inquiéter de la façon de livré car les équipes de servi prennent en charge tout le processus.",
			},
			Service2: {
				titre: "Service Packaging",
				desc: "Comment emballer et mettre en avant l'empaquetage de votre produit et la façon de le presenter, ce service met à disposition des boutiques un choix d'emballage qui met en avant les produits.",
			},
			Service3: {
				titre: "Service Marketing",
				desc: "Mettre en avant sa boutique et ses produits, c'est une chose essentielle pour vendre, ce service aide les vendeurs à avoir une meilleure visibilité et une plus grande notoriété.",
			},
			Service4: {
				titre: "Service redaction",
				desc: "Se soucier de la façon avec laquelle   le produit est présenté, pour qu’il  soit attractif et qu’il soit bien vendu, ce travail devra se faire pour chaque nouveau produit ! Ce service répond à ce besoin.",
			},
			Service5: {
				titre: "Service imagerie",
				desc: "Toute photo prise a besoin d'être embellie et mise en avant ! après un shooting photo les images prises sont certes professionnelles et prises de la bonne façon, il se peut qu’on ait besoins de faire des retouches !  Comment faire pour le montage vidéo des contenus de sa boutique ? ",
			},
			Service6: {
				titre: "Service apres vente",
				desc: "Comment gérer les retours des clients et les différentes questions du quotidien ? Ce service prendra son sens en prenant en charge la partie réclamation et questionnement des clients.",
			},
			Service7: {
				titre: "Service photographie",
				desc: "Mettre en valeur ses produits ! une bonne photo prise par un professionnel ! ce service met à disposition une équipe de photographes se chargeant de la prise de photos",
			},
			Service8: {
				titre: "Service tech",
				desc: "Mettre en valeur sa boutique et son travail ! Voilà une problématique que beaucoup de boutiques doivent résoudre pour être sûr de leur présence en ligne et avoir la reconnaissance qu'ils méritent",
			},
		};
	} else {
		text = {
			desc: "All of these by",
			titre: "Servy Eco-System",
			Service1: {
				titre: "Delivery Service",
				desc: "Deliver your products with ease and without hassle thanks to Servy's delivery service, with this service you will be able to carry out the sale of your products without worrying about the way that they're delivered because the Servy team will take charge of the entire process.",
			},
			Service2: {
				titre: "Packaging Service",
				desc: "How to pack and highlight the packaging of your product and the way to present it, this service provides shops with a choice of packaging that spotlights the products.",
			},
			Service3: {
				titre: "Marketing Service",
				desc: "Spotlighting your store and products is an essential thing to sell your product, this service helps sellers to have better visibility and greater reputation.",
			},
			Service4: {
				titre: "Copywright Service",
				desc: "Caring about how the product is presented, so that it is attractive and well sold, these steps will have to be done for every new product! This service meets this need.",
			},
			Service5: {
				titre: "Imagery Service",
				desc: "Any photo taken needs to be beautified and improved! After a photo shoot, the images taken are definitely professional and taken in the right way, although it maight need some second touches!  How to edit video content in your shop? ",
			},
			Service6: {
				titre: "After Sale Service",
				desc: "How can you manage customers feedback and the different questions of everyday life? This service will be taking charge of the complaints and questions coming from the customers.",
			},
			Service7: {
				titre: "Photography Service",
				desc: "Showcase your products! A good photo taken by a professional! this service provides a team of photographers to take photos",
			},
			Service8: {
				titre: "Tech Service",
				desc: "Showcase your products! This is a problem that many shops have to solve with each new product, putting it on sale in their online store.",
			},
		};
	}
	//************************************************* */
	return (
		<div id="Services">
			<div className={classes.Corp3} id="4">
				<div style={{ height: "60px" }}></div>
				<Typography
					style={{
						fontFamily: " 'Manrope', sans-serif",
						color: "#8595AB",
						fontSize: "24px",
					}}
					component="div"
					align={"center"}>
					{text.desc}
				</Typography>
				<Typography
					style={{
						fontFamily: " 'Manrope', sans-serif",
						color: "#2A313C",
						fontSize: "55px",
						marginTop: "10px",
						fontWeight: "bold",
					}}
					component="div"
					align={"center"}
					className={classes.ecrit}>
					{text.titre}
				</Typography>
				<div className={classes.Contenu}>
					<Service
						serv="1"
						titre={text.Service1.titre}
						desc={text.Service1.desc}
					/>
					<Service
						serv="2"
						titre={text.Service2.titre}
						desc={text.Service2.desc}
					/>
					<Service
						serv="3"
						titre={text.Service3.titre}
						desc={text.Service3.desc}
					/>
					<Service
						serv="4"
						titre={text.Service4.titre}
						desc={text.Service4.desc}
					/>
					<Service
						serv="5"
						titre={text.Service5.titre}
						desc={text.Service5.desc}
					/>
					<Service
						serv="6"
						titre={text.Service6.titre}
						desc={text.Service6.desc}
					/>
					<Service
						serv="7"
						titre={text.Service7.titre}
						desc={text.Service7.desc}
					/>
					<Service
						serv="8"
						titre={text.Service8.titre}
						desc={text.Service8.desc}
					/>
				</div>
			</div>
		</div>
	);

	//******************************************** */
}
