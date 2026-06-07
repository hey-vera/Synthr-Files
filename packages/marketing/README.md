# Synthr AI Marketing System

## What This Does

Generates 30 days of marketing content in 5 seconds using your tool data.

## Generated Content

| Folder | Content | Platform |
|--------|---------|----------|
| `twitter/` | 5-tweet threads | Twitter/X |
| `reddit/` | Full reviews | r/webdesign, r/sideproject |
| `blog/` | SEO articles | Medium, Dev.to, your blog |
| `newsletter/` | Email copy | Beehiiv, Substack |
| `comparisons/` | Vs. articles | Any platform |
| `weekly-schedule.txt` | 7-day posting plan | Your calendar |

## Usage

### Generate Content

```bash
cd marketing
npm run generate
```

This creates all posts in `marketing/posts/`.

### Daily Workflow (5 minutes)

1. **Monday morning**: Open `marketing/posts/twitter/midjourney.txt`
2. **Copy the thread**: Each tweet is separated by `---`
3. **Paste into Twitter**: Post at 9am EST for max engagement
4. **Open Reddit post**: `marketing/posts/reddit/midjourney.md`
5. **Post to r/webdesign**: Use a title like "[Tool Review] Midjourney — Stunning AI image generation"
6. **Done.**

### Weekly

1. Check `weekly-schedule.txt` for the week's tools
2. Generate fresh content: `npm run generate`
3. Post 1 tool per day

## Pro Tips

- **Best times to post**: 9am EST, 12pm EST, 6pm EST
- **Twitter threads**: Use a tool like Typefully or Hypefury to schedule
- **Reddit**: Always include the disclosure line at the bottom
- **Blog posts**: Cross-post to Medium + Dev.to + Hashnode for triple reach
- **Hashtags**: Add #AI #DesignTools #AIforDesigners #Productivity

## Automation Level

| Level | Effort | Risk |
|-------|--------|------|
| **Copy-paste** (what you do now) | 5 min/day | Zero risk |
| **Typeful/Hypefury scheduling** | 30 min/week | Low risk |
| **Twitter API auto-post** | Set up once | Medium risk (API costs $100/mo) |
| **Full bot** | Set up once | High risk (ban on all platforms) |

**Recommendation**: Start with copy-paste. It's 5 minutes. Once you're making $500/month, consider Typefully.

## Customization

Edit `scripts/generate-content.js` to change:
- Post tone (currently professional/friendly)
- Thread length (currently 5 tweets)
- Call-to-action (currently links to synthr.online)
- Hashtags

## Advanced: Auto-Post to Twitter

If you want true automation, you'll need:
1. Twitter API v2 ($100/month basic tier)
2. A server to run the bot
3. This script modified to use the Twitter API

**Not recommended for beginners.** The copy-paste method is faster to start and zero risk.
