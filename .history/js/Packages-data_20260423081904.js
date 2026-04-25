// ============================================================
// PACKAGES DATA — Single source of truth for all pages
// ============================================================
const PACKAGES = [
  {
    id: "tirumala-sightseeing",
    name: "Tirumala Darshan + Sightseeing",
    tagline: "Complete Sacred Journey",
    price: 4299,
    originalPrice: 5200,
    duration: "Full Day",
    category: "tirupati",
    badge: "Most Popular",
    route: "Tirupati → Tirumala → Sightseeing → Tirupati",
    image: "images/tirumala.jpg",
    heroGradient: "linear-gradient(135deg, #1a0a00 0%, #3d1f00 50%, #1a0a00 100%)",
    accentColor: "#D4A017",

    overview: {
      intro: "Embark on a complete spiritual odyssey through the sacred hills of Tirumala. This carefully crafted package covers the divine Venkateswara Temple darshan alongside the most revered sacred spots, ensuring a deeply fulfilling pilgrimage experience.",
      highlights: [
        "Up & Down AC Travel",
        "Driver Throughout Day",
        "Covers 6 Sacred Places",
        "Zero Toll / Parking Charges",
        "Flexible Pickup Timing",
        "Experienced Local Driver"
      ],
      templeFlow: [
        {
          name: "Tirumala Temple",
          subtitle: "Sri Venkateswara Swamy",
          desc: "The crown jewel of your pilgrimage — the divine abode of Lord Venkateswara atop the seven sacred hills, drawing millions of devotees annually.",
          duration: "3–4 Hours",
          image: "images/tirumala-main.jpg",
          icon: "🛕"
        },
        {
          name: "Akasha Ganga",
          subtitle: "Sacred Waterfall",
          desc: "A pristine natural waterfall considered holy since ancient times. Pilgrims believe bathing here washes away sins and brings divine blessings.",
          duration: "30 Min",
          image: "images/akasha-ganga.jpg",
          icon: "💧"
        },
        {
          name: "Papavinasam",
          subtitle: "Holy Water Spot",
          desc: "Meaning 'destroyer of sins', this sacred spring is believed to have appeared from the footprints of Lord Venkateswara himself.",
          duration: "30 Min",
          image: "images/papavinasam.jpg",
          icon: "🌊"
        }
      ],
      notes: [
        "Hotel pickup & drop included within Tirupati city",
        "Darshan tickets must be arranged by traveller",
        "Timing flexible — morning or afternoon departure",
        "Child below 5 years travels free",
        "No hidden charges whatsoever"
      ]
    },
    addOns: [
      { name: "Japali Theertham Visit", price: 500, icon: "⛰️" },
      { name: "Sila Thoranam Rock", price: 300, icon: "🪨" }
    ],
    includes: ["AC Cab", "Fuel", "Driver", "Parking", "Tolls"],
    excludes: ["Darshan Tickets", "Personal Expenses", "Meals", "Entry Fees"]
  },
  {
    id: "tirupati-city-tour",
    name: "Tirupati City Darshan",
    tagline: "City Sacred Circuit",
    price: 2499,
    originalPrice: 3000,
    duration: "Half Day",
    category: "tirupati",
    badge: "Best Value",
    route: "Tirupati → City Temples → Tirupati",
    image: "images/tirupati-city.jpg",
    heroGradient: "linear-gradient(135deg, #000d1a 0%, #001f3d 50%, #000d1a 100%)",
    accentColor: "#4FC3F7",

    overview: {
      intro: "Discover the sacred temples and spiritual landmarks within Tirupati city in this comprehensive half-day tour. Experience the divine energy of multiple ancient temples in a single comfortable journey.",
      highlights: [
        "Half Day Comfortable Tour",
        "AC Vehicle Throughout",
        "5 Temple Coverage",
        "No Parking Charges",
        "Expert Driver Guide",
        "Flexible Start Time"
      ],
      templeFlow: [
        {
          name: "Govindarajaswamy Temple",
          subtitle: "Tirupati's Gem",
          desc: "An ancient and magnificent temple dedicated to Lord Vishnu, featuring stunning Dravidian architecture and centuries of spiritual heritage.",
          duration: "45 Min",
          image: "images/govindaraja.jpg",
          icon: "🛕"
        },
        {
          name: "ISKCON Temple",
          subtitle: "Radha Krishna",
          desc: "A beautiful modern temple complex dedicated to Radha and Krishna, with elaborate decor and peaceful surroundings for meditation.",
          duration: "30 Min",
          image: "images/iskcon.jpg",
          icon: "✨"
        },
        {
          name: "Padmavathi Temple",
          subtitle: "Goddess Padmavathi",
          desc: "Sacred temple of the divine consort of Lord Venkateswara, located in the nearby town of Tiruchanur, offering serene darshan.",
          duration: "45 Min",
          image: "images/padmavathi.jpg",
          icon: "🌸"
        }
      ],
      notes: [
        "City hotel pickup included",
        "No entry tickets included",
        "Morning batch: 7AM | Afternoon batch: 1PM",
        "Suitable for elderly and children",
        "Transparent pricing — no surprises"
      ]
    },
    addOns: [
      { name: "Kalyana Venkateswara Temple", price: 400, icon: "💫" }
    ],
    includes: ["AC Cab", "Fuel", "Driver", "Parking", "Tolls"],
    excludes: ["Entry Fees", "Personal Expenses", "Meals"]
  },
  {
    id: "kanchipuram-day-trip",
    name: "Kanchipuram Temple Tour",
    tagline: "City of Thousand Temples",
    price: 6499,
    originalPrice: 7800,
    duration: "Full Day",
    category: "outstation",
    badge: "Heritage Pick",
    route: "Tirupati → Kanchipuram → Tirupati",
    image: "images/kanchi.jpg",
    heroGradient: "linear-gradient(135deg, #0d0019 0%, #1a0033 50%, #0d0019 100%)",
    accentColor: "#CE93D8",

    overview: {
      intro: "Journey to Kanchipuram — one of the seven sacred cities of India — renowned for its magnificent Dravidian temples, sacred tanks, and rich cultural heritage spanning over 2000 years.",
      highlights: [
        "Full Day Outstation Trip",
        "Premium AC Vehicle",
        "4 Major Temples",
        "All Tolls Included",
        "Experienced Pilgrim Guide",
        "Comfortable Return Journey"
      ],
      templeFlow: [
        {
          name: "Ekambareswarar Temple",
          subtitle: "Lord Shiva's Abode",
          desc: "One of the Pancha Bhuta Stalas representing earth element. The ancient mango tree inside is believed to be over 3500 years old.",
          duration: "1 Hour",
          image: "images/ekambara.jpg",
          icon: "🔱"
        },
        {
          name: "Kailasanathar Temple",
          subtitle: "8th Century Marvel",
          desc: "The oldest temple in Kanchipuram, built by the Pallava dynasty. A stunning example of early Dravidian architecture with intricate carvings.",
          duration: "45 Min",
          image: "images/kailasa.jpg",
          icon: "🛕"
        },
        {
          name: "Kamakshi Amman Temple",
          subtitle: "Goddess Kamakshi",
          desc: "One of the three most important Shakti Peethas in South India. The presiding deity Kamakshi is considered the mother of the universe.",
          duration: "1 Hour",
          image: "images/kamakshi.jpg",
          icon: "🌺"
        }
      ],
      notes: [
        "Pickup from Tirupati hotel included",
        "Temple entry tickets extra",
        "Departure at 5:30 AM — early start for peaceful darshan",
        "Lunch break at good restaurant (self-pay)",
        "Return by 9 PM approximately"
      ]
    },
    addOns: [
      { name: "Varadharaja Perumal Temple", price: 600, icon: "⭐" },
      { name: "Silk Saree Factory Visit", price: 0, icon: "🧵" }
    ],
    includes: ["AC Cab", "Fuel", "Driver", "All Tolls", "Parking"],
    excludes: ["Temple Entry", "Meals", "Personal Expenses"]
  },
  {
    id: "srikalahasti-tour",
    name: "Srikalahasti Darshan",
    tagline: "Rahu Ketu Sacred Site",
    price: 2999,
    originalPrice: 3600,
    duration: "Half Day",
    category: "tirupati",
    badge: "Spiritual Favourite",
    route: "Tirupati → Srikalahasti → Tirupati",
    image: "images/srikalahasti.jpg",
    heroGradient: "linear-gradient(135deg, #001a00 0%, #003300 50%, #001a00 100%)",
    accentColor: "#81C784",

    overview: {
      intro: "Visit the powerful Srikalahasteeswara Temple, one of the Pancha Bhuta Stalas representing the wind element. Famous for Rahu-Ketu Pooja, this is a must-visit for devotees seeking relief from planetary doshas.",
      highlights: [
        "Comfortable AC Travel",
        "Driver Waiting Service",
        "Rahu-Ketu Pooja Site",
        "No Hidden Charges",
        "Flexible Timing",
        "City Pickup Included"
      ],
      templeFlow: [
        {
          name: "Srikalahasteeswara Temple",
          subtitle: "Vayu Linga — Air Element",
          desc: "Ancient Shiva temple where the Vayu (wind/air) element is worshipped. The sacred flame inside flickers without any visible wind, a divine mystery.",
          duration: "2 Hours",
          image: "images/srikalahasti-main.jpg",
          icon: "🔱"
        },
        {
          name: "Kannappa Ruins",
          subtitle: "Devotee Kannappa's Legacy",
          desc: "The site associated with the legendary hunter-devotee Kannappa who offered his eyes to Lord Shiva, symbolizing ultimate devotion.",
          duration: "20 Min",
          image: "images/kannappa.jpg",
          icon: "👁️"
        },
        {
          name: "Swarnamukhi River",
          subtitle: "Holy Pushkarini",
          desc: "The sacred river flowing beside the temple, where devotees take a holy dip before entering for darshan. Considered highly auspicious.",
          duration: "20 Min",
          image: "images/swarnamukhi.jpg",
          icon: "🌊"
        }
      ],
      notes: [
        "Tirupati city pickup included",
        "Pooja booking not included",
        "Recommended: Start early for peaceful darshan",
        "Distance: ~35 km from Tirupati",
        "All parking charges covered"
      ]
    },
    addOns: [
      { name: "Rahu Ketu Pooja Booking Assist", price: 200, icon: "🙏" }
    ],
    includes: ["AC Cab", "Fuel", "Driver", "Parking", "Tolls"],
    excludes: ["Pooja Fees", "Personal Expenses", "Entry Tickets"]
  }
];

// Helper: get package by ID
function getPackageById(id) {
  return PACKAGES.find(p => p.id === id) || null;
}

// Helper: get packages by category
function getPackagesByCategory(category) {
  if (!category || category === "all") return PACKAGES;
  return PACKAGES.filter(p => p.category === category);
}