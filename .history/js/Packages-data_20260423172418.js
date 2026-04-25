/* ============================================================
   PACKAGES DATA — Sri Balaji Travels
   Single source of truth. Used by index.html, tirupathi.html,
   package.html and booking.html
   ============================================================ */

const PACKAGES = [

  /* ── TIRUMALA / DARSHAN ─────────────────────────────── */
  {
    id: "tirumala-basic",
    name: "Tirumala Darshan Ride",
    category: "tirumala",
    tag: "Quick Darshan",
    tagClass: "",
    popular: false,
    price: 2799,
    duration: "Half Day",
    routeShort: "Tirupati → Tirumala → Tirupati",
    routeFull: ["Tirupati", "Tirumala", "Tirupati"],
    image: "images/p1.jpg",
    highlights: ["Pickup & Drop", "Tirumala Darshan", "5 / 7 Seater"],
    description: "A simple, focused darshan ride to Tirumala and back. Perfect for devotees who want a quick and efficient visit to Lord Venkateswara.",
    note: "Basic darshan ride. Upgrade to Darshan + Sightseeing for more value.",
    includes: ["Cab pickup from your location", "Tirumala darshan drop & pickup", "Return drop"],
    excludes: ["Entry tickets", "GST", "Accommodation"],
    templeFlow: [
      { name: "Tirupati", desc: "Start your journey from Tirupati city. Pickup at your hotel or any location.", icon: "🚗" },
      { name: "Tirumala Temple", desc: "Ascend the sacred hills to the divine Venkateswara temple for darshan.", icon: "🛕" },
      { name: "Return Drop", desc: "After darshan, comfortable return ride back to your Tirupati location.", icon: "🏠" }
    ]
  },
  {
    id: "tirumala-sightseeing",
    name: "Tirumala Darshan + Sightseeing",
    category: "tirumala",
    tag: "Most Popular ⭐",
    tagClass: "tag-popular",
    popular: true,
    price: 4299,
    duration: "Full Day",
    routeShort: "Tirupati → Tirumala → Sightseeing → Tirupati",
    routeFull: ["Tirupati", "Tirumala", "Japali Falls", "Tirupati"],
    image: "images/p2.jpg",
    highlights: ["Tirumala Darshan", "Local Sightseeing", "Japali Falls +₹500"],
    description: "Our most booked package — combines the divine Tirumala darshan with peaceful local sightseeing including Japali Theertham. The perfect full-day spiritual experience.",
    note: "Main package ⭐. Japali Theertham visit available at +₹500 extra.",
    includes: ["Cab pickup & drop", "Tirumala darshan", "Local sightseeing stops", "Experienced driver-guide"],
    excludes: ["Japali Falls (₹500 extra)", "Entry tickets", "GST"],
    templeFlow: [
      { name: "Tirupati Pickup", desc: "We pick you up from your location early morning for a full blessed day.", icon: "🚗" },
      { name: "Tirumala Temple", desc: "Darshan at the sacred Venkateswara temple atop the divine Tirumala hills.", icon: "🛕" },
      { name: "Japali Theertham", desc: "Optional sacred waterfall spot — deeply serene and spiritually refreshing.", icon: "💧" },
      { name: "Local Sightseeing", desc: "Tour of nearby sacred shrines, gardens and viewpoints around Tirupati.", icon: "🗺️" }
    ]
  },
  {
    id: "tirupati-temples-basic",
    name: "Tirupati Temple Tour",
    category: "tirupati",
    tag: "Entry Level",
    tagClass: "",
    popular: false,
    price: 2299,
    duration: "Half Day",
    routeShort: "4 Temples · Tirupati",
    routeFull: ["Kapila Theertham", "ISKCON", "Padmavathi Temple", "Govinda Raja"],
    image: "images/p3.jpg",
    highlights: ["4 Temple Visits", "Kapila Theertham", "Padmavathi Temple", "ISKCON & Govinda Raja"],
    description: "Visit four of Tirupati's most revered temples in a single comfortable trip. Great for first-time visitors who want to experience the spiritual richness of the town.",
    note: "Entry-level sightseeing package for Tirupati town temples.",
    includes: ["Cab pickup & drop", "4 temple visits", "Driver guide"],
    excludes: ["Entry tickets", "GST", "Prasadam"],
    templeFlow: [
      { name: "Kapila Theertham", desc: "The only Shiva temple in Tirupati — nestled at the foot of the Tirumala hills.", icon: "🛕" },
      { name: "ISKCON Temple", desc: "Beautifully designed Krishna temple with serene gardens and spiritual atmosphere.", icon: "🌸" },
      { name: "Padmavathi Temple", desc: "Goddess Padmavathi, consort of Lord Venkateswara — a must-visit sacred shrine.", icon: "🙏" },
      { name: "Govinda Raja Swamy", desc: "One of the oldest temples in Tirupati town with rich historical significance.", icon: "⛩️" }
    ]
  },
  {
    id: "tirupati-complete",
    name: "Complete Tirupati Darshan",
    category: "tirupati",
    tag: "Full Darshan",
    tagClass: "",
    popular: true,
    price: 3499,
    duration: "Full Day",
    routeShort: "All Tirupati Temples",
    routeFull: ["Tirupati", "All Major Temples", "Sightseeing", "Tirupati"],
    image: "images/p1.jpg",
    highlights: ["All Major Temples", "Full Day Tour", "Gudimalla +₹500"],
    description: "A comprehensive spiritual tour covering all major temples and sacred sites in and around Tirupati. Thorough, unhurried, and deeply fulfilling.",
    note: "Gudimalla temple visit available as ₹500 add-on.",
    includes: ["Full day cab", "All major temples", "Driver guide", "Flexible schedule"],
    excludes: ["Gudimalla (₹500 extra)", "Entry tickets", "GST"],
    templeFlow: [
      { name: "Kapila Theertham", desc: "Begin with the sacred Shiva temple at the foothills of Tirumala.", icon: "🛕" },
      { name: "Padmavathi Temple", desc: "Seek blessings of the divine goddess at Tiruchanur.", icon: "🌺" },
      { name: "All Major Shrines", desc: "Continue through Govinda Raja, ISKCON, and other important temples.", icon: "⛩️" },
      { name: "Gudimalla Temple", desc: "Optional ancient Shivalinga temple — one of the rarest in South India.", icon: "🙏" }
    ]
  },

  /* ── OUTSTATION DARSHAN ─────────────────────────────── */
  {
    id: "kalahasti",
    name: "Kalahasti Darshan",
    category: "outstation",
    tag: "Rahu-Ketu Pooja",
    tagClass: "",
    popular: false,
    price: 3299,
    duration: "Full Day",
    routeShort: "Tirupati → Kalahasti → Tirupati",
    routeFull: ["Tirupati", "Srikalahasti", "Tirupati"],
    image: "images/p2.jpg",
    highlights: ["Kalahasti Temple", "Rahu-Ketu Pooja", "Add Tirupati Sightseeing +₹1500"],
    description: "Visit the famous Sri Kalahasteeswara temple, known for Rahu-Ketu pooja. One of the Pancha Bhuta Stalas dedicated to Lord Shiva.",
    note: "Add Tirupati town sightseeing for ₹1500–₹2000 extra.",
    includes: ["Cab pickup & drop", "Kalahasti temple visit", "Driver guide"],
    excludes: ["Pooja charges", "Entry tickets", "GST"],
    templeFlow: [
      { name: "Tirupati Pickup", desc: "Early morning pickup from your Tirupati location.", icon: "🚗" },
      { name: "Sri Kalahasteeswara", desc: "The wind linga temple — one of the Pancha Bhuta Stalas. Famous for Rahu-Ketu pooja.", icon: "🛕" },
      { name: "Return to Tirupati", desc: "Comfortable return journey. Optional Tirupati sightseeing available +₹1500.", icon: "🏠" }
    ]
  },

  /* ── ONE-DAY ROUTES ─────────────────────────────────── */
  {
    id: "route-vakulamatha",
    name: "Vakulamatha – Mangapuram – Kanipakam",
    category: "one-day",
    tag: "Short Premium",
    tagClass: "",
    popular: false,
    price: 3899,
    duration: "Full Day",
    routeShort: "Tirupati → 3 Stops → Tirupati",
    routeFull: ["Tirupati", "Vakulamatha", "Mangapuram", "Kanipakam", "Tirupati"],
    image: "images/p3.jpg",
    highlights: ["Vakulamatha Temple", "Mangapuram Shrine", "Kanipakam Ganesha"],
    description: "A compact yet deeply spiritual route covering three important shrines in a single day. The Kanipakam Vinayaka temple is especially revered for wish fulfillment.",
    note: "Short premium route. Comfortable for families.",
    includes: ["Full day cab", "3 temple visits", "Driver guide"],
    excludes: ["Entry tickets", "GST"],
    templeFlow: [
      { name: "Vakulamatha", desc: "Revered shrine of Vakulamatha, the divine foster mother of Lord Venkateswara.", icon: "🛕" },
      { name: "Mangapuram", desc: "Peaceful Andal shrine — a calm and deeply devotional stop on the route.", icon: "🌸" },
      { name: "Kanipakam Ganesha", desc: "The famous self-manifested Vinayaka temple — visit for wish fulfillment and blessings.", icon: "🙏" }
    ]
  },
  {
    id: "route-mangapuram-golden",
    name: "Mangapuram + Golden Temple",
    category: "one-day",
    tag: "Medium Route",
    tagClass: "",
    popular: false,
    price: 5099,
    duration: "Full Day",
    routeShort: "Tirupati → Mangapuram → Golden Temple → Tirupati",
    routeFull: ["Tirupati", "Mangapuram", "Golden Temple", "Tirupati"],
    image: "images/p1.jpg",
    highlights: ["Mangapuram Shrine", "Golden Temple (Sripuram)", "Scenic Drive"],
    description: "Visit the magnificent Sripuram Golden Temple — one of the largest in India — along with the serene Mangapuram shrine. A visually stunning and spiritually rich experience.",
    note: "Medium route. Golden Temple visit is a highlight.",
    includes: ["Full day cab", "2 major sites", "Driver guide"],
    excludes: ["Entry tickets", "GST"],
    templeFlow: [
      { name: "Mangapuram Shrine", desc: "Begin with the serene Andal shrine — a calm, devotional start to your day.", icon: "🌺" },
      { name: "Sripuram Golden Temple", desc: "One of India's largest golden temples — a breathtaking spiritual masterpiece.", icon: "✨" },
      { name: "Return to Tirupati", desc: "Scenic drive back with memories of golden architecture and divine peace.", icon: "🚗" }
    ]
  },
  {
    id: "route-kanipakam-golden-arunachalam",
    name: "Kanipakam – Golden Temple – Arunachalam",
    category: "one-day",
    tag: "Long Route",
    tagClass: "tag-premium",
    popular: true,
    price: 8199,
    duration: "Full Day",
    routeShort: "Tirupati → Kanipakam → Golden Temple → Arunachalam → Tirupati",
    routeFull: ["Tirupati", "Kanipakam", "Sripuram Golden Temple", "Tiruvannamalai", "Tirupati"],
    image: "images/p2.jpg",
    highlights: ["Kanipakam Ganesha", "Golden Temple Sripuram", "Arunachaleswara Temple", "Full Day Premium"],
    description: "Our longest and most immersive one-day spiritual circuit. Three legendary shrines across two states — a journey that covers Ganesha, Goddess Lakshmi, and Lord Shiva in a single blessed day.",
    note: "Long premium route. Early start recommended.",
    includes: ["Full day premium cab", "3 temple visits", "Experienced driver-guide"],
    excludes: ["Entry tickets", "GST", "Meals"],
    templeFlow: [
      { name: "Kanipakam Vinayaka", desc: "The self-manifested Ganesha temple — seek his blessings before the grand journey.", icon: "🙏" },
      { name: "Sripuram Golden Temple", desc: "Majestic Lakshmi temple covered in real gold — a once-in-a-lifetime sight.", icon: "✨" },
      { name: "Arunachaleswara", desc: "The fire element Shiva temple at Tiruvannamalai — profoundly sacred and powerful.", icon: "🔥" }
    ]
  },
  {
    id: "route-kanchi-temples",
    name: "Kanchi Temples Tour",
    category: "one-day",
    tag: "Popular Temple Route",
    tagClass: "",
    popular: true,
    price: 5699,
    duration: "Full Day",
    routeShort: "Tirupati → Tiruthani → Kanchi (3 Temples) → Tirupati",
    routeFull: ["Tirupati", "Tiruthani", "Kanchipuram Temples (3)", "Tirupati"],
    image: "images/p3.jpg",
    highlights: ["Tiruthani Murugan", "Ekambareswarar", "Kamakshi Amman", "Varadharaja Perumal"],
    description: "Explore the ancient temple city of Kanchipuram — one of the seven sacred cities of India. Three iconic temples across the city, plus the Tiruthani Murugan shrine on the way.",
    note: "Popular temple route among pilgrims.",
    includes: ["Full day cab", "4 temple visits", "Driver guide"],
    excludes: ["Entry tickets", "GST"],
    templeFlow: [
      { name: "Tiruthani Murugan", desc: "Lord Murugan's hilltop shrine — a divine start to the sacred day ahead.", icon: "⛩️" },
      { name: "Ekambareswarar Temple", desc: "Ancient Shiva temple in Kanchipuram beneath a sacred mango tree.", icon: "🛕" },
      { name: "Kamakshi Amman", desc: "The powerful goddess temple — one of the three Shakti Peethas of South India.", icon: "🌸" },
      { name: "Varadharaja Perumal", desc: "Magnificent Vishnu temple — famous for its 100-pillar hall and ancient carvings.", icon: "🙏" }
    ]
  },
  {
    id: "route-tiruthani-appalayagunta",
    name: "Tiruthani – Appalayagunta – Padmavathi",
    category: "one-day",
    tag: "Medium Route",
    tagClass: "",
    popular: false,
    price: 4499,
    duration: "Full Day",
    routeShort: "Tirupati → Tiruthani → Appalayagunta → Padmavathi → Tirupati",
    routeFull: ["Tirupati", "Tiruthani", "Appalayagunta", "Padmavathi Temple", "Tirupati"],
    image: "images/p1.jpg",
    highlights: ["Tiruthani Murugan Temple", "Appalayagunta Shrine", "Padmavathi Temple"],
    description: "A balanced medium route combining three distinct spiritual stops. The Tiruthani Murugan temple, the peaceful Appalayagunta, and the beloved Padmavathi temple near Tirupati.",
    note: "Medium route. Well-balanced for a comfortable day.",
    includes: ["Full day cab", "3 temple visits", "Driver guide"],
    excludes: ["Entry tickets", "GST"],
    templeFlow: [
      { name: "Tiruthani Murugan", desc: "Hilltop Murugan temple — one of the six abodes of Lord Subramanya.", icon: "⛩️" },
      { name: "Appalayagunta", desc: "Peaceful and lesser-known shrine with deep spiritual significance.", icon: "🙏" },
      { name: "Padmavathi Temple", desc: "End the day at the beloved goddess temple at Tiruchanur near Tirupati.", icon: "🌺" }
    ]
  },
  {
    id: "route-temple-circle",
    name: "Local Temple Circuit",
    category: "one-day",
    tag: "Long Local Circuit",
    tagClass: "",
    popular: false,
    price: 5799,
    duration: "Full Day",
    routeShort: "6-Stop Local Circuit",
    routeFull: ["Tirupati", "Narayana Vanam", "Nagalapuram", "Surutupalli", "Karveti", "Bugga Ramalingeswara", "Tirupati"],
    image: "images/p2.jpg",
    highlights: ["Narayana Vanam", "Nagalapuram", "Surutupalli", "Bugga Ramalingeswara"],
    description: "An extensive local temple circuit covering six sacred sites in and around Tirupati. Ideal for devotees who want to explore the lesser-known but equally divine shrines of this region.",
    note: "Long local circuit. Early start strongly recommended.",
    includes: ["Full day cab", "6 stops", "Driver guide"],
    excludes: ["Entry tickets", "GST"],
    templeFlow: [
      { name: "Narayana Vanam", desc: "Sacred forest shrine — an ancient and deeply peaceful Vishnu temple.", icon: "🌿" },
      { name: "Nagalapuram & Surutupalli", desc: "Twin shrine visits covering Naga deities and local sacred traditions.", icon: "🛕" },
      { name: "Bugga Ramalingeswara", desc: "The grand finale — a magnificent Shiva temple on the Swarnamukhi riverbank.", icon: "🔱" }
    ]
  },
  {
    id: "route-ontimitta",
    name: "Ontimitta Darshan",
    category: "one-day",
    tag: "Standalone Route",
    tagClass: "",
    popular: false,
    price: 5099,
    duration: "Full Day",
    routeShort: "Tirupati → Ontimitta → Tirupati",
    routeFull: ["Tirupati", "Ontimitta", "Tirupati"],
    image: "images/p3.jpg",
    highlights: ["Ontimitta Kodandarama Temple", "Ancient Architecture", "Peaceful Village Temple"],
    description: "Visit the serene Kodandarama temple at Ontimitta — a beautifully preserved ancient temple with stunning architecture and a tranquil atmosphere away from the crowds.",
    note: "Standalone route. Great for devotees of Lord Rama.",
    includes: ["Full day cab", "Ontimitta temple visit", "Driver guide"],
    excludes: ["Entry tickets", "GST"],
    templeFlow: [
      { name: "Tirupati", desc: "Start your spiritual journey from Tirupati city.", icon: "🚗" },
      { name: "Ontimitta", desc: "The ancient Kodandarama temple — stunning 15th century architecture in serene village surroundings.", icon: "🛕" },
      { name: "Return", desc: "Peaceful return journey after an unhurried darshan experience.", icon: "🏠" }
    ]
  },
  {
    id: "route-tiruthani-kanchi-arunachalam",
    name: "Tiruthani – Kanchi – Arunachalam",
    category: "one-day",
    tag: "Long Premium ✨",
    tagClass: "tag-premium",
    popular: false,
    price: 8999,
    duration: "Full Day",
    routeShort: "Tirupati → Tiruthani → Kanchi → Arunachalam → Tirupati",
    routeFull: ["Tirupati", "Tiruthani", "Kanchipuram", "Tiruvannamalai", "Tirupati"],
    image: "images/p1.jpg",
    highlights: ["Tiruthani Murugan", "Kanchipuram Temples", "Arunachaleswara Temple", "Longest Route"],
    description: "The grandest one-day temple journey we offer. Three cities, multiple temples, and an extraordinary spiritual arc — from Murugan at Tiruthani to Lord Shiva at Arunachalam, through the temple city of Kanchipuram.",
    note: "Long premium route. Very early start required.",
    includes: ["Full day premium cab", "Multiple temples", "Experienced driver-guide"],
    excludes: ["Entry tickets", "GST", "Meals"],
    templeFlow: [
      { name: "Tiruthani Murugan", desc: "Lord Murugan blesses the beginning of this grand spiritual circuit.", icon: "⛩️" },
      { name: "Kanchipuram", desc: "The temple city — Ekambareswarar, Kamakshi, Varadharaja in one sacred stop.", icon: "🛕" },
      { name: "Arunachaleswara", desc: "Lord Shiva as fire — the sacred hill of Arunachala completes this divine journey.", icon: "🔥" }
    ]
  },

  /* ── MULTI-DAY ──────────────────────────────────────── */
  {
    id: "yatra-2day",
    name: "2-Day Premium Yatra",
    category: "multi-day",
    tag: "Best Value 🏆",
    tagClass: "tag-premium",
    popular: true,
    price: 11499,
    duration: "2 Days",
    routeShort: "7-Stop Grand Circuit",
    routeFull: ["Tirupati", "Kanipakam", "Golden Temple", "Arunachalam", "Kanchipuram", "Tiruthani", "Kalahasti", "Tirupati"],
    image: "images/p2.jpg",
    highlights: ["7 Sacred Sites", "2 Full Days", "Kanipakam to Kalahasti", "Stay Not Included"],
    description: "The ultimate spiritual journey — 7 of the most revered temples across Andhra Pradesh and Tamil Nadu spread over two full days. This is the trip devotees remember for life.",
    note: "Stay not included. We can assist with hotel bookings separately.",
    includes: ["2-day cab", "7 temple visits", "Experienced driver-guide", "Flexible itinerary"],
    excludes: ["Accommodation", "Entry tickets", "GST", "Meals"],
    templeFlow: [
      { name: "Day 1: Kanipakam → Golden Temple → Arunachalam", desc: "Begin with Ganesha at Kanipakam, marvel at Sripuram's golden architecture, end with Shiva at Tiruvannamalai.", icon: "✨" },
      { name: "Day 2: Kanchipuram → Tiruthani → Kalahasti", desc: "The temple city of Kanchi, Murugan's hilltop abode, and the sacred wind-linga at Kalahasti.", icon: "🛕" },
      { name: "Return to Tirupati", desc: "Complete your 7-shrine grand circuit with a lifetime of blessings.", icon: "🙏" }
    ]
  },

  /* ── LOCAL & TRANSFERS ──────────────────────────────── */
  {
    id: "local-pickup",
    name: "Local Pickup & Drop",
    category: "transfer",
    tag: "Airport / Railway",
    tagClass: "",
    popular: false,
    price: 1349,
    duration: "As needed",
    routeShort: "Tirupati → Nearby → Tirupati",
    routeFull: ["Airport / Railway", "Hotel / Temple", "Airport / Railway"],
    image: "images/p3.jpg",
    highlights: ["Airport Pickup", "Railway Station Drop", "On-Time Guaranteed", "24/7 Available"],
    description: "Reliable airport and railway station transfers within Tirupati. On-time pickup, comfortable vehicles, and zero hassle for your arrival or departure.",
    note: "Includes airport and railway transfers.",
    includes: ["Pickup from airport/railway", "Drop at hotel or temple", "On-time service"],
    excludes: ["Waiting charges after 30 min", "GST"],
    templeFlow: [
      { name: "Pickup Point", desc: "We arrive at Tirupati Airport or Railway Station exactly on time.", icon: "✈️" },
      { name: "Your Destination", desc: "Drop at your hotel, temple, or any location within Tirupati.", icon: "🏨" },
      { name: "24/7 Available", desc: "Any time of day or night — we're always ready for your transfer.", icon: "🌙" }
    ]
  },

  /* ── OUTSTATION ROUTES ──────────────────────────────── */
  {
    id: "tirupati-chennai",
    name: "Tirupati → Chennai",
    category: "outstation",
    tag: "One Way",
    tagClass: "",
    popular: false,
    price: 6999,
    duration: "One Way",
    routeShort: "Tirupati → Chennai",
    routeFull: ["Tirupati", "Chennai"],
    image: "images/p1.jpg",
    highlights: ["One-Way Drop", "City Centre Drop", "Airport Drop Available"],
    description: "Comfortable one-way cab service from Tirupati to Chennai. Whether you're heading to the city, airport, or railway station — we get you there smoothly.",
    note: "One-way trip. Return bookings available separately.",
    includes: ["One-way cab", "Toll charges", "Driver allowance"],
    excludes: ["Return trip", "GST"],
    templeFlow: [
      { name: "Tirupati Departure", desc: "Start from your hotel or any Tirupati location at your chosen time.", icon: "🚗" },
      { name: "Smooth Highway Drive", desc: "Comfortable journey on NH-716 with experienced, safe drivers.", icon: "🛣️" },
      { name: "Chennai Drop", desc: "Drop at city centre, airport, railway station, or any address in Chennai.", icon: "🏙️" }
    ]
  },
  {
    id: "tirupati-bangalore",
    name: "Tirupati → Bangalore",
    category: "outstation",
    tag: "One Way",
    tagClass: "",
    popular: false,
    price: 6999,
    duration: "One Way",
    routeShort: "Tirupati → Bangalore",
    routeFull: ["Tirupati", "Bangalore"],
    image: "images/p2.jpg",
    highlights: ["One-Way Drop", "City Centre / Airport", "Comfortable Ride"],
    description: "Smooth one-way cab service from Tirupati to Bangalore. Perfect after your pilgrimage — sit back, relax, and we'll take care of the drive.",
    note: "One-way trip. Return bookings available separately.",
    includes: ["One-way cab", "Toll charges", "Driver allowance"],
    excludes: ["Return trip", "GST"],
    templeFlow: [
      { name: "Tirupati Departure", desc: "Comfortable pickup from your location after your pilgrimage.", icon: "🚗" },
      { name: "Scenic NH Drive", desc: "Relaxed highway journey through Andhra Pradesh and Karnataka.", icon: "🛣️" },
      { name: "Bangalore Drop", desc: "Drop at Kempegowda Airport, railway station, or any city address.", icon: "🏙️" }
    ]
  },
  {
    id: "tirupati-srisailam",
    name: "Tirupati → Srisailam",
    category: "outstation",
    tag: "Long Distance",
    tagClass: "tag-premium",
    popular: false,
    price: 17500,
    duration: "Full Day",
    routeShort: "Tirupati → Srisailam → Tirupati",
    routeFull: ["Tirupati", "Srisailam", "Tirupati"],
    image: "images/p3.jpg",
    highlights: ["Mallikarjuna Jyotirlinga", "Srisailam Dam", "Long Distance Comfort"],
    description: "Visit the magnificent Mallikarjuna Jyotirlinga at Srisailam — one of the 12 sacred Jyotirlingas of India. A long but profoundly rewarding journey.",
    note: "Long distance trip. Requires full-day commitment.",
    includes: ["Full day cab (return)", "Srisailam temple visit", "Driver allowance"],
    excludes: ["Entry tickets", "GST", "Meals"],
    templeFlow: [
      { name: "Tirupati", desc: "Early morning departure for this grand long-distance pilgrimage.", icon: "🚗" },
      { name: "Srisailam Jyotirlinga", desc: "Mallikarjuna — one of the 12 sacred Jyotirlingas atop the Nallamala hills.", icon: "🔱" },
      { name: "Srisailam Dam", desc: "The mighty Krishna river dam — a stunning scenic viewpoint on your visit.", icon: "💧" }
    ]
  },
  {
    id: "tirupati-mahabalipuram",
    name: "Tirupati → Mahabalipuram",
    category: "outstation",
    tag: "Coastal Trip",
    tagClass: "",
    popular: false,
    price: 8499,
    duration: "Full Day",
    routeShort: "Tirupati → Mahabalipuram → Tirupati",
    routeFull: ["Tirupati", "Mahabalipuram", "Tirupati"],
    image: "images/p1.jpg",
    highlights: ["Shore Temple", "Rock-Cut Caves", "Bay of Bengal", "UNESCO Heritage"],
    description: "A beautiful cultural and coastal excursion to Mahabalipuram's UNESCO World Heritage Site. Stunning rock-cut temples, the famous Shore Temple, and the serene Bay of Bengal.",
    note: "Outstation trip. Great for combining culture and coastal scenery.",
    includes: ["Full day cab (return)", "Mahabalipuram sightseeing", "Driver guide"],
    excludes: ["Entry tickets", "GST", "Meals"],
    templeFlow: [
      { name: "Tirupati", desc: "Morning departure for a beautiful coastal and cultural excursion.", icon: "🚗" },
      { name: "Shore Temple", desc: "The iconic UNESCO heritage Shore Temple standing at the Bay of Bengal.", icon: "🛕" },
      { name: "Rock-Cut Caves & Rathas", desc: "Pallava dynasty masterpieces carved from single boulders — a living museum.", icon: "🪨" }
    ]
  }
];