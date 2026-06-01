
# PART 4

# MATH, CODING AND LOGIC

---

*Here is something nobody tells you often enough: mathematics is one of the most creative things humans do.*

*We often teach math as a set of procedures: follow these steps, get this answer. But this misses what mathematics actually is — a language for describing patterns, structures, and relationships. Math is how we understand the shape of a galaxy, the spread of a disease, the fairness of an election, the structure of a piece of music, and the security of every message you send on your phone.*

*Coding is a close cousin: it is the act of giving precise instructions to a machine, and in doing so, creating something that didn't exist before. Every app on your phone, every website you visit, every game you play began as an idea in someone's mind that they then translated, carefully, into a language a computer could follow.*

*The ten ideas in this part are about learning to see the world through the lens of patterns and logic. They include ciphers and encryption (how messages are hidden and revealed), computer animation and game design, symmetry and fractals, probability, and data visualization.*

*You don't need to be a math prodigy for any of this. You need curiosity, patience, and willingness to think systematically. These are skills, not talents — they get stronger the more you use them.*

---

## Ideas 31–33: Caesar Cipher, Logic Grid, Scratch Animation

---

### IDEA 31 — THE CAESAR CIPHER: YOUR FIRST ENCRYPTION
**The Mathematics of Secret Messages**

**Where:** Desk, with paper and pencil — no computer needed
**Time:** 30–45 minutes
**Mess level:** None

---

**The Story:**

Julius Caesar used a simple encryption method to send secret military messages over 2,000 years ago. The idea: shift every letter in the message forward by a fixed number in the alphabet. To decode it, you shift backward by the same amount.

This is called a *Caesar cipher*, and while it is too simple to use for real secrets today, understanding it gives you the foundation for understanding all of modern cryptography.

---

**How It Works:**

*Choosing a "key":* Pick a number. This is your key — how many letters you shift. Let's use **3**.

*Encryption:*
A → D
B → E
C → F
...
X → A (wrap around!)
Y → B
Z → C

So the message **HELLO** becomes **KHOOR**.

*Decryption:* Shift each letter back by 3.
K → H, H → E, O → L, O → L, R → O
**KHOOR** → **HELLO** ✓

---

**Make a Cipher Wheel:**

1. Cut two circles from cardboard — a larger outer circle and a smaller inner one.
2. Write A–Z around the edge of the outer circle (equally spaced).
3. Write A–Z around the inner circle in the same way.
4. Connect them with a paper fastener through the center so the inner circle rotates.
5. Set the inner circle so that A on the inner circle aligns with a letter on the outer circle — that's your key.

Now you can encrypt messages instantly using your wheel.

---

**Activities:**

1. Encrypt your full name using key = 5.
2. Write a secret message for a friend. Give them the key number separately. Can they decode it?
3. Can you decode this message without knowing the key? (This is called *codebreaking*.) The message: **WKXQGHUVWRUP** (key = 3). Hint: try all 25 possible shifts.
4. How many possible keys does a Caesar cipher have? Why does this make it weak?

---

**Going Deeper: Why Simple Ciphers Fail**

A Caesar cipher is vulnerable to *frequency analysis* — the observation that in any language, certain letters appear much more often than others. In English, E, T, A, O, I, N are most common. In a long encrypted message, the most common cipher letter probably represents E. This technique alone can crack a Caesar cipher in minutes, even without knowing the key.

Modern encryption (like the RSA encryption protecting your bank transactions and messages) uses mathematical operations involving very large prime numbers — operations that are easy to do but practically impossible to reverse without the key. The gap between easy and hard computation is what makes modern cryptography secure.

Ada Lovelace's vision of using mathematics for computation laid the philosophical foundation for all of this.

---

**What You Learned:**
*Cryptography, substitution ciphers, encryption and decryption, modular arithmetic, frequency analysis, the basis of modern cybersecurity.*

---

### IDEA 32 — LOGIC GRID PUZZLES
**Systematic Thinking and Deduction**

**Where:** Desk, with paper or printed grid
**Time:** 20–45 minutes per puzzle
**Mess level:** None

---

**What Is a Logic Grid Puzzle?**

A logic grid puzzle gives you a set of clues and asks you to figure out how different items are matched — which person has which pet, which job, lives in which house, and so on. No guessing is needed: pure logical deduction takes you to the answer.

---

**Example Puzzle (Beginner):**

*Three girls — Anh, Binh, and Chi — each won a prize in a different subject: Math, Science, and Literature.*

*Clues:*
1. Anh did not win in Science.
2. The Science winner is not Binh.
3. Chi won the Literature prize.

*Use a grid:*

|      | Math | Science | Literature |
|------|------|---------|------------|
| Anh  |      |         |            |
| Binh |      |         |            |
| Chi  |      |         |            |

*Working through it:*
- From clue 3: Chi won Literature. Mark Chi/Literature = ✓. Mark Chi/Math = ✗, Chi/Science = ✗.
- From clue 2: Binh did not win Science. Mark Binh/Science = ✗.
- Since neither Chi nor Binh won Science, Anh must have won Science. Mark Anh/Science = ✓. Mark Anh/Math = ✗, Anh/Literature = ✗.
- Since Binh didn't win Science or Literature, Binh won Math.

*Answer: Anh = Science, Binh = Math, Chi = Literature.*

---

**Why Logic Puzzles Matter:**

Logic puzzles develop *deductive reasoning* — the ability to derive conclusions with certainty from premises. This is:
- The foundation of mathematical proof
- Essential in programming (debugging requires methodical elimination of possibilities)
- Useful in everyday decision-making
- The core of legal argumentation and scientific reasoning

The process of marking what's impossible and narrowing down to what must be true is called *proof by elimination*, and it is one of the most powerful tools in mathematics.

---

**Your Challenges:**

*Intermediate Puzzle:*
Four girls — Dung, Lan, Mai, Phuong — each have a different after-school activity: coding, painting, basketball, and chess. They each come from a different grade: 5, 6, 7, 8.

Clues:
1. The grade 7 student plays basketball.
2. Lan is in grade 5.
3. Mai does coding.
4. The chess player is older than the basketball player.
5. Dung is in grade 8.
6. Lan does not paint.

