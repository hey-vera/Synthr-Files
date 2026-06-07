const tools = require('../../../apps/synthr/data/tools.json');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../../../apps/synthr/public');
const SCHEDULE_FILE = path.join(__dirname, '../schedule.json');

// Load schedule
function loadSchedule() {
  if (fs.existsSync(SCHEDULE_FILE)) {
    return JSON.parse(fs.readFileSync(SCHEDULE_FILE, 'utf8'));
  }
  return [];
}

function generateMobileContent() {
  const schedule = loadSchedule();
  if (schedule.length === 0) {
    console.log('❌ No schedule found. Run: node scripts/daily-scheduler.js --generate');
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  const todayPost = schedule.find(p => p.date === today);
  const weekData = schedule.slice(0, 7);

  if (!todayPost) {
    console.log('❌ No post for today');
    return;
  }

  const mobileData = {
    today: todayPost,
    week: weekData,
    stats: {
      total: schedule.length,
      posted: schedule.filter(p => p.twitter.posted).length,
      remaining: schedule.length - schedule.filter(p => p.twitter.posted).length
    }
  };

  fs.writeFileSync(
    path.join(PUBLIC_DIR, 'mobile-data.json'),
    JSON.stringify(mobileData, null, 2)
  );

  console.log('✅ Mobile content generated');
  console.log(`📱 Access: https://synthr.online/mobile-post.html`);
  console.log(`📊 Today: ${todayPost.toolName} (${todayPost.format})`);
}

generateMobileContent();
