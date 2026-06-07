const tools = require('../../../apps/synthr/data/tools.json');
const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '../posts');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function generateSingleTweet(tool) {
  return `Just discovered ${tool.name} — ${tool.tagline.toLowerCase()}

${tool.description.slice(0, 120)}...

${tool.pricing.includes('Free') ? '🎉 Free tier available!' : ''}

Review: https://synthr.online/tool/${tool.id}/

#AI #DesignTools`;
}

function generateCarousel(tool) {
  const slides = [
    `🛠️ Tool Spotlight: ${tool.name}`,
    `What it does:\n${tool.tagline}`,
    `Key Features:\n${tool.features.map(f => `✅ ${f}`).join('\n')}`,
    `Pros:\n${tool.pros.slice(0, 2).map(p => `👍 ${p}`).join('\n')}`,
    `Cons:\n${tool.cons.slice(0, 2).map(c => `👎 ${c}`).join('\n')}`,
    `Pricing: ${tool.pricing}`,
    `Full review 👇\nhttps://synthr.online/tool/${tool.id}/`,
  ];
  return slides.join('\n\n--- SLIDE ---\n\n');
}

function generatePoll(tool) {
  return `Designers: Have you tried ${tool.name} yet?

${tool.tagline}

🟢 Yes, love it
🟡 Tried it, not for me
🔴 Never heard of it

Full review: https://synthr.online/tool/${tool.id}/`;
}

function generateHotTake(tool) {
  const takes = [
    `${tool.name} is overrated. Here's why.\n\n${tool.cons.slice(0, 2).join('\n')}\n\nBut I still use it because:\n${tool.pros.slice(0, 2).join('\n')}\n\nFull review: https://synthr.online/tool/${tool.id}/`,
    `${tool.name} is underrated.\n\nMost designers don't know about ${tool.features[0].toLowerCase()}.\n\nIt's ${tool.pricing} and saves me hours every week.\n\nReview: https://synthr.online/tool/${tool.id}/`,
    `Stop using [old tool] and switch to ${tool.name}.\n\nWhy?\n${tool.pros.slice(0, 3).join('\n')}\n\nI reviewed it here: https://synthr.online/tool/${tool.id}/`,
  ];
  return takes[Math.floor(Math.random() * takes.length)];
}

function generateMemeCaption(tool) {
  const captions = [
    `Me: I need a professional design in 5 minutes\n${tool.name}: Hold my beer\n\nhttps://synthr.online/tool/${tool.id}/`,
    `When you discover ${tool.name} and realize you've been doing it the hard way\n\nhttps://synthr.online/tool/${tool.id}/`,
    `Designers before ${tool.name}: 😰\nDesigners after ${tool.name}: 😎\n\nhttps://synthr.online/tool/${tool.id}/`,
  ];
  return captions[Math.floor(Math.random() * captions.length)];
}

function generateComparisonTweet(tool1, tool2) {
  return `${tool1.name} vs ${tool2.name}\n\nWhich is better for ${tool1.category.toLowerCase()}?\n\n${tool1.name}:\n${tool1.pros.slice(0, 2).join('\n')}\n\n${tool2.name}:\n${tool2.pros.slice(0, 2).join('\n')}\n\nI compared both on synthr.online:\nhttps://synthr.online/tool/${tool1.id}/\nhttps://synthr.online/tool/${tool2.id}/`;
}

function generateQuickTip(tool) {
  const tips = [
    `💡 Quick tip: Use ${tool.name} for ${tool.features[0].toLowerCase()}.\n\nIt takes 30 seconds and looks like you spent hours.\n\n${tool.pricing.includes('Free') ? 'Free to try.' : ''}\n\nhttps://synthr.online/tool/${tool.id}/`,
    `💡 Most designers don't know ${tool.name} can do this:\n\n${tool.features[1] || tool.features[0]}\n\nGame changer.\n\nhttps://synthr.online/tool/${tool.id}/`,
  ];
  return tips[Math.floor(Math.random() * tips.length)];
}

function generateQuestionPost(tool) {
  return `Designers who use ${tool.name}:\n\nWhat's your favorite feature?\n\nMine is ${tool.features[0]}.\n\nI wrote a full review here: https://synthr.online/tool/${tool.id}/\n\n#AI #DesignTools`;
}

function generateAll() {
  ensureDir(POSTS_DIR);
  ensureDir(path.join(POSTS_DIR, 'single-tweets'));
  ensureDir(path.join(POSTS_DIR, 'carousels'));
  ensureDir(path.join(POSTS_DIR, 'polls'));
  ensureDir(path.join(POSTS_DIR, 'hot-takes'));
  ensureDir(path.join(POSTS_DIR, 'meme-captions'));
  ensureDir(path.join(POSTS_DIR, 'comparison-tweets'));
  ensureDir(path.join(POSTS_DIR, 'quick-tips'));
  ensureDir(path.join(POSTS_DIR, 'question-posts'));

  tools.forEach((tool, index) => {
    const slug = tool.id;
    
    fs.writeFileSync(path.join(POSTS_DIR, 'single-tweets', `${slug}.txt`), generateSingleTweet(tool));
    fs.writeFileSync(path.join(POSTS_DIR, 'carousels', `${slug}.txt`), generateCarousel(tool));
    fs.writeFileSync(path.join(POSTS_DIR, 'polls', `${slug}.txt`), generatePoll(tool));
    fs.writeFileSync(path.join(POSTS_DIR, 'hot-takes', `${slug}.txt`), generateHotTake(tool));
    fs.writeFileSync(path.join(POSTS_DIR, 'meme-captions', `${slug}.txt`), generateMemeCaption(tool));
    fs.writeFileSync(path.join(POSTS_DIR, 'quick-tips', `${slug}.txt`), generateQuickTip(tool));
    fs.writeFileSync(path.join(POSTS_DIR, 'question-posts', `${slug}.txt`), generateQuestionPost(tool));

    if (index < tools.length - 1) {
      const nextTool = tools[index + 1];
      fs.writeFileSync(
        path.join(POSTS_DIR, 'comparison-tweets', `${slug}-vs-${nextTool.id}.txt`),
        generateComparisonTweet(tool, nextTool)
      );
    }
  });

  // Create a daily schedule using different formats
  const schedule = [
    'Monday: Single Tweet + Link',
    'Tuesday: Carousel Post (7 slides)',
    'Wednesday: Poll',
    'Thursday: Hot Take / Controversial Opinion',
    'Friday: Quick Tip',
    'Saturday: Meme / Humorous Post',
    'Sunday: Question Post (Engagement)',
  ];

  fs.writeFileSync(
    path.join(POSTS_DIR, 'content-format-schedule.txt'),
    `CONTENT FORMAT SCHEDULE\n========================\n\n${schedule.join('\n')}\n\nEach format takes 2-5 minutes to post.\nNo threads needed.\n\nPick one format per day. Rotate weekly.`
  );

  console.log(`✅ Generated ${tools.length} single tweets`);
  console.log(`✅ Generated ${tools.length} carousels`);
  console.log(`✅ Generated ${tools.length} polls`);
  console.log(`✅ Generated ${tools.length} hot takes`);
  console.log(`✅ Generated ${tools.length} meme captions`);
  console.log(`✅ Generated ${tools.length} quick tips`);
  console.log(`✅ Generated ${tools.length} question posts`);
  console.log(`✅ Generated ${tools.length - 1} comparison tweets`);
  console.log(`📁 All saved to: ${POSTS_DIR}`);
  console.log(`\nNo threads required. Just copy-paste and post.`);
}

generateAll();