*(Work it out! The full solution is at the end of this chapter.)*

**What You Learned:**
*Deductive reasoning, proof by elimination, logical thinking, grid-based problem solving, the foundations of formal logic.*

---

### IDEA 33 — SIMPLE ANIMATION WITH SCRATCH
**Your First Program**

**Where:** Computer with internet access (or tablet/phone for Scratch app)
**Time:** 60–90 minutes
**Mess level:** None

---

**What Is Scratch?**

Scratch is a free, visual programming language developed by MIT (Massachusetts Institute of Technology) that lets you create animations, games, and interactive stories by snapping together code blocks — like digital LEGO. It is used by millions of people around the world, including professional developers who use it to prototype ideas.

Visit: **scratch.mit.edu** (free, no download required)

---

**Project: A Walking Character Animation**

This project teaches you the core concepts of animation: *frames, loops, and timing.*

---

**Step 1: Choose Your Sprite**

In Scratch, animated characters are called *sprites*. Click "Choose a Sprite" and pick a character (the cat that comes by default works perfectly). You can also draw your own sprite.

---

**Step 2: Make It Walk**

Many sprites have multiple *costumes* — different versions of the image at different positions (this is what creates the illusion of movement in animation).

Click on the "Costumes" tab to see your sprite's costumes. If it has walking costumes (like the default cat, which has "costume1" and "costume2"), you can animate it.

---

**Step 3: Write the Code**

Click the "Code" tab and build this program using snap-together blocks:

```
when [green flag clicked]
forever
    switch costume to [costume1]
    wait [0.2] seconds
    switch costume to [costume2]
    wait [0.2] seconds
end
```

Click the green flag. Your character should now appear to walk in place — switching between two poses.

---

**Step 4: Add Movement**

Now add movement so it walks across the screen:

```
when [green flag clicked]
set x to [-200]
forever
    change x by [3]
    switch costume to [costume1]
    wait [0.1] seconds
    change x by [3]
    switch costume to [costume2]
    wait [0.1] seconds
    if <(x position) > [200]> then
        set x to [-200]
    end
end
```

This makes your character walk from left to right and loop back.

---

**Understanding the Code:**

- `when [green flag clicked]` — this is an *event trigger*. The code begins when you click the flag.
- `forever` — this is a *loop*. Everything inside runs again and again, forever, until you stop.
- `wait [0.2] seconds` — *timing control* that determines animation speed.
- `if...then` — a *conditional statement*. It checks a condition and only runs the code inside if that condition is true. This is one of the most fundamental structures in all programming.
- `change x by [3]` — *variables and coordinates*. X position tells the sprite where it is horizontally.

---

**What to Try Next:**
- Change the wait time. How does animation speed change?
- Add a background from the library.
- Make the character stop when it touches the edge.
- Add sound when the character moves.

**What You Learned:**
*Loops, conditionals, event triggers, variables, animation principles, computational thinking.*

---
---

## Ideas 34–36: Scratch Game, Symmetry in Art, Fractals

---

### IDEA 34 — MAKE YOUR FIRST GAME IN SCRATCH
**Computational Thinking in Action**

**Where:** Computer
**Time:** 90–120 minutes
**Mess level:** None

---

**Project: Catch the Star**

A ball (the player) moves with arrow keys. Stars fall from the top of the screen. The player catches stars to score points. Stars that fall off the bottom of the screen are lost.

---

**What You'll Build:**

*The Player Sprite:*
```
when [green flag clicked]
forever
    if <key [left arrow] pressed?> then
        change x by [-5]
    end
    if <key [right arrow] pressed?> then
        change x by [5]
    end
end
```

*The Star Sprite:*
```
when [green flag clicked]
set y to [180]
set x to [pick random (-220) to (220)]
forever
    change y by [-3]
    if <touching [player]> then
        change [score] by [1]
        set y to [180]
        set x to [pick random (-220) to (220)]
    end
    if <(y position) < [-180]> then
        set y to [180]
        set x to [pick random (-220) to (220)]
    end
end
```

*The Score Display:*
- Create a variable called "score" (in the Variables blocks menu).
- The score variable will appear on screen and update automatically.

---

**Game Design Concepts:**

*Game loop:* Most video games run a continuous loop: check input → update game state → draw screen → repeat. Your Scratch `forever` loops do exactly this.

*State variables:* The score, positions of sprites, whether the game is won or lost — these are all *state*. Variables store state.

*Collision detection:* Checking `touching [player]?` is collision detection — one of the most important (and complex to get right) problems in game development.

*Randomness:* Using `pick random` makes gameplay unpredictable and therefore interesting. Games use random numbers constantly.

---

**Extend Your Game:**
- Add increasing difficulty: make the stars fall faster as score increases.
- Add a timer: the game ends after 30 seconds.
- Add different types of stars worth different points.
- Add sound effects.
- Design your own sprites instead of using default ones.

**What You Learned:**
*Game loops, variables, collision detection, randomness, user input, game design, object-oriented thinking.*

---

### IDEA 35 — SYMMETRY IN ART AND MATHEMATICS
**Finding the Hidden Order**

**Where:** Desk or art table
**Time:** 45–60 minutes
**Mess level:** Low (paints possible)

---

**Mathematical Symmetry:**

A shape has *symmetry* if you can perform a transformation on it that leaves it looking exactly the same. The main types:

*Line symmetry (reflective symmetry):* You can draw a line through the shape and each half is a mirror of the other. A butterfly has line symmetry. A human face nearly does (but not quite).

*Rotational symmetry:* You can rotate the shape around a central point and it looks the same before completing a full rotation. A starfish has 5-fold rotational symmetry — it looks the same after rotating 72°, 144°, 216°, or 288°.

*Translational symmetry:* You can slide a pattern along a surface and it looks the same. Wallpaper patterns and tile floors use this.

*Point symmetry:* Rotating 180° around a central point gives the same shape.

---

**Activity 1: Symmetry Hunt**

Look around your home and find:
- 3 objects with line symmetry
- 2 objects with rotational symmetry
- 1 example of translational symmetry

