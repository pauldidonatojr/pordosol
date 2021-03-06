const items = [
  {
    id: 1,
    title: 'Salada',
    category: 'Appetizers',
    price: 4,
    img: './images/item-1.jpeg',
    desc: `Iceburg Lettuce, Tomato and Cheese `,
  },
  {
    id: 2,
    title: 'Camarão ao Alho',
    category: 'Appetizers',
    price: 14,
    // img: './images/item-2.jpeg',
    desc: `Shrimp Garlic Sauce`,
  },
  {
    id: 3,
    title: 'Picadinho Misto',
    category: 'Appetizers',
    price: 19,
    // img: './images/item-3.jpeg',
    desc: `Pork Shrimp, Sausage and Calamari served with French Fries`,
  },
  {
    id: 4,
    title: 'Ameijoas à Bulhão Pato',
    category: 'Appetizers',
    price: 15,
    // img: './images/item-4.jpeg',
    desc: `Littleneck Clams, Olive oil, Garlic, Cliantro and White Wine `,
  },
  {
    id: 5,
    title: 'Lulas Fritas',
    category: 'Appetizers',
    price: 15,
    // img: './images/item-5.jpeg',
    desc: `Fried Calamari wtih Marinara Sauce `,
  },
  {
    id: 6,
    title: 'Chouriço',
    category: 'Appetizers',
    price: 14,
    // img: './images/item-6.jpeg',
    desc: `Homemade Sausage Grilled in Portuguese Grappa`,
  },
  {
    id: 7,
    title: 'Frango à Passarinho',
    category: 'Appetizers',
    price: 11,
    // img: './images/item-7.jpeg',
    desc: `Fried Chicken on the Bone`,
  },
  {
    id: 8,
    title: 'Chicken Fingers',
    category: 'Appetizers',
    price: 11,
    // img: './images/item-8.jpeg',
    desc: `Served with French Fries and Honey Mustard `,
  },
  {
    id: 9,
    title: 'Mozzarella Sticks',
    category: 'Appetizers',
    price: 10,
    // img: './images/item-9.jpeg',
    desc: `Served with Homemade Tomato Sauce`,
  },
  {
    id: 10,
    title: 'Mineirão',
    category: 'Appetizers',
    price: 23,
    // img: './images/item-9.jpeg',
    desc: `Codfish Cakes, Shrimp Puffs, Fried Pork Belly, Fried Chicken on the bone and Yucca Fries`,
  },
  {
    id: 11,
    title: 'Picadindo Vaca com Cebola',
    category: 'Appetizers',
    price: 20,
    // img: './images/item-9.jpeg',
    desc: `Beef Cubes with French Fries and Sautéed Onions`,
  },
  {
    id: 12,
    title: 'Picadinho de Alcatra com Mandioca',
    category: 'Appetizers',
    price: 22,
    img: './images/item-9.jpeg',
    desc: `Top Rump Cubes, Melted Cheese and Yucca Fries`,
  },
  {
    id: 13,
    title: 'Rissois De Camarão ',
    category: 'Appetizers',
    price: 13.5,
    img: './images/item-9.jpeg',
    desc: `Shrimp Puffs`,
  },
  {
    id: 14,
    title: 'Bolinhos de Bacalhau',
    category: 'Appetizers',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Codfish Cakes `,
  },
  {
    id: 15,
    title: 'Misto de Linquiça',
    category: 'Appetizers',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Linquiça Calabresa e de Frango com Mozarella, Mandioca frita, Farafa e Vinagrete`,
  },
  {
    id: 16,
    title: 'Dourada Frita ou Grelhada',
    category: 'Seafood',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Whole Orata Grilled or Fried, Boiled Potatoes, Vegetables`,
  },
  {
    id: 17,
    title: 'Green or Red Mariscada',
    category: 'Seafood',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Mixed Shelfish in Parsley in White Wine or Tomato Sauce`,
  },
  {
    id: 18,
    title: 'Paelha Marinera or Valenciana',
    category: 'Seafood',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Mixed Shelfish in Rice, Valenciana served with Seafood and Meat`,
  },
  {
    id: 19,
    title: 'Arroz de Camarão',
    category: 'Seafood',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Shrimp in Saffron Rice`,
  },
  {
    id: 20,
    title: 'Salmao Grelhado',
    category: 'Seafood',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Broiled Salmon served with Boiled Potatoes and Vegetables`,
  },
  {
    id: 21,
    title: 'Salmão Pôr do Sol',
    category: 'Seafood',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Grilled Salmon with Shrimp, Boiled Potatoes and Vegetables`,
  },
  {
    id: 22,
    title: 'Gambas Mozambique',
    category: 'Seafood',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Colossal Prawns on the Shell, Garlic, White Wine, Spicy Touch`,
  },
  {
    id: 23,
    title: 'Bacalhau á Portuguesa',
    category: 'Seafood',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Grilled Salted Cod Fish on the Bone, Boiled Potato and Vegetables`,
  },
  {
    id: 24,
    title: 'Arroz de Marisco',
    category: 'Seafood',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Mixed Shellfish in Rice`,
  },
  {
    id: 25,
    title: 'Grilled Filet Mignon Madeira',
    category: 'Meats',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Grilled Filet Mignon, Madeira Wine Sauce, Rice, Beans and French Fries`,
  },
  {
    id: 26,
    title: 'Bife á Portuguesa',
    category: 'Meats',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `N.Y. Strip Steak w/Egg and slice of Ham,Rice,Beans and French Fries`,
  },
  {
    id: 27,
    title: 'Bife á Pôr do Sol',
    category: 'Meats',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `N.Y. Strip Steak wtih Shrimp in Garlic Sauce, Rice, Beans and French Fries`,
  },
  {
    id: 28,
    title: 'Bife da Vazia',
    category: 'Meats',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Grilled Strip Loin, Rice, Beans and French Fries `,
  },
  {
    id: 29,
    title: 'Alentejana',
    category: 'Meats',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Famous Pork Cubes and Fried Cubed Potatoes with Clams`,
  },
  {
    id: 30,
    title: 'Costela de Vaca no Churrasco',
    category: 'Meats',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Grilled Short Ribs, Rice, Beans and French Friest`,
  },
  {
    id: 31,
    title: 'Bitoque',
    category: 'Meats',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Small Strip Loin, Garlic Sauce, Egg on top and Spanish Potatoes`,
  },
  {
    id: 32,
    title: 'Fraldinha à Brasileira',
    category: 'Meats',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Grilled Skirt Steak w/ 2 Eggs, Rice, Beans and French Fries`,
  },
  {
    id: 33,
    title: 'Picanha Grelhada',
    category: 'Meats',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Grilled Top Sirloin Cap Rice, Beans and French Fries`,
  },
  {
    id: 34,
    title: 'T-Bone Grelhada ',
    category: 'Meats',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Grilled T-Bone Steak with Rice, Beans and French Fries`,
  },
  {
    id: 35,
    title: 'Costeletas de Porco Grelhadas',
    category: 'Meats',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Grilled Pork Chops, Rice, Beans and French Fries`,
  },
  {
    id: 36,
    title: 'Salda',
    category: 'Side Orders',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Salada`,
  },
  {
    id: 37,
    title: 'Vegetables',
    category: 'Side Orders',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Vegetais`,
  },
  {
    id: 38,
    title: 'Rice',
    category: 'Side Orders',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Arroz`,
  },
  {
    id: 39,
    title: 'Beans',
    category: 'Side Orders',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Feijão`,
  },
  {
    id: 40,
    title: 'French Fries',
    category: 'Side Orders',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Batatas Fritas`,
  },
  {
    id: 41,
    title: 'Spanish Potatoes',
    category: 'Side Orders',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Batata Espanhola`,
  },
  {
    id: 42,
    title: 'Boiled Potatoes',
    category: 'Side Orders',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Batata Cozida`,
  },
  {
    id: 43,
    title: 'Cheese Steak Sandwich',
    category: 'Sandwiches',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Grilled Sirloin Steak, Mozzarella Cheese and French Fries `,
  },
  {
    id: 44,
    title: 'Steak Sandwich',
    category: 'Sandwiches',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Grilled Sirloin Steak with French Fries `,
  },
  {
    id: 45,
    title: 'Chicken Sandwich',
    category: 'Sandwiches',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Grilled or Breaded Chicken Breast served with French Fries `,
  },
  {
    id: 46,
    title: 'Pork Sandwich',
    category: 'Sandwiches',
    price: 16.99,
    // img: './images/item-9.jpeg',
    desc: `Portuguese famous "Febras". Pork Cutlets Fried or Grilled `,
  },
  {
    id: 47,
    title: 'Caipirinha',
    category: 'House Speciality Drinks',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 48,
    title: 'Caipirinha w/ Passion Fruit',
    category: 'House Speciality Drinks',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 49,
    title: 'Caipirinha w/ Pineapple',
    category: 'House Speciality Drinks',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 50,
    title: 'Large Sangria',
    category: 'House Speciality Drinks',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 51,
    title: 'Small Sangria',
    category: 'House Speciality Drinks',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 52,
    title: 'Margarita',
    category: 'House Speciality Drinks',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 53,
    title: 'Malibu Bay Breeze',
    category: 'House Speciality Drinks',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 54,
    title: 'Long Island Iced Tea',
    category: 'House Speciality Drinks',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 55,
    title: 'Caipi Vodka',
    category: 'House Speciality Drinks',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 56,
    title: 'Sex on the Beach',
    category: 'House Speciality Drinks',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 57,
    title: 'Barefoot Cardonnay',
    category: 'White Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 58,
    title: 'Yellow Tail Chardonnay',
    category: 'White Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 59,
    title: 'Barefoot Moscato ',
    category: 'White Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 60,
    title: 'Yellow Tail Moscato ',
    category: 'White Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 61,
    title: 'Barefoot Pinot Grigio ',
    category: 'White Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 62,
    title: 'Yellow Tail Pinot Grigio ',
    category: 'White Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 63,
    title: 'Zinfandel Gallo Family White Zinfandel',
    category: 'White Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 64,
    title: 'Zinfandel Gallo Family White Zinfandel',
    category: 'White Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 65,
    title: 'Monte Velho',
    category: 'Whites - Portugal',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 66,
    title: 'Casal Garcia',
    category: 'Whites - Portugal',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 67,
    title: 'Borba',
    category: 'Whites - Portugal',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 68,
    title: 'Muralhas',
    category: 'Whites - Portugal',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 69,
    title: 'Grao Vasco',
    category: 'Whites - Portugal',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 70,
    title: 'Barefoot Merlot',
    category: 'Red Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 71,
    title: 'Yellow Tail Merlot',
    category: 'Red Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 72,
    title: 'Barefoot Cabernet',
    category: 'Red Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 73,
    title: 'Yellow Tail Cabernet',
    category: 'Red Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 74,
    title: 'Yellow Tail Pinot Noir',
    category: 'Red Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 75,
    title: 'Lambrusco',
    category: 'Red Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 76,
    title: 'Silk & Spice',
    category: 'Red Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 77,
    title: 'Duas Quintas',
    category: 'Red Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 78,
    title: 'Periquita',
    category: 'Red Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 79,
    title: 'Periquita Reserva',
    category: 'Red Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 80,
    title: 'Malbec (Casillerodel Diablo)',
    category: 'Red Wines',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 81,
    title: 'Borba',
    category: 'Reds-Portugal',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 82,
    title: 'Monte Velho',
    category: 'Reds-Portugal',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 83,
    title: 'Eugenio de Almeida',
    category: 'Reds-Portugal',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 84,
    title: 'Grao Vasco',
    category: 'Reds-Portugal',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 85,
    title: 'Monte Serra',
    category: 'Reds-Portugal',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 86,
    title: 'JP',
    category: 'Reds-Portugal',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
  {
    id: 87,
    title: 'Borba Reserva',
    category: 'Reds-Portugal',
    price: 16.99,
    // img: './images/item-9.jpeg',
    // desc: `Mandioca`,
  },
]
export default items
