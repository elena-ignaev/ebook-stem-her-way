import { useState, useEffect, useRef } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const T = {
  // Neutrals
  white: "#FFFFFF",
  cream: "#FCFAFF",
  surface: "#F7F3FC",
  border: "#E8DFF3",

  // Brand
  primary: "#D85CCB",       // pink-purple
  primaryDark: "#B84AC2",
  primaryLight: "#F7D9F6",

  // Secondary
  secondary: "#7D73FF",     // lavender blue
  secondaryDark: "#5F55E8",
  secondaryLight: "#ECEBFF",

  // Accent
  accent: "#FF9EC9",        // blush pink
  accentSoft: "#FFE5F2",

  // Text
  text: "#2D2340",
  textSecondary: "#6E6485",
  textMuted: "#9E95B3",

  // States
  success: "#5DBE8A",
  successBg: "#EEF9F3",

  warning: "#E8A54D",
  warningBg: "#FFF6E8",

  danger: "#E86D88",
  dangerBg: "#FFF0F4",

  // Category colors
  p1: "#D85CCB",
  p2: "#7D73FF",
  p3: "#FF9EC9",
  p4: "#5FB9FF",
  p5: "#8A78F5",

  p1bg: "#FFF0FD",
  p2bg: "#F3F2FF",
  p3bg: "#FFF3F8",
  p4bg: "#F0F8FF",
  p5bg: "#F4F1FF",
};

const partColor = id =>
  [T.p1, T.p2, T.p3, T.p4, T.p5][id - 1] || T.primary;

const partBg = id =>
  [T.p1bg, T.p2bg, T.p3bg, T.p4bg, T.p5bg][id - 1] || T.surface;

const diffColor = d =>
  d === "Easy"
    ? ["#4DAA74", "#F0FAF4"]
    : d === "Medium"
    ? ["#D49A3A", "#FFF7EA"]
    : ["#E46A86", "#FFF1F5"];

    
// ─── PART METADATA ───────────────────────────────────────────────────────────
const PARTS = [
  { id:1, title:"Science at Home",           sub:"Kitchen chemistry & everyday physics",       color:partColor(1), light:partBg(1), icon:"⚗️" },
  { id:2, title:"Girls in the School Lab",   sub:"Real techniques, real science",              color:partColor(2), light:partBg(2), icon:"🔬" },
  { id:3, title:"Engineering & Design",      sub:"Build, test, improve, repeat",               color:partColor(3), light:partBg(3), icon:"⚙️" },
  { id:4, title:"Math, Coding & Logic",      sub:"Patterns, programs, and sharp thinking",     color:partColor(4), light:partBg(4), icon:"💡" },
  { id:5, title:"STEM for a Better World",   sub:"Science with purpose",                       color:partColor(5), light:partBg(5), icon:"🌱" },
];

const EBOOK_PDF = `${import.meta.env.BASE_URL}ebook/ebook-full.pdf`;

