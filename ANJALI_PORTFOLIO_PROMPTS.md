# Anjali's Portfolio — 25 Generation Prompts
## How to use: Paste each prompt directly into Claude with frontend-design skill active.
## Canvas size for screenshots: Set browser window to 1600x1200 before screenshotting.
## Video shots: Use screen recording, capture 8-12 seconds of the interaction.

---

## 🔥 HERO SHOTS (1-5)

---

### SHOT 01 — Finance Dashboard (Web · Dark · 📸 Photo)
**Tool: Claude or v0.app**

```
Create a stunning personal finance dashboard as a single HTML page.

AESTHETIC: Premium dark fintech. Think Linear.app meets CRED. Obsidian black background (#0A0A0F), electric indigo accent (#6366F1), warm gold highlights (#F59E0B) for positive numbers. Glassmorphism cards with subtle borders. This should look like something a Forbes 30-under-30 founder uses.

LAYOUT (1600x900 viewport, desktop web):
- Left sidebar: Logo "Finflow", nav icons with labels (Overview, Transactions, Investments, Cards, Settings). Active state glowing.
- Main content area split into:
  TOP ROW: 3 stat cards — Total Balance (₹4,82,350), Monthly Spend (₹38,200 ↓12%), Investments (₹1,20,000 ↑8.4%)
  MIDDLE: Large area chart showing 6-month spending trend with gradient fill. Months: Oct-Mar. Smooth curves. Animated on load.
  BOTTOM ROW LEFT: Recent transactions list — Zomato ₹340, PhonePe transfer ₹5000, Myntra ₹1299, Swiggy ₹285, Netflix ₹649. Each with merchant icon colored circle, category tag.
  BOTTOM ROW RIGHT: Spending by category donut chart — Food 32%, Shopping 24%, Transport 18%, Entertainment 14%, Other 12%. Legend alongside.
- Top right: User avatar (Anjali S.), notification bell with red dot, dark/light toggle.

TYPOGRAPHY: Clash Display for numbers/headings, Satoshi for body text. Numbers should feel alive — large, bold, breathing.

MICRO-DETAILS: Noise texture on background, subtle grid lines on chart, hover states on all cards with gentle glow, staggered fade-in animation on load (0.1s delay per element). The charts must actually render with data — use Chart.js or pure SVG.

Make it screenshot-worthy. Every pixel should feel intentional.
```

---

### SHOT 02 — Food Delivery Home (Mobile · Light · 🎥 Video)
**Tool: Claude**

```
Create an animated food delivery home screen as a single HTML page. This is for screen recording — the animations are the portfolio piece.

AESTHETIC: Warm, appetizing, joyful. Inspired by Swiggy but 10x more beautiful. Coral-orange primary (#FF5722), warm cream background (#FFFBF5), rich dark text (#1A1A1A). Food photography feel — warm, saturated, delicious.

LAYOUT (390px wide, mobile, centered on page with phone mockup frame around it):
- Top: Location pill "Sector 62, Noida ▾", search bar with "Biryani, Pizza, Sushi...", cart icon with badge
- Category chips scrolling horizontal: 🍕 Pizza  🍜 Chinese  🍱 Biryani  🥗 Healthy  🧁 Desserts  ☕ Café
- "Delivering in 28 mins 🔥" banner with orange gradient
- Featured restaurant card (large, full-width hero card): "Paradise Biryani" with gorgeous food image, 4.5⭐, 28 mins, ₹40 delivery, "OFFERS" tag
- Restaurant cards grid (2 columns): Wow Momo, Domino's, McDonald's, Burger King — each with image, rating, time, cuisine tag

ANIMATIONS (these are the reason we're building this):
1. On page load: Cards slide up with stagger (0.15s each), opacity 0→1
2. Category chips: Auto-scroll left smoothly on loop, pause on hover
3. "28 mins" text: Gentle pulse animation
4. Featured card: Parallax-style shimmer/shine sweep across image every 4 seconds
5. Add to cart button on hover: Scale up 1.05 with spring bounce

Make every animation feel native, not CSS-toy. 60fps feel. This will be screen-recorded for 10 seconds.
```

---

### SHOT 03 — Meditation Session Screen (Mobile · Dark · 📸 Photo)
**Tool: Claude**

```
Create a meditation app active session screen. Single HTML page, mobile size.

AESTHETIC: This should feel like staring into a calm deep ocean at night. Midnight navy to deep teal gradient background (#0D1B2A → #1B4332). Soft bioluminescent glows. Everything feels like it's breathing. Inspired by Calm app but more premium, more visual.

LAYOUT (390px wide, mobile):
- Top: X close button (top left), "Day 12 Streak 🔥" (top right, small, warm orange)
- Center top: Session name "Morning Clarity" in elegant serif, subtitle "Focus & Breathe · 10 min"
- CENTER STAGE: Animated breathing circle — 3 concentric circles, innermost solid soft teal, middle 40% opacity, outer 15% opacity. The circles slowly pulse: inhale (4s expand), hold (2s), exhale (4s contract). Add ripple rings expanding outward continuously.
- Below circle: "Breathe In..." text that changes to "Hold..." then "Breathe Out..." synced with animation. Large, light, elegant typeface.
- Timer: "06:32 remaining" with a thin circular progress ring around it
- Bottom controls: << (rewind 10s), ⏸ (pause — larger center button), >> (skip 10s). Also: volume icon, background sounds icon.
- Very bottom: Session progress bar, thin, teal-white gradient fill.

SPECIAL DETAIL: Floating particle dots in background — very subtle, barely visible, slowly drifting upward. Like underwater phosphorescence.

TYPOGRAPHY: Cormorant Garamond for session name (feels spiritual, elegant), DM Sans for controls and timer.

This is a static screenshot — animations should be at their most beautiful mid-state (circle mid-inhale, "Breathe In..." showing).
```

---

### SHOT 04 — Flight Search Results (Mobile · Light · 📸 Photo)
**Tool: Claude**

