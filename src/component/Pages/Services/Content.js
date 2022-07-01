import React from "react";
import Service from "../../Composant/ServiceDetail";
import { useState, useContext } from "react";
import LangueContext from "../../LangueContext";

export default function LandingPage() {
	//************************************************* */
	const [Langue,setLangue]=useState("");
	const { langue } = useContext(LangueContext);
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
			Titre:"Service imagerie",
			TextPart1:"Toute photo prise a besoin d'être embellie et mise en avant ! après un shooting photo les images prises sont certes professionnelles et prises de la bonne façon, il se peut qu’on ait besoins de faire des retouches ! Comment faire pour le montage vidéo des contenus de sa boutique ?",
			TextPart2:"Vous aurez très certainement des retouches à faire pour certains de vos produits, vous devrez certainement faire appel à une personne qui s'y connaît suffisamment pour faire les retouches nécessaires ou alors si vous en avez les moyens vous vous tournerez vers un professionnel qui se chargera de vos retouches pour tous vos produits.",
			TextPart3:"Servy est là pour vous ! le service imagerie répond à votre besoin directement ! en mettant en relation le service photographie et le service vous prenez vos produits en photo et régler ce qui ne va pas au mieux pour votre business. Vous aurez donc tout ce dont vous avez besoin pour votre boutique servie mais aussi pour vos réseaux sociaux et donc votre image en sera encore plus améliorée ! le service imagerie vous aide aussi pour vos compagnes marketing et communication vous aurez tout le nécessaire pour une compagne reussi !"
		};
	} else {
		text = {
			
			Titre:"Content Service",
			TextPart1:"Any photo taken needs to be embellished and highlighted! after a photo shoot the images taken are certainly professional and taken in the right way, it may be that we need to do some retouching! How to edit video content in your shop?",
			TextPart2:"You will most certainly have to do some tweaking for some of your products, you will certainly need to call on someone who knows enough to do the necessary alterations or if you have the means you will turn to a professional who will take charge of your alterations for all your products.",
			TextPart3:"Servy is here for you! The imaging service meets your need directly! By linking the photography and service department you take your products in photo and set what is not going well for your business. You will therefore have everything you need for your shop served but also for your social networks and therefore your image will be even better! The imaging service also helps you for your marketing and communication companions you will have everything you need for a successful companion!"
		};
	}
	return (
		<div>
			<div>
				<Service
					id="5"
					Titre={text.Titre}
					TextPart1={text.TextPart1}
					TextPart2={text.TextPart2}
					TextPart3={text.TextPart3}
					/>
			</div>
		</div>
	);

	//******************************************** */
}