// ─── EXPERIMENTS DATA (all 50) ───────────────────────────────────────────────
const E = [
  {id:"e01",p:1,n:1,title:"Baking Soda Volcano",tag:"Making Chemistry Visible",time:"20–30 min",diff:"Easy",
   mat:["Plastic bottle or clay cup","3–4 tbsp baking soda","½ cup white vinegar","Red or orange food coloring","Dish soap (optional)","Tray to catch overflow","Playdough (optional, for volcano shape)"],
   steps:["Build a volcano shape around your bottle using playdough or clay, leaving the opening at the top exposed. Or simply place a cup on a tray.","Pour the baking soda into the bottle.","In a separate cup, mix food coloring into the vinegar.","Add a small squirt of dish soap into the bottle with the baking soda.","Pour the colored vinegar into the bottle and step back — watch it erupt!","Observe: how long does the reaction last? Does dish soap change the foam?"],
   sci:"The reaction between baking soda (base) and vinegar (acid) produces CO₂ gas rapidly, which bubbles up through the liquid making 'lava'. Equation: NaHCO₃ + CH₃COOH → sodium acetate + H₂O + CO₂. Dish soap traps bubbles, making foam last longer.",
   tags:["Acid-Base","Chemical Reactions","Gas Production"],
   more:["Try different amounts — what changes?","Warm vs cold vinegar — which reacts faster?","Does lemon juice also react with baking soda?"],
   prompt:"What did you observe? How long did the reaction last? Did the dish soap make a difference? What happened when you changed the amounts?"},
  {id:"e02",p:1,n:2,title:"Mini Lava Lamp",tag:"Oil, Water & Density",time:"15–20 min",diff:"Easy",
   mat:["Clear glass or tall jar","Water","Vegetable or baby oil","Alka-Seltzer tablet","Food coloring (blue or green look great)","Flashlight (optional)"],
   steps:["Fill the container about ¼ full with water. Add food coloring and stir.","Slowly pour oil until ¾ full. Pour slowly and watch the layers form!","Wait until oil and water fully separate into distinct layers.","Break an Alka-Seltzer tablet into small pieces and drop one in.","Watch colored water bubbles rise and fall! Add another piece when bubbling stops.","Hold a flashlight underneath for a beautiful glowing lamp in a dim room."],
   sci:"Oil floats on water because it's less dense. They don't mix because water molecules are polar and oil molecules are non-polar — opposites repel. The Alka-Seltzer reacts with water to produce CO₂ bubbles that carry colored water droplets up through the oil; when bubbles pop, droplets sink again.",
   tags:["Density","Immiscibility","Polarity"],
   more:["Try salt water instead of plain water — how does density change things?","Can you create a three-color lamp with layered liquids?","What happens if you tilt the jar?"],
   prompt:"Describe what you saw as the layers separated. How did the Alka-Seltzer change the system? What did the rising and falling bubbles look like?"},
  {id:"e03",p:1,n:3,title:"Rainbow in a Glass",tag:"Refraction and Light",time:"10–15 min",diff:"Easy",
   mat:["Clear glass or bowl of water","Small mirror","Sheet of white paper","Direct sunlight","OR: old CD + flashlight"],
   steps:["Fill a clear glass or bowl with water and place near a sunlit window.","Hold a small mirror in the water, tilted toward the sunlight.","Move the mirror slowly until a rainbow appears on the wall or ceiling.","Hold white paper in the path of the rainbow to see it clearly.","Try different mirror angles. What changes the rainbow's position?","Alternative: shine a flashlight on an old CD against a white wall."],
   sci:"White light is a mixture of all colors: red, orange, yellow, green, blue, indigo, violet (ROY G BIV). When light passes from air into water, it bends (refraction). Different colors bend by different amounts — violet most, red least. This spreading into component colors is dispersion. Natural rainbows form the same way in raindrops.",
   tags:["Refraction","Dispersion","Visible Spectrum","Wavelength"],
   more:["Try at different times of day — does the sun angle change the rainbow?","What causes a double rainbow?","Try with a garden hose outdoors."],
   prompt:"Describe the colors you saw. Were all equally bright? Did you see ROY G BIV? What happened when you changed the mirror angle?"},
  {id:"e04",p:1,n:4,title:"The Floating Egg",tag:"Density and Salinity",time:"15 min",diff:"Easy",
   mat:["2 tall glasses or jars","2 raw eggs","Water","6–8 tbsp salt","Spoon for stirring","Food coloring (optional for the layered challenge)"],
   steps:["Fill both glasses with water.","In the first glass, dissolve 6–8 tablespoons of salt, stirring until no more dissolves.","Leave the second glass with plain fresh water.","Gently lower one egg into the fresh water. Observe — does it float or sink?","Gently lower the other egg into the salt water. Observe!","Bonus: Can you layer salt water (blue dye) under fresh water (red dye) and make the egg hover in the middle?"],
   sci:"Objects float when their density is less than the liquid. A raw egg is denser than fresh water, so it sinks. Salt dissolved in water increases its density. With enough salt, the water becomes denser than the egg — and it floats. This is why the Dead Sea (10× saltier than the ocean) is famous for effortless floating.",
   tags:["Density","Buoyancy","Salinity","Archimedes' Principle"],
   more:["What is the minimum salt needed to float the egg?","What other objects float in salt water but not fresh?","Compare your salt concentration to the Dead Sea's."],
   prompt:"What happened in each glass? Did the egg float or sink immediately? Could you feel the difference in weight between the two glasses of water?"},
  {id:"e05",p:1,n:5,title:"Cloud in a Jar",tag:"Weather in Miniature",time:"15–20 min",diff:"Easy",
   mat:["Large clean glass jar","Very hot water (adult help needed!)","Ice cubes","Plate or shallow dish","Hairspray (optional — improves results)"],
   steps:["Pour about 3 cm of very hot water into the bottom of the jar. Swirl to warm the glass.","If using hairspray, give a very brief one-second spray into the jar.","Quickly place a plate of ice cubes on top of the jar opening.","Wait 30–60 seconds. Watch the interior carefully.","A cloud should form inside the jar! Remove the ice plate and watch it drift out.","Repeat without hairspray. What changes?"],
   sci:"Hot water evaporates, sending water vapor up. The ice cools the top. When warm moist air meets cold air, water vapor condenses into tiny droplets — but condensation needs tiny particles to form around (condensation nuclei). In nature these are dust or pollen; hairspray provides them. Millions of tiny suspended droplets = a cloud.",
   tags:["Evaporation","Condensation","Cloud Formation","Water Cycle"],
   more:["What happens with cold water instead of hot?","Research cumulus, stratus, and cirrus clouds — draw and label each.","What role does condensation play in the global water cycle?"],
   prompt:"Describe the cloud: how did it form? How long did it take? What did it look like when you removed the ice? Better with or without hairspray?"},
  {id:"e06",p:1,n:6,title:"Capillary Action",tag:"How Plants Drink",time:"10 min + 1–2 days",diff:"Easy",
   mat:["Celery stalks with leaves","White carnations or daisies","Glasses of water","Food coloring (red, blue, yellow)","Knife and cutting board (adult help)"],
   steps:["Fill three or four glasses with water. Add different food coloring to each.","Ask an adult to cut the bottom of each celery stalk at a diagonal angle.","Place one celery stalk in each colored glass. Do the same with white flowers.","Leave in a warm bright spot and check every few hours.","Within hours, you'll see color in the leaves. Full effect: 1–2 days.","Bonus: split a flower stem and put each half in a different color!"],
   sci:"Plants have xylem vessels — tiny tubes carrying water from roots to leaves. Water is pulled upward by cohesion (water molecules attract each other) and adhesion (water sticks to tube walls), combined with transpiration (evaporation through leaf pores). Together these create a continuous upward pull, no pump needed. The colored water traces this path.",
   tags:["Capillary Action","Cohesion","Adhesion","Transpiration","Xylem"],
   more:["Cut a colored celery cross-section after 24 hours — can you see the xylem vessels?","Does sparkling water absorb differently from plain water?","How high can water travel in a plant? Research the tallest trees."],
   prompt:"When did you first notice color appearing? How far did it travel? What did the cross-section look like? Were some colors absorbed faster?"},
  {id:"e07",p:1,n:7,title:"Lemon Battery",tag:"Electricity from Chemistry",time:"30–45 min",diff:"Medium",
   mat:["4–6 fresh lemons","Copper coins or thick copper wire","Zinc (galvanized) nails — from hardware store","Small LED light","Alligator clip wires or stripped wire","Optional: voltmeter"],
   steps:["Roll each lemon firmly on the table to release more juice inside.","Push one copper coin and one zinc nail into each lemon — about 2 cm apart. Don't let them touch inside.","Connect lemons in a chain: zinc nail of #1 → copper of #2, zinc of #2 → copper of #3, and so on.","Connect the zinc end and copper end of the chain to the two legs of your LED.","The LED should glow! If not: check connections, add more lemons.","With a voltmeter, measure each lemon's voltage (≈ 0.7–0.9 volts each)."],
   sci:"A battery moves electrons through a circuit via chemical reactions. In your lemon: citric acid is the electrolyte; the zinc nail (anode) loses electrons into the circuit; the copper coin (cathode) accepts them. Electrons flow through your wire — that's electric current. Series connection adds voltages. Alessandro Volta invented the first battery in 1800 using this same principle.",
   tags:["Electrochemistry","Electrolytes","Electric Current","Voltage","Series Circuits"],
   more:["Try other fruits: orange, potato, grapefruit. Which produces most electricity?","Could you power a small digital clock with enough batteries?","Measure and compare voltage from each fruit type."],
   prompt:"Did the LED light up on the first try? How many lemons were needed? Did any fruits produce a brighter glow? What happened to the nails and coins after the experiment?"},
  {id:"e08",p:1,n:8,title:"Chromatography",tag:"Hidden Colors in Ink",time:"20–40 min",diff:"Easy",
   mat:["Coffee filters or white paper towels cut into strips 2 cm × 15 cm","Water-soluble felt-tip markers (black, brown, purple work best)","Pencil","Glass of water","Tape"],
   steps:["Cut paper into strips about 2 cm wide and 15 cm long.","About 2 cm from the bottom, draw a thick dot or line with one marker color. Different color on each strip.","Tape each strip to a pencil resting across the top of a glass. The strip hangs down, with the ink mark just above the water.","Wait 20–30 minutes. Water travels up and carries colors with it.","Remove strips when water nears the top. Let them dry.","Observe: how many colors separated from each marker?"],
   sci:"Marker ink is a mixture of several dye molecules. Water (the mobile phase) carries dyes up the paper (stationary phase), but different molecules travel at different speeds depending on how strongly they cling to paper fibers and how well they dissolve in water. Faster molecules travel farther. Black ink often separates into blue, red, yellow, and brown — it was never just black!",
   tags:["Chromatography","Mixture Separation","Polarity","Solubility"],
   more:["Try permanent markers using rubbing alcohol as solvent instead.","Use different solvents: salt water, milk, vinegar. How do results change?","Can you identify the colors mixed to make each ink, then try to recreate it?"],
   prompt:"Which marker surprised you most? List all colors you found in each ink. Did any colors blur together? Where did each color end up on the strip?"},
  {id:"e09",p:1,n:9,title:"Simple Sundial",tag:"Reading Time from Shadows",time:"30 min build + all day",diff:"Easy",
   mat:["Large cardboard or poster board","Pencil or straight stick (the gnomon)","Compass (to find north)","Clock or phone (to mark hours)","Ruler and permanent marker"],
   steps:["Push the pencil vertically through the center of the cardboard.","Use a compass to orient the cardboard facing north. Place in a consistently sunny outdoor spot.","At each hour (9am, 10am, 11am...), trace the shadow and label it with the time.","Do this for as many hours as possible in one full day.","The next day, read time from the shadow without a clock!","Observe how shadow length and direction change throughout the day."],
   sci:"Earth rotates 360° in 24 hours — 15° per hour — making the sun appear to sweep east to west. The gnomon's shadow sweeps the other way across the dial. Sundials are among humanity's oldest instruments. Ancient Egyptians, Greeks, and Chinese all used them, and they remained the primary timekeeping method for thousands of years before mechanical clocks.",
   tags:["Earth's Rotation","Shadow Geometry","History of Measurement"],
   more:["How accurate is your sundial compared to a clock over several days?","Track the noon shadow length weekly — watch the sun's seasonal position change.","Research the 'equation of time' — why does a sundial sometimes disagree with a clock?"],
   prompt:"How accurate was your sundial? Did shadows move at a consistent speed? Did you notice shadow length changing through the day? What surprised you most?"},
  {id:"e10",p:1,n:10,title:"Making Slime",tag:"The Chemistry of Polymers",time:"20–30 min",diff:"Easy",
   mat:["½ cup white PVA/school glue","½ cup liquid laundry starch OR ½ tsp borax dissolved in 1 cup water","Food coloring","Bowl and mixing spoon","OR for Oobleck: 2 cups cornstarch + 1 cup water"],
   steps:["Pour the glue into a bowl. Add food coloring if desired.","If using liquid starch: gradually add it while stirring. Mixture will pull together and become less sticky.","If using borax solution: add it slowly, 1 tablespoon at a time, stirring after each. Stop at desired consistency.","Knead with your hands for 2–3 minutes until smooth and stretchy.","Oobleck variation: mix cornstarch and water by hand. Try punching it (solid!) then resting your hand in it (liquid!).","Explore: stretch slowly vs pull quickly. Let it sit on the table — does it flow?"],
   sci:"PVA glue contains polyvinyl acetate — long polymer chains that slide past each other freely (liquid). Borax creates cross-links between chains, forming a network — a non-Newtonian gel. It stretches slowly (chains rearrange) but snaps if pulled fast. Oobleck is a suspension that locks under sudden force (shear-thickening) but flows freely at rest. Engineers study these materials for potential use in flexible body armor.",
   tags:["Polymers","Cross-Linking","Non-Newtonian Fluids","States of Matter"],
   more:["Try different borax-to-glue ratios. How does texture change?","What happens if you put Oobleck in the freezer?","Research other non-Newtonian fluids: ketchup, quicksand, toothpaste, blood."],
   prompt:"Describe your slime's texture. How does it behave differently when pulled quickly vs. slowly? What did Oobleck feel like? What surprised you most about its properties?"},

  {id:"e11",p:2,n:11,title:"pH Testing",tag:"The Acid-Base Scale",time:"40–60 min",diff:"Medium",
   mat:["Half a red cabbage","Water + pot","Strainer","Small clear cups","Lemon juice, vinegar, baking soda water, milk, orange juice, sparkling water, soap solution, tea"],
   steps:["Chop red cabbage, cover with water, boil 10 minutes until deep purple. Strain and cool. This is your indicator.","Pour a small amount of cabbage indicator into each cup.","Add a small amount of each test liquid to separate cups.","Stir and observe the color change.","Color guide: Red/Pink = very acidic, Purple = neutral, Blue-Green = mildly basic, Yellow-Green = very basic.","Make a data table ranking your liquids from most acidic to most basic."],
   sci:"pH measures hydrogen ion (H⁺) concentration: 0–6 acidic, 7 neutral, 8–14 basic. Red cabbage contains anthocyanin, a pigment that changes structure (and color) depending on pH. Your blood must stay between pH 7.35–7.45 — a deviation of even 0.1 causes serious health problems. Your body uses chemical buffers to maintain this incredibly narrow range.",
   tags:["pH Scale","Acids and Bases","Indicators","Anthocyanin"],
   more:["Test rainwater pH — is it neutral or slightly acidic?","Research ocean acidification and its effect on coral reefs.","Make pH strips by dipping coffee filter paper in indicator and drying."],
   prompt:"Which liquid was most acidic? Most basic? Did any result surprise you? List everything in order from most to least acidic. What patterns did you notice?"},
  {id:"e12",p:2,n:12,title:"Onion Cells Under a Microscope",tag:"The Building Blocks of Life",time:"30–45 min",diff:"Medium",
   mat:["Compound microscope (min 40x magnification)","Microscope slides and coverslips","Fresh onion","Tweezers or toothpick","Dropper and water","Iodine solution (optional — improves contrast)"],
   steps:["Break an inner onion layer. Look for the thin transparent membrane on the inside surface.","Carefully peel off a tiny piece (about 1 cm × 1 cm) using tweezers.","Place the membrane flat on a clean slide.","Add 1–2 drops of water (or iodine for better visibility). Lower a coverslip at an angle to avoid air bubbles.","Place on the microscope stage. Focus starting at lowest magnification.","Switch to higher magnification. Look for: cell wall (rectangular outlines), nucleus (dark dot), vacuole (large clear space)."],
   sci:"Onion cells are plant cells with rigid cell walls (giving their brick-like rectangular shape), large central vacuoles, and nuclei visible with iodine staining. Every cell contains a complete copy of the plant's DNA. Robert Hooke coined the word 'cell' in 1665 because cork compartments reminded him of monks' rooms — you're seeing the same fundamental unit of all life that astonished him.",
   tags:["Cell Structure","Plant Cells","Cell Wall","Nucleus","Microscopy"],
   more:["Compare to tomato skin, leaf cells, or pond water organisms.","Look at human cheek cells if a prepared slide is available — what's different?","Research how the first microscope was invented and by whom."],
   prompt:"Draw your cells in the observation box below! How many cells fit in one field of view? Could you spot the nucleus? Did iodine help? How did cells look at different magnifications?"},
  {id:"e13",p:2,n:13,title:"Separating Mixtures",tag:"Filtration, Sedimentation, Evaporation",time:"45–60 min",diff:"Easy",
   mat:["Sand and water","Funnel, coffee filter, beaker/jar","Muddy water or chalk-powder water","Clear jar","Salt water solution","Wide shallow dish","Warm sunny location"],
   steps:["FILTRATION: Mix sand into water. Fold coffee filter into a cone and place in the funnel over a jar. Slowly pour the mixture through.","SEDIMENTATION: Shake muddy water in a jar. Place it completely still for 30–60 minutes. Watch particles settle.","EVAPORATION: Pour salt water into a wide shallow dish. Leave in a sunny warm spot until all water evaporates.","After evaporation, examine what remains.","Design challenge: how would you separate BOTH sand AND salt from water? You need two steps!","Write down why each method works for its specific situation."],
   sci:"Filtration uses pore size — water molecules pass through, larger sand particles don't. Sedimentation uses gravity — denser particles sink over time. Evaporation separates dissolved solids from water by turning only water into vapor (dissolved salt can't evaporate). Real water treatment plants use all three methods, scaled up enormously. Sea salt is harvested by evaporation in coastal saltpans worldwide.",
   tags:["Filtration","Sedimentation","Evaporation","Mixtures","Separation Techniques"],
   more:["Design a better sand filter by layering sand, gravel, and charcoal.","What additional step would make filtered water safe to drink?","Research how your city's water treatment plant works."],
   prompt:"How clear was the water after filtration? How long did sedimentation take? What did the salt crystals look like? Which method worked best, and why?"},
  {id:"e14",p:2,n:14,title:"Acid-Base Reactions",tag:"Gas Production and Neutralization",time:"30–40 min",diff:"Easy",
   mat:["Baking soda","White vinegar or lemon juice","Balloons","Small plastic bottles","Cabbage indicator (from Idea 11)","Measuring spoons"],
   steps:["GAS TRAPPING: Add 2 tbsp baking soda to a bottle. Pour 3 tbsp vinegar into a balloon. Fit balloon over the bottle neck. Tip vinegar in — watch the balloon inflate!","Estimate: measure the balloon's circumference. How much CO₂ was produced?","NEUTRALIZATION: Make dilute baking soda solution. Add cabbage indicator — it should turn blue-green (basic).","Slowly add drops of vinegar, stirring after each. Watch colors change step by step.","The exact neutral point is when the indicator returns to its original purple.","Add too much vinegar and it turns pink/red. Try to find the exact neutral point!"],
   sci:"The acid-base reaction produces CO₂ (NaHCO₃ + CH₃COOH → sodium acetate + H₂O + CO₂). Neutralization occurs when acid and base react exactly to produce a neutral salt and water. This is how antacid tablets work — they're a base that neutralizes excess stomach acid. Baking powder in cakes uses this to produce CO₂ bubbles that make baked goods rise.",
   tags:["Acid-Base Neutralization","Gas Production","Indicators","Antacids"],
   more:["Try different acids and bases. Which neutralization is most dramatic?","What is the pH of the neutral solution you created?","Research how antacids work in your stomach."],
   prompt:"How big did your balloon inflate? How many drops of vinegar to reach neutralization? Describe the color changes step by step. Did the reaction slow as you approached neutral?"},
  {id:"e15",p:2,n:15,title:"Starch Testing in Food",tag:"Identifying a Macronutrient",time:"30 min",diff:"Easy",
   mat:["Iodine solution (pharmacy antiseptic)","White plate","Dropper","Bread, cracker, potato, apple, onion, cooked rice, pasta, cheese, egg white, sugar, flour"],
   steps:["Predict which foods contain starch. Write your predictions before testing!","Place small samples of each food on your white plate.","Add 2–3 drops of iodine solution to each sample.","Observe: blue-black = starch present. Amber-brown = no starch.","Record results and compare to your predictions.","ENZYME BONUS: Chew a plain cracker for 2–3 minutes. Notice it gets slightly sweet. Spit a small amount on a test surface and add iodine — compare to an unchewed cracker."],
   sci:"Starch is a polysaccharide — long chains of glucose molecules. Iodine molecules fit into starch's spiral structure and turn dark blue-black. Your saliva contains amylase, an enzyme that breaks starch into simpler sugars (the chewed cracker has less starch — it's already being digested in your mouth!). This is the very first step of carbohydrate digestion.",
   tags:["Starch","Polysaccharides","Iodine Indicator","Enzyme Action","Digestion"],
   more:["Which foods are the main starch sources in different world cuisines?","What is the glycemic index? How do different starches affect blood sugar?","Research what happens to starch when you cook it vs. eat it raw."],
   prompt:"Which predictions were correct? Which were surprising? Describe the color changes. Did the chewed cracker show less starch? What does this tell you about digestion?"},
  {id:"e16",p:2,n:16,title:"Dissolving Speed vs Temperature",tag:"A Proper Controlled Experiment",time:"40–50 min",diff:"Medium",
   mat:["3 identical cups or beakers","Cold water, room-temperature water, hot water","Thermometer (recommended)","3 equal portions of sugar (2 tsp each)","Stopwatch","Spoon (stir at the same rate for each)"],
   steps:["Write your hypothesis: does temperature affect how quickly sugar dissolves?","Measure and record the exact temperature of each water sample.","Pour equal amounts into three identical cups.","At the same moment, add one sugar portion to each cup.","Stir each at the same rate. Time how long until sugar fully dissolves.","Repeat 2–3 times (replication) and calculate the average. Do results support your hypothesis?"],
   sci:"Dissolving happens when water molecules surround and separate solute molecules. At higher temperatures, water molecules move faster (more kinetic energy), colliding more frequently with sugar, breaking apart crystal structures faster. This is why hot tea dissolves sugar instantly while cold drinks need much more stirring. Temperature dramatically affects dissolution rates throughout chemistry, food production, and pharmaceuticals.",
   tags:["Dissolving Rate","Temperature & Kinetic Energy","Controlled Variables","Replication","Experimental Design"],
   more:["Try the same with salt. Is the temperature effect the same?","Does stirring make as big a difference as temperature?","Research: does hot or cold water hold more dissolved substance overall?"],
   prompt:"Record your actual times here: Cold water: ___ sec. Room temp: ___ sec. Hot water: ___ sec. Was the difference larger or smaller than expected? Did replication change your results?"},
  {id:"e17",p:2,n:17,title:"Balloon Lung Model",tag:"How Your Lungs Work",time:"30–40 min",diff:"Medium",
   mat:["Clear plastic bottle (1–2L) with bottom cut off","2 small balloons (the lungs)","1 large balloon cut in half (the diaphragm)","2 short straws or Y-connector","Tape, scissors","Plasticine or clay to seal gaps"],
   steps:["Cut the bottom off the plastic bottle cleanly. This is your chest cavity.","Connect two small balloons to the two ends of a Y-shaped connector. Insert the other end up through the bottle cap — seal with clay. Balloons hang inside.","Stretch the large balloon dome over the open bottom. Secure with tape. This is the diaphragm.","Pull the bottom balloon (diaphragm) downward. What happens to the lung balloons?","Push the bottom balloon upward. What happens?","Place your hand on your own chest and belly as you breathe. Can you feel how your body mirrors this model?"],
   sci:"When your diaphragm (dome-shaped muscle below lungs) contracts and flattens, it increases the chest cavity's volume. Increased volume = decreased pressure (Boyle's Law). Air rushes in from higher outside pressure — that's inhaling. When the diaphragm relaxes, volume decreases, pressure increases, and air is pushed out — exhaling. Pulling the bottom balloon down = diaphragm flattening = lungs inflate.",
   tags:["Respiratory System","Diaphragm","Lung Mechanics","Boyle's Law","Pressure & Volume"],
   more:["Research: how much air do your lungs hold? What is vital capacity?","Why do singers and wind instrument players specifically train their diaphragm?","How does altitude affect breathing? Research altitude sickness."],
   prompt:"Did the lung balloons inflate when you expected? Describe the movement carefully. How closely did the model match your own breathing? What would you change to make it more realistic?"},
  {id:"e18",p:2,n:18,title:"Heart Rate and Exercise",tag:"Real Exercise Physiology",time:"30–40 min",diff:"Easy",
   mat:["Stopwatch or phone timer","Your fingers (to find your pulse)","Notebook and pen","Comfortable clothes — you'll be exercising!"],
   steps:["Find your pulse: 2 fingers on the inside of your wrist below the thumb, or on the side of your neck. Light pressure.","Count beats for 15 seconds. × 4 = heart rate in BPM. Sit quietly for 2 minutes first.","Record resting rate. Then: 2 min slow walking in place → measure. 2 min jogging or jumping jacks → measure. 2 min of fast sprinting in place → measure.","Sit still and measure every 2 minutes for 10 minutes. How long until resting rate returns?","Make a data table with all your measurements.","Compare recovery times: who returns to resting rate fastest among people you test?"],
   sci:"Your heart pumps oxygenated blood to muscles. During exercise, muscles need more oxygen, so the heart beats faster. Cardiac Output = Heart Rate × Stroke Volume. At rest: ~5 liters/minute. At maximum exertion: up to 24 liters/minute! Athletes recover faster because stronger hearts pump more blood per beat even at rest, so they don't need to beat as fast.",
   tags:["Heart Rate","Cardiac Output","Cardiovascular Physiology","Exercise","Recovery Rate"],
   more:["Research maximum heart rate formula: 220 − age. Is your measured max close?","Why do trained athletes have resting rates as low as 40–50 BPM?","Compare resting rates among different people. What factors influence this?"],
   prompt:"Record all your BPM readings here: Resting: ___ | Light: ___ | Moderate: ___ | Intense: ___ | Recovery 2min: ___ 4min: ___ 6min: ___ 8min: ___ 10min: ___. How long did recovery take?"},
  {id:"e19",p:2,n:19,title:"Mapping the Circulatory System",tag:"The Body's Transport Network",time:"45–60 min",diff:"Easy",
   mat:["Large poster paper","Red and blue markers","Human body outline (trace yourself or print one)","Biology textbook or reference image"],
   steps:["Draw or trace a simple human body outline on large paper.","Draw the heart slightly left of center in the chest.","In RED (oxygenated blood): draw the aorta from the heart, and major arteries going to the head, arms, and legs.","In BLUE (deoxygenated blood): draw major veins returning to the heart, and the pulmonary artery to the lungs.","Label all structures. Add arrows showing the direction of blood flow.","In a corner, draw and label the four heart chambers: right atrium, right ventricle, left atrium, left ventricle."],
   sci:"The circulatory system has two loops. Pulmonary: heart → lungs → heart (picks up O₂, drops off CO₂). Systemic: heart → all body → heart (delivers O₂, picks up CO₂). The heart is a double pump. In an average lifetime, the human heart beats approximately 2.5 billion times without stopping — an extraordinary feat of biological engineering.",
   tags:["Circulatory System","Heart Anatomy","Arteries & Veins","Pulmonary & Systemic Circulation"],
   more:["What are capillaries, and where do arteries become capillaries?","Research congenital heart defects — what happens when the system isn't formed correctly?","What is the difference in wall thickness between arteries and veins, and why?"],
   prompt:"Was mapping the circulatory system easier or harder than expected? What was the most complex part? Did creating this diagram help you understand the system better than just reading about it?"},
  {id:"e20",p:2,n:20,title:"Light and Plant Growth",tag:"A Multi-Week Biology Experiment",time:"20 min setup + 2–4 weeks",diff:"Easy",
   mat:["6–8 identical small pots or yogurt cups","Potting soil","Fast-growing seeds (beans, cress, lettuce, sunflowers)","Water","Labels","Science journal for daily observations"],
   steps:["Fill all pots with the same amount of soil. Plant the same number of seeds at the same depth in each.","Label three groups: A = Full light (sunny window), B = Partial light (away from window), C = No light (inside a cupboard).","Water all pots equally every 2 days. Keep temperature and water amount IDENTICAL for all groups.","Every day: record height in cm, leaf color (green/pale/yellow?), and overall health.","Draw sketches every few days. Continue for 2–4 weeks.","Which group grew best? Look for etiolation (pale, stretched, reaching growth) in the dark group."],
   sci:"Plants make food through photosynthesis: light + water + CO₂ → glucose + oxygen. The green pigment chlorophyll absorbs light energy. Without light, plants use stored seed energy to sprout initially, then fail. Etiolation (pale yellow, extremely elongated growth) is a programmed adaptation — the plant reaches desperately toward any light source, controlled by plant hormones. It's survival behavior, not healthy growth.",
   tags:["Photosynthesis","Chlorophyll","Etiolation","Plant Hormones","Controlled Variables"],
   more:["Try colored cellophane filters over plants — does red or blue light affect growth differently?","Research grow lights used in indoor farming. What wavelengths do plants absorb?","How do forest-floor plants adapt to very low light conditions?"],
   prompt:"Record daily data here! What differences appeared first — color or height? How did the dark-grown plants compare to your expectations? What was most dramatic about the results?"},

  {id:"e21",p:3,n:21,title:"Popsicle Stick Bridge",tag:"Structural Engineering in Miniature",time:"1–2 hours",diff:"Medium",
   mat:["50–100 popsicle/craft sticks","White glue or craft glue","Binder clips or clothes pegs","2 stacks of books (to span a 30 cm gap)","Coins or small weights for testing"],
   steps:["Sketch your bridge design before building. Research truss, arch, or beam bridge types for inspiration.","Build side trusses using triangular units — triangles are the STRONGEST polygon and cannot deform without changing side length.","Let glue dry fully at each stage (use binder clips to hold joints while drying). Patience is crucial here!","Build the flat roadway surface and connect it between your trusses.","Place the bridge across the 30 cm gap. Load coins at the center. How much weight can it hold?","Examine where it fails — that's your design's weakest point. Redesign!"],
   sci:"Bridges experience compression (pushing forces in the deck) and tension (pulling forces in bottom chords and cables). Triangles appear in nearly every bridge design because they're the only rigid polygon — a triangle cannot be deformed without changing side lengths. A square can collapse into a parallelogram; a triangle cannot. Engineers call this triangulation, and it's fundamental to all structural design.",
   tags:["Structural Engineering","Compression & Tension","Triangulation","Bridge Types","Load Distribution"],
   more:["Research the Forth Bridge (Scotland) or Millau Viaduct (France). What principles do they use?","Redesign based on where your bridge failed. Can you double its load capacity?","What is the difference between 'dead load' and 'live load' in engineering?"],
   prompt:"Describe your final design. How much weight did it hold? Where exactly did it fail? What would you change in a redesign? Did triangulation make a visible difference?"},
  {id:"e22",p:3,n:22,title:"Paper Tower Challenge",tag:"The Challenge of Vertical Load",time:"30–45 min",diff:"Easy",
   mat:["Exactly 10 sheets of A4 paper","Exactly 30 cm of tape (measure strictly!)","Scissors (optional)","A hardcover book for weight testing"],
   steps:["Rules: only 10 sheets of paper, max 30 cm tape, must be freestanding, must support a hardcover book for 10 seconds.","Key insight: a flat sheet collapses easily, but rolled into a cylinder it can support many times its own weight — the cylinder distributes force evenly around its circumference.","Build columns from rolled paper tubes, connected with flat paper platforms.","Add cross-bracing between columns to prevent toppling.","Build a flat paper platform on top for the book to rest on.","Test, observe where it fails, redesign. Each iteration should be stronger!"],
   sci:"A cylinder distributes compressive force evenly around its circumference — that's why rolled paper is dramatically stronger than flat paper. This is also why pipes, bones, and structural columns are hollow tubes rather than solid rods. The Eiffel Tower is a lattice specifically designed to resist wind that would topple a solid column of the same height. Engineers call this Euler buckling resistance.",
   tags:["Compressive Strength","Column Design","Iterative Design","Engineering Under Constraints"],
   more:["How much weight can a single rolled paper tube support? Measure it.","How does tube diameter affect strength? Test thin vs wide rolls.","Challenge a friend: same materials, 20-minute time limit. Who builds higher?"],
   prompt:"How tall did you build? How much weight did it hold? Where did it fail — base, middle, or top? What improved most between your first and final design?"},
  {id:"e23",p:3,n:23,title:"Balloon-Powered Car",tag:"Newton's Third Law in Motion",time:"45–60 min",diff:"Medium",
   mat:["Round or sausage-shaped balloon","Flexible straw","Cardboard, plastic bottle, or flat board (base)","Bottle caps, spools, or toy wheels","Skewers or pencils (axles)","Tape and scissors","Smooth floor for testing"],
   steps:["Thread a straw through the balloon neck so you can blow it up through the straw. Tape securely.","Attach the straw horizontally along the underside or back of your vehicle base, pointing rearward.","Push skewers through the base for axles. Add wheels at each end. Make sure wheels spin freely!","Blow the balloon up through the straw, pinch it, place car on smooth floor, and release.","Measure how far it travels. Try different balloon sizes and vehicle weights.","Can you make it go straight? What changes would you need for steering?"],
   sci:"Newton's Third Law: every action has an equal and opposite reaction. Air rushing backward (action) propels the car forward (reaction). This is identical to how jet engines and rockets work — expelling mass backward to move forward. Distance depends on stored air (balloon size), thrust direction (nozzle alignment), and drag (wheel friction). NASA's Space Shuttle used this principle at unimaginable scale.",
   tags:["Newton's Third Law","Thrust & Propulsion","Friction","Action-Reaction Pairs"],
   more:["Test a larger vs. smaller balloon. How does stored air affect distance?","Compare surfaces: carpet vs. tile. Why does it make a difference?","Can you design a steerable version? What's the engineering challenge?"],
   prompt:"How far did your car travel? Did it go straight? What changed when you adjusted the nozzle direction? Which modification made the biggest difference in distance?"},
  {id:"e24",p:3,n:24,title:"Mini Windmill",tag:"Capturing Wind Energy",time:"45–60 min",diff:"Medium",
   mat:["Cork, styrofoam ball, or clay (hub)","Popsicle sticks or stiff cardboard (blades)","Wooden skewer or pencil (axle)","Thread and small paper clip (to test lifting)","Tape and scissors","Fan for indoor testing"],
   steps:["Design blades: the angle of the blade to the wind (angle of attack) is crucial — blades must be angled like a propeller, not flat.","Attach 3–4 blades to the hub, evenly spaced, at consistent angles.","Push the skewer through the hub. Check that it can spin freely with minimal friction.","Test in front of a fan. Try adjusting blade angle. Which angle spins fastest?","Tie thread to the skewer and attach a small paper clip. Can spinning motion lift it?","Compare designs: 3 vs 4 blades, curved vs straight, long vs short."],
   sci:"Wind turbine blades use the same aerodynamic principle as airplane wings — the angled surface creates lift as wind flows over it. Available wind power increases with the CUBE of wind speed: double the wind = 8× the energy. This is why offshore wind farms produce so much more power than inland ones. Solar and wind are now among the cheapest sources of electricity in history.",
   tags:["Kinetic Energy","Wind Turbines","Angle of Attack","Lift","Renewable Energy"],
   more:["Research why most commercial wind turbines have exactly 3 blades.","What is the Betz limit — the maximum fraction of wind energy theoretically extractable?","Compare your windmill's efficiency at different fan speeds."],
   prompt:"Which blade angle worked best? How many blades spun fastest? Could you lift the paper clip? What did you learn about blade design that surprised you?"},
  {id:"e25",p:3,n:25,title:"Simple Water Filter",tag:"Designing for Clean Water",time:"45–60 min + 20 min testing",diff:"Medium",
   mat:["Large plastic bottle cut in half","Gravel or small pebbles","Coarse sand","Fine sand","Activated charcoal (fish tank carbon from pet store)","Cotton balls or cloth","Second container","Muddy water (soil mixed into water)"],
   steps:["Layer filter materials in the upturned bottle half (top to bottom): cotton ball → fine sand (5 cm) → coarse sand (5 cm) → gravel (5 cm) → activated charcoal (3–4 cm).","Pour muddy water in at the top. Collect filtered water below.","Compare the filtered water's clarity to the original muddy water.","Try adjusting layer thickness or order. What changes?","IMPORTANT: this water is NOT safe to drink. Filtration doesn't remove bacteria or viruses.","Research: what additional steps would make this water actually safe?"],
   sci:"Real water treatment: screening removes debris, sedimentation allows particles to settle, sand filtration traps smaller particles, activated carbon removes organic chemicals and odors, then disinfection (chlorine or UV) kills microorganisms. Over 2 billion people lack safe drinking water — making clean water access one of the world's most urgent engineering challenges.",
   tags:["Water Filtration","Particle Size","Activated Carbon","Water Treatment","Global Challenges"],
   more:["Research the LifeStraw — how does it make unsafe water safe in one step?","What is 'potable water'? How do cities ensure drinking water safety?","Design a test: compare filter performance with different material arrangements."],
   prompt:"Describe the water before and after filtering. How many passes did you try? Which layer do you think was most effective? What couldn't your filter remove?"},
  {id:"e26",p:3,n:26,title:"Heat-Resistant House",tag:"Thermal Insulation Engineering",time:"1–2 hours",diff:"Medium",
   mat:["Recycled cardboard boxes","Newspaper, bubble wrap, aluminum foil, cotton fabric, styrofoam pieces","Scissors, tape, glue","2 thermometers","Lamp or sunny window for testing"],
   steps:["Sketch your design first: plan your insulation strategy before cutting anything.","Consider: light colors reflect heat, dark absorb it. Air-trapping materials (bubble wrap, crumpled newspaper) insulate well. Aluminum foil reflects radiant heat.","Build your insulated house with these principles integrated into walls, roof, and floor.","Build an uninsulated control house (just plain cardboard, same size).","Place both under a lamp or in sun. Record starting temperature inside each.","Measure every 5 minutes for 30 minutes. Which house stays cooler — and by how much?"],
   sci:"Heat transfers by conduction (through material contact), convection (through moving air), and radiation (infrared waves). Best insulators trap tiny air pockets — it's actually the trapped air that insulates, not the material itself. Traditional architecture incorporated passive cooling for centuries: thick mud walls in the Middle East, raised houses in Southeast Asia, courtyard designs channeling airflow.",
   tags:["Thermal Insulation","Conduction, Convection, Radiation","Passive Cooling","Sustainable Design"],
   more:["Test each material individually. Which is best?","Research 'cool roofs' — white-painted roofs that reflect solar heat.","What traditional building materials from your region provide natural insulation?"],
   prompt:"How much cooler was your insulated house vs the control? Which material performed best? Did exterior color make a measurable difference? What would you redesign?"},
  {id:"e27",p:3,n:27,title:"Suspension Bridge Model",tag:"Engineering Under Tension",time:"60–90 min",diff:"Hard",
   mat:["Popsicle sticks (50+)","String or thin rope","White glue and tape","Two stacks of books (as towers)","Small weights for load testing"],
   steps:["Build two popsicle stick towers — approximately 15 cm tall. Glue multiple layers. Let dry fully.","Run two main cable strings from one tower top to the other, looping over and anchoring at both ends.","Hang vertical 'suspender' strings from the main cable at regular intervals.","Attach a roadway of popsicle sticks to the bottom of the suspenders.","Test with increasing weights. Observe where it flexes or fails.","Compare load capacity to a simple flat beam bridge over the same gap."],
   sci:"In a suspension bridge, the roadway hangs from cables (under tension — being stretched). The towers are under compression (pushed down by cable pull). By hanging the roadway, load distributes across long cables — allowing suspension bridges to span vast distances impossible for beam bridges. The Akashi Kaikyō Bridge in Japan has a main span of 1,991 meters.",
   tags:["Tension","Compression","Load Distribution","Suspension Bridge Design","Long-Span Engineering"],
   more:["Research the 1940 Tacoma Narrows Bridge collapse — why did it happen?","What is the longest bridge in the world and how is it structured?","How do engineers prevent suspension bridges from resonating with wind?"],
   prompt:"Describe how the bridge flexed under load. Where did tension and compression seem greatest? How did your suspension bridge compare in strength to a flat beam bridge?"},
  {id:"e28",p:3,n:28,title:"Mini Catapult",tag:"Projectile Motion and Simple Machines",time:"45–60 min",diff:"Medium",
   mat:["7–10 popsicle sticks","Rubber bands","Plastic spoon","Marshmallows or small paper balls","Ruler for measuring distance"],
   steps:["Stack 5 popsicle sticks and bind tightly with rubber bands at both ends — this is your base.","Stand 2 sticks vertically on either side of the base about one-third from one end. Bind in place.","Lay one stick across the verticals as the launch arm pivot. Secure loosely with rubber band so it rotates.","Attach the plastic spoon to one end. Connect a rubber band from the other end down to the base.","Load a marshmallow in the spoon. Pull down and release! Measure distance.","Experiment: change rubber band tension, pull-back angle, or arm length."],
   sci:"The rubber band stores elastic potential energy. Release converts it to kinetic energy. Once launched, the marshmallow follows a parabolic arc determined by initial speed, launch angle, and gravity. The optimal angle for maximum horizontal distance is 45°. This projectile motion physics governs everything from thrown balls to planetary orbits.",
   tags:["Potential & Kinetic Energy","Projectile Motion","Parabola","Simple Machines","Lever"],
   more:["Find the launch angle that gives maximum distance. Is it 45°?","Add mass to the projectile — how does weight affect range?","Research how ancient siege engineers calculated catapult range without modern physics."],
   prompt:"What was your maximum range? Which launch angle worked best? How did changing rubber band tension affect the launch? Describe the arc of the marshmallow in flight."},
  {id:"e29",p:3,n:29,title:"Pulley Machine",tag:"Mechanical Advantage",time:"30–45 min",diff:"Easy",
   mat:["Spool, small wheel, or metal binder ring","String or thin rope","Hook or pencil as mounting point","Weights: books, cans, bags of rice","Spring scale or kitchen scale (optional)"],
   steps:["FIXED PULLEY: Hang your spool from a hook. Run string over it. Attach weight to one end. Pull down on the other to lift the weight.","Notice: with a fixed pulley, effort equals the load — but the direction changed (pulling down to lift up). This is useful when pulling upward is awkward.","MOVABLE PULLEY: Attach one string end to a fixed point. Run string around a movable pulley attached to the weight. Pull the free end.","Compare the effort: does the movable pulley feel lighter? (You need half the force, but pull twice the distance.)","If you have a scale, measure the force needed with and without each pulley.","Try combining 3 or 4 pulleys in a block-and-tackle system."],
   sci:"Mechanical advantage (MA) is how much a machine multiplies your force. A movable pulley gives MA = 2: half the force but twice the distance. Work = Force × Distance, and machines conserve work — you can never get more energy out than you put in. Block-and-tackle pulley systems are used on ships, cranes, and elevators to lift enormous loads with manageable force.",
   tags:["Simple Machines","Pulley Systems","Mechanical Advantage","Force & Distance","Conservation of Energy"],
   more:["How many pulleys would you need to lift your weight using only ¼ the force?","Research block-and-tackle systems on sailing ships. How did they work?","Find pulleys in everyday life: blinds, flagpoles, gym cable machines."],
   prompt:"Could you feel the mechanical advantage? By how much did the movable pulley reduce apparent effort? Did adding more pulleys continue to reduce effort proportionally?"},
  {id:"e30",p:3,n:30,title:"Egg Drop Challenge",tag:"Protecting a Fragile Cargo",time:"60–90 min",diff:"Hard",
   mat:["Raw egg","Selection from: straws, rubber bands, tape, cotton balls, bubble wrap, plastic bags, newspaper, cardboard, popsicle sticks, string, sponge","Budget: max 20 items total","Drop zone: outdoors, 2+ meter height","Paper towels for cleanup!"],
   steps:["Choose your strategy: crumple zone (compressible material absorbs impact slowly), suspension (egg floats inside device on strings), parachute (reduce fall speed), or distributed impact (multiple contact points spread force).","Sketch your design and label each element's purpose before building.","Build your protective device around the egg within your material budget.","Drop from at least 2 meters. Survived? Increase height by 0.5 m and repeat!","If it failed, examine where the egg cracked — that shows your weakest point.","Redesign based on failure analysis. Test again."],
   sci:"When your device hits the ground, it decelerates rapidly. The egg experiences F = ma — greater deceleration = greater force. Extending the time of deceleration (via crumple zones) reduces peak force. This is exactly how car crumple zones, airbags, and seat belts work: they extend deceleration time from ~2ms to ~50ms, dramatically reducing peak force on occupants.",
   tags:["Force = Mass × Acceleration","Deceleration & Impulse","Crumple Zones","Engineering Design"],
   more:["Calculate impact velocity: V = √(2gh), where g = 9.8 m/s² and h = height in meters.","Research how smartphones survive drops — glass properties, corner bumper design.","How does NASA protect rovers during Mars landings?"],
   prompt:"Did the egg survive? What was your maximum drop height? Where did the device fail? What would you add or change? Describe the impact sound vs. what you expected."},

  {id:"e31",p:4,n:31,title:"Caesar Cipher",tag:"Your First Encryption",time:"30–45 min",diff:"Easy",
   mat:["Paper and pencil","Cardboard scissors (for cipher wheel)","Paper fastener or pin"],
   steps:["Choose a key number. Start with 3: A→D, B→E, C→F... X→A, Y→B, Z→C (wrap around).","Encrypt your full name using key=3. Then try key=5.","Make a cipher wheel: cut two circles (large and small) from cardboard. Write A–Z around each edge. Connect through the center with a paper fastener so the inner circle rotates.","Set the wheel to your key and encrypt a secret message for a friend.","Codebreaking challenge: decrypt WKXQGHUVWRUP without knowing the key. (Hint: try all 25 possible shifts systematically.)","How many possible keys does a Caesar cipher have? Why does this make it weak?"],
   sci:"The Caesar cipher is vulnerable to frequency analysis: in English, E, T, A, O, I, N appear most often. The most frequent letter in any long ciphertext likely represents E. Modern encryption uses mathematical operations with enormous prime numbers — easy to perform but practically impossible to reverse without the key. RSA encryption protects every bank transaction and private message you send.",
   tags:["Cryptography","Substitution Cipher","Encryption & Decryption","Frequency Analysis"],
   more:["Research how frequency analysis cracked WWII Enigma codes.","What makes public-key cryptography (RSA) fundamentally different from a Caesar cipher?","Research how two people share a secret key without ever meeting — the Diffie-Hellman key exchange."],
   prompt:"Did you successfully encrypt and decrypt messages? How long to crack the code without the key? What patterns helped you break it? What made some messages harder to crack?"},
  {id:"e32",p:4,n:32,title:"Logic Grid Puzzles",tag:"Systematic Thinking and Deduction",time:"20–45 min",diff:"Medium",
   mat:["Paper and pencil","Drawn or printed logic grid"],
   steps:["Learn the method: draw a grid with categories on each axis. Mark ✓ for definite matches, ✗ for confirmed non-matches.","Starter puzzle: Three girls (Anh, Binh, Chi) won prizes in Math, Science, Literature. Clue 1: Anh didn't win Science. Clue 2: Science winner is not Binh. Clue 3: Chi won Literature. Solve it using elimination!","Work systematically: apply each clue and immediately mark all its implications.","Intermediate: 4 girls, 4 activities (coding, painting, basketball, chess), 4 grades (5–8). Create 5 clues and solve a puzzle you designed yourself — then test it on a friend.","Reflect: can you think of real situations where this elimination thinking is useful?","Create your own puzzle scenario and test it on someone else."],
   sci:"Logic puzzles develop deductive reasoning — deriving certain conclusions from premises. This is the foundation of mathematical proof, the process of debugging code (systematically eliminating possible errors), legal argumentation, and scientific hypothesis testing. Proof by elimination — marking what's impossible to find what must be true — is one of the most powerful tools in all of mathematics.",
   tags:["Deductive Reasoning","Proof by Elimination","Formal Logic","Grid Problem Solving"],
   more:["Research formal logic: what is modus ponens? What are syllogisms?","How is deductive logic used in artificial intelligence to make decisions?","Try Sudoku — another grid-based logic puzzle. What solving strategies work?"],
   prompt:"How long did the starter puzzle take? Which clue was most useful? Did you make any wrong deductions? Describe your strategy. Write your own puzzle below:"},
  {id:"e33",p:4,n:33,title:"Simple Animation with Scratch",tag:"Your First Program",time:"60–90 min",diff:"Easy",
   mat:["Computer or tablet","Free account at scratch.mit.edu (no download required)"],
   steps:["Visit scratch.mit.edu → Create → start a new project. The default cat sprite works perfectly.","Click the 'Costumes' tab — notice multiple walking poses.","Build the animation loop in the Code tab: when [green flag clicked] → forever → switch costume to costume1 → wait 0.2 seconds → switch costume to costume2 → wait 0.2 seconds.","Click the green flag. Does your character walk in place?","Add movement: use 'change x by 3' to move the sprite across the screen. Add an if-statement to reset when it reaches the edge.","Customize: change the sprite, add a background, adjust speed. Make it entirely yours!"],
   sci:"Your program just used: event triggers (green flag = start), loops (forever = repeat), timing control (wait), variables and coordinates (x position), and conditionals (if). Animation works by rapidly cycling through still images — human eyes perceive movement above ~12 frames per second. This is the persistence of vision and it's how all film, TV, and digital animation has ever worked.",
   tags:["Loops","Conditionals","Event Triggers","Variables","Animation Principles","Computational Thinking"],
   more:["Add a second sprite that interacts with the first.","Make the animation respond to keyboard input — arrow keys change direction.","Research what 'frame rate' means in video games and why it matters."],
   prompt:"Did your animation work on the first try? What bugs did you encounter and how did you fix them? What was the hardest part? What did you add to make it your own?"},
  {id:"e34",p:4,n:34,title:"Build a Scratch Game",tag:"Computational Thinking in Action",time:"90–120 min",diff:"Medium",
   mat:["Computer or tablet","Scratch account at scratch.mit.edu"],
   steps:["Plan your game: 'Catch the Star'. A player moves left/right. Stars fall from the top. Catch stars to score points.","Player sprite: when [flag] → forever → if [left arrow pressed] change x by -5 → if [right arrow pressed] change x by 5.","Star sprite: set y to 180, random x position → forever → change y by -3 → if touching [player]: add 1 to score, reset position → if y < -180: reset position.","Create a 'score' variable — it displays automatically on screen.","Add difficulty: make stars fall faster as score increases. Add a 30-second countdown timer.","Design your own sprites and backgrounds. Share your game on Scratch and play your classmates' games!"],
   sci:"Your game uses core professional game development concepts: a game loop (forever blocks checking state continuously), state variables (score, positions, timer), collision detection (touching sprite), random number generation (random x), and user input handling. The global games industry generates over $200 billion annually — more than film and music combined.",
   tags:["Game Loops","State Variables","Collision Detection","Randomness","User Input"],
   more:["Research what game engines like Unity and Godot are — how do they compare to Scratch?","Add a high score that persists between plays.","What game features make a game feel most satisfying to play?"],
   prompt:"What was the first bug you encountered? How did you fix it? What feature are you most proud of? How does the game feel to play? What would make it more fun?"},
  {id:"e35",p:4,n:35,title:"Symmetry in Art and Math",tag:"Finding Hidden Order",time:"45–60 min",diff:"Easy",
   mat:["Paper and colored pens or watercolors","Compass for circles","Ruler","For fold-and-paint: thick paint and a brush"],
   steps:["Symmetry hunt: find 3 objects with line symmetry, 2 with rotational symmetry, 1 with translational symmetry around your home. Write them down.","Look in nature: flowers (how many-fold?), leaves, shells, snowflakes (always 6-fold!).","Fold-and-paint: fold paper in half. Drop paint blobs on one half. Fold, press firmly, unfold. Perfect line symmetry!","Rotational mandala: draw circles centered at one point. Divide into equal sections (8 sections = 45° each). Design one section, then repeat identically in all others.","Look at Islamic geometric art or traditional textile patterns from your culture. What types of symmetry appear?","Find examples of near-symmetry: a human face, a butterfly? Perfect in theory, imperfect in practice."],
   sci:"Symmetry is scientifically fundamental. In biology, bilateral symmetry may reflect developmental efficiency and genetic health. In chemistry, mirror-image molecules (enantiomers) can have completely different biological properties — one may be a medicine, the other toxic. In physics, Emmy Noether's 1915 theorem proved that every conservation law (energy, momentum) corresponds directly to a symmetry in the laws of physics.",
   tags:["Line, Rotational, Translational Symmetry","Symmetry in Nature","Enantiomers","Noether's Theorem"],
   more:["Research Noether's Theorem in simple terms. What conservation law corresponds to time symmetry?","What is the golden ratio (φ) and how is it related to symmetry and proportion in nature?","Study traditional Vietnamese or regional textile patterns — classify their symmetry types."],
   prompt:"List the symmetry examples you found in your hunt. What surprised you? Which type is most common in nature? Describe your fold-and-paint result. Did you achieve a perfect mandala?"},
  {id:"e36",p:4,n:36,title:"Fractals: Infinity in Simple Rules",tag:"Where Math Meets Art",time:"30–60 min",diff:"Medium",
   mat:["Paper and ruler","Pencil and eraser","Colored pens for final versions","Optional: computer for online fractal exploration"],
   steps:["KOCH SNOWFLAKE: draw a straight line. Divide into thirds. Replace the middle third with two sides of an equilateral triangle (a bump). Repeat this rule on every segment for 3+ iterations.","How many segments after each step? 1 → 4 → 16 → 64... Can you see the pattern?","Start with an equilateral triangle and apply to all three sides to form the snowflake.","SIERPINSKI TRIANGLE: draw a filled triangle. Connect the midpoints of each side and remove the central triangle. Repeat on the three remaining triangles, 3–4 times.","Search 'Mandelbrot set zoom' online. Watch the same patterns repeat infinitely at every scale.","Find fractals in nature: photograph broccoli (Romanesco!), ferns, coastlines on maps, tree branching."],
   sci:"The Koch Snowflake has a mathematical paradox: infinite perimeter but finite area. Each iteration adds 1/3 more perimeter (this series diverges — it grows forever), yet the snowflake fits inside a finite circle (bounded area). Fractals have non-integer dimensions: the Koch curve is ~1.26D, between a line (1D) and a surface (2D). Fractals describe lung airways, blood vessel networks, coastlines, and market price fluctuations.",
   tags:["Fractals","Iteration","Self-Similarity","Infinite Perimeter / Finite Area","Fractal Dimension"],
   more:["What is the mathematical rule that generates the Mandelbrot set?","How is fractal geometry used in computer graphics to generate realistic landscapes?","Research the box-counting method for measuring the 'fractal dimension' of a real coastline."],
   prompt:"How many iterations did you complete? Describe the Koch snowflake at each step. Did you find fractals in nature? What surprised you most about infinite perimeter with finite area?"},
  {id:"e37",p:4,n:37,title:"Probability with Coins and Dice",tag:"Understanding Randomness",time:"45–60 min",diff:"Easy",
   mat:["1–2 coins","1–2 standard six-sided dice","Tally sheet","Optional stopwatch"],
   steps:["Write your hypothesis: if you flip a coin 100 times, how many heads will you get?","Flip a coin 100 times. Tally heads and tails, recording the running total every 10 flips.","Roll two dice 50 times. Record the sum each time.","Calculate: there are 36 total outcomes. Sum = 7 can be made 6 ways; sum = 2 can be made only 1 way. Draw the theoretical probability distribution.","Compare your actual dice results to the theoretical distribution on a bar chart.","HUMAN RANDOMNESS TEST: Write 30 'random' coin flips from imagination, then do 30 real flips. Compare for runs (5 or more in a row) — which has more?"],
   sci:"The Law of Large Numbers: as sample size grows, observed frequency approaches theoretical probability. After 10 flips results may be far from 50%; after 1,000, they'll be very close. Humans systematically avoid runs in imagined sequences because runs seem 'non-random' — but they're perfectly consistent with true randomness. This bias affects medical diagnosis, financial decisions, and sports analysis.",
   tags:["Probability","Law of Large Numbers","Expected Value","Experimental vs. Theoretical Probability"],
   more:["Research the Gambler's Fallacy — why is it dangerous?","What is the Birthday Problem? How many people until >50% chance two share a birthday?","Research base rate neglect — how probability bias affects medical diagnosis."],
   prompt:"Actual coin result: ___/100 heads. Which dice sum appeared most? Did your imagined random sequence have fewer long runs than real flips? What surprised you most?"},
  {id:"e38",p:4,n:38,title:"Collect and Analyze Class Data",tag:"Statistics in Your Own Classroom",time:"45–60 min",diff:"Easy",
   mat:["Notebook for survey design","Pen and paper or spreadsheet","Ruler for drawing charts by hand"],
   steps:["Choose a question: sleep hours, favorite activity, travel method, languages spoken, or another measurable topic.","Design your survey — be specific. 'Do you sleep enough?' is bad. 'How many hours did you sleep last night?' is good.","Collect responses from at least 15–20 people.","Calculate: mean (sum ÷ count), median (middle value when sorted), mode (most common), range (max − min).","Create a data visualization: bar chart for categories, histogram for measurements.","Write a 3-sentence summary: what did you find? Any surprises? What would you study next?"],
   sci:"Mean, median, and mode tell different stories. If 19 students sleep 7–8 hours and 1 sleeps 2 hours, the mean is pulled down by that outlier — but the median accurately represents the typical student. Choosing the right measure for the right question is a foundational statistical skill. Real researchers must also consider: sample size, selection bias, and self-report accuracy.",
   tags:["Descriptive Statistics","Mean, Median, Mode, Range","Data Visualization","Survey Design","Statistical Bias"],
   more:["Research Simpson's Paradox — a trend can appear in subgroups but disappear when data is combined.","What does 'statistically significant' mean? Why does sample size matter so much?","How do political polls estimate national opinion from just 1,000 people?"],
   prompt:"Research question: ___. Key findings: mean ___, median ___, mode ___, range ___. Did any result surprise you? Write your 3-sentence summary here:"},
  {id:"e39",p:4,n:39,title:"Analyzing Your Screen Time",tag:"Personal Data Science",time:"30–40 min",diff:"Easy",
   mat:["Your smartphone (Settings → Screen Time on iPhone, or Digital Wellbeing on Android)","Notebook or spreadsheet","Calculator"],
   steps:["Find your screen time data in phone settings. Record it for today.","Track for one full week: total daily screen time, social media, entertainment, education, and number of daily pickups.","Calculate your daily average for each category.","Is there a day-of-week pattern? More on weekends?","Create a pie chart showing your average daily breakdown by category.","Compare to your perception: did you know how much time you were spending? What surprised you?"],
   sci:"Most people significantly underestimate their screen time — a well-documented cognitive bias. Your phone data is personal analytics, part of a broader field where behavioral data generates insight and enables change. The same principle underlies fitness trackers, sleep monitors, and productivity tools. However, all of this data raises important questions about privacy: who has access to it, what they do with it, and who profits.",
   tags:["Personal Analytics","Cognitive Bias","Data Literacy","Screen Time","Digital Privacy"],
   more:["Research average screen time for your age group. How do you compare?","What does research actually say about screen time and wellbeing? (It's more nuanced than you think.)","What data does your phone collect beyond what's shown in Screen Time?"],
   prompt:"Daily averages: Total ___ | Social media ___ | Entertainment ___ | Education ___. Day-of-week pattern? What surprised you most? Did you decide to make any changes based on the data?"},
  {id:"e40",p:4,n:40,title:"Data Visualization Poster",tag:"Telling Stories with Numbers",time:"60–90 min",diff:"Medium",
   mat:["Large poster paper (A2 or A1) or digital tool (Google Slides, Canva, Flourish)","Rulers and colored pens (for hand-drawn)","Access to credible data: Our World in Data, IPCC, UNEP, WHO, national statistics offices"],
   steps:["Choose a dataset that matters to you: climate trends, gender gaps in STEM, plastic pollution, biodiversity loss, or your class data from Idea 38.","Find 3–5 key data points from credible sources. Note each source for citation.","Choose the right chart type: categories → bar chart; change over time → line chart; part of whole → pie chart; two variables → scatter plot.","Lead with the most important finding. Make it large, bold, and instantly comprehensible.","Honesty check: does your chart start at zero? Are scales honest? Are uncertainties acknowledged?","Share your poster and ask: did people understand the main message? Did it change how they think?"],
   sci:"Florence Nightingale's 1858 polar area chart showing that preventable disease caused most Crimean War deaths — not combat — changed British Army policy and saved millions of lives. This is the power of data visualization. The best science communicators translate complex, uncertain data into clear, honest, and compelling visual stories. Data literacy is now one of the most essential skills of the 21st century.",
   tags:["Data Visualization","Chart Types & Uses","Misleading Charts","Science Communication","Media Literacy"],
   more:["Research 'chartjunk' (Edward Tufte) — what makes a chart confusing or dishonest?","Study Hans Rosling's TED talks on showing data that changes minds.","How does the IPCC communicate scientific uncertainty and confidence levels in its reports?"],
   prompt:"Dataset chosen: ___. Main message: ___. Data sources: ___. What reaction did your poster get from others? What would you change based on feedback?"},

  {id:"e41",p:5,n:41,title:"Making Eco-Enzyme",tag:"Kitchen Waste into Natural Cleaner",time:"30 min + 3 months fermentation",diff:"Easy",
   mat:["Brown sugar or molasses — 1 part (e.g., 100g)","Fresh fruit/vegetable scraps, especially citrus peels — 3 parts (e.g., 300g)","Water — 10 parts (e.g., 1 liter)","Plastic bottle or jar with loose-fitting lid","Label and marker"],
   steps:["Dissolve sugar in water in your container.","Add fruit and vegetable scraps. Avoid cooked food, meat, or oily scraps.","Close the lid loosely — NOT airtight, it must breathe. Label with date and ingredients.","For the first month: open daily to stir and release built-up gas.","After 3 months: strain out solids (compost them!). The liquid is your eco-enzyme.","Use: diluted 1:10 for floors, 1:500 for plant fertilizer, undiluted for drain cleaning."],
   sci:"Sugar feeds fermentation — beneficial bacteria and yeast break down organic material producing acids (cleaning properties), enzymes (break down stains and odors), and trace alcohol. Organic waste in landfills decomposes anaerobically producing methane, a greenhouse gas 25× more potent than CO₂ over 100 years. Eco-enzyme transforms this waste into useful products while reducing methane emissions.",
   tags:["Fermentation","Microbiology","Waste Reduction","Circular Economy","Organic Chemistry"],
   more:["Test your eco-enzyme's pH — is it acidic?","Compare cleaning effectiveness: eco-enzyme vs. commercial cleaner on the same stain.","Research other fermentation products: kimchi, tempeh, kombucha. What's similar?"],
   prompt:"Production log — use this space! Date started: ___. Week 1: ___ Week 4: ___ Week 8: ___ Week 12 (final): ___. Color? Smell? How well did it clean?"},
  {id:"e42",p:5,n:42,title:"Plastic Waste Survey",tag:"Citizen Science for Environmental Action",time:"2 hours collection + 1–2 hours analysis",diff:"Easy",
   mat:["Notebook and pen","Gloves (for handling plastics safely)","Camera or phone (for photos)","Bag for collecting samples","Ruler for estimating size"],
   steps:["Choose your survey area: school yard, a section of your street, a park, or a market area.","For each piece of plastic, record: type (bottle, bag, food packaging, straw, cup, other), size (S/M/L), condition (intact, broken, very degraded), and location found.","If safe, collect items and note brand names if visible.","Survey the same area weekly for 1 month to track whether litter increases or decreases.","Analyze: what types dominate? Are there spatial concentration patterns?","Create a report or poster. Who should see this data? Who could act on it?"],
   sci:"An estimated 8 million metric tons of plastic enter the ocean annually. Microplastics have been found on Himalayan peaks, in deep ocean trenches, in Arctic air, and in human blood. Your survey generates local data that connects to this global crisis. Systematic, consistent citizen science observations — when they follow proper methodology — contribute genuine scientific knowledge.",
   tags:["Citizen Science","Environmental Surveying","Plastic Pollution","Waste Composition","Scientific Communication"],
   more:["Submit your data to a citizen science platform if one covers your area.","Research the 'brand audit' method — how do environmental groups use it for corporate accountability?","Which plastics can actually be recycled in your city? You may be surprised."],
   prompt:"Most common plastic type: ___. Most surprising find: ___. Spatial patterns noticed: ___. Week-to-week change: ___. What will you do with your findings?"},
  {id:"e43",p:5,n:43,title:"Insulation Materials Test",tag:"Which Material Keeps Things Warmest?",time:"60–90 min",diff:"Easy",
   mat:["Several identical small cups or cans","Hot water at a consistent starting temperature","Thermometer","Wool fabric, cotton fabric, aluminum foil, crumpled newspaper, bubble wrap, styrofoam pieces","Timer","Notebook"],
   steps:["Wrap identical containers in each material. Leave one completely unwrapped as a control.","Pour hot water at exactly the same starting temperature into each container.","Record the starting temperature. Measure and record every 5 minutes for 30 minutes.","Plot all results on one graph: temperature on y-axis, time on x-axis, one line per material.","The line dropping least steeply = best insulator.","Look for patterns: which materials trap air? Which reflect heat? Does thickness matter?"],
   sci:"Heat transfers by conduction (through material contact), convection (through moving air), and radiation (infrared waves). The best insulators trap tiny air pockets — it's actually the trapped air that insulates, not the material itself. Wool's microscopic fiber structure, styrofoam's manufactured bubbles, crumpled newspaper's air pockets all work by this principle. Aluminum foil reflects radiation but doesn't prevent conduction.",
   tags:["Thermal Insulation","Conduction, Convection, Radiation","Materials Science","Energy Efficiency"],
   more:["Research aerogel — the world's best insulator. What's its structure and how is it used?","Compare energy use in a well-insulated vs. poorly-insulated building in your climate.","What building insulation materials are most commonly used in your region and why?"],
   prompt:"Full data table (fill in here): Which material was the best insulator? By how much? Which was worst? Any materials that performed differently from your prediction? Rank them:"},
  {id:"e44",p:5,n:44,title:"Model Green House",tag:"Sustainable Architecture Design",time:"2–3 hours",diff:"Hard",
   mat:["Recycled cardboard boxes (various sizes)","Foam, fabric scraps, plastic packaging, clay, sand, soil, small plants or moss","Bottle caps, foil, fabric","Scissors, tape, glue","2 thermometers","Lamp or sunny window for testing"],
   steps:["Design first: sketch a floor plan at 1:50 scale. Label every sustainable feature you plan to include.","Consider: solar orientation (windows face direction of most sunlight), natural ventilation (openings create cross-breeze), thermal mass (heavy clay walls absorb and release heat slowly), green roof (plants insulate and manage rainwater).","Research traditional architecture in your region for passive cooling wisdom.","Build your model from recycled materials with features integrated into the structure itself.","Test with a lamp simulating sunlight: does your orientation affect interior light distribution?","Measure interior temperature vs. a plain cardboard control box after 15 minutes under the lamp."],
   sci:"Passive cooling uses design — not electricity — to maintain comfortable temperatures. Traditional buildings developed these principles over centuries: thick mud walls (thermal mass) in the Middle East, raised floors (airflow) in Southeast Asia, narrow streets (shade) in tropical cities, courtyard gardens (cool air sink). As climate change raises temperatures, these ancient strategies are being rediscovered and enhanced.",
   tags:["Passive Design","Solar Orientation","Thermal Mass","Natural Ventilation","Green Building"],
   more:["Research the LEED certification system for green buildings. What does it measure?","Find traditional Vietnamese or regional building styles — what passive design features do they include?","What is a 'net-zero' building? Research one example from your region or Asia."],
   prompt:"Describe your model's sustainable features. How much cooler was it than the control? Which design element had the most impact? What would you change to improve further?"},
  {id:"e45",p:5,n:45,title:"Solar Energy Experiments",tag:"Harvesting Light",time:"60–90 min",diff:"Medium",
   mat:["Black-painted or black plastic tubing (or hose)","Clear plastic wrap or bag","Dark backing board","Thermometer","Sunlight","Optional: small solar panel from garden light + LED"],
   steps:["SOLAR THERMAL: Coil black tubing on a dark board. Wrap in clear plastic to create a greenhouse effect. Allow water to flow slowly through it in full sunlight.","Measure water temperature entering and exiting the coil — what's the temperature difference?","Test at different times of day: when is heating most effective?","SOLAR PHOTOVOLTAIC: Connect a small solar panel to a small LED or motor. Measure output in full sun, partial shade, and complete shade.","Find the optimal panel angle: tilt toward the sun at different angles. Which produces the brightest LED?","Research: how many solar panels would it take to power your home? (Look up your household's electricity consumption in kWh/month.)"],
   sci:"Solar energy is now the cheapest electricity source in history — panel prices fell over 90% from 2010 to 2023. The optimal panel angle is perpendicular to incoming sunlight. Vietnam has become one of the fastest-growing solar markets globally. The sun delivers ~1,000 watts per square meter at Earth's surface — more energy hits Earth in one hour than humanity uses in an entire year.",
   tags:["Solar Thermal vs. Photovoltaic","Energy Conversion","Panel Efficiency & Angle","Renewable Energy"],
   more:["Research solar concentrators — how do they amplify solar energy to generate utility-scale electricity?","What is the 'duck curve' problem in solar-heavy electricity grids, and how is it being solved?","Calculate the payback period for solar panels in your country using current prices and electricity rates."],
   prompt:"Temperature difference with solar coil: ___°C. Most effective time of day: ___. Best panel angle: ___. What surprised you about solar energy's efficiency?"},
  {id:"e46",p:5,n:46,title:"Water Quality Testing",tag:"Becoming an Environmental Analyst",time:"60–90 min",diff:"Medium",
   mat:["Red cabbage indicator or pH strips","Clear glasses","White paper with a small symbol drawn on it (turbidity test)","Water samples from: tap, rain, river/pond if available, bottled water","Optional: inexpensive TDS meter from online shop","Optional: pool test kit for chlorine"],
   steps:["Label all samples: source, date, time of collection.","pH test: add cabbage indicator to each sample. Record color and estimated pH.","Turbidity test: place each sample in a glass over your symbol. Look down through it. Record: clear (see symbol easily), slightly cloudy, cloudy, can't see symbol.","TDS: if meter available, measure total dissolved solids in mg/L.","Compare all results to WHO drinking water guidelines (look these up online).","Write a formal 'Water Quality Report' for each source — like an official scientific document."],
   sci:"Drinking water standards set maximum limits: pH 6.5–8.5, turbidity <1 NTU, TDS <500 mg/L for taste. But different contaminants need different tests — you can't detect bacteria, heavy metals, or pesticides without laboratory equipment. Over 2 billion people drink water that doesn't meet basic safety standards, causing approximately 2 million deaths annually. This makes water quality science one of the most important fields in public health.",
   tags:["Water Quality","pH, Turbidity, TDS","Drinking Water Standards","Environmental Analysis"],
   more:["Request your city's annual drinking water quality report — it's usually public.","What is 'water hardness'? How does it affect health and household appliances?","Design a longer study: test the same water source weekly for a month. Do you see variation?"],
   prompt:"Results for each source (fill in): Tap pH: ___ turbidity: ___ | Rain pH: ___ turbidity: ___ | River/pond pH: ___ turbidity: ___ | Bottled pH: ___ turbidity: ___. Any concerns?"},
  {id:"e47",p:5,n:47,title:"Mini Hydroponics Garden",tag:"Growing Without Soil",time:"1 hour setup + 2–4 weeks growing",diff:"Medium",
   mat:["Dark-colored plastic container (to block light and prevent algae)","Net pots or cups with drainage holes","Small aquarium air pump with tubing and air stone","Hydroponic nutrient solution (garden shop or online)","Growing medium: clay pebbles, rockwool, or clean gravel","Seeds: lettuce, spinach, cress, or herbs (fast-growing)"],
   steps:["Fill the container with nutrient solution. Fit net pots into the lid so their bases just touch the liquid.","Place growing medium in each pot. Place 2–3 seeds on the growing medium.","Run the air pump to oxygenate the water (roots need dissolved oxygen, not just nutrients).","Keep the container covered — light on the plants above, complete darkness in the water below.","Every 2 days: record plant height, leaf number, leaf color, and root length.","Comparison experiment: grow the same seeds in soil simultaneously. Compare results after 3 weeks."],
   sci:"Hydroponics delivers all essential minerals directly to roots in water — nitrogen, phosphorus, potassium, calcium, magnesium, and trace minerals. Without the variability of soil, plants can grow up to 50% faster. Hydroponics uses 90% less water than conventional farming (water is recirculated). It can be done anywhere — urban rooftops, underground facilities, the International Space Station, where astronauts grow lettuce.",
   tags:["Plant Nutrition","Hydroponics","Nutrient Solutions","Sustainable Agriculture","Comparative Experiment"],
   more:["Research vertical farming companies growing salads in multi-story indoor warehouses.","What is aeroponics? How is it different from hydroponics?","Calculate water savings: how much water does your setup use vs. a comparable soil garden?"],
   prompt:"Growth log — fill in here! Day 1: ___ Day 7: ___ Day 14: ___ Day 21: ___. How did hydroponic compare to soil growth? What would you grow with a larger setup?"},
  {id:"e48",p:5,n:48,title:"Upcycling: Make Something Useful",tag:"Design Thinking and Circular Economy",time:"1–2 hours",diff:"Easy",
   mat:["Any materials that will be thrown away this week: plastic bottles, newspaper, fabric scraps, glass jars, cardboard, bottle caps","Scissors, glue, tape","Optional: paint, sewing supplies"],
   steps:["Look around your home for materials that will soon be discarded.","Identify a real need or problem: somewhere to keep pens? A way to organize cables? A window planter? A reusable bag?","Sketch 3 different design concepts using your chosen material and problem pairing.","Choose the most promising design and build it.","Document with photos: before material → design sketch → build process → final product in use.","Evaluate: does it solve the problem? Is it durable? What would you change?"],
   sci:"The circular economy aims for materials to cycle rather than flow linearly to waste. Currently only ~8.6% of global materials are circular — the rest go to landfill or pollution. Upcycling (transforming waste into higher-value products) is one entry point. Design thinking — starting with the user's problem, not the available material — is the methodology used by product designers, architects, and social entrepreneurs worldwide.",
   tags:["Circular Economy","Upcycling vs. Recycling","Design Thinking","Sustainable Production","Material Properties"],
   more:["Research Precious Plastic — open-source project teaching communities to recycle plastic into products.","What is the difference between upcycling, recycling, and downcycling?","Research cradle-to-cradle design philosophy — how does it differ from linear production?"],
   prompt:"What did you make? What problem does it solve? Before (discarded material): ___. After (useful object): ___. What worked well? What would you improve in a redesign?"},
  {id:"e49",p:5,n:49,title:"Environmental Data Poster",tag:"Science Communication with Purpose",time:"60–90 min",diff:"Medium",
   mat:["Large paper (A2 or A1) or digital design tool (Canva, Google Slides, Flourish)","Colored pens, rulers, compass (for hand-drawn)","Credible data sources: Our World in Data, IPCC, UNEP, WHO"],
   steps:["Choose one environmental issue that genuinely concerns you: plastic pollution, deforestation, air quality, biodiversity loss, water scarcity, or climate change in your region.","Find 3–5 key data points from credible sources. Note each source for citation.","Lead with the most important number — make it big, bold, and immediately comprehensible.","Use comparisons to make scale intuitive. '8 million tonnes of plastic = enough to fill 100,000 Eiffel Towers' is more meaningful than the number alone.","Honesty check: are your scales truthful? Does the chart start at zero? Are uncertainties acknowledged?","Share your poster. Ask: did people understand the main message? Did it change anything for them?"],
   sci:"Florence Nightingale's 1858 polar area chart showing preventable disease caused most Crimean War deaths — not combat — changed British Army policy and saved millions of lives. That is the power of data visualization. The best science communicators translate complex, uncertain, multi-variable data into clear, honest, and compelling stories. This skill is now essential in science, journalism, public health, and policy.",
   tags:["Science Communication","Data Visualization","Environmental Literacy","Credible Sources","Media Literacy"],
   more:["Watch Hans Rosling's TED talks on showing data that genuinely changes minds.","How does the IPCC communicate scientific uncertainty — confidence levels and probability ranges?","Could your poster be redesigned for a specific audience: a 10-year-old? A local policymaker?"],
   prompt:"Issue chosen: ___. Headline data point: ___. 3 sources: ___. What reaction did your poster get? What would you change based on what you learned from sharing it?"},
  {id:"e50",p:5,n:50,title:"Design Your Own STEM Project",tag:"Become the Inventor",time:"Ongoing — weeks or months",diff:"Hard",
   mat:["Your science journal","Materials depend entirely on what you design","Access to your school or community","Willingness to try things that might fail — and to learn from them"],
   steps:["OBSERVE for one week: pay close attention to problems in your school or neighborhood. Write everything down. No idea is too small.","Choose one problem. Write it as: 'In our [school/community], [specific problem] because [reason], which means [consequence for people].'","RESEARCH: Has this been solved before? What has worked elsewhere? What do experts say?","BRAINSTORM at least 5 solutions. Evaluate each for feasibility, real impact, and unintended consequences.","BUILD a prototype of your best solution. Test it in the real situation. Gather feedback. Improve. Test again.","PRESENT your work: problem, research, design, testing results, evaluation, next steps. Present to your class, teachers, or community."],
   sci:"This is the complete scientific and engineering process: observe, question, research, hypothesize, design, build, test, evaluate, improve, communicate. Every innovation — from the COVID vaccine to the smartphone to clean cookstoves in rural communities — began with someone paying close attention to a problem and asking whether things could be different. You are not too young to contribute.",
   tags:["Scientific Method","Engineering Design Process","Problem Identification","Prototype Testing","Science Communication"],
   more:["Research STEM competitions for your age group: science fairs, engineering challenges, coding competitions.","Document everything — photos, data, reflections. This is your portfolio.","Find a mentor: a teacher, university student, or professional who can give feedback on your work."],
   prompt:"This is YOUR running project journal. Use this entire space to record: your problem statement, research notes, design sketches, test results, failures, improvements, and final evaluation. There is no wrong answer here — only your process."},
];