```
Create a flight search results screen. Single HTML page, mobile.

AESTHETIC: Clean, editorial, data-rich but never overwhelming. White background with a confident deep navy header (#0F172A). Accent: electric blue (#3B82F6). Think MakeMyTrip's structure but with the visual confidence of a Bloomberg terminal. Data presented with purpose.

LAYOUT (390px wide, mobile):
- Header (navy background): "DEL → BOM" large bold white, "Mon, 14 Apr · 1 Traveller · Economy" below smaller, back arrow left, filter icon right (shows active filters count badge)
- Just below header: Price range bar chart mini visualization — shows price distribution by time of day (morning cheapest, evening priciest), with current filter range highlighted in blue. Very compact, 60px tall.
- Filter chips: Non-stop ✕  Morning  Under ₹6000  [+ 2 more]
- Flight results list (4 results):
  
  RESULT 1 (highlight as "Best Value" with subtle blue left border glow):
  IndiGo 6E-204 · 06:15 → 08:20 · 2h 05m · Non-stop
  ₹4,299 (strike ₹5,100) · BOOK
  
  RESULT 2:
  Air India AI-631 · 07:00 → 09:15 · 2h 15m · Non-stop
  ₹5,499 · BOOK
  
  RESULT 3 (tag: "Fastest"):
  IndiGo 6E-418 · 09:00 → 10:55 · 1h 55m · Non-stop  
  ₹5,899 · BOOK
  
  RESULT 4:
  Vistara UK-995 · 11:30 → 14:00 · 2h 30m · 1 Stop (Ahmedabad)
  ₹3,199 · BOOK

- Each card: Airline logo (colored circle placeholder), flight number small, departure-arrival times LARGE, duration with line-and-dot visualization, baggage icons (✓ Cabin, ✕ Check-in for budget), price right-aligned
- Bottom sticky: "Sort by: Price ↓" selector

TYPOGRAPHY: Plus Jakarta Sans. Numbers in tabular-nums so they align perfectly.
```

---

### SHOT 05 — Quick Commerce Cart (Mobile · Light · 🎥 Video)
**Tool: Claude**

```
Create an animated grocery quick commerce cart/checkout screen. Built for screen recording.

AESTHETIC: Crisp, fast, functional. Clean white with a signature Blinkit yellow-green (#ADDE45) for CTAs and accents. Every interaction should feel instant and satisfying — this app promises 10 minutes, the UI should feel like it.

LAYOUT (390px wide, mobile):
- Header: "My Cart" title, item count badge, trash icon
- Delivery promise banner: "🚀 Arriving in 9 mins · Sector 62, Noida" — green pill, pulsing green dot
- Cart items list (4 items):
  1. Amul Butter 500g · ₹280 · [−] 1 [+]
  2. Britannia Bread · ₹45 · [−] 2 [+]
  3. Mother Dairy Milk 1L · ₹68 · [−] 1 [+]
  4. Haldiram's Bhujia 400g · ₹120 · [−] 1 [+]
- "Add more items" row
- Savings section: "You saved ₹47 🎉" in green
- Bill summary: Item total ₹561, Delivery free, Platform fee ₹2, Total ₹563
- Bottom CTA: Large pill button "Proceed to Pay · ₹563" in brand green-yellow

ANIMATIONS FOR VIDEO (this is the key):
1. Start: Screen loads with cart items
2. User taps [+] on Amul Butter: Quantity jumps 1→2, price updates ₹280→₹560, total updates simultaneously. The number change should be a flip/roll animation. Satisfying.
3. The "You saved" number also updates with a little pop
4. Delivery bar: Thin progress bar that pulses to show "your order is being confirmed"
5. Proceed button: Ripple effect on tap, then brief loading shimmer, then navigates to a "Placing order..." screen with spinning logo

Record 12 seconds total. Capture the quantity tap and the number flip — that's the hero moment.
```

---

## 💳 FINTECH / PAYMENTS (6-9)

---

### SHOT 06 — UPI Send Money Flow (Mobile · Light · 📸 Photo)
**Tool: Claude**

```
Create a 3-screen UPI send money flow shown side-by-side in one frame.

AESTHETIC: Ultra-clean, trust-first, minimal. Google Pay level of simplicity. White background, Google Blue (#1A73E8) primary, green for success (#34A853). No decorative elements — the UI IS the decoration. Every pixel earns its place.

FRAME: 1200px wide, 800px tall. Three 360px-wide phone frames side by side with subtle drop shadows. Thin bezel, rounded corners. White phones.

SCREEN 1 — "Enter Amount":
- Top: ← back, "Send Money" title, contact info (avatar circle "R", "Rahul Sharma", "@rahul.upi")
- Giant amount display center: "₹" then cursor-blinking number input, currently showing "2,500"
- Numpad below: clean 3x4 grid, backspace key
- Recent amounts as chips: ₹500  ₹1000  ₹2000  ₹5000
- Bottom: "Add a note" text field (shows "Coffee ☕"), "Proceed" blue button

SCREEN 2 — "Confirm Payment":
- Recipient card: Avatar "R", Rahul Sharma, SBI Bank, **** 4521
- Amount: ₹2,500 in large centered text
- Note: "Coffee ☕"
- UPI PIN prompt: 6 dot indicators (first 2 filled), numpad below
- Security note: "🔒 Secured by UPI" small text

SCREEN 3 — "Payment Successful":
- Full-screen green top section (#34A853) with white animated checkmark (show mid-animation, scale 1.2)
- "₹2,500 Sent!" large white text
- "To Rahul Sharma" below
- White card below green: Transaction ID, timestamp (Today, 2:34 PM), Payment method (Google Pay UPI)
- Buttons: "Share Receipt", "Go Home"
- Bottom: Confetti burst (small, tasteful — 6-8 colored dots scattered)

TYPOGRAPHY: Google Sans / Product Sans feel. Numbers must be absolutely razor-sharp.
```

---

### SHOT 07 — CRED-Style Credit Card Statement (Mobile · Dark · 📸 Photo)
**Tool: Claude**

```
Create a premium credit card statement/overview screen. CRED-inspired but evolved.

AESTHETIC: Luxury dark. CRED's signature — black (#0A0A0A), with a champagne gold card gradient, sharp white typography, red (#FF3B30) for outstanding amount. This UI should feel like a black Amex card brought to life. Anti-generic. Zero compromise on premium feel.

LAYOUT (390px wide, mobile, dark):
- Top: "Cards" heading, notification bell, avatar
- Credit card visual: Full-width gradient card — deep black to charcoal (#1C1C1E), "HDFC Regalia" in gold foil-style text, **** **** **** 4821 in card number font, Anjali S., VISA logo. Subtle holographic shimmer effect on the card surface.
- Card stats row below card: 
  Available Limit: ₹1,85,000 (green)
  Used: ₹42,350 (white)  
  Minimum Due: ₹2,118 (red)
- Due date banner: "Payment due in 5 days · Oct 15" — red tinted warning card
- Spend insights section header: "This Month's Breakdown"
- Horizontal bar chart — categories with colored bars:
  🛒 Shopping: ₹18,400 ████████░░ 43%
  🍕 Food: ₹9,200 ████░░░░░░ 22%
  ✈️ Travel: ₹8,100 ████░░░░░░ 19%
  🎬 Entertainment: ₹4,200 ██░░░░░░░░ 10%
  Other: ₹2,450 █░░░░░░░░░ 6%
- Rewards section: "🪙 4,280 CRED Coins earned this month" — golden highlight card
- Recent transactions: 5 items with merchant name, category icon, date, amount

TYPOGRAPHY: Editorial serif (Playfair Display) for amounts, clean sans for labels. Gold color (#C9A84C) used sparingly but powerfully.
```

