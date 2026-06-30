# Vishal Adsule — Developer Portfolio

A modern, responsive, interactive personal portfolio website built with plain HTML5, Tailwind CSS (via CDN), and vanilla JavaScript — no frameworks required.

🔗 **Live preview:** open `index.html` in any browser, or deploy to GitHub Pages (instructions below).

---

## ✨ Features

- Dark-mode-first design with glassmorphism cards and animated gradients
- Animated hero with a typing effect, floating particles, and a scroll indicator
- Scroll-triggered reveal animations (fade/slide/scale) via `IntersectionObserver`
- Animated counters and skill progress bars
- Sticky navbar with scroll-aware background and active-link highlighting
- Scroll progress bar
- Fully responsive: mobile, tablet, laptop, desktop
- Sections: Hero, About, Education, Technical Skills, Projects, Internship, Certifications, Resume, Contact, Footer
- Contact form with client-side validation and `mailto:` fallback (no backend required)
- Print-friendly resume section
- Accessible markup, semantic HTML5, visible focus states, `prefers-reduced-motion` support
- SEO-friendly metadata (title, description, keywords, Open Graph tags)

---

## 📁 Folder Structure

```
portfolio/
│
├── index.html
├── assets/
│   ├── images/        # add project screenshots here
│   ├── resume/         # place Vishal_Adsule_Resume.pdf here
│   └── icons/
├── css/
│   └── custom.css
├── js/
│   └── script.js
└── README.md
```

---

## 🚀 Getting Started

1. **Clone or download** this folder.
2. Add your actual resume PDF to `assets/resume/Vishal_Adsule_Resume.pdf` (the Download/Print Resume buttons reference this path).
3. (Optional) Add real project screenshots to `assets/images/` and swap them in for the placeholder icons in the Projects section of `index.html`.
4. Open `index.html` directly in a browser — no build step needed.

---

## 🌐 Deploying to GitHub Pages

1. Push this folder to a GitHub repository (e.g. `portfolio`).
2. In the repository, go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)` folder.
4. Save — your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

---

## 🛠️ Customization

- **Colors & fonts:** edit the CSS variables at the top of `css/custom.css` and the Tailwind config block in `index.html`.
- **Content:** all personal/resume content lives directly in `index.html` — search for the relevant section comment (e.g. `<!-- ============================== PROJECTS ============================== -->`).
- **Contact form:** currently opens the visitor's email client via a `mailto:` link. To capture submissions server-side, connect the form to a service like Formspree, EmailJS, or your own backend endpoint.

---

## 🧰 Tech Stack

- HTML5 (semantic markup)
- Tailwind CSS (CDN, no build tooling)
- Vanilla JavaScript (typing effect, scroll reveals, counters, form handling)
- Google Fonts: Poppins (headings) + Inter (body)

---

## 📬 Contact

- **Email:** vishal25adsule2003@gmail.com
- **Phone:** +91 96372 09446
- **LinkedIn:** [linkedin.com/in/vishaladsule](https://linkedin.com/in/vishaladsule/)
- **GitHub:** [github.com/VishalAdsule](https://github.com/VishalAdsule)
- **Location:** Vadgaon, Pune, Maharashtra

---

Built with care for recruiters and engineers alike. 🚀