// ─── STORAGE ─────────────────────────────────────────────────────────────────
const store = {
  async get(key) {
    try {
      if (window.storage) {
        const r = await window.storage.get(key);
        return r ? JSON.parse(r.value) : null;
      }
      const v = window.localStorage?.getItem(key);
      return v ? JSON.parse(v) : null;
    } catch {
      return null;
    }
  },
  async set(key, val) {
    try {
      const v = JSON.stringify(val);
      if (window.storage) await window.storage.set(key, v);
      else window.localStorage?.setItem(key, v);
    } catch {}
  },
};

// ─── TOKEN ALIASES ────────────────────────────────────────────────────────────
const C = {
  bg: "#FCFAFF",
  surface: "#F7F3FC",
  card: "#FFFFFF",

  border: "#E8DFF3",

  text: "#2D2340",
  textSecondary: "#6E6485",
  textMuted: "#9E95B3",

  primary: "#D85CCB",
  primaryDark: "#B84AC2",

  secondary: "#7D73FF",
  secondaryDark: "#5F55E8",

  accent: "#FF9EC9",

  tag: "#F4F1FF",
  tagText: "#7D73FF",
};

// ─── SHARED STYLES ────────────────────────────────────────────────────────────
const s = {
  app: {
    fontFamily: "'DM Sans', system-ui, sans-serif",
    background:
      "linear-gradient(180deg,#FCFAFF 0%,#F8F1FC 45%,#F4EEFF 100%)",
    minHeight: "100vh",
    color: C.text,
  },

  nav: {
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: `1px solid ${C.border}`,
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  navLogo: {
    fontSize: 20,
    fontWeight: 800,
    color: C.secondary,
    cursor: "pointer",
    letterSpacing: "-0.03em",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 24,
  },

  navLink: {
    color: C.text,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
    cursor: "pointer",
    transition: "color .15s ease",
  },

  navLinkActive: {
    color: C.secondary,
    fontWeight: 700,
  },

  navBtn: {
    background: "#FFFFFF",
    border: `1px solid ${C.border}`,
    borderRadius: 999,
    padding: "8px 16px",
    fontSize: 13,
    fontWeight: 600,
    color: C.text,
    cursor: "pointer",
    transition: "all .15s",
  },

  main: {
    maxWidth: 780,
    margin: "0 auto",
    padding: "40px 24px 100px",
  },

  card: {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 24,
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(125,115,255,.06)",
  },

  h1: {
    fontSize: 36,
    fontWeight: 800,
    lineHeight: 1.1,
    margin: "0 0 10px",
    letterSpacing: "-0.04em",
    color: C.text,
    textAlign: "center",
  },

  h2: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1.2,
    margin: "0 0 8px",
    letterSpacing: "-0.03em",
    color: C.text,
    textAlign: "center",
  },

  h3: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1.3,
    margin: "0 0 6px",
    color: C.text,
    textAlign: "center",
  },

  body: {
    fontSize: 15,
    lineHeight: 1.75,
    color: C.textSecondary,
    textAlign: "center",
  },

  tag: {
    display: "inline-block",
    background: C.tag,
    color: C.tagText,
    fontSize: 12,
    fontWeight: 700,
    padding: "5px 12px",
    borderRadius: 999,
    letterSpacing: "0.02em",
  },

  pill: (color) => ({
    display: "inline-block",
    background: `${color}15`,
    color,
    fontSize: 12,
    fontWeight: 700,
    padding: "5px 12px",
    borderRadius: 999,
  }),

  btn: (color = C.primary) => ({
    background:
      color === C.primary
        ? `linear-gradient(135deg, ${C.primary}, ${C.secondary})`
        : color,
    color: "#FFF",
    border: "none",
    borderRadius: 16,
    padding: "12px 22px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 6px 18px rgba(216,92,203,.18)",
    transition: "all .15s",
  }),

  outlineBtn: {
    background: "#FFF",
    border: `1px solid ${C.border}`,
    borderRadius: 16,
    padding: "11px 20px",
    fontSize: 14,
    fontWeight: 600,
    color: C.textSecondary,
    cursor: "pointer",
    transition: "all .15s",
  },

  check: (done, color) => ({
    width: 24,
    height: 24,
    borderRadius: 8,
    border: `2px solid ${done ? color : C.border}`,
    background: done ? color : "#FFF",
    cursor: "pointer",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .2s",
  }),

  textarea: {
    width: "100%",
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: 20,
    padding: 16,
    fontSize: 14,
    lineHeight: 1.7,
    color: C.text,
    resize: "vertical",
    minHeight: 120,
    fontFamily: "inherit",
    boxSizing: "border-box",
    outline: "none",
    textAlign: "center",
  },
};

