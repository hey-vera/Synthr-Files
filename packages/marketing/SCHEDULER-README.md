# Synthr Content Scheduler — No-Bot Posting Helper

## What This Is

A simple script that helps you manage your posting schedule WITHOUT violating any platform rules. It does NOT auto-post. It prepares content so you can copy-paste in 30 seconds.

## What It Does

1. **Shows today's post** — Ready to copy-paste
2. **Manages your calendar** — Tracks what you've posted
3. **Rotates content formats** — Keeps your feed varied
4. **Generates daily task list** — Tells you what to post and where

## What It Does NOT Do

- ❌ Auto-post to Twitter
- ❌ Auto-post to Reddit
- ❌ Use unofficial APIs
- ❌ Violate platform Terms of Service
- ❌ Get your account banned

## Why No Bots on Fresh Accounts?

| Platform | Risk | Consequence |
|----------|------|-------------|
| **Twitter/X** | High | Fresh accounts with 1 follower doing automated posting = instant ban. Twitter API costs $100/month minimum. |
| **Reddit** | Very High | Reddit's anti-bot detection is aggressive. You'll be banned within 1-2 posts. |
| **Instagram** | High | Shadowban within days. |

**The only safe automation on a fresh account = scheduling tools that YOU trigger.**

## Free Tools That Actually Work (Legitimate)

| Tool | Free Tier | What It Does | Link |
|------|-----------|--------------|------|
| **Typefully** | 100 scheduled posts | Schedule tweets, auto-post at best times | typefully.com |
| **Buffer** | 3 social accounts, 10 posts/queue | Schedule to Twitter, LinkedIn, etc. | buffer.com |
| **Later** | 1 account, 30 posts/month | Visual content calendar | later.com |
| **Hypefury** | 10 scheduled posts | Twitter-specific, auto-retweet old posts | hypefury.com |

**My recommendation:** Typefully free tier. It auto-posts at optimal times but doesn't look like a bot because it's an official Twitter partner.

## How to Use This Script

### Step 1: Generate Your Schedule

```bash
node scripts/daily-scheduler.js
```

This creates a `schedule.json` file with your next 30 days of posts.

### Step 2: Check Today's Post

```bash
node scripts/daily-scheduler.js --today
```

Output:
```
📅 TODAY: Tuesday, January 15
📱 TWITTER: Post Framer (Single Tweet)
📋 REDDIT: Post to r/webdesign

=== CONTENT READY ===
[Copy-paste ready text here]

=== ACTION ===
1. Copy the text above
2. Paste into Twitter
3. Add relevant hashtag #DesignTools
4. Post at 9am EST
```

### Step 3: Mark as Posted

```bash
node scripts/daily-scheduler.js --posted twitter
node scripts/daily-scheduler.js --posted reddit
```

This updates your schedule and shows tomorrow's content.

## The 30-Day Content Plan

This script manages a rotation:

| Day | Twitter | Reddit | Format |
|-----|---------|--------|--------|
| 1 | Midjourney | Review | Single Tweet |
| 2 | Framer | Review | Single Tweet |
| 3 | Remove.bg | Hot Take | Hot Take |
| 4 | Looka | Review | Quick Tip |
| 5 | Magician | Poll | Poll |
| 6 | Canva | Meme | Meme |
| 7 | Gamma | Question | Engagement |
| ... | ... | ... | ... |

## Why This Saves Time

Without scheduler:
- Every morning: "What should I post today?"
- Search through files
- Decide on format
- Write the post
- **15 minutes**

With scheduler:
- Run `node scripts/daily-scheduler.js --today`
- Copy the text
- Paste into Twitter
- **30 seconds**

## Advanced: Weekly Batch Prep

Run once on Sunday:

```bash
node scripts/daily-scheduler.js --week
```

Output: All 7 posts for the week, ready to copy-paste into Typefully/Buffer.

## Important Notes

- **Never use bots on fresh accounts.** Build to 100+ followers first.
- **Always use official APIs or partners.** Unofficial tools = ban.
- **Engagement > automation.** Reply to comments manually. Bots can't do this.
- **Post quality > post quantity.** 1 good post beats 10 automated posts.

## The Real Automation Hack

The fastest "automation" is a **phone alarm**:

1. Set daily alarm for 9am EST: "Post Synthr content"
2. Alarm goes off
3. Open `daily-scheduler.js --today`
4. Copy text
5. Paste into Twitter
6. Done in 30 seconds

**This is faster than any bot and 100% safe.**

## Installation

```bash
npm install node-cron
```

Then run the scheduler. No API keys needed. No authentication. No ban risk.
