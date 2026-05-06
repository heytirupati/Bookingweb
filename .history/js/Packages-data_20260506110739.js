/* ============================================================
   PACKAGES DATA — Sri Balaji Travels
   Prices updated April 2026
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
    cardImage: "images/card-tirupati-drop.webp",
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
    cardImage: "images/card-tirumala-basic.webp",
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
    cardImage: "images/card-tirumala-sightseeing.webp",
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
    cardImage: "images/card-tirupati-temples-basic.webp",
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
    cardImage: "images/card-tirupati-complete.webp",
    highlights: ["Kapila Theertham Padmavathi Temple", "ISKCON & Govinda Raja", "Mangapuram & Vakulamatha", "Full Day Tour"],
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
    cardImage: "images/card-kalahasti.webp",
    highlights: ["Kalahasti Temple","Gudimallam Add on ","Half Day"],
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
    id: "route-vakulamatha",
    name: "Vakulamatha – Mangapuram – Kanipakam",
    category: "one-day",
    tag: "Short Route",
    tagClass: "",
    popular: false,
    price: 3499,
    duration: "Full Day",
    routeShort: "Tirupati → 3 Stops → Tirupati",
    routeFull: ["Tirupati", "Vakulamatha", "Mangapuram", "Kanipakam", "Tirupati"],
    cardImage: "images/card-route-vakulamatha.webp",
    highlights: ["Vakulamatha Temple", " Srinivasa Mangapuram", "Kanipakam"],
    description: "A compact yet deeply spiritual route covering three important shrines in a single day. The Kanipakam Vinayaka temple is especially revered for wish fulfillment.",
    note: "Comfortable for families.",
    includes: ["Full day cab", "3 temple visits", "Driver guide"],
    excludes: ["Entry tickets", "GST"],
    templeFlow: [
      { name: "Vakulamatha", desc: "Revered shrine of the divine foster mother of Lord Venkateswara.", icon: "🛕" },
      { name: "Mangapuram", desc: "Peaceful Andal shrine — a calm and deeply devotional stop.", icon: "🌸" },
      { name: "Kanipakam Ganesha", desc: "The famous self-manifested Vinayaka temple — visit for wish fulfillment.", icon: "🙏" }
    ]
  },
  {
    id: "route-mangapuram-golden",
    name: "Mangapuram + Golden Temple",
    category: "one-day",
    tag: "Medium Route",
    tagClass: "",
    popular: false,
    price: 4999,
    duration: "Full Day",
    routeShort: "Tirupati → Mangapuram → Kanipakam → Golden Temple → Tirupati",
    routeFull: ["Tirupati", "Srinivasa Mangapuram", "Kanipakam", "Golden Temple", "Tirupati"],
    cardImage: "images/card-route-mangapuram-golden.webp",
    highlights: ["Srinivasa Mangapuram", "Kanipakam ", "Golden Temple (Vellore)"],
    description: "Visit the magnificent Sripuram Golden Temple along with Srinivasa Mangapuram and Kanipakam. A visually stunning and spiritually rich experience.",
    note: "Golden Temple visit is a highlight.",
    includes: ["Full day cab", "3 major sites", "Driver guide"],
    excludes: ["Entry tickets", "GST"],
    templeFlow: [
      { name: "Srinivasa Mangapuram", desc: "Begin with the serene Andal shrine at Mangapuram.", icon: "🌺" },
      { name: "Kanipakam Ganesha", desc: "The self-manifested Vinayaka — seek blessings before continuing.", icon: "🙏" },
      { name: "Sripuram Golden Temple", desc: "One of India's largest golden temples — a breathtaking spiritual masterpiece.", icon: "✨" }
    ]
  },
  {
    id: "route-kanipakam-golden-arunachalam",
    name: "Kanipakam – Golden Temple – Arunachalam",
    category: "one-day",
    tag: "Long Route ",
    tagClass: "tag-premium",
    popular: true,
    price: 6999,
    duration: "Full Day",
    routeShort: "Tirupati → Kanipakam → Golden Temple → Arunachalam → Tirupati",
    routeFull: ["Tirupati", "Kanipakam", "Sripuram Golden Temple", "Tiruvannamalai", "Tirupati"],
    cardImage: "images/images/Gemini_Generated_Image_gh0ghgh0ghgh0ghg1.jpg",
    highlights: ["Kanipakam", "Golden Temple (Vellore)", "Arunachaleswara"],
    description: "Our most immersive one-day spiritual circuit — three legendary shrines covering Ganesha, Goddess Lakshmi, and Lord Shiva in a single blessed day.",
    note: "Long route. Early start recommended.",
    includes: ["Full day premium cab", "3 temple visits", "Experienced driver-guide"],
    excludes: ["Entry tickets", "GST", "Meals"],
    templeFlow: [
      { name: "Kanipakam Vinayaka", desc: "The self-manifested Ganesha temple — seek his blessings first.", icon: "🙏" },
      { name: "Sripuram Golden Temple", desc: "Majestic Lakshmi temple covered in real gold — a once-in-a-lifetime sight.", icon: "✨" },
      { name: "Arunachaleswara", desc: "The fire element Shiva temple at Tiruvannamalai — profoundly sacred.", icon: "🔥" }
    ]
  },
  {
    id: "route-kanchi-temples",
    name: "Kanchi Temples Tour",
    category: "one-day",
    tag: "Popular Route",
    tagClass: "",
    popular: true,
    price: 5499,
    duration: "Full Day",
    routeShort: "Tirupati → Tiruthani → Kanchi (3 Temples) → Tirupati",
    routeFull: ["Tirupati", "Tiruthani", "Kanchipuram (3 Temples)", "Tirupati"],
    cardImage: "images/card-route-kanchi-temples.webp",
    highlights: ["Tiruthani Murugan", "Siva Kanchi", "Kamakshi Amman", "Vishnu Kanchi"],
    description: "Explore the ancient temple city of Kanchipuram — one of the seven sacred cities of India. Three iconic temples plus the Tiruthani Murugan shrine on the way.",
    note: "Popular route among pilgrims.",
    includes: ["Full day cab", "4 temple visits", "Driver guide"],
    excludes: ["Entry tickets", "GST"],
    templeFlow: [
      { name: "Tiruthani Murugan", desc: "Lord Murugan's hilltop shrine — a divine start to the sacred day.", icon: "" },
      { name: "Ekambareswarar & Kamakshi", desc: "Ancient Shiva temple and the powerful Shakti Peetha goddess temple.", icon: "" },
      { name: "Varadharaja Perumal", desc: "Magnificent Vishnu temple famous for its 100-pillar hall.", icon: "" }
    ]
  },
  {
    id: "route-tiruthani-appalayagunta",
    name: "Tiruthani – Appalayagunta – Padmavathi",
    category: "one-day",
    tag: "Medium Route",
    tagClass: "",
    popular: false,
    price: 3999,
    duration: "Full Day",
    routeShort: "Tirupati → Tiruthani → Appalayagunta → Padmavathi → Tirupati",
    routeFull: ["Tirupati", "Tiruthani", "Appalayagunta", "Padmavathi Temple", "Tirupati"],
    cardImage: "images/card-route-tiruthani-appalayagunta.webp",
    highlights: ["Tiruthani Murugan", "Appalayagunta Shrine", "Padmavathi Temple"],
    description: "A balanced medium route combining three distinct spiritual stops — Tiruthani Murugan, the peaceful Appalayagunta, and the beloved Padmavathi temple.",
    note: "Well-balanced for a comfortable day.",
    includes: ["Full day cab", "3 temple visits", "Driver guide"],
    excludes: ["Entry tickets", "GST"],
    templeFlow: [
      { name: "Tiruthani Murugan", desc: "Hilltop Murugan temple — one of the six abodes of Lord Subramanya.", icon: "⛩️" },
      { name: "Appalayagunta", desc: "Peaceful shrine with deep spiritual significance.", icon: "🙏" },
      { name: "Padmavathi Temple", desc: "End at the beloved goddess temple at Tiruchanur.", icon: "🌺" }
    ]
  },
  {
    id: "route-temple-circle",
    name: "Local Temple Circuit",
    category: "one-day",
    tag: "Long Circuit",
    tagClass: "",
    popular: false,
    price: 4699,
    duration: "Full Day",
    routeShort: "6-Stop Local Circuit",
    routeFull: ["Tirupati", "Narayana Vanam", "Nagalapuram", "Surutupalli", "Karveti", "Bugga", "Tirupati"],
    cardImage: "images/card-route-temple-circle.webp",
    highlights: ["Narayana Vanam", "Nagalapuram", "Surutupalli", "Bugga Ramalingeswara"],
    description: "An extensive local circuit covering six sacred sites in and around Tirupati. Ideal for devotees wanting to explore lesser-known but equally divine shrines.",
    note: "Long local circuit. Early start strongly recommended.",
    includes: ["Full day cab", "6 stops", "Driver guide"],
    excludes: ["Entry tickets", "GST"],
    templeFlow: [
      { name: "Narayana Vanam", desc: "Sacred forest shrine — an ancient and deeply peaceful Vishnu temple.", icon: "🌿" },
      { name: "Nagalapuram & Surutupalli", desc: "Twin shrine visits covering Naga deities and local sacred traditions.", icon: "🛕" },
      { name: "Bugga Ramalingeswara", desc: "Magnificent Shiva temple on the Swarnamukhi riverbank.", icon: "🔱" }
    ]
  },
  {
    id: "route-ontimitta",
    name: "Ontimitta Darshan",
    category: "one-day",
    tag: "Standalone",
    tagClass: "",
    popular: false,
    price: 4499,
    duration: "Full Day",
    routeShort: "Tirupati → Ontimitta → Tirupati",
    routeFull: ["Tirupati", "Ontimitta", "Tirupati"],
    cardImage: "images/card-route-ontimitta.webp",
    highlights: ["Kodandarama Temple", "Ancient Architecture", "Peaceful Village Temple"],
    description: "Visit the serene Kodandarama temple at Ontimitta — a beautifully preserved ancient temple with stunning architecture away from the crowds.",
    note: "Great for devotees of Lord Rama.",
    includes: ["Full day cab", "Ontimitta temple visit", "Driver guide"],
    excludes: ["Entry tickets", "GST"],
    templeFlow: [
      { name: "Tirupati", desc: "Start your spiritual journey from Tirupati city.", icon: "🚗" },
      { name: "Ontimitta", desc: "The ancient Kodandarama temple — stunning 15th century architecture.", icon: "" },
      { name: "Return", desc: "Peaceful return journey after an unhurried darshan experience.", icon: "" }
    ]
  },
  {
    id: "route-tiruthani-kanchi-arunachalam",
    name: "Tiruthani – Kanchi – Arunachalam",
    category: "one-day",
    tag: "Long Premium ✨",
    tagClass: "tag-premium",
    popular: false,
    price: 7999,
    duration: "Full Day",
    routeShort: "Tirupati → Tiruthani → Kanchi → Arunachalam → Tirupati",
    routeFull: ["Tirupati", "Tiruthani", "Kanchipuram", "Tiruvannamalai", "Tirupati"],
    cardImage: "images/card-route-tiruthani-kanchi-arunachalam.webp",
    highlights: ["Tiruthani Murugan", "Kanchipuram Temples(3 Temples)", "Arunachaleswara"],
    description: "The grandest one-day temple journey — three cities, multiple temples. From Murugan at Tiruthani to Lord Shiva at Arunachalam through the temple city of Kanchipuram.",
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
    tag: "Best Value ",
    tagClass: "tag-premium",
    popular: true,
    price: 11499,
    duration: "2 Days",
    routeShort: "Tirupati → Kanipakam → Golden Temple → Kanchipuram → Tiruthani → Kalahasti → Kalahasti → Tirupati ",
    routeFull: ["Tirupati", "Kanipakam", "Golden Temple", "Arunachalam", "Kanchipuram", "Tiruthani", "Kalahasti", "Tirupati"],
    cardImage: "images/card-yatra-2day.webp",
    highlights: ["7 Sacred Sites", "2 Full Days", "Tirupathi outskirts Must visit Temples"],
    description: "The ultimate spiritual journey — 7 of the most revered temples across Andhra Pradesh and Tamil Nadu spread over two full days. This is the trip devotees remember for life.",
    note: "Stay not included. We can assist with hotel bookings separately.",
    includes: ["2-day cab", "7 temple visits", "Experienced driver-guide", "Flexible itinerary"],
    excludes: ["Accommodation", "Entry tickets", "GST", "Meals"],
    templeFlow: [
      { name: "Day 1: Kanipakam → Golden Temple → Arunachalam", desc: "Ganesha at Kanipakam, golden architecture at Sripuram, Shiva at Tiruvannamalai.", icon: "✨" },
      { name: "Day 2: Kanchipuram → Tiruthani → Kalahasti", desc: "The temple city of Kanchi, Murugan's hilltop abode, and the wind-linga at Kalahasti.", icon: "🛕" },
      { name: "Return to Tirupati", desc: "Complete your 7-shrine grand circuit with a lifetime of blessings.", icon: "" }
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
    cardImage: "images/card-local-pickup.webp",
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
    cardImage: "images/card-tirupati-chennai.webp",
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
    cardImage: "images/card-tirupati-bangalore.webp",
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
    cardImage: "images/card-tirupati-srisailam.webp",
    highlights: ["Mallikarjuna Jyotirlinga", "Forest pleasant view ", "Long Distance Comfort"],
    description: "Visit the magnificent Mallikarjuna Jyotirlinga at Srisailam — one of the 12 sacred Jyotirlingas of India. A long but profoundly rewarding journey.",
    note: "Long distance trip. Requires full-day commitment.",
    includes: ["Full day cab (return)", "Srisailam temple visit", "Driver allowance"],
    excludes: ["Entry tickets", "GST", "Meals"],
    templeFlow: [
      { name: "Tirupati", desc: "Early morning departure for this grand long-distance pilgrimage.", icon: "🚗" },
      { name: "Srisailam Jyotirlinga", desc: "Mallikarjuna — one of the 12 sacred Jyotirlingas atop the Nallamala hills.", icon: "🔱" },
      { name: "Srisailam", desc: "The mighty Krishna river dam — a stunning scenic viewpoint.", icon: "💧" }
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
    cardImage: "images/card-tirupati-pondicherry.webp",
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