// ─── FONT INJECTOR ─────────────────────────────────────────────────────────────
function FontLoader() {
  useEffect(() => {
    const el = document.createElement("link");
    el.rel = "stylesheet";
    el.href = "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap";
    document.head.appendChild(el);
  }, []);
  return null;
}

// ─── PROGRESS BAR ─────────────────────────────────────────────────────────────
function ProgressBar({ pct, color }) {
  return (
    <div style={{ height:6, background:C.border, borderRadius:3, overflow:"hidden" }}>
      <div style={{ height:"100%", width:`${pct}%`, background:color, borderRadius:3, transition:"width .4s" }} />
    </div>
  );
}

// ─── CHECKMARK SVG ────────────────────────────────────────────────────────────
function Check() {
  return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function DiffBadge({ diff }) {
  const [color, bg] = diffColor(diff);
  return <span style={{ ...s.tag, fontSize:11, background:bg, color }}>{diff}</span>;
}

function inlineMarkdown(text) {
  const pieces = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let match;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) pieces.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("**")) pieces.push(<strong key={pieces.length}>{token.slice(2, -2)}</strong>);
    else pieces.push(<em key={pieces.length}>{token.slice(1, -1)}</em>);
    last = match.index + token.length;
  }
  if (last < text.length) pieces.push(text.slice(last));
  return pieces;
}