Look for symmetry in nature: flowers (how many fold symmetry?), leaves, snowflakes (6-fold symmetry — always!), shells.

Look in art: Islamic geometric art, traditional embroidery patterns, mandalas — all built on mathematical symmetry principles.

---

**Activity 2: Create a Symmetrical Artwork**

*Fold and paint:*
1. Fold a piece of paper in half.
2. Drop blobs of paint on one half.
3. Fold, press firmly, unfold.
4. You get a perfectly symmetrically mirrored image — this is line symmetry through the fold line.

*Rotational mandala:*
1. Using a compass, draw circles of different sizes centered at one point.
2. Divide the circle into equal sections (6 sections = 60°, 8 sections = 45°, 12 sections = 30°).
3. Design one section, then repeat identically in every section.
4. Color using a symmetrical color scheme.

---

**Symmetry in Science:**

Symmetry isn't just beautiful — it is scientifically fundamental:

*Biology:* Most animals have bilateral symmetry (left-right mirror images). This is thought to reflect developmental efficiency and may be associated with fitness.

*Chemistry:* The symmetry of a molecule determines its properties — including its smell, taste, and how it interacts with other molecules. Two molecules that are mirror images of each other (called *enantiomers*) can have completely different biological effects.

*Physics:* The deepest laws of physics are expressions of symmetry. Noether's Theorem (proved by mathematician Emmy Noether in 1915) shows that every fundamental conservation law (conservation of energy, momentum, etc.) corresponds to a symmetry in the laws of physics.

**What You Learned:**
*Types of symmetry, symmetry in nature and art, mathematical properties, applications in science.*

---

### IDEA 36 — FRACTALS: THE INFINITY IN SIMPLE RULES
**Where Math Meets Art**

**Where:** Paper and pencil, OR a computer (optional)
**Time:** 30–60 minutes
**Mess level:** None

---

**What Is a Fractal?**

A fractal is a pattern that looks similar at every scale — if you zoom in, you see the same pattern repeating. Fractals are created by applying a simple rule over and over again (in math, this is called *iteration*).

Fractals appear everywhere in nature: coastlines, mountain ranges, clouds, lightning bolts, snowflakes, river networks, the branching of trees and blood vessels and lung airways, the patterns in broccoli (look at a Romanesco broccoli closely!).

---

**Draw a Koch Snowflake:**

*The rule:* Take a line. Replace the middle third with two sides of an equilateral triangle.

*Step 0:* Draw a straight line.
*Step 1:* Divide it into thirds. Remove the middle third. In its place, draw two sides of an equilateral triangle (making a bump in the middle). You now have 4 line segments where you had 1.
*Step 2:* Apply the same rule to every line segment. You now have 16 line segments.
*Step 3:* Apply again to every segment. 64 line segments.

Start with an equilateral triangle and apply this rule to every side. After several iterations, you get the Koch Snowflake — a shape with infinite perimeter but finite area.

*(Think about that: infinite perimeter, finite area. This is counterintuitive but mathematically provable. This is the kind of thing that makes mathematics strange and wonderful.)*

---

**Draw a Sierpinski Triangle:**

*The rule:* Take a filled triangle. Remove the middle triangle (the upside-down triangle made by connecting the midpoints of all three sides). Apply the same rule to the three remaining triangles. Repeat.

*Step 0:* Filled triangle.
*Step 1:* 3 filled triangles + 1 empty middle.
*Step 2:* 9 filled triangles.
*Step 3:* 27 filled triangles.

After infinite iterations, the total area of filled triangles approaches zero — but the overall triangle shape remains!

---

**Try on Computer:**

Search for "fractal explorer online" to see fractals like the Mandelbrot Set — the most famous fractal in mathematics, where a tiny, simple mathematical rule creates infinite complexity. You can zoom into any edge of the Mandelbrot Set forever, always finding new patterns.

**What You Learned:**
*Fractals, iteration, self-similarity, infinite perimeter/finite area, fractals in nature, mathematics of complex systems.*

---

## Ideas 37–40: Probability, Class Data, Phone Time, Data Visualization

---

### IDEA 37 — PROBABILITY WITH COINS AND DICE
**Understanding Randomness**

**Where:** Desk or table
**Time:** 45–60 minutes
**Mess level:** None

---

**The Key Idea:**

Probability measures how likely something is to happen. It ranges from 0 (impossible) to 1 (certain). A probability of 0.5 means equally likely to happen or not happen.

The probability of an event = (number of favorable outcomes) ÷ (total number of possible outcomes)

*Example:* Rolling a 3 on a standard die: 1 favorable outcome ÷ 6 possible outcomes = 1/6 ≈ 0.167

---

**Experiment A: Coin Flip**

Prediction: If you flip a coin 100 times, how many heads will you get? Most people say "50" — but will you actually get exactly 50?

Flip a coin 100 times. Tally heads and tails. Record the result after every 10 flips.

|Flips|Heads so far|Tails so far|% Heads|
|-----|------------|------------|-------|
|10   |            |            |       |
|20   |            |            |       |
|...  |            |            |       |
|100  |            |            |       |

What do you notice? After 10 flips, your result may be far from 50%. After 100, it should be closer. This illustrates the *Law of Large Numbers* — as sample size increases, the observed frequency approaches the theoretical probability.

---

**Experiment B: Dice and Expected Value**

Roll two dice 50 times. Record the sum each time. Which sum appears most often? Why?

There are 36 possible outcomes when rolling two dice (6 × 6). The sum 7 can be made in 6 ways (1+6, 2+5, 3+4, 4+3, 5+2, 6+1). The sum 2 can only be made in 1 way (1+1). So the probability of rolling a 7 is 6/36 = 1/6, while rolling a 2 is 1/36.

Draw a bar chart of your results. Does it match the theoretical prediction?

This is how casinos are designed: using probability, they know that over thousands of games, they will profit — the "house edge." Over a single game, anything can happen. Over many games, probability always wins.

---

**Experiment C: Random or Not?**

Write down a sequence of 30 coin flips from your imagination (H, T, H, H, T... ) without actually flipping. Then write down 30 actual coin flips.

