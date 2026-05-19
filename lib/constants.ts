export interface ServiceData {
  slug: string;
  title: string;
  shortDesc: string;
  category: 'heating' | 'cooling' | 'boiler' | 'additional';
  icon: string;
  metaTitle: string;
  metaDesc: string;
  longDesc: string;
  benefits: string[];
  problems: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
}

export interface ServiceArea {
  name: string;
  zipCodes: string[];
  description: string;
}

export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export const BUSINESS_INFO = {
  name: "Polar Bear Furnace and AC",
  phone: "(719) 329-4304",
  phoneRaw: "7193294304",
  address: "3130 Boychuk Ave Ste. 477A, Colorado Springs, CO 80910, USA",
  email: "office@polarbearmechanicalltd.com",
  hours: "Mon - Sun: 24/7 (Emergency Service Available)",
  rating: "4.9",
  reviewsCount: "348",
  experience: "40+ Years Combined",
  facebook: "https://www.facebook.com/mntairllc/?utm_source=chatgpt.com",
  googleMaps: "https://maps.google.com/?q=3130+Boychuk+Ave+Ste.+477A,+Colorado+Springs,+CO+80910"
};

export const SERVICES: Record<string, ServiceData> = {
  "furnace-repair": {
    slug: "furnace-repair",
    title: "Furnace Repair",
    shortDesc: "Fast, reliable diagnostics and repair for all furnace makes and models. Stay warm when it counts.",
    category: "heating",
    icon: "Flame",
    metaTitle: "Furnace Repair Colorado Springs | 24/7 Heating Repairs",
    metaDesc: "Flickering pilot, cold air, or noisy heating? Get fast 24/7 furnace repair in Colorado Springs from Polar Bear Furnace and AC. Call (719) 329-4304.",
    longDesc: "When Colorado Springs temperatures drop, a malfunctioning furnace is more than an inconvenience—it's a home emergency. At Polar Bear Furnace and AC, we provide rapid, reliable, and thorough furnace repair services to restore comfort and safety to your home. Our team represents over 40 years of combined heating experience, handling everything from minor ignition failures to complete electrical diagnostic overhauls.",
    benefits: [
      "24/7 Emergency Dispatch: We are on call around the clock to handle freezing night breakdowns.",
      "All Brands Serviced: Expert knowledge of Lennox, Carrier, Trane, Goodman, Rheem, and more.",
      "Transparent Flat Pricing: No hidden diagnostic traps or post-repair surprises.",
      "Safety Certifications: Full carbon monoxide screening included with every furnace repair call."
    ],
    problems: [
      "Furnace blowing cold air or cycling on and off rapidly.",
      "Squealing, grinding, or popping noises during startup.",
      "Ignition failures, broken pilot lights, or faulty flame sensors.",
      "Clogged blowers, bad limit switches, and malfunctioning thermostats."
    ],
    process: [
      { step: "01", title: "Emergency Dispatch", desc: "Contact our team and a technician is immediately routed with a fully stocked service truck." },
      { step: "02", title: "Full System Diagnostic", desc: "We inspect your thermostat, electrical relays, combustion chamber, and heat exchanger." },
      { step: "03", title: "Flat-Rate Quote", desc: "We explain the failure clearly and provide an upfront price before any repair begins." },
      { step: "04", title: "Precision Repair & Test", desc: "Our tech installs OEM-grade parts and conducts exhaustive safety and carbon monoxide tests." }
    ],
    faqs: [
      { q: "Why is my furnace blowing cold air?", a: "This is usually caused by a dirty air filter blocking airflow, a blown pilot light, a failing thermocouple, or an active high-limit switch safety override. Turn the unit off and call our certified techs to prevent further damage." },
      { q: "How long does a typical furnace repair take?", a: "Most residential furnace repairs are completed within 1 to 2 hours once our technician arrives on site, as we carry common igniters, sensors, valves, and switches in our trucks." },
      { q: "Do you offer emergency after-hours heating services?", a: "Yes, we operate a dedicated 24/7 emergency dispatch line for no-heat situations in the greater Colorado Springs area." }
    ],
    related: ["furnace-maintenance", "furnace-installation", "boiler-repair"]
  },
  "furnace-installation": {
    slug: "furnace-installation",
    title: "Furnace Installation",
    shortDesc: "High-efficiency furnace installations customized for your home size, budget, and local heating needs.",
    category: "heating",
    icon: "PlusCircle",
    metaTitle: "Furnace Installation Colorado Springs | High-Efficiency Heating Systems",
    metaDesc: "Upgrade to a premium, high-efficiency gas or electric furnace. Get expert furnace installations in Colorado Springs with flexible financing options.",
    longDesc: "If your old furnace is over 15 years old, frequently breaks down, or drives your winter energy bills through the roof, it is time for an upgrade. Polar Bear Furnace and AC installs modern, high-efficiency gas and electric heating systems. We mathematically calculate your home's exact heat load to ensure your new system is perfectly sized for peak efficiency and even room-by-room heating in Colorado's high-altitude climate.",
    benefits: [
      "Up to 98% AFUE Systems: Substantially reduce monthly utility bills compared to standard models.",
      "Custom Load Matching: Precise Manual J heat load calculations to match your home's volume.",
      "Flexible Local Financing: Zero down, low monthly payments, and fast online pre-qualification.",
      "Post-Install Inspection: 10-year parts warranty and 1-year dedicated labor guarantee."
    ],
    problems: [
      "Skyrocketing utility bills due to aging, low-efficiency heating.",
      "Uneven room temperatures and cold spots in upper levels.",
      "Recurring repair expenses exceeding 50% of a new system's value.",
      "Outdated, noisy equipment nearing the end of its 15-20 year lifespan."
    ],
    process: [
      { step: "01", title: "In-Home Assessment", desc: "We evaluate your insulation, ductwork capacity, and calculate exact BTU heat demands." },
      { step: "02", title: "Customized System Selection", desc: "Choose from leading variable-speed gas or quiet electric furnaces matching your budget." },
      { step: "03", title: "Flawless Installation", desc: "Our experienced crew removes the old unit and installs the new system to exact municipal code." },
      { step: "04", title: "Commissioning & Tuning", desc: "We test duct static pressure, verify airflow distribution, and walk you through your new smart thermostat." }
    ],
    faqs: [
      { q: "What does AFUE stand for, and why does it matter?", a: "AFUE stands for Annual Fuel Utilization Efficiency. A 96% AFUE furnace converts 96% of its gas directly into heat, wasting only 4%. Upgrading from an old 80% system can save you hundreds of dollars annually." },
      { q: "How long does it take to install a new furnace?", a: "A standard, single-stage residential furnace installation typically takes 4 to 8 hours to complete safely." },
      { q: "Do you offer financing for new heating systems?", a: "Yes! We offer excellent financing plans with low monthly payments and flexible terms to fit your budget." }
    ],
    related: ["furnace-replacement", "furnace-maintenance", "boiler-installation"]
  },
  "furnace-replacement": {
    slug: "furnace-replacement",
    title: "Furnace Replacement",
    shortDesc: "Hassle-free furnace replacement designed to upgrade your comfort, maximize efficiency, and save money.",
    category: "heating",
    icon: "RefreshCw",
    metaTitle: "Furnace Replacement Colorado Springs | Old Heater Upgrades",
    metaDesc: "Time to replace that old, failing heater? Polar Bear Furnace and AC offers seamless, premium furnace replacement in Colorado Springs with expert warranties.",
    longDesc: "When a furnace repair is no longer cost-effective or safe, our furnace replacement service steps in. We make the replacement process entirely stress-free, taking care of permits, venting upgrades, and hazardous material removal. We help you choose a highly reliable, high-performance furnace that delivers consistent, quiet heat even on Colorado's coldest sub-zero winter nights.",
    benefits: [
      "Comprehensive Code Updates: Upgrading old exhaust vents and gas lines to safe modern standards.",
      "Eco-Friendly Disposal: We recycle your old equipment and safely extract old components.",
      "Enhanced Air Quality: New systems feature advanced multi-stage filtration tracks.",
      "Long-term Value: Boost your property value while securing decades of reliable winter warmth."
    ],
    problems: [
      "Cracked heat exchangers that pose severe carbon monoxide leak hazards.",
      "Obsolete parts that can no longer be sourced or repaired economically.",
      "Constant cycling that wears out system electrical relays and burners.",
      "An unreliability factor that leaves you worried about freezing pipes while away."
    ],
    process: [
      { step: "01", title: "Replacement Audit", desc: "We audit your existing unit, diagnose why it failed, and check duct configurations." },
      { step: "02", title: "Modern Options Blueprint", desc: "We present dynamic options, outlining high-efficiency variables vs. baseline solutions." },
      { step: "03", title: "Swift Extraction", desc: "We extract the obsolete equipment safely without leaving dirt, soot, or debris in your utility area." },
      { step: "04", title: "Integration & Handshake", desc: "We hook up new venting, electrical, and gas systems, run strict gas leak tests, and certify operation." }
    ],
    faqs: [
      { q: "Should I replace my furnace and AC at the same time?", a: "Replacing both simultaneously is highly recommended because it saves on labor fees, optimizes airflow through a matched coil, and gives you a single, unified warranty cover." },
      { q: "What are the signs of a cracked heat exchanger?", a: "Signs include a flickering yellow burner flame (instead of crisp blue), a strong chemical or gas smell, excessive soot inside the cabinet, or frequent carbon monoxide detector alarms." },
      { q: "What warranties come with a replacement system?", a: "Our replacements carry a 10-year manufacturer warranty on parts and a 20-year or lifetime warranty on the heat exchanger, along with our in-house labor guarantees." }
    ],
    related: ["furnace-installation", "furnace-maintenance", "ac-replacement"]
  },
  "furnace-maintenance": {
    slug: "furnace-maintenance",
    title: "Furnace Maintenance",
    shortDesc: "Annual furnace tune-ups to extend equipment life, prevent winter breakdowns, and keep your utility bills low.",
    category: "heating",
    icon: "ShieldAlert",
    metaTitle: "Furnace Maintenance & Tune-up Colorado Springs",
    metaDesc: "Keep your furnace running safely and efficiently all winter. Book a comprehensive 26-point furnace tune-up in Colorado Springs. Call today!",
    longDesc: "Just like your car, your furnace requires seasonal tuning to perform reliably. Our comprehensive 26-point furnace tune-up and safety inspection ensures your heating system is running at peak capacity when Colorado Springs' snow starts falling. Regular maintenance is also mandatory to keep your manufacturer's parts warranty active.",
    benefits: [
      "Breakdown Prevention: Find and replace worn parts before they fail on a freezing night.",
      "Utility Bill Reductions: Calibrated burners and clean blowers use significantly less fuel.",
      "Warranty Verification: Keeps active manufacturer parts coverage fully valid.",
      "Combustion Safety: Thorough testing for hazardous gas and carbon monoxide leaks."
    ],
    problems: [
      "Accumulated dirt and dust choking airflow and stressing the blower motor.",
      "Loose electrical connections causing short circuits or thermostat drops.",
      "Uncalibrated burners wasting fuel and producing elevated carbon monoxide levels.",
      "Dry bearings and joints causing premature mechanical friction and failure."
    ],
    process: [
      { step: "01", title: "Flame Inspection", desc: "We verify clean burner combustion and inspect the ignition assembly." },
      { step: "02", title: "Electrical Calibration", desc: "We test voltage limits, tighten wiring connections, and verify contactor integrity." },
      { step: "03", title: "Airflow Assessment", desc: "We clean the blower wheel, measure duct pressures, and replace/clean air filters." },
      { step: "04", title: "Exhaust Safety Scan", desc: "We run specialized tools to scan the heat exchanger for micro-cracks and test flue vent integrity." }
    ],
    faqs: [
      { q: "How often should I get my furnace serviced?", a: "You should schedule professional furnace maintenance once a year, ideally in the early autumn before you turn the heat on for the winter." },
      { q: "Can a dirty filter cause my furnace to shut down?", a: "Yes! A heavily clogged filter restricts air, causing heat to build up inside. This trips the high-limit switch safety control, causing the furnace to cycle off or stop working entirely." },
      { q: "What does a typical tune-up include?", a: "It includes cleaning burners, testing safety limit switches, inspecting heat exchangers, calibrating thermostats, lubricating bearings, testing electrical current draw, and checking gas pressure." }
    ],
    related: ["furnace-repair", "boiler-maintenance", "indoor-air-quality"]
  },
  "ac-repair": {
    slug: "ac-repair",
    title: "AC Repair",
    shortDesc: "Fast air conditioning diagnostics and repairs. Restore ice-cold comfort on hot summer days.",
    category: "cooling",
    icon: "Wind",
    metaTitle: "AC Repair Colorado Springs | 24/7 Air Conditioning Repairs",
    metaDesc: "Failing compressor, refrigerant leak, or weak airflow? Polar Bear Furnace and AC offers fast, expert AC repair in Colorado Springs. (719) 329-4304.",
    longDesc: "When summer peak heat arrives in Colorado Springs, a broken air conditioner makes indoor life miserable. Polar Bear Furnace and AC provides quick, emergency AC repair. Our technicians are fully equipped to diagnose complex electrical faults, address refrigerant leaks, repair worn compressors, and resolve restricted airflow problems, ensuring your home gets cold again in no time.",
    benefits: [
      "Prompt Summer Dispatch: We prioritize no-cooling emergency service requests.",
      "EPA-Certified Technicians: Licensed to handle refrigerant lines and systems safely.",
      "Complete Diagnostic: We don't just patch the leak—we solve the root operational issue.",
      "Comfort Backed Guarantee: Every AC repair comes with local parts & labor backing."
    ],
    problems: [
      "AC running continuously but blowing warm or ambient air.",
      "Evaporator coils freezing up or ice forming on copper refrigerant lines.",
      "Rapid starting and stopping (short-cycling) or clicking sounds from the exterior unit.",
      "Water pooling near the indoor furnace plenum or clogged drain pans."
    ],
    process: [
      { step: "01", title: "Diagnostic Call", desc: "Our EPA-licensed tech arrives, reviews thermostat readings, and checks physical connections." },
      { step: "02", title: "Pressure & Electrical Test", desc: "We measure refrigerant pressure, test capacitor charge, and examine the compressor." },
      { step: "03", title: "Clear Pricing Presentation", desc: "We provide an upfront quote showing exactly what parts are needed before doing work." },
      { step: "04", title: "System Recharge & Repair", desc: "We repair leaks, swap parts, clear condensation drains, and verify temperature drops." }
    ],
    faqs: [
      { q: "Why is my AC blowing warm air?", a: "This is usually caused by a tripped outdoor circuit breaker, a dirty outdoor condenser coil blocking heat release, frozen indoor coils, or low refrigerant levels." },
      { q: "What does it mean if my AC coil is frozen?", a: "A frozen coil is usually caused by restricted airflow (dirty air filters or blocked registers) or a leak in the refrigerant lines, which lowers the temperature below freezing." },
      { q: "Do you repair ductless mini-splits as well?", a: "Yes! We repair all ductless air conditioning and heat pump systems in addition to standard central split air conditioning systems." }
    ],
    related: ["ac-maintenance", "ac-installation", "ductless-mini-splits"]
  },
  "ac-installation": {
    slug: "ac-installation",
    title: "AC Installation",
    shortDesc: "Quiet, energy-efficient air conditioning installations designed to handle the hot high-altitude summers.",
    category: "cooling",
    icon: "CheckSquare",
    metaTitle: "AC Installation Colorado Springs | High-Efficiency Cooling Systems",
    metaDesc: "Upgrade to premium, quiet, energy-efficient central air conditioning. Expert AC installation in Colorado Springs. Free custom estimates!",
    longDesc: "Modern air conditioners use up to 40% less energy than units built just a decade ago. If your cooling system is struggle-prone, loud, or uses outdated R-22 Freon, a new system installation is a smart investment. Polar Bear Furnace and AC installs whisper-quiet central cooling systems designed to optimize indoor relative humidity and temperature flow during hot Colorado Springs summers.",
    benefits: [
      "Premium SEER Ratings: SEER2 systems designed to maximize cooling per watt used.",
      "Environmentally Friendly: We use modern, eco-friendly R-410A / low-GWP refrigerants.",
      "Ductwork Evaluation: We inspect your existing ducts to ensure they can support high-velocity cold airflow.",
      "Comfort Control: Advanced options for variable-speed blowers that run quietly."
    ],
    problems: [
      "Old cooling units using discontinued, prohibitively expensive R-22 Freon.",
      "Struggling to keep the house cool on days when temperatures exceed 90 degrees.",
      "Excessive noise from an old, vibrating compressor located near windows.",
      "Extravagantly high electricity bills during summer months."
    ],
    process: [
      { step: "01", title: "Heat Load Calculation", desc: "We calculate exact solar gain, window dimensions, and home layout factors." },
      { step: "02", title: "Equipment Consultation", desc: "We match you with highly reliable condenser and evaporator coil setups that fit your budget." },
      { step: "03", title: "Clean Installation", desc: "Our crew mounts the condenser, installs clean copper lines, and connects smart controls." },
      { step: "04", title: "Refrigerant & Performance Audit", desc: "We pull a deep vacuum, charge refrigerant to precise manufacturer weights, and run performance checks." }
    ],
    faqs: [
      { q: "What SEER rating should I choose?", a: "In Colorado Springs, a SEER rating between 14 and 16 is typically the sweet spot for budget and return-on-investment, since our cooling seasons are relatively short compared to hot southern climates." },
      { q: "Can I add AC if my home only has a furnace?", a: "Yes! If you have standard forced-air heating ductwork, we can easily install an indoor cooling evaporator coil above your furnace and run copper lines to an outdoor condenser." },
      { q: "Are there utility rebates for high-efficiency AC units?", a: "Yes, Colorado Springs Utilities and federal programs often offer rebates for qualifying energy-efficient AC and heat pump installations." }
    ],
    related: ["ac-replacement", "ac-maintenance", "ductless-mini-splits"]
  },
  "ac-replacement": {
    slug: "ac-replacement",
    title: "AC Replacement",
    shortDesc: "Complete central cooling replacement. Seamless extraction of old systems and replacement with high-performance units.",
    category: "cooling",
    icon: "RotateCw",
    metaTitle: "AC Replacement Colorado Springs | Upgrade Old Cooling Systems",
    metaDesc: "Get a seamless AC replacement in Colorado Springs. Swap out your old, loud, or broken system for a premium, energy-saving model with full warranties.",
    longDesc: "When your compressor fails or a major coil leak develops on a system over 12 years old, simple repairs are rarely the best choice. Polar Bear Furnace and AC provides fast, clean AC replacement services. We carefully extract your outdated system, upgrade outdated electrical disconnect lines, and install a brand new, quiet cooling core that provides decades of worry-free summer comfort.",
    benefits: [
      "Maximized Energy Savings: Upgrading to modern variable-capacity compressors.",
      "Peace of Mind: Standard 10-year parts warranties mean no surprise repair bills.",
      "Noise Reduction: New units feature specialized sweep-wing fan blades and insulation wraps.",
      "Improved Home Value: A certified, energy-efficient cooling system is a huge plus for buyers."
    ],
    problems: [
      "A failed compressor motor, which is the most expensive component in an AC.",
      "Extensive micro-leaks in thin aluminum or copper coils that are costly to fix.",
      "Ineffective humidity control, leaving your home feeling sticky and warm.",
      "Frequent circuit breaker trips caused by an aging compressor drawing too much current."
    ],
    process: [
      { step: "01", title: "Evaluation & Estimate", desc: "We review the old system’s diagnostics and provide a clear replacement proposal." },
      { step: "02", title: "Pre-Installation Prep", desc: "We secure local permits and verify your home electrical panel has the correct breakers." },
      { step: "03", title: "Flawless Swap", desc: "We extract the old outdoor unit and line sets, flush and install brand new lines, and set the new condenser." },
      { step: "04", title: "Double-check & Warranties", desc: "We double-test all seals, charge the coolant, verify airflow volume, and hand over your warranty docs." }
    ],
    faqs: [
      { q: "How long does an air conditioner typically last?", a: "With proper annual maintenance, a quality central air conditioner will last between 12 and 15 years in Colorado Springs." },
      { q: "What is the cost difference between repair and replacement?", a: "If a repair costs more than 50% of the replacement price, or if the unit is over 10 years old and showing multiple weak points, replacing is much more cost-effective long-term." },
      { q: "Does a new AC require new ductwork?", a: "Usually, no. We inspect your existing ducts to ensure they are clean, properly sealed, and have the correct volume capacity to handle the new AC's airflow." }
    ],
    related: ["ac-installation", "ac-maintenance", "furnace-replacement"]
  },
  "ac-maintenance": {
    slug: "ac-maintenance",
    title: "AC Maintenance",
    shortDesc: "Keep your cooling system running at peak performance. Seasonal tune-ups prevent breakdowns and save energy.",
    category: "cooling",
    icon: "ShieldAlert",
    metaTitle: "AC Maintenance & Tune-Up Colorado Springs",
    metaDesc: "Ensure reliable summer cooling with a professional AC tune-up in Colorado Springs. Prevent leaks, clean coils, and boost efficiency. Call today!",
    longDesc: "Spring is the perfect time to schedule professional AC maintenance. A dirty outdoor coil or a slightly low refrigerant charge can force your compressor to work twice as hard, driving up your power bills and causing premature electrical failure. Our meticulous multi-point inspection makes sure your cooling system is ready to handle summer heat waves.",
    benefits: [
      "Up to 15% Lower Utility Bills: Clean, properly charged systems use significantly less power.",
      "Extended Compressor Life: Proper electrical checks reduce high-stress wear and tear.",
      "Leak Prevention: We clear condensation drain pans and lines to prevent structural water damage.",
      "Optimized Air Quality: Professional duct and filter inspections reduce dust and airborne pollen."
    ],
    problems: [
      "Outdoor coils clogged with lawn clippings, cottonwood seeds, and dirt.",
      "Algae buildup clogging the condensation drain, causing indoor overflow.",
      "Slight refrigerant leaks that reduce cooling power over time.",
      "Weak run capacitors that struggle to kickstart the compressor motor."
    ],
    process: [
      { step: "01", title: "Coil Washdown", desc: "We clean the outdoor condenser coils to allow maximum heat release." },
      { step: "02", title: "Electrical Calibration", desc: "We check the starting capacitor, inspect contactor points, and tighten wire lugs." },
      { step: "03", title: "Refrigerant & Drain Scan", desc: "We measure operational pressures, check for micro-leaks, and flush the drain line." },
      { step: "04", title: "Airflow Audit", desc: "We inspect your furnace filter, check blower speed settings, and measure room-to-room temperature splits." }
    ],
    faqs: [
      { q: "Why is it important to clean the outdoor AC coils?", a: "The outdoor unit releases heat from your home. If the coils are coated in dirt or grass, heat is trapped inside the system, causing the compressor to overheat and consume excessive power." },
      { q: "What is a compressor capacitor, and why does it fail?", a: "A capacitor acts like a heavy-duty battery that delivers a power boost to start the compressor. Over time, high summer heat degrades them, causing them to lose charge and prevent your AC from running." },
      { q: "Can I clean my outdoor AC condenser myself?", a: "You can gently spray off loose leaves or grass with a garden hose, but deep professional cleaning requires clearing internal electrical boxes and applying specialized coil cleaners to remove baked-on debris safely." }
    ],
    related: ["ac-repair", "furnace-maintenance", "indoor-air-quality"]
  },
  "boiler-services": {
    slug: "boiler-services",
    title: "Boiler Services",
    shortDesc: "Colorado Springs' premier boiler experts. Specialist boiler repair, installation, and maintenance for radiant heating.",
    category: "boiler",
    icon: "Activity",
    metaTitle: "Boiler Services Colorado Springs | Radiant & Hydronic Heating",
    metaDesc: "We specialize in residential & commercial boiler repairs, replacements, and routine maintenance in Colorado Springs. Rely on 40+ years combined hydronic expertise.",
    longDesc: "Unlike standard forced-air heating, boilers require specialized knowledge of hydronic loops, pressure valves, heat exchangers, and zoning controls. Many HVAC companies avoid boiler systems because they are complex, but Polar Bear Furnace and AC is Colorado Springs' trusted boiler specialist. We service, repair, and install premium gas, oil, and electric boiler systems, ensuring your radiant floors or baseboard heaters run perfectly all winter long.",
    benefits: [
      "Certified Hydronic Specialists: Deep technical expertise in modern and historic hydronic systems.",
      "High-Efficiency Boilers: High-efficiency condensing boilers with up to 95% AFUE ratings.",
      "Radiant Loop Zoning: Custom zoning options to control individual room temperatures.",
      "Exhaust & Code Certification: Exhaust safety checks and pressure relief valve validation."
    ],
    problems: [
      "Baseboard heaters or radiator pipes remaining cold despite the boiler firing up.",
      "Loud knocking, banging, or kettling sounds coming from the main boiler tank.",
      "Slow water leaks around hydronic pipes, circulator pumps, or expansion tanks.",
      "Loss of pressure or constantly needing manual water valve adjustments."
    ],
    process: [
      { step: "01", title: "Pressure Check", desc: "We check the hydronic system pressure and verify the expansion tank is operating correctly." },
      { step: "02", title: "Combustion Analysis", desc: "We run advanced gas sniffers to ensure clean fuel combustion and verify safe flue exhaust venting." },
      { step: "03", title: "Zoning Diagnostics", desc: "We test thermostats, zone valves, and check that individual water loops are flowing properly." },
      { step: "04", title: "System Flush & Fill", desc: "We clear out scale buildup, purge trapped air pockets, and adjust chemical balance for long life." }
    ],
    faqs: [
      { q: "Why is my boiler making a loud banging or 'kettling' noise?", a: "This is usually caused by lime and scale buildup on the boiler's heat exchanger. This restricts water flow, trapping water that boils into steam pockets, producing a loud knocking sound." },
      { q: "How often do boiler systems need to be bled?", a: "You should bleed air pockets from your radiators once or twice a year, especially before the winter heating season begins, to ensure even water heat distribution." },
      { q: "What is the average lifespan of a hydronic boiler?", a: "Cast-iron boilers are incredibly durable and can last 20 to 30 years or more with routine annual maintenance. Modern high-efficiency condensing boilers typically last 15 to 20 years." }
    ],
    related: ["boiler-repair", "boiler-installation", "boiler-maintenance"]
  },
  "boiler-repair": {
    slug: "boiler-repair",
    title: "Boiler Repair",
    shortDesc: "Emergency boiler repairs. Fast diagnosis and resolution of zone valve, expansion tank, and pump failures.",
    category: "boiler",
    icon: "Zap",
    metaTitle: "Boiler Repair Colorado Springs | Hydronic System Service",
    metaDesc: "Loud boiler, leaking pipes, or cold radiators? Contact Colorado Springs' top boiler repair team today. Fast, specialized diagnostic and repair.",
    longDesc: "When a boiler breaks down, it can affect your entire home heating system or even cause water damage. At Polar Bear Furnace and AC, we provide rapid, expert boiler repairs. Our hydronic specialists carry a wide range of circulator pumps, zone valves, pressure relief components, and ignition systems to get your radiant or baseboard heat back up and running fast.",
    benefits: [
      "Fast Hydronic Dispatch: Rapid response to prevent frozen radiator piping.",
      "Accurate Fault Isolation: We find the exact failing sensor or valve to avoid unneeded parts swaps.",
      "Leak Mitigation: Immediate containment of water system leaks.",
      "Safety Assurance: Exhaustive testing of emergency relief systems."
    ],
    problems: [
      "A complete loss of heat or hot water throughout the hydronic loop.",
      "Circulator pump motor seized, rattling, or overheating.",
      "Zone valves failing to open, leaving individual rooms completely cold.",
      "Water leaking from the pressure relief valve or bottom of the boiler tank."
    ],
    process: [
      { step: "01", title: "Hydronic Audit", desc: "We inspect your system's pressure gauges, temperature splits, and water lines." },
      { step: "02", title: "Flame & Sensor Check", desc: "We test ignition electrodes, flame sensors, and clean burner ports." },
      { step: "03", title: "Upfront Options", desc: "We explain whether the issue is electrical, plumbing, or mechanical, and provide a clear quote." },
      { step: "04", title: "Precision Repair", desc: "We install heavy-duty, commercial-grade replacement parts, purge any trapped air, and test the heat flow." }
    ],
    faqs: [
      { q: "Why is water leaking from my boiler's pressure relief valve?", a: "This happens when the pressure inside the boiler exceeds 30 PSI. The main cause is usually a waterlogged expansion tank or a failing auto-fill valve feeding too much water into the loop." },
      { q: "What should I do if my radiators are warm at the bottom but cold at the top?", a: "This is a classic sign of trapped air in the radiator. The air block prevents hot water from rising to the top. Bleeding the radiator with a simple key resolves this immediately." },
      { q: "Do you repair commercial boiler systems?", a: "Yes! We provide complete commercial boiler repair, replacement, and annual maintenance contracts for buildings across Colorado Springs." }
    ],
    related: ["boiler-services", "boiler-maintenance", "furnace-repair"]
  },
  "boiler-installation": {
    slug: "boiler-installation",
    title: "Boiler Installation",
    shortDesc: "Premium, ultra-efficient gas and electric boiler replacements. Custom hydronic designs for cozy radiant heating.",
    category: "boiler",
    icon: "FolderPlus",
    metaTitle: "Boiler Installation Colorado Springs | Modern Hydronic Upgrades",
    metaDesc: "Upgrade to an ultra-quiet, high-efficiency condensing boiler. Expert boiler design and installation in Colorado Springs. Free custom quotes!",
    longDesc: "Older boilers operate at around 60% to 70% efficiency, meaning a third of your heating budget goes straight up the chimney. Polar Bear Furnace and AC installs modern, ultra-efficient condensing boilers that achieve up to 95% AFUE. These sleek, wall-mounted systems use less space, run quietly, and deliver highly consistent, gentle radiant heat.",
    benefits: [
      "Massive Fuel Savings: Save up to 35% on gas bills by upgrading to a condensing boiler.",
      "Compact Wall-Mount Profiles: Save valuable square footage in your basement or utility room.",
      "Perfect Hot Water Output: Modern boilers can act as 'combi' units, providing both home heat and endless hot water.",
      "Custom Zoning Options: Independent thermostats for bedrooms, living rooms, and basements."
    ],
    problems: [
      "Aging, cracked cast-iron boiler blocks that are expensive or impossible to replace.",
      "Outdated venting configurations that do not meet modern building codes.",
      "Struggling to keep up with domestic hot water demands and heating simultaneously.",
      "Frequent, expensive repairs on a system nearing its 20-30 year lifespan."
    ],
    process: [
      { step: "01", title: "Sizing & Heat Load Check", desc: "We calculate the exact BTU load requirements of your home or building." },
      { step: "02", title: "Boiler Selection", desc: "We select the perfect high-efficiency condensing or classic boiler for your budget." },
      { step: "03", title: "Piping & Venting Prep", desc: "We upgrade existing water manifolds, run safe PVC exhaust pipes, and set up new electrical panels." },
      { step: "04", title: "System Commissioning", desc: "We fill the system with treated water, bleed all air zones, balance water flows, and test all functions." }
    ],
    faqs: [
      { q: "What is a 'combi' boiler, and is it right for me?", a: "A combination (combi) boiler provides both high-efficiency home heating and on-demand domestic hot water from a single compact unit, eliminating the need for a separate water heater tank." },
      { q: "Are condensing boilers more expensive to install?", a: "The initial investment is slightly higher due to the need for special PVC venting and condensation drains, but the long-term energy savings quickly make up for the difference." },
      { q: "What brand boilers do you install?", a: "We install top-tier, highly reliable brands such as Lochinvar, Weil-McLain, Navien, and Bosch." }
    ],
    related: ["boiler-services", "boiler-maintenance", "furnace-installation"]
  },
  "boiler-maintenance": {
    slug: "boiler-maintenance",
    title: "Boiler Maintenance",
    shortDesc: "Keep your hydronic boiler running safely. Prevent leaks, maintain fuel efficiency, and ensure even heat.",
    category: "boiler",
    icon: "Settings",
    metaTitle: "Boiler Maintenance & Tune-Up Colorado Springs",
    metaDesc: "Ensure a warm winter and safe operation. Schedule a comprehensive hydronic boiler tune-up and inspection with Polar Bear Furnace and AC. Call today!",
    longDesc: "Boilers are complex systems that operate under high water pressure and temperature. Neglecting annual boiler maintenance can lead to scale buildup, reduced efficiency, rusted components, and dangerous exhaust leaks. Our specialized boiler tune-up keeps your hydronic heating system safe, efficient, and running smoothly.",
    benefits: [
      "Corrosion Control: Early detection of minor leaks before they rust out boiler sections.",
      "Optimal Fuel Combustion: Burner cleaning and air-to-fuel ratio tuning.",
      "Trapped Air Removal: Purging air pockets to ensure even heat throughout your home.",
      "Safety Valve Validation: Testing pressure relief valves and low-water cutoffs."
    ],
    problems: [
      "Scale and mineral deposits insulating the boiler heat exchanger, reducing efficiency.",
      "Corrosion eating away at pipe joints and circulator pump shafts.",
      "Air pockets in hydronic lines blocking hot water flow to radiators.",
      "Failing pressure relief safety valves that could lead to system over-pressurization."
    ],
    process: [
      { step: "01", title: "System Flush Audit", desc: "We check system water chemistry and check for sediment or black sludge buildup." },
      { step: "02", title: "Safety Switch Test", desc: "We test the low-water cutoff switch and manually lift the pressure relief safety valve." },
      { step: "03", title: "Burner Tuning", desc: "We clean burner ports, test pilot or electronic spark ignitions, and check flame signals." },
      { step: "04", title: "Zoning & Flow Sync", desc: "We lubricate pump bearings, verify zone valves operate smoothly, and check radiator temperatures." }
    ],
    faqs: [
      { q: "What is the black sludge in my boiler system, and is it bad?", a: "The black sludge is iron oxide, which forms from internal pipe corrosion. It settles in radiators, restricting water flow and reducing heating efficiency. We can flush the system and add inhibitors to resolve this." },
      { q: "Do boilers require water treatment chemicals?", a: "Yes, adding hydronic inhibitors prevents scale and rust buildup, protecting your boiler's internal components and extending the system's lifespan." },
      { q: "How long does a professional boiler tune-up take?", a: "A comprehensive boiler maintenance and safety inspection typically takes between 1.5 and 2.5 hours to complete." }
    ],
    related: ["boiler-services", "boiler-repair", "furnace-maintenance"]
  },
  "ductless-mini-splits": {
    slug: "ductless-mini-splits",
    title: "Ductless Mini Splits",
    shortDesc: "Energy-efficient, zoned heating and cooling without bulky ductwork. Perfect for older homes, additions, and garages.",
    category: "additional",
    icon: "Layers",
    metaTitle: "Ductless Mini-Splits Colorado Springs | Zoned HVAC Systems",
    metaDesc: "Install energy-efficient, zoned ductless mini-splits. Get year-round heating and cooling without ductwork in Colorado Springs. Call for a quote!",
    longDesc: "Not every home can accommodate bulky metal ductwork. Whether you live in a historic Colorado Springs home, have built a new home addition, or want to convert your garage into a cozy workspace, ductless mini-splits are the perfect solution. These highly efficient heat pumps provide both whisper-quiet cooling and powerful winter heating for individual rooms or zones.",
    benefits: [
      "Individual Zone Comfort: Control temperatures independently in each room.",
      "No Duct Energy Loss: Traditional ductwork loses up to 30% of conditioned air through leaks—mini-splits lose 0%.",
      "Whisper-Quiet Operation: Indoor fan heads run as quietly as rustling leaves (around 19 decibels).",
      "Easy, Clean Installation: Requires only a tiny 3-inch wall opening to connect indoor and outdoor units."
    ],
    problems: [
      "Older homes that lack space to install bulky sheet metal duct systems.",
      "Home additions, sunrooms, or basements that feel uncomfortable year-round.",
      "High cooling bills from central systems cooling empty rooms.",
      "Uneven multi-story temperatures where the upper level is always hot."
    ],
    process: [
      { step: "01", title: "Zoning Blueprint", desc: "We evaluate which rooms need heating and cooling and determine the best mounting spots." },
      { step: "02", title: "Unit Sizing", desc: "We size single-zone or multi-zone systems to handle your specific indoor spaces." },
      { step: "03", title: "Clean Installation", desc: "We mount the indoor unit, run line sets, set the outdoor compressor, and seal all wall openings." },
      { step: "04", title: "Commissioning", desc: "We test lines for leaks, charge the system, and guide you through using your remote or smartphone controls." }
    ],
    faqs: [
      { q: "How many indoor units can connect to a single outdoor compressor?", a: "Depending on the outdoor unit's capacity, you can typically connect between 1 and 8 individual indoor wall, floor, or ceiling cassette units." },
      { q: "Do ductless mini-splits provide heat during freezing winter weather?", a: "Yes! Modern 'hyper-heating' ductless systems are designed to provide efficient, reliable heat even when outdoor temperatures drop below zero." },
      { q: "How often do the filters on mini-splits need to be cleaned?", a: "You should wash the reusable plastic mesh filters inside the indoor units every 4 to 6 weeks to maintain optimal airflow and efficiency." }
    ],
    related: ["ac-repair", "indoor-air-quality", "boiler-services"]
  },
  "indoor-air-quality": {
    slug: "indoor-air-quality",
    title: "Indoor Air Quality",
    shortDesc: "Breathe cleaner, healthier air. We install advanced air purifiers, humidifiers, and UV lights to eliminate allergens.",
    category: "additional",
    icon: "Sun",
    metaTitle: "Indoor Air Quality Solutions Colorado Springs | Air Cleaners & Humidifiers",
    metaDesc: "Eliminate dry air, dust, pollen, and airborne bacteria. We install whole-house humidifiers and UV air purifiers in Colorado Springs. Free home audits!",
    longDesc: "Indoor air can be up to five times more polluted than outdoor air. Because Colorado Springs has a dry, high-altitude climate, dry air and airborne allergens are common issues for local homeowners. Polar Bear Furnace and AC installs whole-house air purifiers, humidifiers, and UV lights that integrate directly with your HVAC system to keep your family healthy and comfortable year-round.",
    benefits: [
      "Deep Allergen Reduction: High-performance air purifiers capture 99% of dust, pollen, pet dander, and mold spores.",
      "Dry Air Relief: Whole-house humidifiers relieve dry skin, sore throats, and protect wood floors and furniture.",
      "UV Germicidal Protection: UV lights inside your ductwork eliminate airborne viruses, bacteria, and mold growth.",
      "Fresh Air Exchange: Energy Recovery Ventilators (ERVs) swap stale indoor air for fresh, filtered outdoor air."
    ],
    problems: [
      "Excessive dust, pet hair, and pollen circulating through supply registers.",
      "Severe dry winter air causing static shocks, dry skin, and sinus issues.",
      "Lingering cooking odors, chemical vapors, or mold smells.",
      "Frequent allergy flare-ups or asthma symptoms while indoors."
    ],
    process: [
      { step: "01", title: "Air Quality Assessment", desc: "We test your indoor relative humidity, dust levels, and chemical volatile organic compounds (VOCs)." },
      { step: "02", title: "Custom Solution Selection", desc: "We recommend a custom system of whole-house humidifiers, high-MERV filters, or UV systems." },
      { step: "03", title: "Flawless Integration", desc: "Our technicians cut into your existing duct plenum to integrate the new air quality systems." },
      { step: "04", title: "System Calibration", desc: "We adjust your smart thermostat settings to automatically run your humidifier and purifier for optimal health." }
    ],
    faqs: [
      { q: "What is the ideal indoor humidity level?", a: "For health and comfort, relative indoor humidity should be maintained between 35% and 50%. In Colorado, dry winter air often drops below 15%, making a whole-house humidifier highly beneficial." },
      { q: "How do UV germicidal lights work inside ductwork?", a: "UV lights emit safe ultraviolet light that breaks down the DNA of mold, viruses, and bacteria as they pass through your HVAC system, preventing them from reproducing." },
      { q: "How often should I change my HVAC air filter?", a: "Standard 1-inch pleated filters should be replaced every 3 months. High-performance, 4-inch media filters can last between 6 and 12 months before needing replacement." }
    ],
    related: ["furnace-maintenance", "ac-maintenance", "ductless-mini-splits"]
  },
  "water-heater-services": {
    slug: "water-heater-services",
    title: "Water Heater Services",
    shortDesc: "Endless hot water. Expert repair, installation, and maintenance for gas, electric, and high-efficiency tankless water heaters.",
    category: "additional",
    icon: "Droplets",
    metaTitle: "Water Heater Services Colorado Springs | Tankless & Tank Systems",
    metaDesc: "No hot water, rust-colored water, or leaking water tank? We repair and install tankless and traditional water heaters in Colorado Springs. Call today!",
    longDesc: "We rely on hot water for showers, washing dishes, and doing laundry. When your water heater breaks down, it disrupts your entire routine. At Polar Bear Furnace and AC, we provide complete water heater services. We repair, service, and install traditional storage tank water heaters as well as modern, high-efficiency tankless water heaters.",
    benefits: [
      "Tankless Upgrades: Endless hot water, lower energy bills, and a compact design.",
      "Fast Leak Containment: Immediate repair of leaking valves, element failures, or line ruptures.",
      "Water Tank Flushing: Annual flushing to remove sediment and scale buildup for longer equipment life.",
      "Safety Inspections: Double-testing gas valves, thermocouple lines, and temperature relief safety systems."
    ],
    problems: [
      "Running out of hot water quickly during a shower.",
      "Rust-colored, metallic-smelling, or cloudy water coming from hot water taps.",
      "Water pooling around the base of the tank, indicating a rusted, leaking inner liner.",
      "Rattling or popping sounds inside the tank caused by boiling sediment."
    ],
    process: [
      { step: "01", title: "Diagnostic Audit", desc: "We inspect your thermostat settings, heating elements, pilot assembly, and pressure valves." },
      { step: "02", title: "Options Presentation", desc: "We explain if the system can be repaired or if replacing is the more cost-effective choice." },
      { step: "03", title: "Seamless Swap or Repair", desc: "We repair failing valves or drain the old tank and install the new system." },
      { step: "04", title: "Safety & Performance Check", desc: "We verify water temperature limits, check venting drafts, and run full leak tests." }
    ],
    faqs: [
      { q: "Should I choose a traditional tank or a tankless water heater?", a: "Tankless water heaters cost more upfront but save energy by only heating water when you turn on a tap. They also provide endless hot water and last up to twice as long as traditional tanks." },
      { q: "How long does a traditional storage tank water heater last?", a: "Most standard residential tank water heaters last between 8 and 12 years before the inner tank begins to rust and leak." },
      { q: "Why is my water heater making a popping or rumbling noise?", a: "This is caused by sediment and mineral scale accumulating at the bottom of the tank. The sediment traps hot water beneath it, which boils and pops like popcorn." }
    ],
    related: ["boiler-services", "commercial-hvac", "furnace-repair"]
  },
  "swamp-cooler-services": {
    slug: "swamp-cooler-services",
    title: "Swamp Cooler Services",
    shortDesc: "Affordable, eco-friendly cooling for Colorado's dry climate. Expert swamp cooler maintenance, repair, and seasonal conversions.",
    category: "additional",
    icon: "Compass",
    metaTitle: "Swamp Cooler Services Colorado Springs | Evaporative Cooling",
    metaDesc: "Keep your evaporative swamp cooler running efficiently. We offer seasonal spring start-ups, fall winterization, and fast repairs in Colorado Springs.",
    longDesc: "Because Colorado Springs has a dry, low-humidity climate, swamp coolers (evaporative coolers) are a highly effective and affordable alternative to central air conditioning. They use up to 75% less electricity than traditional AC units. Polar Bear Furnace and AC provides complete swamp cooler services, including seasonal startups, winterization shutdowns, pad replacement, and motor repairs.",
    benefits: [
      "Low Electricity Bills: Uses only a fraction of the electricity required by a traditional central AC system.",
      "Healthy Indoor Humidity: Adds refreshing moisture to dry Colorado air, making your home more comfortable.",
      "Fresh Air Ventilation: Constantly circulates fresh, cooled outdoor air throughout your living spaces.",
      "Eco-Friendly System: Uses only water and a fan to cool your home—no synthetic chemical refrigerants."
    ],
    problems: [
      "Swamp cooler blowing warm, musty-smelling air instead of cool drafts.",
      "Water leaking from the roof unit or down exterior siding.",
      "Water pump failures or mineral scale buildup on cooler pads.",
      "Failing to winterize the unit, leading to frozen water lines and roof leaks."
    ],
    process: [
      { step: "01", title: "Pad & Fan Check", desc: "We check the condition of the evaporative pads, clean out debris, and inspect the blower belt." },
      { step: "02", title: "Water System Diagnostics", desc: "We test the water pump, adjust the float valve, and check water lines for mineral scale blockage." },
      { step: "03", title: "Motor & Belt Alignment", desc: "We lubricate the motor bearings, align the pulley belt, and test two-speed fan functions." },
      { step: "04", title: "Seasonal Startup/Shutdown", desc: "We turn on the water line in the spring, or drain lines and cover the unit in the fall to prevent freezing." }
    ],
    faqs: [
      { q: "How does a swamp cooler work?", a: "A swamp cooler pulls warm, dry outdoor air through water-saturated pads. The water evaporates, drawing heat from the air and lowering its temperature, and the fan circulates the cool, humid air." },
      { q: "Do I need to leave windows open when running a swamp cooler?", a: "Yes! Swamp coolers push air *into* your home, so you must leave a few windows open slightly to let the old air escape, allowing a constant flow of fresh, cool air." },
      { q: "When should I winterize my swamp cooler?", a: "You should winterize your swamp cooler in mid-to-late autumn, before the first major freeze, to drain all water lines and prevent burst pipes." }
    ],
    related: ["ac-repair", "indoor-air-quality", "water-heater-services"]
  },
  "commercial-hvac": {
    slug: "commercial-hvac",
    title: "Commercial HVAC",
    shortDesc: "Keep your business comfortable. Professional heating, cooling, and boiler services tailored for commercial properties.",
    category: "additional",
    icon: "Briefcase",
    metaTitle: "Commercial HVAC Services Colorado Springs | Heating & Cooling",
    metaDesc: "Minimize downtime and keep your commercial property comfortable. Expert rooftop units, commercial boiler repairs, and HVAC maintenance in Colorado Springs.",
    longDesc: "Commercial HVAC systems are much larger and operate under higher stresses than residential systems. Whether you manage a retail space, an office building, a school, or a multi-family complex, reliable heating and cooling are essential for your business's success. Polar Bear Furnace and AC provides complete commercial HVAC repair, replacement, and custom maintenance contracts.",
    benefits: [
      "Minimal Business Downtime: Fast, priority commercial scheduling to keep your business running smoothly.",
      "Rooftop Unit (RTU) Experts: Comprehensive repairs and replacements of standard commercial rooftop systems.",
      "Commercial Boiler Specialists: Unmatched hydronic engineering expertise for large-scale properties.",
      "Energy Audits & Maintenance: Tailored commercial maintenance contracts to lower overhead and extend equipment life."
    ],
    problems: [
      "Struggling rooftop package units leading to hot or cold zones across offices.",
      "Failed exhaust fans or ventilation hoods violating local building codes.",
      "High utility costs from older, poorly maintained commercial heating loops.",
      "Large-scale commercial boiler shutdowns, threatening tenant comfort and building safety."
    ],
    process: [
      { step: "01", title: "Commercial Site Review", desc: "We review your commercial building's blueprints, active zones, and existing rooftop setups." },
      { step: "02", title: "Custom Service Proposal", desc: "We present dynamic options, outlining emergency repair paths or custom maintenance contracts." },
      { step: "03", title: "Safe, Compliant Service", desc: "Our technicians use heavy cranes, proper safety gear, and adhere strictly to OSHA and local building codes." },
      { step: "04", title: "Comprehensive Testing", desc: "We verify system zoning, test air balancing, run exhaust checks, and document all services for your records." }
    ],
    faqs: [
      { q: "Do you service commercial rooftop package units?", a: "Yes, our certified technicians are fully trained to service, repair, and install all commercial rooftop gas/electric package systems up to 25 tons." },
      { q: "What is a commercial planned maintenance agreement?", a: "It is a customized service plan where we perform quarterly or semi-annual maintenance on your HVAC systems to prevent unexpected breakdowns and maximize efficiency." },
      { q: "Can you help balance the airflow in our office building?", a: "Yes, we provide commercial air balancing services to ensure even air distribution, resolving hot and cold spots across different office zones." }
    ],
    related: ["boiler-services", "furnace-repair", "ac-repair"]
  }
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: "Colorado Springs",
    zipCodes: ["80903", "80904", "80905", "80906", "80907", "80909", "80910", "80911", "80915", "80916", "80917", "80918", "80919", "80920", "80921", "80922", "80923", "80924", "80925", "80927", "80938", "80951"],
    description: "As our primary headquarters and home base, we serve all neighborhoods across Colorado Springs with 24/7 emergency furnace, AC, and boiler repairs."
  },
  {
    name: "Monument",
    zipCodes: ["80132"],
    description: "Located just north of the Springs, we provide Monument residents with high-altitude heating systems and high-efficiency boiler services."
  },
  {
    name: "Fountain",
    zipCodes: ["80817"],
    description: "Serving Fountain and Fort Carson with fast response times and affordable, transparent pricing for all residential HVAC systems."
  },
  {
    name: "Falcon",
    zipCodes: ["80831"],
    description: "Helping Falcon families stay comfortable year-round with comprehensive heating and cooling system installations and swamp cooler services."
  },
  {
    name: "Peyton",
    zipCodes: ["80831"],
    description: "Providing Peyton's growing community with reliable, fast heating repairs, ductless mini-split installations, and water heater services."
  },
  {
    name: "Black Forest",
    zipCodes: ["80908"],
    description: "Specialized boiler and high-performance heating services designed for the unique rural and forest properties of Black Forest."
  },
  {
    name: "Woodland Park",
    zipCodes: ["80863", "80866"],
    description: "Up in the mountains, we provide Woodland Park with reliable boiler repair and furnace installation services to withstand cold winter nights."
  },
  {
    name: "Security-Widefield",
    zipCodes: ["80911", "80925"],
    description: "Quick, local response times for furnace repairs, AC tune-ups, and emergency water heater replacements across Security-Widefield."
  }
];

