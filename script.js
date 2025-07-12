document.addEventListener("DOMContentLoaded", () => {
  // 🌐 Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // 🔢 Counter animation
  const counters = document.querySelectorAll(".counter .num");
  const speed = 200;

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText.replace("+", "");
        const increment = Math.ceil(target / speed);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target + "+";
        }
      };
      updateCount();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  });

  counters.forEach(counter => observer.observe(counter));

  // 🌍 Языковая логика (translations)
  const translations = {
    en: {
      nav_about: "About Us",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_contact: "Contacts",
      nav_platforms: "Platforms",
      about_title: "About Us",
      services_title: "Our Services",
      portfolio_title: "Our Projects",
      contact_title: "Contact Us",
      platforms_title: "Platforms",
      c1: "Years of experience",
      c2: "Projects shipped",
      c3: "AA/AAA games",
      c4: "Partners",
      f1_title: "Product thinking",
      f1_desc: "Producer's mindset and focus on business value",
      f2_title: "Flexible team",
      f2_desc: "Unity & Unreal expertise for any genre",
      f3_title: "Global culture",
      f3_desc: "No overpricing, multicultural approach",
      f4_title: "Story & Systems",
      f4_desc: "Focus on narrative, gameplay, and scalable production",
      s1_title: "Full-Cycle Development",
      s1_desc: "Turnkey game development from idea to launch",
      s2_title: "2D/3D Art",
      s2_desc: "Concepts, characters, environments, VFX",
      s3_title: "UI/UX",
      s3_desc: "User interface, prototyping, usability",
      s4_title: "Game & Level Design",
      s4_desc: "Mechanics, narrative, balancing, worlds",
      s5_title: "Programming",
      s5_desc: "Unity, Unreal, networking, gameplay",
      s6_title: "QA / Game Testing",
      s6_desc: "Full test coverage and quality assurance",
      s7_title: "Localization / Voiceover",
      s7_desc: "Multi-language translation, casting, VO",
      s8_title: "Analytics / LiveOps",
      s8_desc: "Data, A/B testing, retention, monetization",
      s9_title: "Prototyping / R&D",
      s9_desc: "Tech research and fast prototyping",
      hero_desc: "Flexible full-cycle outsourcing studio specializing in game development for PC, consoles, and mobile.",
      cta: "Get in touch",
      p1_title: "Life is strange",
      p1_desc: "Episodic narrative adventure with branching dialogue, choice-based progression, and time-rewind mechanics.",
      p2_title: "Life is strange 2",
      p2_desc: "Episodic narrative adventure with branching choices, emotional storytelling, and AI-driven companion behavior.",
      p3_title: "Hitman 3",
      p3_desc: "Stealth action game with sandbox missions, systemic AI, and multi-path level design across global locations.",
      p4_title: "Unannounced Mobile MMORPG",
      p4_desc: "Mobile MMORPG survival game with crafting, open world exploration, and real-time PvP mechanics.",
      p5_title: "15+ Casual Mobile Games",
      p5_desc: "Casual mobile games with fast onboarding, lightweight mechanics, and high user retention across genres.",
      p6_title: "5+ MidCore Mobile Games",
      p6_desc: "Midcore projects with session-based combat, meta-progression, and monetization-ready systems."
    },
    ru: {
      nav_about: "О нас",
      nav_services: "Услуги",
      nav_projects: "Проекты",
      nav_contact: "Контакты",
      nav_platforms: "Платформы",
      about_title: "О нас",
      services_title: "Наши услуги",
      portfolio_title: "Наши проекты",
      contact_title: "Связаться с нами",
      platforms_title: "Платформы",
      c1: "Лет опыта",
      c2: "Проектов выполнено",
      c3: "AA/AAA игр",
      c4: "Партнёров",
      f1_title: "Продуктовое мышление",
      f1_desc: "Продюсерский подход и фокус на бизнес-результат",
      f2_title: "Гибкая команда",
      f2_desc: "Экспертиза в Unity и Unreal для любых жанров",
      f3_title: "Глобальная культура",
      f3_desc: "Без оверпрайса, мультикультурный подход",
      f4_title: "Нарратив и системы",
      f4_desc: "Фокус на истории, геймплее и масштабируемом продакшне",
      s1_title: "Разработка под ключ",
      s1_desc: "Создаём игры от идеи до релиза",
      s2_title: "2D/3D Арт",
      s2_desc: "Концепты, персонажи, окружение, VFX",
      s3_title: "UI/UX",
      s3_desc: "Интерфейсы, прототипы, юзабилити",
      s4_title: "Геймдизайн и левелдизайн",
      s4_desc: "Механики, нарратив, баланс, миры",
      s5_title: "Программирование",
      s5_desc: "Unity, Unreal, сетевое и геймплей",
      s6_title: "QA / Тестирование",
      s6_desc: "Полное покрытие и контроль качества",
      s7_title: "Локализация / Озвучка",
      s7_desc: "Мультиязычный перевод, кастинг, запись VO",
      s8_title: "Аналитика / LiveOps",
      s8_desc: "Данные, A/B тесты, удержание, монетизация",
      s9_title: "Прототипирование / R&D",
      s9_desc: "Технические исследования и быстрые прототипы",
      hero_desc: "Гибкая студия полного цикла, специализирующаяся на разработке игр для ПК, консолей и мобильных устройств.",
      cta: "Связаться",
      p1_title: "Life is strange",
      p1_desc: "Эпизодическая сюжетная игра с ветвящимися диалогами, выбором игрока и механикой перемотки времени.",
      p2_title: "Life is strange 2",
      p2_desc: "Эпизодическая сюжетная игра с разветвлёнными выборами, эмоциональным повествованием и ИИ-компаньоном.",
      p3_title: "Hitman 3",
      p3_desc: "Стелс-шутер с песочными миссиями, системным ИИ и нелинейным дизайном уровней по всему миру.",
      p4_title: "Unannounced Mobile MMORPG",
      p4_desc: "Мобильная MMORPG с выживанием, крафтом, открытым миром и PvP в реальном времени.",
      p5_title: "15+ Casual Mobile Games",
      p5_desc: "Казуальные мобильные игры с быстрым освоением, легкими механиками и высоким уровнем удержания пользователей во множестве жанров.",
      p6_title: "5+ MidCore Mobile Games",
      p6_desc: "Мидкорные проекты с сессионными боями, мета-прогрессом и системами, готовыми к монетизации."
    },
    ka: {
      nav_about: "ჩვენს შესახებ",
      nav_services: "სერვისები",
      nav_projects: "პროექტები",
      nav_contact: "კონტაქტი",
      nav_platforms: "პლატფორმები",
      about_title: "ჩვენს შესახებ",
      services_title: "ჩვენი სერვისები",
      portfolio_title: "ჩვენი პროექტები",
      contact_title: "დაგვიკავშირდით",
      platforms_title: "პლატფორმები",
      c1: "წლიანი გამოცდილება",
      c2: "დასრულებული პროექტი",
      c3: "AA/AAA თამაშები",
      c4: "პარტნიორი",
      f1_title: "პროდუქტული აზროვნება",
      f1_desc: "პროდიუსერის მიდგომა და ბიზნესზე ორიენტირება",
      f2_title: "მორგებადი გუნდი",
      f2_desc: "Unity & Unreal გამოცდილება ყველა ჟანრში",
      f3_title: "გლობალური კულტურა",
      f3_desc: "მიწვდომადი ფასები და მრავალკულტურული გარემო",
      f4_title: "სიუჟეტი და სისტემები",
      f4_desc: "ფოკუსი სიუჟეტზე, მექანიკაზე და მასშტაბურობაზე",
      s1_title: "სრული ციკლის განვითარება",
      s1_desc: "თამაშის შექმნა იდეიდან გამოსვლამდე",
      s2_title: "2D/3D არტი",
      s2_desc: "კონცეფტები, პერსონაჟები, გარემო, VFX",
      s3_title: "UI/UX",
      s3_desc: "ინტერფეისი, პროტოტიპირება, გამოყენებადობა",
      s4_title: "თამაშისა და დონის დიზაინი",
      s4_desc: "მექანიკა, სიუჟეტი, ბალანსი, სამყაროები",
      s5_title: "პროგრამირება",
      s5_desc: "Unity, Unreal, ქსელები, გეიმპლეი",
      s6_title: "ტესტირება",
      s6_desc: "სრული ტესტირება და ხარისხის კონტროლი",
      s7_title: "ლოკალიზაცია და გახმოვანება",
      s7_desc: "მრავალენოვანი თარგმანი, კასტინგი, VO",
      s8_title: "ანალიტიკა / LiveOps",
      s8_desc: "მონაცემები, A/B ტესტი, მონეტიზაცია",
      s9_title: "პროტოტიპირება და კვლევა",
      s9_desc: "ტექნოლოგიური კვლევა და სწრაფი პროტოტიპი",
      hero_desc: "მორგებადი აუთსორსინგ სტუდია, რომელიც სპეციალიზდება კომპიუტერულ, კონსოლურ და მობილურ თამაშებში.",
      cta: "დაგვიკავშირდით",
      p1_title: "Life is strange",
      p1_desc: "ეპიზოდური სიუჟეტური თამაში არჩევით, დიალოგის სისტემით და დროის დაბრუნების მექანიკით.",
      p2_title: "Life is strange 2",
      p2_desc: "ეპიზოდური სიუჟეტური თამაში ემოციური სიუჟეტით, არჩევანზე დაფუძნებული პროგრესით და AI-თანამგზავრით.",
      p3_title: "Hitman 3",
      p3_desc: "ჩუმად მოქმედების თამაში ღია მისიებით, სისტემური AI-ით და არალინეური ლოკაციებით მსოფლიოს მასშტაბით.",
      p4_title: "Unannounced Mobile MMORPG",
      p4_desc: "მობილური MMORPG გადარჩენით, ქრაფტინგით, ღია სამყაროთი და რეალურ დროში PvP-ით.",
      p5_title: "15+ Casual Mobile Games",
      p5_desc: "ყოველდღიური მობილური თამაშები სწრაფი სწავლის მრუდით, მარტივი მექანიკით და მომხმარებლის მაღალი შენარჩუნებით სხვადასხვა ჟანრში.",
      p6_title: "5+ MidCore Mobile Games",
      p6_desc: "საშუალო ბირთვის პროექტები სესიაზე დაფუძნებული საბრძოლო მოქმედებით, მეტა-პროგრესირებით და მონეტიზაციისთვის მზა სისტემებით."
    }
  };

  // Переключение языков (десктоп + мобильное меню)
  function applyLang(lang) {
    document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(b => b.classList.add("active"));

    const keys = document.querySelectorAll("[data-key]");
    keys.forEach(el => {
      const key = el.getAttribute("data-key");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  // Клик по языковым кнопкам
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      applyLang(lang);
    });
  });

  // --- Мобильное меню (бургер) ---
  const burger = document.getElementById("mobile-burger");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileClose = document.getElementById("mobile-menu-close");
  if (burger && mobileMenu && mobileClose) {
    burger.addEventListener("click", () => {
      mobileMenu.classList.add("open");
    });
    mobileClose.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
    // Клик вне меню закрывает
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) mobileMenu.classList.remove("open");
    });
    // Клик по ссылке — закрывает меню
    mobileMenu.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => mobileMenu.classList.remove("open"))
    );
    // Переключение языков в мобильном меню синхронизирует активность
    mobileMenu.querySelectorAll(".lang-btn").forEach(btn =>
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        applyLang(lang);
      })
    );
  }

  // 📬 Formspree + honeypot + reCAPTCHA
  const form = document.getElementById("contact-form");
  const statusDiv = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (form.querySelector('[name="honeypot"]') && form.querySelector('[name="honeypot"]').value !== "") return;

      statusDiv.textContent = "Sending...";
      statusDiv.className = "form-status sending";

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          statusDiv.textContent = "Message sent successfully!";
          statusDiv.className = "form-status success";
          form.reset();
          if (typeof grecaptcha !== "undefined") {
            grecaptcha.reset();
          }
        } else {
          throw new Error("Form submission failed");
        }
      } catch (err) {
        statusDiv.textContent = "Error sending message.";
        statusDiv.className = "form-status error";
      }
    });
  }
});
