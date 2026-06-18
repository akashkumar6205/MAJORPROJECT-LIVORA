const sampleListing  =  [
  {
    title: "Luxury Beach Villa",
    description: "A stunning beachfront villa with private pool and ocean views.",
    image:"/images/image.jpg",
    price: 15000,
    location: "Goa",
    country: "India"
  },
  {
    title: "Mountain Retreat Cottage",
    description: "Peaceful cottage surrounded by mountains and lush greenery.",
    image: "/images/image1.jpg",
    price: 7000,
    location: "Manali",
    country: "India"
  },
  {
    title: "Modern City Apartment",
    description: "Stylish apartment in the city center with premium amenities.",
    image: "/images/image2.jpg",
    price: 5000,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Lakefront Cabin",
    description: "Cozy wooden cabin overlooking a beautiful lake.",
    image: "/images/image3.jpg",
    price: 6500,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Luxury Hotel Suite",
    description: "Elegant hotel suite with panoramic city views.",
    image: "/images/image4.jpg",
    price: 12000,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Private Beach House",
    description: "Exclusive beach house with direct access to the shoreline.",
    image: "/images/image5.jpg",
    price: 18000,
    location: "Malé",
    country: "Maldives"
  },
  {
    title: "Heritage Haveli",
    description: "Traditional haveli showcasing rich cultural heritage.",
    image: "/images/image6.jpg",
    price: 8500,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Desert Luxury Camp",
    description: "Luxury tents offering an unforgettable desert experience.",
    image: "/images/image7.jpg",
    price: 9000,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Ocean View Room",
    description: "Comfortable hotel room with breathtaking ocean views.",
    image: "/images/image8.jpg",
    price: 6000,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Farmhouse Escape",
    description: "Relax in a countryside farmhouse with open green spaces.",
    image: "/images/image9.jpg",
    price: 4000,
    location: "Punjab",
    country: "India"
  },
  {
    title: "Treehouse Adventure",
    description: "Unique treehouse stay nestled in a tropical forest.",
    image: "/images/image10.jpg",
    price: 5500,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Snow Peak Chalet",
    description: "Warm chalet with stunning snow-covered mountain views.",
    image: "/images/image11.jpg",
    price: 9500,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Luxury Penthouse",
    description: "Premium penthouse featuring modern interiors and skyline views.",
    image: "/images/image12.jpg",
    price: 20000,
    location: "New York",
    country: "USA"
  },
  {
    title: "Island Resort Villa",
    description: "Private villa located on a tropical island resort.",
    image: "/images/image13.jpg",
    price: 22000,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Seaside Cottage",
    description: "Charming cottage just steps away from the beach.",
    image: "/images/image14.jpg",
    price: 6500,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Luxury Jungle Lodge",
    description: "Immerse yourself in nature with a luxury jungle stay.",
    image: "/images/image15.jpg",
    price: 11000,
    location: "Bandhavgarh",
    country: "India"
  },
  {
    title: "Downtown Studio",
    description: "Compact and modern studio apartment in the city center.",
    image: "/images/image16.jpg",
    price: 3500,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "Cliffside Villa",
    description: "Villa perched on a cliff with stunning sea views.",
    image: "/images/image17.jpg",
    price: 17000,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Riverside Homestay",
    description: "Comfortable homestay along a peaceful riverside.",
    image: "/images/image18.jpg",
    price: 3000,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Royal Palace Stay",
    description: "Live like royalty in this converted palace hotel.",
    image: "/images/image19.jpg",
    price: 25000,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Beachfront Resort Room",
    description: "Spacious room in a luxury beachfront resort.",
    image: "/images/image20.jpg",
    price: 10000,
    location: "Goa",
    country: "India"
  },
  {
    title: "Modern Loft",
    description: "Stylish loft apartment with contemporary decor.",
    image: "/images/image21.jpg",
    price: 5500,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Forest Cabin",
    description: "Rustic cabin surrounded by dense forest.",
    image: "/images/image22.jpg",
    price: 5000,
    location: "Coorg",
    country: "India"
  },
  {
    title: "Luxury Marina Apartment",
    description: "Apartment overlooking a beautiful marina.",
    image: "/images/image23.jpg",
    price: 14000,
    location: "Dubai Marina",
    country: "UAE"
  },
  {
    title: "Countryside Villa",
    description: "Spacious villa in a peaceful countryside setting.",
    image: "/images/image24.jpg",
    price: 7500,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Boutique Hotel Room",
    description: "Elegant room in a charming boutique hotel.",
    image: "/images/image25.jpg",
    price: 6500,
    location: "Paris",
    country: "France"
  },
  {
    title: "Hilltop Cottage",
    description: "Cottage located on a hilltop with panoramic views.",
    image: "/images/image26.jpg",
    price: 7000,
    location: "Mussoorie",
    country: "India"
  },
  {
    title: "Luxury Ski Chalet",
    description: "Perfect winter getaway near famous ski slopes.",
    image: "/images/image27.jpg",
    price: 18000,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Beach Bungalow",
    description: "Relaxing bungalow surrounded by palm trees.",
    image: "/images/image28.jpg",
    price: 6000,
    location: "Langkawi",
    country: "Malaysia"
  },
  {
    title: "Urban Condo",
    description: "Modern condo close to shopping and entertainment.",
    image: "/images/image29.jpg",
    price: 5500,
    location: "Singapore",
    country: "Singapore"
  },
  {
    title: "Lake View Resort",
    description: "Luxury resort offering breathtaking lake views.",
    image: "/images/image30.jpg",
    price: 11000,
    location: "Geneva",
    country: "Switzerland"
  },
  {
    title: "Traditional Ryokan",
    description: "Authentic Japanese inn with cultural experiences.",
    image: "/images/image31.jpg",
    price: 13000,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Coastal Villa",
    description: "Elegant villa located along the scenic coastline.",
    image: "/images/image32.jpg",
    price: 16000,
    location: "Amalfi",
    country: "Italy"
  },
  {
    title: "Safari Lodge",
    description: "Luxury accommodation near wildlife reserves.",
    image: "/images/image33.jpg",
    price: 14000,
    location: "Nairobi",
    country: "Kenya"
  },
  {
    title: "Luxury Houseboat",
    description: "Unique stay experience on a premium houseboat.",
    image: "/images/image34.jpg",
    price: 9000,
    location: "Alleppey",
    country: "India"
  },
  {
    title: "Mountain View Villa",
    description: "Villa offering breathtaking views of mountain ranges.",
    image: "/images/image35.jpg",
    price: 12000,
    location: "Leh",
    country: "India"
  },
  
  
]

module.exports = { data: sampleListing };
