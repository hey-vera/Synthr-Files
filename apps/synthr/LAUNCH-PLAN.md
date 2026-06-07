# Synthr Launch Plan — Day 1 to First Dollar

## Day 1: Set Up Your Revenue Machine

### 1. Apply for Affiliate Programs (30 minutes)

You need to replace the placeholder links with real affiliate links. Apply to these 5 programs today:

| Tool | Affiliate Program | Sign Up Link | Commission |
|------|-------------------|--------------|------------|
| Framer | Framer Partners | https://www.framer.com/partners/ | 30% recurring |
| Canva | Canva Creators | https://www.canva.com/affiliates/ | Up to $36/sale |
| Remove.bg | PartnerStack | https://partnerstack.com | CPA |
| Adobe | Adobe Affiliate | https://affiliate.adobe.com | 8.33% |
| Figma | Figma Partners | https://www.figma.com/affiliates/ | 20% recurring |

**Pro tip:** Most approvals take 24-48 hours. Apply now so you can swap links by Day 3.

### 2. Add Google Analytics (10 minutes)

1. Go to https://analytics.google.com
2. Create a new property for `synthr.online`
3. Get your tracking ID (looks like `G-XXXXXXXXXX`)
4. Replace the ID in `app/layout.tsx` where it says `GA_ID_HERE`

**Why this matters:** Without analytics, you're flying blind. You need to know which tools get clicks.

### 3. Set Up Your Twitter Profile

**Display Name:** Synthr
**Handle:** @synthr_tools
**Bio:** Curated AI tools for designers. No fluff. No spam. Just the tools that actually work. | Reviews at synthr.online
**Website:** https://synthr.online
**PFP:** Use the `pfp.svg` from the site (take a screenshot or convert to PNG)
**Banner:** Create a 1500x500 image in Canva with dark background, "AI Tools for Designers" text, and synthr.online

**Pin this tweet:** Your Midjourney thread from the marketing content.

---

## Day 2: First Post

**Twitter:** Post the Midjourney thread from `marketing/posts/twitter/midjourney.txt`

**Reddit:** Post to r/webdesign using `marketing/posts/reddit/midjourney.md`

**Time:** 9am EST for maximum visibility

**Expected result:** 500-2,000 views, 5-15 clicks

---

## Day 3: Affiliate Links

When your affiliate approvals come in:
1. Open `data/tools.json`
2. Replace `affiliateUrl` values with your real affiliate links
3. Rebuild: `npm run build`
4. Redeploy to your VPS

---

## Day 4: Second Post

**Twitter:** Post the Framer thread
**Reddit:** Post to r/sideproject: "I built a curated directory of AI design tools — here's what I learned"

**Key:** Add a personal angle. "Building in public" gets more engagement than pure reviews.

---

## Day 5: Double Down

**Twitter:** Post a poll: "Which AI tool do you use most?"
Options: Midjourney, Framer, Canva, Other

**Blog:** Publish the Midjourney review on Medium.com

**Why Medium:** Cross-posting gets you 3x the reach with the same content.

---

## Day 6: Comparison Post

**Twitter:** Post a comparison thread: "Midjourney vs DALL-E 3: Which is better for designers?"

**Reddit:** Post to r/graphic_design with the comparison

**Email:** If you have 10+ newsletter subscribers, send your first email using the newsletter content.

---

## Day 7: Weekend Wrap

**Twitter:** "Weekend reads for designers" thread — link to 5 tools on your site

**Analyze:** Check Google Analytics. Which tools got the most clicks? Which posts performed best? Double down on what works.

---

## The Money Timeline

| Day | Action | Expected Revenue |
|-----|--------|-----------------|
| 1-3 | Set up affiliates, post content | $0 |
| 4-7 | Consistent posting | $0-50 |
| Week 2 | Momentum, more posts | $50-200 |
| Week 3 | First conversions, newsletter grows | $200-500 |
| Month 2 | Sponsored listings, consistent traffic | $500-1,000+ |

---

## Key Metrics to Track

1. **Monthly visitors** (Google Analytics)
2. **Click-through rate** (which tools get clicks)
3. **Conversion rate** (which clicks turn into sales)
4. **Email subscribers** (newsletter growth)

**Target:** 1,000 monthly visitors = $50-100. 5,000 monthly visitors = $500-1,000.

---

## Don't Overthink It

Your only job for the next 30 days:
1. Post 1 tool per day
2. Reply to every comment
3. Track what works

The site is built. The content is generated. Now it's about consistency.

**Start with Day 1. Apply for those affiliate programs right now.**
