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
      const msg = document.documentElement.lang === 'en'
        ? `Copied Discord username: ${discordValue}`
        : `Skopiowano nick Discord: ${discordValue}`;
      copyToClipboard(discordValue, msg);
    });

    // Keyboard support (Enter / Space for interactive card)
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const msg = document.documentElement.lang === 'en'
          ? `Copied Discord username: ${discordValue}`
          : `Skopiowano nick Discord: ${discordValue}`;
        copyToClipboard(discordValue, msg);
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

  // Forward declarations for background audio ducking
  let handleMediaPlayStart = () => {};
  let handleMediaPlayEnd = () => {};

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

    handleMediaPlayStart();

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

    handleMediaPlayEnd();
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

  // 10. Graphics Filtering (Category Filter Buttons)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const graphicCards = document.querySelectorAll('.graphic-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      graphicCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // 11. Lightbox Modal for Graphics & Video Projects
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const lightboxMediaContainer = document.getElementById('lightboxMediaContainer');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');

  if (lightboxModal) {
    lightboxModal.setAttribute('hidden', '');
  }

  const openLightbox = (card) => {
    if (!lightboxModal || !lightboxMediaContainer) return;

    const fullSrc = card.getAttribute('data-full-src');
    const type = card.getAttribute('data-type');
    const title = card.getAttribute('data-title') || '';
    const desc = card.getAttribute('data-desc') || '';

    lightboxMediaContainer.innerHTML = '';

    if (type === 'video') {
      const videoEl = document.createElement('video');
      videoEl.src = fullSrc;
      videoEl.controls = true;
      videoEl.autoplay = true;
      videoEl.playsInline = true;
      lightboxMediaContainer.appendChild(videoEl);

      // Pause background music for lightbox video
      if (typeof handleMediaPlayStart === 'function') {
        handleMediaPlayStart();
      }
    } else {
      const imgEl = document.createElement('img');
      imgEl.src = fullSrc;
      imgEl.alt = title;
      lightboxMediaContainer.appendChild(imgEl);
    }

    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxDesc) lightboxDesc.textContent = desc;

    lightboxModal.removeAttribute('hidden');
    document.body.classList.add('modal-open');
  };

  const closeLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.setAttribute('hidden', '');
    document.body.classList.remove('modal-open');
    if (lightboxMediaContainer) {
      const video = lightboxMediaContainer.querySelector('video');
      if (video) video.pause();
      lightboxMediaContainer.innerHTML = '';
    }

    // Resume background music if it was paused for video
    if (typeof handleMediaPlayEnd === 'function') {
      handleMediaPlayEnd();
    }
  };

  graphicCards.forEach(card => {
    card.addEventListener('click', () => openLightbox(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(card);
      }
    });
  });

  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && !lightboxModal.hasAttribute('hidden')) {
      closeLightbox();
    }
  });

  // 12. Background Audio Controller (song_background.mp3) with Auto-ducking for Videos
  const bgMusic = document.getElementById('bgMusic');
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  const audioBtnLabel = document.getElementById('audioBtnLabel');

  let isAudioPlaying = false;
  let userPausedManually = false;
  let wasPlayingBeforeVideo = false;

  const audioHintBubble = document.getElementById('audioHintBubble');

  const updateAudioUI = (playing) => {
    isAudioPlaying = playing;
    if (audioToggleBtn) {
      audioToggleBtn.classList.toggle('is-playing', playing);
      audioToggleBtn.setAttribute('aria-pressed', playing ? 'true' : 'false');
    }
    if (audioBtnLabel) {
      audioBtnLabel.textContent = playing ? 'Wstrzymaj muzykę' : 'Muzyka w tle';
    }
    if (audioHintBubble && playing) {
      audioHintBubble.style.opacity = '0';
      audioHintBubble.style.pointerEvents = 'none';
      setTimeout(() => { audioHintBubble.style.display = 'none'; }, 300);
    }
  };

  const playBackgroundMusic = () => {
    if (!bgMusic) return;
    bgMusic.muted = false;
    bgMusic.volume = 0.30; // Pleasant ambient volume
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        updateAudioUI(true);
      }).catch(() => {
        // Autoplay policy prevented immediate unmuted playback.
        // Start playback muted so the audio pipeline starts running immediately,
        // and unmute on the very first user interaction anywhere on the screen.
        bgMusic.muted = true;
        bgMusic.play().then(() => {
          updateAudioUI(false);
        }).catch(() => {});
      });
    }
  };

  const pauseBackgroundMusic = () => {
    if (!bgMusic) return;
    bgMusic.pause();
    updateAudioUI(false);
  };

  handleMediaPlayStart = () => {
    if (isAudioPlaying) {
      wasPlayingBeforeVideo = true;
      pauseBackgroundMusic();
    }
  };

  handleMediaPlayEnd = () => {
    if (wasPlayingBeforeVideo && !userPausedManually) {
      wasPlayingBeforeVideo = false;
      playBackgroundMusic();
    }
  };

  if (bgMusic && audioToggleBtn) {
    // Toggle button handler
    audioToggleBtn.addEventListener('click', () => {
      if (isAudioPlaying) {
        userPausedManually = true;
        wasPlayingBeforeVideo = false;
        pauseBackgroundMusic();
      } else {
        userPausedManually = false;
        wasPlayingBeforeVideo = false;
        bgMusic.muted = false;
        playBackgroundMusic();
      }
    });

    // 1. Attempt unmuted autoplay immediately on script execution
    playBackgroundMusic();

    // 2. Also try on window load in case browser state changes
    window.addEventListener('load', () => {
      if (!isAudioPlaying && !userPausedManually) {
        playBackgroundMusic();
      }
    });

    // 3. Instant unmute and play on ANY user micro-interaction (scroll, click, touch, key, wheel)
    const gestureEvents = ['pointerdown', 'mousedown', 'touchstart', 'touchend', 'click', 'keydown', 'wheel', 'scroll'];
    const unlockOnGesture = () => {
      if (!userPausedManually) {
        if (bgMusic.muted) {
          bgMusic.muted = false;
        }
        bgMusic.volume = 0.30;
        if (bgMusic.paused) {
          bgMusic.play().then(() => updateAudioUI(true)).catch(() => {});
        } else {
          updateAudioUI(true);
        }
      }
      gestureEvents.forEach(evt => {
        window.removeEventListener(evt, unlockOnGesture, { capture: true });
        document.removeEventListener(evt, unlockOnGesture, { capture: true });
      });
    };

    gestureEvents.forEach(evt => {
      window.addEventListener(evt, unlockOnGesture, { capture: true, passive: true });
      document.addEventListener(evt, unlockOnGesture, { capture: true, passive: true });
    });

    // Ducking for all embedded HTML5 <video> elements (e.g. final.mp4)
    document.querySelectorAll('video').forEach(video => {
      video.addEventListener('play', handleMediaPlayStart);
      video.addEventListener('pause', handleMediaPlayEnd);
      video.addEventListener('ended', handleMediaPlayEnd);
    });

    // Ducking for links opening external videos (YouTube, TikTok, direct video links)
    document.querySelectorAll('a[href*="youtube.com"], a[href*="youtu.be"], a[href*="tiktok.com"], a[href*="final.mp4"]').forEach(link => {
      link.addEventListener('click', () => {
        handleMediaPlayStart();
      });
    });
  }

  // 13. Coordinate HTML5 Video Playback across all video cards
  const allVideos = document.querySelectorAll('video');
  allVideos.forEach(v => {
    v.addEventListener('play', () => {
      // Pause any other video that might be playing
      allVideos.forEach(other => {
        if (other !== v && !other.paused) {
          other.pause();
        }
      });
      if (typeof handleMediaPlayStart === 'function') {
        handleMediaPlayStart();
      }
    });

    v.addEventListener('pause', () => {
      // If no video is playing, allow background music to resume
      const anyStillPlaying = Array.from(allVideos).some(item => !item.paused);
      if (!anyStillPlaying && typeof handleMediaPlayEnd === 'function') {
        handleMediaPlayEnd();
      }
    });

    v.addEventListener('ended', () => {
      const anyStillPlaying = Array.from(allVideos).some(item => !item.paused);
      if (!anyStillPlaying && typeof handleMediaPlayEnd === 'function') {
        handleMediaPlayEnd();
      }
    });
  });
});
