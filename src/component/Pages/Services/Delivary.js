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
			Titre:"Service livraison",
			TextPart1:"Livrez vos produits en toutes facilités et sans vous tracasser grace au service livraison de servi, avec ce service vous pourrez effectuer la vente de vos produits sans vous inquiéter de la façon de livré car les équipes de servi prennent en charge tout le processus. En commençant par la récupération du produit chez vous jusqu'à la livraison et la satisfaction de votre client.",
			TextPart2:"Chaque vendeur doit à un moment donné penser à comment faire parvenir son produit à son client afin de rentabiliser la production, mais l'une des choses les plus delicates a géré c'est bien comment mettre en relation les livreurs et vos locaux mais aussi s'assurer de la qualité de votre livraison, si vous compter à 100% sur la société de livraison pour votre livraison alors vous devrez faire attention aux avis de votre client mais aussi à votre image et à votre produit, si le produit arrive pas à destination vous devrez donc prendre contact avec la société de livraison et prendre des nouvelles; ce travail devient vite ingérable dans le cas ou le nombre de livraison à suivre et donc vous serez débordé ! vous pouvez soit fermer les yeux les pertes éventuelles mais vous pouvez aussi prendre le pack livraison de SERVY !",
			TextPart3:"Le service livraison de servy est là pour vous aider à gérer le suivi de vos livraisons et vous assure donc le bon déroulement du processus. ce pack vise en premiers lieux à vous proposer les meilleures sociétés de livraison partenaires avec notre plateforme, nos agents s'occuperont donc de récupérer votre produit chez vous et s'occupent de faire le lien avec la société de livraison et s'assure donc la satisfaction de votre client. "
		};
	} else {
		text = {
			Titre:"Delivary Service",
			TextPart1:"Deliver your products with ease and without hassle thanks to the service delivery service, with this service you will be able to sell your products without worrying about the way of delivery because the service teams take charge of the entire process. Starting from the recovery of the product from you to the delivery and satisfaction of your customer.",
			TextPart2:"Each seller must at some point think about how to send his product to his customer in order to make the production profitable, but one of the most delicate things has been how to connect the delivery people to your premises but also how to ensure the quality of your delivery, if you rely 100% on the delivery company for your delivery then you will have to pay attention to your customer’s reviews but also to your image and your product, If the product does not arrive at the destination you will have to contact the delivery company and take news; this work quickly becomes unmanageable in the case or the number of deliveries to follow and so you will be overwhelmed! you can either close your eyes to any losses but you can also take the SERVY delivery package!",
			TextPart3:"The servy delivery service is there to help you manage the follow-up of your deliveries and thus ensures that the process runs smoothly. this pack aims in the first place to offer you the best partner delivery companies with our platform, our agents will take care of getting your product back from you and make the connection with the delivery company and thus ensure the satisfaction of your customer. "
		};
	}
	return (
		<div>
			<div>
				<Service
					id="1"
					Titre={text.Titre}
					TextPart1={text.TextPart1}
					TextPart2={text.TextPart2}
					TextPart3={text.TextPart3}/>
			</div>
		</div>
	);

	//******************************************** */
}
