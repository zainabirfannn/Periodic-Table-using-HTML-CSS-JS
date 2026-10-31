// =========================================================
// Simple Pastel Periodic Table
// Clean, straightforward JavaScript for rendering and interactions
// =========================================================

// 1. Array of all 118 Chemical Elements
const elements = [
  {
    "number": 1,
    "symbol": "H",
    "name": "Hydrogen",
    "mass": "1.008",
    "period": 1,
    "group": 1,
    "categoryClass": "cat-nonmetal",
    "categoryName": "Reactive Nonmetal",
    "state": "Gas",
    "description": "The most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass. Key fuel for stellar fusion and clean energy technology."
  },
  {
    "number": 2,
    "symbol": "He",
    "name": "Helium",
    "mass": "4.0026",
    "period": 1,
    "group": 18,
    "categoryClass": "cat-noble-gas",
    "categoryName": "Noble Gas",
    "state": "Gas",
    "description": "A colorless, odorless, non-toxic inert gas. Second lightest and second most abundant element in the observable universe; crucial for MRI cooling and rocketry."
  },
  {
    "number": 3,
    "symbol": "Li",
    "name": "Lithium",
    "mass": "6.94",
    "period": 2,
    "group": 1,
    "categoryClass": "cat-alkali-metal",
    "categoryName": "Alkali Metal",
    "state": "Solid",
    "description": "The lightest metal and least dense solid element. Highly reactive and flammable; fundamental component of modern rechargeable lithium-ion batteries."
  },
  {
    "number": 4,
    "symbol": "Be",
    "name": "Beryllium",
    "mass": "9.0122",
    "period": 2,
    "group": 2,
    "categoryClass": "cat-alkaline-earth",
    "categoryName": "Alkaline Earth",
    "state": "Solid",
    "description": "A relatively rare metal in the universe, formed through spallation. Lightweight, stiff, and transparent to X-rays, making it ideal for aerospace and space telescopes."
  },
  {
    "number": 5,
    "symbol": "B",
    "name": "Boron",
    "mass": "10.81",
    "period": 2,
    "group": 13,
    "categoryClass": "cat-metalloid",
    "categoryName": "Metalloid",
    "state": "Solid",
    "description": "A low-abundance metalloid produced by cosmic ray spallation. Extensively used in heat-resistant borosilicate glass, ceramics, and semiconductors."
  },
  {
    "number": 6,
    "symbol": "C",
    "name": "Carbon",
    "mass": "12.011",
    "period": 2,
    "group": 14,
    "categoryClass": "cat-nonmetal",
    "categoryName": "Reactive Nonmetal",
    "state": "Solid",
    "description": "The foundational element of all known organic life. Its unique ability to form stable bonds with many elements allows for millions of complex compounds."
  },
  {
    "number": 7,
    "symbol": "N",
    "name": "Nitrogen",
    "mass": "14.007",
    "period": 2,
    "group": 15,
    "categoryClass": "cat-nonmetal",
    "categoryName": "Reactive Nonmetal",
    "state": "Gas",
    "description": "Constitutes about 78% of Earth's atmosphere. Essential building block of amino acids, proteins, DNA, fertilizers, and cryogenic coolants."
  },
  {
    "number": 8,
    "symbol": "O",
    "name": "Oxygen",
    "mass": "15.999",
    "period": 2,
    "group": 16,
    "categoryClass": "cat-nonmetal",
    "categoryName": "Reactive Nonmetal",
    "state": "Gas",
    "description": "The most abundant element in the Earth's crust and oceans. Essential for aerobic respiration in multicellular organisms and combustion."
  },
  {
    "number": 9,
    "symbol": "F",
    "name": "Fluorine",
    "mass": "18.998",
    "period": 2,
    "group": 17,
    "categoryClass": "cat-nonmetal",
    "categoryName": "Reactive Nonmetal",
    "state": "Gas",
    "description": "The most electronegative and chemically reactive of all elements. Used in toothpaste fluorides, refrigerants, and non-stick polymers like Teflon."
  },
  {
    "number": 10,
    "symbol": "Ne",
    "name": "Neon",
    "mass": "20.180",
    "period": 2,
    "group": 18,
    "categoryClass": "cat-noble-gas",
    "categoryName": "Noble Gas",
    "state": "Gas",
    "description": "A noble gas that glows with a brilliant reddish-orange color in high-voltage electrical discharge signs. Chemically inert and odorless."
  },
  {
    "number": 11,
    "symbol": "Na",
    "name": "Sodium",
    "mass": "22.990",
    "period": 3,
    "group": 1,
    "categoryClass": "cat-alkali-metal",
    "categoryName": "Alkali Metal",
    "state": "Solid",
    "description": "A soft, silvery-white alkali metal that reacts vigorously with water. Vital electrolyte in cellular biology and a component of common table salt (NaCl)."
  },
  {
    "number": 12,
    "symbol": "Mg",
    "name": "Magnesium",
    "mass": "24.305",
    "period": 3,
    "group": 2,
    "categoryClass": "cat-alkaline-earth",
    "categoryName": "Alkaline Earth",
    "state": "Solid",
    "description": "A shiny gray solid metal that burns with a brilliant white flame. Essential central atom in chlorophyll for photosynthesis and structural alloy in aerospace."
  },
  {
    "number": 13,
    "symbol": "Al",
    "name": "Aluminium",
    "mass": "26.982",
    "period": 3,
    "group": 13,
    "categoryClass": "cat-post-transition",
    "categoryName": "Post-Transition Metal",
    "state": "Solid",
    "description": "The most widespread metal on Earth. Lightweight, corrosion-resistant, and recyclable; ubiquitous in transport, packaging, electronics, and architecture."
  },
  {
    "number": 14,
    "symbol": "Si",
    "name": "Silicon",
    "mass": "28.085",
    "period": 3,
    "group": 14,
    "categoryClass": "cat-metalloid",
    "categoryName": "Metalloid",
    "state": "Solid",
    "description": "The bedrock of modern electronics and computing. A crystalline semiconductor making up over 28% of Earth's crust in sand, quartz, and silicates."
  },
  {
    "number": 15,
    "symbol": "P",
    "name": "Phosphorus",
    "mass": "30.974",
    "period": 3,
    "group": 15,
    "categoryClass": "cat-nonmetal",
    "categoryName": "Reactive Nonmetal",
    "state": "Solid",
    "description": "Exists in white, red, and black allotropes. Critical for DNA, RNA, ATP cellular energy transfer, agricultural fertilizers, and match heads."
  },
  {
    "number": 16,
    "symbol": "S",
    "name": "Sulfur",
    "mass": "32.06",
    "period": 3,
    "group": 16,
    "categoryClass": "cat-nonmetal",
    "categoryName": "Reactive Nonmetal",
    "state": "Solid",
    "description": "A bright yellow crystalline solid known since antiquity as brimstone. Primary ingredient in sulfuric acid, vulcanized rubber, and essential amino acids."
  },
  {
    "number": 17,
    "symbol": "Cl",
    "name": "Chlorine",
    "mass": "35.45",
    "period": 3,
    "group": 17,
    "categoryClass": "cat-nonmetal",
    "categoryName": "Reactive Nonmetal",
    "state": "Gas",
    "description": "A yellow-green pungent gas. Powerful oxidizer and disinfectant used widely in drinking water sanitation, bleach, and PVC plastics production."
  },
  {
    "number": 18,
    "symbol": "Ar",
    "name": "Argon",
    "mass": "39.948",
    "period": 3,
    "group": 18,
    "categoryClass": "cat-noble-gas",
    "categoryName": "Noble Gas",
    "state": "Gas",
    "description": "The third most abundant gas in Earth's atmosphere (0.93%). Chemically inert; used as a protective shielding gas in arc welding and incandescent bulbs."
  },
  {
    "number": 19,
    "symbol": "K",
    "name": "Potassium",
    "mass": "39.098",
    "period": 4,
    "group": 1,
    "categoryClass": "cat-alkali-metal",
    "categoryName": "Alkali Metal",
    "state": "Solid",
    "description": "A silvery-white metal soft enough to be cut with a knife. Essential mineral for heart and nerve function in humans, and major component of NPK plant fertilizers."
  },
  {
    "number": 20,
    "symbol": "Ca",
    "name": "Calcium",
    "mass": "40.078",
    "period": 4,
    "group": 2,
    "categoryClass": "cat-alkaline-earth",
    "categoryName": "Alkaline Earth",
    "state": "Solid",
    "description": "The 5th most abundant element in Earth's crust. Critical for structural strength in bones, teeth, shells, and widely used in concrete and limestone."
  },
  {
    "number": 21,
    "symbol": "Sc",
    "name": "Scandium",
    "mass": "44.956",
    "period": 4,
    "group": 3,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "A silvery-white transition metal. Alloyed with aluminium to produce lightweight, high-strength structural materials for aerospace frames and sports gear."
  },
  {
    "number": 22,
    "symbol": "Ti",
    "name": "Titanium",
    "mass": "47.867",
    "period": 4,
    "group": 4,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Renowned for high strength-to-weight ratio and exceptional corrosion resistance. Ideal for surgical implants, jet engines, spacecraft, and white pigment (TiO₂)."
  },
  {
    "number": 23,
    "symbol": "V",
    "name": "Vanadium",
    "mass": "50.942",
    "period": 4,
    "group": 5,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Hard, ductile metal prized as a steel strengthening additive in tools, armor, and axles. Emerging as a core electrolyte in vanadium redox flow grid batteries."
  },
  {
    "number": 24,
    "symbol": "Cr",
    "name": "Chromium",
    "mass": "51.996",
    "period": 4,
    "group": 6,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Steely-gray, lustrous, hard metal capable of taking a high polish. Imparts corrosion resistance to stainless steel and produces vivid rubies and chrome plating."
  },
  {
    "number": 25,
    "symbol": "Mn",
    "name": "Manganese",
    "mass": "54.938",
    "period": 4,
    "group": 7,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Crucial alloying element for deoxidizing and strengthening industrial steel and beverage cans. Also key in dry cell batteries and photosynthesis."
  },
  {
    "number": 26,
    "symbol": "Fe",
    "name": "Iron",
    "mass": "55.845",
    "period": 4,
    "group": 8,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "The most common element by mass forming much of Earth's outer and inner core. Center of hemoglobin for oxygen transport and backbone of world infrastructure as steel."
  },
  {
    "number": 27,
    "symbol": "Co",
    "name": "Cobalt",
    "mass": "58.933",
    "period": 4,
    "group": 9,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Ferromagnetic metal giving intense blue color to ceramics and glass. Essential trace micronutrient in vitamin B12 and key component of EV battery cathodes."
  },
  {
    "number": 28,
    "symbol": "Ni",
    "name": "Nickel",
    "mass": "58.693",
    "period": 4,
    "group": 10,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Silvery-white lustrous metal with slight golden tinge. Highly corrosion-resistant, used extensively in stainless steel, rechargeable batteries, and coins."
  },
  {
    "number": 29,
    "symbol": "Cu",
    "name": "Copper",
    "mass": "63.546",
    "period": 4,
    "group": 11,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "One of few metals found in native form, used for millennia. Renowned for supreme thermal and electrical conductivity, vital for the global electric grid."
  },
  {
    "number": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "mass": "65.38",
    "period": 4,
    "group": 12,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Bluish-white metal mainly used for galvanizing steel to prevent rust. Critical trace element for human immune health and brass alloy production."
  },
  {
    "number": 31,
    "symbol": "Ga",
    "name": "Gallium",
    "mass": "69.723",
    "period": 4,
    "group": 13,
    "categoryClass": "cat-post-transition",
    "categoryName": "Post-Transition Metal",
    "state": "Solid",
    "description": "Remarkable metal that melts in human hands (around 29.7°C / 85.6°F). Widely employed in semiconductors, LEDs, lasers, and high-efficiency solar cells."
  },
  {
    "number": 32,
    "symbol": "Ge",
    "name": "Germanium",
    "mass": "72.630",
    "period": 4,
    "group": 14,
    "categoryClass": "cat-metalloid",
    "categoryName": "Metalloid",
    "state": "Solid",
    "description": "Lustrous, hard metalloid historically pivotal in early radar and the first solid-state transistors. Now vital in fiber-optic systems and infrared night-vision optics."
  },
  {
    "number": 33,
    "symbol": "As",
    "name": "Arsenic",
    "mass": "74.922",
    "period": 4,
    "group": 15,
    "categoryClass": "cat-metalloid",
    "categoryName": "Metalloid",
    "state": "Solid",
    "description": "Infamous historically as an odorless, tasteless poison. In modern technology, it serves as a critical dopant in semiconductors and gallium arsenide solar cells."
  },
  {
    "number": 34,
    "symbol": "Se",
    "name": "Selenium",
    "mass": "78.971",
    "period": 4,
    "group": 16,
    "categoryClass": "cat-nonmetal",
    "categoryName": "Reactive Nonmetal",
    "state": "Solid",
    "description": "Notable for photoconductive properties: conducts electricity far better in light than in darkness. Used in photocopiers, light meters, and glass tinting."
  },
  {
    "number": 35,
    "symbol": "Br",
    "name": "Bromine",
    "mass": "79.904",
    "period": 4,
    "group": 17,
    "categoryClass": "cat-nonmetal",
    "categoryName": "Reactive Nonmetal",
    "state": "Liquid",
    "description": "The only nonmetallic element that is liquid at standard room temperature. A dense, deep red-brown fuming liquid used in flame retardants and water purification."
  },
  {
    "number": 36,
    "symbol": "Kr",
    "name": "Krypton",
    "mass": "83.798",
    "period": 4,
    "group": 18,
    "categoryClass": "cat-noble-gas",
    "categoryName": "Noble Gas",
    "state": "Gas",
    "description": "A dense noble gas that emits a whitish-green glow when ionized. Used in airport runway flashers, high-speed photography flash lamps, and laser systems."
  },
  {
    "number": 37,
    "symbol": "Rb",
    "name": "Rubidium",
    "mass": "85.468",
    "period": 5,
    "group": 1,
    "categoryClass": "cat-alkali-metal",
    "categoryName": "Alkali Metal",
    "state": "Solid",
    "description": "Very soft, highly reactive silvery-white alkali metal that ignites spontaneously in air. Used in ultra-precise atomic clocks and vapor laser physics."
  },
  {
    "number": 38,
    "symbol": "Sr",
    "name": "Strontium",
    "mass": "87.62",
    "period": 5,
    "group": 2,
    "categoryClass": "cat-alkaline-earth",
    "categoryName": "Alkaline Earth",
    "state": "Solid",
    "description": "A reactive alkaline earth metal named after the Scottish village of Strontian. Responsible for the brilliant crimson-red colors in fireworks and flares."
  },
  {
    "number": 39,
    "symbol": "Y",
    "name": "Yttrium",
    "mass": "88.906",
    "period": 5,
    "group": 3,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Silvery-metallic rare-earth transition metal. Core component of YBCO high-temperature superconductors, phosphor LEDs, and surgical Nd:YAG lasers."
  },
  {
    "number": 40,
    "symbol": "Zr",
    "name": "Zirconium",
    "mass": "91.224",
    "period": 5,
    "group": 4,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Lustrous, corrosion-resistant metal with very low neutron absorption. Ideal cladding for nuclear fuel rods, as well as diamond-simulant cubic zirconia."
  },
  {
    "number": 41,
    "symbol": "Nb",
    "name": "Niobium",
    "mass": "92.906",
    "period": 5,
    "group": 5,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Light gray, ductile transition metal that turns superconducting at cryogenic temperatures. Used in MRI magnets, particle accelerators, and jet rocket nozzles."
  },
  {
    "number": 42,
    "symbol": "Mo",
    "name": "Molybdenum",
    "mass": "95.95",
    "period": 5,
    "group": 6,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "High-melting metal capable of withstanding extreme temperatures without softening. Essential enzyme cofactor in biological nitrogen fixation."
  },
  {
    "number": 43,
    "symbol": "Tc",
    "name": "Technetium",
    "mass": "(98)",
    "period": 5,
    "group": 7,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "The lowest atomic-numbered element with no stable isotopes. The isotope Tc-99m is the world's most widely utilized medical radioactive imaging tracer."
  },
  {
    "number": 44,
    "symbol": "Ru",
    "name": "Ruthenium",
    "mass": "101.07",
    "period": 5,
    "group": 8,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "A rare member of the platinum group metals. Used to harden platinum and palladium alloys and as an exceptionally versatile chemical catalyst."
  },
  {
    "number": 45,
    "symbol": "Rh",
    "name": "Rhodium",
    "mass": "102.91",
    "period": 5,
    "group": 9,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "One of the rarest and most expensive precious metals on Earth. Highly reflective, used in automotive catalytic converters and brilliant jewelry plating."
  },
  {
    "number": 46,
    "symbol": "Pd",
    "name": "Palladium",
    "mass": "106.42",
    "period": 5,
    "group": 10,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Capable of absorbing up to 900 times its own volume of hydrogen gas! Vital component in catalytic converters, dental crowns, and multi-layer ceramic capacitors."
  },
  {
    "number": 47,
    "symbol": "Ag",
    "name": "Silver",
    "mass": "107.87",
    "period": 5,
    "group": 11,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Possesses the highest electrical conductivity, thermal conductivity, and reflectivity of any known metal. Celebrated since antiquity for bullion and decorative arts."
  },
  {
    "number": 48,
    "symbol": "Cd",
    "name": "Cadmium",
    "mass": "112.41",
    "period": 5,
    "group": 12,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Soft, bluish-white toxic metal historically used in NiCd rechargeable batteries, bright yellow pigments, and nuclear control rods due to high neutron capture."
  },
  {
    "number": 49,
    "symbol": "In",
    "name": "Indium",
    "mass": "114.82",
    "period": 5,
    "group": 13,
    "categoryClass": "cat-post-transition",
    "categoryName": "Post-Transition Metal",
    "state": "Solid",
    "description": "Very soft, malleable metal that emits a characteristic cry when bent. Indium Tin Oxide (ITO) forms the transparent conductive coatings on touchscreens."
  },
  {
    "number": 50,
    "symbol": "Sn",
    "name": "Tin",
    "mass": "118.71",
    "period": 5,
    "group": 14,
    "categoryClass": "cat-post-transition",
    "categoryName": "Post-Transition Metal",
    "state": "Solid",
    "description": "Key metal of the historic Bronze Age when alloyed with copper. Resists corrosion; used extensively for soldering electronics and plating food preservation cans."
  },
  {
    "number": 51,
    "symbol": "Sb",
    "name": "Antimony",
    "mass": "121.76",
    "period": 5,
    "group": 15,
    "categoryClass": "cat-metalloid",
    "categoryName": "Metalloid",
    "state": "Solid",
    "description": "Lustrous gray metalloid known since ancient Egypt as kohl eye cosmetic. Modern uses include lead-acid battery hardening, flame retardants, and microelectronics."
  },
  {
    "number": 52,
    "symbol": "Te",
    "name": "Tellurium",
    "mass": "127.60",
    "period": 5,
    "group": 16,
    "categoryClass": "cat-metalloid",
    "categoryName": "Metalloid",
    "state": "Solid",
    "description": "Brittle, mildly toxic rare metalloid with a silvery sheen. Essential for Cadmium Telluride (CdTe) thin-film photovoltaic solar panels and rewritable optical discs."
  },
  {
    "number": 53,
    "symbol": "I",
    "name": "Iodine",
    "mass": "126.90",
    "period": 5,
    "group": 17,
    "categoryClass": "cat-nonmetal",
    "categoryName": "Reactive Nonmetal",
    "state": "Solid",
    "description": "Deep violet-dark nonmetal that sublimes into beautiful purple vapor. Essential trace nutrient for thyroid hormone synthesis, preventing goiter."
  },
  {
    "number": 54,
    "symbol": "Xe",
    "name": "Xenon",
    "mass": "131.29",
    "period": 5,
    "group": 18,
    "categoryClass": "cat-noble-gas",
    "categoryName": "Noble Gas",
    "state": "Gas",
    "description": "Dense, heavy noble gas capable of forming surprising compounds with fluorine and oxygen. Powers cutting-edge ion propulsion thrusters on deep-space satellites."
  },
  {
    "number": 55,
    "symbol": "Cs",
    "name": "Caesium",
    "mass": "132.91",
    "period": 6,
    "group": 1,
    "categoryClass": "cat-alkali-metal",
    "categoryName": "Alkali Metal",
    "state": "Solid",
    "description": "Extremely reactive, soft golden-silvery metal with a low melting point (28.5°C). The international SI second is officially defined by transitions of the Cs-133 atom."
  },
  {
    "number": 56,
    "symbol": "Ba",
    "name": "Barium",
    "mass": "137.33",
    "period": 6,
    "group": 2,
    "categoryClass": "cat-alkaline-earth",
    "categoryName": "Alkaline Earth",
    "state": "Solid",
    "description": "Soft, reactive alkaline earth metal that produces vibrant emerald green fireworks. Barium sulfate is swallowed as an opaque contrast agent for gastrointestinal X-rays."
  },
  {
    "number": 57,
    "symbol": "La",
    "name": "Lanthanum",
    "mass": "138.91",
    "period": 6,
    "group": 3,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "Namesake of the lanthanide series. Highly malleable metal used in camera lenses to increase refractive index, carbon arc lighting, and hybrid battery electrodes."
  },
  {
    "number": 58,
    "symbol": "Ce",
    "name": "Cerium",
    "mass": "140.12",
    "period": 6,
    "group": 4,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "The most abundant rare-earth metal. Pyrophoric component of lighter flints (mischmetal), polishing powder for precision glass optics, and catalytic converters."
  },
  {
    "number": 59,
    "symbol": "Pr",
    "name": "Praseodymium",
    "mass": "140.91",
    "period": 6,
    "group": 5,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "Soft silvery metal that forms vivid yellow-green salts. Alloyed with neodymium to craft ultra-strong permanent magnets and protective glass for welders' goggles."
  },
  {
    "number": 60,
    "symbol": "Nd",
    "name": "Neodymium",
    "mass": "144.24",
    "period": 6,
    "group": 6,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "Forms the strongest commercially known permanent magnets (Nd₂Fe₁₄B), revolutionizing electric vehicle drive motors, wind turbines, and audio headphones."
  },
  {
    "number": 61,
    "symbol": "Pm",
    "name": "Promethium",
    "mass": "(145)",
    "period": 6,
    "group": 7,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "Extremely rare radioactive lanthanide named after Prometheus. Emits beta radiation, useful for miniature nuclear-powered batteries and glow-in-the-dark luminous paint."
  },
  {
    "number": 62,
    "symbol": "Sm",
    "name": "Samarium",
    "mass": "150.36",
    "period": 6,
    "group": 8,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "Hard silvery metal used in samarium-cobalt (SmCo) permanent magnets that retain strong magnetic fields even at blistering temperatures up to 800°C."
  },
  {
    "number": 63,
    "symbol": "Eu",
    "name": "Europium",
    "mass": "151.96",
    "period": 6,
    "group": 9,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "The most reactive lanthanide element. Phosphors containing europium produce vibrant red and blue colors in screens and anti-counterfeiting ink on Euro banknotes."
  },
  {
    "number": 64,
    "symbol": "Gd",
    "name": "Gadolinium",
    "mass": "157.25",
    "period": 6,
    "group": 10,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "Possesses unusual magnetic properties and the highest thermal neutron capture cross-section. Administered as a premier intravenous contrast agent for MRI scans."
  },
  {
    "number": 65,
    "symbol": "Tb",
    "name": "Terbium",
    "mass": "158.93",
    "period": 6,
    "group": 11,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "Silvery-gray rare earth metal that produces radiant green phosphors in fluorescent lighting and flat-panel displays. Crucial component of Terfenol-D naval sonar transducers."
  },
  {
    "number": 66,
    "symbol": "Dy",
    "name": "Dysprosium",
    "mass": "162.50",
    "period": 6,
    "group": 12,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "Has one of the highest magnetic strengths of any element. Added to neodymium magnets to stop them from demagnetizing under intense heat in electric vehicles."
  },
  {
    "number": 67,
    "symbol": "Ho",
    "name": "Holmium",
    "mass": "164.93",
    "period": 6,
    "group": 13,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "Boasts the highest magnetic moment of any naturally occurring element. Concentrates flux in magnetic poles and emits infrared beams in medical holmium:YAG surgical lasers."
  },
  {
    "number": 68,
    "symbol": "Er",
    "name": "Erbium",
    "mass": "167.26",
    "period": 6,
    "group": 14,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "Forms distinctive rose-pink salts. Erbium-doped fiber amplifiers (EDFAs) amplify optical signals without electrical conversion, powering global transoceanic internet cables."
  },
  {
    "number": 69,
    "symbol": "Tm",
    "name": "Thulium",
    "mass": "168.93",
    "period": 6,
    "group": 15,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "The second least abundant natural lanthanide. Once irradiated in nuclear reactors, it serves as a lightweight, portable radiation source for medical X-ray devices."
  },
  {
    "number": 70,
    "symbol": "Yb",
    "name": "Ytterbium",
    "mass": "173.05",
    "period": 6,
    "group": 16,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "Soft, ductile rare earth metal. Key component in high-stability optical atomic clocks accurate to within one second over billions of years, and fiber laser machining."
  },
  {
    "number": 71,
    "symbol": "Lu",
    "name": "Lutetium",
    "mass": "174.97",
    "period": 6,
    "group": 17,
    "categoryClass": "cat-lanthanide",
    "categoryName": "Lanthanide",
    "state": "Solid",
    "description": "The final, heaviest, and hardest lanthanide element. Its isotope Lu-177 is an advanced, targeted radionuclide therapy agent used to treat neuroendocrine cancer tumors."
  },
  {
    "number": 72,
    "symbol": "Hf",
    "name": "Hafnium",
    "mass": "178.49",
    "period": 6,
    "group": 4,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Excellent neutron absorber used in submarine nuclear reactor control rods. Hafnium oxide is also utilized as a high-k dielectric in modern microchip transistors."
  },
  {
    "number": 73,
    "symbol": "Ta",
    "name": "Tantalum",
    "mass": "180.95",
    "period": 6,
    "group": 5,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Immune to chemical attack at normal temperatures. Extremely valuable for micro-capacitors inside smartphones, laptops, automotive systems, and bio-compatible bone implants."
  },
  {
    "number": 74,
    "symbol": "W",
    "name": "Tungsten",
    "mass": "183.84",
    "period": 6,
    "group": 6,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Boasts the highest melting point of all elements (3,422°C / 6,192°F). Used in classic incandescent bulb filaments, rocket nozzles, and ultra-hard tungsten-carbide drills."
  },
  {
    "number": 75,
    "symbol": "Re",
    "name": "Rhenium",
    "mass": "186.21",
    "period": 6,
    "group": 7,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "One of the rarest elements in Earth's crust. Withstands severe thermal stress, making it an indispensable alloy in jet turbine blades and platinum reforming catalysts."
  },
  {
    "number": 76,
    "symbol": "Os",
    "name": "Osmium",
    "mass": "190.23",
    "period": 6,
    "group": 8,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "The densest naturally occurring element (approx. twice as dense as lead). Extremely hard and unyielding; used in fountain pen tips, electrical contacts, and microscopy stains."
  },
  {
    "number": 77,
    "symbol": "Ir",
    "name": "Iridium",
    "mass": "192.22",
    "period": 6,
    "group": 9,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "The most corrosion-resistant metal known. An iridium-rich sedimentary layer around the world marks the catastrophic asteroid impact that wiped out non-avian dinosaurs."
  },
  {
    "number": 78,
    "symbol": "Pt",
    "name": "Platinum",
    "mass": "195.08",
    "period": 6,
    "group": 10,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Precious, lustrous silvery metal unreactive to acids. Essential catalyst in vehicle catalytic converters, chemical syntheses, fuel cells, and chemotherapy (cisplatin)."
  },
  {
    "number": 79,
    "symbol": "Au",
    "name": "Gold",
    "mass": "196.97",
    "period": 6,
    "group": 11,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "The most malleable and ductile metal known: 1 gram can be beaten into a 1 square meter sheet. Cherished for wealth, jewelry, electronics bonding, and space sunshields."
  },
  {
    "number": 80,
    "symbol": "Hg",
    "name": "Mercury",
    "mass": "200.59",
    "period": 6,
    "group": 12,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Liquid",
    "description": "Known historically as 'quicksilver', the only metallic element that is liquid at standard conditions. Historically used in thermometers, barometers, and dental amalgams."
  },
  {
    "number": 81,
    "symbol": "Tl",
    "name": "Thallium",
    "mass": "204.38",
    "period": 6,
    "group": 13,
    "categoryClass": "cat-post-transition",
    "categoryName": "Post-Transition Metal",
    "state": "Solid",
    "description": "Extremely toxic, soft gray metal historically nicknamed 'The Poisoner's Poison'. Today used in specialty infrared optical lenses and cardiovascular nuclear stress tests."
  },
  {
    "number": 82,
    "symbol": "Pb",
    "name": "Lead",
    "mass": "207.2",
    "period": 6,
    "group": 14,
    "categoryClass": "cat-post-transition",
    "categoryName": "Post-Transition Metal",
    "state": "Solid",
    "description": "Heavy, soft, malleable metal with dense atomic structure. Commonly utilized for radiation shielding in X-ray rooms, lead-acid car batteries, and acoustic dampers."
  },
  {
    "number": 83,
    "symbol": "Bi",
    "name": "Bismuth",
    "mass": "208.98",
    "period": 6,
    "group": 15,
    "categoryClass": "cat-post-transition",
    "categoryName": "Post-Transition Metal",
    "state": "Solid",
    "description": "Fascinating metal that crystallizes in stunning rainbow staircase hopper crystals due to oxide thin-film interference. Active soothing ingredient in Pepto-Bismol."
  },
  {
    "number": 84,
    "symbol": "Po",
    "name": "Polonium",
    "mass": "(209)",
    "period": 6,
    "group": 16,
    "categoryClass": "cat-post-transition",
    "categoryName": "Post-Transition Metal",
    "state": "Solid",
    "description": "Intensely radioactive element discovered by Marie Curie and named after her homeland Poland. Generates strong thermoelectric heat used in space satellite heaters."
  },
  {
    "number": 85,
    "symbol": "At",
    "name": "Astatine",
    "mass": "(210)",
    "period": 6,
    "group": 17,
    "categoryClass": "cat-metalloid",
    "categoryName": "Metalloid",
    "state": "Solid",
    "description": "The rarest naturally occurring element in Earth's crust (less than 1 gram present globally at any instant). Studied for targeted alpha-particle cancer therapies."
  },
  {
    "number": 86,
    "symbol": "Rn",
    "name": "Radon",
    "mass": "(222)",
    "period": 6,
    "group": 18,
    "categoryClass": "cat-noble-gas",
    "categoryName": "Noble Gas",
    "state": "Gas",
    "description": "Radioactive, colorless, odorless noble gas produced by uranium decay in granite soils. Monitored in home basements as the 2nd leading cause of lung cancer worldwide."
  },
  {
    "number": 87,
    "symbol": "Fr",
    "name": "Francium",
    "mass": "(223)",
    "period": 7,
    "group": 1,
    "categoryClass": "cat-alkali-metal",
    "categoryName": "Alkali Metal",
    "state": "Solid",
    "description": "The second-rarest natural element, discovered at the Curie Institute. Highly unstable alkali metal with a half-life of only 22 minutes for its most stable isotope."
  },
  {
    "number": 88,
    "symbol": "Ra",
    "name": "Radium",
    "mass": "(226)",
    "period": 7,
    "group": 2,
    "categoryClass": "cat-alkaline-earth",
    "categoryName": "Alkaline Earth",
    "state": "Solid",
    "description": "Intensely radioactive alkaline earth metal that glows faint blue in the dark. Famously painted on early 20th-century watch dials before radiation risks were understood."
  },
  {
    "number": 89,
    "symbol": "Ac",
    "name": "Actinium",
    "mass": "(227)",
    "period": 7,
    "group": 3,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "Silvery radioactive metal that glows eerily with blue light from air ionization. Namesake of the actinide series, researched for targeted alpha cancer radiation."
  },
  {
    "number": 90,
    "symbol": "Th",
    "name": "Thorium",
    "mass": "232.04",
    "period": 7,
    "group": 4,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "Naturally occurring, weakly radioactive metal named after Norse thunder god Thor. Investigated worldwide as a safer, proliferation-resistant nuclear reactor fuel."
  },
  {
    "number": 91,
    "symbol": "Pa",
    "name": "Protactinium",
    "mass": "231.04",
    "period": 7,
    "group": 5,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "Dense, silvery-gray radioactive actinide that becomes superconducting at ultra-cold temperatures. Primarily used in scientific dating of deep marine sediments."
  },
  {
    "number": 92,
    "symbol": "U",
    "name": "Uranium",
    "mass": "238.03",
    "period": 7,
    "group": 6,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "Primary fuel for civil nuclear fission power generation and naval propulsion. Discovered in 1789 and named after the recently discovered planet Uranus."
  },
  {
    "number": 93,
    "symbol": "Np",
    "name": "Neptunium",
    "mass": "(237)",
    "period": 7,
    "group": 7,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "The first synthetic transuranium element ever created, synthesized via neutron bombardment of uranium at UC Berkeley. Precursor to plutonium production."
  },
  {
    "number": 94,
    "symbol": "Pu",
    "name": "Plutonium",
    "mass": "(244)",
    "period": 7,
    "group": 8,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "Famous fissile material used in nuclear weapons. The Pu-238 isotope powers radioisotope thermoelectric generators (RTGs) on NASA deep-space probes like Voyager and Curiosity."
  },
  {
    "number": 95,
    "symbol": "Am",
    "name": "Americium",
    "mass": "(243)",
    "period": 7,
    "group": 9,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "Synthetic actinide found in millions of household smoke detectors worldwide, where tiny amounts of Am-241 ionize air to sense smoke particles."
  },
  {
    "number": 96,
    "symbol": "Cm",
    "name": "Curium",
    "mass": "(247)",
    "period": 7,
    "group": 10,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "Hard, dense, radioactive element named in honor of Marie and Pierre Curie. Used in alpha proton X-ray spectrometers on Mars rovers to analyze extraterrestrial rocks."
  },
  {
    "number": 97,
    "symbol": "Bk",
    "name": "Berkelium",
    "mass": "(247)",
    "period": 7,
    "group": 11,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "Named after the city and university of Berkeley, California. Highly radioactive actinide used as a target material to synthesize superheavy elements like tennessine."
  },
  {
    "number": 98,
    "symbol": "Cf",
    "name": "Californium",
    "mass": "(251)",
    "period": 7,
    "group": 12,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "One of the heaviest elements produced in weighable quantities. An extraordinarily potent neutron emitter used to start nuclear reactors and scan aircraft structures."
  },
  {
    "number": 99,
    "symbol": "Es",
    "name": "Einsteinium",
    "mass": "(252)",
    "period": 7,
    "group": 13,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "Discovered in the radioactive debris of the first thermonuclear explosion (Ivy Mike) in 1952, and named in tribute to Albert Einstein."
  },
  {
    "number": 100,
    "symbol": "Fm",
    "name": "Fermium",
    "mass": "(257)",
    "period": 7,
    "group": 14,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "The heaviest element that can currently be produced through repetitive neutron capture. Named honoring Enrico Fermi, creator of the first nuclear reactor."
  },
  {
    "number": 101,
    "symbol": "Md",
    "name": "Mendelevium",
    "mass": "(258)",
    "period": 7,
    "group": 15,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "The first element synthesized one single atom at a time. Named in homage to Dmitri Mendeleev, father of the Periodic Table of Elements."
  },
  {
    "number": 102,
    "symbol": "No",
    "name": "Nobelium",
    "mass": "(259)",
    "period": 7,
    "group": 16,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "Synthetic radioactive transuranic metal named after Alfred Nobel, inventor of dynamite and founder of the Nobel Prizes."
  },
  {
    "number": 103,
    "symbol": "Lr",
    "name": "Lawrencium",
    "mass": "(266)",
    "period": 7,
    "group": 17,
    "categoryClass": "cat-actinide",
    "categoryName": "Actinide",
    "state": "Solid",
    "description": "The final element of the actinide series, named after Ernest O. Lawrence, Nobel laureate inventor of the cyclotron accelerator."
  },
  {
    "number": 104,
    "symbol": "Rf",
    "name": "Rutherfordium",
    "mass": "(267)",
    "period": 7,
    "group": 4,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "First superheavy transactinide element. Named after Ernest Rutherford, pioneer of modern nuclear physics and discoverer of the atomic nucleus."
  },
  {
    "number": 105,
    "symbol": "Db",
    "name": "Dubnium",
    "mass": "(268)",
    "period": 7,
    "group": 5,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Synthetic superheavy element named after Dubna, Russia, home of the Joint Institute for Nuclear Research where many superheavy elements were co-discovered."
  },
  {
    "number": 106,
    "symbol": "Sg",
    "name": "Seaborgium",
    "mass": "(269)",
    "period": 7,
    "group": 6,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "First chemical element named after a living person at the time: American nuclear chemist and Nobel laureate Glenn T. Seaborg."
  },
  {
    "number": 107,
    "symbol": "Bh",
    "name": "Bohrium",
    "mass": "(270)",
    "period": 7,
    "group": 7,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Superheavy element synthesized in Germany, named in honor of Danish physicist Niels Bohr, originator of quantum atomic theory."
  },
  {
    "number": 108,
    "symbol": "Hs",
    "name": "Hassium",
    "mass": "(269)",
    "period": 7,
    "group": 8,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Solid",
    "description": "Named after the German state of Hesse (Latin: Hassia). Chemical experiments confirm it forms a volatile tetroxide compound analogous to osmium."
  },
  {
    "number": 109,
    "symbol": "Mt",
    "name": "Meitnerium",
    "mass": "(278)",
    "period": 7,
    "group": 9,
    "categoryClass": "cat-unknown",
    "categoryName": "Superheavy / Unknown",
    "state": "Solid",
    "description": "Named honoring Austrian physicist Lise Meitner, co-discoverer of nuclear fission. Sole element exclusively honoring a non-mythological woman scientist."
  },
  {
    "number": 110,
    "symbol": "Ds",
    "name": "Darmstadtium",
    "mass": "(281)",
    "period": 7,
    "group": 10,
    "categoryClass": "cat-unknown",
    "categoryName": "Superheavy / Unknown",
    "state": "Solid",
    "description": "Superheavy element named after the German city of Darmstadt, where the GSI Helmholtz Centre for Heavy Ion Research is located."
  },
  {
    "number": 111,
    "symbol": "Rg",
    "name": "Roentgenium",
    "mass": "(282)",
    "period": 7,
    "group": 11,
    "categoryClass": "cat-unknown",
    "categoryName": "Superheavy / Unknown",
    "state": "Solid",
    "description": "Group 11 transition metal named in honor of Wilhelm Conrad Röntgen, discoverer of X-rays and recipient of the first Nobel Prize in Physics."
  },
  {
    "number": 112,
    "symbol": "Cn",
    "name": "Copernicium",
    "mass": "(285)",
    "period": 7,
    "group": 12,
    "categoryClass": "cat-transition-metal",
    "categoryName": "Transition Metal",
    "state": "Liquid",
    "description": "Named after Nicolaus Copernicus, father of the heliocentric solar model. Relativistic electron effects predict it may behave as a volatile liquid metal or gas."
  },
  {
    "number": 113,
    "symbol": "Nh",
    "name": "Nihonium",
    "mass": "(286)",
    "period": 7,
    "group": 13,
    "categoryClass": "cat-unknown",
    "categoryName": "Superheavy / Unknown",
    "state": "Solid",
    "description": "The first chemical element discovered in an Asian nation, synthesized at RIKEN in Japan and named after 'Nihon', the Japanese name for Japan."
  },
  {
    "number": 114,
    "symbol": "Fl",
    "name": "Flerovium",
    "mass": "(289)",
    "period": 7,
    "group": 14,
    "categoryClass": "cat-post-transition",
    "categoryName": "Post-Transition Metal",
    "state": "Solid",
    "description": "Synthesized in Dubna and named after the Flerov Laboratory of Nuclear Reactions. Lies near the hypothesized superheavy 'island of nuclear stability'."
  },
  {
    "number": 115,
    "symbol": "Mc",
    "name": "Moscovium",
    "mass": "(290)",
    "period": 7,
    "group": 15,
    "categoryClass": "cat-unknown",
    "categoryName": "Superheavy / Unknown",
    "state": "Solid",
    "description": "Superheavy element named after Moscow Oblast, where Dubna is situated. Extremely radioactive with half-lives measuring under a second."
  },
  {
    "number": 116,
    "symbol": "Lv",
    "name": "Livermorium",
    "mass": "(293)",
    "period": 7,
    "group": 16,
    "categoryClass": "cat-unknown",
    "categoryName": "Superheavy / Unknown",
    "state": "Solid",
    "description": "Named in recognition of Lawrence Livermore National Laboratory and the city of Livermore, California, collaborating leaders in nuclear research."
  },
  {
    "number": 117,
    "symbol": "Ts",
    "name": "Tennessine",
    "mass": "(294)",
    "period": 7,
    "group": 17,
    "categoryClass": "cat-unknown",
    "categoryName": "Superheavy / Unknown",
    "state": "Solid",
    "description": "Superheavy halogen congener named after the state of Tennessee, honoring Oak Ridge National Laboratory, Vanderbilt University, and UT Knoxville."
  },
  {
    "number": 118,
    "symbol": "Og",
    "name": "Oganesson",
    "mass": "(294)",
    "period": 7,
    "group": 18,
    "categoryClass": "cat-unknown",
    "categoryName": "Superheavy / Unknown",
    "state": "Solid",
    "description": "The heaviest element known to science with the highest atomic number (118). Named after Russian nuclear physicist Yuri Oganessian; predicted to be a solid at room temp."
  }
];

