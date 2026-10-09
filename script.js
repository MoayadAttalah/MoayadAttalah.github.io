let x=document.querySelector("#mode")

let y=document.body

const root = document.documentElement;


function chandeMode(elem) {
  if (elem.value == "light") {
    root.style.setProperty('--base', '#f8fafc');
    root.style.setProperty('--panel', '#ffffff');
    root.style.setProperty('--accent', '#e2e8f0');
    root.style.setProperty('--accent-soft', 'rgba(100, 116, 139, 0.25)');
    root.style.setProperty('--accent-fill', 'rgba(37, 99, 235, 0.06)');
    root.style.setProperty('--glow', '#2563eb');
    root.style.setProperty('--glow-hover', '#1d4ed8');
    root.style.setProperty('--cyan', '#0369a1');
    root.style.setProperty('--text', '#0f172a');
  }
  if (elem.value == "dark") {
    root.style.setProperty('--base', '#0f172a');
    root.style.setProperty('--panel', '#1e293b');
    root.style.setProperty('--accent', '#334155');
    root.style.setProperty('--accent-soft', 'rgba(148, 163, 184, 0.25)');
    root.style.setProperty('--accent-fill', 'rgba(59, 130, 246, 0.08)');
    root.style.setProperty('--glow', '#2563eb');
    root.style.setProperty('--glow-hover', '#1d4ed8');
    root.style.setProperty('--cyan', '#60a5fa');
    root.style.setProperty('--text', '#e2e8f0');
  }
}




// getComputedStyle(root).getPropertyValue('--bg-color'); // read
// root.style.setProperty('--bg-color', '#ffffff');       // set

// dark mode
// :root {
//   --base: #0f172a;
//   --panel: #1e293b;
//   --accent: #334155;
//   --accent-soft: rgba(148, 163, 184, 0.25);
//   --accent-fill: rgba(59, 130, 246, 0.08);
//   --glow: #2563eb;
//   --glow-hover: #1d4ed8;
//   --cyan: #60a5fa;
//   --text: #e2e8f0;
// }

// lighmode
// :root {
//   --base: #f8fafc;                          /* page background, near white */
//   --panel: #ffffff;                         /* cards and navbar */
//   --accent: #e2e8f0;                        /* borders and dividers */
//   --accent-soft: rgba(100, 116, 139, 0.25);
//   --accent-fill: rgba(37, 99, 235, 0.06);
//   --glow: #2563eb;                          /* buttons, same blue works on white */
//   --glow-hover: #1d4ed8;
//   --cyan: #0369a1;                          /* darker than #60a5fa so it stays readable on white */
//   --text: #0f172a;                          /* dark text */
// }