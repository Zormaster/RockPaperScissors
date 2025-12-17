# Epic Rock Paper Scissors

## 📖 The Story

This project is a demonstration of advanced AI-assisted software development, created through a collaborative multi-model workflow.

### Phase 1: The Vision
The journey began with a meta-prompting request to **Claude 3.5 Sonnet** (experimentally referred to as Sonnet 4.5). The goal was to generate the absolute best prompt for a coding assistant to build a high-quality game.

**The Input Prompt:**
> I need a prompt to give to a coding assistant to create an epic game of rock paper scissors.

**The Resulting Blueprint:**
Sonnet generated a detailed specification for an "Epic Rock Paper Scissors Game," outlining core features, visual design requirements, and technical constraints.

<details>
<summary>Click to see the full prompt used</summary>

> **Create an Epic Rock Paper Scissors Game**
>
> Build a visually stunning, feature-rich Rock Paper Scissors game with the following requirements:
>
> **Core Features:**
> - Classic rock-paper-scissors gameplay against an AI opponent
> - Best-of-5 match format with score tracking
> - Smooth animations for hand gestures and reveals
> - Clear win/lose/draw indicators for each round
>
> **Visual Design:**
> - Modern, engaging interface with bold colors and dynamic effects
> - Animated hand gestures (rock/paper/scissors) for both player and AI
> - Particle effects or animations when someone wins a round
> - Victory celebration animation when someone wins the match
> - Score display that updates dramatically
>
> **Enhanced Gameplay:**
> - Add a "VS" screen with suspenseful countdown before reveal
> - Include sound effects or visual feedback for each action
> - Show a move history or round-by-round breakdown
> - Add difficulty levels (Easy/Medium/Hard) where the AI has different strategies
> - Include a rematch button after game completion
>
> **Polish:**
> - Responsive design that works on desktop and mobile
> - Hover effects and interactive elements
> - Smooth transitions between game states
> - Consider adding fun AI opponent personalities or trash talk
>
> **Technical:**
> - Use React for state management
> - Implement with Tailwind CSS for styling
> - Add micro-animations using CSS transforms/transitions
> - Make it feel premium and polished, not basic
>
> Make this the most engaging Rock Paper Scissors game possible - something that makes people excited to play multiple rounds!
</details>

### Phase 2: The Execution
This blueprint was then fed into **Cascade**, an agentic coding assistant powered by the **Gemini 3 Pro (high)** model.

Cascade autonomously translated the prompt into a complete codebase:
1.  **Architecture:** Scaffolded a modern React + Vite application.
2.  **Logic:** Implemented complex game states, difficulty algorithms (including frequency analysis for 'Hard' mode), and score tracking.
3.  **Design:** Crafted a premium UI using Tailwind CSS with glassmorphism effects and custom animations.
4.  **Polish:** Integrated sound effects via the Web Audio API and canvas-based particle celebrations.

The result is what you see here: a polished, deployment-ready web application generated entirely through AI collaboration.

---

## 🚀 Deployment instructions

This project is built with [Vite](https://vitejs.dev/), making it extremely easy to deploy to any static site hosting provider.

### 1. Build the Project
First, generate the production files. Open your terminal in the project directory and run:

```bash
npm install
npm run build
```

This will create a `dist` folder containing the compiled HTML, CSS, and JavaScript files.

### 2. Deploy to Hosting Providers

#### Option A: Netlify (Drag & Drop) - *Easiest*
1.  Log in to [Netlify](https://www.netlify.com/).
2.  Go to your team page and look for the "Sites" tab.
3.  Drag the `dist` folder from your file explorer and drop it onto the area that says "Drag and drop your site output folder here".
4.  Your game is live in seconds!

#### Option B: Vercel
1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` inside the project folder.
3.  Follow the prompts (Vercel automatically detects Vite settings).
4.  The URL will be copied to your clipboard.

#### Option C: GitHub Pages
1.  Update `vite.config.js` to set the base URL to your repository name:
    ```js
    export default defineConfig({
      base: '/your-repo-name/',
      plugins: [react()],
    })
    ```
2.  Push your code to GitHub.
3.  Configure GitHub Actions or use the `gh-pages` package to deploy the `dist` folder.

---

## 🛠 Technical Stack

- **Core:** React 18, Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Effects:** Canvas Confetti
- **Audio:** Native Web Audio API (No external assets required)
