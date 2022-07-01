import React from "react";
import Service from "../../Composant/ServiceDetail";
import { useState, useLayoutEffect, useContext, useEffect } from "react";
import LangueContext from "../../LangueContext";


export default function LandingPage() {
	//************************************************* */
	const [Langue,setLangue]=useState("");
	const { langue, setlangue } = useContext(LangueContext);
	console.log("-----------------------");
	console.log("-----------------------");
	console.log(langue);
	console.log("-----------------------");
	console.log("-----------------------");
	console.log("voila : ",langue,"  --  ",Langue)
	if(langue!==Langue)	setLangue(langue);
	var text;
	if (Langue === "fr") {
		text = {		
			Titre:"Service Tech",
			TextPart1:"Mettre en valeur ses produits ! Voilà une problématique que beaucoup de boutiques doivent résoudre à chaque nouveau produit à mettre en vente dans leur boutique en ligne.",
			TextPart2:"En effet, que feriez-vous si vous aviez besoin que votre boutique en ligne soit différente des autres ? et si vous voulez des formes, des couleurs ou des modifications sur mesure . Dans la majorité des cas vous devrez choisir entre des templates déjà faits ! Chez Servy c’est différent ! si vous voulez de la sure mesure vous aurez votre propre plateforme pour vous a votre gout ! vous aurez votre plateforme reliée à la plateforme servie et vous aurez tous les services toujours disponibles ! vous pouvez demander un landing page, une application pour vous ou votre propre plateforme powered by MASS.",
			TextPart3:"Le service tech met à votre disposition les développer de servy et MASS pour vous permettre de mettre en place les solutions informatiques dont vous rêvez ! "
		};
	} else {
		text = {
			Titre:"Tech Service",
			TextPart1:"Showcase your products! This is a problem that many shops have to solve with each new product to put on sale in their online store.",
			TextPart2:"Indeed, what would you do if you needed your online store to be different from the others? and if you want custom shapes, colors or changes . In most cases you will have to choose between already made templates! At Servy it’s different! If you want the sure measure you will have your own platform for you to your taste! you will have your platform linked to the platform served and you will have all the services always available! you can request a landing page, an app for you or your own platform powered by MASS.",
			TextPart3:"The tech department puts at your disposal the development of servy and MASS to allow you to implement the IT solutions you dream of! "
		};
	}
	return (
		<div>
			<div>
				<Service
					id="8"
					Titre={text.Titre}
					TextPart1={text.TextPart1}
					TextPart2={text.TextPart2}
					TextPart3={text.TextPart3}/>
			</div>
		</div>
	);

	//******************************************** */
}