Now compare: in a truly random sequence, you will often see runs of 5, 6, or 7 of the same result in a row. In an imagined "random" sequence, people usually avoid long runs — because our brains perceive them as "not random." But they are perfectly consistent with randomness.

This is why humans are very bad at intuiting probability — our brains look for patterns even in randomness.

**What You Learned:**
*Probability, Law of Large Numbers, expected value, experimental vs theoretical probability, randomness and human perception.*

---

### IDEA 38 — COLLECTING AND ANALYZING CLASS DATA
**Statistics in Your Own Classroom**

**Where:** School or home (with family)
**Time:** 45–60 minutes
**Mess level:** None

---

**The Project:**

Become a statistician. Choose a question, collect data from your classmates or family, analyze it, and present your findings.

---

**Choose a Research Question:**

Some ideas:
- How many hours of sleep do students in your class get each night? Does it vary by grade?
- What is the most popular after-school activity in your class?
- How do students travel to school? What is the most common method?
- What is the range of heights in your class?
- How many languages can students in your class speak?

---

**Collect Your Data:**

Create a simple survey. Collect responses from at least 15–20 people.

*Tip on survey design:* Be specific. "Do you sleep enough?" is vague. "How many hours of sleep did you get last night?" gives measurable data.

---

**Analyze Your Data:**

Calculate:
- *Mean:* Add all values, divide by number of values. (Average.)
- *Median:* Arrange values in order. The middle value. (Half the values are above, half below.)
- *Mode:* The most commonly occurring value.
- *Range:* Highest value minus lowest value.

Which measure is most useful for your question? They each tell you something different. For example, if 19 students sleep 7–8 hours and 1 student sleeps 2 hours, the mean will be pulled down by that outlier — but the median will better represent the typical student.

---

**Display Your Data:**

- For categories (transport types, favorite subjects): bar chart or pie chart
- For continuous measurements (height, sleep hours): histogram or box plot
- For showing individual data points: dot plot

---

**Draw Conclusions:**

Write a short summary:
- What did you find?
- Were there any surprises?
- What patterns emerged?
- What further questions does this raise?
- What limitations does your data have? (Small sample? Self-reported? Possible bias?)

**What You Learned:**
*Data collection, survey design, descriptive statistics, mean/median/mode/range, data visualization, drawing conclusions from data.*

---

### IDEA 39 — ANALYZING YOUR OWN PHONE / SCREEN TIME DATA
**Personal Data Science**

**Where:** Home
**Time:** 30–40 minutes
**Mess level:** None

---

**The Idea:**

Your smartphone already collects data about you. In Settings (on most smartphones), you can find *Screen Time* (iPhone) or *Digital Wellbeing* (Android) data showing:
- Total daily screen time
- Breakdown by app category
- How many times you pick up your phone each day
- Which apps you use most

This is real data about your own behavior. Analyzing it is a genuine data science exercise.

---

**Collect Data Over One Week:**

Every day for one week, record (or screenshot) your screen time data:
- Total screen time (hours and minutes)
- Time on social media
- Time on entertainment/video
- Time on games
- Time on education/productivity
- Number of pickups

---

**Analyze:**

1. Calculate your daily average total screen time.
2. What percentage is each category?
3. Is there a day of the week pattern? (More screen time on weekends?)
4. Does your screen time correlate with how productive or happy you felt that day?

---

**Reflect:**

- Does your screen time data match your perception of how much you use your phone?
- (Most people underestimate their screen time significantly — this is a well-documented cognitive bias.)
- How does your data compare to published statistics on average screen time for your age group?
- What changes, if any, do you want to make based on what you found?

---

**The Bigger Picture:**

Your phone data is just one example of what is now called *personal data* — the massive amount of information digital devices collect about us. This data is used by companies to serve ads, by researchers to study behavior, and by governments for various purposes. Understanding data — how it's collected, what it means, and what its limitations are — is a critical skill for life in the 21st century.

**What You Learned:**
*Data collection, personal analytics, screen time patterns, data literacy, cognitive bias, critical thinking about technology.*

---

### IDEA 40 — MAKING DATA VISIBLE: BUILDING A DATA VISUALIZATION
**Telling Stories with Numbers**

**Where:** Computer (spreadsheet software) or paper and colored pens
**Time:** 60–90 minutes
**Mess level:** None

---

**The Power of Visualization:**

Numbers on a page are hard to understand quickly. A well-designed chart or graph communicates the same information instantly — showing patterns, comparisons, and stories that are invisible in the raw numbers.

Data visualization is now one of the most important skills in science, business, journalism, and public health. The scientists and analysts who communicated COVID-19 data to the public were doing data visualization.

---

**Project: Create an Infographic Poster**

