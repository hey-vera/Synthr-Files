const tools = require('../../../apps/synthr/data/tools.json');
const fs = require('fs');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date().getDay();

const selectedTools = [
  tools.find(t => t.id === 'midjourney'),
  tools.find(t => t.id === 'framer'),
  tools.find(t => t.id === 'remove-bg'),
  tools.find(t => t.id === 'canva'),
  tools.find(t => t.id === 'runway'),
  tools.find(t => t.id === 'dalle3'),
  tools.find(t => t.id === 'spline')
].filter(Boolean);

let schedule = 'NEXT 7 DAYS POSTING SCHEDULE\n' + '='.repeat(50) + '\n\n';

selectedTools.forEach((tool, i) => {
  const dayIndex = (today + i) % 7;
  const dayName = days[dayIndex];
  const date = new Date();
  date.setDate(date.getDate() + i);
  const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const tagline = tool.affiliate?.tagline || tool.tagline;
  
  schedule += `--- ${dayName} ${dateStr} --- ${tool.name} ---\n\n`;
  
  schedule += `[TWITTER]\n`;
  schedule += `${tagline}\n\n`;
  schedule += `${tool.description}\n\n`;
  schedule += `${tool.features?.[0] || ''}\n`;
  schedule += `${tool.features?.[1] || ''}\n`;
  schedule += `${tool.features?.[2] || ''}\n\n`;
  schedule += `${tool.pricing}\n\n`;
  schedule += `https://synthr.online/tool/${tool.id}\n\n`;
  
  schedule += `[REDDIT]\n`;
  schedule += `[Review] ${tool.name} - ${tagline}\n\n`;
  schedule += `${tool.description}\n\n`;
  schedule += `Pricing: ${tool.pricing}\n`;
  schedule += `Best for: ${tool.bestFor?.join(', ')}\n\n`;
  schedule += `Pros:\n- ${tool.pros?.[0] || 'Easy to use'}\n- ${tool.pros?.[1] || 'Good results'}\n\n`;
  schedule += `Cons:\n- ${tool.cons?.[0] || 'Limited free tier'}\n\n`;
  schedule += `https://synthr.online/tool/${tool.id}\n\n`;
  
  schedule += `[LINKEDIN]\n`;
  schedule += `AI Design Tool Spotlight: ${tool.name}\n\n`;
  schedule += `${tool.description}\n\n`;
  schedule += `${tool.features?.join(', ')}\n\n`;
  schedule += `${tool.pricing}\n\n`;
  schedule += `https://synthr.online/tool/${tool.id}\n\n`;
  
  schedule += `---\n\n`;
});

fs.writeFileSync('next-7-days.txt', schedule);
console.log('Generated: next-7-days.txt');
