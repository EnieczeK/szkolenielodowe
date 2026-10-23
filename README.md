# Mikołaj Skorupa — Portfolio & CV

> Minimalistyczne, nowoczesne portfolio i CV w estetyce dark mode inspirowanej Apple. Strona typu Single-Page z płynną nawigacją kotwicową, zoptymalizowana pod maksymalną wydajność i natychmiastowe wdrożenie na **GitHub Pages**.

---

## 🚀 Technologie

- **HTML5**: Semantyczna struktura, metadane SEO i OpenGraph.
- **CSS3 (Vanilla)**: Design system bazujący na zmiennych CSS, glassmorphism (`backdrop-filter`), responsywne siatki (Bento Grid, CSS Grid, Flexbox), płynne animacje `reveal-fade`.
- **JavaScript (Vanilla)**: Scrollspy dla aktywnej nawigacji, interaktywne kopiowanie ID Discord z powiadomieniem Toast, responsywne menu mobilne, zero zależności zewnętrznych.

## 📁 Struktura Projektu

```text
portfolio/
├── index.html         # Główny plik strony (struktura, SEO, sekcje)
├── css/
│   └── style.css      # Style, paleta kolorów, glassmorphism, responsywność
├── js/
│   └── main.js        # Logika animacji, scrollspya, toastów i menu mobilnego
├── assets/            # Katalog na Twoje grafiki, miniatury i filmy
└── README.md          # Dokumentacja projektu
```

## 🌐 Podgląd lokalny

Możesz uruchomić stronę lokalnie za pomocą dowolnego serwera HTTP, np. wbudowanego w Pythona:

```bash
python -m http.server 8080
```
Następnie otwórz w przeglądarce adres: [http://localhost:8080](http://localhost:8080)

---

## 🚢 Wdrożenie na GitHub Pages

Strona została zaprojektowana specjalnie pod darmowy hosting **GitHub Pages** (plik `index.html` znajduje się bezpośrednio w katalogu głównym repozytorium):

1. Zainicjalizuj repozytorium i wykonaj commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio & CV skeleton"
   ```
2. Stwórz nowe repozytorium na GitHubie (np. `portfolio` lub `enieczek.github.io`).
3. Połącz i wyślij kod do GitHuba:
   ```bash
   git branch -M main
   git remote add origin https://github.com/EnieczeK/twoje-repozytorium.git
   git push -u origin main
   ```
4. W ustawieniach repozytorium na GitHubie:
   - Wejdź w **Settings** -> **Pages**.
   - W sekcji **Build and deployment** / **Source** wybierz `Deploy from a branch`.
   - Branch: `main` / folder: `/ (root)`.
   - Kliknij **Save**. Strona będzie dostępna w kilka sekund pod adresem: `https://enieczek.github.io/...`!
