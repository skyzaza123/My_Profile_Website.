// ข้อความภาษาไทยจะถูกเก็บจาก HTML อัตโนมัติ ที่นี่ใส่เฉพาะภาษาอังกฤษ
const en = {
  name: "Mr. Piyawat Nueangmatcha",
  nav_about: "About Me",
  nav_skills: "My Skills",
  nav_exp: "My Experience",
  nav_contact: "Contact",

  about_title: "About Me",
  about_intro: "Hello, my name is Piyawat Nueangmatcha. This is my first profile website. Please forgive any mistakes.",
  color_label: "Favorite colors:",
  color_text: "Blue, black and purple — dark, muted colors with little brightness.",
  food_label: "Favorite foods:",
  food_text: "Noodles, stir-fried basil, vegetable salad, fish soup — light meals that aren't heavy on the stomach, with a fair amount of vegetables; single-dish meals.",
  trait_label: "Personality:",
  trait_text: "A quiet person who doesn't engage much with others unless we're really close. Not a great talker. Likes looking neat and beautiful. LGBT, but doesn't like standing out. Shy. Enjoys creative thinking.",
  hobby_label: "Hobbies:",
  hobby_text: "Enjoys using computers, playing games, reading novels (Yaoi or Yuri), writing novels, watching series (Yaoi or Yuri), watching movies, and listening to all kinds of music.",
  mental_label: "Mental health:",
  mental_text: "I have had depression since childhood, inherited from my mother, up to now. I have thought about ending my life many times in various ways, but I'm starting to feel a little better.",
  dislike_label: "Dislikes / things I avoid:",
  dislike_text: "Chaos, loud noise, overly egotistical people, toxic people, and cramped spaces.",

  skills_title: "My Skills and Abilities",
  skill1: "Video and photo editing",
  skill2: "Building computers myself",
  skill3: "Writing various kinds of novels",
  skill4: "Can speak English and Chinese",
  skill5: "Can write programming languages such as Python, HTML and CSS",

  edu_title: "Education",
  school1: "Nawamintrachinuthit Triamudomsuksa Nomklao School (2020-2023)",
  level1: "Lower secondary level",
  gpa_label: "Cumulative GPAX:",
  school2: "Nawamintrachinuthit Triamudomsuksa Nomklao School (2024-2026)",
  level2: "Upper secondary level",
  gpa_label2: "Cumulative GPAX:",

  contact_title: "My Contact Channels",
  phone_label: "Mobile:",
  fb_link: "My profile"
};

const toggleBtn = document.getElementById("lang-toggle");
const items = document.querySelectorAll("[data-i18n]");

// เก็บข้อความไทยเดิมไว้ก่อน
items.forEach(function (el) {
  el.dataset.th = el.textContent.trim();
});

function setLang(lang) {
  items.forEach(function (el) {
    const key = el.dataset.i18n;
    el.textContent = (lang === "en" && en[key]) ? en[key] : el.dataset.th;
  });
  document.documentElement.lang = lang;
  toggleBtn.textContent = (lang === "en") ? "TH" : "EN";
  toggleBtn.dataset.lang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

toggleBtn.addEventListener("click", function () {
  setLang(toggleBtn.dataset.lang === "en" ? "th" : "en");
});

// จำภาษาที่เลือกไว้ครั้งก่อน
let saved = "th";
try { saved = localStorage.getItem("lang") || "th"; } catch (e) {}
toggleBtn.dataset.lang = "th";
setLang(saved);
