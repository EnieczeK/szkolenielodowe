/**
 * Internationalization (i18n) Module
 * Polish (default) <-> English switcher
 * Persists user preference in localStorage
 */

const translations = {
  pl: {
    // Meta & Head
    pageTitle: "EnieczeK — Portfolio & CV | Mikołaj Skorupa",
    metaDesc: "Portfolio i CV Mikołaja Skorupy (EnieczeK). Programowanie, wideo, drony i ratownictwo wodne. Szef IT w WOPR Katowice, student Politechniki Śląskiej.",

    // Header & Navigation
    navAbout: "O mnie",
    navExperience: "Doświadczenie",
    navEducation: "Edukacja",
    navWeb: "Strony & IT",
    navVideo: "Wideo",
    navGraphics: "Grafika",
    navSocial: "Social Media",
    navHub: "Profile",
    navContact: "Kontakt",

    // Mobile Navigation
    mobileAbout: "O mnie",
    mobileExperience: "Doświadczenie",
    mobileEducation: "Edukacja & Certyfikaty",
    mobileWeb: "Strony & Systemy IT",
    mobileVideo: "Projekty Wideo",
    mobileGraphics: "Projekty Graficzne",
    mobileSocial: "Social Media & Partnerzy",
    mobileHub: "Wszystkie Profile",
    mobileContact: "Napisz do mnie",

    // Hero Section
    heroTitlePre: "EnieczeK.",
    heroTitleAccent: "IT, wideo i kreacja cyfrowa.",
    heroDescription: "Nazywam się Mikołaj Skorupa, a w sieci działam jako Enieczek. Programuję, montuję filmy, latam dronem i tworzę grafiki. Na co dzień łączę technologie z ratownictwem wodnym i mediami społecznościowymi.",
    heroBtnProjects: "Zobacz projekty",
    heroBtnContact: "Napisz do mnie",
    heroSocialLabel: "Profile & Kanały:",
    heroLocation: "Mikołów / Katowice / Zabrze",
    discordCopyTip: "Kliknij, aby skopiować nick: enieczek",

    // About Section
    aboutTag: "O mnie",
    aboutTitle: "Technologia, wideo i ratownictwo.",
    aboutSubtitle: "Zajmuję się informatyką, montażem filmów i grafiką. Działam też aktywnie w ratownictwie wodnym.",
    aboutBioTitle: "Kim jestem?",
    aboutBioP1: "Nazywam się <strong>Mikołaj Skorupa</strong>, a w sieci tworzę jako <strong>Enieczek</strong>. Jestem <strong>technikiem informatykiem</strong> i studiuję <em>Inżynierię Biomedyczną</em> na <strong>Politechnice Śląskiej</strong> (specjalność: informatyka i sztuczna inteligencja w medycynie).",
    aboutBioP2: "W strukturach WOPR jestem <strong>Starszym Ratownikiem Wodnym</strong>. W <strong>WOPR Katowice</strong> kieruję działem IT i prowadzę media społecznościowe, a w Zarządzie Głównym WOPR działam w Komisji Profilaktyki i Komunikacji Społecznej. Latam dronami ze świadectwem kwalifikacji <strong>STS-01</strong>, mam patent sternika motorowodnego oraz uprawnienia radiooperatora SRC.",
    aboutMetricLabel: "Od kodu i administracji serwerami po montaż wideo i grafikę.",
    aboutLangHeading: "Języki:",
    langPlName: "Polski",
    langPlLevel: "Ojczysty",
    langEnName: "Angielski",
    langEnLevel: "B2 / branżowy IT & Tech",
    langItName: "Włoski",
    langItLevel: "Komunikatywny (staż Riccione)",
    aboutToolsTitle: "Programy i narzędzia",
    aboutToolsSubtitle: "Narzędzia, z których korzystam na co dzień przy projektach IT, wideo i grafice:",
    toolsColIt: "💻 IT, Sprzęt & Systemy",
    toolsColMedia: "🎨 Wideo, Grafika & Dźwięk",
    toolOfficeName: "Pakiet MS Office",
    toolOfficeCat: "Word, Excel, PowerPoint, 365",
    toolBackupName: "Serwery & Backup",
    toolBackupCat: "Kopie zapasowe i bezpieczeństwo",
    toolPcName: "Składanie komputerów",
    toolPcCat: "Dobór podzespołów i montaż",
    toolGsmName: "Serwis GSM & PC",
    toolGsmCat: "Diagnostyka i naprawa sprzętu",
    toolAiName: "Informatyka & AI",
    toolAiCat: "Politechnika Śląska (studia)",
    toolAudioName: "Sprzęt audio",
    toolAudioCat: "Nagłośnienie i miksery",
    toolDavinciName: "DaVinci Resolve",
    toolDavinciCat: "Główny montaż i color grading",
    toolCapcutName: "CapCut",
    toolCapcutCat: "Rolki, formaty wertykalne i napisy",
    toolIgEditsName: "Narzędzia Instagram",
    toolIgEditsCat: "Natywna edycja i trendy",
    toolDroneName: "Pilotaż drona (STS-01)",
    toolDroneCat: "Ujęcia lotnicze 4K",
    toolCanvaName: "Canva",
    toolCanvaCat: "Grafika promocyjna i karuzele",
    toolGimpName: "GIMP",
    toolGimpCat: "Obróbka rastrowa i retusz",
    toolBlenderName: "Blender",
    toolBlenderCat: "Grafika i proste modele 3D",
    toolObsName: "OBS Studio",
    toolObsCat: "Transmisje na żywo i nagrania",

    // Experience Section
    expTag: "Kariera",
    expTitle: "Doświadczenie zawodowe.",
    expSubtitle: "Stanowiska, projekty i działania ratownicze, w których brałem udział.",
    expZgBadge: "Kadencja 2025 — 2028",
    expZgTitle: "Członek Komisji Profilaktyki i Komunikacji Społecznej",
    expZgOrg: "Zarząd Główny WOPR (ogólnopolski)",
    expZgDesc: "Działam w komisji profilaktyki i komunikacji o bezpieczeństwie nad wodą. Nagrywam i montuję filmy na kanał TikTok @wopr.official, które docierają do setek tysięcy odbiorców w całej Polsce.",
    expKatBadgeCurrent: "Obecnie",
    expKatBadgeRole: "IT & Media",
    expKatTitle: "Szef Działu IT & Social Media Manager",
    expKatOrg: "Oddział Miejski WOPR w Katowicach",
    expKatDesc: "Łączę w jednostce dwa obszary:<br>• <strong>Szef IT:</strong> Opiekuję się sprzętem komputerowym, serwerami, siecią, bazami danych oraz łącznością radiową (SRC).<br>• <strong>Social Media:</strong> Prowadzę profile (Instagram @wopr.katowice, Facebook), montuję rolki, robię ujęcia z drona i rozmawiam z partnerami oraz sponsorami.",
    expFloodBadge: "Stan Klęski Żywiołowej",
    expFloodPeriod: "Wrzesień 2024",
    expFloodTitle: "Działania ratownicze podczas powodzi (Nysa)",
    expFloodOrg: "Śląskie WOPR / Dyspozycja Sztabu Kryzysowego",
    expFloodDesc: "Brałem bezpośredni udział w akcji ratowniczej w Nysie w trakcie powodzi we wrześniu 2024 roku. Uczestniczyłem w ewakuacji mieszkańców i działaniach w nurcie powodziowym, a także nagrałem materiał dokumentujący pracę ratowników z pierwszej linii.",
    expKenovoBadge: "Staż Zagraniczny",
    expKenovoPeriod: "Marzec — Kwiecień 2023",
    expKenovoTitle: "Serwisant sprzętu GSM i komputerów",
    expKenovoOrg: "Kenovo — Riccione, Włochy",
    expKenovoDesc: "Miesięczny staż zawodowy we Włoszech. Diagnozowałem i naprawiałem laptopy oraz smartfony, wymieniałem komponenty elektroniczne, wgrywałem oprogramowanie i odzyskiwałem dane z uszkodzonych nośników.",
    expCalaveraBadge: "Gastronomia",
    expCalaveraPeriod: "Październik 2023 — Kwiecień 2024",
    expCalaveraTitle: "Barman / Barista / Kelner",
    expCalaveraOrg: "Restauracja Calavera — Zabrze",
    expCalaveraDesc: "Obsługa gości za barem i na sali, przygotowywanie napojów oraz organizacja pracy baru. Dobre ćwiczenie odporności na stres, kontaktu z klientem i sprawnego działania pod presją czasu.",
    expMbpBadge: "Praktyki",
    expMbpPeriod: "2021",
    expMbpTitle: "Praktyki informatyczne i obsługa wydarzeń",
    expMbpOrg: "Miejska Biblioteka Publiczna w Mikołowie",
    expMbpDesc: "Serwisowałem komputery i drukarki, konfigurowałem kopie zapasowe na serwerach oraz projektowałem plakaty zapowiadające spotkania autorskie. Odpowiadałem też za nagłośnienie i multimedia podczas spotkań oraz koncertów.",
    expMrmBadge: "Samorząd Młodzieżowy",
    expMrmPeriod: "2019 — 2022",
    expMrmTitle: "Młodzieżowy Radny Miasta",
    expMrmOrg: "Młodzieżowa Rada Miejska w Mikołowie",
    expMrmDesc: "Przez 3 lata reprezentowałem młodzież w kontaktach z władzami miasta, współorganizowałem wydarzenia kulturalne i zgłaszałem pomysły na inicjatywy młodzieżowe.",
    expFreeBadge: "Twórczość Własna",
    expFreePeriod: "2020 — obecnie",
    expFreeTitle: "Twórca wideo, streamer i grafik",
    expFreeOrg: "Działalność własna (marka EnieczeK)",
    expFreeDesc: "Tworzę materiały na YouTube, Twitcha, TikToka i Instagrama. Sam nagrywam, montuję w DaVinci Resolve i CapCut, projektuję miniatury oraz konfiguruję transmisje na żywo w OBS Studio.",
    expRescueBadgeCurrent: "Sezonowo",
    expRescueBadgeRole: "Służba Morska",
    expRescuePeriod: "2022 — obecnie",
    expRescueTitle: "Starszy Ratownik Wodny & Kwalifikowana Pierwsza Pomoc (KPP)",
    expRescueOrg: "Kąpieliska morskie Jastarnia i Jurata | Pływalnie Katowice & Łaziska",
    expRescueDesc: "Wielosezonowa praca na bałtyckich plażach w Jastarni i Juracie oraz na krytych basenach na Śląsku. Pilnowanie bezpieczeństwa kąpiących się, koordynacja akcji ratunkowych, praca na falach i natychmiastowe udzielanie kwalifikowanej pierwszej pomocy.",

    // Education Section
    eduTag: "Wykształcenie",
    eduTitle: "Edukacja i uprawnienia.",
    eduSubtitle: "Studia inżynierskie, ukończona szkoła techniczna oraz certyfikowane uprawnienia.",
    eduColSchool: "Wykształcenie",
    eduColCerts: "Certyfikaty & Uprawnienia",
    eduPolslName: "Politechnika Śląska",
    eduPolslFaculty: "Wydział Inżynierii Biomedycznej",
    eduPolslPeriod: "Październik 2023 — obecnie",
    eduPolslInfo: "Kierunek: <strong>Inżynieria Biomedyczna</strong> (studia inżynierskie)<br>Specjalizacja: <strong>Informatyka i Sztuczna Inteligencja w Medycynie</strong><br>Analiza danych, uczenie maszynowe, programowanie oraz technologie cyfrowe w medycynie.",
    eduZstName: "Zespół Szkół Technicznych w Mikołowie",
    eduZstFaculty: "Tytuł zawodowy: Technik Informatyk",
    eduZstPeriod: "Wrzesień 2019 — Maj 2023",
    eduZstInfo: "Kwalifikacje zawodowe INF.02 i INF.03: sieci komputerowe, administracja systemami, bazy danych, diagnostyka i naprawa sprzętu komputerowego.",
    certDroneName: "Pilotaż Dronów STS-01 & A1/A2/A3",
    certDroneIssuer: "Urząd Lotnictwa Cywilnego (ULC) & EASA • Certyfikat POL-RP-27vbhd5vtklj",
    certBoatName: "Patent Sternika Motorowodnego",
    certBoatIssuer: "Polski Związek Motorowodny i Narciarstwa Wodnego (PZMWiNW nr 230658)",
    certSrcName: "Świadectwo Radiooperatora SRC (VHF/DSC)",
    certSrcIssuer: "Urząd Komunikacji Elektronicznej (UKE nr GS-37679, SOLAS / GMDSS)",
    certRescueName: "Starszy Ratownik Wodny & ILS",
    certRescueIssuer: "Stopień: <strong>Starszy Ratownik Wodny WOPR</strong> • Zaświadczenie MSWiA nr 72/2020 • ILS Surf Lifeguard",
    certKppName: "Kwalifikowana Pierwsza Pomoc (KPP)",
    certKppIssuer: "Tytuł Ratownika Państwowego (ważny do: <strong>maj 2028</strong>)",
    certWsipName: "Ratownik Wód Szybkopłynących i Powodziowych",
    certWsipIssuer: "Certyfikat CSS WSiP (Śląskie WOPR / Gliwice)",
    certIceName: "Ratownik Ratownictwa Lodowego",
    certIceIssuer: "Centralne Szkolenie Specjalistyczne Ratownictwa Lodowego (Śląskie WOPR)",
    certItName: "Dyplom Technika Informatyka",
    certItIssuer: "Państwowy Egzamin Zawodowy CKE (maj 2023)",
    certWotName: "Szkolenie Taktyczno-Desantowe WOT",
    certWotIssuer: "112 Batalion Piechoty Lekkiej WOT (desantowanie z łodzi, ratownictwo wodne)",
    certBarmanName: "Kurs Barmański I Stopnia",
    certBarmanIssuer: "Ogólnopolska Szkoła Barmanów (wrzesień 2023)",
    certDrivingName: "Prawo Jazdy Kat. B (AM, B1, B)",
    certDrivingIssuer: "Wydane przez Starostę Mikołowskiego",
    certSanepidName: "Badania Sanepid & Zaświadczenie KRK",
    certSanepidIssuer: "Aktualna książeczka do celów sanitarnych + czysta kartoteka karna (KRK)",

    // Web & IT Projects
    webTag: "Strony & Systemy IT",
    webTitle: "Aplikacje webowe i systemy.",
    webSubtitle: "Strony i platformy, które sam zaprojektowałem, wdrożyłem i którymi administruję.",
    webPzsTitle: "PZS Śląskie WOPR — Platforma Zdalnego Szkolenia",
    webPzsRole: "Wdrożenie IT i administracja • Mikołaj Skorupa",
    webPzsDesc: "Wojewódzka platforma e-learningowa dla ratowników WOPR oparta na systemie Moodle. Umożliwia prowadzenie kursów online, testów wiedzy i obieg dokumentacji szkoleniowej.",
    webPzsF1: "<strong>Elektroniczny dziennik szkoleń:</strong> Rejestr obecności, zaliczeń i postępów uczestników kursów.",
    webPzsF2: "<strong>Strefa kursanta i instruktora:</strong> Dostęp do materiałów dydaktycznych, sprawdzianów online i weryfikacji tożsamości.",
    webPzsF3: "<strong>Administracja i bezpieczeństwo:</strong> Zarządzanie bazą MariaDB/MySQL, regularne kopie zapasowe i wsparcie techniczne.",
    webPzsBtn: "Odwiedź platformę ↗",
    webLodoweTitle: "CSS Lodowe — Zapisy na szkolenie ratownicze",
    webLodoweRole: "Projekt UI/UX, frontend i panel zaplecza",
    webLodoweDesc: "Strona naboru i system zapisów na specjalistyczne szkolenie ratownictwa lodowego na Zbiorniku Dziećkowice. Projekt One-Page z wideo w tle oraz panelem organizatora.",
    webLodoweF1: "<strong>Formularz zgłoszeniowy:</strong> Zbieranie zgłoszeń z wyborem jednostki WOPR, stopnia ratowniczego i danych kontaktowych.",
    webLodoweF2: "<strong>Panel organizatora (#admin):</strong> Zabezpieczony podgląd listy zapisanych osób, statystyki oraz eksport do pliku CSV.",
    webLodoweF3: "<strong>Dopracowany interfejs:</strong> Przejrzysty układ, wideo w tle i pełne dopasowanie do ekranów telefonów.",
    webLodoweBtnLive: "Zobacz stronę na żywo ↗",
    webLodoweBtnAdmin: "Panel Organizatora (#admin)",

    // Video Section
    videoTag: "Portfolio Filmowe",
    videoTitle: "Montaż wideo i ujęcia z drona.",
    videoSubtitle: "Przykłady moich filmów — od rolek na media społecznościowe po trailery, ujęcia z drona 4K i reportaże.",
    reel100Title: "100 lat ratownictwa wodnego w Polsce",
    reel100Sub: "OMODA & JAECOO Auto-Boss × WOPR Katowice (JAECOO 8)",
    reel100Desc: "Rolka jubileuszowa przygotowana we współpracy z salonem Auto-Boss. Wystąpiłem w niej w roli ratownika wodnego, łącząc historię śląskiego ratownictwa z prezentacją nowego modelu auta.",
    reel100Btn: "Otwórz post na Instagramie ↗",
    vidThunderTitle: "Zwiastun kursu ratowniczego (styl Marvel)",
    vidThunderDesc: "Dynamiczny klip rekrutacyjny na kurs ratowników wodnych. Szybki montaż w DaVinci Resolve, zgrany z rytmem mocnego podkładu muzycznego i efektów dźwiękowych.",
    vidThunderBtn: "Otwórz plik ↗",
    vidFloodTitle: "Powódź 2024 — Działania ratownicze (Nysa)",
    vidFloodDesc: "Materiał zrealizowany przeze mnie podczas akcji ratunkowej w Nysie we wrześniu 2024 roku. Pokazuje realne kadry z ewakuacji ludzi i pracy ratowników Śląskiego WOPR w nurcie powodziowym.",
    vidPzpTitle: "100 Lat Komisji ds. Ratownictwa Wodnego przy PZP",
    vidPzpDesc: "Film przygotowany na jubileusz 100-lecia Komisji ds. Ratownictwa Wodnego przy Polskim Związku Pływackim. Łączy archiwalne materiały ze współczesnym montażem.",
    vidLoopTitle: "WOPR Visual Loop — wideo na ekrany i stoiska",
    vidLoopDesc: "Pętla wideo stworzona do wyświetlania w tle podczas festynów, pokazów ratowniczych i imprez plenerowych.",
    vidDroneTitle: "Ujęcia z drona 4K (uprawnienia STS-01)",
    vidDroneDesc: "Ujęcia lotnicze nagrane dronem w 4K. Latam legalnie ze świadectwem kwalifikacji STS-01 (kategoria szczególna) oraz uprawnieniami A1/A2/A3.",
    vidReelTitle: "Krótkie formy wideo (Reels / TikTok)",
    vidReelDesc: "Wertykalne wideo na moje autorskie profile i dla klientów: dynamiczny montaż, napisy, trendy dźwiękowe i przyciągający uwagę początek.",
    zawodyTag: "Wyróżniona Realizacja • Reportaż & Wywiady",
    zawodyTitle: "Zawody Ratownictwa Wodnego — Reportaż i Wywiady",
    zawodySub: "Realizacja wywiadów, reżyseria i montaż materiałów wideo",
    zawodyDesc: "To nie tylko dynamiczny skrót wydarzenia, ale pełna realizacja: przygotowanie pytań, reżyseria i prowadzenie wywiadów z zawodnikami oraz montaż całości w formacie wertykalnym.",
    zawodyBtn: "Otwórz pełny plik wideo ↗",
    vidWsipTitle: "Szkolenie CSS WSiP — Wody szybkopłynące i powodziowe",
    vidWsipDesc: "Dynamiczna relacja ze szkolenia ratowników na rzece górskiej. Ujęcia w nurcie powodziowym, techniki asekuracji i praca zespołowa ratowników Śląskiego WOPR.",
    vidRekrutacjaTitle: "Zostań Ratownikiem — WOPR Katowice",
    vidRekrutacjaDesc: "Oficjalna rolka promująca nabór na kurs ratowników wodnych w Katowicach. Dynamiczny montaż, napisy i bezpośredni przekaz zachęcający do wstąpienia w szeregi ratowników.",
    vidOplatekTitle: "Podsumowanie Roku i Spotkanie Opłatkowe WOPR",
    vidOplatekDesc: "Uroczyste podsumowanie sezonu i spotkanie świąteczne ratowników. Nastrojowe ujęcia, wspomnienia z akcji i podziękowanie dla zespołu za służbę w minionym roku.",
    vidKursTitle: "Kulisy Szkolenia Ratowników Wodnych",
    vidKursDesc: "Kadry z intensywnych ćwiczeń na basenie: techniki holowania, skoki ratunkowe i procedury kwalifikacji. Szybki montaż zsynchronizowany z dynamicznym podkładem dźwiękowym.",
    vidLodoweTitle: "CSS Ratownictwo Lodowe — Dziećkowice",
    vidLodoweDesc: "Materiały wideo z Centralnego Szkolenia Specjalistycznego na zamarzniętym akwenie. Wejścia do przerębli, praca saniami lodowymi i asekuracja w suchych skafandrach.",
    vidKrainaTitle: "CSS Lodowe — Zimowy montaż z muzyką",
    vidKrainaDesc: "Alternatywna, nastrojowa wersja relacji z ćwiczeń na lodzie. Zbudowanie zimowego nastroju, dynamiczne przejścia i ujęcia z wysokości lodu.",
    vidOpenBtn: "Otwórz plik ↗",

    // Graphics Section
    graphicsTag: "Portfolio Graficzne",
    graphicsTitle: "Plakaty, branding i projekty 3D.",
    graphicsSubtitle: "Plakaty na wydarzenia, materiały reklamowe, proste modele 3D oraz identyfikacja wizualna.",
    filterAll: "Wszystkie realizacje (14)",
    filterPosters: "Plakaty & Kampanie (4)",
    filterMerch: "Branding, 3D & Merch (7)",
    filterArt: "Motion & Digital Art (3)",
    zoomTip: "Powiększ projekt ↗",
    playTip: "Odtwórz wideo ↗",

    // Social Work Section
    socialTag: "Social Media & Partnerzy",
    socialTitle: "Prowadzone profile i współprace.",
    socialSubtitle: "Jak prowadzę media społecznościowe dla instytucji, marek i w projektach autorskich.",
    caseMainTitle: "WOPR Katowice & Śląskie WOPR",
    caseMainSub: "Szef Działu IT • Prowadzenie Social Media • Pozyskiwanie Partnerów",
    caseMainDesc: "W Oddziale Miejskim WOPR w Katowicach dbam o to, by sprzęt i sieć działały bezawaryjnie, a profile w sieci były żywe i angażujące. Regularnie publikuję posty, montuję rolki i rozmawiam z firmami, które chcą wesprzeć ratowników sprzętem lub sponsoringiem.",
    caseH1Val: "Dział IT",
    caseH1Txt: "Opieka nad sprzętem, siecią, serwerami, łącznością radiową i bazami danych.",
    caseH2Val: "Social Media & Wideo",
    caseH2Txt: "Prowadzenie Instagrama @wopr.katowice i Facebooka, ujęcia z drona i montaż rolek.",
    caseH3Val: "Partnerzy & Sponsoring",
    caseH3Txt: "Bezpośrednie rozmowy i pozyskiwanie firm technologicznych, ratowniczych i motoryzacyjnych.",
    partnersSectionTitle: "Partnerzy i sponsorzy, z którymi współpracowałem:",
    partnersSectionDesc: "Marki i firmy, z którymi bezpośrednio nawiązałem współpracę promocyjną lub sprzętową dla WOPR Katowice:",
    partnerOmodaRole: "Kampania motoryzacyjna & JAECOO 8",
    partnerOmodaDesc: "Wspólna realizacja wideo na 100-lecie ratownictwa; występ w roli ratownika.",
    partnerCdsRole: "Software house & rozwiązania cyfrowe",
    partnerCdsDesc: "Współpraca w obszarze technologii internetowych i wsparcia projektowego.",
    partnerAsbisRole: "Dystrybucja IT & technologie",
    partnerAsbisDesc: "Pozyskanie partnera i współpraca w zakresie sprzętu komputerowego.",
    partnerFalaRole: "Środowisko ratownicze",
    partnerFalaDesc: "Wspólne inicjatywy promujące bezpieczny wypoczynek nad wodą.",
    partnerOndutyRole: "Sprzęt ratowniczy & taktyczny",
    partnerOndutyDesc: "Doposażenie jednostki w profesjonalny ekwipunek ratowniczy.",
    partnerDecathlonRole: "Sport & outdoor",
    partnerDecathlonDesc: "Wsparcie sprzętowe przy zabezpieczeniach wodnych i eventach.",
    partnerHyteraRole: "Radiokomunikacja",
    partnerHyteraDesc: "Niezawodna łączność bezprzewodowa dla ratowników podczas akcji i ćwiczeń.",
    partnerGinaRole: "Oprogramowanie dedykowane",
    partnerGinaDesc: "Współpraca w zakresie systemów informatycznych dla służb ratunkowych.",

    // Extra Social Showcase
    biosoftTitle: "Studenckie Koło Naukowe BioSoft (Politechnika Śląska)",
    biosoftSub: "Prowadzenie profili i montaż filmów • Wydział Inżynierii Biomedycznej",
    biosoftDesc: "Współprowadzę media społecznościowe koła naukowego BioSoft. Przygotowuję rolki wideo i grafiki prezentujące projekty badawcze z zakresu informatyki medycznej i sztucznej inteligencji.",
    biosoftBtnVideo: "Zobacz mój film ↗",
    woprOfficialTitle: "TikTok @wopr.official (Zarząd Główny WOPR)",
    woprOfficialSub: "Członek Komisji Komunikacji • Realizacja i montaż wideo",
    woprOfficialDesc: "Jako członek Komisji Profilaktyki i Komunikacji Społecznej Zarządu Głównego WOPR nagrywam i montuję krótkie filmy na TikToka. Pokazujemy zasady bezpieczeństwa nad wodą z humorem i w nowoczesnej formie.",
    woprOfficialBtnV1: "Film 1 (TikTok) ↗",
    woprOfficialBtnV2: "Film 2 (TikTok) ↗",

    // Social Hub Section
    hubTag: "Wszystkie Linki",
    hubTitle: "Gdzie mnie znaleźć w sieci.",
    hubSubtitle: "Bezpośrednie odnośniki do mojego kodu, streamów, filmów i kontaktu.",
    hubCreatorTitle: "EnieczeK (@enieczek)",
    hubCreatorBadge: "Profil twórcy cyfrowego",
    hubCreatorDesc: "Mój główny profil autorski na Instagramie: kulisy projektów, rolki ze streamów, sprzęt i kontakt prywatny.",
    hubCreatorBtn: "Odwiedź profil Instagram @enieczek ↗",
    hubWaDesc: "Szybka wiadomość lub telefon",
    hubTtDesc: "Krótkie formy wideo i kulisy",
    hubGhDesc: "Repozytoria, kod i strony",
    hubLiDesc: "Profil zawodowy i sieć kontaktów",
    hubYtDesc: "Dłuższe filmy i montaże",
    hubTwDesc: "Transmisje na żywo",
    hubIgDesc: "Codzienne relacje i zdjęcia",
    hubThDesc: "Krótkie wpisy i przemyślenia",
    hubFbDesc: "Profil prywatny",
    hubDcDesc: "Nick: enieczek (kliknij, aby skopiować)",

    // Contact Section
    contactTag: "Kontakt",
    contactTitle: "Porozmawiajmy o projekcie lub współpracy.",
    contactText: "Szukasz kogoś do projektu IT, montażu wideo, poprowadzenia mediów społecznościowych lub masz ciekawą ofertę pracy? Śmiało napisz lub zadzwoń.",
    contactEmailLabel: "Adres E-mail",
    contactEmailSub: "Kliknij, aby wysłać wiadomość",
    contactPhoneLabel: "Telefon & WhatsApp",
    contactPhoneSub: "Rozmowa, SMS lub WhatsApp",
    contactLocLabel: "Lokalizacja",
    contactLocSub: "Śląsk | Prawo jazdy kat. B",
    contactBtnWa: "Napisz na WhatsApp",
    contactBtnEmail: "Wyślij e-mail",
    contactBtnLi: "Połącz na LinkedIn",
    contactBtnDc: "Skopiuj Discord: enieczek",

    // Floating Audio Widget
    audioHint: "🎵 Kliknij, aby włączyć muzykę",
    audioLabel: "Muzyka w tle",

    // Footer
    footerCopy: "Mikołaj Skorupa (EnieczeK). IT, wideo i kreacja cyfrowa.",
    backToTop: "Wróć na górę",

    // Toast
    toastCopied: "Skopiowano do schowka!"
  },

  en: {
    // Meta & Head
    pageTitle: "EnieczeK — Portfolio & Resume | Mikołaj Skorupa",
    metaDesc: "Official portfolio & resume of Mikołaj Skorupa (EnieczeK). IT engineering, video production, licensed drone piloting and water rescue. IT Head at WOPR Katowice.",

    // Header & Navigation
    navAbout: "About",
    navExperience: "Experience",
    navEducation: "Education",
    navWeb: "Web & IT",
    navVideo: "Video",
    navGraphics: "Graphics",
    navSocial: "Social Media",
    navHub: "Profiles",
    navContact: "Contact",

    // Mobile Navigation
    mobileAbout: "About Me",
    mobileExperience: "Professional Experience",
    mobileEducation: "Education & Certificates",
    mobileWeb: "Websites & IT Systems",
    mobileVideo: "Video Projects",
    mobileGraphics: "Graphic Design",
    mobileSocial: "Social Media & Partners",
    mobileHub: "All Profiles",
    mobileContact: "Direct Contact",

    // Hero Section
    heroTitlePre: "EnieczeK.",
    heroTitleAccent: "IT, Video & Digital Media.",
    heroDescription: "My name is Mikołaj Skorupa, known online as Enieczek. I develop software, edit video, fly drones, and create graphics. I actively combine technical skills with open-water lifeguarding and social media management.",
    heroBtnProjects: "View Projects",
    heroBtnContact: "Get in Touch",
    heroSocialLabel: "Profiles & Channels:",
    heroLocation: "Katowice / Mikołów, Poland",
    discordCopyTip: "Click to copy handle: enieczek",

    // About Section
    aboutTag: "About Me",
    aboutTitle: "Tech, video production and rescue.",
    aboutSubtitle: "I work with IT systems, video editing, and digital design, while serving actively as a Senior Beach Lifeguard.",
    aboutBioTitle: "Who am I?",
    aboutBioP1: "My name is <strong>Mikołaj Skorupa</strong>, known online as <strong>Enieczek</strong>. I hold a certified <strong>IT Technician</strong> diploma and study <em>Biomedical Engineering</em> at the <strong>Silesian University of Technology</strong> (specializing in Computer Science & AI in Medicine).",
    aboutBioP2: "Within the Polish Water Rescue Service (WOPR), I hold the rank of <strong>Senior Lifeguard</strong>. At <strong>WOPR Katowice</strong>, I head the IT department and manage social media, and serve on the Prevention & Communication Committee of the <strong>Main Board of WOPR</strong> in Warsaw. I am an EU-licensed drone pilot (<strong>STS-01</strong> & A1/A2/A3), hold a motorboat skipper license, and an official marine VHF SRC radio operator certificate.",
    aboutMetricLabel: "From code and server setups to video post-production and branding.",
    aboutLangHeading: "Languages:",
    langPlName: "Polish",
    langPlLevel: "Native",
    langEnName: "English",
    langEnLevel: "B2 / Technical & IT",
    langItName: "Italian",
    langItLevel: "Basic conversational (Riccione internship)",
    aboutToolsTitle: "Software & Tools",
    aboutToolsSubtitle: "Tools and technologies I use daily for IT, video, and design projects:",
    toolsColIt: "💻 IT, Systems & Hardware",
    toolsColMedia: "🎨 Video, Design & Audio",
    toolOfficeName: "MS Office 365",
    toolOfficeCat: "Word, Excel, PowerPoint, Cloud",
    toolBackupName: "Servers & Backups",
    toolBackupCat: "Data redundancy & network security",
    toolPcName: "Custom PC Builds",
    toolPcCat: "Hardware selection & assembly",
    toolGsmName: "Hardware & Phone Repair",
    toolGsmCat: "Diagnostics & component replacement",
    toolAiName: "Computer Science & AI",
    toolAiCat: "Silesian Tech (academic)",
    toolAudioName: "Audio & PA Systems",
    toolAudioCat: "Mixers, mics & sound engineering",
    toolDavinciName: "DaVinci Resolve",
    toolDavinciCat: "Primary video editing & color grading",
    toolCapcutName: "CapCut",
    toolCapcutCat: "Dynamic reels, vertical video & captions",
    toolIgEditsName: "Instagram Native Edits",
    toolIgEditsCat: "Trends & in-app content creation",
    toolDroneName: "Drone Piloting (STS-01)",
    toolDroneCat: "4K aerial footage & licensed flights",
    toolCanvaName: "Canva",
    toolCanvaCat: "Social graphics & promo materials",
    toolGimpName: "GIMP",
    toolGimpCat: "Raster editing & photo retouching",
    toolBlenderName: "Blender 3D",
    toolBlenderCat: "3D modeling & render mockups",
    toolObsName: "OBS Studio",
    toolObsCat: "Live streaming & capture setups",

    // Experience Section
    expTag: "Career",
    expTitle: "Work experience.",
    expSubtitle: "Positions, projects, and rescue operations I have taken part in.",
    expZgBadge: "Term 2025 — 2028",
    expZgTitle: "Member of Prevention & Public Relations Committee",
    expZgOrg: "WOPR Main Board (National HQ, Warsaw)",
    expZgDesc: "Appointed to the committee responsible for nationwide water safety awareness. I produce short-form video content and co-manage the official TikTok channel @wopr.official, reaching hundreds of thousands of viewers across Poland.",
    expKatBadgeCurrent: "Current",
    expKatBadgeRole: "IT & Media",
    expKatTitle: "Head of IT & Social Media Manager",
    expKatOrg: "WOPR Katowice City Branch",
    expKatDesc: "I handle two key areas for the branch:<br>• <strong>IT Head:</strong> Overseeing PCs, servers, local network, databases, and marine VHF radio comms (SRC).<br>• <strong>Social Media:</strong> Running official accounts (Instagram @wopr.katowice, Facebook), shooting drone footage, editing reels, and communicating with corporate sponsors.",
    expFloodBadge: "Disaster Relief Mission",
    expFloodPeriod: "September 2024",
    expFloodTitle: "Flood Rescue Operations (Nysa)",
    expFloodOrg: "Silesian WOPR / Emergency Task Force",
    expFloodDesc: "Dispatched during the severe September 2024 flood disaster in Nysa. Took part in swift-water evacuations and rescue runs, while documenting frontline rescue efforts on camera.",
    expKenovoBadge: "International Internship",
    expKenovoPeriod: "March — April 2023",
    expKenovoTitle: "Computer & Smartphone Repair Technician",
    expKenovoOrg: "Kenovo — Riccione, Italy",
    expKenovoDesc: "A one-month IT internship in Italy. Diagnosed and repaired laptops and smartphones, replaced micro-components, updated firmware, and recovered data from failing drives.",
    expCalaveraBadge: "Hospitality & Soft Skills",
    expCalaveraPeriod: "October 2023 — April 2024",
    expCalaveraTitle: "Bartender / Barista / Waiter",
    expCalaveraOrg: "Calavera Restaurant — Zabrze",
    expCalaveraDesc: "Customer service, mixology, inventory planning, and floor teamwork. High-paced environment that trained clear communication and fast action under pressure.",
    expMbpBadge: "Internship",
    expMbpPeriod: "2021",
    expMbpTitle: "IT Technician & Event Media Support",
    expMbpOrg: "Public City Library in Mikołów",
    expMbpDesc: "Maintained workstation PCs, scheduled automated server backups, and designed posters for literary events. Managed live sound and projection during conferences and concerts.",
    expMrmBadge: "Civic Service",
    expMrmPeriod: "2019 — 2022",
    expMrmTitle: "Youth City Councilor",
    expMrmOrg: "Mikołów Youth City Council",
    expMrmDesc: "Served a 3-year term representing youth in local municipal matters, organizing community events, and collaborating with local government leaders.",
    expFreeBadge: "Independent Creator",
    expFreePeriod: "2020 — Present",
    expFreeTitle: "Video Creator, Streamer & Graphic Designer",
    expFreeOrg: "Self-Employed / Personal Brand (EnieczeK)",
    expFreeDesc: "Producing content across YouTube, Twitch, TikTok, and Instagram. Handling full production: recording, DaVinci Resolve & CapCut editing, high-CTR thumbnails, and OBS live streaming.",
    expRescueBadgeCurrent: "Seasonal",
    expRescueBadgeRole: "Open Water Lifeguard",
    expRescuePeriod: "2022 — Present",
    expRescueTitle: "Senior Water Lifeguard & EMT / Advanced First Aid (KPP)",
    expRescueOrg: "Baltic Sea Beaches in Jastarnia & Jurata | Indoor Pools Katowice",
    expRescueDesc: "Multi-season beach lifeguarding along the Hel Peninsula (Jastarnia, Jurata) and indoor sport complexes in Silesia. Monitoring beach safety, coordinating open-water rescues, and providing immediate first response care.",

    // Education Section
    eduTag: "Education",
    eduTitle: "Education & licenses.",
    eduSubtitle: "Degree studies, certified vocational diploma, and official state licenses.",
    eduColSchool: "Academic Background",
    eduColCerts: "Licenses & Certificates",
    eduPolslName: "Silesian University of Technology",
    eduPolslFaculty: "Faculty of Biomedical Engineering",
    eduPolslPeriod: "October 2023 — Present",
    eduPolslInfo: "Major: <strong>Biomedical Engineering</strong> (B.Sc. candidate)<br>Specialization: <strong>Computer Science & Artificial Intelligence in Medicine</strong><br>Machine learning, data analysis, programming, and healthcare technology.",
    eduZstName: "Technical School Complex in Mikołów",
    eduZstFaculty: "Vocational Title: Certified IT Technician",
    eduZstPeriod: "September 2019 — May 2023",
    eduZstInfo: "State professional certifications INF.02 & INF.03: computer networks, system administration, databases, and hardware servicing.",
    certDroneName: "UAV Drone Pilot License STS-01 & A1/A2/A3",
    certDroneIssuer: "Civil Aviation Authority (ULC) & EASA • Cert POL-RP-27vbhd5vtklj",
    certBoatName: "Motorboat Skipper License",
    certBoatIssuer: "Polish Motorboat & Water Ski Association (PZMWiNW #230658)",
    certSrcName: "Short Range Certificate (SRC VHF/DSC)",
    certSrcIssuer: "Office of Electronic Communications (UKE #GS-37679, SOLAS / GMDSS)",
    certRescueName: "Senior Water Lifeguard & ILS",
    certRescueIssuer: "Rank: <strong>Senior Water Lifeguard</strong> • Interior Ministry Cert #72/2020 • ILS Surf Lifeguard",
    certKppName: "Qualified First Aid (KPP / Polish State EMT)",
    certKppIssuer: "State rescue qualification (valid until: <strong>May 2028</strong>)",
    certWsipName: "Swift Water & Flood Rescue Lifeguard",
    certWsipIssuer: "CSS WSiP Certificate (Silesian WOPR / Gliwice)",
    certIceName: "Ice Rescue Specialist Lifeguard",
    certIceIssuer: "Central Specialized Ice Rescue Training (Silesian WOPR)",
    certItName: "State Certified IT Technician Diploma",
    certItIssuer: "Central Examination Board CKE (May 2023)",
    certWotName: "Tactical Airborne & Boat Descent Training",
    certWotIssuer: "112th Territorial Defense Light Infantry Battalion",
    certBarmanName: "Certified Bartender Level I",
    certBarmanIssuer: "Polish Bartenders Academy (September 2023)",
    certDrivingName: "Driver's License Cat. B (AM, B1, B)",
    certDrivingIssuer: "Issued by Mikołów District Authority",
    certSanepidName: "Sanitary Health Book & Clean Criminal Record",
    certSanepidIssuer: "Valid food service health book + verified clean criminal record (KRK)",

    // Web & IT Projects
    webTag: "Web & IT Systems",
    webTitle: "Web apps and digital platforms.",
    webSubtitle: "Portals, e-learning platforms, and registration systems designed, built, and maintained by me.",
    webPzsTitle: "PZS Silesian WOPR — E-Learning Platform",
    webPzsRole: "IT Implementation & System Administrator • Mikołaj Skorupa",
    webPzsDesc: "Regional e-learning portal for water rescue personnel based on Moodle LMS. Fully automates theory classes, exams, attendance logs, and certification.",
    webPzsF1: "<strong>Electronic Training Log:</strong> Live attendance tracking, test grading, and student progress records.",
    webPzsF2: "<strong>Student & Instructor Portal:</strong> Educational materials, verified online testing, and identity checks.",
    webPzsF3: "<strong>IT Admin & Security:</strong> MariaDB/MySQL database tuning, daily backups, and ongoing support.",
    webPzsBtn: "Visit Platform ↗",
    webLodoweTitle: "Ice Rescue Workshop — Online Registration",
    webLodoweRole: "UI/UX Designer, Frontend Developer & Backend Panel",
    webLodoweDesc: "Official landing page and registration platform for specialized ice rescue courses on Dziećkowice Lake. Modern one-page layout with video background and admin dashboard.",
    webLodoweF1: "<strong>Interactive Application Form:</strong> Easy signup with branch selection, rescue ranks, and validation.",
    webLodoweF2: "<strong>Organizer Dashboard (#admin):</strong> Password-protected participant list with stats and CSV export.",
    webLodoweF3: "<strong>Clean UI Design:</strong> Glassmorphism styling, ambient background video, and mobile responsiveness.",
    webLodoweBtnLive: "View Live Site ↗",
    webLodoweBtnAdmin: "Admin Panel (#admin)",

    // Video Section
    videoTag: "Video Portfolio",
    videoTitle: "Video editing & aerial drone cinematography.",
    videoSubtitle: "Selected productions: from social media reels and promotional trailers to 4K drone cinematography.",
    reel100Title: "100 Years of Polish Water Rescue",
    reel100Sub: "OMODA & JAECOO Auto-Boss × WOPR Katowice (JAECOO 8)",
    reel100Desc: "Commemorative commercial reel produced with the Auto-Boss dealership. Starring as an active lifeguard, connecting a century of water rescue heritage with vehicle technology.",
    reel100Btn: "View on Instagram ↗",
    vidThunderTitle: "Lifeguard Course Promo (Marvel Trailer Style)",
    vidThunderDesc: "High-energy recruitment trailer for lifeguard training. Fast-paced DaVinci Resolve editing synchronized with punchy sound design.",
    vidThunderBtn: "Open File ↗",
    vidFloodTitle: "Flood Relief 2024 — Frontline Operations (Nysa)",
    vidFloodDesc: "Documentary footage I shot during the flood rescue mission in Nysa (September 2024). Raw footage of resident evacuations and swift-water teams at work.",
    vidPzpTitle: "100th Anniversary of PZP Water Rescue",
    vidPzpDesc: "Commemorative video honoring 100 years of the Water Rescue Committee at the Polish Swimming Federation, combining archival footage and modern cuts.",
    vidLoopTitle: "WOPR Visual Loop — Event & Expo Backdrop",
    vidLoopDesc: "Looping video created for large stage screens, outdoor festivals, and promotional rescue demonstrations.",
    vidDroneTitle: "4K Drone Cinematography (STS-01 License)",
    vidDroneDesc: "4K aerial footage filmed over water. Certified drone pilot under EU STS-01 (Specific Category) and open categories (A1/A2/A3).",
    vidReelTitle: "Short-Form Video (Reels & TikTok)",
    vidReelDesc: "Vertical video formats produced for my channels and partners: rhythm-synced cuts, engaging captions, and dynamic social storytelling.",
    zawodyTag: "Featured Production • Reportage & Interviews",
    zawodyTitle: "Water Rescue Championship — Reportage & Interviews",
    zawodySub: "Interview direction, production & video editing",
    zawodyDesc: "Not just a dynamic event recap, but full production: developing questions, directing and conducting interviews with rescue athletes, and editing the full feature in vertical format.",
    zawodyBtn: "Open full video file ↗",
    vidWsipTitle: "Swift Water & Flood Rescue Training (CSS WSiP)",
    vidWsipDesc: "Dynamic recap from specialized rescue drills on a mountain river. Footage in torrential currents, rope rigging, and team rescue tactics.",
    vidRekrutacjaTitle: "Become a Lifeguard — WOPR Katowice",
    vidRekrutacjaDesc: "Official recruitment reel for lifeguard training in Katowice. Fast-paced cuts, on-screen captions, and direct calls to action.",
    vidOplatekTitle: "Year-End Summary & WOPR Gathering",
    vidOplatekDesc: "Ceremonial season recap and holiday team gathering. Atmospheric frames, rescue memories, and appreciation for the squad's service.",
    vidKursTitle: "Behind the Scenes: Lifeguard Training",
    vidKursDesc: "Footage from rigorous indoor pool drills: tow techniques, rescue jumps, and qualification drills edited to punchy music.",
    vidLodoweTitle: "Specialized Ice Rescue Training — Dziećkowice",
    vidLodoweDesc: "Video documentation from specialized ice rescue maneuvers on frozen waters: ice hole entries, rescue sled deployment, and drysuit operations.",
    vidKrainaTitle: "Ice Rescue Workshop — Winter Music Cut",
    vidKrainaDesc: "An atmospheric music-driven cut of ice rescue drills, capturing the winter vibe, ice-level shots, and tactical coordination.",
    vidOpenBtn: "Open file ↗",

    // Graphics Section
    graphicsTag: "Graphic Design",
    graphicsTitle: "Posters, branding & 3D mockups.",
    graphicsSubtitle: "Event posters, advertising graphics, 3D product visualizations, and visual identity.",
    filterAll: "All Projects (14)",
    filterPosters: "Posters & Campaigns (4)",
    filterMerch: "Branding, 3D & Merch (7)",
    filterArt: "Motion & Digital Art (3)",
    zoomTip: "Enlarge project ↗",
    playTip: "Play video ↗",

    // Social Work Section
    socialTag: "Social Media & Partners",
    socialTitle: "Managed accounts & brand partnerships.",
    socialSubtitle: "How I handle social channels for organizations, commercial brands, and personal projects.",
    caseMainTitle: "WOPR Katowice & Silesian WOPR",
    caseMainSub: "Head of IT • Social Media Manager • Sponsorship Relations",
    caseMainDesc: "At WOPR Katowice, I ensure reliable IT infrastructure and lead an active online presence. I plan content, edit videos, capture aerial footage, and negotiate gear sponsorships with corporate partners.",
    caseH1Val: "IT Operations",
    caseH1Txt: "Managing PCs, network, servers, radio communications, and data procedures.",
    caseH2Val: "Social Media & Video",
    caseH2Txt: "Running Instagram @wopr.katowice and Facebook, producing reels and drone shots.",
    caseH3Val: "Sponsorships & B2B",
    caseH3Txt: "Directly pitching and securing support from automotive, tech, and rescue brands.",
    partnersSectionTitle: "Partners and sponsors I've collaborated with:",
    partnersSectionDesc: "Companies I have directly partnered with to secure equipment or promotional support for WOPR:",
    partnerOmodaRole: "Automotive campaign & JAECOO 8",
    partnerOmodaDesc: "Joint video project celebrating 100 years of water rescue; on-screen lifeguard role.",
    partnerCdsRole: "Software house & digital solutions",
    partnerCdsDesc: "Collaboration on web platforms and digital support.",
    partnerAsbisRole: "IT distribution & enterprise tech",
    partnerAsbisDesc: "Sponsorship and cooperation in computer and hardware solutions.",
    partnerFalaRole: "Water safety initiatives",
    partnerFalaDesc: "Joint awareness campaigns promoting safety along recreational waters.",
    partnerOndutyRole: "Rescue & tactical gear",
    partnerOndutyDesc: "Equipping rescue squads with professional duty apparel and gear.",
    partnerDecathlonRole: "Sport & outdoor equipment",
    partnerDecathlonDesc: "Gear partnerships supporting water competitions and training drills.",
    partnerHyteraRole: "Radio communications",
    partnerHyteraDesc: "Reliable wireless comms for lifeguards during patrols and drills.",
    partnerGinaRole: "Specialized software",
    partnerGinaDesc: "Digital coordination tools and information management for emergency squads.",

    // Extra Social Showcase
    biosoftTitle: "BioSoft Student Scientific Club (Silesian Tech)",
    biosoftSub: "Social Media & Video Lead • Faculty of Biomedical Engineering",
    biosoftDesc: "Managing social channels for the BioSoft scientific club. I produce reels and graphics showcasing student research in biomedical signal processing, medical informatics, and AI.",
    biosoftBtnVideo: "Watch My Video ↗",
    woprOfficialTitle: "TikTok @wopr.official (National WOPR HQ)",
    woprOfficialSub: "PR Committee Member • Video Producer",
    woprOfficialDesc: "As a member of the national Prevention & Communication Committee, I produce short-form videos for the official TikTok account, blending water safety tips with engaging humor and modern trends.",
    woprOfficialBtnV1: "Viral 1 (TikTok) ↗",
    woprOfficialBtnV2: "Viral 2 (TikTok) ↗",

    // Social Hub Section
    hubTag: "All Links",
    hubTitle: "Where to find me online.",
    hubSubtitle: "Direct links to my code repositories, live streams, video content, and contact channels.",
    hubCreatorTitle: "EnieczeK (@enieczek)",
    hubCreatorBadge: "Verified Digital Creator",
    hubCreatorDesc: "My primary Instagram profile: behind the scenes of projects, stream clips, hardware, and personal updates.",
    hubCreatorBtn: "Visit Instagram @enieczek ↗",
    hubWaDesc: "Fast direct chat or phone call",
    hubTtDesc: "Short videos & creative clips",
    hubGhDesc: "Code repositories and web projects",
    hubLiDesc: "Professional network & career",
    hubYtDesc: "Long-form edits and productions",
    hubTwDesc: "Live streaming & gaming",
    hubIgDesc: "Daily stories and behind-the-scenes",
    hubThDesc: "Short thoughts and updates",
    hubFbDesc: "Personal Facebook profile",
    hubDcDesc: "Handle: enieczek (click to copy)",

    // Contact Section
    contactTag: "Contact",
    contactTitle: "Let's discuss a project or opportunity.",
    contactText: "Looking for an IT specialist, video editor, social media lead, or have a job proposition? Feel free to reach out directly.",
    contactEmailLabel: "Email Address",
    contactEmailSub: "Click to send an email",
    contactPhoneLabel: "Phone & WhatsApp",
    contactPhoneSub: "Call, text, or WhatsApp chat",
    contactLocLabel: "Location",
    contactLocSub: "Silesia, Poland | Driver's License Cat. B",
    contactBtnWa: "Chat on WhatsApp",
    contactBtnEmail: "Send an Email",
    contactBtnLi: "Connect on LinkedIn",
    contactBtnDc: "Copy Discord: enieczek",

    // Floating Audio Widget
    audioHint: "🎵 Click to play music",
    audioLabel: "Background music",

    // Footer
    footerCopy: "Mikołaj Skorupa (EnieczeK). IT, video & digital media.",
    backToTop: "Back to top",

    // Toast
    toastCopied: "Copied to clipboard!"
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('portfolio_lang') || 'pl';
    this.translations = translations;
    this.init();
  }

  init() {
    // Apply initial language
    this.applyLanguage(this.currentLang);

    // Bind event listeners to language toggle buttons
    const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const nextLang = this.currentLang === 'pl' ? 'en' : 'pl';
        this.setLanguage(nextLang);
      });
    });
  }

  setLanguage(lang) {
    if (!this.translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    this.applyLanguage(lang);
  }

  applyLanguage(lang) {
    const dict = this.translations[lang];
    if (!dict) return;

    // 1. Update HTML lang attribute
    document.documentElement.lang = lang;

    // 2. Update Document Title & Meta Description
    if (dict.pageTitle) document.title = dict.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.metaDesc) metaDesc.setAttribute('content', dict.metaDesc);

    // 3. Update Text Content: [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // 4. Update HTML Content: [data-i18n-html]
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // 5. Update Titles: [data-i18n-title]
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        el.setAttribute('title', dict[key]);
      }
    });

    // 6. Update Active States on Switcher Buttons
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      const plSpan = btn.querySelector('.lang-code.pl');
      const enSpan = btn.querySelector('.lang-code.en');
      if (plSpan && enSpan) {
        plSpan.classList.toggle('active', lang === 'pl');
        enSpan.classList.toggle('active', lang === 'en');
      }
      btn.setAttribute('aria-label', lang === 'pl' ? 'Przełącz na angielski' : 'Switch to Polish');
    });

    // 7. Update toast default message
    window.currentToastCopied = dict.toastCopied || 'Skopiowano do schowka!';
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18nManager();
  });
} else {
  window.i18n = new I18nManager();
}
