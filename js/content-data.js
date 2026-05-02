/* ============================================================
   CONTENT DATA — Sri Balaji Travels
   All dynamic content for index.html
   Images, Spiritual Journey, Customer Reviews
   ============================================================ */


/* ============================================================
   1. IMAGE PATHS CONFIGURATION
   ============================================================ */
const IMAGE_PATHS = {
  // Spiritual journey images
  spiritual: {
    tirumala: "images/spiritual-tirumala.jpg",
    padmavathi: "images/spiritual-padmavathi.jpg",
    kalahasti: "images/spiritual-kalahasti.jpg",
    kanipakam: "images/spiritual-kanipakam.jpg",
    goldenTemple: "images/spiritual-golden.jpg",
    arunachalam: "images/spiritual-arunachalam.jpg"
  },

  // Hero carousel images
  carousel: [
    "images/hero-1.jpg",
    "images/hero-2.jpg",
    "images/hero-3.jpg"
  ],

  // Location/service area image
  location: "images/tirupati-location.jpg"
};


/* ============================================================
   2. SPIRITUAL JOURNEY DATA
   ============================================================ */
const SPIRITUAL_JOURNEY = [
  {
    id: "tirumala-venkateswara",
    title: "Tirumala Venkateswara",
    description: "Ascend the seven hills to witness the divine Sri Venkateswara in all His glory. The sacred darshan brings peace, prosperity, and blessings that last a lifetime. Experience the spiritual power of the world's richest temple.",
    image: IMAGE_PATHS.spiritual.tirumala,
    location: "Tirumala Hills"
  },
  {
    id: "padmavathi-temple",
    title: "Goddess Padmavathi",
    description: "Visit the sacred abode of Goddess Padmavathi, the divine consort of Lord Venkateswara. Located in Tiruchanur, this temple radiates feminine divine energy and grants devotees prosperity and marital harmony.",
    image: IMAGE_PATHS.spiritual.padmavathi,
    location: "Tiruchanur"
  },
  {
    id: "sri-kalahasti",
    title: "Sri Kalahasteeswara",
    description: "One of the Pancha Bhuta Stalas representing air (Vayu), this ancient Shiva temple is renowned for Rahu-Ketu pooja. The divine wind linga performs miracles and removes planetary afflictions from devotees' lives.",
    image: IMAGE_PATHS.spiritual.kalahasti,
    location: "Srikalahasti"
  },
  {
    id: "kanipakam-vinayaka",
    title: "Kanipakam Vinayaka",
    description: "Witness the self-manifested idol of Lord Ganesha that grows in size every year. This powerful Swayambhu shrine removes all obstacles and grants success. The underground water spring adds mystical charm to your visit.",
    image: IMAGE_PATHS.spiritual.kanipakam,
    location: "Kanipakam"
  },
  {
    id: "golden-temple",
    title: "Golden Temple Vellore",
    description: "Marvel at the architectural brilliance of Sripuram Golden Temple dedicated to Goddess Mahalakshmi. Covered in gold foil, this modern temple complex radiates prosperity and divine feminine energy across 100 acres.",
    image: IMAGE_PATHS.spiritual.goldenTemple,
    location: "Vellore"
  },
  {
    id: "arunachaleswara",
    title: "Arunachaleswara Temple",
    description: "Experience the sacred fire linga at Tiruvannamalai, one of the Pancha Bhuta Stalas. The Annamalaiyar hill itself is considered a manifestation of Lord Shiva. Witness the grand Karthigai Deepam festival lighting.",
    image: IMAGE_PATHS.spiritual.arunachalam,
    location: "Tiruvannamalai"
  }
];


/* ============================================================
   3. CUSTOMER REVIEWS / TESTIMONIALS
   ============================================================ */
