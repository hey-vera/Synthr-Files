const tools = require('../../../apps/synthr/data/tools.json');
const fs = require('fs');
const path = require('path');

const SCHEDULE_FILE = path.join(__dirname, '../schedule.json');

// Load or create schedule
function loadSchedule() {
  if (fs.existsSync(SCHEDULE_FILE)) {
    return JSON.parse(fs.readFileSync(SCHEDULE_FILE, 'utf8'));
  }
  return generateSchedule();
}

function saveSchedule(schedule) {
  fs.writeFileSync(SCHEDULE_FILE, JSON.stringify(schedule, null, 2));
}

function generateSchedule() {
  const formats = [
    'single-tweet',
    'hot-take', 
    'quick-tip',
    'poll',
    'meme-caption',
    'question-post',
    'carousel'
  ];
  
  const schedule = [];
  
  for (let i = 0; i < 30; i++) {
    const tool = tools[i % tools.length];
    const format = formats[i % formats.length];
    
    schedule.push({
      day: i + 1,
      date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      tool: tool.id,
      toolName: tool.name,
      format: format,
      twitter: {
        posted: false,
        content: getContent(format, tool)
      },
      reddit: {
        posted: false,
        subreddit: getSubreddit(format),
        title: getRedditTitle(tool, format)
      }
    });
  }
  
  saveSchedule(schedule);
  return schedule;
}

function getContent(format, tool) {
  const contents = {
    'single-tweet': `Just discovered ${tool.name} — ${tool.tagline.toLowerCase()}\n\n${tool.description.slice(0, 100)}...\n\nReview: https://synthr.online/tool/${tool.id}/\n\n#AI #DesignTools`,
    
    'hot-take': `${tool.name} is ${Math.random() > 0.5 ? 'overrated' : 'underrated'}.\n\n${Math.random() > 0.5 ? tool.cons[0] : tool.pros[0]}\n\nBut I still use it because ${tool.pros[0]}\n\nFull review: https://synthr.online/tool/${tool.id}/`,
    
    'quick-tip': `💡 Quick tip: Use ${tool.name} for ${tool.features[0].toLowerCase()}.\n\nIt takes 30 seconds and looks like you spent hours.\n\n${tool.pricing.includes('Free') ? 'Free to try.' : ''}\n\nhttps://synthr.online/tool/${tool.id}/`,
    
    'poll': `Designers: Have you tried ${tool.name} yet?\n\n${tool.tagline}\n\n🟢 Yes, love it\n🟡 Tried it, not for me\n🔴 Never heard of it\n\nFull review: https://synthr.online/tool/${tool.id}/`,
    
    'meme-caption': `Me: I need a professional design in 5 minutes\n${tool.name}: Hold my beer\n\nhttps://synthr.online/tool/${tool.id}/`,
    
    'question-post': `Designers who use ${tool.name}:\n\nWhat's your favorite feature?\n\nMine is ${tool.features[0]}.\n\nI wrote a full review here: https://synthr.online/tool/${tool.id}/\n\n#AI #DesignTools`,
    
    'carousel': `🛠️ Tool Spotlight: ${tool.name}\n\nWhat it does:\n${tool.tagline}\n\nKey Features:\n${tool.features.map(f => `✅ ${f}`).join('\n')}\n\nPros:\n${tool.pros.slice(0, 2).map(p => `👍 ${p}`).join('\n')}\n\nCons:\n${tool.cons.slice(0, 2).map(c => `👎 ${c}`).join('\n')}\n\nPricing: ${tool.pricing}\n\nFull review 👇\nhttps://synthr.online/tool/${tool.id}/`
  };
  
  return contents[format] || contents['single-tweet'];
}

function getSubreddit(format) {
  const subreddits = {
    'single-tweet': 'r/webdesign',
    'hot-take': 'r/Design',
    'quick-tip': 'r/webdesign',
    'poll': 'r/Design',
    'meme-caption': 'r/sideproject',
    'question-post': 'r/webdesign',
    'carousel': 'r/webdesign'
  };
  return subreddits[format] || 'r/webdesign';
}

function getRedditTitle(tool, format) {
  const titles = {
    'single-tweet': `[Tool Review] ${tool.name} — ${tool.tagline}`,
    'hot-take': `[Hot Take] ${tool.name} is ${Math.random() > 0.5 ? 'overrated' : 'underrated'}`,
    'quick-tip': `[Quick Tip] ${tool.name}'s ${tool.features[0]} feature`,
    'poll': `[Poll] Have you used ${tool.name}?`,
    'meme-caption': `[Humor] When you discover ${tool.name}`,
    'question-post': `[Discussion] ${tool.name} users — what's your experience?`,
    'carousel': `[Comprehensive] ${tool.name} — Full Review and Analysis`
  };
  return titles[format] || titles['single-tweet'];
}