Choose a dataset that matters to you. Some ideas:
- Climate data (average temperatures in your city over 50 years)
- Population data (your country's population by age group)
- Gender gaps in STEM fields (% of women in different careers)
- Your class's data from Idea 38

---

**Choosing the Right Chart:**

| What you want to show | Best chart type |
|----------------------|-----------------|
| Comparison between categories | Bar chart |
| Change over time | Line chart |
| Part of a whole | Pie chart |
| Relationship between two variables | Scatter plot |
| Distribution of values | Histogram |

---

**Design Principles:**

*Accuracy:* Your chart must accurately represent the data. Truncating the y-axis (starting at a number other than 0) can make small differences look dramatic — this is a common way charts mislead.

*Clarity:* Remove everything that doesn't help the reader understand the data. Label axes clearly. Use a legend if needed.

*Honesty:* Don't choose colors, scales, or chart types that exaggerate your findings or lead the reader to incorrect conclusions.

*Story:* The best data visualizations tell a clear story. What is the one thing you want your reader to take away?

---

**Using Spreadsheet Software:**

In Google Sheets or Excel:
1. Enter your data in rows and columns.
2. Select the data.
3. Insert → Chart.
4. Choose chart type.
5. Customize colors, labels, and title.

---

**Create a Paper Version:**

If you don't have access to software, create your visualization by hand on poster paper:
- Use graph paper as a guide for bar charts.
- Use a compass for pie charts.
- Use rulers for line charts.
- Add color for clarity and visual appeal.

**What You Learned:**
*Data visualization principles, chart types and their uses, misleading charts, storytelling with data, spreadsheet tools.*

---

*End of Part 4 — Math, Coding and Logic*

*Mathematics is not just about getting the right answer. It is about seeing the patterns in the world around you, and having tools to describe those patterns precisely. Coding is not just about making apps — it is about learning to break any complex problem into small, logical steps.*

*Whether you become a data scientist, a game developer, a biologist, an economist, or something entirely different — the thinking skills you've practiced in this part will serve you for the rest of your life.*

---

# PART 5

# STEM FOR A BETTER WORLD

---

*We've saved this part for last, because it is in some ways the most important.*

*All the science, engineering, mathematics, and technology in the previous four parts are tools. What matters is what we do with those tools.*

*The world you are growing up in faces extraordinary challenges: climate change, plastic pollution, biodiversity loss, water scarcity, food insecurity, and persistent inequality in access to education and resources. These are not small problems. They are urgent, complex, and interconnected. They will not be solved by one country, one organization, or one generation.*

*They will be solved by people — people with scientific knowledge, engineering creativity, mathematical precision, and most importantly, the will to use their skills for the benefit of all.*

*Girls and women have a critical role to play in this work. Research on environmental leadership and community-based science consistently shows that women are often among the most effective advocates for environmental protection and sustainable development — and are also among the most affected by environmental degradation. Bringing women fully into the conversation and the leadership of these challenges is not just a matter of fairness. It is a matter of effectiveness.*

*The ten ideas in Part 5 invite you to do STEM on purpose — with a specific intention to understand and improve the world around you. Some projects are small. Some might grow into something larger. All of them connect you to some of the most important scientific and engineering work happening in the world right now.*

*You are not too young to contribute. The most important environmental activists of the 21st century include many who started their work as teenagers — and the most impactful scientists solving environmental problems are doing work that builds, step by step, on exactly the kind of curiosity and observation you'll practice here.*

---

## Ideas 41–43: Eco-Enzyme, Plastic Survey, Insulation Test

---

### IDEA 41 — MAKING ECO-ENZYME
**Turning Kitchen Waste into a Natural Cleaner**

**Where:** Home (needs 3 months of patience!)
**Time:** Setup: 30 minutes. Waiting: 3 months. Worth it!
**Mess level:** Low

---

**What Is Eco-Enzyme?**

Eco-enzyme (also called garbage enzyme or fruit enzyme) is a liquid produced by fermenting fruit and vegetable scraps with sugar and water. The result is a multipurpose natural cleaner, fertilizer, and pest deterrent that uses materials you would otherwise throw away.

This technique was developed and popularized by Dr. Rosukon Poompanvong in Thailand and is now used by environmental communities across Southeast Asia, including Vietnam, Malaysia, and Indonesia.

---

**What You Need:**
- 1 part brown sugar or molasses (e.g., 100g)
- 3 parts fresh fruit/vegetable scraps (e.g., 300g) — citrus peels work exceptionally well; avoid cooked food, meat, or oily scraps
- 10 parts water (e.g., 1000ml = 1 liter)
- A plastic bottle or jar with a loose-fitting lid (not airtight — it needs to breathe)
- A label and marker

---

**What To Do:**

1. Dissolve the sugar in the water in your container.
2. Add the fruit and vegetable scraps.
3. Close loosely. Label with the date and contents.
4. For the first month, open the container daily to stir and release built-up gas.
5. After 3 months, strain out the solid material. The liquid is your eco-enzyme.

*The solids can be composted.*

---

**What's Happening?**

The sugar feeds *fermentation* — a process in which microorganisms (mostly beneficial bacteria and yeast) break down the organic material and produce:
- *Acids* (which give eco-enzyme its cleaning properties)
- *Enzymes* (which break down organic stains and odors)
- *Alcohol* (in small amounts, as a byproduct)

The citrus peels add limonene — a natural solvent that cuts grease.

---

**Uses for Eco-Enzyme:**

- *Floor cleaner:* Dilute 1 part eco-enzyme with 10 parts water.
- *Plant fertilizer:* Dilute 1 part eco-enzyme with 500 parts water and apply to plants.
- *Fruit and vegetable wash:* Dilute in water to remove pesticide residue.
- *Drain cleaner:* Pour undiluted down drains to clear buildup.
- *Pest deterrent:* Spray diluted on plants.

---

**The Bigger Picture:**

Organic waste (food scraps) sent to landfill decomposes anaerobically (without oxygen), producing methane — a greenhouse gas around 25 times more potent than CO₂ over a 100-year period. Eco-enzyme production is one of hundreds of ways individuals and communities can reduce organic waste while creating something useful.

*Keep a production log:* Record the date you started, the ingredients you used, observations during fermentation (color changes, smell, gas production), and your assessment of the final product.

**What You Learned:**
*Fermentation, microbiology, organic chemistry, waste reduction, natural cleaning products, circular economy principles.*

---

### IDEA 42 — PLASTIC WASTE SURVEY IN YOUR SCHOOL OR NEIGHBORHOOD
**Citizen Science for Environmental Action**

**Where:** School, home neighborhood, park, or market
**Time:** 2 hours for data collection; 1–2 hours for analysis
**Mess level:** None (bring gloves!)

---

**What Is Citizen Science?**

Citizen science is scientific research conducted by members of the public, often in collaboration with or under the guidance of professional researchers. It allows data to be collected at a scale impossible for small research teams — and it gives ordinary people the power to contribute to real scientific knowledge.

Your plastic waste survey is a genuine citizen science project.

---

**Design Your Survey:**

*Research question:* What is the composition of plastic waste in [your location]? Are certain types more common? Where does it concentrate?

*Survey area:* Choose a defined area — your school yard, a section of your street, a park, a market.

*Categories to record:* For each piece of plastic waste you observe and/or collect, record:
- Type of plastic (bottle, bag, food packaging, straw, cup, other)
- Estimated size (small <10cm, medium, large)
- Condition (intact, broken, very degraded)
- Location found (ground, drainage, near bin, etc.)
- Brand if visible (optional — this can be used for brand accountability data)

*Sample area and time:* Be consistent. Survey the same area at the same time each week, or survey different areas using the same time limit.

---

**Collect Your Data:**

Take gloves. Take a bag (ideally for recycling/sorting). Take your notebook.

Walk the survey area carefully. Count and record each piece of plastic waste. If safe to do so, collect it for closer categorization.

---

**Analyze:**

- What is the total number of pieces?
- What are the most common types?
- Is there a pattern in where plastic concentrates?
- How does it compare week to week?

---

**Present and Share:**

Create a presentation or poster of your findings to share with your class, school, or community. Data presented clearly can be a powerful tool for change.

Consider: Could you share your data with your local government, school administration, or an environmental organization?

---

**Connect to the Bigger Picture:**

An estimated 8 million metric tons of plastic enter the ocean every year. Microplastics — tiny fragments of degraded plastic — have now been found on the highest peaks of the Himalaya, in the deepest trenches of the ocean, in the air of remote Arctic wilderness, and in human blood. This is one of the most widespread pollution challenges in history.

Your survey contributes to understanding the local source of this global problem.

**What You Learned:**
*Citizen science methodology, data collection design, environmental surveying, waste composition analysis, plastic pollution awareness, scientific communication.*

---

### IDEA 43 — TESTING INSULATING MATERIALS
**Which Material Keeps Things Warmest Longest?**

**Where:** Home or school
**Time:** 60–90 minutes
**Mess level:** Low

---

**The Question:** Which everyday material is the best thermal insulator?

**Why It Matters:**

Thermal insulation is fundamental to energy efficiency in buildings. Poor insulation means energy (and money) is constantly lost — heating systems work harder to maintain temperature. In developing countries, poor building insulation contributes significantly to energy poverty. In the context of climate change, improving building insulation is one of the most cost-effective ways to reduce energy use and carbon emissions.

---

**What You Need:**
- Several identical small cans or cups (yogurt containers work)
- Hot water (the same temperature each time — boil and let cool to exactly the same temperature)
- A thermometer
- Insulating materials to test: wool fabric, cotton fabric, aluminum foil, newspaper (crumpled), bubble wrap, polystyrene (styrofoam), plastic bag, nothing (control)
- A timer
- A notebook

---

**What To Do:**

1. Wrap identical containers in each insulating material. The control is unwrapped.
2. Pour hot water at the same temperature into each container.
3. Record the starting temperature.
4. Measure and record temperature every 5 minutes for 30 minutes.
5. The container that loses heat most slowly has the best insulation.

---

**Record Your Results:**

| Time (min) | Control | Wool | Foil | Newspaper | Bubble wrap | Styrofoam |
|------------|---------|------|------|-----------|-------------|-----------|
| 0          |         |      |      |           |             |           |
| 5          |         |      |      |           |             |           |
| 10         |         |      |      |           |             |           |
| 15         |         |      |      |           |             |           |
| 20         |         |      |      |           |             |           |
| 25         |         |      |      |           |             |           |
| 30         |         |      |      |           |             |           |

Plot all results on a single graph (temperature on y-axis, time on x-axis, one line per material). The line that drops least steeply is the best insulator.

---

**What's Happening?**

Heat moves by three mechanisms:
- *Conduction:* Direct transfer through contact. Materials with tightly packed molecules conduct well (metals). Materials with trapped air pockets conduct poorly.
- *Convection:* Heat transfer through moving fluid (air or liquid). Good insulators prevent air from circulating.
- *Radiation:* Emission of infrared radiation. Foil reflects radiation.

The best insulators (wool, styrofoam, aerogel in advanced applications) work by trapping small pockets of air — because air is an excellent insulator. The material itself isn't always what's insulating; the trapped air is.

**What You Learned:**
*Thermal insulation, heat transfer mechanisms, controlled experiment design, data graphing, materials science, energy efficiency.*

---

## Ideas 44–46: Green House, Solar Energy, Water Quality

---

### IDEA 44 — BUILDING A MODEL GREEN HOUSE
**Designing a Sustainable Living Space**

**Where:** Home, with access to recycled materials
**Time:** 2–3 hours
**Mess level:** Medium

---

**The Challenge:**

Design and build a model house (at 1:50 scale, so 1 cm in the model = 50 cm in reality) that incorporates as many sustainable design features as possible:

- Solar orientation (windows facing south in the northern hemisphere to maximize winter sun)
- Natural ventilation (openings placed to create cross-ventilation)
- Thermal mass (heavy materials inside that absorb heat during the day and release it at night)
- Green roof (a layer of plants on the roof for insulation and stormwater management)
- Rainwater collection (a sloped roof that channels water to a tank)
- Natural light optimization (skylights, light-colored interior surfaces)

---

**Materials:**

Recycled cardboard, foam, fabric scraps, plastic packaging, clay, sand, soil, small plants/moss, bottle caps, foil, fabric.

---

**Design First:**

Sketch a floor plan and elevation (front view) before building. Label every sustainable feature and explain why you included it.

Consider:
- Which direction does sunlight come from at your location?
- How do breezes typically flow in your area?
- What local materials and techniques are traditionally used in your region? (Traditional Vietnamese architecture, for example, incorporates many passive cooling principles.)

---

**Build and Evaluate:**

After building, use a lamp to simulate sunlight:
- Test whether your sunlight-facing windows actually let more light in.
- Test whether your ventilation openings create airflow (you can use a lit incense stick and watch the smoke — with adult supervision).
- Measure interior temperature versus an uninsulated control box.

**What You Learned:**
*Sustainable architecture, passive design, solar orientation, thermal mass, green building principles, energy efficiency, scale models.*

---

### IDEA 45 — EXPLORING SOLAR ENERGY WITH A MINI MODEL
**Harvesting Light**

**Where:** Home, outdoors in sunlight
**Time:** 60–90 minutes
**Mess level:** Low

---

**Project A: Solar Thermal — Heating Water with Sunlight**

Build a simple solar water heater using a coil of black hose or tubing:

1. Paint or wrap a length of plastic tubing in black (or use pre-blackened tubing).
2. Coil it on a dark-colored backing board inside a transparent plastic bag or covered in clear plastic wrap (to create a greenhouse effect).
3. Run water through the coil using gravity (position input higher than output, or use a small aquarium pump).
4. Measure the temperature of water entering and leaving the coil in full sunlight.

*This is the same principle used in solar thermal panels on rooftops around the world to heat water for homes.*

---

**Project B: Solar Photovoltaic — Powering a Small Device**

If you can access a small solar panel (available cheaply from electronics suppliers or salvaged from solar garden lights):

1. Connect the solar panel to a small LED or motor.
2. Measure the output in full sun, partial shade, and complete shade.
3. Try different angles of the panel relative to the sun. At what angle is output maximum?

*The angle that gives maximum output is the angle at which the panel faces the sun most directly — perpendicular to the incoming rays. This is why large solar installations track the sun's movement across the sky.*

---

**The Bigger Picture:**

Solar energy is now the cheapest source of electricity in history — cheaper than coal in most countries. The dramatic cost reduction (solar panel prices fell by more than 90% between 2010 and 2023) is one of the most remarkable technological developments in history, driven by improvements in manufacturing, materials science, and economies of scale.

Vietnam, as of recent years, has become one of the fastest-growing solar energy markets in the world — solar power now represents a significant portion of the country's electricity generation.

**What You Learned:**
*Solar energy principles, solar thermal vs photovoltaic, panel angle and efficiency, energy conversion, renewable energy technology.*

---

### IDEA 46 — SIMPLE WATER QUALITY TESTING
**Becoming an Environmental Analyst**

**Where:** Home or school; water samples from different sources
**Time:** 60–90 minutes
**Mess level:** Low (avoid getting test chemicals on skin)

---

**Testing Parameters:**

You will test water samples from different sources (tap water, rain water, river/pond water if available, bottled water) for:
1. **pH** — using your red cabbage indicator or pH strips
2. **Turbidity** — how cloudy/clear the water is (visual assessment or a simple light test)
3. **Dissolved solids (TDS)** — if you have a basic TDS meter (inexpensive, available online)
4. **Presence of contaminants** — iron test with specific test strips available from hardware stores; chlorine test with pool test kits

---

**Simple Turbidity Test:**

1. Print or draw a small symbol (a star or letter) on white paper.
2. Place the paper under your water sample in a clear glass.
3. Look down through the water from the top.
4. Record: Can you see the symbol clearly, somewhat, barely, or not at all?
5. This gives you a relative turbidity measure.

---

**Create a Water Quality Report:**

For each water source, record all your measurements. Create a "Water Quality Report" in table form, like an official scientific document. Include:
- Source name and collection location
- Date and time of collection
- Results of each test
- Comparison to WHO or national drinking water standards (look these up)
- Your conclusions: Is this water likely safe? What would treatment be needed?

---

**What You Learned:**
*Water quality parameters, pH, turbidity, TDS, water testing methods, comparison to safety standards, environmental analysis.*

---

## Ideas 47–50: Hydroponics, Upcycling, Data Poster, STEM Project

---

### IDEA 47 — GROWING PLANTS WITHOUT SOIL: MINI HYDROPONICS
**Food Science of the Future**

**Where:** Home, indoors
**Time:** Setup: 1 hour. Growing period: 2–4 weeks
**Mess level:** Low (water careful)

---

**What Is Hydroponics?**

Hydroponics is the practice of growing plants in a nutrient-rich water solution rather than soil. The plant's roots are submerged in or regularly supplied with water containing all the minerals the plant needs. Without soil, plants can grow faster, use much less water, and be grown anywhere — including indoors, in cities, in deserts, or in space.

Hydroponic farming is one of the most promising technologies for sustainable food production in the 21st century. It uses 90% less water than conventional farming, can be done in urban areas (eliminating transportation emissions), and can produce crops year-round regardless of climate.

---

**What You Need:**

*Deep water culture system (simplest setup):*
- A dark-colored plastic container (to block light and prevent algae)
- Net pots or cups with holes (or make holes in styrofoam to hold cups)
- A small aquarium air pump with tubing and air stone (keeps water oxygenated)
- Hydroponic nutrient solution (available online or at garden shops — or you can research and mix your own mineral salts)
- Growing medium: rockwool, clay pebbles, or clean gravel
- Seeds: lettuce, spinach, cress, or herbs work best for beginners
- Water

---

**Setup:**

1. Fill the container with nutrient solution.
2. Fit your net pots into the lid so the bottom of each pot is just touching the solution.
3. Place a small piece of rockwool or gravel in each pot. Place 2–3 seeds on the growing medium.
4. Run the air pump to oxygenate the water.
5. Cover the container (light on the plants, dark on the water).
6. Within 3–7 days, seeds should sprout. Within 2–4 weeks, you may be able to harvest!

---

**Experiment Within the Project:**

- Grow the same plant hydroponically and in soil. Compare growth rate, leaf size, and yield.
- Try different nutrient concentrations. Too little: slow growth. Too much: nutrient burn.
- Try different light sources: natural sunlight vs. LED grow light.

---

**Record Keeping:**

Every 2 days, record: plant height, number of leaves, color of leaves (pale yellow = nutrient deficiency), root length (visible through clear growing medium), water level and color.

**What You Learned:**
*Plant nutrition, hydroponics technology, photosynthesis, sustainable agriculture, plant growth factors, experimental comparison.*

---

### IDEA 48 — CREATING USEFUL PRODUCTS FROM RECYCLED MATERIALS
**Design Thinking and Circular Economy**

**Where:** Home
**Time:** 1–2 hours
**Mess level:** Medium

---

**The Circular Economy:**

The traditional economic model is linear: *make → use → throw away*. In a circular economy, materials cycle: *make → use → recover → remake*. Upcycling — transforming waste materials into something of higher value — is a core principle of the circular economy.

---

**Your Challenge:**

Design and make one useful, beautiful, or innovative product using only materials that would otherwise be discarded. The product should have genuine use — it should solve a real problem or meet a real need.

---

**Ideas and Inspiration:**

*From plastic bottles:*
- A vertical garden planter (cut bottles, mounted on a wall with soil and plants)
- A desk organizer (cut, sand smooth, decorate)
- A bird feeder
- A self-watering plant pot (bottom half holds water, top half holds soil with a wick)

*From newspaper/cardboard:*
- Strong storage boxes (origami techniques for cardboard)
- Seedling starter pots (biodegradable — plant directly in soil)
- Decorative paper beads (tightly rolled paper coated in varnish)

*From glass jars:*
- Solar-charged fairy light lanterns
- Herb garden
- Desk organizer

*From fabric scraps:*
- Tote bags (zero-sew versions using fabric glue)
- Beeswax wraps (as a sustainable alternative to plastic wrap)
- Small pouches for carrying seeds, pens, or jewelry

---

**Document Your Process:**

Take photos at each stage. Write or draw:
1. The problem/need you identified
2. The material you started with
3. Your design sketch
4. The making process (what worked, what didn't)
5. The final product and its use
6. Environmental impact: What would have happened to this material if not upcycled?

**What You Learned:**
*Design thinking, circular economy, upcycling, sustainable production, creative problem-solving, material properties.*

---

### IDEA 49 — DESIGN AN ENVIRONMENTAL DATA POSTER
**Science Communication**

**Where:** Home or school
**Time:** 60–90 minutes
**Mess level:** None to low

---

**Why Science Communication Matters:**

The most important scientific finding in the world does nothing if no one knows about it or understands it. Scientists communicate through papers, presentations, and — for public audiences — through accessible, visual communication. A well-designed infographic poster can change minds, influence policy, and move people to action.

---

**Your Task:**

Choose one environmental issue. Research the data around it. Design a poster (A2 or A1 size — or digital) that communicates the most important facts clearly, accurately, and compellingly.

---

**Possible Topics:**
- Plastic pollution in the ocean: scale, sources, impact on marine life
- Deforestation: rates, causes, ecosystem consequences
- Air quality in cities: measurements, health impacts, sources
- Biodiversity loss: species extinction rates, causes, consequences
- Water scarcity: which regions, why, future projections
- Climate change in your country: temperature trends, sea level rise, extreme weather

---

**Design Your Poster:**

*Lead with the most important finding.* What is the one number, trend, or fact that people must know? Make it big and bold.

*Use visuals that represent scale.* The human brain understands comparisons better than raw numbers. "Enough plastic is produced each year to fill 100,000 Eiffel Towers" is more comprehensible than "380 million tonnes."

*Be accurate.* Use data from credible sources: IPCC, UNEP, WHO, Our World in Data, national environmental agencies. Cite your sources.

*Keep it simple.* Three key messages, clearly communicated, are more powerful than twelve messages that overwhelm the reader.

*Be honest about uncertainty.* Science involves ranges, confidence levels, and uncertainty. Communicate this honestly rather than overstating certainty.

---

**Share It:**

Share your poster with your class, your school, or post it online (with your teacher or parents' guidance). Ask for feedback. Did people understand the main message? Did it change how they think about the issue?

**What You Learned:**
*Science communication, data visualization, environmental literacy, research skills, design principles, media literacy.*

---

### IDEA 50 — DESIGN YOUR OWN STEM PROJECT TO SOLVE A SCHOOL PROBLEM
**Becoming an Inventor**

**Where:** Wherever your problem is!
**Time:** This is an ongoing project — weeks or months
**Mess level:** Depends on what you make!

---

**This is the Final Idea — and the Most Open-Ended.**

For Ideas 1–49, we gave you the question. Idea 50 asks you to find your own.

---

**Step 1: Observe Your School (or Community)**

Spend one week paying attention — really paying attention — to problems and inefficiencies in your school or neighborhood. Carry your science journal and write down everything that seems problematic, wasteful, uncomfortable, unfair, or just harder than it needs to be.

Some possible areas to observe:
- Energy use (lights left on, inefficient cooling/heating)
- Water use (leaky taps, long handwashing queues)
- Waste (where does trash go? Is anything recycled?)
- Food (cafeteria waste? Packaging?)
- Learning (something that's hard to understand because there's no good visual aid?)
- Accessibility (is the school easy to navigate for everyone?)
- Safety (a place that gets slippery when wet? Poor lighting?)

Write down *everything*. Don't judge whether it's "important enough." You're observing.

---

**Step 2: Choose Your Problem**

Look at your list. Which problem:
- Matters to more than one person?
- Seems like it *could* be solved?
- Connects to something you find interesting?

Choose one problem and write it as a clear *problem statement*:

*"In our school, [specific problem happens] because [reason], which means [consequence for people]."*

Example: *"In our school, students waste a large amount of food at lunch because portion sizes are fixed regardless of appetite, which means good food goes into landfill and money is wasted."*

---

**Step 3: Research**

Find out:
- Has anyone else tried to solve this problem?
- What approaches have worked elsewhere?
- What do experts say about this issue?
- What resources and constraints do you have?

---

**Step 4: Design a Solution**

Brainstorm at least five possible solutions. Evaluate each:
- Is it feasible with available resources?
- Does it actually address the root cause of the problem?
- Are there unintended consequences?
- Who would need to be involved?

Choose your best solution and plan it out in detail.

---

**Step 5: Build, Test, Improve**

Create a prototype — a first version of your solution. Test it in the real situation. Gather feedback. Improve. Test again.

---

**Step 6: Present Your Work**

Create a presentation that includes:
1. The problem statement (with evidence — data you collected)
2. Your research into existing approaches
3. Your solution design
4. How you tested it
5. Results and evaluation
6. What you would do next

Present to your class, your teachers, or your school administration. Real change often starts with exactly this kind of presentation.

---

**You Are Ready.**

You have spent this entire book learning to observe, question, experiment, design, build, test, and improve. Those are not just science skills. They are life skills — the skills of someone who sees a problem and says, *I think I can do something about that.*

That is what a scientist is.
That is what an engineer is.
That is what you are becoming.

---

*End of Part 5 — STEM for a Better World*

*The word "STEM" can feel like an acronym, a category, a career track. But at its deepest, it is something much simpler: it is the human impulse to understand the world and improve it.*

*That impulse belongs to you.*

---