---

### SHOT 08 — Investment Portfolio (Mobile · Dark · 🎥 Video)
**Tool: Claude**

```
Create an animated investment portfolio screen. For screen recording.

AESTHETIC: Confident, data-rich, aspirational. Groww-inspired but more dramatic. Deep charcoal (#111318) background, bright green (#00C853) for gains, clean white typography. Charts that make you feel like your money is growing.

LAYOUT (390px wide, mobile):
- Top: "Portfolio" heading, "As of today" subtitle, settings icon
- Total value card: ₹3,24,580 in massive bold text, "+₹28,340 (+9.6%) ↑ All time" in green, small line chart sparkline in the card background (green glow)
- Today's change: "+₹1,240 (0.38%) today" with live dot pulsing
- Portfolio chart: Full-width area chart, 6-month view (Oct-Mar), green fill with gradient, smooth curve. X-axis months, Y-axis ₹. Dotted grid lines.
- Holdings list header: "Your Holdings" with "3 stocks" badge
- Holdings (3 items):
  Reliance Industries · 5 shares · ₹1,42,350 · +12.4% 🟢
  TCS · 3 shares · ₹98,420 · +8.1% 🟢
  Infosys · 8 shares · ₹83,810 · -2.3% 🔴
- SIP section: "Active SIPs · ₹5,000/month · Next: Apr 1"
- Bottom nav: Home, Explore, Orders, More

ANIMATIONS FOR VIDEO:
1. Page loads: Numbers count up from 0 to final values (1.5 seconds, easing out)
2. Chart draws itself left to right with a glowing trail (2 seconds)
3. Each holding card slides in with stagger (0.2s each)
4. The pulsing green dot next to "today's change" keeps blinking throughout
5. Reliance card: Touch it → it expands to show a mini chart below it

Record 10 seconds. Open on loading animation, chart draws, cards appear, tap Reliance.
```

---

### SHOT 09 — EMI Calculator (Web · Light · 📸 Photo)
**Tool: v0.app or Claude**

```
Create a home loan EMI calculator web page. Clean, trustworthy, Indian bank aesthetic — but modern.

AESTHETIC: Fresh mint and navy. White background, deep navy (#0F3460) for headings, fresh mint green (#00B4A6) for sliders and CTAs, warm off-white cards. Feels like HDFC Bank redesigned by a world-class design studio.

LAYOUT (1200px wide, desktop web, single page):
LEFT PANEL (60% width):
- Page heading: "Home Loan Calculator" with a small calculator icon
- Three input sliders (full-width, styled beautifully):
  
  LOAN AMOUNT: ₹50,00,000 (shown large in a badge at right)
  Slider range: ₹5L to ₹5Cr. Min/max labels below.
  
  INTEREST RATE: 8.5% p.a.
  Slider range: 6% to 18%
  
  TENURE: 20 Years
  Slider range: 1 to 30 years. Toggle below: Years / Months
  
- Below sliders: Amortization type toggle: Reducing Balance | Flat Rate

RIGHT PANEL (40% width):
- Large donut chart: Principal (₹50L) vs Total Interest (₹55.4L). Two colors: navy and mint.
- Monthly EMI: ₹43,391 — this number should be ENORMOUS, center of attention
- Breakdown card:
  Principal Amount: ₹50,00,000
  Total Interest: ₹55,39,784  
  Processing Fee (0.5%): ₹25,000
  Total Payment: ₹1,05,64,784
- CTA button: "Apply for Home Loan →" mint green, full width

BELOW (full width):
- Amortization table: Year | Opening Balance | Principal | Interest | Closing Balance
  Show years 1-5, then "View All" link. Zebra striped rows.

TYPOGRAPHY: Fraunces for the EMI number (editorial, punchy), DM Sans for everything else.
DETAIL: The sliders should have custom styled thumbs — pill shaped, navy colored, with a white inner dot.
```

---

## 🛍️ E-COMMERCE (10-12)

---

### SHOT 10 — Fashion Product Detail Page (Mobile · Dark overlay · 📸 Photo)
**Tool: Claude**

```
Create a fashion product detail page. Luxury e-commerce feel.

AESTHETIC: Editorial fashion magazine brought to digital life. Full-bleed product photography aesthetic. Deep charcoal overlays on rich imagery, gold accents (#D4AF37), clean white text. Think Ajio's premium tier or Myntra Studio.

LAYOUT (390px wide, mobile):
- TOP SECTION (60% of screen): Full-width product image placeholder — but render it as a deep gradient (#1a1a2e → #2d1b69) with abstract fabric texture overlaid. "Women's Silk Blend Kurta" floats in the image as if embossed. Star pattern watermark.
- Image gallery dots: 5 dots below, first selected
- Share icon, Wishlist heart (filled red, already saved) top right overlay on image

- CONTENT BELOW:
- Brand: "Aarke Studio" small caps, gold color
- Product name: "Embroidered Silk Kurta — Midnight Plum" large, dark
- Rating: ⭐ 4.7 (238 reviews) | 892 sold last month
- Price: ₹3,299 (MRP ₹5,499 strike) — 40% off badge in red
- Offers: Chips — "Extra 10% off with HDFC" | "Free delivery above ₹499" | "Easy returns"

- SIZE SELECTOR: XS  S  [M selected dark fill]  L  XL  XXL — horizontal row with rounded pills
- Color selector: 4 color circles — plum (selected with checkmark), emerald, terracotta, ivory
- Delivery: "📦 Delivery by Thu, Apr 10 · FREE" in green

- CTA ROW (sticky bottom): [♡ Wishlist] [ADD TO CART ────────── BUY NOW]
  Wishlist: outline border, ADD TO CART: deep charcoal, BUY NOW: gold gradient

TYPOGRAPHY: Cormorant Garamond for product name (fashion editorial feel), Lato for details.
```

---

### SHOT 11 — Checkout Flow (Mobile · Light · 📸 Photo)
**Tool: Claude**

