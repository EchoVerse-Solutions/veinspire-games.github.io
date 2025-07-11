document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Counter animation
  const counters = document.querySelectorAll(".counter .num");
  const speed = 200;

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const inc = Math.ceil(target / speed);
        if (count < target) {
          counter.innerText = count + inc;
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

  // Language switching logic
  const translations = {
    // ... translations object (оставь как есть)
  };

  const langButtons = document.querySelectorAll(".lang-btn");

  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");

      langButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const keys = document.querySelectorAll("[data-key]");
      keys.forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
    });
  });

  // 📨 Form handling + Formspree + reCAPTCHA
  const form = document.getElementById("contact-form");
  const statusDiv = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
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

  // Counter animation
  const counters = document.querySelectorAll(".counter .num");
  const speed = 200;

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const inc = Math.ceil(target / speed);
        if (count < target) {
          counter.innerText = count + inc;
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

  // Full translations
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
      f1: "Product thinking & producer's approach",
      f2: "Flexible team: Unity & Unreal",
      f3: "Global culture without overpricing",
      f4: "Focus on story, systems, and production-heavy projects",
      s1: "Full-Cycle Development",
      s2: "2D/3D Art",
      s3: "UI/UX",
      s4: "Game & Level Design",
      s5: "Programming",
      s6: "QA / Game Testing",
      s7: "Localization / Voiceover",
      s8: "Analytics / LiveOps",
      s9: "Prototyping / R&D",
      hero_desc: "Flexible full-cycle outsourcing studio specializing in game development for PC, consoles, and mobile.",
      cta: "Get in touch",

      p1_title: "Shadow Drift",
      p1_desc: "Stealth action game in a neon-lit city. Avoid detection and hack into secure systems.",

      p2_title: "Echo Protocol",
      p2_desc: "Tactical sci-fi shooter with team-based objectives and destructible environments.",

      p3_title: "Neon Warden",
      p3_desc: "Manage a futuristic prison and uncover conspiracies in a dark pixel world.",

      p4_title: "Pixel Forge",
      p4_desc: "Forge unique weapons with lore in a procedurally-generated side-scrolling world.",

      p5_title: "Rift Hunters",
      p5_desc: "Switch between dimensions to hunt creatures across parallel universes.",

      p6_title: "Crimson Arena",
      p6_desc: "Fast-paced multiplayer combat in stylized gothic arenas.",

      p7_title: "Void Symphony",
      p7_desc: "Narrative-heavy space adventure where music alters reality.",

      p8_title: "Quantum Bloom",
      p8_desc: "A puzzle platformer where every flower blooms with a memory."
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
      f1: "Продуктовое мышление и продюсерский подход",
      f2: "Гибкая команда: Unity и Unreal",
      f3: "Глобальная культура без оверпрайса",
      f4: "Фокус на нарратив, системы и продакшн",
      s1: "Разработка под ключ",
      s2: "2D/3D Арт",
      s3: "UI/UX",
      s4: "Геймдизайн и левелдизайн",
      s5: "Программирование",
      s6: "QA / Тестирование",
      s7: "Локализация / Озвучка",
      s8: "Аналитика / LiveOps",
      s9: "Прототипирование / R&D",
      hero_desc: "Гибкая студия полного цикла, специализирующаяся на разработке игр для ПК, консолей и мобильных устройств.",
      cta: "Связаться",

      p1_title: "Тень Дрифта",
      p1_desc: "Скрытный экшен в неоновых улицах. Взламывай и избегай камер.",

      p2_title: "Протокол Эхо",
      p2_desc: "Тактический шутер с командной игрой и разрушаемыми локациями.",

      p3_title: "Неоновый Надзиратель",
      p3_desc: "Управляй тюрьмой будущего и раскрой мрачные тайны.",

      p4_title: "Пиксельная Кузница",
      p4_desc: "Куй оружие с историей в процедурно-генерируемом мире.",

      p5_title: "Охотники Разлома",
      p5_desc: "Переходи между измерениями, чтобы побеждать чудовищ.",

      p6_title: "Арена Багрового",
      p6_desc: "Скоростные бои в готических аренах с уникальным стилем.",

      p7_title: "Симфония Пустоты",
      p7_desc: "Музыка влияет на сюжет в космическом приключении.",

      p8_title: "Квантовый Цветок",
      p8_desc: "Каждый цветок — это память. Платформер-головоломка."
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
      f1: "პროდუქტზე ორიენტირებული აზროვნება",
      f2: "მორგებადი გუნდი: Unity და Unreal",
      f3: "გლობალური კულტურა, მისაღები ფასები",
      f4: "ფოკუსი სიუჟეტზე და სისტემებზე",
      s1: "სრული ციკლის განვითარება",
      s2: "2D/3D არტი",
      s3: "UI/UX დიზაინი",
      s4: "თამაშისა და დონის დიზაინი",
      s5: "პროგრამირება",
      s6: "ტესტირება",
      s7: "ლოკალიზაცია და გახმოვანება",
      s8: "ანალიტიკა / LiveOps",
      s9: "პროტოტიპირება და კვლევა",
      hero_desc: "მორგებადი აუთსორსინგ სტუდია, რომელიც სპეციალიზდება კომპიუტერულ, კონსოლურ და მობილურ თამაშებში.",
      cta: "დაგვიკავშირდით",

      p1_title: "ჩრდილის დრიфтერი",
      p1_desc: "დამალული მოქმედება ნეონურ ქალაქში. აიცილეთ მტრები და გატეხეთ სისტემები.",

      p2_title: "ექოს პროტოკოლი",
      p2_desc: "ტაქტიკური შუთერი გუნდური რეჟიმით და განადგურებადი რუკებით.",

      p3_title: "ნეონის მცველი",
      p3_desc: "მომავლის ციხის მართვა და საიდუმლოებების გამჟღავნება.",

      p4_title: "პიქსელის ქვა",
      p4_desc: "მოამზადე იარაღი ისტორიით გენერირებულ სამყაროში.",

      p5_title: "განზომილებათა მონადირეები",
      p5_desc: "მოძრაობა პარალელურ სამყაროს შორის მონსტრების დასამარცხებლად.",

      p6_title: "ბაგრატის არენა",
      p6_desc: "სწრაფი ბრძოლები გოთიკურ არენებზე.",

      p7_title: "ვაკუუმის სიმფონია",
      p7_desc: "მუსიკა განსაზღვრავს მოვლენებს კოსმოსურ თავგადასავალში.",

      p8_title: "კვანტური ყვავილი",
      p8_desc: "თითოეული ყვავილი მოგონებაა. თავსატეხი პლატფორმერი."
    }
  };

  // Language switch logic
  const langButtons = document.querySelectorAll(".lang-btn");

  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");

      // Set active class
      langButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const keys = document.querySelectorAll("[data-key]");
      keys.forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
    });
  });
});
if (count < target) {
  counter.innerText = count + inc;
  setTimeout(updateCount, 30);
} else {
  counter.innerText = target + "+";
}
