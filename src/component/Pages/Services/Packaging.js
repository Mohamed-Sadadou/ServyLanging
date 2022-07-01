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
			Titre:"Service Packaging",
			TextPart1:"Comment emballer et mettre en avant l'empaquetage de votre produit et la façon de le presenter, ce service met à disposition des boutiques un choix d'emballage qui met en avant les produits. "+
			" En effet le packaging est le premier attribut du produit auquel sont confrontés les acheteurs ce qui en fait un élément clé de toute stratégie markéting d’optimisation de la Product eXperience (PX). Il est en quelque sorte votre premier argument de vente et celui qui peut créer le lien entre votre marque et votre cible.",
			TextPart2:"Le packaging désigne l’emballage du produit mais il est au final bien plus qu’une enveloppe extérieure. Il doit refléter votre identité de marque et mettre en avant les atouts de votre offre pour déclencher l’achat chez vos cibles. Véritable support de communication visuelle, les packagings sont un élément clé de votre stratégie marketing puisqu’il conditionne le succès commercial de vos produits."+
			"Pour remplir pleinement son rôle, votre packaging doit inclure les 3 fonctions suivantes : protéger les produits et faciliter le transport, le conditionnement ainsi que la conservation, attirer l’attention du consommateur, susciter son intérêt et le séduire pour déclencher l’acte d’achat, donner des renseignements essentiels aux consommateurs sur l’offre comme la composition, les conseils de conservation ou les conditions d’utilisation",
			TextPart3:"Pour que votre emballage produit serve pleinement votre stratégie commerciale, il faut que votre packaging véhicule les valeurs de votre marque. Concrètement, il faut être capable de raconter une histoire sans les mots."+
			"Pour cela, il faut prêter une attention particulière aux choix visuels et notamment aux couleurs, formes et typographie. Respectez les codes de votre charte graphique et à étudier la signification des couleurs et formes pour transmettre les bons messages sur vos emballages."+
			" C'est là que SERVY packaging prend tout son rôle en vous assurant le meilleur packaging possible!!"
		};
	} else {
		text = {
			Titre:"Packaging Service",
			TextPart1:"How to pack and highlight the packaging of your product and how to present it, this service provides shops with a choice of packaging that highlights the products. Indeed, packaging is the first attribute of the product faced by buyers, which makes it a key element of any markéting strategy for optimizing the Product eXperience (PX). It’s sort of your first selling point and one that can create the link between your brand and your target.",
			TextPart2:"Packaging refers to the packaging of the product but is ultimately much more than an outer shell. It must reflect your brand identity and highlight the advantages of your offer to trigger the purchase among your targets. A true visual communication medium, packaging is a key element of your marketing strategy since it determines the commercial success of your products.To fully fulfill its role, your packaging must include the following 3 functions: protect products and facilitate transport, packaging and preservation, attract the attention of the consumer, arouse his interest and seduce him to trigger the act of purchase, provide consumers with essential supply information such as composition, conservation advice or terms of use",
			TextPart3:"For your product packaging to fully serve your commercial strategy, your vehicle packaging must reflect the values of your brand. In concrete terms, you have to be able to tell a story without words.To do this, you have to pay special attention to the visual choices and especially to the colors, shapes and typography. Respect the codes of your graphic charter and study the meaning of colors and shapes to convey the right messages on your packaging. This is where SERVY packaging takes its full role in ensuring you the best possible packaging!!"
		};
	}
	return (
		<div>
			<div>
				<Service
					id="2"
					Titre={text.Titre}
					TextPart1={text.TextPart1}
					TextPart2={text.TextPart2}
					TextPart3={text.TextPart3}/>
			</div>
		</div>
	);

	//******************************************** */
}