```
Create a 3-screen e-commerce checkout flow as a single image — three phone frames side by side.

AESTHETIC: Clean, trustworthy, conversion-optimized. Warm white (#FAFAF8), deep charcoal text, Flipkart/Myntra blue (#2874F0) for CTAs. Every element builds trust and reduces friction. No clutter.

FRAME: 1200px wide, 800px tall. Three phone mockups side by side.

SCREEN 1 — Cart:
- Header: "My Cart (3 items)"
- Cart item 1: Embroidered Kurta · M · Midnight Plum · ₹3,299 · Qty 1 (remove / save for later links)
- Cart item 2: White Sneakers · Size 7 · ₹1,899 · Qty 1
- Cart item 3: Tote Bag · ₹599 · Qty 1
- Price breakup card: Bag total ₹5,797, Discount -₹1,850, Delivery FREE, Total ₹3,947
- "You're saving ₹1,850 on this order 🎉" — green highlight
- "PROCEED" button — blue, full width

SCREEN 2 — Address:
- "Delivery Address" header
- Saved address card (selected, blue border glow):
  🏠 Home
  Anjali Sharma, 
  B-204, Maple Heights, Sector 62,
  Noida 201309 · Uttar Pradesh
  📞 9876543210
  [EDIT] [DELETE]
- "Add New Address +" card — dashed border
- Delivery option: Standard (Free · 3-5 days) selected, Express (₹99 · Tomorrow) option
- "DELIVER HERE" button

SCREEN 3 — Payment:
- "Payment Options" header
- Recommended: UPI (with PhonePe, GPay, Paytm icons row) — selected, blue highlight
- Other options collapsed: Credit/Debit Card, Net Banking, EMI, Cash on Delivery
- UPI section expanded: "Enter UPI ID" field showing "anjali@okicici", verify button
- Or: "Pay with saved UPI: anjali@okicici" — toggle
- Order summary mini card: 3 items · ₹3,947
- "PAY ₹3,947" — big blue CTA

TYPOGRAPHY: Nunito for all text. Clean, friendly, readable.
```

---

### SHOT 12 — Wishlist Screen (Mobile · Light · 📸 Photo)
**Tool: Claude**

```
Create a fashion wishlist/saved items screen.

AESTHETIC: Soft, warm, aspirational. This is where a woman keeps her dream items. Warm ivory background (#FDF8F3), dusty rose accents (#E8919A), deep mocha text (#3D2B1F). Feels like a premium fashion magazine's "save for later" board.

LAYOUT (390px wide, mobile):
- Top: ← back, "My Wishlist ♡" heading with item count (12), share icon, sort icon
- Filter row: All | Clothes | Shoes | Bags | Accessories — horizontally scrollable chips, active = dusty rose filled
- GRID: 2 columns, product cards with:
  
  CARD STYLE: Rounded corners (16px), subtle shadow, warm white background
  - Product image area (tall, 3:4 ratio): Gradient placeholder with product type icon
  - Brand name: small, muted
  - Product name: bold, 2 lines max
  - Price + strike price + discount badge
  - Size notice: "Only 2 left in M" in orange for urgency
  - Heart icon top-right (filled pink)
  - "ADD TO CART" CTA at bottom — small, full width of card

  CARD 1: Zara · Linen Blazer · ₹4,999 (₹8,999) · 44% off
  CARD 2: H&M · Floral Midi Dress · ₹2,499 (₹3,999) · 37% off · "Back in stock!" badge
  CARD 3: Mango · Wide Leg Trousers · ₹5,499 · New Arrival
  CARD 4: AND · Block Print Kurta · ₹1,999 (₹3,299) · 39% off · "Only 1 left" 🔥
  CARD 5 + 6: Two more similar cards

- Bottom sticky bar: "Move all to cart" → dusty rose button

TYPOGRAPHY: Playfair Display for product names (editorial feel), Jost for prices and details.
```

---

## 🏥 HEALTH & WELLNESS (13-15)

---

### SHOT 13 — Calorie Tracker Home (Mobile · Light · 📸 Photo)
**Tool: Claude**

```
Create a health and calorie tracking home screen. Indian food context.

AESTHETIC: Fresh, energetic, motivating. Clean white with a vibrant lime-green (#76C043) for progress, coral (#FF6B6B) for over-budget, deep forest green (#1B4332) for headings. Feels like HealthifyMe meets Apple Health — the most beautiful version of both.

LAYOUT (390px wide, mobile):
- Top: Good morning Anjali ☀️ (personalized), streak badge "🔥 8 days", settings icon
- DATE: Today, Mar 29 — in a date chip
- CALORIE RING (centered, large — 200px): 
  Outer ring: Total goal (1800 kcal)
  Filled arc: Consumed so far (1,240 kcal) — lime green
  Inner text: "560" large bold, "kcal remaining" smaller below
  Small flames emoji orbiting at progress point
- MACRO PILLS row (3 horizontal cards):
  💪 Protein: 68g / 90g — blue mini progress bar
  🍞 Carbs: 142g / 200g — orange mini progress bar  
  🥑 Fat: 38g / 60g — yellow mini progress bar
- WATER section: "💧 Water Intake" · 5 glass icons, 3 filled blue · "1.5L / 2.5L goal" · + Add button
- TODAY'S MEALS section:
  🌅 Breakfast (420 kcal): Dalia with milk, Banana — [+]
  ☀️ Lunch (520 kcal): Dal chawal, Salad — [+]
  🌆 Dinner (300 kcal): 2 Rotis, Paneer curry — [+]
  🍎 Snacks (0 kcal): + Add snack — dashed outline card
- Bottom: "Log Food" FAB in lime green, + Quick Add strip

TYPOGRAPHY: Plus Jakarta Sans. The calorie number should dominate the screen visually.
```

---

### SHOT 14 — Workout Session Screen (Mobile · Dark · 🎥 Video)
**Tool: Claude**

```
Create an active workout session screen. For screen recording.

AESTHETIC: Raw, intense, focused. Pure black (#000000) background, electric orange (#FF6B00) for timers and active states, white for text. Think Cult.fit in its most cinematic mode. No softness — this is a workout.

LAYOUT (390px wide, mobile, dark):
- Top bar: "Legs & Core · Day 4 of 30" · Progress thin orange bar across full width (40% filled)
- Pause button (top right, white circle)
- CURRENT EXERCISE (center of screen):
  Exercise illustration/icon: Large abstract geometric figure in orange doing a squat
  Exercise name: "GOBLET SQUAT" — massive, all caps, bold, takes up 40% of screen width
  Form tip: "Keep chest up, heels flat" — small, italic, orange
- TIMER (below exercise name):
  Giant circular timer: Thick orange stroke countdown ring
  Center: "00:38" — massive monospace numbers
  Subtitle: "seconds left"
- REP COUNTER: Large center text "8 REPS" with + - buttons on either side
- NEXT UP section (bottom card, dark gray #111):
  "NEXT UP" small caps · "Rest 30s" with a rest icon
  Then after: "Lunges · 3 sets · 12 reps"

ANIMATIONS FOR VIDEO:
1. Timer counting down from :45 to :38 (smooth)
2. Orange progress ring depleting clockwise in real-time
3. "🔥" emoji appears and floats up when timer hits 0
4. Screen transitions to "REST TIME" — orange → cool blue/gray shift, countdown begins for 30s
5. Pulse animation on the exercise illustration (like heartbeat)

Record 12 seconds: Timer counting down, exercise completes, rest screen transition.
```