const CUSTOMER_REVIEWS = [
  {
    id: "review-1",
    name: "Rajesh Kumar",
    location: "Bangalore",
    rating: 5,
    text: "Excellent service! The driver was punctual and very professional. The car was clean and comfortable. We had a wonderful darshan experience at Tirumala. Highly recommended for families!",
    date: "March 2026",
    package: "Tirumala Darshan + Sightseeing"
  },
  {
    id: "review-2",
    name: "Priya Sharma",
    location: "Chennai",
    rating: 5,
    text: "Best cab service in Tirupati! Sri Balaji Travels made our pilgrimage hassle-free. The driver knew all the routes and gave us helpful tips. Worth every rupee. Will definitely book again.",
    date: "February 2026",
    package: "2-Day Premium Yatra"
  },
  {
    id: "review-3",
    name: "Venkat Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Very reliable and affordable. Booked for our family trip covering Tirumala, Kalahasti, and Kanipakam. Everything was perfectly organized. The driver was like a family member. Thank you!",
    date: "April 2026",
    package: "Complete Tirupati Darshan"
  },
  {
    id: "review-4",
    name: "Anitha Menon",
    location: "Mumbai",
    rating: 5,
    text: "Smooth and comfortable journey from airport to temple. Driver was very courteous and helped with luggage. Good pricing too. I recommend Sri Balaji Travels to all my friends visiting Tirupati.",
    date: "January 2026",
    package: "Local Pickup & Drop"
  },
  {
    id: "review-5",
    name: "Suresh Iyer",
    location: "Pune",
    rating: 5,
    text: "Outstanding experience! We covered seven temples in two days without any rush. Driver was knowledgeable about temple timings and routes. Made our spiritual journey truly memorable. Five stars!",
    date: "March 2026",
    package: "2-Day Premium Yatra"
  },
  {
    id: "review-6",
    name: "Lakshmi Devi",
    location: "Coimbatore",
    rating: 5,
    text: "Clean vehicles, professional drivers, and great service. Booked last minute for Tirumala darshan and they accommodated us immediately. Very reasonable rates. God bless Sri Balaji Travels!",
    date: "February 2026",
    package: "Tirumala Darshan Ride"
  },
  {
    id: "review-7",
    name: "Karthik Subramanian",
    location: "Delhi",
    rating: 5,
    text: "Wonderful service from start to finish. The car was well-maintained and spacious. Driver spoke good English and was very helpful. Made our South India temple tour very comfortable.",
    date: "April 2026",
    package: "Arunachalam + Kanchipuram"
  },
  {
    id: "review-8",
    name: "Meena Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Highly professional team! Booked for my parents' pilgrimage. The driver took great care of them and ensured they had a comfortable darshan. Very satisfied with the service. Strongly recommended!",
    date: "January 2026",
    package: "Tirumala Darshan + Sightseeing"
  },
  {
    id: "review-9",
    name: "Arun Krishnan",
    location: "Kochi",
    rating: 5,
    text: "Best travel experience in Tirupati! Everything was organized perfectly. Driver was on time, vehicle was excellent, and rates were very competitive. Will definitely use their services again.",
    date: "March 2026",
    package: "Tirupati Temple Tour"
  },
  {
    id: "review-10",
    name: "Deepa Nair",
    location: "Trivandrum",
    rating: 5,
    text: "Fantastic service! Very professional and reliable. The driver was friendly and helped us plan our entire itinerary. Great value for money. Blessing to have found Sri Balaji Travels!",
    date: "February 2026",
    package: "Complete Tirupati Darshan"
  }
];


/* ============================================================
   4. HELPER FUNCTIONS
   ============================================================ */

/**
 * Generate star rating HTML
 * @param {number} rating - Rating out of 5
 * @returns {string} HTML for star display
 */
function generateStarRating(rating) {
  const fullStars = '⭐'.repeat(rating);
  return fullStars;
}

/**
 * Get random reviews for display
 * @param {number} count - Number of reviews to get
 * @returns {array} Array of review objects
 */
function getRandomReviews(count = 5) {
  const shuffled = [...CUSTOMER_REVIEWS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}