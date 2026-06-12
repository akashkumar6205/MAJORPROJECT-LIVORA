const sampleListing  =  [
  {
    title: "Luxury Beach Villa",
    description: "A stunning beachfront villa with private pool and ocean views.",
    image: "https://unsplash.com/photos/brown-wooden-lounge-chairs-near-pool-surrounded-by-palm-trees-vmIWr0NnpCQ",
    price: 15000,
    location: "Goa",
    country: "India"
  },
  {
    title: "Mountain Retreat Cottage",
    description: "Peaceful cottage surrounded by mountains and lush greenery.",
    image: "https://unsplash.com/photos/sunloungers-fronting-buildings-near-mountain-DGa0LQ0yDPc",
    price: 7000,
    location: "Manali",
    country: "India"
  },
  {
    title: "Modern City Apartment",
    description: "Stylish apartment in the city center with premium amenities.",
    image: "https://unsplash.com/photos/person-in-swimming-pool-during-daytime-rlwE8f8anOc",
    price: 5000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Lakefront Cabin",
    description: "Cozy wooden cabin overlooking a beautiful lake.",
    image: "https://unsplash.com/photos/photo-of-brown-bench-near-swimming-pool-Koei_7yYtIo",
    price: 6500,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Luxury Hotel Suite",
    description: "Elegant hotel suite with panoramic city views.",
    image: "https://unsplash.com/photos/brown-wooden-table-and-chairs-on-brown-wooden-deck-near-body-of-water-during-daytime-TAgGZWz6Qg8",
    price: 12000,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Private Beach House",
    description: "Exclusive beach house with direct access to the shoreline.",
    image: "https://unsplash.com/photos/3d-render-of-commercial-building-interior-and-reception-1FLlNc1C-2s",
    price: 18000,
    location: "Malé",
    country: "Maldives"
  },
  {
    title: "Heritage Haveli",
    description: "Traditional haveli showcasing rich cultural heritage.",
    image: "https://unsplash.com/photos/coconut-palm-trees-in-hotel-lobby-_dS27XGgRyQ",
    price: 8500,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Desert Luxury Camp",
    description: "Luxury tents offering an unforgettable desert experience.",
    image: "https://unsplash.com/photos/blue-body-of-water-in-front-of-building-near-trees-during-nighttime-M7GddPqJowg",
    price: 9000,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Ocean View Room",
    description: "Comfortable hotel room with breathtaking ocean views.",
    image: "https://unsplash.com/photos/two-chairs-sitting-in-front-of-a-swimming-pool-k_My4rXk4Lc",
    price: 6000,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Farmhouse Escape",
    description: "Relax in a countryside farmhouse with open green spaces.",
    image: "https://unsplash.com/photos/white-and-brown-concrete-building-CepDpEiALqM",
    price: 4000,
    location: "Punjab",
    country: "India"
  },
  {
    title: "Treehouse Adventure",
    description: "Unique treehouse stay nestled in a tropical forest.",
    image: "https://unsplash.com/photos/brown-wooden-lounge-chairs-on-brown-wooden-dock-during-daytime-xEaAoizNFV8",
    price: 5500,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Snow Peak Chalet",
    description: "Warm chalet with stunning snow-covered mountain views.",
    image: "https://unsplash.com/photos/white-bed-linen-with-brown-wooden-bed-frame-67-sOi7mVIk",
    price: 9500,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Luxury Penthouse",
    description: "Premium penthouse featuring modern interiors and skyline views.",
    image: "https://unsplash.com/photos/white-building-photographt-MXbM1NrRqtI",
    price: 20000,
    location: "New York",
    country: "USA"
  },
  {
    title: "Island Resort Villa",
    description: "Private villa located on a tropical island resort.",
    image: "https://unsplash.com/photos/brown-and-white-wooden-house-near-swimming-pool-during-daytime-_twiIcIsp2s",
    price: 22000,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Seaside Cottage",
    description: "Charming cottage just steps away from the beach.",
    image: "https://unsplash.com/photos/pool-surrounded-with-trees-and-gazebos-1tyuLfDOnG0",
    price: 6500,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Luxury Jungle Lodge",
    description: "Immerse yourself in nature with a luxury jungle stay.",
    image: "https://unsplash.com/photos/an-aerial-view-of-a-resort-pool-with-palm-trees-rbFxv8GUEt4",
    price: 11000,
    location: "Bandhavgarh",
    country: "India"
  },
  {
    title: "Downtown Studio",
    description: "Compact and modern studio apartment in the city center.",
    image: "https://unsplash.com/photos/brown-wooden-lounge-chairs-near-body-of-water-during-daytime-oyxsG2Lh_uA",
    price: 3500,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "Cliffside Villa",
    description: "Villa perched on a cliff with stunning sea views.",
    image: "https://unsplash.com/photos/aerial-photography-of-resort-8sKTHeGgrUM",
    price: 17000,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Riverside Homestay",
    description: "Comfortable homestay along a peaceful riverside.",
    image: "https://unsplash.com/photos/blue-outdoor-pool-hDbCjHNdF48",
    price: 3000,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Royal Palace Stay",
    description: "Live like royalty in this converted palace hotel.",
    image: "https://unsplash.com/photos/brown-wooden-chair-on-brown-wooden-deck-AH8zKXqFITA",
    price: 25000,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Beachfront Resort Room",
    description: "Spacious room in a luxury beachfront resort.",
    image: "https://unsplash.com/photos/a-hotel-sign-lit-up-at-night-on-a-building-4BmLZn1eY70",
    price: 10000,
    location: "Goa",
    country: "India"
  },
  {
    title: "Modern Loft",
    description: "Stylish loft apartment with contemporary decor.",
    image: "https://unsplash.com/photos/thatch-huts-and-houses-by-the-pool-during-day--27u_GzlAFw",
    price: 5500,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Forest Cabin",
    description: "Rustic cabin surrounded by dense forest.",
    image: "https://unsplash.com/photos/swimming-pool-near-ocean-2gOxKj594nM",
    price: 5000,
    location: "Coorg",
    country: "India"
  },
  {
    title: "Luxury Marina Apartment",
    description: "Apartment overlooking a beautiful marina.",
    image: "https://unsplash.com/photos/resort-viewing-blue-sea-under-blue-and-white-sky-during-daytime-425b2PhNuHA",
    price: 14000,
    location: "Dubai Marina",
    country: "UAE"
  },
  {
    title: "Countryside Villa",
    description: "Spacious villa in a peaceful countryside setting.",
    image: "https://unsplash.com/photos/woman-on-body-of-water-during-daytime-0653_wY0nRc",
    price: 7500,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Boutique Hotel Room",
    description: "Elegant room in a charming boutique hotel.",
    image: "https://unsplash.com/photos/3d-render-of-luxury-hotel-lobby-and-reception-XY67nVDY8dk",
    price: 6500,
    location: "Paris",
    country: "France"
  },
  {
    title: "Hilltop Cottage",
    description: "Cottage located on a hilltop with panoramic views.",
    image: "https://unsplash.com/photos/brown-wooden-bed-frame-with-white-and-red-floral-bed-linen-2P_ifaetDm0",
    price: 7000,
    location: "Mussoorie",
    country: "India"
  },
  {
    title: "Luxury Ski Chalet",
    description: "Perfect winter getaway near famous ski slopes.",
    image: "https://unsplash.com/photos/a-bedroom-with-a-view-of-the-mountains-AAZaK31x6FM",
    price: 18000,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Beach Bungalow",
    description: "Relaxing bungalow surrounded by palm trees.",
    image: "https://unsplash.com/photos/gray-bedsprea-w72a24brINI",
    price: 6000,
    location: "Langkawi",
    country: "Malaysia"
  },
  {
    title: "Urban Condo",
    description: "Modern condo close to shopping and entertainment.",
    image: "https://unsplash.com/photos/bench-and-dining-table-near-body-of-water-under-calm-sky-YC8qqp50BdA",
    price: 5500,
    location: "Singapore",
    country: "Singapore"
  },
  {
    title: "Lake View Resort",
    description: "Luxury resort offering breathtaking lake views.",
    image: "https://unsplash.com/photos/white-and-brown-wooden-lounge-chairs-near-swimming-pool-during-daytime-_Ei9f33bQ1A",
    price: 11000,
    location: "Geneva",
    country: "Switzerland"
  },
  {
    title: "Traditional Ryokan",
    description: "Authentic Japanese inn with cultural experiences.",
    image: "https://unsplash.com/photos/two-gray-sofas-beside-pool-in-room-a8iCZvtrHpQ",
    price: 13000,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Coastal Villa",
    description: "Elegant villa located along the scenic coastline.",
    image: "https://unsplash.com/photos/white-patio-umbrella-near-swimming-pool-during-daytime-M3YuHIpgmSY",
    price: 16000,
    location: "Amalfi",
    country: "Italy"
  },
  {
    title: "Safari Lodge",
    description: "Luxury accommodation near wildlife reserves.",
    image: "https://unsplash.com/photos/brown-estate-ssOtyGE8CyE",
    price: 14000,
    location: "Nairobi",
    country: "Kenya"
  },
  {
    title: "Luxury Houseboat",
    description: "Unique stay experience on a premium houseboat.",
    image: "https://unsplash.com/photos/white-concrete-building-near-palm-trees-during-daytime-ycyXpdhCnp8",
    price: 9000,
    location: "Alleppey",
    country: "India"
  },
  {
    title: "Mountain View Villa",
    description: "Villa offering breathtaking views of mountain ranges.",
    image: "https://unsplash.com/photos/a-group-of-lounge-chairs-and-umbrellas-on-a-patio-ezKnKvpXkYE",
    price: 12000,
    location: "Leh",
    country: "India"
  },
  
  
]

module.exports = { data: sampleListing };