---

### SHOT 15 — Doctor Booking Flow (Mobile · Light · 📸 Photo)
**Tool: Claude**

```
Create a 2-screen doctor appointment booking flow as side-by-side phone frames.

AESTHETIC: Calm, clinical, trustworthy. Clean white, medical teal (#009688), deep navy for headings. This should make you feel like you're in safe hands. Inspired by Practo but with Airbnb's warmth.

FRAME: 900px wide, 700px tall. Two phone frames.

SCREEN 1 — Doctor Profile + Book:
- Header: ← "Search Results" 
- Doctor card hero:
  Avatar: Professional circular photo placeholder (teal gradient)
  Dr. Ananya Sharma, MBBS, MD — Dermatologist
  Apollo Hospitals, Noida
  ⭐ 4.9 (1,243 reviews) · 12 years experience
  🩺 Next available: TODAY
- Specialization chips: Acne  Skin Allergy  Hair Fall  Anti-aging
- CONSULTATION TYPES (2 cards side by side):
  Video Consult: ₹800 · Starts in 20 mins · 🟢 Available
  Clinic Visit: ₹1,200 · Tomorrow onwards · 📍 Sector 18, Noida
- AVAILABILITY (Video selected, date row + time slots):
  Date row: Today · Fri 11 · Sat 12 · Sun 13 (Today highlighted teal)
  Time slots grid: 10:00 AM  10:30 AM  [11:00 AM selected — teal]  11:30 AM (Booked — gray)
- "BOOK APPOINTMENT" — teal full-width button

SCREEN 2 — Booking Confirmed:
- Teal header (rounded bottom curve): ✓ large white checkmark circle
  "Appointment Confirmed!" white heading
  "You'll receive a reminder 30 mins before" subtitle
- White card with booking details:
  👩‍⚕️ Dr. Ananya Sharma
  📅 Today, March 29 · 11:00 AM
  💻 Video Consultation
  ⏱ 15-20 minutes
  🔢 Booking ID: #APT-28471
- Preparation tips card: "Please be in a well-lit area · Keep your Aadhaar ready"
- Buttons: "Add to Calendar" (outline) · "Join Consultation" (teal, active when near time)
- Bottom: "Need to reschedule? Reschedule or Cancel" links

TYPOGRAPHY: DM Sans throughout. Clean, medical-grade readability.
```

---

## ✈️ TRAVEL (16-17)

---

### SHOT 16 — Hotel Detail Page (Mobile · Rich editorial · 📸 Photo)
**Tool: Claude**

```
Create a luxury hotel detail page for a travel booking app.

AESTHETIC: Editorial travel magazine on your phone. Rich photography aesthetic — deep amber, warm golds, luxurious feel. White space used like a premium print magazine. This hotel costs ₹12,000/night and the UI should communicate that without saying it.

LAYOUT (390px wide, mobile):
- TOP: Full-bleed hero image placeholder — render as a deep amber-to-gold gradient (#92400E → #D97706) with abstract architectural lines overlay. "The Leela Palace, Udaipur" text in white editorial serif, top-left overlay.
- Photo gallery strip: 4 thumbnail circles below hero (Pool, Room, Restaurant, View) + "28 photos" link
- Back arrow (← top left overlay on image, white), heart icon (top right, outline)

HOTEL INFO:
- Name: "The Leela Palace" · Udaipur, Rajasthan
- Rating: ⭐ 4.9 · "Exceptional" · 2,847 reviews (Booking.com score: 9.8)
- Location chip: "📍 City Palace, 2.4 km" · "🏖 Lake Pichola, 0.5 km"
- USP tags: "Heritage property · Lake view · Free breakfast · Infinity pool"

ROOM SELECTION:
- Available rooms (2 cards, horizontal scroll):
  Card 1 (highlighted): Deluxe Lake View · King bed · 420 sq ft · ₹12,400/night  
  Includes: Breakfast · Lake view · Free cancellation until Apr 8
  Card 2: Premier Suite · 720 sq ft · ₹24,800/night

- Price prominently: ₹12,400 /night · For Apr 10-12 (2 nights) = ₹24,800 total
- "Free cancellation before Apr 8" in green
- Book Now CTA: Amber gradient button "Reserve for ₹0 now"

AMENITIES grid (icons + label, 2-column):
🏊 Infinity Pool | 🍽️ 3 Restaurants | 💆 Spa | 🅿️ Free Parking | 📶 Free WiFi | 🧹 Daily Housekeeping

REVIEWS section: 2 sample reviews with user avatar circles, star rating, brief text

TYPOGRAPHY: Freight Display (editorial serif) for hotel name and price, Libre Franklin for details.
```

---

### SHOT 17 — Train Ticket Results (Mobile · Light · 📸 Photo)
**Tool: Claude**

```
Create a train ticket search results screen with Indian Railways context.

AESTHETIC: Functional India — the UI that 500 million train travelers deserve. Clean white, Indian Railways deep blue (#003087) for brand elements, saffron (#FF9933) for highlights and deals. More beautiful than IRCTC, as trustworthy as IRCTC. Think ixigo but evolved.

LAYOUT (390px wide, mobile):
- Header (deep blue): ← | DEL → BOM in white bold | Mon, Apr 14 | 1 Adult | Filters icon (with active count badge in saffron)
- Sort bar: Relevance | Price | Duration | Departure — horizontally scrollable, active underlined
- Filter chips: Non-stop  Morning  Sleeper  ₹500-₹2000 ✕

TRAIN RESULTS (3 cards):

CARD 1 — "Rajdhani Express · 12952":
  Header badge: "PREMIUM · POPULAR CHOICE"
  Dep: 16:35 · NDLS  ──── 15h 55m ──── Arr: 08:30 · CSMT
  Class availability row (horizontal chips):
  1A: ₹4,785 · 6 AVL  |  2A: ₹2,855 · 12 AVL  |  3A: ₹2,045 · WL-3  |  SL: FULL
  Selected: 2A highlighted in saffron
  "Book ₹2,855" button — blue right-aligned

CARD 2 — "Duronto Express · 12222":
  Dep: 23:00 · NDLS  ──── 16h 30m ──── Arr: 15:30 · CSMT
  Classes: 1A: ₹4,315 · 2 AVL  |  2A: ₹2,570 · 18 AVL  |  SL: ₹625 · 42 AVL
  "Tatkal available" chip in orange

CARD 3 — "Mumbai Mail · 11094":
  Dep: 22:10 · NDLS  ──── 21h 40m ──── Arr: 19:50 · CSMT (next day +1)
  Classes: 2A: ₹1,955 · 28 AVL  |  3A: ₹1,405 · 44 AVL  |  SL: ₹550 · 118 AVL
  "LOWEST PRICE" chip in green

Each card shows: Running days row (Mon ✓ Tue ✓ Wed ✓ etc.), pantry available icon, duration with direct line-dot-line visualization.

TYPOGRAPHY: IBM Plex Sans — technical, Indian government-adjacent, but clean.
```

