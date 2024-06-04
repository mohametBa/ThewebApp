class PrivacyPolicy {
    constructor() {
        this.title = "Politique de Confidentialité";
        this.sections = [
            {
                heading: "Introduction",
                content: `Chez ColisGP, nous nous engageons à protéger et à respecter votre vie privée. 
                          Cette politique de confidentialité explique comment nous collectons, utilisons, 
                          divulguons et protégeons vos informations personnelles lorsque vous utilisez 
                          notre site web et nos services.`
            },
            {
                heading: "1. Informations que nous collectons",
                content: `Nous collectons et traitons différentes catégories de données personnelles vous concernant :`,
                listItems: [
                    "Informations d'identification : nom, prénom, adresse postale, adresse email, numéro de téléphone.",
                    "Informations de compte : identifiants de connexion, mots de passe.",
                    "Informations de transaction : détails des envois, informations de paiement.",
                    "Données techniques : adresse IP, type de navigateur, version du système d'exploitation, logs de connexion."
                ]
            },
            {
                heading: "2. Utilisation de vos informations",
                content: `Nous utilisons les informations collectées pour :`,
                listItems: [
                    "Fournir nos services : traitement des commandes, gestion des livraisons et des expéditions.",
                    "Gérer votre compte : création et gestion de votre compte utilisateur.",
                    "Améliorer nos services : analyse des données pour améliorer notre site web et nos services.",
                    "Communiquer avec vous : répondre à vos questions, vous envoyer des notifications sur vos commandes, vous informer des mises à jour et des offres promotionnelles (si vous y avez consenti)."
                ]
            },
            {
                heading: "3. Partage de vos informations",
                content: `Nous pouvons partager vos informations personnelles avec :`,
                listItems: [
                    "Prestataires de services : entreprises tierces qui fournissent des services en notre nom, tels que les services de paiement et de livraison.",
                    "Autorités légales : lorsque la loi l'exige ou pour protéger nos droits légaux."
                ]
            },
            {
                heading: "4. Conservation de vos données",
                content: `Nous ne conservons vos données personnelles que le temps nécessaire pour les finalités 
                          pour lesquelles elles ont été collectées, y compris pour satisfaire à toute exigence légale, 
                          comptable ou de rapport.`
            },
            {
                heading: "5. Sécurité de vos données",
                content: `Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                          vos données personnelles contre la perte, l'utilisation abusive et l'accès non autorisé.`
            },
            {
                heading: "6. Vos droits",
                content: `Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :`,
                listItems: [
                    "Droit d'accès : vous pouvez demander l'accès à vos données personnelles.",
                    "Droit de rectification : vous pouvez demander la correction des données inexactes ou incomplètes.",
                    "Droit à l'effacement : vous pouvez demander l'effacement de vos données personnelles.",
                    "Droit à la limitation du traitement : vous pouvez demander la limitation du traitement de vos données personnelles.",
                    "Droit à la portabilité des données : vous pouvez demander que vos données personnelles vous soient fournies dans un format structuré, couramment utilisé et lisible par machine.",
                    "Droit d'opposition : vous pouvez vous opposer au traitement de vos données personnelles dans certaines circonstances."
                ]
            },
            {
                heading: "7. Contact",
                content: `Si vous avez des questions sur cette politique de confidentialité ou si vous souhaitez exercer vos droits, veuillez nous contacter à :`,
                listItems: [
                    "Email : mohametba31@gmail.com",
                    "Adresse : 22 Rue Jacqueline Auriol Toulouse"
                ]
            },
            {
                heading: "8. Modifications de cette politique",
                content: `Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. 
                          Nous vous informerons de toute modification en publiant la nouvelle politique sur cette page. 
                          Nous vous conseillons de consulter régulièrement cette page pour prendre connaissance des modifications.`
            }
        ];
    }

    getTitle() {
        return this.title;
    }

    getSections() {
        return this.sections;
    }

    getSection(heading) {
        return this.sections.find(section => section.heading === heading);
    }
}

// Exemple d'utilisation
const privacyPolicy = new PrivacyPolicy();
console.log(privacyPolicy.getTitle());
console.log(privacyPolicy.getSections());
console.log(privacyPolicy.getSection("1. Informations que nous collectons"));
