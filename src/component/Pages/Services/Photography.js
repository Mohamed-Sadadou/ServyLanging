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
			Titre:"Photography Service",
			TextPart1:"Mettre en valeur ses produits ! une bonne photo prise par un professionnel ! Ce service met à disposition une équipe de photographes se chargeant de la prise de photos de vos produits sous différents angles pour mieux le mettre en avant.",
			TextPart2:"Il s'avère que pour poster un produit correctement il faut avoir pris une dizaine de photos sélectionner le plus réussi et ensuite posté, cela peut prendre beaucoup plus de temps si on s’y connaît pas suffisamment, le matériel de lumière et de photographie aussi peut vite devenir un obstacle, on n'a pas de tout un appareil photo de qualité à disposition on devra donc soit louer soit prêter soit à faire appel à un ami ou à un professionnel disposant à la fois du matériel mais aussi des compétences nécessaires.",
			TextPart3:"Servy est là pour vous aider ! Le service photographique met à votre disposition une équipe de photographes qui se charge de la prise de photo de vos produits et en collaboration avec le service imagerie et service rédaction vos produits seront sur la plate-forme directement."
		};
	} else {
		text = {
			Titre:"Photography Service",
			TextPart1:"Showcase your products! A good photo taken by a professional! This service provides a team of photographers to take photos of your products from different angles to better highlight it.",
			TextPart2:"It turns out that to post a product correctly you have to have taken a dozen photos select the most successful and then posted, it can take a lot more time if you don’t know enough, light and photography equipment can quickly become an obstacle, We do not have a quality camera available so we will have to rent or lend or to call on a friend or a professional with both the equipment but also the necessary skills.",
			TextPart3:"Servy is here to help! The photographic service provides you with a team of photographers who take pictures of your products and in collaboration with the imaging and editorial department your products will be on the platform directly."
		};
	}
	return (
		<div>
			<div>
				<Service
					id="7"
					Titre={text.Titre}
					TextPart1={text.TextPart1}
					TextPart2={text.TextPart2}
					TextPart3={text.TextPart3}/>
			</div>
		</div>
	);

	//******************************************** */
}
