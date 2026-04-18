const projects = [

    {
        id: "golden-i",
        name: "Golden I",
        price: "₹25 L - 70 L",
        img: "assets/img/golden/golden1.webp",
        type: "commercial",
        builderInfo: {
            name: "Golden Group",
            experience: "12+ years"
        },
        shortDesc: "High footfall commercial hub in Noida Extension.",
        description: "Golden I is a premium commercial project offering retail shops and office spaces in a prime location with excellent connectivity.",
        priceDetails: [
            { type: "Shop", size: "250 sq.ft", price: "₹25 L" },
            { type: "Office", size: "500 sq.ft", price: "₹45 L" }
        ],
        location: "Techzone 4, Greater Noida West",
        config: "Retail Shops & Offices",
        floorPlans: [
            "assets/img/golden/golden.png"
        ],

        rera: "UPRERA0001",
        developer: "Golden Group",
        possession: "Ready to Move",
        area: "5 Acres",

        roi: "8-12% Rental Return",

        amenities: ["Parking", "Security", "Lift", "Food Court", "Power Backup"],

        highlights: [
            "Prime commercial location",
            "High rental yield",
            "Surrounded by residential societies"
        ],
        locationAdvantages: [
            { title: "Metro", value: "10 min" },
            { title: "Mall", value: "5 min" }
        ],
        nearby: [
            "5 min from Noida Extension",
            "10 min from Sector 62 Metro"
        ],
        investment: {
            rental: "₹20k/month",
            appreciation: "10% yearly"
        },


        gallery: ["assets/img/golden/golden1.webp",
            "assets/img/golden/golden2.jpg",
            "assets/img/golden/golden3.webp",
            "assets/img/golden/golden4.jpg",
            "assets/img/golden/golden5.jpg"
        ]
    },

    {
        id: "grandthum",
        name: "Grandthum (Group 108)",
        price: "₹50 L - ₹2 Cr+",
        img: "assets/img/grandthum/Grandthum2.jpg",
        type: "commercial",

        builderInfo: {
            name: "Group 108",
            experience: "15+ years"
        },

        shortDesc: "Iconic commercial towers with premium office & retail spaces.",

        description: "Grandthum is one of the tallest commercial towers in Noida Extension offering retail shops, office spaces, food court and multiplex with massive footfall potential.",

        priceDetails: [
            { type: "Retail Shop", size: "300 sq.ft", price: "₹50 L" },
            { type: "Office Space", size: "600 sq.ft", price: "₹90 L" },
            { type: "Premium Office", size: "1200 sq.ft", price: "₹2 Cr+" }
        ],

        location: "Techzone 4, Greater Noida West",
        config: "Retail Shops, Offices, Multiplex",

        floorPlans: [
            "assets/img/grandthum/Grandthum-floor.webp"
        ],

        rera: "UPRERA108",
        developer: "Group 108",
        possession: "Under Construction",
        area: "23 Acres",

        roi: "10-14% Rental Return",

        amenities: [
            "Sky Garden",
            "Multiplex",
            "Food Court",
            "High Speed Elevators",
            "Parking",
            "Security"
        ],

        highlights: [
            "Tallest commercial towers",
            "High footfall zone",
            "Multiplex & entertainment hub"
        ],

        locationAdvantages: [
            { title: "Metro", value: "10 min" },
            { title: "NH-24", value: "5 min" }
        ],

        nearby: [
            "5 min from Gaur City Mall",
            "10 min from Noida Sector 62"
        ],

        investment: {
            rental: "₹30k/month",
            appreciation: "12% yearly"
        },

        gallery: [
            "assets/img/grandthum/grandthum.webp",
            "assets/img/grandthum/grandthum2.jpg",
            "assets/img/grandthum/grandthum3.webp"
        ]
    },

    {
        id: "corbett-county",
        name: "Corbett County",
        price: "₹30 L - ₹1 Cr+",
        img: "assets/img/corbett/111.webp",
        type: "residential",

        builderInfo: {
            name: "County Group",
            experience: "10+ years"
        },

        shortDesc: "Premium plotted development near Jim Corbett.",

        description: "Corbett County offers luxury plots and villas surrounded by greenery and nature, ideal for investment and peaceful living.",

        priceDetails: [
            { type: "Plot", size: "100 sq.yd", price: "₹30 L" },
            { type: "Plot", size: "200 sq.yd", price: "₹60 L" },
            { type: "Villa", size: "3 BHK", price: "₹1 Cr+" }
        ],

        location: "Jim Corbett, Uttarakhand",
        config: "Plots & Villas",

        floorPlans: [
            "assets/img/corbett/11111.webp",
            "assets/img/corbett/plan.jpg"
        ],

        rera: "UKRERA001",
        developer: "County Group",
        possession: "Ready to Move",
        area: "50 Acres",

        roi: "12% Yearly Appreciation",

        amenities: [
            "Clubhouse",
            "24x7 Security",
            "Green Parks",
            "Road Connectivity"
        ],

        highlights: [
            "Nature living",
            "Tourism hotspot",
            "High appreciation potential"
        ],

        locationAdvantages: [
            { title: "Forest Area", value: "Nearby" },
            { title: "Resort Zone", value: "5 min" }
        ],

        nearby: [
            "Near Jim Corbett Park",
            "Close to Resorts & Hotels"
        ],

        investment: {
            rental: "₹15k/month",
            appreciation: "12% yearly"
        },

        gallery: [
            "assets/img/corbett/corbett1.png",
            "assets/img/corbett/corbett2.jpg",
            "assets/img/corbett/corbett3.jpg",
            "assets/img/corbett/corbett4.jpg",
            "assets/img/corbett/corbett5.jpg",
            "assets/img/corbett/corbett6.jpg",
            "assets/img/corbett/corbett7.jpg"
        ]
    },

    {
        id: "ats-reprieves",
        name: "ATS Picturesque Reprieves",
        price: "₹2.67 Cr",
        img: "assets/img/ats/ats-10.webp",
        type: "residential",

        builderInfo: {
            name: "ATS Infrastructure Ltd.",
            experience: "25+ years"
        },

        shortDesc: "Luxury villas with premium lifestyle in Greater Noida.",

        description: "ATS Picturesque Reprieves is a premium villa project offering spacious and well-designed homes with world-class amenities, lush green surroundings and excellent connectivity.",

        priceDetails: [
            { type: "3 BHK Villa", size: "1800 sq.ft", price: "₹2.67 Cr" },
            { type: "4 BHK Villa", size: "2350 sq.ft", price: "₹3.2 Cr+" }
        ],

        location: "Sector 152, Noida",
        config: "3 & 4 BHK Villas",

        floorPlans: [
            "assets/img/ats/ats-3-4-bhk.png",
            "assets/img/ats/ats-3BHK.webp",
            "assets/img/ats/ats-3BHK1.webp",
            "assets/img/ats/ats-4BHK.jpeg",
        ],
        rera: "UPRERAATS152",
        developer: "ATS Infrastructure Ltd.",
        possession: "Ready to Move",
        area: "35 Acres",

        roi: "8-10% Appreciation",

        amenities: [
            "Clubhouse",
            "Swimming Pool",
            "Gym",
            "Children Play Area",
            "Jogging Track",
            "24x7 Security",
            "Power Backup"
        ],

        highlights: [
            "Premium villa living",
            "Low density project",
            "Lush green environment",
            "High-end construction quality"
        ],

        locationAdvantages: [
            { title: "Noida Expressway", value: "2 min" },
            { title: "Metro Station", value: "10 min" },
            { title: "Schools", value: "Nearby" }
        ],

        nearby: [
            "Close to Noida Expressway",
            "Near top schools & hospitals",
            "10 min from Sector 148 Metro"
        ],

        investment: {
            rental: "₹60k/month",
            appreciation: "8-10% yearly"
        },

        gallery: [
            "assets/img/ats/ats-1.jpg",
            "assets/img/ats/ats-10.webp",
            "assets/img/ats/ats-11.jpg",
            "assets/img/ats/ats-4.jpg",
            "assets/img/ats/ats-7.webp",
            "assets/img/ats/ats-15.jpg",
        ]
    },

    {
        id: "signature-villas",
        name: "Signature Villas",
        price: "₹1.25 Cr – ₹1.75 Cr",
        img: "assets/img/Signature/8.avif",
        type: "residential",

        builderInfo: {
            name: "Signature Global",
            experience: "10+ years"
        },

        shortDesc: "Premium independent villas with modern lifestyle amenities.",

        description: "Signature Villas offers beautifully designed independent villas with spacious layouts, modern architecture and a secure gated community environment, ideal for families seeking luxury and comfort.",

        priceDetails: [
            { type: "3 BHK Villa", size: "1650 sq.ft", price: "₹1.25 Cr" },
            { type: "4 BHK Villa", size: "2200 sq.ft", price: "₹1.75 Cr" }
        ],

        location: "Greater Noida West",
        config: "3 & 4 BHK Villas",

        floorPlans: [
            "assets/img/Signature/7.webp",
        ],

        rera: "UPRERASIGN001",
        developer: "Signature Global",
        possession: "Under Construction",
        area: "20 Acres",

        roi: "9-11% Appreciation",

        amenities: [
            "Clubhouse",
            "Swimming Pool",
            "Gym",
            "Kids Play Area",
            "Jogging Track",
            "24x7 Security",
            "Power Backup",
            "Parking"
        ],

        highlights: [
            "Independent villa living",
            "Gated community",
            "Modern architecture",
            "Peaceful environment"
        ],

        locationAdvantages: [
            { title: "NH-24", value: "10 min" },
            { title: "Metro", value: "15 min" },
            { title: "Schools", value: "Nearby" }
        ],

        nearby: [
            "Close to Gaur City Mall",
            "Near schools & hospitals",
            "Well connected to Noida & Delhi"
        ],

        investment: {
            rental: "₹35k/month",
            appreciation: "10% yearly"
        },

        gallery: [
            "assets/img/Signature/1.jpg",
            "assets/img/Signature/2.avif",
            "assets/img/Signature/3.jpg",
            "assets/img/Signature/8.avif",
            "assets/img/Signature/4.jpeg"
        ]
    },

    {
        id: "vrinda-heritage",
        name: "Vrinda Heritage Skyward",
        price: "₹1.25 Cr - ₹2.2 Cr",
        img: "assets/img/Vrinda/2.webp",
        type: "residential",

        builderInfo: {
            name: "Vrinda Group",
            experience: "15+ years"
        },

        shortDesc: "Modern high-rise apartments with premium lifestyle amenities.",

        description: "Vrinda Heritage Skyward is a premium residential project offering spacious apartments with modern architecture, lush green surroundings and world-class amenities designed for comfortable family living.",

        priceDetails: [
            { type: "2 BHK", size: "1200 sq.ft", price: "₹1.25 Cr" },
            { type: "3 BHK", size: "1600 sq.ft", price: "₹1.65 Cr" },
            { type: "4 BHK", size: "2200 sq.ft", price: "₹2.2 Cr" }
        ],

        location: "Greater Noida West",
        config: "2, 3 & 4 BHK Apartments",

        floorPlans: [
            "assets/img/Vrinda/plan1.jpg",
            "assets/img/Vrinda/plan2.jpg",
            "assets/img/Vrinda/plan3.jpg",
        ],

        rera: "UPRERAVRINDA001",
        developer: "Vrinda Group",
        possession: "Under Construction",
        area: "12 Acres",

        roi: "9-12% Appreciation",

        amenities: [
            "Clubhouse",
            "Swimming Pool",
            "Gym",
            "Kids Play Area",
            "Jogging Track",
            "Landscaped Gardens",
            "24x7 Security",
            "Power Backup",
            "Parking"
        ],

        highlights: [
            "Modern high-rise living",
            "Spacious layouts",
            "Green surroundings",
            "Family-friendly community"
        ],

        locationAdvantages: [
            { title: "NH-24", value: "10 min" },
            { title: "Metro", value: "15 min" },
            { title: "Schools", value: "Nearby" },
            { title: "Hospitals", value: "Nearby" }
        ],

        nearby: [
            "Close to Gaur City Mall",
            "Near schools & hospitals",
            "Excellent connectivity to Noida & Delhi"
        ],

        investment: {
            rental: "₹25k–₹40k/month",
            appreciation: "10% yearly"
        },

        gallery: [
            "assets/img/Vrinda/1.jpg",
            "assets/img/Vrinda/2.webp",
            "assets/img/Vrinda/3.jpg",
            "assets/img/Vrinda/4.webp",
            "assets/img/Vrinda/5.jpg"
        ]
    },

    {
        id: "lnt-green",
        name: "L&T Green Reserve",
        price: "₹4.8 Cr – ₹11.44 Cr",
        img: "assets/img/l&T/2.jpg",
        type: "upcoming",

        builderInfo: {
            name: "L&T Realty",
            experience: "20+ years"
        },

        shortDesc: "Ultra-luxury residences surrounded by lush green landscapes.",

        description: "L&T Green Reserve is a premium upcoming residential project offering ultra-luxury apartments with world-class amenities, sustainable design, and expansive green spaces for an elite lifestyle.",

        priceDetails: [
            { type: "3 BHK Luxury", size: "1900 sq.ft", price: "₹4.8 Cr" },
            { type: "4 BHK Luxury", size: "2700 sq.ft", price: "₹7 Cr+" },
            { type: "Penthouse", size: "4000+ sq.ft", price: "₹11.44 Cr" }
        ],

        location: "Gurgaon",
        config: "3 & 4 BHK Luxury Apartments & Penthouses",

        floorPlans: [
            "assets/img/l&T/l&t-floorplan.jpg"
        ],

        rera: "HRERALT001",
        developer: "L&T Realty",
        possession: "Upcoming",
        area: "25 Acres",

        roi: "12-15% Appreciation",

        amenities: [
            "Grand Clubhouse",
            "Infinity Pool",
            "Luxury Spa",
            "Gymnasium",
            "Jogging Track",
            "Landscaped Gardens",
            "Smart Home Features",
            "24x7 Security",
            "Power Backup",
            "Multi-level Parking"
        ],

        highlights: [
            "Ultra-luxury living",
            "Premium location in Gurgaon",
            "High-end construction quality",
            "Green & sustainable design"
        ],

        locationAdvantages: [
            { title: "Golf Course Road", value: "10 min" },
            { title: "IGI Airport", value: "25 min" },
            { title: "Metro", value: "15 min" },
            { title: "Corporate Hubs", value: "Nearby" }
        ],

        nearby: [
            "Close to premium schools & hospitals",
            "Near business hubs & malls",
            "Excellent connectivity to Delhi"
        ],

        investment: {
            rental: "₹1L+/month",
            appreciation: "12-15% yearly"
        },

        gallery: [
            "assets/img/l&T/1.jpg",
            "assets/img/l&T/2.jpg",
            "assets/img/l&T/3.jpg",
            "assets/img/l&T/4.jpg",
            "assets/img/l&T/5.jpg",
            "assets/img/l&T/6.jpg",
        ]
    },
    {
        id: "au-silicon-city",
        name: "AU Aspire Silicon City",
        price: "₹3.6 Cr – ₹8.5 Cr",
        img: "assets/img/au/au-2.jpg",
        type: "upcoming",

        builderInfo: {
            name: "AU Real Estate / NBCC",
            experience: "20+ years"
        },

        shortDesc: "Ultra-luxury high-rise apartments in prime Noida location.",

        description: "AU Aspire Silicon City is a premium residential project located in Sector 76, Noida offering ultra-luxury 3.5 & 4.5 BHK apartments and penthouses with modern architecture, spacious layouts and world-class amenities. The project is spread across 8.33 acres with low-density planning for better privacy and lifestyle.",

        priceDetails: [
            { type: "3.5 BHK", size: "2781 sq.ft", price: "₹4.03 Cr" },
            { type: "4.5 BHK", size: "3342 sq.ft", price: "₹4.84 Cr" },
            { type: "Penthouse", size: "5923 sq.ft", price: "₹8.5 Cr+" }
        ],

        location: "Sector 76, Noida",
        config: "3.5 & 4.5 BHK Apartments + Penthouses",

        floorPlans: [
            "assets/img/au/1.jpg",
            "assets/img/au/2.jpg",
            "assets/img/au/3.jpg",
            "assets/img/au/4.jpg",
        ],

        rera: "RERA Not Applicable",
        developer: "AU Real Estate Services Pvt. Ltd.",
        possession: "Under Construction (Expected 2028)",
        area: "8.33 Acres",

        roi: "12-15% Appreciation",

        amenities: [
            "Grand Clubhouse",
            "Infinity Swimming Pool",
            "Gym & Yoga Deck",
            "Spa & Sauna",
            "Mini Theatre",
            "Children Play Area",
            "Jogging Track",
            "EV Charging",
            "24x7 Security",
            "Power Backup",
            "Multi-level Parking"
        ],

        highlights: [
            "Low-density project (446 units only)",
            "Ultra-luxury apartments with large layouts",
            "Premium location near metro",
            "Smart & sustainable design"
        ],

        locationAdvantages: [
            { title: "Metro Station", value: "2 min" },
            { title: "Noida Expressway", value: "5 min" },
            { title: "Schools", value: "Nearby" },
            { title: "Hospitals", value: "Nearby" }
        ],

        nearby: [
            "0.5 km from Sector 76 Metro",
            "Near Logix City Centre Mall",
            "Close to top schools & hospitals"
        ],

        investment: {
            rental: "₹70k–₹1L/month",
            appreciation: "12-15% yearly"
        },

        gallery: [
            "assets/img/au/au-1.jpg",
            "assets/img/au/au-2.jpg",
            "assets/img/au/au-3.webp",
            "assets/img/au/au-4.jpg",
            "assets/img/au/au-5.avif",
        ]
    },
    {
        id: "bhutani-astrathum",
        name: "Bhutani Astrathum",
        price: "₹76.93 L - ₹1.40 Cr",
        img: "assets/img/bhutani/1.avif",
        type: "commercial",

        builderInfo: {
            name: "Bhutani Infra",
            experience: "20+ years"
        },

        shortDesc: "Premium IT/office space project in Noida with assured returns.",

        description: "Bhutani Astrathum is a modern commercial IT/office space project designed for high rental yield and business growth. It offers fully furnished office spaces with world-class infrastructure and a professional environment.",

        priceDetails: [
            { type: "Office Space", size: "500 sq.ft", price: "₹76.93 L" },
            { type: "Office Space", size: "1000 sq.ft", price: "₹1.40 Cr" }
        ],

        location: "Sector 140A, Noida Expressway",
        config: "IT/Office Spaces",

        floorPlans: [
            "assets/img/bhutani/plan.jpeg"
        ],

        rera: "UPRERABHUTANI001",
        developer: "Bhutani Infra",
        possession: "Ready to Move",
        area: "3 Acres",

        roi: "9-12% Assured / Rental Return",

        amenities: [
            "Fully Furnished Offices",
            "High Speed Elevators",
            "Cafeteria",
            "24x7 Security",
            "Power Backup",
            "Parking",
            "Conference Rooms"
        ],

        highlights: [
            "Assured return investment option",
            "Prime IT hub location",
            "Fully furnished office spaces",
            "High rental demand"
        ],

        locationAdvantages: [
            { title: "Noida Expressway", value: "2 min" },
            { title: "Metro Station", value: "10 min" },
            { title: "Corporate Offices", value: "Nearby" }
        ],

        nearby: [
            "Near Infosys & TCS offices",
            "Close to Sector 137 Metro",
            "Surrounded by IT companies"
        ],

        investment: {
            rental: "₹25k–₹50k/month",
            appreciation: "10-12% yearly"
        },

        gallery: [
            "assets/img/bhutani/bhutani.jpg",
            "assets/img/bhutani/bhutani-1.webp",
            "assets/img/bhutani/bhutani-3.jpg",
            "assets/img/bhutani/bhutani-4.jpg",
            "assets/img/bhutani/bhutani-4.jpg",
            "assets/img/bhutani/bhutani-4.jpg",
            "assets/img/bhutani/bhutani-7.avif",
        ]
    },
    {
        id: "escon-panache",
        name: "Escon Panache Villas",
        price: "₹2.4 Cr – ₹3.4 Cr",
        img: "assets/img/escon/escon-1.avif",
        type: "residential",

        builderInfo: {
            name: "Escon Infra Realtors",
            experience: "15+ years"
        },

        shortDesc: "Ultra-luxury 4 BHK triplex villas with private amenities.",

        description: "Escon Panache Villas is a premium residential villa project in Greater Noida offering ultra-luxury 4 BHK triplex villas with private gardens, terrace spaces and modern amenities designed for elite lifestyle living.",

        priceDetails: [
            { type: "4 BHK Villa", size: "2700 sq.ft", price: "₹2.4 Cr" },
            { type: "4 BHK Villa", size: "3000 sq.ft", price: "₹2.9 Cr" },
            { type: "4 BHK Villa", size: "3400 sq.ft", price: "₹3.4 Cr" }
        ],

        location: "Site C, Surajpur, Greater Noida",
        config: "4 BHK Triplex Villas",

        floorPlans: [
            "assets/img/escon/1.jpg",
            "assets/img/escon/2.jpg",
            "assets/img/escon/3.jpg",
        ],

        rera: "Available (Project Registered)",
        developer: "Escon Infra Realtors Pvt. Ltd.",
        possession: "Under Construction (Expected 2025-26)",
        area: "3.5 – 4 Acres",

        roi: "10-12% Appreciation",

        amenities: [
            "Private Garden",
            "Rooftop Terrace",
            "Clubhouse",
            "Swimming Pool",
            "Gym",
            "Jogging Track",
            "Kids Play Area",
            "24x7 Security",
            "Power Backup",
            "Parking"
        ],

        highlights: [
            "Only 4 BHK luxury villas",
            "Triplex design (G+2 floors)",
            "Private rooftop & garden",
            "Low-density premium living"
        ],

        locationAdvantages: [
            { title: "Pari Chowk", value: "10 min" },
            { title: "Jewar Airport", value: "20-25 min" },
            { title: "Metro", value: "Nearby" },
            { title: "Schools", value: "Nearby" }
        ],

        nearby: [
            "Close to Knowledge Park & colleges",
            "Near hospitals like Sharda & Kailash",
            "Good connectivity to Noida & Yamuna Expressway"
        ],

        investment: {
            rental: "₹40k–₹70k/month",
            appreciation: "10-12% yearly"
        },

        gallery: [
            "assets/img/escon/escon-1.avif",
            "assets/img/escon/escon-2.webp",
            "assets/img/escon/escon-3.jpg",
            "assets/img/escon/escon-4.jpg",
            "assets/img/escon/escon-5.jpg",
            "assets/img/escon/escon-6.jpg",
        ]
    },
    {
        id: "evergreen-square",
        name: "Evergreen Square",
        price: "₹97 L - ₹1.08 Cr",
        img: "assets/img/evergreen/1.webp",
        type: "commercial",

        builderInfo: {
            name: "Evergreen Developers",
            experience: "12+ years"
        },

        shortDesc: "Modern commercial hub with retail shops & office spaces.",

        description: "Evergreen Square is a well-planned commercial project offering retail shops and office spaces in a high footfall area, designed for strong rental returns and business growth.",

        priceDetails: [
            { type: "Retail Shop", size: "300 sq.ft", price: "₹97 L" },
            { type: "Retail Shop", size: "400 sq.ft", price: "₹1.08 Cr" }
        ],

        location: "Greater Noida West",
        config: "Retail Shops & Office Spaces",

        floorPlans: [
            "assets/img/evergreen/8.webp",
            "assets/img/evergreen/9.webp",
            "assets/img/evergreen/10.avif",
            "assets/img/evergreen/11.avif",
        ],

        rera: "UPRERAEVER001",
        developer: "Evergreen Developers",
        possession: "Under Construction",
        area: "2.5 Acres",

        roi: "9-11% Rental Return",

        amenities: [
            "High Street Retail",
            "Food Court",
            "24x7 Security",
            "Power Backup",
            "Parking",
            "Lift",
            "CCTV Surveillance"
        ],

        highlights: [
            "High footfall location",
            "Affordable commercial investment",
            "Good rental potential",
            "Modern design layout"
        ],

        locationAdvantages: [
            { title: "Residential Societies", value: "Nearby" },
            { title: "NH-24", value: "10 min" },
            { title: "Metro", value: "15 min" }
        ],

        nearby: [
            "Surrounded by residential population",
            "Close to schools & daily needs",
            "Easy connectivity to Noida & Ghaziabad"
        ],

        investment: {
            rental: "₹20k–₹35k/month",
            appreciation: "10% yearly"
        },

        gallery: [
            "assets/img/evergreen/1.webp",
            "assets/img/evergreen/2.webp",
            "assets/img/evergreen/3.png",
            "assets/img/evergreen/4.webp",
        ]
    },

    {
        id: "ratan-pearls",
        name: "Ratan Pearls",
        price: "₹82 L - ₹1.55 Cr",
        img: "assets/img/ratan/11.jpg",
        type: "residential",

        builderInfo: { name: "Ratan Group", experience: "12+ years" },

        shortDesc: "Affordable luxury apartments in Greater Noida West.",
        description: "Ratan Pearls offers well-designed apartments with modern amenities and good connectivity.",

        priceDetails: [
            { type: "2 BHK", size: "1050 sq.ft", price: "₹82 L" },
            { type: "3 BHK", size: "1450 sq.ft", price: "₹1.55 Cr" }
        ],
        floorPlans: [
            "assets/img/ratan/m1.jpg",
            "assets/img/ratan/m2.jpg",
            "assets/img/ratan/m3.jpg",
        ],
        location: "Greater Noida West",
        config: "2 & 3 BHK Apartments",
        possession: "Under Construction",
        area: "6 Acres",

        roi: "8-10% Appreciation",

        amenities: ["Clubhouse", "Pool", "Gym", "Security"],

        highlights: ["Affordable pricing", "Good location", "Family friendly"],

        locationAdvantages: [
            { title: "NH-24", value: "10 min" }
        ],

        nearby: ["Schools & hospitals nearby"],

        investment: { rental: "₹18k–₹30k", appreciation: "9%" },

        gallery: [
            "assets/img/ratan/2.jpg",
            "assets/img/ratan/3.jpg",
            "assets/img/ratan/4.jpg",
            "assets/img/ratan/5.jpeg",
            "assets/img/ratan/6.avif",
            "assets/img/ratan/7.jpg",
        ]
    },

    {
        id: "vihaan-greens",
        name: "Vihaan Greens",
        price: "₹65 L - ₹1.4 Cr",
        img: "assets/img/vihaan/1.jpg",
        type: "residential",

        builderInfo: { name: "Vihaan Group", experience: "10+ years" },

        shortDesc: "Green living apartments with modern facilities.",
        description: "Peaceful living with greenery and modern amenities.",

        priceDetails: [
            { type: "2 BHK", size: "950 sq.ft", price: "₹65 L" },
            { type: "3 BHK", size: "1350 sq.ft", price: "₹1.4 Cr" }
        ],

        location: "Greater Noida West",
        config: "2 & 3 BHK",

        floorPlans: [
            "assets/img/vihaan/m1.jpg",
            "assets/img/vihaan/m2.jpg",
            "assets/img/vihaan/m3.jpg",
            "assets/img/vihaan/m4.jpg",
        ],

        rera: "UPRERAVIHAN001",
        developer: "Vihaan Group",
        possession: "Ready to Move",
        area: "5 Acres",

        roi: "8-10%",

        amenities: ["Park", "Security", "Gym"],

        highlights: ["Green area", "Affordable"],

        locationAdvantages: [{ title: "Metro", value: "15 min" }],

        nearby: ["Markets nearby"],

        investment: { rental: "₹15k–₹25k", appreciation: "8%" },

        gallery: [
            "assets/img/vihaan/1.jpg",
            "assets/img/vihaan/2.jpg",
            "assets/img/vihaan/3.webp",
            "assets/img/vihaan/5.avif",
            "assets/img/vihaan/6.jpeg",
        ]
    },
    {
  id: "sky-garden",
  name: "Sky Garden",
  price: "₹28 L - ₹1.05 Cr",
  img: "assets/img/sky-garden/1.jpg",
  type: "commercial",

  builderInfo: { name: "Skyline Group", experience: "10+ years" },

  shortDesc: "Unique rooftop commercial concept.",

  description: "Sky Garden offers rooftop retail and food court spaces.",

  priceDetails: [
    { type: "Shop", size: "200 sq.ft", price: "₹28 L" }
  ],

  location: "Greater Noida West",
  config: "Retail Shops",

  floorPlans: [
    "assets/img/sky-garden/m1.jpg",
    "assets/img/sky-garden/m2.jpg",
    "assets/img/sky-garden/m3.jpg",
    "assets/img/sky-garden/m4.jpg",
  ],

  rera: "UPRERASKY001",
  developer: "Skyline Group",
  possession: "Under Construction",
  area: "3 Acres",

  roi: "10-12%",

  amenities: ["Rooftop garden","Food court"],

  highlights: ["Unique concept","High footfall"],

  locationAdvantages: [{ title: "NH-24", value: "5 min" }],

  nearby: ["Residential area"],

  investment: { rental: "₹20k", appreciation: "10%" },

  gallery: [
    "assets/img/sky-garden/1.jpg",
    "assets/img/sky-garden/7.jpg",
    "assets/img/sky-garden/3.jpg",
    "assets/img/sky-garden/4.avif",
  ]
},
{
  id: "ibp-windsor",
  name: "IBP Windsor Valley",
  price: "₹56.8 – ₹89 Lakh",
  img: "assets/img/ibp/ibp-1.webp",
  type: "residential",

  builderInfo: { name: "IBP Group", experience: "8+ years" },

  shortDesc: "Affordable residential apartments.",

  description: "Budget-friendly homes with essential amenities.",

  priceDetails: [
    { type: "2 BHK", size: "900 sq.ft", price: "₹56 L" }
  ],

  location: "Greater Noida",
  config: "2 BHK",

  floorPlans: [
    "assets/img/ibp/ibp-5.avif"
  ],

  rera: "UPRERAIBP001",
  developer: "IBP Group",
  possession: "Ready",
  area: "4 Acres",

  roi: "7-9%",

  amenities: ["Security","Parking"],

  highlights: ["Budget homes"],

  locationAdvantages: [{ title: "Metro", value: "Nearby" }],

  nearby: ["Schools nearby"],

  investment: { rental: "₹12k", appreciation: "8%" },

  gallery: [
    "assets/img/ibp/ibp-1.webp",
    "assets/img/ibp/ibp-2.avif",
    "assets/img/ibp/ibp-3.webp",
    "assets/img/ibp/ibp-4.jpeg",
  ]
},
{
  id: "tulsi-vatika",
  name: "Tulsi Vatika",
  price: "₹97 L - ₹1.08 Cr",
  img: "assets/img/tulsi/Tulsi-1.webp",
  type: "residential",

  builderInfo: { name: "Tulsi Group", experience: "10+ years" },

  shortDesc: "Peaceful residential homes with greenery.",

  description: "Comfortable homes in a green and secure environment.",

  priceDetails: [
    { type: "3 BHK", size: "1400 sq.ft", price: "₹1 Cr" }
  ],

  location: "Greater Noida",
  config: "3 BHK",

  floorPlans: [
    "assets/img/tulsi/tulsi-7.webp",
  ],

  rera: "UPRERATULSI001",
  developer: "Tulsi Group",
  possession: "Ready",
  area: "5 Acres",

  roi: "8-10%",

  amenities: ["Park","Security"],

  highlights: ["Green living"],

  locationAdvantages: [{ title: "NH-24", value: "10 min" }],

  nearby: ["Markets nearby"],

  investment: { rental: "₹20k", appreciation: "9%" },

  gallery: [
    "assets/img/tulsi/tulsi-1.webp",
    "assets/img/tulsi/tulsi-2.jpg",
    "assets/img/tulsi/tulsi-3.avif",
    "assets/img/tulsi/tulsi-4.avif",
    "assets/img/tulsi/tulsi-5.avif",
    "assets/img/tulsi/tulsi-6.avif",
  ]
},
{
  id: "gygy-fiveo",
  name: "GYGY FIVE-O",
  price: "₹2.67 Cr",
  img: "assets/img/gygy/1.avif",
  type: "commercial",

  builderInfo: {
    name: "GYGY Group",
    experience: "15+ years"
  },

  shortDesc: "Premium commercial office spaces in prime Noida location.",

  description: "GYGY FIVE-O offers high-end office spaces with modern infrastructure, excellent connectivity and strong investment potential.",

  priceDetails: [
    { type: "Office Space", size: "1000 sq.ft", price: "₹2.67 Cr" }
  ],

  location: "Sector 50, Noida",
  config: "Office Spaces",

  floorPlans: [
      "assets/img/gygy/gygy-floor-1.jpeg",
      "assets/img/gygy/gygy-floor-2.jpeg"
  ],

  rera: "UPRERAGYGY001",
  developer: "GYGY Group",
  possession: "Under Construction",
  area: "3 Acres",

  roi: "10-12%",

  amenities: [
    "High Speed Elevators",
    "Parking",
    "Security",
    "Cafeteria",
    "Conference Rooms"
  ],

  highlights: [
    "Prime business location",
    "High rental demand",
    "Modern office infrastructure"
  ],

  locationAdvantages: [
    { title: "Metro", value: "5 min" },
    { title: "Expressway", value: "Nearby" }
  ],

  nearby: [
    "Close to corporate offices",
    "Near residential areas"
  ],

  investment: {
    rental: "₹50k–₹80k/month",
    appreciation: "11% yearly"
  },

  gallery: [
    "assets/img/gygy/gygy-1.avif",
    "assets/img/gygy/gygy-2.jpg",
    "assets/img/gygy/gygy-3.jpg",
    "assets/img/gygy/gygy-4.jpg",
    "assets/img/gygy/gygy-5.png"
  ]
},
{
  id: "ivory-county",
  name: "Ivory County",
  price: "₹2.85 Cr – ₹12.80 Cr",
  img: "assets/img/ivory-9.jpg",
  type: "upcoming",

  builderInfo: {
    name: "County Group",
    experience: "15+ years"
  },

  shortDesc: "Ultra-luxury residences with premium amenities.",

  description: "Ivory County is a high-end residential project offering spacious luxury apartments with top-class amenities and elite lifestyle.",

  priceDetails: [
    { type: "3 BHK", size: "2200 sq.ft", price: "₹2.85 Cr" },
    { type: "4 BHK", size: "3200 sq.ft", price: "₹5 Cr+" },
    { type: "Penthouse", size: "5000 sq.ft", price: "₹12.8 Cr" }
  ],

  location: "Noida",
  config: "3 & 4 BHK + Penthouses",

  floorPlans: [
    "assets/img/ivory/ivory-1.jpg",
    "assets/img/ivory/ivory-2.jpg",
    "assets/img/ivory/ivory-3.jpg",
    "assets/img/ivory/ivory-4.jpg",
  ],

  rera: "UPRERAIVORY001",
  developer: "County Group",
  possession: "Upcoming",
  area: "20 Acres",

  roi: "12-15%",

  amenities: [
    "Clubhouse",
    "Infinity Pool",
    "Gym",
    "Spa",
    "Security",
    "Parking"
  ],

  highlights: [
    "Ultra luxury living",
    "Low density project",
    "Premium location"
  ],

  locationAdvantages: [
    { title: "Metro", value: "10 min" },
    { title: "Expressway", value: "5 min" }
  ],

  nearby: [
    "Close to malls & hospitals",
    "Near business hubs"
  ],

  investment: {
    rental: "₹80k–₹2L/month",
    appreciation: "13% yearly"
  },

  gallery: [
    "assets/img/ivory/ivory-5.jpg",
    "assets/img/ivory/ivory-6.avif",
    "assets/img/ivory/ivory-7.jpg",
    "assets/img/ivory/ivory-8.webp",
    "assets/img/ivory/ivory-9.jpg",
    "assets/img/ivory/ivory-10.webp",
  ]
},
{
  id: "kalpataru-vista",
  name: "Kalpataru Vista",
  price: "₹5.42 Cr",
  img: "assets/img//kalptaru/vista-2.jpg",
  type: "residential",

  builderInfo: {
    name: "Kalpataru Limited",
    experience: "50+ years"
  },

  shortDesc: "Luxury high-rise residences with premium lifestyle.",

  description: "Kalpataru Vista offers ultra-modern apartments with world-class amenities and elegant design.",

  priceDetails: [
    { type: "3 BHK", size: "2000 sq.ft", price: "₹5.42 Cr" }
  ],

  location: "Noida",
  config: "3 BHK Luxury",

  floorPlans: [
    "assets/img/kalptaru/1.jpg",
    "assets/img/kalptaru/2.jpg",
    "assets/img/kalptaru/3.jpg",
    "assets/img/kalptaru/4.jpg",   
    "assets/img/kalptaru/5.jpg",
    "assets/img/kalptaru/6.jpg",
  ],

  rera: "UPRERAKALP001",
  developer: "Kalpataru Limited",
  possession: "Under Construction",
  area: "10 Acres",

  roi: "12%",

  amenities: [
    "Clubhouse",
    "Pool",
    "Gym",
    "Security",
    "Parking"
  ],

  highlights: [
    "Premium brand",
    "Luxury living",
    "High appreciation"
  ],

  locationAdvantages: [
    { title: "Metro", value: "Nearby" }
  ],

  nearby: [
    "Schools & malls nearby"
  ],

  investment: {
    rental: "₹60k/month",
    appreciation: "12%"
  },

  gallery: [
    "assets/img/kalptaru/vista-1.jpg",
    "assets/img/kalptaru/vista-2.jpg",
    "assets/img/kalptaru/vista-3.png",
    "assets/img/kalptaru/vista-4.webp",
    "assets/img/kalptaru/vista-5.webp",
    "assets/img/kalptaru/vista-6.webp",

  ]
}
];

function loadProjects(filter = "all") {

    const container = document.getElementById("projectContainer");

    const filtered = filter === "all"
        ? projects
        : projects.filter(p => p.type === filter);

    if (filtered.length === 0) {
        container.innerHTML = `
      <p class="text-center col-span-full text-gray-500 text-lg">
        No projects found
      </p>
    `;
        return;
    }

    let html = "";

    filtered.forEach(p => {

        const badge = p.type === "upcoming"
            ? `<span class="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
           Upcoming
         </span>`
            : "";

        html += `
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 relative">

        ${badge}

        <!-- Image -->
        <a href="project-details.html?id=${p.id}">
          <img src="${p.img}" class="w-full h-48 object-cover">
        </a>

        <!-- Content -->
        <div class="p-4">

          <h3 class="font-semibold text-lg">${p.name}</h3>

          <p class="text-gray-600 mt-1">${p.price}</p>

          <a href="project-details.html?id=${p.id}"
             class="block mt-3 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
             Explore Project
          </a>

        </div>

      </div>
    `;
    });

    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
});