const dishes = [
  //---------------Nigiri Section---------------------------//
  {
    id: "Maguro-Nigiri",
    type: "nigiri",
    name: "Maguro Nigiri",
    subtitle: "Tuna Nigiri",
    src_img: "/menu/nigiri/Maguro-nigiri-sushi.png",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/nigiri/Maguro-nigiri-sushi.png",
    price: 3.7,
    rating: 5,
    sales: 90,
    description:
      "Fresh tuna on a small bed of rice, garnished with wasabi and soy sauce.",
  },
  {
    id: "Ika-Nigiri",
    type: "nigiri",
    name: "Ika Nigiri",
    subtitle: "Squid Nigiri",
    src_img: "/menu/nigiri/Ika-nigiri-sushi.png",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/nigiri/Ika-nigiri-sushi.png",
    price: 4.0,
    rating: 5,
    sales: 40,
    description:
      "Delicate squid on vinegared rice, served with pickled ginger and soy sauce.",
  },
  {
    id: "Hamachi-Nigiri",
    type: "nigiri",
    name: "Hamachi Nigiri",
    subtitle: "Yellowtail Nigiri",
    src_img: "/menu/nigiri/Hamachi-nigiri-sushi.png",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/nigiri/Hamachi-nigiri-sushi.png",
    price: 3.5,
    rating: 4,
    sales: 68,
    description:
      "Yellowtail fish atop a bite-sized bed of sushi rice, accompanied by wasabi and soy sauce.",
  },
  {
    id: "Ebi-Nigiri",
    type: "nigiri",
    name: "Ebi Nigiri",
    subtitle: "Shrimp Nigiri",
    src_img: "/menu/nigiri/Ebi-nigiri-sushi.png",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/nigiri/Ebi-nigiri-sushi.png",
    price: 3.0,
    rating: 5,
    sales: 120,
    description:
      "Cooked shrimp presented on seasoned rice, complemented by a dollop of wasabi and soy sauce.",
  },
  {
    id: "Sake-Nigiri",
    type: "nigiri",
    name: "Sake Nigiri",
    subtitle: "Salmon Nigiri",
    src_img: "/menu/nigiri/Sake-nigiri-sushi.png",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/nigiri/Sake-nigiri-sushi.png",
    price: 3.7,
    rating: 4,
    sales: 75,
    description:
      "Fresh salmon served on a small mound of sushi rice, garnished with wasabi and soy sauce.",
  },
  {
    id: "Tako-Nigiri",
    type: "nigiri",
    name: "Tako Nigiri",
    subtitle: "Octopus Nigiri",
    src_img: "/menu/nigiri/Tako-nigiri-sushi.png",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/nigiri/Tako-nigiri-sushi.png",
    price: 3.2,
    rating: 4,
    sales: 64,
    description:
      "Tender octopus on a bed of vinegared rice, accompanied by pickled ginger and soy sauce.",
  },
  {
    id: "Unagi-Nigiri",
    type: "nigiri",
    name: "Unagi Nigiri",
    subtitle: "Grilled Eel Nigiri",
    src_img: "/menu/nigiri/Unagi-nigiri-sushi.png",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/nigiri/Unagi-nigiri-sushi.png",
    price: 3.7,
    rating: 5,
    sales: 100,
    description:
      "Grilled eel glazed with sweet soy-based sauce atop seasoned rice, served with wasabi.",
  },
  //---------------Sushi Roll Section---------------------------//
  {
    id: "California-Roll",
    type: "sushi roll",
    name: "California Roll",
    subtitle: "Avocado and Crab Roll",
    src_img: "/menu/sushi-roll/California-roll.png",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/sushi-roll/California-Roll.png",
    price: 8.99,
    rating: 4,
    sales: 85,
    description:
      "A classic sushi roll with crab, avocado, cucumber, and tobiko wrapped in seaweed and rice.",
  },
  {
    id: "Crispy-Tempura-Roll",
    type: "sushi roll",
    name: "Crispy Tempura Roll",
    subtitle: "Deep-Fried Sushi Roll",
    src_img: "/menu/sushi-roll/Crispy-Tempura-Roll.png",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/sushi-roll/Crispy-Tempura-Roll.png",
    price: 10.49,
    rating: 4,
    sales: 92,
    description:
      "A crunchy roll featuring tempura shrimp, cucumber, and avocado, drizzled with eel sauce.",
  },
  {
    id: "Philadelphia-Roll",
    type: "sushi roll",
    name: "Philadelphia Roll",
    subtitle: "Smoked Salmon Roll",
    src_img: "/menu/sushi-roll/Philadelphia-Roll.png",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/sushi-roll/Philadelphia-Roll.png",
    price: 9.99,
    rating: 4,
    sales: 78,
    description:
      "A rich and creamy roll filled with smoked salmon, cream cheese, and cucumber.",
  },
  {
    id: "Sesame-Tuna-Roll",
    type: "sushi roll",
    name: "Sesame Tuna Roll",
    subtitle: "Sesame-Coated Roll",
    src_img: "/menu/sushi-roll/Sesame-Tuna-Roll.png",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/sushi-roll/Sesame-Tuna-Roll.png",
    price: 8.99,
    rating: 4,
    sales: 76,
    description:
      "A California roll topped with sesame seeds for an extra layer of flavor and texture.",
  },
  {
    id: "Spicy-Shrimp-Roll",
    type: "sushi roll",
    name: "Spicy Shrimp Roll",
    subtitle: "Spicy Sushi Roll",
    src_img: "/menu/sushi-roll/Spicy-Shrimp-Roll.png",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/sushi-roll/Spicy-Shrimp-Roll.png",
    price: 9.49,
    rating: 4,
    sales: 88,
    description:
      "A zesty roll filled with spicy shrimp, cucumber, and avocado, topped with spicy mayo.",
  },
  {
    id: "Wakame-Sushi-Roll",
    type: "sushi roll",
    name: "Wakame Sushi Roll",
    subtitle: "Seaweed Salad Roll",
    src_img: "/menu/sushi-roll/Wakame-Sushi-Roll.png",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/sushi-roll/Wakame-Sushi-Roll.png",
    price: 7.99,
    rating: 4,
    sales: 70,
    description:
      "A refreshing roll with wakame seaweed salad, cucumber, and pickled radish, wrapped in rice and seaweed.",
  },
  //---------------Sashimi Section---------------------------//
  {
    id: "Octopus-Sashimi",
    type: "sashimi",
    name: "Octopus Sashimi",
    subtitle: "Tako Sashimi",
    src_img: "/menu/sashimi/Octopus-Sashimi.jpg",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/sashimi/Octopus-Sashimi.jpg",
    price: 13.99,
    rating: 4,
    sales: 55,
    description:
      "Tender and thinly sliced octopus sashimi, served with a side of soy sauce and radish.",
  },
  {
    id: "Salmon-Sashimi",
    type: "sashimi",
    name: "Salmon Sashimi",
    subtitle: "Sake Sashimi",
    src_img: "/menu/sashimi/Salmon-Sashimi.jpg",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/sashimi/Salmon-Sashimi.jpg",
    price: 14.99,
    rating: 4,
    sales: 60,
    description:
      "Fresh and succulent salmon sashimi, served with a drizzle of ponzu sauce.",
  },
  {
    id: "Sea-Urchin-Sashimi",
    type: "sashimi",
    name: "Sea Urchin Sashimi",
    subtitle: "Uni Sashimi",
    src_img: "/menu/sashimi/Sea-Urchin-Sashimi.jpg",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/sashimi/Sea-Urchin-Sashimi.jpg",
    price: 19.99,
    rating: 4,
    sales: 48,
    description:
      "Exquisite sea urchin sashimi, delicately prepared and served on a bed of seaweed.",
  },
  {
    id: "Yellowtail-Sashimi",
    type: "sashimi",
    name: "Yellowtail Sashimi",
    subtitle: "Hamachi Sashimi",
    src_img: "/menu/sashimi/Yellowtail-Sashimi.jpg",
    img_public_url:
      "https://sushier-data-bucket.s3.us-west-1.amazonaws.com/menu/sashimi/Yellowtail-Sashimi.jpg",
    price: 16.99,
    rating: 4,
    sales: 50,
    description:
      "Premium yellowtail sashimi, thinly sliced and served with a touch of wasabi and yuzu zest.",
  },
];

export default dishes;