---

## 🎬 ENTERTAINMENT / SOCIAL (18-19)

---

### SHOT 18 — OTT Home Screen (Mobile · Dark cinematic · 📸 Photo)
**Tool: Claude**

```
Create a streaming app home screen. Cinematic and premium.

AESTHETIC: The darkest, most cinematic dark mode. Pure black (#000000), deep red accent (#E50914 — inspired by Netflix but evolved), electric white for selected states. Every poster glows. You should feel like you're in a movie theater.

LAYOUT (390px wide, mobile):
- Top: App logo "StreamIN" in serif italic red · 🔍 search · 👤 profile
- NAV TABS: Home · Series · Movies · Sports · Live — underline active
- HERO BANNER (full-width, tall, ~50% of screen):
  Gradient overlay on abstract cinematic gradient (#0D0D0D to #1A0000 with film grain texture)
  Show title: "SCAM 1992" in large bold white
  "Based on Harshad Mehta · ⭐ 9.5 IMDb" in smaller white
  Tags: Drama · Crime · Hindi · 10 eps
  "▶ Play" button (red) and "＋ Watchlist" button (outline white) — side by side
  Bottom of banner: Progress bar showing "Episode 4 of 10 · 38% complete" — red fill
- CONTINUE WATCHING row: "Continue Watching" header, horizontal scroll — 2 cards visible, each with progress bar at bottom
- TRENDING IN INDIA: 6 cards in horizontal scroll — numbered 1-6, poster art as gradients
- TOP PICKS FOR YOU: 4 cards horizontal
- CATEGORIES: Genre pills — Thriller  Crime  Bollywood  Comedy  Reality  Documentary

POSTER CARDS: Deep gradient rectangles with category icon watermarks, show title, platform badge corner

TYPOGRAPHY: Bebas Neue for titles (cinematic), DM Sans for details.
```

---

### SHOT 19 — Short Video Feed (Mobile · Dark · 🎥 Video)
**Tool: Claude**

```
Create an animated short video feed (Reels/TikTok style). For screen recording.

AESTHETIC: Full bleed, immersive, addictive. Content is the UI. Controls are floating, minimal. Background: actual video simulation using CSS gradient animation that slowly shifts colors (to simulate video content). Instagram Reels meets Moj.

LAYOUT (390px wide, mobile, full-screen):
- Full screen animated gradient background (simulating video): slowly shifting from warm amber tones (#8B4513 → #DAA520) simulating a cooking video
- TOP: ← arrow left, "Reels" center, 📸 camera icon right — all semi-transparent
- RIGHT SIDEBAR (floating, bottom right stack):
  👤 Avatar circle (creator) with + button below
  ♥ 48.2K — heart icon  
  💬 3.4K — comment icon
  ↗ 12K — share icon
  ⋯ more icon
- BOTTOM OVERLAY (gradient from transparent to dark):
  Creator: @priyakitchen with verified ✓
  Caption: "Maa ki dal recipe 🤤❤️ #homecooking #indianfood"
  🎵 Original audio — "Priya's Kitchen" with spinning record disc
- Progress bar: Very thin white line at absolute bottom, partially filled
- Sound wave indicator: Right side, small subtle waveform

ANIMATION FOR VIDEO:
1. Screen 1 (cooking video feel): Warm gradient, dal recipe caption — watch for 3 seconds
2. Swipe UP animation: Quick blur-slide transition upward (0.3s)
3. Screen 2 (different video): Cool blue gradient now (travel content), new creator, new caption
4. Double-tap: Heart explosion animation (multiple red hearts burst from tap point, float up and fade)
5. Loop back

Record 10 seconds. Show: content → swipe up → new content → double tap heart burst.
```

---

## 🏠 REAL ESTATE (20-21)

---

### SHOT 20 — Property Search Results (Mobile · Light · 📸 Photo)
**Tool: Claude**

```
Create a real estate property search results screen with map split view.

AESTHETIC: Clear, data-dense, trustworthy. Clean white, 99acres orange (#FF6B2E) for brand, deep charcoal text. Professional real estate — this is where someone makes a ₹50L decision. The UI must feel credible.

LAYOUT (390px wide, mobile):
- Header: ← · "2 BHK Flats in Noida" · filter icon (🔽) · grid/list toggle
- FILTER CHIPS (horizontal scroll): 2 BHK ✕ · ₹50L-80L ✕ · Verified · Ready to move · [+ Add filter]

- MAP SECTION (top 40% of screen):
  Simulated map: Light gray (#E8E8E8) with road lines (#FFFFFF) and area labels. Blue marker for "You are here · Sector 62". 
  Property pins scattered: Orange circles with ₹ amount — ₹62L · ₹71L · ₹58L · ₹79L
  One pin selected/expanded: White card popup with thumbnail, ₹64L, 2 BHK, "VERIFIED"
  "Expand map" button top right

- LIST VIEW below map (property cards):

CARD 1 (featured, orange left border):
"FEATURED" tag · Verified ✓
Prestige Sunrise Park · Sector 93B, Noida
2 BHK · 1,050 sq ft · ₹64 Lac
🚇 2.3 km to Sector 62 Metro · 🏫 School 500m
8 Photos · "3D Tour available" badge · "CONTACT OWNER"

CARD 2:
Mahagun Moderne · Sector 78
2 BHK · 985 sq ft · ₹58.5 Lac
New Project · Possession: Dec 2025
"No Brokerage" chip in green

CARD 3:
Amrapali Silicon City · Sector 76
2 BHK + study · 1,200 sq ft · ₹71 Lac
Resale · Semi-furnished
⚠️ "Price drop: ₹3L reduction this week" in orange

- Bottom nav or "Sort by: Relevance ▾" sticky

TYPOGRAPHY: Mulish — modern, clean, professional Indian real estate feel.
```

---

### SHOT 21 — Property Detail Page (Mobile · Light · 📸 Photo)
**Tool: Claude**

