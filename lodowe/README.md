# Centralne Szkolenie Specjalistyczne Lodowe – Śląskie WOPR

Nowoczesna, dynamiczna strona internetowa One-Page dedykowana zapisom oraz promocji **Centralnego Szkolenia Specjalistycznego z Ratownictwa Lodowego** organizowanego przez Śląskie WOPR.

Projekt został przygotowany w architekturze, która pozwala na:
1. **Błyskawiczne uruchomienie jako demo na GitHub Pages** (bez konieczności budowania czy konfiguracji backendu).
2. **Bezproblemowe wdrożenie na serwerze produkcyjnym IIS (Windows Server)** – załączony plik `web.config`.

---

## 🚀 Jak uruchomić i przetestować demo lokalnie?

Wystarczy otworzyć plik `index.html` w dowolnej przeglądarce (Chrome, Edge, Firefox):
* Dwuklik na `index.html` lub uruchomienie przez wtyczkę *Live Server* w VS Code / edytorze.

---

## 🌐 Jak wrzucić demo na GitHub Pages (Krok po kroku)

Dzięki czystej strukturze (HTML5, Vanilla CSS, JS bez zbędnych zależności npm) wdrożenie na GitHub Pages zajmuje około 2 minuty:

1. Stwórz nowe repozytorium na swoim koncie GitHub (np. `szkolenie-lodowe-wopr`).
2. W folderze `C:\Users\mikol\Downloads\lodowe` zainicjalizuj gita i wyślij pliki:
   ```bash
   git init
   git add .
   git commit -m "Inicjalizacja strony szkolenia lodowego Slaskiego WOPR"
   git branch -M main
   git remote add origin https://github.com/<twoj-login>/szkolenie-lodowe-wopr.git
   git push -u origin main
   ```
3. W ustawieniach repozytorium na GitHub:
   * Przejdź do **Settings** -> **Pages** (w menu po lewej).
   * W sekcji **Build and deployment** -> **Source** wybierz: `Deploy from a branch`.
   * Wybierz gałąź `main` oraz folder `/ (root)`.
   * Kliknij **Save**.
4. Po około 1 minucie Twoje demo będzie publicznie dostępne pod adresem:  
   `https://<twoj-login>.github.io/szkolenie-lodowe-wopr/`

---

## 🔒 Panel Organizatora (Podgląd zapisanych ratowników)

* W prawym górnym rogu strony znajduje się przycisk **"Panel Organizatora"** (można również wejść dopisując `#admin` do adresu URL strony).
* **Domyślne hasło dostępu do panelu demo:** `wopr2026`
* **Funkcje panelu:**
  * Podgląd wszystkich zgłoszeń z podziałem na jednostki WOPR, stopnie i kontakt.
  * Karty wskaźników (liczba zapisanych, limit 20 miejsc, zapotrzebowanie na wypożyczenie suchych skafandrów).
  * Wyszukiwarka na żywo i filtry (po statusie zgłoszenia i sprzęcie).
  * Szybka zmiana statusu zgłoszenia (kliknięcie w status: *Oczekujący* -> *Potwierdzony* -> *Opłacony* -> *Lista rezerwowa*).
  * **Eksport do pliku CSV (Excel):** generuje plik z polskimi znakami (kodowanie UTF-8 BOM), idealny pod listy obecności, certyfikaty i ubezpieczenie NNW.
  * W wersji demo dane zapisywane są w pamięci przeglądarki (`localStorage`), dzięki czemu działają w 100% na statycznym hostingu GitHub Pages bez zewnętrznych serwerów bazy danych.

---

## 🏢 Wdrożenie produkcyjne na serwer IIS (Internet Information Services)

Gdy demo zostanie zaakceptowane przez zarząd Śląskiego WOPR:
1. Skopiuj całą zawartość folderu `lodowe` do katalogu witryny w IIS, np.:  
   `C:\inetpub\wwwroot\lodowe` lub jako dedykowaną aplikację w IIS Managerze.
2. Załączony plik `web.config` automatycznie skonfiguruje nagłówki bezpieczeństwa, `index.html` jako dokument domyślny oraz typy MIME dla wektorów SVG i czcionek.
3. Gdy zechcesz podpiąć bazę MySQL/MariaDB z Twojego Moodle, wystarczy dopisać prosty endpoint API (np. `api/register.php`) do odbioru danych z formularza.
