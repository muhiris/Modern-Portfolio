
const Fiverr = "https://Fiverr.com/ayeshaqur";
const github = "https://github.com/muhiris";
const sudo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";
const email = "mailto:muhammadharis786@protonmail.com";

aboutme = [
  "<br>",
  "<span class='underline'>Yo, it's Muhammad Haris!👋</span>",
  "<br>",
  "🔭 A weeb learning to make websites",
  "🌱 My fields of interests are",
  `<pre class="whitespace-pre-wrap">
        - Fullstack Development
        - CLI Applications
        - Linux Enthusiast</pre>`,
  `<pre class="whitespace-pre-wrap">⌛ Time is limited and so much is left. I'll have to work harder to 
   read more languages and do more projects!
   I love learning new stuff and using it to improve my skills.`,
  `<pre class="whitespace-pre-wrap">👨‍💻 Check out my github profile to view other stuff I've created.`,
  `📫 Contact me at <a href= "${email}">muhammadharis786@protonmail.com</a>`,
  "<br>",
];

function createSocialLink(name, url) {
  return `${name} <a href="${url}" target="blank">${url}</a>`;
}

social = [
  "<br>",
  createSocialLink("Fiverr", Fiverr),
  createSocialLink("GitHub", github),
  "<br>",
];

const commands_desc = {
  whoami: 'Displays Who I am?',
  social: 'Lists social networks.',
  email: 'To send me an email.',
  history: 'View command history.',
  sudo: 'Try it out for yourself.',
  clear: 'Clear terminal.',
};
function createHelpText(commands) {
  let helpText = '<br><pre class="whitespace-pre-wrap">';

  for (const command in commands) {
    helpText += `<span class="command">${command}</span>     
    <span class="command">↳</span>&nbsp;${commands_desc[command]}\n`;
  }

  helpText += "</pre><br>";

  return [helpText];
}
help = createHelpText(commands_desc);

banner = [
  `<div class="pt-2"><span class="text-[#7d82d7db] ">Welcome to Exclusive Terminal Experience! — Type <span class="command text-[#75e1e7]">help</span> for a list of supported commands.</span></div>`,
];
