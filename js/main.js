/**
 * Mikołaj Skorupa — Portfolio & CV
 * Vanilla JavaScript (Zero Dependencies, Ultra Fast, GitHub Pages Ready)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Frosted Glass Header on Scroll
  const header = document.getElementById('header');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const toggleMobileMenu = () => {
    const isOpen = mobileMenuOverlay.classList.toggle('open');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    mobileMenuOverlay.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (menuToggle && mobileMenuOverlay) {
    menuToggle.addEventListener('click', toggleMobileMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Close on desktop resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && mobileMenuOverlay.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // 4. Scrollspy for Active Navigation Links
  const sections = document.querySelectorAll('section[id], header[id="header"]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
  });

  // 5. Scroll Reveal Animations (Apple-style subtle fade-in)
  const revealElements = document.querySelectorAll('.reveal-fade');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 6. Toast Notification & Copy to Clipboard
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimeout = null;

  const showToast = (message) => {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;

    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  };

  const copyToClipboard = async (text, successMsg = 'Skopiowano do schowka!') => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      showToast(successMsg);
    } catch (err) {
      console.error('Błąd kopiowania:', err);
      showToast(`Kopiowanie nie powiodło się: ${text}`);
    }
  };

  // Discord Copy Elements
  const discordCopyTriggers = [
    document.getElementById('discordHeroBtn'),
    document.getElementById('discordCard'),
    document.getElementById('copyDiscordContactBtn')
  ];

  discordCopyTriggers.forEach(btn => {
    if (!btn) return;
    const discordValue = btn.getAttribute('data-clipboard') || 'enieczek';

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      copyToClipboard(discordValue, `Skopiowano nick Discord: ${discordValue}`);
    });

    // Keyboard support (Enter / Space for interactive card)
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        copyToClipboard(discordValue, `Skopiowano nick Discord: ${discordValue}`);
      }
    });
  });

  // 7. Smooth Anchor Scroll with correct offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 8. Video Player Modal (Interactive In-Page Instagram Reel Player)
  const videoModal = document.getElementById('videoModal');
  const videoModalBackdrop = document.getElementById('videoModalBackdrop');
  const videoModalIframe = document.getElementById('videoModalIframe');
  const closeVideoModalBtn = document.getElementById('closeVideoModalBtn');
  const closeVideoModalBottomBtn = document.getElementById('closeVideoModalBottomBtn');
  const videoLoadingIndicator = document.getElementById('videoLoadingIndicator');
  const videoTriggers = document.querySelectorAll('.video-preview-trigger');

  const openVideoModal = () => {
    if (!videoModal || !videoModalIframe) return;

    // Lazy load the Instagram embed iframe only on click
    const embedUrl = videoModalIframe.getAttribute('data-src');
    if (videoModalIframe.src !== embedUrl) {
      if (videoLoadingIndicator) videoLoadingIndicator.classList.remove('loaded');
      videoModalIframe.src = embedUrl;

      videoModalIframe.onload = () => {
        if (videoLoadingIndicator) videoLoadingIndicator.classList.add('loaded');
      };
    }

    videoModal.removeAttribute('hidden');
    document.body.classList.add('modal-open');
  };

  const closeVideoModal = () => {
    if (!videoModal || !videoModalIframe) return;

    videoModal.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');

    // Reset iframe src so video audio immediately stops
    videoModalIframe.src = '';
    if (videoLoadingIndicator) videoLoadingIndicator.classList.remove('loaded');
  };

  videoTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openVideoModal();
    });

    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openVideoModal();
      }
    });
  });

  if (closeVideoModalBtn) closeVideoModalBtn.addEventListener('click', closeVideoModal);
  if (closeVideoModalBottomBtn) closeVideoModalBottomBtn.addEventListener('click', closeVideoModal);
  if (videoModalBackdrop) videoModalBackdrop.addEventListener('click', closeVideoModal);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && !videoModal.hasAttribute('hidden')) {
      closeVideoModal();
    }
  });

  // 9. Autoplay / Auto-load Featured Reel when scrolled into view
  const featuredReelBox = document.getElementById('featuredReelShowcase');
  const featuredReelIframe = document.getElementById('featuredReelIframe');

  if (featuredReelBox && featuredReelIframe) {
    const reelObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const embedSrc = featuredReelIframe.getAttribute('data-src');
          if (embedSrc && (!featuredReelIframe.src || featuredReelIframe.src === 'about:blank')) {
            featuredReelIframe.src = embedSrc;
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px 50px 0px'
    });

    reelObserver.observe(featuredReelBox);
  }
});
