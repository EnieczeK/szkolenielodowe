/**
 * ============================================================================
 * ŚLĄSKIE WOPR - CENTRALNE SZKOLENIE SPECJALISTYCZNE Z RATOWNICTWA LODOWEGO
 * Logika Aplikacji, Rejestracja Poziomów A & B, Baza Demo & Panel Organizatora
 * ============================================================================
 */

(function () {
  'use strict';

  // Konfiguracja projektu
  const CONFIG = {
    MAX_CAPACITY: 20,
    ADMIN_DEFAULT_PIN: 'wopr2026',
    STORAGE_KEY: 'slaskie_wopr_lodowe_registrations_v3',
    AUTH_STORAGE_KEY: 'slaskie_wopr_admin_authenticated'
  };

  // Początkowe realistyczne dane demo dla Śląskiego WOPR (Turnus 17–18 stycznia 2027)
  const INITIAL_DEMO_DATA = [
    {
      id: 'CSS-LOD/001',
      courseLevel: 'Poziom B – Ratownik (działania realne, pełnoletni)',
      courseDate: '17–18 stycznia 2027 r. – Śląskie WOPR (Chełm Śląski, Zalew Dziećkowice)',
      firstName: 'Kamil',
      lastName: 'Wiśniewski',
      email: 'kamil.wisniewski@wopr-dg.pl',
      phone: '+48 601 234 567',
      pesel: '96031204567',
      city: 'Dąbrowa Górnicza',
      woprUnit: 'WOPR W DĄBROWIE GÓRNICZEJ',
      woprRank: 'Ratownik WOPR',
      kppValid: 'Tak - aktualne zaświadczenie',
      licenseNo: 'DG/2021/119',
      drysuitNeed: 'Posiadam własny suchy skafander',
      suitSize: 'Własny sprzęt',
      notes: 'Ukończony kurs sternika motorowodnego i płetwonurka OWD.',
      status: 'Potwierdzony',
      createdAt: '2026-01-12 10:24'
    },
    {
      id: 'CSS-LOD/002',
      courseLevel: 'Poziom B – Ratownik (działania realne, pełnoletni)',
      courseDate: '17–18 stycznia 2027 r. – Śląskie WOPR (Chełm Śląski, Zalew Dziećkowice)',
      firstName: 'Magdalena',
      lastName: 'Kowalczyk',
      email: 'm.kowalczyk@slaskiewopr.pl',
      phone: '+48 502 987 654',
      pesel: '98072409876',
      city: 'Katowice',
      woprUnit: 'ŚLĄSKIE WOPR - ODDZIAŁ MIEJSKI KATOWICE',
      woprRank: 'Ratownik WOPR',
      kppValid: 'Ratownik Medyczny / Personel Medyczny',
      licenseNo: 'KT/2022/045',
      drysuitNeed: 'Posiadam własny suchy skafander',
      suitSize: 'Własny sprzęt',
      notes: 'Praktykujący ratownik medyczny w WPR Katowice.',
      status: 'Potwierdzony',
      createdAt: '2026-01-12 14:15'
    },
    {
      id: 'CSS-LOD/003',
      courseLevel: 'Poziom A – Stażysta (samoratownictwo, od 14 lat)',
      courseDate: '17–18 stycznia 2027 r. – Śląskie WOPR (Chełm Śląski, Zalew Dziećkowice)',
      firstName: 'Mikołaj',
      lastName: 'Grabowski',
      email: 'm.grabowski@mlodziez-wopr.pl',
      phone: '+48 511 223 344',
      pesel: '10291402345',
      city: 'Tychy',
      woprUnit: 'ŚLĄSKIE WOPR - ODDZIAŁ REJONOWY TYCHY',
      woprRank: 'Młodszy Ratownik WOPR',
      kppValid: 'Nie dotyczy (Poziom A - Stażysta)',
      licenseNo: 'TY/2025/088',
      drysuitNeed: 'Nie dotyczy (Poziom A - Stażysta)',
      suitSize: 'Własny sprzęt',
      notes: 'Zgoda rodziców przekazana instruktorowi drużyny.',
      status: 'Potwierdzony',
      createdAt: '2026-01-13 09:30'
    },
    {
      id: 'CSS-LOD/004',
      courseLevel: 'Poziom B – Ratownik (działania realne, pełnoletni)',
      courseDate: '17–18 stycznia 2027 r. – Śląskie WOPR (Chełm Śląski, Zalew Dziećkowice)',
      firstName: 'Piotr',
      lastName: 'Jankowski',
      email: 'piotr.jankowski@sosnowiec-wopr.pl',
      phone: '+48 693 456 789',
      pesel: '94110501234',
      city: 'Sosnowiec',
      woprUnit: 'ŚLĄSKIE WOPR- DRUŻYNA WOPR SOSNOWIEC',
      woprRank: 'Starszy Ratownik Wodny',
      kppValid: 'Tak - aktualne zaświadczenie',
      licenseNo: 'SO/2019/088',
      drysuitNeed: 'Posiadam własny suchy skafander',
      suitSize: 'Własny sprzęt',
      notes: 'Doświadczenie w asekuracji regat i manewrów na Pogorii.',
      status: 'Opłacony',
      createdAt: '2026-01-13 11:40'
    },
    {
      id: 'CSS-LOD/005',
      courseLevel: 'Poziom B – Ratownik (działania realne, pełnoletni)',
      courseDate: '17–18 stycznia 2027 r. – Śląskie WOPR (Chełm Śląski, Zalew Dziećkowice)',
      firstName: 'Szymon',
      lastName: 'Dąbrowski',
      email: 'szymon.dabrowski@rybnik.wopr.pl',
      phone: '+48 660 778 899',
      pesel: '97051903456',
      city: 'Rybnik',
      woprUnit: 'ŚLĄSKIE WOPR - ODDZIAŁ REJONOWY RYBNIK',
      woprRank: 'Ratownik WOPR',
      kppValid: 'Tak - aktualne zaświadczenie',
      licenseNo: 'RB/2023/077',
      drysuitNeed: 'Posiadam własny suchy skafander',
      suitSize: 'Własny sprzęt',
      notes: 'Dyżury na Zalewie Rybnickim.',
      status: 'Oczekujący',
      createdAt: '2026-01-14 16:50'
    }
  ];

  // ============================================================================
  // Model Danych (Storage Manager)
  // ============================================================================
  const StorageManager = {
    getAll: function () {
      try {
        const raw = localStorage.getItem(CONFIG.STORAGE_KEY);
        if (!raw) {
          this.setAll(INITIAL_DEMO_DATA);
          return [...INITIAL_DEMO_DATA];
        }
        return JSON.parse(raw);
      } catch (e) {
        console.error('Błąd odczytu bazy zgłoszeń:', e);
        return [...INITIAL_DEMO_DATA];
      }
    },

    setAll: function (list) {
      try {
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(list));
      } catch (e) {
        console.error('Błąd zapisu bazy zgłoszeń:', e);
      }
    },

    add: function (record) {
      const list = this.getAll();
      list.unshift(record);
      this.setAll(list);
      return record;
    },

    updateStatus: function (id, newStatus) {
      const list = this.getAll();
      const item = list.find(r => r.id === id);
      if (item) {
        item.status = newStatus;
        this.setAll(list);
      }
      return item;
    },

    remove: function (id) {
      let list = this.getAll();
      list = list.filter(r => r.id !== id);
      this.setAll(list);
    },

    resetToDemo: function () {
      this.setAll(INITIAL_DEMO_DATA);
      return [...INITIAL_DEMO_DATA];
    }
  };

  // Funkcja globalna do wyboru poziomu po kliknięciu przycisku w sekcji Poziomy
  window.selectLevel = function (levelPrefix) {
    const select = document.getElementById('courseLevel');
    if (!select) return;

    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value.includes(levelPrefix)) {
        select.selectedIndex = i;
        break;
      }
    }
    select.dispatchEvent(new Event('change'));
  };

  // ============================================================================
  // Animacja licznika statystyk przy przewijaniu (18, 100%, 1:4)
  // ============================================================================
  function initStatsCounter() {
    const statsContainer = document.getElementById('statsRow');
    if (!statsContainer) return;

    let animated = false;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          obs.disconnect();

          const statEls = statsContainer.querySelectorAll('.stat-big');
          statEls.forEach(el => {
            const target = parseInt(el.getAttribute('data-target'), 10);
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';
            const duration = 1500;
            const startTime = performance.now();

            function updateCounter(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Płynna krzywa wyhamowania bez zawieszania na przedostatniej cyfrze
              const easeProgress = 1 - Math.pow(1 - progress, 2.4);
              let currentVal = Math.round(easeProgress * target);
              if (currentVal > target) currentVal = target;

              el.textContent = `${prefix}${currentVal}${suffix}`;

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                el.textContent = `${prefix}${target}${suffix}`;
              }
            }

            requestAnimationFrame(updateCounter);
          });
        }
      });
    }, { threshold: 0.25 });

    observer.observe(statsContainer);
  }

  // ============================================================================
  // Inicjalizacja Aplikacji i Elementy DOM
  // ============================================================================
  document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initSpotsCounter();
    initStatsCounter();
    initKolowrotScroll();
    initRegistrationForm();
    initAdminModal();

    // Sprawdzenie czy w adresie URL jest hasz #admin
    if (window.location.hash === '#admin') {
      openAdminModal();
    }
  });

  // ============================================================================
  // PŁYNNE PRZEJŚCIE MIĘDZY SEKCJAMI: ZOOM REEL + SKONSOLIDOWANY SCROLLSPY
  // Tła sekcji są zawsze w 100% od krawędzi do krawędzi ekranu (bez białych boków),
  // a treść wewnątrz płynnie powiększa się w centrum kadru i pomniejsza przy przejściu.
  // Zoptymalizowano: zero forced reflows, cache węzłów DOM, video auto-pause offscreen.
  // ============================================================================
  function initKolowrotScroll() {
    const rawSections = Array.from(document.querySelectorAll(
      '.hero-cinematic, .section-morphic, .site-footer'
    ));
    if (!rawSections.length) return;

    // Cache elementów DOM, by uniknąć kosztownych querySelector w pętli 60-120fps
    const sectionItems = rawSections.map(sec => ({
      sec,
      id: sec.id,
      inner: sec.querySelector('.content-wrapper, .hero-inner-container, .footer-container')
    })).filter(item => item.inner !== null);

    // Automatyczne pauzowanie wideo w tle, gdy użytkownik przewinie poza Hero
    // Ogromna oszczędność GPU/baterii na telefonach i laptopach!
    const heroBgVideo = document.getElementById('heroBgVideo');
    if (heroBgVideo && 'IntersectionObserver' in window) {
      const videoObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (heroBgVideo.paused) heroBgVideo.play().catch(() => {});
          } else {
            if (!heroBgVideo.paused) heroBgVideo.pause();
          }
        });
      }, { threshold: 0.05 });
      videoObs.observe(heroBgVideo);
    }

    let ticking = false;

    function updateZoomReel() {
      ticking = false;
      const vh = window.innerHeight;
      const vCenter = vh * 0.5;

      for (let i = 0; i < sectionItems.length; i++) {
        const item = sectionItems[i];
        const inner = item.inner;

        // Jeśli w sekcji formularza użytkownik wypełnia pole, zachowaj 100% stałą skalę
        if (item.id === 'zapisy' && document.activeElement && item.sec.contains(document.activeElement)) {
          inner.style.transform = 'none';
          inner.style.opacity = '1';
          continue;
        }

        const rect = item.sec.getBoundingClientRect();
        // Poza ekranem - natychmiastowy reset bez zbędnych obliczeń
        if (rect.bottom < -100 || rect.top > vh + 100) {
          inner.style.transform = 'scale(0.93)';
          inner.style.opacity = '0.8';
          continue;
        }

        const sCenter = rect.top + rect.height * 0.5;
        const dist = sCenter - vCenter;
        const norm = Math.max(-1.4, Math.min(1.4, dist / (vh * 0.72)));

        const scale = 1 - Math.min(0.065, Math.pow(Math.abs(norm), 1.25) * 0.05);
        const translateY = -norm * 14;
        const opacity = 1 - Math.min(0.2, Math.pow(Math.abs(norm), 2) * 0.16);

        inner.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
        inner.style.opacity = opacity.toFixed(2);
      }

      // Wywołaj zsynchronizowany, zoptymalizowany ScrollSpy
      if (window._updateScrollSpy) {
        window._updateScrollSpy();
      }
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateZoomReel);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateZoomReel();
  }

  // ============================================================================
  // 1. Nawigacja & Scrollspy & Video Controls (Zoptymalizowany)
  // ============================================================================
  function initNavigation() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const menuList = document.getElementById('cMenuList');
    const menuItems = document.querySelectorAll('.c-menu-item');
    const sections = Array.from(document.querySelectorAll('section[id]'));

    // Cache'owana mapa linków nawigacji
    const navLinksMap = [];
    menuItems.forEach(item => {
      const link = item.querySelector('a');
      if (link) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          navLinksMap.push({ id: href.substring(1), item });
        }
      }
    });

    let sectionPositions = [];
    function cacheSectionPositions() {
      sectionPositions = sections.map(sec => ({
        id: sec.id,
        top: sec.offsetTop,
        bottom: sec.offsetTop + sec.offsetHeight
      }));
    }
    cacheSectionPositions();
    window.addEventListener('resize', cacheSectionPositions, { passive: true });

    let lastActiveSectionId = '';
    window._updateScrollSpy = function () {
      const scrollPos = window.scrollY + 180;
      let currentSectionId = '';
      for (let i = 0; i < sectionPositions.length; i++) {
        const pos = sectionPositions[i];
        if (scrollPos >= pos.top && scrollPos < pos.bottom) {
          currentSectionId = pos.id;
          break;
        }
      }

      // Aktualizuj DOM tylko gdy sekcja uległa rzeczywistej zmianie!
      if (currentSectionId !== lastActiveSectionId) {
        lastActiveSectionId = currentSectionId;
        for (let j = 0; j < navLinksMap.length; j++) {
          const entry = navLinksMap[j];
          if (entry.id === currentSectionId) {
            entry.item.classList.add('active');
          } else {
            entry.item.classList.remove('active');
          }
        }
      }
    };

    // Menu mobilne
    if (mobileBtn && menuList) {
      mobileBtn.addEventListener('click', function () {
        menuList.classList.toggle('mobile-open');
      });

      menuList.querySelectorAll('a').forEach(l => {
        l.addEventListener('click', function () {
          menuList.classList.remove('mobile-open');
        });
      });
    }

    // Obsługa wideo w tle
    initVideoControls();
  }

  function initVideoControls() {
    const video = document.getElementById('heroBgVideo');
    if (!video) return;
    // Płynne autoodtwarzanie wideo w pełnej rozdzielczości
    video.play().catch(function () {
      // Ignorowanie restrykcji autoodtwarzania przeglądarki (wideo ma atrybut muted)
    });
  }

  // ============================================================================
  // 2. Licznik Wolnych Miejsc & Badże
  // ============================================================================
  function initSpotsCounter() {
    updateSpotsUI();
  }

  function updateSpotsUI() {
    const list = StorageManager.getAll();
    const count = list.length;
    const spotsLeft = Math.max(0, CONFIG.MAX_CAPACITY - count);
    const percentFilled = Math.min(100, Math.round((count / CONFIG.MAX_CAPACITY) * 100));

    const heroLeftEl = document.getElementById('heroSpotsLeft');
    const heroFillEl = document.getElementById('heroSpotsFill');
    const navBadgeEl = document.getElementById('navCountBadge');

    if (heroLeftEl) heroLeftEl.textContent = spotsLeft;
    if (heroFillEl) heroFillEl.style.width = percentFilled + '%';
    if (navBadgeEl) navBadgeEl.textContent = count;
  }

  // ============================================================================
  // 3. Formularz Rejestracji, Autocomplete Jednostek i Walidacja
  // ============================================================================
  function initRegistrationForm() {
    const form = document.getElementById('registrationForm');
    const levelSelect = document.getElementById('courseLevel');
    const registerAnotherBtn = document.getElementById('registerAnotherBtn');
    const openAdminBtn = document.getElementById('openAdminFromSuccessBtn');

    if (!form) return;

    // Inicjalizacja indeksowania i wyboru jednostek WOPR z rejestru Excel
    initWoprUnitCombobox();

    // Automatyczne dostosowanie wymagań po wyborze poziomu A / B
    if (levelSelect) {
      levelSelect.addEventListener('change', function () {
        const isLevelA = this.value.includes('Poziom A');
        const kppSelect = document.getElementById('kppValid');

        if (isLevelA) {
          if (kppSelect) {
            kppSelect.value = 'Nie dotyczy (Poziom A - Stażysta)';
          }
        } else {
          if (kppSelect && kppSelect.value.includes('Nie dotyczy')) {
            kppSelect.selectedIndex = 0;
          }
        }
      });
    }

    // Obsługa wysłania formularza
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      const list = StorageManager.getAll();
      const nextNum = String(list.length + 1).padStart(3, '0');
      const now = new Date();
      const dateStr = now.toISOString().slice(0, 10) + ' ' + now.toTimeString().slice(0, 5);

      const isLevelA = document.getElementById('courseLevel').value.includes('Poziom A');
      const drysuitVal = isLevelA ? 'Nie dotyczy (Poziom A - Stażysta)' : 'Własny sprawny skafander (sprzęt osobisty)';

      const record = {
        id: 'CSS-LOD/' + nextNum,
        courseLevel: document.getElementById('courseLevel').value,
        courseDate: document.getElementById('courseDate').value,
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        pesel: document.getElementById('pesel').value.trim(),
        city: document.getElementById('city').value.trim(),
        woprUnit: document.getElementById('woprUnit').value,
        woprRank: document.getElementById('woprRank').value,
        kppValid: document.getElementById('kppValid').value,
        licenseNo: document.getElementById('licenseNo').value.trim() || 'Brak wpisu',
        drysuitNeed: drysuitVal,
        suitSize: 'Własny sprzęt',
        notes: document.getElementById('notes').value.trim() || 'Brak uwag',
        status: 'Oczekujący',
        createdAt: dateStr
      };

      StorageManager.add(record);
      updateSpotsUI();
      showSuccessScreen(record);
    });

    if (registerAnotherBtn) {
      registerAnotherBtn.addEventListener('click', function () {
        form.reset();
        clearValidationErrors();

        const unitHidden = document.getElementById('woprUnit');
        const unitSearch = document.getElementById('woprUnitSearch');
        const unitBadge = document.getElementById('woprUnitBadge');
        const clearBtn = document.getElementById('woprUnitClearBtn');
        if (unitHidden) unitHidden.value = '';
        if (unitSearch) unitSearch.value = '';
        if (unitBadge) unitBadge.style.display = 'none';
        if (clearBtn) clearBtn.style.display = 'none';

        document.getElementById('registrationCard').querySelector('form').style.display = 'block';
        document.getElementById('registrationSuccessCard').style.display = 'none';
      });
    }

    if (openAdminBtn) {
      openAdminBtn.addEventListener('click', function () {
        openAdminModal();
      });
    }
  }

  // ============================================================================
  // Logika Wyszukiwania i Indeksowania Jednostek WOPR z Rejestru
  // ============================================================================
  function initWoprUnitCombobox() {
    const searchInput = document.getElementById('woprUnitSearch');
    const hiddenInput = document.getElementById('woprUnit');
    const dropdown = document.getElementById('woprUnitDropdown');
    const clearBtn = document.getElementById('woprUnitClearBtn');
    const badge = document.getElementById('woprUnitBadge');
    const badgeText = document.getElementById('woprUnitBadgeText');
    const errorEl = document.getElementById('woprUnitError');

    if (!searchInput || !hiddenInput || !dropdown) return;

    const units = window.WOPR_UNITS_REGISTRY || [];
    let focusedIndex = -1;
    let currentMatches = [];

    function stripPolish(str) {
      const map = { 'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z' };
      return (str || '').toLowerCase().replace(/[ąćęłńóśźż]/g, m => map[m] || m);
    }

    function renderDropdown(matches, query) {
      currentMatches = matches;
      focusedIndex = -1;

      if (!query && matches.length === 0) {
        dropdown.style.display = 'none';
        return;
      }

      dropdown.innerHTML = '';

      if (matches.length === 0) {
        dropdown.innerHTML = `
          <div class="unit-dropdown-empty">
            Brak jednostki pasującej do: <strong>"${escapeHtml(query)}"</strong>.<br>
            <span style="font-size:0.75rem; color:#94A3B8;">Wpisz miejscowość lub inny człon nazwy.</span>
          </div>
        `;
        dropdown.style.display = 'block';
        return;
      }

      const header = document.createElement('div');
      header.className = 'unit-dropdown-header';
      header.innerHTML = `<span>Znaleziono: ${matches.length} jednostek</span><span>Kliknij, aby wybrać</span>`;
      dropdown.appendChild(header);

      // Pokaż do 35 najlepszych dopasowań
      const displayList = matches.slice(0, 35);
      displayList.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'unit-dropdown-item';
        itemEl.setAttribute('role', 'option');
        itemEl.setAttribute('data-index', index);

        if (hiddenInput.value === item.name) {
          itemEl.classList.add('selected');
        }

        const isSlask = (item.region || '').includes('ŚLĄSKIE') || (item.name || '').includes('ŚLĄSKIE');

        itemEl.innerHTML = `
          <div class="unit-item-name">${escapeHtml(item.display)}</div>
          <div class="unit-item-meta">
            <span class="unit-badge-region">${escapeHtml(item.region || 'WOPR')}</span>
            ${item.city ? `<span class="unit-badge-city">${escapeHtml(item.city)}</span>` : ''}
            ${isSlask ? `<span style="color:var(--wopr-primary); font-weight:800; font-size:0.68rem;">ŚLĄSKIE</span>` : ''}
          </div>
        `;

        itemEl.addEventListener('mousedown', function (e) {
          e.preventDefault();
          selectUnit(item);
        });

        dropdown.appendChild(itemEl);
      });

      if (matches.length > 35) {
        const moreNote = document.createElement('div');
        moreNote.className = 'unit-dropdown-header';
        moreNote.style.textAlign = 'center';
        moreNote.textContent = `...oraz ${matches.length - 35} kolejnych jednostek (doprecyzuj wyszukiwanie)`;
        dropdown.appendChild(moreNote);
      }

      dropdown.style.display = 'block';
    }

    function selectUnit(item) {
      hiddenInput.value = item.name;
      searchInput.value = item.display;
      searchInput.classList.remove('invalid');
      if (errorEl) errorEl.textContent = '';

      if (badge && badgeText) {
        badgeText.textContent = `Wybrano oficjalną jednostkę: ${item.display}`;
        badge.style.display = 'inline-flex';
      }

      if (clearBtn) clearBtn.style.display = 'flex';
      dropdown.style.display = 'none';
      focusedIndex = -1;
    }

    function clearSelection() {
      hiddenInput.value = '';
      searchInput.value = '';
      if (badge) badge.style.display = 'none';
      if (clearBtn) clearBtn.style.display = 'none';
      dropdown.style.display = 'none';
      focusedIndex = -1;
      searchInput.focus();
    }

    function filterUnits(q) {
      if (!q || !q.trim()) {
        return units;
      }
      const rawQ = q.trim().toLowerCase();
      const normQ = stripPolish(rawQ);

      return units.filter(u => {
        const searchKey = u.searchKey || '';
        return searchKey.includes(rawQ) || searchKey.includes(normQ);
      });
    }

    searchInput.addEventListener('input', function () {
      const q = this.value;
      if (clearBtn) {
        clearBtn.style.display = q ? 'flex' : 'none';
      }

      // Jeżeli użytkownik edytuje tekst po wcześniejszym wyborze, unieważnij wybór
      if (hiddenInput.value) {
        const selectedObj = units.find(u => u.name === hiddenInput.value);
        if (!selectedObj || selectedObj.display !== q) {
          hiddenInput.value = '';
          if (badge) badge.style.display = 'none';
        }
      }

      const matches = filterUnits(q);
      renderDropdown(matches, q);
    });

    searchInput.addEventListener('focus', function () {
      if (!hiddenInput.value || !this.value) {
        const matches = filterUnits(this.value);
        renderDropdown(matches, this.value);
      }
    });

    searchInput.addEventListener('keydown', function (e) {
      if (dropdown.style.display !== 'block') {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          const matches = filterUnits(this.value);
          renderDropdown(matches, this.value);
          e.preventDefault();
        }
        return;
      }

      const items = dropdown.querySelectorAll('.unit-dropdown-item');
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        focusedIndex = (focusedIndex + 1) % items.length;
        updateFocusedItem(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        focusedIndex = (focusedIndex - 1 + items.length) % items.length;
        updateFocusedItem(items);
      } else if (e.key === 'Enter') {
        if (focusedIndex >= 0 && currentMatches[focusedIndex]) {
          e.preventDefault();
          selectUnit(currentMatches[focusedIndex]);
        }
      } else if (e.key === 'Escape') {
        dropdown.style.display = 'none';
      }
    });

    function updateFocusedItem(items) {
      items.forEach((el, idx) => {
        if (idx === focusedIndex) {
          el.classList.add('focused');
          el.scrollIntoView({ block: 'nearest' });
        } else {
          el.classList.remove('focused');
        }
      });
    }

    // Zamknięcie po kliknięciu poza komponentem oraz weryfikacja
    document.addEventListener('click', function (e) {
      if (!searchInput.contains(e.target) && !dropdown.contains(e.target) && (!clearBtn || !clearBtn.contains(e.target))) {
        dropdown.style.display = 'none';

        // Wymóg wyboru: jeśli wpisano tekst, ale nie wybrano jednostki z listy
        if (searchInput.value.trim() && !hiddenInput.value) {
          const exact = units.find(u =>
            u.display.toLowerCase() === searchInput.value.trim().toLowerCase() ||
            u.name.toLowerCase() === searchInput.value.trim().toLowerCase()
          );
          if (exact) {
            selectUnit(exact);
          } else {
            searchInput.classList.add('invalid');
            if (errorEl) {
              errorEl.textContent = 'Musisz wybrać oficjalną jednostkę z podpowiedzi.';
            }
          }
        }
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', function (e) {
        e.preventDefault();
        clearSelection();
      });
    }
  }

  function validateForm() {
    let isValid = true;
    clearValidationErrors();

    const fields = [
      { id: 'courseLevel', name: 'Poziom szkolenia' },
      { id: 'firstName', name: 'Imię' },
      { id: 'lastName', name: 'Nazwisko' },
      { id: 'email', name: 'E-mail', isEmail: true },
      { id: 'phone', name: 'Telefon', isPhone: true },
      { id: 'pesel', name: 'PESEL', isPesel: true },
      { id: 'city', name: 'Miejscowość' },
      { id: 'woprRank', name: 'Stopień WOPR' },
      { id: 'kppValid', name: 'Ważność KPP' },
      { id: 'licenseNo', name: 'Numer legitymacji WOPR' }
    ];

    fields.forEach(f => {
      const el = document.getElementById(f.id);
      const errEl = document.getElementById(f.id + 'Error');
      if (!el) return;

      const val = el.value.trim();

      if (!val) {
        markInvalid(el, errEl, 'Pole jest wymagane.');
        isValid = false;
      } else if (f.isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        markInvalid(el, errEl, 'Wprowadź prawidłowy adres e-mail.');
        isValid = false;
      } else if (f.isPhone && val.replace(/\D/g, '').length < 9) {
        markInvalid(el, errEl, 'Wprowadź co najmniej 9 cyfr numeru telefonu.');
        isValid = false;
      } else if (f.isPesel && !/^\d{11}$/.test(val)) {
        markInvalid(el, errEl, 'PESEL musi składać się dokładnie z 11 cyfr.');
        isValid = false;
      }
    });

    // Ścisła walidacja wyboru jednostki WOPR (wymóg zaznaczenia z listy)
    const unitHidden = document.getElementById('woprUnit');
    const unitSearchInput = document.getElementById('woprUnitSearch');
    const unitErrorEl = document.getElementById('woprUnitError');

    if (!unitHidden || !unitHidden.value.trim()) {
      markInvalid(
        unitSearchInput,
        unitErrorEl,
        'Musisz wybrać oficjalną jednostkę WOPR z listy (wpisz nazwę i kliknij pozycję).'
      );
      isValid = false;
    }

    const consentHealth = document.getElementById('consentHealth');
    const consentRodo = document.getElementById('consentRodo');
    const healthErr = document.getElementById('consentHealthError');
    const rodoErr = document.getElementById('consentRodoError');

    if (!consentHealth.checked) {
      if (healthErr) healthErr.textContent = 'Wymagane oświadczenie o stanie zdrowia.';
      isValid = false;
    }
    if (!consentRodo.checked) {
      if (rodoErr) rodoErr.textContent = 'Wymagana zgoda na przetwarzanie danych osobowych.';
      isValid = false;
    }

    return isValid;
  }

  function markInvalid(el, errEl, msg) {
    el.classList.add('invalid');
    if (errEl) errEl.textContent = msg;
  }

  function clearValidationErrors() {
    document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
    document.querySelectorAll('.form-group input, .form-group select').forEach(el => el.classList.remove('invalid'));
  }

  function showSuccessScreen(record) {
    const formEl = document.getElementById('registrationCard').querySelector('form');
    const successCard = document.getElementById('registrationSuccessCard');

    if (formEl) formEl.style.display = 'none';
    if (successCard) {
      successCard.style.display = 'flex';
      document.getElementById('successApplicantName').textContent = record.firstName + ' ' + record.lastName;
      document.getElementById('successRegId').textContent = record.id;
      document.getElementById('successRegLevel').textContent = record.courseLevel.split('(')[0].trim();
      document.getElementById('successRegUnit').textContent = record.woprUnit;
    }
  }

  // ============================================================================
  // 4. Panel Organizatora (Admin Dashboard)
  // ============================================================================
  function initAdminModal() {
    const adminBtn = document.getElementById('adminBtn');
    const modal = document.getElementById('adminModalOverlay');
    const closeBtn = document.getElementById('closeAdminModalBtn');
    const loginBtn = document.getElementById('adminLoginBtn');
    const passwordInput = document.getElementById('adminPasswordInput');
    const searchInput = document.getElementById('adminSearchInput');
    const levelFilter = document.getElementById('adminLevelFilter');
    const statusFilter = document.getElementById('adminStatusFilter');
    const exportCsvBtn = document.getElementById('exportCsvBtn');
    const reloadDemoDataBtn = document.getElementById('reloadDemoDataBtn');

    if (adminBtn) adminBtn.addEventListener('click', openAdminModal);
    if (closeBtn) closeBtn.addEventListener('click', closeAdminModal);

    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) closeAdminModal();
      });
    }

    if (loginBtn && passwordInput) {
      loginBtn.addEventListener('click', handleAdminLogin);
      passwordInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') handleAdminLogin();
      });
    }

    if (searchInput) searchInput.addEventListener('input', renderAdminTable);
    if (levelFilter) levelFilter.addEventListener('change', renderAdminTable);
    if (statusFilter) statusFilter.addEventListener('change', renderAdminTable);

    if (exportCsvBtn) exportCsvBtn.addEventListener('click', exportToCsv);

    if (reloadDemoDataBtn) {
      reloadDemoDataBtn.addEventListener('click', function () {
        if (confirm('Czy chcesz przywrócić początkową listę demonstracyjną zgłoszeń?')) {
          StorageManager.resetToDemo();
          updateSpotsUI();
          renderAdminDashboard();
        }
      });
    }
  }

  function openAdminModal() {
    const modal = document.getElementById('adminModalOverlay');
    if (!modal) return;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const isAuth = sessionStorage.getItem(CONFIG.AUTH_STORAGE_KEY) === 'true';
    if (isAuth) {
      showDashboardView();
    } else {
      showAuthView();
    }
  }

  function closeAdminModal() {
    const modal = document.getElementById('adminModalOverlay');
    if (!modal) return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  function showAuthView() {
    document.getElementById('adminAuthView').style.display = 'flex';
    document.getElementById('adminDashboardView').style.display = 'none';
    const input = document.getElementById('adminPasswordInput');
    if (input) {
      input.value = '';
      input.focus();
    }
  }

  function showDashboardView() {
    document.getElementById('adminAuthView').style.display = 'none';
    document.getElementById('adminDashboardView').style.display = 'flex';
    renderAdminDashboard();
  }

  function handleAdminLogin() {
    const input = document.getElementById('adminPasswordInput');
    const errEl = document.getElementById('adminAuthError');
    if (!input) return;

    if (input.value.trim() === CONFIG.ADMIN_DEFAULT_PIN) {
      sessionStorage.setItem(CONFIG.AUTH_STORAGE_KEY, 'true');
      if (errEl) errEl.textContent = '';
      showDashboardView();
    } else {
      if (errEl) errEl.textContent = 'Nieprawidłowy kod autoryzacji. Domyślne hasło: wopr2026';
    }
  }

  function renderAdminDashboard() {
    const list = StorageManager.getAll();

    const total = list.length;
    const levelB = list.filter(r => r.courseLevel.includes('Poziom B')).length;
    const levelA = list.filter(r => r.courseLevel.includes('Poziom A')).length;
    const ownDrysuits = list.filter(r => r.drysuitNeed && (r.drysuitNeed.includes('własny') || r.drysuitNeed.includes('Posiadam'))).length;

    document.getElementById('kpiTotalCount').textContent = total;
    document.getElementById('kpiLevelBCount').textContent = levelB;
    document.getElementById('kpiLevelACount').textContent = levelA;
    document.getElementById('kpiDrysuitCount').textContent = ownDrysuits;
    document.getElementById('totalDbCount').textContent = total;

    renderAdminTable();
  }

  function renderAdminTable() {
    const list = StorageManager.getAll();
    const searchVal = (document.getElementById('adminSearchInput').value || '').toLowerCase().trim();
    const levelVal = document.getElementById('adminLevelFilter').value;
    const statusVal = document.getElementById('adminStatusFilter').value;

    const filtered = list.filter(item => {
      const matchesSearch = !searchVal ||
        item.firstName.toLowerCase().includes(searchVal) ||
        item.lastName.toLowerCase().includes(searchVal) ||
        item.woprUnit.toLowerCase().includes(searchVal) ||
        item.pesel.includes(searchVal) ||
        item.phone.includes(searchVal) ||
        item.id.toLowerCase().includes(searchVal);

      const matchesLevel = (levelVal === 'all') || item.courseLevel.includes(levelVal);
      const matchesStatus = (statusVal === 'all') || (item.status === statusVal);

      return matchesSearch && matchesLevel && matchesStatus;
    });

    const tbody = document.getElementById('adminTableBody');
    tbody.innerHTML = '';

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 2.5rem; color: #54667a;">Brak zgłoszeń spełniających wybrane kryteria wyszukiwania.</td></tr>`;
      document.getElementById('visibleCount').textContent = '0';
      return;
    }

    filtered.forEach(item => {
      const tr = document.createElement('tr');

      const isLevelA = item.courseLevel.includes('Poziom A');

      let suitBadge = `<span style="color: #15803D; font-weight: 700;">Własny sprzęt</span>`;
      if (isLevelA) {
        suitBadge = `<span style="color: #86868B;">Nie dotyczy (Stażysta)</span>`;
      }

      const levelPill = isLevelA
        ? `<span style="background: #eef3f9; color: #4a6fa5; padding: 2px 8px; border-radius: 6px; font-weight: 800; font-size: 0.72rem; border: 1px solid rgba(110, 145, 197, 0.3);">POZIOM A</span>`
        : `<span style="background: #FFE8DD; color: #FF5E13; padding: 2px 8px; border-radius: 6px; font-weight: 800; font-size: 0.72rem; border: 1px solid rgba(255, 94, 19, 0.25);">POZIOM B</span>`;

      tr.innerHTML = `
        <td style="font-family: monospace; font-weight: 800; color: #6e91c5;">${escapeHtml(item.id)}</td>
        <td>${levelPill}</td>
        <td>
          <div class="user-name-cell">${escapeHtml(item.firstName)} ${escapeHtml(item.lastName)}</div>
          <div style="font-size: 0.72rem; color: #54667a;">PESEL: ${escapeHtml(item.pesel)}</div>
        </td>
        <td><strong>${escapeHtml(item.woprUnit)}</strong></td>
        <td>
          <div>${escapeHtml(item.woprRank)}</div>
          <div style="font-size: 0.74rem; color: #54667a;">KPP: ${escapeHtml(item.kppValid.split('(')[0].trim())}</div>
        </td>
        <td>
          <div class="user-contact-cell">
            <span>${escapeHtml(item.phone)}</span>
            <span>${escapeHtml(item.email)}</span>
          </div>
        </td>
        <td>${suitBadge}</td>
        <td>
          <span class="status-badge status-${item.status.replace(/\s+/g, '-')}" title="Kliknij, aby przełączyć status" data-id="${item.id}">
            ${escapeHtml(item.status)}
          </span>
        </td>
        <td>
          <button class="action-btn-del" title="Usuń zgłoszenie" data-id="${item.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </td>
      `;

      tbody.appendChild(tr);
    });

    document.getElementById('visibleCount').textContent = String(filtered.length);

    tbody.querySelectorAll('.status-badge').forEach(badge => {
      badge.addEventListener('click', function () {
        const id = this.getAttribute('data-id');
        rotateParticipantStatus(id);
      });
    });

    tbody.querySelectorAll('.action-btn-del').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.getAttribute('data-id');
        if (confirm(`Czy na pewno chcesz usunąć zgłoszenie ${id}?`)) {
          StorageManager.remove(id);
          updateSpotsUI();
          renderAdminDashboard();
        }
      });
    });
  }

  function rotateParticipantStatus(id) {
    const list = StorageManager.getAll();
    const item = list.find(r => r.id === id);
    if (!item) return;

    const statuses = ['Oczekujący', 'Potwierdzony', 'Opłacony', 'Lista rezerwowa'];
    const curIdx = statuses.indexOf(item.status);
    const nextStatus = statuses[(curIdx + 1) % statuses.length];

    StorageManager.updateStatus(id, nextStatus);
    renderAdminDashboard();
  }

  // ============================================================================
  // 5. Eksport Danych do CSV (z obsługą polskich znaków dla MS Excel)
  // ============================================================================
  function exportToCsv() {
    const list = StorageManager.getAll();
    if (list.length === 0) {
      alert('Brak danych do wyeksportowania.');
      return;
    }

    const headers = [
      'ID Zgloszenia',
      'Poziom Szkolenia',
      'Lokalizacja i Turnus',
      'Imie',
      'Nazwisko',
      'PESEL',
      'Oddzial WOPR',
      'Stopien WOPR',
      'Waznosc KPP',
      'Nr Legitymacji / e-WOPR',
      'Telefon',
      'Email',
      'Miejscowosc',
      'Skafander Suchy',
      'Rozmiar Ekwipunku',
      'Uwagi Organizacyjne',
      'Status',
      'Data Rejestracji'
    ];

    const rows = list.map(item => [
      item.id,
      item.courseLevel,
      item.courseDate,
      item.firstName,
      item.lastName,
      item.pesel,
      item.woprUnit,
      item.woprRank,
      item.kppValid,
      item.licenseNo,
      item.phone,
      item.email,
      item.city,
      item.drysuitNeed,
      item.suitSize,
      item.notes ? item.notes.replace(/[\r\n]+/g, ' ') : '',
      item.status,
      item.createdAt
    ]);

    const csvContent = [
      headers.join(';'),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(';'))
    ].join('\r\n');

    // UTF-8 BOM (\uFEFF) dla Excela
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    const today = new Date().toISOString().slice(0, 10);

    downloadAnchor.href = url;
    downloadAnchor.download = `slaskie_wopr_css_lodowe_uczestnicy_${today}.csv`;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    URL.revokeObjectURL(url);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

})();
