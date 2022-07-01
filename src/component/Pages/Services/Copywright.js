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
			Titre:"Service redaction",
			TextPart1:
			"Le copywriting (conception-rédaction en français) est un processus d’écriture marketing utilisant l’art de la persuasion pour pousser le lecteur à agir selon un objectif défini : laisser son email, prendre un rendez-vous, acheter un produit, etc."+
			 " Le copywriting est avant tout une technique de vente. Qu’il s’agisse d’une publicité en ligne, d’une page de vente, d’une newsletter ou d’un email de prospection, les techniques de copywriting vous permettent d’améliorer l’impact de vos campagnes ou votre taux de conversion et donc votre retour sur investissement.",	
			TextPart2:"Le copywriting est un puissant vecteur d’engagement. Construit autour des émotions et besoins sous-jacents de votre audience, il permet d’impacter directement le cœur de vos cibles et de renforcer votre image de marque. Ainsi, vous renforcez le lien entre votre marque et votre audience. Sur les réseaux sociaux, un copywriting de qualité aura un impact direct sur l’engagement de vos abonnés"+
			". Il nécessite une analyse poussée des attentes et besoins conscients ou inconscients de vos cibles. Cette analyse en continu vous permet d’être toujours en veille sur la personnalité et les besoins de vos clients, et donc, d’adapter l’ensemble de votre stratégie marketing et business en fonction.",
			TextPart3:
			"Les contenus push du webmarketing traditionnel ont perdu en efficacité. Preuve en est de l’essor du brand content et du content marketing, qui visent à attirer votre audience en lui offrant des contenus à haute valeur ajoutée et en créant un lien de proximité avec elle."+
			"Le copywriting est une gymnastique subtile. Il permet de convaincre votre cible et de mettre en avant votre solution en lui adressant les messages qu’elles souhaitent entendre à un instant T. Et cela, sans faire la promotion directe de votre produit ou service."+
			"Le copywriting est presque aussi vieux que la vente. Mais aujourd’hui, la donne a changé : nous sommes submergés d’informations et de publicités en continu, et chaque entreprise a besoin de se démarquer. La conception-rédaction est votre arme la plus précieuse pour y parvenir."+
			"Beaucoup d’entreprises écrivent des articles de blog sans but précis. Le copywriting vous permet d’améliorer significativement la structure et le style de vos articles, mais aussi leur impact dans votre tunnel de vente."
			};
	} else {
		text = {
			Titre:"Copywright Service",
			TextPart1:"Copywriting (conception-rédaction en français) is a process of writing marketing using the art of persuasion to push the reader to act according to a defined objective: leave his email, make an appointment, buy a product, etc. Copywriting is above all a sales technique. Whether it’s an online ad, a sales page, a newsletter or a prospecting email, copywriting techniques allow you to improve the impact of your campaigns or your conversion rate and thus your return on investment.",
			TextPart2:"Copywriting is a powerful vehicle for engagement. Built around the underlying emotions and needs of your audience, it allows you to directly impact the hearts of your targets and strengthen your brand image. In this way, you strengthen the bond between your brand and your audience. On social networks, a quality copywriting will have a direct impact on the engagement of your subscribers. It requires a thorough analysis of the conscious or unconscious expectations and needs of your targets. This continuous analysis allows you to be always on the lookout for the personality and needs of your customers, and thus, to adapt your entire marketing and business strategy accordingly.",
			TextPart3:"The push content of traditional webmarketing has become less effective. Proof of this is the rise of brand content and content marketing, which aim to attract your audience by offering it high-value content and creating a close relationship with it.Copywriting is a subtle gymnastics. It allows you to convince your target and promote your solution by sending them the messages they want to hear at a moment T. And this, without directly promoting your product or service.Copywriting is almost as old as selling. But today, the game has changed: we are inundated with information and continuous advertising, and every company needs to stand out. Design-writing is your most valuable weapon to achieve this.Many companies write blog articles with no specific purpose. Copywriting allows you to significantly improve the structure and style of your items, but also their impact in your sales tunnel."
		};
	}
	return (
		<div>
			<div>
				<Service
					id="4"
					Titre={text.Titre}
					TextPart1={text.TextPart1}
					TextPart2={text.TextPart2}
					TextPart3={text.TextPart3}/>
			</div>
		</div>
	);

	//******************************************** */
}
