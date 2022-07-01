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
			Titre:"Service Marketing",
			TextPart1:"Mettre en avant sa boutique et ses produits, c'est une chose essentielle pour vendre, ce service aide les vendeurs à avoir une meilleure visibilité et une plus grande notoriété.",
			TextPart2:"Le développement de l'e-commerce a contraint le marketing à revoir ses stratégies en optimisant la relation avec le client. Avec de nouvelles méthodes et de nouveaux outils, le marketing digital (ou e-marketing) s'est ainsi imposé auprès des entreprises spécialisées dans le commerce en ligne."+
			"Tout comme le marketing traditionnel, le marketing digital vise à l'optimisation des ventes réalisées par une société. Toutefois, dans un environnement e-commerce, cet objectif est poussé à son extrême, en cherchant à établir une relation encore plus poussée et personnalisée avec le client. Dans ce contexte, les trois principaux buts du marketing digital sont :"+		
			"l'augmentation du trafic du site web de l'entreprise en développant un site simple, attractif et sécurisé ;"+
			"la transformation des visites sur le site en achats en développant des outils d'achat simples et conviviaux ;"+
			"la fidélisation du client en lui proposant une offre de produits étudiée et à des prix avantageux.",
			TextPart3:"C'est ainsi que le pack marketing de Servy vous propose de gérer ça et de vous faire un compte rendu sur votre stratégie et vous proposera un ensemble de bonnes pratiques pour améliorer votre audience et ainsi booster vos ventes et votre profit, le pack vous propose aussi de faire partie de la campagne publicitaire de la plateforme et ainsi vous offrir une plus grande visibilité !"
		};
	} else {
		text = {
			Titre:"Marketing Service",
			TextPart1:"Highlighting your store and its products is an essential thing to sell, this service helps sellers to have a better visibility and greater awareness.",
			TextPart2:"The development of e-commerce has forced marketing to review its strategies by optimising the relationship with the customer. With new methods and tools, digital marketing (or e-marketing) has become established among companies specializing in e-commerce.Just like traditional marketing, Digital marketing aims at optimizing sales made by a company. However, in an e-commerce environment, this goal is pushed to its extreme, seeking to establish an even deeper and more personalized relationship with the customer. In this context, the three main goals of digital marketing are: increasing the traffic of the company’s website by developing a simple, attractive and secure website;the transformation of visits to the site into purchases by developing simple and user-friendly purchasing tools;customer loyalty by offering a range of products studied and at advantageous prices.",
			TextPart3:"This is how the Servy marketing package offers you to manage this and to give you a report on your strategy and will offer you a set of best practices to improve your audience and thus boost your sales and your profit, the pack also offers you to be part of the advertising campaign of the platform and thus offer you a greater visibility!"
		};
	}
	return (
		<div>
			<div>
				<Service
					id="3"
					Titre={text.Titre}
					TextPart1={text.TextPart1}
					TextPart2={text.TextPart2}
					TextPart3={text.TextPart3}/>
			</div>
		</div>
	);

	//******************************************** */
}