export const REVIEWS: Review[] = [
  {
    name: "Thomas D.",
    location: "Colorado Springs, CO",
    rating: 5,
    text: "Our radiant boiler heat went out during a massive blizzard. Other HVAC companies said they don't do boilers, but Polar Bear had a tech at our house in under two hours. He fixed the failing circulator pump and got our radiators heating again in no time. Absolutely saved us!",
    service: "Boiler Repair"
  },
  {
    name: "Sarah M.",
    location: "Monument, CO",
    rating: 5,
    text: "We upgraded to a high-efficiency furnace and central AC with Polar Bear. The crew was professional, cleaned up after themselves, and walked us through the financing options. Our gas bills have already dropped by 30%! Highly recommend them.",
    service: "Furnace & AC Installation"
  },
  {
    name: "David K.",
    location: "Fountain, CO",
    rating: 5,
    text: "Great experience with their swamp cooler service. They did the spring startup and replaced the pads quickly. Super honest pricing and very friendly technicians who explained how to run it efficiently.",
    service: "Swamp Cooler Service"
  },
  {
    name: "Elena R.",
    location: "Black Forest, CO",
    rating: 5,
    text: "Polar Bear is the only company I trust with my historic home's cast iron boiler. They are incredibly knowledgeable about hydronic loops and have kept my system running perfectly for years. 5 stars all the way!",
    service: "Boiler Maintenance"
  },
  {
    name: "James L.",
    location: "Colorado Springs, CO",
    rating: 5,
    text: "Excellent commercial HVAC service. They serviced our office's rooftop AC package units. The technicians were professional, fast, and didn't disrupt our business operations. Great price and fast service.",
    service: "Commercial HVAC Service"
  }
];

