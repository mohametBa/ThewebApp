export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Transporteurs",
  },
  // {
  //   id: 5,
  //   path: "/page",
  //   text: "Page",
  //   subItems: [
  //     {
  //       id: 51,
  //       path: "/booking",
  //       text: "Booking",
  //     },
  //     {
  //       id: 52,
  //       path: "/team",
  //       text: "Our Team",
  //     },
  //     {
  //       id: 53,
  //       path: "/testimonial",
  //       text: "Testimonial",
  //     },
  //   ],
  // },
  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const carouselData = [
  {
    img: require("../../assets/img/personne.jpg"),
    title: "Expédiez vos colis en toute confiance et rapidité",
    subtitle: "Partout dans le monde",
    btn1: "Contact",
    btn2: "Reserver",
  },
  {
    img: require("../../assets/img/immage.jpg"),
    title: "Répondre à toutes vos questions",
    subtitle: "Toujours disponible",
    btn1: "Contact",
    btn2: "Reserver",
  },
];
export const about = [
  {
    icon: <i className="fa fa-plane fa-2x text-primary mb-2"></i>,
    text: "vols",
    count: "+100",
  },
  {
    icon: <i className="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Transporteurs",
    count: "155",
  },
  {
    icon: <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clients",
    count: "500",
  },
];

export const services = [
  {
    icon: <i className="fa fa-hotel fa-2x text-primary"></i>,
    name: "Déménagement",
    discription: "Louer votre chauffeur de demenagement",
  },
  {
    icon: <i className="fa fa-utensils fa-2x text-primary"></i>,
    name: "Transport de marchandises",
    discription: "Location de contenaires",
  },
  {
    icon: <i className="fa fa-spa fa-2x text-primary"></i>,
    name: "Produits dangereux",
    discription: "Transport de produits chimiques",
  },

  {
    icon: <i className="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Location",
    discription: "Location de voitures particulieres",
  },
  {
    icon: <i className="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Transport maritime",
    discription: "Pour les contenaires",
  },

  {
    icon: <i className="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "Bagagiste",
    discription: "Bagagiste aeroport",
  },
];
export const team = [
  {
    image: require("../../assets/img/team-1.jpg"),
    name: "Nicolas Feu DUBOIS",
    designation: "CEO",
  },
  {
    image: require("../../assets/img/team-2.jpg"),
    name: "Jean Bon",
    designation: "Communication",
  },
  {
    image: require("../../assets/img/team-3.jpg"),
    name: "Allé Pitte :",
    designation: "Chargé com",
  },
  {
    image: require("../../assets/img/team-4.jpg"),
    name: "Guy Tare",
    designation: "Directeur executif",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Déménagement",
      },
      {
        name: "Bagagiste",
      },
      {
        name: "Location",
      },
      {
        name: "Transport maritime",
      },
      {
        name: "Produits dangereux",
      },
    ],
  },
];


export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "22 rue matabiau Toulouse",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+33 12 345 678",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "info@colisgp.com",
  },
];

export const contact = [
  {
    icon: <i className="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "book@example.com",
  },
  {
    icon: <i className="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "tech@example.com",
  },
  {
    icon: <i className="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "info@example.com",
  },
];
export const testimonial = [
  {
    description:
      "Service impeccable ! J'ai utilisé ce service de transport de colis pour envoyer un paquet à l'autre bout du pays et tout s'est parfaitement déroulé. Le colis est arrivé en parfait état et dans les délais annoncés. ",
    name: "Clara Mente",
    profession: "Paris",
    icon: (
      <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: require("../../assets/img/testimonial-1.jpg"),
  },
  {
    description:
      "Je suis extrêmement satisfait du service de transport de colis. La procédure de réservation était simple et rapide, et j'ai pu suivre mon colis en temps réel grâce à leur système de suivi efficace.",
    name: "Jean Eude",
    profession: "Maroc",
    icon: (
      <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: require("../../assets/img/testimonial-2.jpg"),
  },
  {
    description:
      "J'ai fait appel à ce service pour envoyer plusieurs colis à mes clients et je suis vraiment impressionné par leur professionnalisme. Les colis ont été livrés rapidement et en excellent état.",
    name: "Alain Proviste",
    profession: "Toulouse",
    icon: (
      <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: require("../../assets/img/testimonial-3.jpg"),
  },
];

export const roomItems = [
  {
    img: require("../../assets/img/room-1.jpg"),
    price: "$110/night",
    name: "Junior Suit",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },

  {
    img: require("../../assets/img/room-2.jpg"),
    price: "$110/night",
    name: "Executive Suite",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: require("../../assets/img/room-3.jpg"),
    price: "$110/night",
    name: "Super Deluxe",
    star: [
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
      <small className="fa fa-star text-primary"></small>,
    ],
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
];

export const facility = [
  {
    icon: <i className="fa fa-bed text-primary me-2"></i>,
    quantity: 3,
    facility: "bed",
  },
  {
    icon: <i className="fa fa-bath text-primary me-2"></i>,
    quantity: 2,
    facility: "bath",
  },
  {
    icon: <i className="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
];