// 2. Pastel Category Labels & Classes for the Legend
const categoryLegendList = [
  { name: "Alkali Metal", class: "cat-alkali-metal" },
  { name: "Alkaline Earth", class: "cat-alkaline-earth" },
  { name: "Transition Metal", class: "cat-transition-metal" },
  { name: "Post-Transition Metal", class: "cat-post-transition" },
  { name: "Metalloid", class: "cat-metalloid" },
  { name: "Reactive Nonmetal", class: "cat-nonmetal" },
  { name: "Noble Gas", class: "cat-noble-gas" },
  { name: "Lanthanide", class: "cat-lanthanide" },
  { name: "Actinide", class: "cat-actinide" },
  { name: "Superheavy", class: "cat-unknown" }
];

// DOM references
const periodicGrid = document.getElementById("periodicGrid");
const legend = document.getElementById("legend");
const searchInput = document.getElementById("searchInput");
const infoModal = document.getElementById("infoModal");
const closeBtn = document.getElementById("closeBtn");

// Modal detail fields
const modalBadge = document.getElementById("modalBadge");
const modalNumber = document.getElementById("modalNumber");
const modalSymbol = document.getElementById("modalSymbol");
const modalMass = document.getElementById("modalMass");
const modalName = document.getElementById("modalName");
const modalCategory = document.getElementById("modalCategory");
const infoNumber = document.getElementById("infoNumber");
const infoMass = document.getElementById("infoMass");
const infoState = document.getElementById("infoState");
const infoLocation = document.getElementById("infoLocation");
const modalDescription = document.getElementById("modalDescription");