```
Create a property detail page for a real estate listing.

AESTHETIC: Clean, detailed, credibility-first. White background, 99acres orange (#FF6B2E) for key actions, deep navy for headings. Real estate photography aesthetic — the main image is the anchor.

LAYOUT (390px wide, mobile):
- TOP: Full-width image with gallery overlay. Render as deep blue-gray architectural gradient with floor plan line art overlay. Corner badge: "12 Photos · 1 Video · 3D Tour"
- Bookmark (♡), Share icon floating on image — white, rounded

INFO SECTION:
- ₹64,00,000 in large orange text · "₹6,095/sq ft" smaller
- "2 BHK Apartment · 1050 sq ft · 4th Floor / 14th"
- Address: "Prestige Sunrise Park, Sector 93B, Noida 201304"
- VERIFIED badge ✓ + "Updated 2 days ago"

KEY HIGHLIGHTS (2x3 grid of chips with icons):
🛋 Semi-Furnished | 🅿 Covered Parking | 🧭 East Facing
🏊 Swimming Pool | 🔒 24/7 Security | 💡 Power Backup

ABOUT:
"Beautiful 2 BHK apartment in the heart of Sector 93B. Well-ventilated with cross-ventilation. German modular kitchen. Branded bathroom fittings..." — 3 lines then "Read more"

DIMENSIONS TABLE:
Room | Dimensions
Master Bedroom | 12 × 13 ft
Second Bedroom | 10 × 11 ft  
Living Room | 18 × 15 ft
Kitchen | 9 × 8 ft

NEARBY (horizontal icon row): 🚇 Metro 2.3km · 🏫 School 0.5km · 🏥 Hospital 1.2km · 🛒 Mall 0.8km

EMI CALCULATOR inline: "₹64L loan @ 8.5% · 20 yrs = ₹55,634/month" — link to full calculator

SELLER: Avatar circle "Suresh Properties" · ⭐ 4.6 · 89 deals · Verified Dealer

BOTTOM STICKY (2 buttons):
[📞 Call Agent] [💬 WhatsApp] — equal width, orange, full bottom bar

TYPOGRAPHY: Poppins for heading/price, Open Sans for details.
```

---

## 🎓 EDTECH / PRODUCTIVITY (22-23)

---

### SHOT 22 — Course Learning Screen (Mobile · Dark · 📸 Photo)
**Tool: Claude**

```
Create a course learning/lesson screen for an edtech app.

AESTHETIC: Focused, distraction-free, premium education. Unacademy-dark meets Masterclass. Deep charcoal (#141414), electric blue (#2979FF) for progress and highlights, warm amber (#FFA000) for badges and achievements. Learning feels serious but exciting here.

LAYOUT (390px wide, mobile):
- TOP: ← · "React.js for Designers" title · ⋯ more · Share icon
- VIDEO PLAYER SECTION:
  Simulated video thumbnail: Deep blue-to-purple gradient (#1a237e → #311b92) with code snippet overlay (CSS code, styled beautifully, white text on dark)
  Play controls overlay at bottom of player:
  ▶ | progress bar (40% filled blue) | 12:34 / 28:00 | fullscreen | quality icon
  "Live: 284 watching" chip in red — top left of player
- LESSON TITLE: "09. State Management with Hooks" bold, white
- Instructor row: Akash Verma avatar · "Senior Designer @ Google · 4.9 ⭐ · 24K learners"
- Progress indicator: "Lesson 9 of 24 · 35% complete" with thin progress bar

COURSE CONTENT (expandable section):
- Section 3: React Hooks (in progress — 3/5 complete)
  ✅ 07. Intro to Hooks
  ✅ 08. useState Hook  
  ▶ 09. State Management ← (current, highlighted blue)
  ⬜ 10. useEffect Hook
  ⬜ 11. Custom Hooks

- RESOURCES tab: "Download Notes PDF" | "Exercise Files" | "Code Sandbox"

BOTTOM TABS: Course Content | Q&A (12) | Notes | Reviews

BOTTOM STICKY: [← Prev Lesson] [Next Lesson →] — dark gray background, full width

TYPOGRAPHY: IBM Plex Mono for any code snippets shown, Plus Jakarta Sans for UI elements.
```

---

### SHOT 23 — Habit Tracker Check-Off (Mobile · Light · 🎥 Video)
**Tool: Claude**

```
Create an animated daily habit tracker. The check-off interaction is the hero.

AESTHETIC: Calm productivity. Clean white, soft sage green (#4CAF50) for completed, warm amber (#FF8F00) for streaks, light lavender backgrounds for cards. This should feel like the most satisfying to-do list ever. Every checkmark should feel earned.

LAYOUT (390px wide, mobile):
- Top: "Good morning, Anjali 👋" · "Saturday, Mar 29" · streak badge "🔥 12 days"
- Daily progress ring: 60% complete · "6 of 10 habits done"
- HABIT LIST:

Each habit card: Rounded corners, subtle shadow, white background
Left: [Checkbox — animated, see below] 
Center: Habit icon + name + streak
Right: Optional time tag or points earned

HABITS (mix of completed and pending):
✅ 💧 Drink 8 glasses of water · 🔥 12 day streak
✅ 🧘 Morning meditation · 10 mins · 🔥 7 days
✅ 📖 Read for 20 minutes · 🔥 12 days  
✅ 💊 Take vitamins · 🔥 30 days!
✅ 🚶 10,000 steps · Done: 11,847
✅ ✍️ Journal entry · 🔥 6 days
⬜ 🏋️ Workout · 45 mins · Today at 6PM
⬜ 🥗 Eat healthy lunch · 
⬜ 💻 Learn something new · 30 mins
⬜ 😴 Sleep by 11 PM ·

ANIMATIONS FOR VIDEO (this is everything):
1. Screen shows with 6 done, 4 pending
2. User taps "Workout" checkbox → 
   - Circle checkbox fills with green sweep (clockwise, 0.4s)
   - Checkmark draws itself with satisfying spring bounce
   - Card gets subtle green tint
   - Confetti burst (12 particles) from the checkbox center, rainbow colors
   - Streak counter: +1 animation
   - Progress ring: animates from 60% → 70%
   - "7 of 10 habits done" updates with flip animation
3. A tiny "+10 pts" floats up from the card and fades
4. Bottom: "🎯 Almost there! 3 more to go" message updates

Record 8 seconds. Capture the tap → checkbox fill → confetti → progress ring update sequence. Make it feel magical.

TYPOGRAPHY: Nunito (rounded, friendly, warm) throughout.
```

---

## 🚗 MOBILITY (24-25)

---

### SHOT 24 — Cab Booking Map Screen (Mobile · Dark map · 📸 Photo)
**Tool: Claude**