function showToday() {
  const schedule = loadSchedule();
  const today = new Date().toISOString().split('T')[0];
  const todayPost = schedule.find(p => p.date === today);
  
  if (!todayPost) {
    console.log('📅 No post scheduled for today. Generate new schedule?');
    return;
  }
  
  console.log(`\n📅 TODAY: ${todayPost.date} (Day ${todayPost.day})`);
  console.log(`🛠️ TOOL: ${todayPost.toolName}`);
  console.log(`📝 FORMAT: ${todayPost.format}`);
  console.log(`\n📱 TWITTER:`);
  console.log(`   Status: ${todayPost.twitter.posted ? '✅ POSTED' : '❌ NOT POSTED'}`);
  console.log(`\n📋 REDDIT:`);
  console.log(`   Status: ${todayPost.reddit.posted ? '✅ POSTED' : '❌ NOT POSTED'}`);
  console.log(`   Subreddit: ${todayPost.reddit.subreddit}`);
  console.log(`   Title: ${todayPost.reddit.title}`);
  console.log(`\n=== CONTENT ===`);
  console.log(todayPost.twitter.content);
  console.log(`\n=== INSTRUCTIONS ===`);
  console.log(`1. Copy the content above`);
  console.log(`2. Post to Twitter/X`);
  console.log(`3. Post to ${todayPost.reddit.subreddit}`);
  console.log(`4. Mark as posted: node scripts/daily-scheduler.js --posted twitter`);
  console.log(`5. Mark as posted: node scripts/daily-scheduler.js --posted reddit`);
}

function markPosted(platform) {
  const schedule = loadSchedule();
  const today = new Date().toISOString().split('T')[0];
  const todayPost = schedule.find(p => p.date === today);
  
  if (!todayPost) {
    console.log('❌ No post found for today');
    return;
  }
  
  if (platform === 'twitter') {
    todayPost.twitter.posted = true;
    console.log('✅ Twitter post marked as posted');
  } else if (platform === 'reddit') {
    todayPost.reddit.posted = true;
    console.log('✅ Reddit post marked as posted');
  } else {
    console.log('❌ Unknown platform. Use: twitter or reddit');
    return;
  }
  
  saveSchedule(schedule);
  
  // Show tomorrow
  const tomorrowIndex = schedule.indexOf(todayPost) + 1;
  if (tomorrowIndex < schedule.length) {
    const tomorrow = schedule[tomorrowIndex];
    console.log(`\n📅 TOMORROW: ${tomorrow.date}`);
    console.log(`🛠️ TOOL: ${tomorrow.toolName}`);
    console.log(`📝 FORMAT: ${tomorrow.format}`);
  }
}

function showWeek() {
  const schedule = loadSchedule();
  const today = new Date().toISOString().split('T')[0];
  const todayIndex = schedule.findIndex(p => p.date === today);
  
  if (todayIndex === -1) {
    console.log('❌ No schedule found. Generate one first.');
    return;
  }
  
  const week = schedule.slice(todayIndex, todayIndex + 7);
  
  console.log(`\n📅 NEXT 7 DAYS`);
  console.log(`==============`);
  
  week.forEach(day => {
    console.log(`\n${day.date} (Day ${day.day})`);
    console.log(`  Tool: ${day.toolName}`);
    console.log(`  Format: ${day.format}`);
    console.log(`  Twitter: ${day.twitter.posted ? '✅' : '❌'}`);
    console.log(`  Reddit: ${day.reddit.posted ? '✅' : '❌'}`);
  });
}

function showStats() {
  const schedule = loadSchedule();
  const posted = schedule.filter(p => p.twitter.posted).length;
  const total = schedule.length;
  
  console.log(`\n📊 STATS`);
  console.log(`========`);
  console.log(`Total posts: ${total}`);
  console.log(`Posted: ${posted}`);
  console.log(`Remaining: ${total - posted}`);
  console.log(`Progress: ${Math.round((posted / total) * 100)}%`);
}

// CLI
const args = process.argv.slice(2);

if (args.includes('--today')) {
  showToday();
} else if (args.includes('--week')) {
  showWeek();
} else if (args.includes('--posted')) {
  const platform = args[args.indexOf('--posted') + 1];
  if (platform) {
    markPosted(platform);
  } else {
    console.log('❌ Usage: node scripts/daily-scheduler.js --posted twitter');
  }
} else if (args.includes('--stats')) {
  showStats();
} else if (args.includes('--generate')) {
  generateSchedule();
  console.log('✅ Generated 30-day schedule');
} else {
  console.log(`\n📅 SYNTHR CONTENT SCHEDULER`);
  console.log(`==========================`);
  console.log(`\nUsage:`);
  console.log(`  node scripts/daily-scheduler.js --generate    Generate new schedule`);
  console.log(`  node scripts/daily-scheduler.js --today       Show today's post`);
  console.log(`  node scripts/daily-scheduler.js --week         Show next 7 days`);
  console.log(`  node scripts/daily-scheduler.js --posted twitter   Mark Twitter as posted`);
  console.log(`  node scripts/daily-scheduler.js --posted reddit    Mark Reddit as posted`);
  console.log(`  node scripts/daily-scheduler.js --stats         Show progress stats`);
  console.log(`\nThis is a CONTENT MANAGEMENT tool.`);
  console.log(`It does NOT auto-post to any platform.`);
  console.log(`You must copy-paste and post manually.`);
}