// =========================================================
// 3. Render the Pastel Category Legend
// =========================================================
function renderLegend() {
  legend.innerHTML = "";
  categoryLegendList.forEach(item => {
    const badge = document.createElement("div");
    badge.className = "legend-badge " + item.class;
    badge.innerHTML = `<span class="legend-circle"></span> ${item.name}`;
    legend.appendChild(badge);
  });
}

// =========================================================
// 4. Render the Periodic Table Grid
// =========================================================
function renderPeriodicTable() {
  periodicGrid.innerHTML = "";

  // Placeholder for Lanthanides in row 6, column 3 (Period 6, Group 3)
  const lanthMarker = document.createElement("div");
  lanthMarker.className = "series-marker";
  lanthMarker.style.gridRow = "6";
  lanthMarker.style.gridColumn = "3";
  lanthMarker.innerHTML = `<span>57-71</span><span class="series-marker-name">La-Lu</span>`;
  periodicGrid.appendChild(lanthMarker);

  // Placeholder for Actinides in row 7, column 3 (Period 7, Group 3)
  const actMarker = document.createElement("div");
  actMarker.className = "series-marker";
  actMarker.style.gridRow = "7";
  actMarker.style.gridColumn = "3";
  actMarker.innerHTML = `<span>89-103</span><span class="series-marker-name">Ac-Lr</span>`;
  periodicGrid.appendChild(actMarker);

  // Render each of the 118 elements
  elements.forEach(element => {
    const card = document.createElement("div");
    card.className = "element-card " + element.categoryClass;

    // Set row and column in the 18-column grid
    if (element.categoryClass === "cat-lanthanide") {
      // Row 9 (separate bottom row for Lanthanides, starting at col 4)
      card.style.gridRow = "9";
      card.style.gridColumn = (element.number - 57 + 4).toString();
    } else if (element.categoryClass === "cat-actinide") {
      // Row 10 (separate bottom row for Actinides, starting at col 4)
      card.style.gridRow = "10";
      card.style.gridColumn = (element.number - 89 + 4).toString();
    } else {
      // Normal elements
      card.style.gridRow = element.period.toString();
      card.style.gridColumn = element.group.toString();
    }

    // Card Content
    card.innerHTML = `
      <span class="card-number">${element.number}</span>
      <span class="card-symbol">${element.symbol}</span>
      <span class="card-name">${element.name}</span>
    `;

    // Tap/Click to show element information
    card.addEventListener("click", () => {
      openElementModal(element);
    });

    periodicGrid.appendChild(card);
  });
}

