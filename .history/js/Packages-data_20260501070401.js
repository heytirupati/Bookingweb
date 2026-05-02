/* ============================================================
   PACKAGES DATA — Sri Balaji Travels
   Prices updated April 2026
   Each package now has cardImage (for index.html cards) 
   and detailImage (for package.html detail page)
   ============================================================ */

const PACKAGES = [

  /* ── TIRUMALA / DARSHAN ─────────────────────────────── */
  {
    id: "tirupati-drop",
    name: "Tirupati ↔ Tirumala Drop",
    category: "tirumala",
    tag: "One Way Drop",
    tagClass: "",
    popular: false,
    price: 999,
    duration: "1–2 hrs",
    routeShort: "Tirupati → Tirumala (Drop only)",
    routeFull: ["Tirupati", "Tirumala"],
    cardImage: "images/card-tirumala-drop.jpg",      // Index page card thumbnail
    detailImage: "images/detail-tirumala-drop.jpg",  // Package detail page big image
    highlights: ["One-Way Drop", "Either Direction", "On-Time Service"],
    description: "Simple one-way cab drop from Tirupati to Tirumala, or Tirumala back to Tirupati. Perfect for pilgrims who only need a single-direction ride.",
    note: "Drop only. Return journey booked separately.",
    includes: ["One-way cab drop", "On-time pickup"],
    excludes: ["Return trip", "Entry tickets", "GST"],
    templeFlow: [
      { name: "Tirupati Pickup", desc: "We pick you up from your hotel or any Tirupati location.", icon: "🚗" },
      { name: "Tirumala Drop", desc: "Comfortable drop at the Tirumala temple complex entrance.", icon: "🛕" }
    ]
  },
  {
    id: "tirumala-basic",
    name: "Tirumala Darshan Ride",
    category: "tirumala",
    tag: "Quick Darshan",
    tagClass: "",
    popular: false,
    price: 2500,
    duration: "Half Day",
    routeShort: "Tirupati → Tirumala → Tirupati",
    routeFull: ["Tirupati", "Tirumala", "Tirupati"],
    cardImage: "images/card-tirumala-basic.jpg",
    detailImage: "images/detail-tirumala-basic.jpg",
    highlights: ["Pickup & Drop", "Tirumala Darshan", "5 / 7 Seater"],
    description: "A simple, focused darshan ride to Tirumala and back. Perfect for devotees who want a quick and efficient visit to Lord Venkateswara.",
    note: "Basic darshan ride. Upgrade to Darshan + Sightseeing for more value.",
    includes: ["Cab pickup from your location", "Tirumala darshan drop & pickup", "Return drop"],
    excludes: ["Entry tickets", "GST", "Accommodation"],
    templeFlow: [
      { name: "Tirupati", desc: "Start your journey from Tirupati city.", icon: "🚗" },
      { name: "Tirumala Temple", desc: "Ascend the sacred hills to the divine Venkateswara temple for darshan.", icon: "🛕" },
      { name: "Return Drop", desc: "Comfortable return ride back to your Tirupati location.", icon: "🏠" }
    ]
  },
  {
    id: "tirumala-sightseeing",
    name: "Tirumala Darshan + Sightseeing",
    category: "tirumala",
    tag: "Most Popular ⭐",
    tagClass: "tag-popular",
    popular: true,
    price: 3799,
    duration: "Full Day",
    routeShort: "Tirupati → Tirumala → Sightseeing → Tirupati",
    routeFull: ["Tirupati", "Tirumala", "Japali Falls", "Tirupati"],
    cardImage: "images/card-tirumala-sightseeing.jpg",
    detailImage: "images/detail-tirumala-sightseeing.jpg",
    highlights: ["Tirumala Darshan", "Local Sightseeing", "Japali Falls Optional"],
    description: "Our most booked package — combines the divine Tirumala darshan with peaceful local sightseeing including Japali Theertham. The perfect full-day spiritual experience.",
    note: "Japali Theertham visit available at extra charge.",
    includes: ["Cab pickup & drop", "Tirumala darshan", "Local sightseeing", "Experienced driver"],
    excludes: ["Japali Falls (extra)", "Entry tickets", "GST"],
    templeFlow: [
      { name: "Tirupati Pickup", desc: "Early morning pickup for a full blessed day.", icon: "🚗" },
      { name: "Tirumala Temple", desc: "Darshan at the sacred Venkateswara temple atop Tirumala hills.", icon: "🛕" },
      { name: "Japali Theertham", desc: "Optional sacred waterfall — deeply serene and spiritually refreshing.", icon: "💧" },
      { name: "Local Sightseeing", desc: "Tour of nearby sacred shrines and viewpoints around Tirupati.", icon: "🗺️" }
    ]
  },

  /* ── TIRUPATI TEMPLES ───────────────────────────────── */
  {
    id: "tirupati-temples-basic",
    name: "Tirupati Temple Tour",
    category: "tirupati",
    tag: "Entry Level",
    tagClass: "",
    popular: false,
    price: 2199,
    duration: "Half Day",
    routeShort: "4 Temples · Tirupati City",
    routeFull: ["Kapila Theertham", "ISKCON", "Padmavathi Temple", "Govinda Raja"],
    cardImage: "images/card-tirupati-basic.jpg",
    detailImage: "images/detail-tirupati-basic.jpg",
    highlights: ["4 Temple Visits", "Kapila Theertham", "Padmavathi Temple", "ISKCON & Govinda Raja"],
    description: "Visit four of Tirupati's most revered temples in a single comfortable trip. Great for first-time visitors wanting to experience the spiritual richness of the town.",
    note: "Entry-level sightseeing package for Tirupati town temples.",
    includes: ["Cab pickup & drop", "4 temple visits", "Driver guide"],
    excludes: ["Entry tickets", "GST", "Prasadam"],
    templeFlow: [
      { name: "Kapila Theertham", desc: "The only Shiva temple in Tirupati — nestled at the foot of the Tirumala hills.", icon: "🛕" },
      { name: "ISKCON Temple", desc: "Beautifully designed Krishna temple with serene gardens.", icon: "🌸" },
      { name: "Padmavathi Temple", desc: "Goddess Padmavathi, consort of Lord Venkateswara — a must-visit shrine.", icon: "🙏" },
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
    price: 2699,
    duration: "Full Day",
    routeShort: "All Major Tirupati Temples",
    routeFull: ["Kapila Theertham", "ISKCON", "Padmavathi", "Govinda Raja", "Mangapuram", "Vakulamatha", "Ramulavari Temple"],
    cardImage: "images/card-tirupati-complete.jpg",
    detailImage: "images/detail-tirupati-complete.jpg",
    highlights: ["7 Temple Visits", "Mangapuram & Vakulamatha", "Full Day Tour"],
    description: "A comprehensive spiritual tour covering all major temples in Tirupati — Kapila Theertham, ISKCON, Padmavathi, Govinda Raja, Mangapuram, Vakulamatha and Ramulavari Temple.",
    note: "Most complete Tirupati city temple experience.",
    includes: ["Full day cab", "7 major temples", "Driver guide", "Flexible schedule"],
    excludes: ["Entry tickets", "GST"],
    templeFlow: [
      { name: "Kapila Theertham & ISKCON", desc: "Begin with the sacred Shiva temple and the divine Krishna temple.", icon: "🛕" },
      { name: "Padmavathi & Govinda Raja", desc: "Goddess Padmavathi at Tiruchanur and ancient Govinda Raja.", icon: "🌺" },
      { name: "Mangapuram & Vakulamatha", desc: "Andal shrine and the foster mother of Lord Venkateswara.", icon: "🙏" },
      { name: "Ramulavari Temple", desc: "Complete the sacred circuit at the revered Lord Rama temple.", icon: "⛩️" }
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
    price: 2499,
    duration: "Full Day",
    routeShort: "Tirupati → Kalahasti → Tirupati",
    routeFull: ["Tirupati", "Srikalahasti", "Tirupati"],
    cardImage: "images/card-kalahasti.jpg",
    detailImage: "images/detail-kalahasti.jpg",
    highlights: ["Kalahasti Temple", "Rahu-Ketu Pooja", "Pancha Bhuta Stala"],
    description: "Visit the famous Sri Kalahasteeswara temple, known for Rahu-Ketu pooja. One of the Pancha Bhuta Stalas dedicated to Lord Shiva.",
    note: "Add Tirupati sightseeing for extra charge.",
    includes: ["Cab pickup & drop", "Kalahasti temple visit", "Driver guide"],
    excludes: ["Pooja charges", "Entry tickets", "GST"],
    templeFlow: [
      { name: "Tirupati Pickup", desc: "Early morning pickup from your Tirupati location.", icon: "🚗" },
      { name: "Sri Kalahasteeswara", desc: "The wind linga — one of the Pancha Bhuta Stalas. Famous for Rahu-Ketu pooja.", icon: "🛕" },
      { name: "Return to Tirupati", desc: "Comfortable return journey.", icon: "🏠" }
    ]
  },

  /* ── ONE-DAY ROUTES ─────────────────────────────────── */
  {
    id: "kanipakam",
    name: "Kanipakam Vinayaka",
    category: "one-day",
    tag: "Ganesha Temple",
    tagClass: "",
    popular: true,
    price: 2799,
    duration: "Full Day",
    routeShort: "Tirupati → Kanipakam → Tirupati",
    routeFull: ["Tirupati", "Kanipakam", "Tirupati"],
    cardImage: "images/card-kanipakam.jpg",
    detailImage: "images/detail-kanipakam.jpg",
    highlights: ["Self-Manifested Ganesha", "Growing Idol", "Obstacle Removal"],
    description: "Visit the miraculous self-manifested Ganesha temple where the idol grows in size every year. Devotees seek blessings for obstacle removal and success in ventures.",
    note: "Underground water spring adds to the mystical experience.",
    includes: ["Full day cab", "Kanipakam temple visit", "Driver guide"],
    excludes: ["Entry tickets", "GST", "Special darshan"],
    templeFlow: [
      { name: "Tirupati Departure", desc: "Early morning start for this obstacle-removing journey.", icon: "🚗" },
      { name: "Kanipakam Vinayaka", desc: "Witness the growing Ganesha idol submerged in sacred water.", icon: "🐘" },
      { name: "Return to Tirupati", desc: "Blessed journey back with Ganesha's grace.", icon: "🏠" }
    ]
  },
  {
    id: "golden-temple",
    name: "Golden Temple Vellore",
    category: "one-day",
    tag: "Architectural Marvel",
    tagClass: "tag-premium",
    popular: true,
    price: 4499,
    duration: "Full Day",
    routeShort: "Tirupati → Vellore Golden Temple → Tirupati",
    routeFull: ["Tirupati", "Sripuram Golden Temple", "Tirupati"],
    cardImage: "images/card-golden-temple.jpg",
    detailImage: "images/detail-golden-temple.jpg",
    highlights: ["Gold-Plated Temple", "Goddess Mahalakshmi", "100-Acre Complex"],
    description: "Marvel at the stunning Sripuram Golden Temple dedicated to Goddess Mahalakshmi. The entire temple is covered in gold foil, creating a divine and prosperous atmosphere.",
    note: "Photography restricted inside temple premises.",
    includes: ["Full day cab", "Golden Temple visit", "Driver guide", "Toll charges"],
    excludes: ["Entry tickets", "GST", "Food"],
    templeFlow: [
      { name: "Tirupati Departure", desc: "Journey towards the golden magnificence of Vellore.", icon: "🚗" },
      { name: "Sripuram Golden Temple", desc: "Walk the star-shaped path to the gold-covered sanctum of Mahalakshmi.", icon: "✨" },
      { name: "Return to Tirupati", desc: "Return blessed with prosperity and divine grace.", icon: "🏠" }
    ]
  },
  {
    id: "arunachalam",
    name: "Arunachalam Darshan",
    category: "one-day",
    tag: "Fire Linga",
    tagClass: "",
    popular: false,
    price: 5499,
    duration: "Full Day",
    routeShort: "Tirupati → Tiruvannamalai → Tirupati",
    routeFull: ["Tirupati", "Arunachaleswara Temple", "Tirupati"],
    cardImage: "images/card-arunachalam.jpg",
    detailImage: "images/detail-arunachalam.jpg",
    highlights: ["Pancha Bhuta Stala", "Fire Element", "Sacred Annamalai Hill"],
    description: "Visit the magnificent Arunachaleswara temple representing the fire element. The sacred Annamalai hill itself is considered a manifestation of Lord Shiva.",
    note: "Long distance trip. Early start recommended.",
    includes: ["Full day cab", "Arunachaleswara temple visit", "Driver guide"],
    excludes: ["Entry tickets", "GST", "Meals"],
    templeFlow: [
      { name: "Tirupati Departure", desc: "Early morning departure for this sacred fire temple.", icon: "🚗" },
      { name: "Arunachaleswara Temple", desc: "Experience the divine fire linga and circumambulate the sacred hill.", icon: "🔥" },
      { name: "Return to Tirupati", desc: "Spiritually enriched journey back.", icon: "🏠" }
    ]
  },
  {
    id: "kanchipuram",
    name: "Kanchipuram Temple Tour",
    category: "one-day",
    tag: "Temple City",
    tagClass: "",
    popular: false,
    price: 5999,
    duration: "Full Day",
    routeShort: "Tirupati → Kanchipuram (5 Temples) → Tirupati",
    routeFull: ["Tirupati", "Ekambareswarar", "Kamakshi Amman", "Varadharaja Perumal", "Kailasanathar", "Tirupati"],
    cardImage: "images/card-kanchipuram.jpg",
    detailImage: "images/detail-kanchipuram.jpg",
    highlights: ["5 Major Temples", "Ancient Architecture", "Silk City"],
    description: "Explore the ancient temple city of Kanchipuram covering five major temples. Experience rich Dravidian architecture and spiritual energy across this sacred town.",
    note: "Silk saree shopping optional at extra time.",
    includes: ["Full day cab", "5 temple visits", "Driver guide", "Toll charges"],
    excludes: ["Entry tickets", "GST", "Meals"],
    templeFlow: [
      { name: "Tirupati Departure", desc: "Journey to the city of thousand temples.", icon: "🚗" },
      { name: "Ekambareswarar & Kamakshi", desc: "Visit the earth linga and the divine Kamakshi Amman.", icon: "🛕" },
      { name: "Varadharaja & Kailasanathar", desc: "Complete your Kanchipuram temple circuit.", icon: "⛩️" }
    ]
  },
  {
    id: "tiruthani-kanchipuram-arunachalam",
    name: "Tiruthani → Kanchi → Arunachalam",
    category: "one-day",
    tag: "Grand Circuit",
    tagClass: "tag-premium",
    popular: false,
    price: 8999,
    duration: "Full Day",
    routeShort: "3 Sacred Cities · 1 Day",
    routeFull: ["Tirupati", "Tiruthani", "Kanchipuram", "Tiruvannamalai", "Tirupati"],
    cardImage: "images/card-grand-circuit.jpg",
    detailImage: "images/detail-grand-circuit.jpg",
    highlights: ["Murugan at Tiruthani", "Kanchipuram Temples", "Arunachaleswara"],
    description: "An ambitious full-day grand circuit covering three major pilgrimage destinations. Experience the divine blessings of Murugan, Kamakshi, and the fire linga in one epic journey.",
    note: "Very early start required.",
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
    cardImage: "images/card-2day-yatra.jpg",
    detailImage: "images/detail-2day-yatra.jpg",
    highlights: ["7 Sacred Sites", "2 Full Days", "Kanipakam to Kalahasti"],
    description: "The ultimate spiritual journey — 7 of the most revered temples across Andhra Pradesh and Tamil Nadu spread over two full days. This is the trip devotees remember for life.",
    note: "Stay not included. We can assist with hotel bookings separately.",
    includes: ["2-day cab", "7 temple visits", "Experienced driver-guide", "Flexible itinerary"],
    excludes: ["Accommodation", "Entry tickets", "GST", "Meals"],
    templeFlow: [
      { name: "Day 1: Kanipakam → Golden Temple → Arunachalam", desc: "Ganesha at Kanipakam, golden architecture at Sripuram, Shiva at Tiruvannamalai.", icon: "✨" },
      { name: "Day 2: Kanchipuram → Tiruthani → Kalahasti", desc: "The temple city of Kanchi, Murugan's hilltop abode, and the wind-linga at Kalahasti.", icon: "🛕" },
      { name: "Return to Tirupati", desc: "Complete your 7-shrine grand circuit with a lifetime of blessings.", icon: "🙏" }
    ]
  },

  /* ── TRANSFERS ──────────────────────────────────────── */
  {
    id: "local-pickup",
    name: "Local Pickup & Drop",
    category: "transfer",
    tag: "Airport / Railway",
    tagClass: "",
    popular: true,
    price: 999,
    duration: "As needed",
    routeShort: "Airport / Railway ↔ Hotel / Temple",
    routeFull: ["Airport / Railway", "Hotel / Temple"],
    cardImage: "images/card-transfer.jpg",
    detailImage: "images/detail-transfer.jpg",
    highlights: ["Airport Pickup", "Railway Station Drop", "On-Time", "24/7 Available"],
    description: "Reliable airport and railway station transfers within Tirupati. On-time pickup, comfortable vehicles, and zero hassle for your arrival or departure.",
    note: "Includes airport and railway transfers.",
    includes: ["Pickup from airport/railway", "Drop at hotel or temple", "On-time service"],
    excludes: ["Waiting charges after 30 min", "GST"],
    templeFlow: [
      { name: "Pickup Point", desc: "We arrive at Tirupati Airport or Railway Station exactly on time.", icon: "✈️" },
      { name: "Your Destination", desc: "Drop at your hotel, temple, or any location within Tirupati.", icon: "🏨" }
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
    price: 5499,
    duration: "One Way",
    routeShort: "Tirupati → Chennai",
    routeFull: ["Tirupati", "Chennai"],
    cardImage: "images/card-chennai.jpg",
    detailImage: "images/detail-chennai.jpg",
    highlights: ["One-Way Drop", "City / Airport / Railway", "Comfortable Ride"],
    description: "Comfortable one-way cab service from Tirupati to Chennai. Whether heading to the city, airport, or railway station — we get you there smoothly.",
    note: "One-way trip. Return bookings available separately.",
    includes: ["One-way cab", "Toll charges", "Driver allowance"],
    excludes: ["Return trip", "GST"],
    templeFlow: [
      { name: "Tirupati Departure", desc: "Start from your hotel or any Tirupati location at your chosen time.", icon: "🚗" },
      { name: "Smooth Highway Drive", desc: "Comfortable journey with experienced, safe drivers.", icon: "🛣️" },
      { name: "Chennai Drop", desc: "Drop at city centre, airport, railway station, or any Chennai address.", icon: "🏙️" }
    ]
  },
  {
    id: "tirupati-bangalore",
    name: "Tirupati → Bangalore",
    category: "outstation",
    tag: "One Way",
    tagClass: "",
    popular: false,
    price: 9499,
    duration: "One Way",
    routeShort: "Tirupati → Bangalore",
    routeFull: ["Tirupati", "Bangalore"],
    cardImage: "images/card-bangalore.jpg",
    detailImage: "images/detail-bangalore.jpg",
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
    price: 14999,
    duration: "Full Day",
    routeShort: "Tirupati → Srisailam → Tirupati",
    routeFull: ["Tirupati", "Srisailam", "Tirupati"],
    cardImage: "images/card-srisailam.jpg",
    detailImage: "images/detail-srisailam.jpg",
    highlights: ["Mallikarjuna Jyotirlinga", "Srisailam Dam", "Long Distance Comfort"],
    description: "Visit the magnificent Mallikarjuna Jyotirlinga at Srisailam — one of the 12 sacred Jyotirlingas of India. A long but profoundly rewarding journey.",
    note: "Long distance trip. Requires full-day commitment.",
    includes: ["Full day cab (return)", "Srisailam temple visit", "Driver allowance"],
    excludes: ["Entry tickets", "GST", "Meals"],
    templeFlow: [
      { name: "Tirupati", desc: "Early morning departure for this grand long-distance pilgrimage.", icon: "🚗" },
      { name: "Srisailam Jyotirlinga", desc: "Mallikarjuna — one of the 12 sacred Jyotirlingas atop the Nallamala hills.", icon: "🔱" },
      { name: "Srisailam Dam", desc: "The mighty Krishna river dam — a stunning scenic viewpoint.", icon: "💧" }
    ]
  },
  {
    id: "tirupati-pondicherry",
    name: "Tirupati → Pondicherry",
    category: "outstation",
    tag: "2-Day Trip",
    tagClass: "",
    popular: false,
    price: 13499,
    duration: "2 Days",
    routeShort: "Tirupati → Pondicherry (2 Days) → Tirupati",
    routeFull: ["Tirupati", "Pondicherry", "Tirupati"],
    cardImage: "images/card-pondicherry.jpg",
    detailImage: "images/detail-pondicherry.jpg",
    highlights: ["Pondicherry Beaches", "Auroville", "French Quarter", "2 Day Trip"],
    description: "A beautiful 2-day trip from Tirupati to Pondicherry — enjoy the serene French colony, Auroville's spirituality, and the calm Bay of Bengal beaches.",
    note: "2-day trip. Stay not included.",
    includes: ["2-day cab (return)", "Driver allowance", "Toll charges"],
    excludes: ["Accommodation", "Meals", "GST"],
    templeFlow: [
      { name: "Tirupati Departure", desc: "Morning departure for this beautiful coastal and spiritual getaway.", icon: "🚗" },
      { name: "Pondicherry", desc: "French Quarter, beaches, Auroville — a spiritual and scenic retreat.", icon: "🌊" },
      { name: "Return to Tirupati", desc: "Comfortable return journey on day 2.", icon: "🏠" }
    ]
  }
];