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
			
			Titre:"Service apres vente",
			TextPart1:"Comment gérer les retours des clients et les différentes questions du quotidien ? Ce service prendra son sens en prenant en charge la partie réclamation et questionnement des clients. Combien de fois un professionnel doit répondre aux questionnements et aux différentes interrogations de ses clients ? encore plus dans le domaine du commerce électronique.",
			TextPart2:"En effet, le client en ligne peut avoir de nombreuses questions et de nombreuses interrogations quant à la qualité du produit mais pas que, le client peut avoir des questions concernant l'utilisation d'un produit, la façon de le stocker ou de le transporter, la façon avec laquelle le client pourra retourner, est-ce-que la boutique offre une garantie de satisfaction ou autres questions possible.",
			TextPart3:"Comment un propriétaire d'une boutique en ligne pourra gérer toute cette charge tout en gérant sa boutique ? Servy est là pour vous aider ! le service après-vente de servi met à votre disposition une ou un opérateur de service après-vente qui se chargera de gérer vos clients avec leurs questions et leurs interrogations et se charge de savoir régler les conflits dans le cas de la non-satisfaction d'un client, si le produit respect les termes du contrat de Servy."
		};
	} else {
		text = {
			
			Titre:"AfterSell Service",
			TextPart1:"How do I manage customer feedback and the different questions of everyday life? This service will take its meaning by taking charge of the complaint and questioning part of the customers. How often does a professional have to answer the questions and different questions of his clients? even more in the field of electronic commerce.",
			TextPart2:"Indeed, the online customer may have many questions and many questions about the quality of the product but not that, the customer may have questions about the use of a product, how to store or transport it, how the customer will be able to return, whether the shop offers a guarantee of satisfaction or other possible questions.",
			TextPart3:"How can an owner of an online store manage all this burden while managing his shop? Servy is here to help! the after-sales service department provides you with an after-sales service operator who will be in charge of managing your customers with their questions and queries and is in charge of resolving conflicts in the case of non-satisfaction of a customer, whether the product complies with the terms of the Servy contract."
		};
	}
	return (
		<div>
			<div>
				<Service
					id="6"
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