// =========================================================
// 5. Open Modal with Element Details
// =========================================================
function openElementModal(element) {
  // Update badge styling with the element's pastel category
  modalBadge.className = "modal-badge " + element.categoryClass;
  modalCategory.className = "modal-category-tag " + element.categoryClass;

  // Fill in information
  modalNumber.textContent = element.number;
  modalSymbol.textContent = element.symbol;
  modalMass.textContent = element.mass;
  modalName.textContent = element.name;
  modalCategory.textContent = element.categoryName;

  infoNumber.textContent = element.number;
  infoMass.textContent = element.mass + " u";
  infoState.textContent = element.state;
  infoLocation.textContent = "Period " + element.period + (element.group ? ", Group " + element.group : "");
  modalDescription.textContent = element.description;

  // Show modal
  infoModal.style.display = "flex";
}

// =========================================================
// 6. Close Modal
// =========================================================
function closeElementModal() {
  infoModal.style.display = "none";
}

closeBtn.addEventListener("click", closeElementModal);

// Close when clicking outside the modal box
infoModal.addEventListener("click", (event) => {
  if (event.target === infoModal) {
    closeElementModal();
  }
});

// Close when pressing the 'Escape' key
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeElementModal();
  }
});

// =========================================================
// 7. Simple Search Filter
// =========================================================
searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase().trim();
  const allCards = document.querySelectorAll(".element-card");

  allCards.forEach((card, index) => {
    const el = elements[index];
    const matchName = el.name.toLowerCase().includes(query);
    const matchSymbol = el.symbol.toLowerCase().includes(query);
    const matchNum = el.number.toString() === query;

    if (query === "" || matchName || matchSymbol || matchNum) {
      card.classList.remove("dimmed");
    } else {
      card.classList.add("dimmed");
    }
  });
});

// =========================================================
// 8. Start Application
// =========================================================
renderLegend();
renderPeriodicTable();