function MarkdownBlock({ block, index }) {
  if (!block.trim()) return null;

  if (block === "---") {
    return <hr key={index} style={{ border:"none", borderTop:`1px solid ${C.border}`, margin:"24px 0" }} />;
  }

  const heading = block.match(/^(#{1,3})\s+(.+)$/);
  if (heading) {
    const level = heading[1].length;
    const text = heading[2];
    if (level === 1) return <h1 key={index} style={{ ...s.h1, fontSize:30, margin:"28px 0 12px" }}>{inlineMarkdown(text)}</h1>;
    if (level === 2) return <h2 key={index} style={{ ...s.h2, margin:"24px 0 10px" }}>{inlineMarkdown(text)}</h2>;
    return <h3 key={index} style={{ ...s.h3, margin:"18px 0 8px" }}>{inlineMarkdown(text)}</h3>;
  }

  const lines = block.split("\n");
  if (lines.every(line => line.trim().startsWith("- "))) {
    return (
      <ul key={index} style={{ margin:"0 0 18px", padding:"0 0 0 22px", display:"grid", gap:6 }}>
        {lines.map((line, i) => <li key={i} style={{ ...s.body, margin:0 }}>{inlineMarkdown(line.trim().slice(2))}</li>)}
      </ul>
    );
  }

  if (lines.every(line => line.trim().startsWith(">"))) {
    return (
      <blockquote key={index} style={{ margin:"18px 0", padding:"4px 0 4px 18px", borderLeft:`3px solid ${C.amber}`, color:C.brownMid, fontFamily:"'Lora',Georgia,serif", fontStyle:"italic", lineHeight:1.7 }}>
        {lines.map((line, i) => <p key={i} style={{ margin:"6px 0" }}>{inlineMarkdown(line.replace(/^>\s?/, ""))}</p>)}
      </blockquote>
    );
  }

  return (
    <p key={index} style={{ ...s.body, margin:"0 0 16px" }}>
      {lines.map((line, i) => <span key={i}>{i > 0 && <br />}{inlineMarkdown(line)}</span>)}
    </p>
  );
}

// ─── HOME VIEW ────────────────────────────────────────────────────────────────
function HomeView({ onPart, progress }) {
  const totalDone = Object.values(progress).filter(Boolean).length;
  const pct = Math.round(totalDone / 50 * 100);
  return (
    <div>
      {/* Hero */}
      <div style={{ marginBottom:40 }}>
        <div style={{ fontSize:13, color:C.brownLight, letterSpacing:"0.5px", textTransform:"uppercase", marginBottom:12 }}>Your Science Journal</div>
        <h1 style={s.h1}>50 STEM Ideas<br /><em style={{ fontStyle:"italic", fontWeight:400 }}>for Girls</em></h1>
        <p style={{ ...s.body, maxWidth:520, marginTop:12 }}>Follow experiments, record what you observe, and keep notes — all in one place. Science is a conversation between you and the world. This is where you write your side of it.</p>
      </div>

      {/* Progress */}
      {totalDone > 0 && (
        <div style={{ ...s.card, padding:20, marginBottom:32, display:"flex", alignItems:"center", gap:20 }}>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:13, color:C.brownLight, marginBottom:6 }}>Your overall progress</div>
            <ProgressBar pct={pct} color={C.amber} />
          </div>
          <div style={{ textAlign:"right" }}>
            <div style={{ fontFamily:"'Lora',Georgia,serif", fontSize:28, fontWeight:600, color:C.amber }}>{totalDone}</div>
            <div style={{ fontSize:12, color:C.brownLight }}>of 50 done</div>
          </div>
        </div>
      )}

      {/* Part cards */}
      <div style={{ display:"grid", gap:14 }}>
        {PARTS.map(part => {
          const exps = E.filter(e => e.p === part.id);
          const done = exps.filter(e => progress[e.id]).length;
          const pc = partColor(part.id);
          return (
            <div key={part.id} onClick={() => onPart(part.id)}
              style={{ ...s.card, padding:20, cursor:"pointer", display:"flex", alignItems:"center", gap:16, transition:"transform .15s, box-shadow .15s" }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-1px)"; e.currentTarget.style.boxShadow="0 4px 20px rgba(42,26,14,.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
              <div style={{ width:48, height:48, borderRadius:8, background:part.light, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, flexShrink:0 }}>{part.icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:11, color:pc, fontWeight:500, letterSpacing:"0.5px", textTransform:"uppercase", marginBottom:2 }}>Part {part.id}</div>
                <div style={{ ...s.h3, margin:"0 0 3px" }}>{part.title}</div>
                <div style={{ fontSize:13, color:C.brownLight }}>{part.sub}</div>
                {done > 0 && <ProgressBar pct={Math.round(done/10*100)} color={pc} />}
              </div>
              <div style={{ textAlign:"right", flexShrink:0 }}>
                <div style={{ fontSize:13, color:C.brownLight }}>{done}<span style={{ color:C.border }}>/10</span></div>
                <div style={{ fontSize:11, color:C.brownLight }}>done</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quote */}
      <div style={{ marginTop:48, padding:"28px 32px", background:C.card, border:`1px solid ${C.border}`, borderRadius:8, borderLeft:`4px solid ${C.amber}` }}>
        <p style={{ fontFamily:"'Lora',Georgia,serif", fontSize:18, fontStyle:"italic", margin:0, color:C.brownMid, lineHeight:1.6 }}>"The future needs girls who dare to ask why."</p>
      </div>
    </div>
  );
}

// ─── PART VIEW ────────────────────────────────────────────────────────────────
function PartView({ partId, onExp, onBack, progress }) {
  const part = PARTS.find(p => p.id === partId);
  const exps = E.filter(e => e.p === partId);
  const done = exps.filter(e => progress[e.id]).length;
  const pc = partColor(partId);
  return (
    <div>
      <button style={{ ...s.outlineBtn, marginBottom:24, fontSize:13 }} onClick={onBack}>← Back</button>
      <div style={{ marginBottom:28 }}>
        <div style={{ ...s.pill(pc), marginBottom:10 }}>Part {part.id} · {done}/10 completed</div>
        <h1 style={{ ...s.h1, fontSize:26 }}>{part.title}</h1>
        <p style={{ ...s.body, marginTop:8 }}>{part.sub}</p>
      </div>
      <div style={{ display:"grid", gap:12 }}>
        {exps.map(exp => (
          <div key={exp.id} onClick={() => onExp(exp.id)}
            style={{ ...s.card, padding:18, cursor:"pointer", display:"flex", alignItems:"center", gap:14, transition:"transform .15s, box-shadow .15s" }}
            onMouseEnter={e => { e.currentTarget.style.transform="translateY(-1px)"; e.currentTarget.style.boxShadow="0 4px 20px rgba(42,26,14,.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
            <div style={{ width:36, height:36, borderRadius:8, background:part.light, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:600, color:pc, flexShrink:0 }}>{exp.n}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:500, fontSize:15, marginBottom:2 }}>{exp.title}</div>
              <div style={{ fontSize:13, color:C.brownLight }}>{exp.tag} · {exp.time}</div>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <DiffBadge diff={exp.diff} />
              {progress[exp.id] && <span style={{ color:pc, fontSize:18 }}>✓</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── EXPERIMENT VIEW ──────────────────────────────────────────────────────────
function ExperimentView({ expId, onBack, onDone }) {
  const exp = E.find(e => e.id === expId);
  const part = PARTS.find(p => p.id === exp.p);
  const pc = partColor(exp.p);
  const [steps, setSteps] = useState([]);
  const [obs, setObs] = useState("");
  const [completed, setCompleted] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("steps");
  const saveTimer = useRef();

  useEffect(() => {
    (async () => {
      const savedSteps = await store.get(`steps:${expId}`);
      const savedObs = await store.get(`obs:${expId}`);
      const savedDone = await store.get(`done:${expId}`);
      if (savedSteps) setSteps(savedSteps);
      if (savedObs) setObs(savedObs);
      if (savedDone) setCompleted(savedDone);
    })();
  }, [expId]);

  const toggleStep = async (i) => {
    const next = steps.includes(i) ? steps.filter(x=>x!==i) : [...steps, i];
    setSteps(next);
    await store.set(`steps:${expId}`, next);
  };

  const handleObs = (v) => {
    setObs(v);
    setSaved(false);
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      await store.set(`obs:${expId}`, v);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }, 800);
  };

  const markDone = async () => {
    const next = !completed;
    setCompleted(next);
    await store.set(`done:${expId}`, next);
    onDone(expId, next);
  };

  const stepsComplete = steps.length === exp.steps.length;
  const tabs = ["steps","observe","science","more"];
  const tabLabels = { steps:"Steps", observe:"Observe", science:"Science", more:"Go Further" };

  return (
    <div>
      <button style={{ ...s.outlineBtn, marginBottom:24, fontSize:13 }} onClick={onBack}>← Back to part</button>

      {/* Header */}
      <div style={{ marginBottom:28 }}>
        <div style={{ display:"flex", gap:8, marginBottom:10, flexWrap:"wrap" }}>
          <span style={s.pill(pc)}>Part {exp.p} · {part.title}</span>
          <DiffBadge diff={exp.diff} />
          <span style={s.tag}>⏱ {exp.time}</span>
        </div>
        <h1 style={{ ...s.h1, fontSize:28 }}>Idea {exp.n}: {exp.title}</h1>
        <p style={{ ...s.body, fontStyle:"italic", marginTop:4 }}>{exp.tag}</p>

        {/* Concept tags */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:14 }}>
          {exp.tags.map(t => <span key={t} style={{ ...s.tag }}>{t}</span>)}
        </div>
      </div>

      {/* Materials */}
      <div style={{ ...s.card, padding:20, marginBottom:20, borderLeft:`3px solid ${pc}` }}>
        <h3 style={{ ...s.h3, color:pc, marginBottom:12 }}>📋 What You Need</h3>
        <ul style={{ margin:0, padding:"0 0 0 18px", display:"grid", gap:4 }}>
          {exp.mat.map((m,i) => <li key={i} style={{ fontSize:14, lineHeight:1.6, color:C.brownMid }}>{m}</li>)}
        </ul>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex", gap:2, marginBottom:16, background:C.border, borderRadius:8, padding:3 }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setActiveTab(t)} style={{ flex:1, background:activeTab===t?C.card:"transparent", border:"none", borderRadius:6, padding:"8px 6px", fontSize:13, fontWeight:500, color:activeTab===t?C.brown:C.brownLight, cursor:"pointer", transition:"all .15s" }}>
            {tabLabels[t]}
          </button>
        ))}
      </div>

      {/* Steps Tab */}
      {activeTab === "steps" && (
        <div style={{ ...s.card, padding:20 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
            <h3 style={s.h3}>Step by Step</h3>
            <span style={{ fontSize:12, color:C.brownLight }}>{steps.length}/{exp.steps.length} done</span>
          </div>
          <div style={{ display:"grid", gap:12 }}>
            {exp.steps.map((step, i) => (
              <div key={i} onClick={() => toggleStep(i)} style={{ display:"flex", gap:14, alignItems:"flex-start", cursor:"pointer", padding:"10px 12px", borderRadius:8, background:steps.includes(i)?pc+"0A":"transparent", transition:"background .15s" }}>
                <div style={s.check(steps.includes(i), pc)}>{steps.includes(i) && <Check/>}</div>
                <div style={{ fontSize:14, lineHeight:1.65, color:steps.includes(i)?C.brownLight:C.brownMid, textDecoration:steps.includes(i)?"line-through":"none", transition:"all .2s", flex:1 }}>
                  <span style={{ fontWeight:500, color:steps.includes(i)?C.brownLight:pc }}>Step {i+1}.</span>{" "}{step}
                </div>
              </div>
            ))}
          </div>
          {stepsComplete && (
            <div style={{ marginTop:20, padding:"14px 18px", background:pc+"12", borderRadius:8, display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ fontSize:20 }}>🎉</span>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:500, fontSize:14, color:pc }}>All steps complete!</div>
                <div style={{ fontSize:13, color:C.brownLight }}>Head to the Observe tab to record what you noticed.</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Observe Tab */}
      {activeTab === "observe" && (
        <div style={{ ...s.card, padding:20 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
            <h3 style={s.h3}>Your Observation Journal</h3>
            {saved && <span style={{ fontSize:12, color:C.sage }}>✓ Saved</span>}
          </div>
          <p style={{ ...s.body, fontSize:13, marginBottom:16, fontStyle:"italic", background:C.bg, padding:"10px 14px", borderRadius:8 }}>
            🌱 <strong>Think about:</strong> {exp.prompt}
          </p>
          <textarea style={s.textarea} value={obs} onChange={e => handleObs(e.target.value)}
            placeholder="Write what you observed, what surprised you, what questions came up, and what you'd try differently next time..." rows={8} />
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:12 }}>
            <span style={{ fontSize:12, color:C.brownLight }}>Your notes save automatically</span>
            <button style={{ ...s.btn(completed?C.sage:pc), padding:"8px 16px", fontSize:13 }} onClick={markDone}>
              {completed ? "✓ Completed" : "Mark as Complete"}
            </button>
          </div>
        </div>
      )}

      {/* Science Tab */}
      {activeTab === "science" && (
        <div style={{ ...s.card, padding:20 }}>
          <h3 style={{ ...s.h3, marginBottom:14 }}>🔬 What's Happening?</h3>
          <p style={{ ...s.body, marginBottom:20 }}>{exp.sci}</p>
          <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:16 }}>
            <div style={{ fontSize:12, color:C.brownLight, fontWeight:500, letterSpacing:"0.3px", textTransform:"uppercase", marginBottom:10 }}>Key Concepts Learned</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              {exp.tags.map(t => <span key={t} style={{ ...s.tag, background:pc+"18", color:pc }}>{t}</span>)}
            </div>
          </div>
        </div>
      )}

      {/* Go Further Tab */}
      {activeTab === "more" && (
        <div style={{ ...s.card, padding:20 }}>
          <h3 style={{ ...s.h3, marginBottom:6 }}>🚀 Go Further</h3>
          <p style={{ fontSize:13, color:C.brownLight, marginBottom:16 }}>Questions and challenges to deepen your understanding</p>
          <div style={{ display:"grid", gap:10 }}>
            {exp.more.map((q, i) => (
              <div key={i} style={{ padding:"12px 14px", background:C.bg, borderRadius:8, fontSize:14, lineHeight:1.6, color:C.brownMid, display:"flex", gap:10 }}>
                <span style={{ color:pc, fontWeight:600, flexShrink:0 }}>{i+1}.</span>
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── EBOOK READER VIEW ───────────────────────────────────────────────────────
function EbookView() {
  return (
    <div>
      <div style={{ marginBottom:24 }}>
        <div style={{ fontSize:13, color:C.brownLight, letterSpacing:"0.5px", textTransform:"uppercase", marginBottom:10 }}>PDF Ebook</div>
        <h1 style={{ ...s.h1, fontSize:26 }}>Ebook Reader</h1>
        <p style={{ ...s.body, marginTop:8, maxWidth:560 }}>Read the finished PDF while using the experiment journal alongside it.</p>
      </div>

      <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:18 }}>
        <a href={EBOOK_PDF} target="_blank" rel="noreferrer" style={{ ...s.btn(C.amber), textDecoration:"none", display:"inline-block" }}>
          Open PDF
        </a>
        <a href={EBOOK_PDF} download style={{ ...s.outlineBtn, textDecoration:"none", display:"inline-block" }}>
          Download
        </a>
      </div>

      <div style={{ ...s.card, height:"min(78vh, 900px)", minHeight:620 }}>
        <object data={EBOOK_PDF} type="application/pdf" width="100%" height="100%">
          <div style={{ padding:24 }}>
            <h3 style={{ ...s.h3, color:C.coral }}>Could not display the PDF here</h3>
            <p style={{ ...s.body, marginBottom:18 }}>Your browser may block embedded PDF viewing. Open or download the file instead.</p>
            <a href={EBOOK_PDF} target="_blank" rel="noreferrer" style={{ ...s.btn(C.amber), textDecoration:"none", display:"inline-block" }}>Open PDF</a>
          </div>
        </object>
      </div>
    </div>
  );
}

// ─── NOTES VIEW ───────────────────────────────────────────────────────────────
function NotesView({ notes, onChange }) {
  const [saved, setSaved] = useState(false);
  const timer = useRef();
  const handle = (v) => {
    onChange(v);
    setSaved(false);
    clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      await store.set("notes:global", v);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }, 700);
  };
  return (
    <div>
      <div style={{ marginBottom:28 }}>
        <div style={{ fontSize:13, color:C.brownLight, letterSpacing:"0.5px", textTransform:"uppercase", marginBottom:10 }}>Your Space</div>
        <h1 style={{ ...s.h1, fontSize:26 }}>Notes & Ideas</h1>
        <p style={{ ...s.body, marginTop:8, maxWidth:480 }}>A place for questions that don't fit anywhere else, ideas you want to remember, connections you notice, and things you want to look up.</p>
      </div>
      <div style={{ ...s.card, padding:20 }}>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:12 }}>
          <span style={{ fontSize:13, color:C.brownLight }}>Write freely. No format required.</span>
          {saved && <span style={{ fontSize:12, color:C.sage }}>✓ Saved</span>}
        </div>
        <textarea style={{ ...s.textarea, minHeight:340, fontSize:15 }} value={notes} onChange={e => handle(e.target.value)}
          placeholder={"Any thoughts, questions, ideas, or things that surprised you...\n\nSome starters if you need them:\n— Something I noticed today that I want to understand better:\n— A question I couldn't answer during an experiment:\n— A connection I noticed between two experiments:\n— Something I want to try next:\n— A scientist I want to learn more about:"} />
      </div>
    </div>
  );
}

// ─── PROGRESS VIEW ────────────────────────────────────────────────────────────
function ProgressView({ progress, onExp, onBack }) {
  const done = Object.values(progress).filter(Boolean).length;
  return (
    <div>
      <button style={{ ...s.outlineBtn, marginBottom:24, fontSize:13 }} onClick={onBack}>← Back</button>
      <div style={{ marginBottom:28 }}>
        <h1 style={{ ...s.h1, fontSize:26 }}>Your Progress</h1>
        <p style={{ ...s.body, marginTop:8 }}>{done === 0 ? "You haven't completed any experiments yet. Pick one and begin!" : `You've completed ${done} of 50 experiments. ${done < 10 ? "Just getting started!" : done < 30 ? "Making great progress!" : done < 50 ? "Almost there!" : "All 50! Extraordinary!"}`}</p>
      </div>
      {PARTS.map(part => {
        const exps = E.filter(e => e.p === part.id);
        const partDone = exps.filter(e => progress[e.id]).length;
        const pc = partColor(part.id);
        return (
          <div key={part.id} style={{ ...s.card, padding:20, marginBottom:14 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
              <span style={{ fontSize:22 }}>{part.icon}</span>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:500, fontSize:15 }}>{part.title}</div>
                <div style={{ fontSize:13, color:C.brownLight }}>{partDone}/10 completed</div>
              </div>
              <span style={{ fontSize:22, fontWeight:600, color:pc }}>{Math.round(partDone/10*100)}%</span>
            </div>
            <ProgressBar pct={Math.round(partDone/10*100)} color={pc} />
            <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginTop:14 }}>
              {exps.map(exp => (
                <div key={exp.id} onClick={() => onExp(exp.id)}
                  style={{ width:36, height:36, borderRadius:8, background:progress[exp.id]?pc:C.border+"80", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", fontSize:11, fontWeight:600, color:progress[exp.id]?"#FFF":C.brownLight, transition:"all .15s" }}
                  title={exp.title}>
                  {exp.n}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState("home");
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedExp, setSelectedExp] = useState(null);
  const [progress, setProgress] = useState({});
  const [notes, setNotes] = useState("");

  useEffect(() => {
    (async () => {
      const allProgress = {};
      for (const exp of E) {
        const d = await store.get(`done:${exp.id}`);
        if (d) allProgress[exp.id] = true;
      }
      setProgress(allProgress);
      const savedNotes = await store.get("notes:global");
      if (savedNotes) setNotes(savedNotes);
    })();
  }, []);

  const handleDone = (expId, isDone) => {
    setProgress(prev => ({ ...prev, [expId]: isDone }));
  };

  const goToExp = (expId) => {
    const exp = E.find(e => e.id === expId);
    setSelectedPart(exp.p);
    setSelectedExp(expId);
    setView("exp");
  };

  const activeNavItems = [
    { label:"Home", v:"home" },
    { label:"Ebook", v:"ebook" },
    { label:"Notes", v:"notes" },
    { label:"Progress", v:"progress" },
  ];

  return (
    <div style={s.app}>
      <FontLoader />
      <nav style={s.nav}>
        <span style={s.navLogo} onClick={() => setView("home")}>50 STEM Ideas ✦</span>
        <div style={{ display:"flex", gap:8 }}>
          {activeNavItems.map(item => (
            <button
              key={item.v}
              style={{ ...s.navBtn, background:view===item.v?C.brown:C.card, color:view===item.v?"#FFF":C.brownMid }}
              onClick={() => setView(item.v)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <main style={s.main}>
        {view === "home" && (
          <HomeView
            progress={progress}
            onPart={(partId) => {
              setSelectedPart(partId);
              setView("part");
            }}
          />
        )}

        {view === "part" && selectedPart && (
          <PartView
            partId={selectedPart}
            progress={progress}
            onExp={goToExp}
            onBack={() => setView("home")}
          />
        )}

        {view === "exp" && selectedExp && (
          <ExperimentView
            expId={selectedExp}
            onDone={handleDone}
            onBack={() => setView("part")}
          />
        )}

        {view === "ebook" && <EbookView />}
        {view === "notes" && <NotesView notes={notes} onChange={setNotes} />}
        {view === "progress" && (
          <ProgressView
            progress={progress}
            onExp={goToExp}
            onBack={() => setView("home")}
          />
        )}
      </main>
    </div>
  );
}
