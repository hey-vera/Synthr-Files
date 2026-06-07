const tools = require('../../../apps/synthr/data/tools.json');
const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '../posts');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function generateTwitterThread(tool) {
  const tweets = [
    `AI Tool of the Week: ${tool.name}\n\n${tool.tagline}\n\nThread 🧵`,
    `${tool.description.slice(0, 250)}...\n\nPerfect for designers who want to ${tool.category.toLowerCase()} faster.`,
    `Key features:\n${tool.features.map(f => `• ${f}`).join('\n')}\n\nWhat stands out to you?`,
    `Pricing: ${tool.pricing}\n\n${tool.tags.includes('free') || tool.tags.includes('freemium') ? 'Free tier available! 🎉' : 'Worth every penny for the time it saves.'}`,
    `I added ${tool.name} to synthr.online — the curated directory of AI tools for designers.\n\nCheck it out: https://synthr.online/tool/${tool.id}/\n\n🔗`,
  ];

  return tweets.map((t, i) => `${i + 1}/${tweets.length}\n${t}`).join('\n\n---\n\n');
}

function generateRedditPost(tool) {
  return `[Tool Review] ${tool.name} — ${tool.tagline}

I have been testing ${tool.name} for the past week and wanted to share my honest thoughts.

**What it does:**
${tool.description}

**Pros:**
${tool.pros.map(p => `• ${p}`).join('\n')}

**Cons:**
${tool.cons.map(c => `• ${c}`).join('\n')}

**Pricing:** ${tool.pricing}

**My take:** ${tool.pros.length > tool.cons.length ? 'Worth checking out if you are in the market for a ' + tool.category.toLowerCase() + ' tool.' : 'Good for specific use cases, but has limitations.'}

I added it to synthr.online (a curated directory I am building for AI design tools). Full review: https://synthr.online/tool/${tool.id}/

Has anyone here used ${tool.name}? What is your experience?

---

*Disclosure: Some links are affiliate links. I only recommend tools I actually use.*`;
}

function generateBlogPost(tool) {
  return `# ${tool.name} Review: ${tool.tagline}

## What is ${tool.name}?

${tool.description}

## Key Features

${tool.features.map(f => `- **${f}**: ${f}`).join('\n')}

## Pricing

${tool.pricing}

## Pros

${tool.pros.map(p => `- ${p}`).join('\n')}

## Cons

${tool.cons.map(c => `- ${c}`).join('\n')}

## Who Should Use It?

${tool.name} is ideal for ${tool.category.toLowerCase()} who need ${tool.features[0].toLowerCase()} without the steep learning curve.

## My Verdict

**Rating:** ${tool.pros.length > tool.cons.length ? '8/10' : '6/10'}\n\n${tool.pros.length > tool.cons.length ? 'Strong recommendation. The pros outweigh the cons significantly.' : 'Good for specific use cases, but look elsewhere if you need more flexibility.'}

[Try ${tool.name} →](${tool.affiliateUrl || tool.directUrl})

---

*I review AI design tools at [synthr.online](https://synthr.online) — a curated directory for designers.*`;
}

function generateNewsletter(tool) {
  return `# This Week's Pick: ${tool.name}

Hey there,

I have been testing a ton of AI design tools lately, and ${tool.name} stood out.

## What it does

${tool.tagline}

${tool.description.slice(0, 200)}...

## Why I like it

${tool.pros.slice(0, 2).map(p => `- ${p}`).join('\n')}

## Pricing

${tool.pricing}

## Try it

[${tool.name} →](https://synthr.online/tool/${tool.id}/)

---

*Next week: Another AI tool that saved me 3 hours.*

[P.S. Want the full list? Visit synthr.online](https://synthr.online)`;
}

function generateComparison(tool1, tool2) {
  return `# ${tool1.name} vs ${tool2.name}: Which is Better?

## ${tool1.name}

${tool1.tagline}

**Pros:** ${tool1.pros.slice(0, 2).join(', ')}
**Cons:** ${tool1.cons.slice(0, 2).join(', ')}
**Pricing:** ${tool1.pricing}

## ${tool2.name}

${tool2.tagline}

**Pros:** ${tool2.pros.slice(0, 2).join(', ')}
**Cons:** ${tool2.cons.slice(0, 2).join(', ')}
**Pricing:** ${tool2.pricing}

## My Pick

${tool1.pricing.includes('Free') || tool1.pricing.includes('free') ? tool1.name + ' — better value for beginners.' : tool2.pricing.includes('Free') || tool2.pricing.includes('free') ? tool2.name + ' — free tier makes it the winner.' : 'Depends on your workflow. Try both (links on synthr.online).'}

[Compare both on synthr.online →](https://synthr.online)

---

*Full reviews: [${tool1.name}](https://synthr.online/tool/${tool1.id}/) | [${tool2.name}](https://synthr.online/tool/${tool2.id}/)*`;
}

function generateAll() {
  ensureDir(POSTS_DIR);
  ensureDir(path.join(POSTS_DIR, 'twitter'));
  ensureDir(path.join(POSTS_DIR, 'reddit'));
  ensureDir(path.join(POSTS_DIR, 'blog'));
  ensureDir(path.join(POSTS_DIR, 'newsletter'));
  ensureDir(path.join(POSTS_DIR, 'comparisons'));

  tools.forEach((tool, index) => {
    const slug = tool.id;
    
    fs.writeFileSync(
      path.join(POSTS_DIR, 'twitter', `${slug}.txt`),
      generateTwitterThread(tool)
    );
    
    fs.writeFileSync(
      path.join(POSTS_DIR, 'reddit', `${slug}.md`),
      generateRedditPost(tool)
    );
    
    fs.writeFileSync(
      path.join(POSTS_DIR, 'blog', `${slug}.md`),
      generateBlogPost(tool)
    );
    
    fs.writeFileSync(
      path.join(POSTS_DIR, 'newsletter', `${slug}.md`),
      generateNewsletter(tool)
    );

    // Generate comparison with next tool (if exists)
    if (index < tools.length - 1) {
      const nextTool = tools[index + 1];
      fs.writeFileSync(
        path.join(POSTS_DIR, 'comparisons', `${slug}-vs-${nextTool.id}.md`),
        generateComparison(tool, nextTool)
      );
    }
  });

  // Generate weekly schedule
  const schedule = tools.slice(0, 7).map((tool, i) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return `${days[i]}: ${tool.name} (${tool.category})`;
  }).join('\n');
  
  fs.writeFileSync(
    path.join(POSTS_DIR, 'weekly-schedule.txt'),
    `WEEKLY POSTING SCHEDULE\n========================\n\n${schedule}\n\nEach post:\n- Twitter thread (copy from marketing/posts/twitter/)\n- Reddit post (copy from marketing/posts/reddit/)\n- Blog post (publish to medium.com or dev.to)\n\nTotal time: 30 minutes/day`
  );

  console.log(`✅ Generated ${tools.length} tool posts`);
  console.log(`✅ Generated ${tools.length - 1} comparisons`);
  console.log(`📁 All saved to: ${POSTS_DIR}`);
  console.log(`\nNext steps:`);
  console.log(`1. Open marketing/posts/twitter/ and copy a thread`);
  console.log(`2. Paste into Twitter/X`);
  console.log(`3. Post at 9am EST for max engagement`);
}

generateAll();