export const HOMEPAGE_FAQS = [
  {
    q: "How often should my heating and cooling systems be serviced?",
    a: "We recommend scheduling professional maintenance twice a year: in the early autumn for your heating system (furnace or boiler) and in the spring for your cooling system (central AC or swamp cooler). Regular tune-ups prevent unexpected breakdowns and lower your energy bills."
  },
  {
    q: "Do you offer 24/7 emergency HVAC repair?",
    a: "Yes! We operate a 24/7 emergency dispatch line for no-heat or no-cooling situations, and gas or boiler leaks across Colorado Springs and surrounding areas. Call us directly at (719) 329-4304."
  },
  {
    q: "What HVAC brands do you service and install?",
    a: "We service all major brands of furnaces, air conditioners, and boilers, including Lennox, Carrier, Trane, Goodman, Navien, Lochinvar, Bosch, Rheem, and Bryant. We install premium, high-efficiency equipment with full parts and labor warranties."
  },
  {
    q: "Do you specialize in radiant boiler heating?",
    a: "Absolutely! Boiler and hydronic heating systems are a major specialty of ours. Our team has extensive training and over 40 years of combined experience in boiler repairs, zoned radiant heat engineering, and high-efficiency condensing boiler installations."
  },
  {
    q: "What financing options do you offer for new installations?",
    a: "We partner with leading local lenders to offer flexible financing plans, including zero-down options, low monthly payments, and fast online pre-qualifications to fit your household budget."
  }
];