```
Create a cab booking home/map screen.

AESTHETIC: Dark map, glowing interface, high-tech. Map in dark mode (dark gray roads, dark blue water/parks, minimal labels). The UI floats over the map like a command interface. Ola-meets-Uber but more dramatic and more Indian.

LAYOUT (390px wide, mobile, full screen):
- FULL SCREEN MAP (background): Dark Mapbox-style. Render as deep charcoal (#1A1A2E) with lighter gray (#2D2D44) for roads, darker areas for buildings. Blue for highway. White dots for intersections. Label: "Sector 62, Noida" and "Sector 18, Noida" on map. Car icon moving on a route (animated dot with direction arrow).

FLOATING BOTTOM SHEET (bottom 55% of screen, white card with rounded top corners):
- Drag indicator pill at top
- PICKUP ROW: 🟢 "Sector 62, Noida 201309" · Edit
  Dividing line with dotted border
  DROP ROW: 🔴 "Connaught Place, New Delhi" · Edit
  Swap arrows icon between them (right aligned)
- VEHICLE SELECTOR (horizontal scroll cards, 3 visible):
  CARD 1 (selected — blue glow): "Ola Mini" · 🚗 icon · 4 seats · ETA 4 min · ₹234
  CARD 2: "Ola Prime" · 🚙 sedan · ETA 6 min · ₹312
  CARD 3: "Ola SUV" · 🚐 · ETA 8 min · ₹445
  Each card: vehicle illustration, capacity, time, price
- Bottom info: "Estimated 42 mins · 28.4 km" with route on mini map thumbnail
- OFFERS chip: "Apply OLAFIRST — Save ₹50" in green
- "BOOK OLA MINI · ₹234" — full-width black button with orange checkered racing flag micro icon

TOP FLOATING ELEMENTS:
- Small hamburger menu (top left)
- "📍 Set on map" tooltip near pickup point (white pill)
- Current location blue dot with pulsing accuracy ring on map

TYPOGRAPHY: OlaNext (custom feel — use Syne), bold and modern.
```

---

### SHOT 25 — Ride In Progress (Mobile · Dark map · 📸 Photo)
**Tool: Claude**

```
Create a cab ride in-progress tracking screen.

AESTHETIC: Calm confidence. You're in the car, headed to your destination. Dark map, soft glassmorphism overlays, safety-first hierarchy. Green for positive states, all information accessible at a glance. Uber level of polish but with Indian cultural markers.

LAYOUT (390px wide, mobile, full screen):
- FULL SCREEN MAP (background): Dark map centered on Noida-Delhi route. Animated route: thick blue line from origin (Sector 62 — white pin) to destination (CP — red pin). Orange car icon (rotated in direction of travel) on the route, position ~40% of the way there.

ARRIVING IN banner (top center, floating pill): "🚗 Arriving in 34 mins" — glassmorphism white pill

TOP LEFT: Safety menu icon · SOS (red pill, small)

BOTTOM SHEET (bottom 45%, white card, slide-up):
- SECTION 1 — Driver Info:
  Left: Driver photo circle placeholder (gradient), ⭐ 4.8
  Center: "Rajesh Kumar · KA 05 MX 4491" 
  Car: "White Maruti Swift Dzire"
  Right: 📞 call button · 💬 chat button (both rounded, gray outline)
  
- SECTION 2 — Ride Progress:
  Route timeline:
  🟢 Sector 62, Noida (Picked up · 10:14 AM)
  --- Animated dotted line ---  
  🔴 Connaught Place, New Delhi (ETA 10:48 AM)
  
  Progress bar: Thin, glowing, 40% orange-to-green gradient

- SECTION 3 — Ride Details:
  "₹234 · Ola Mini · 28.4 km · 34 min remaining"
  Payment: UPI · ***@okicici

- SHARE RIDE LOCATION: "Share trip with family →" link (blue)
- "EMERGENCY SOS" red subtle button

FLOATING: "+91 9876 543210 · Emergency contact notified 🔒" — very small at absolute bottom

TYPOGRAPHY: Syne for big labels, DM Sans for details. All text sharp on dark.
```

---

## 📋 QUICK REFERENCE — All 25 Shots

| # | Shot | Type | Tool |
|---|------|------|------|
| 01 | Finance Dashboard | 📸 Web Dark | Claude / v0 |
| 02 | Food Delivery Home | 🎥 Mobile Light | Claude |
| 03 | Meditation Session | 📸 Mobile Dark | Claude |
| 04 | Flight Search Results | 📸 Mobile Light | Claude |
| 05 | Grocery Cart | 🎥 Mobile Light | Claude |
| 06 | UPI Send Money (3 screens) | 📸 Mobile Light | Claude |
| 07 | Credit Card Statement | 📸 Mobile Dark | Claude |
| 08 | Investment Portfolio | 🎥 Mobile Dark | Claude |
| 09 | EMI Calculator | 📸 Web Light | v0 / Claude |
| 10 | Fashion Product Page | 📸 Mobile Dark | Claude |
| 11 | Checkout Flow (3 screens) | 📸 Mobile Light | Claude |
| 12 | Wishlist Screen | 📸 Mobile Light | Claude |
| 13 | Calorie Tracker Home | 📸 Mobile Light | Claude |
| 14 | Workout Session | 🎥 Mobile Dark | Claude |
| 15 | Doctor Booking (2 screens) | 📸 Mobile Light | Claude |
| 16 | Hotel Detail Page | 📸 Mobile Editorial | Claude |
| 17 | Train Ticket Results | 📸 Mobile Light | Claude |
| 18 | OTT Home Screen | 📸 Mobile Dark | Claude |
| 19 | Short Video Feed | 🎥 Mobile Dark | Claude |
| 20 | Property Search Results | 📸 Mobile Light | Claude |
| 21 | Property Detail Page | 📸 Mobile Light | Claude |
| 22 | Course Learning Screen | 📸 Mobile Dark | Claude |
| 23 | Habit Tracker | 🎥 Mobile Light | Claude |
| 24 | Cab Booking Map | 📸 Mobile Dark Map | Claude |
| 25 | Ride In Progress | 📸 Mobile Dark Map | Claude |

**Total: 18 Photos · 7 Videos**
**Dark: 11 · Light: 14**
**Mobile: 23 · Web: 2**

---

## Screenshotting Instructions

### For Photo shots:
1. Open Claude artifact in browser
2. Resize browser to exactly 1600×1200 (use Window Resizer Chrome extension)
3. Let all animations complete their entry state
4. Screenshot at 2x display scale for retina quality
5. Crop to 1600×1200

### For Video shots:
1. Use Loom, OBS, or Mac QuickTime Screen Recording
2. Record at 60fps if possible
3. Keep recording to 8-12 seconds
4. Export as MP4 or GIF (GIF for Bento portfolio)
5. Trim tightly — start right before the interaction, end right after

### For the Bento portfolio layout:
- Hero card (1 large): Shot 01 — Finance Dashboard
- Wide card: Shot 08 — Investment Portfolio animation
- Remaining: Mix sizes — some 1:1, some 4:3, some tall 9:16 for mobile shots
