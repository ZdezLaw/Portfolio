<template>
  <div
    class="min-h-screen w-full bg-darkbg text-white font-publiflor flex flex-col items-center px-2 pb-0"
  >
    <!-- Navigation Bar (top right) -->
    <div class="absolute top-6 right-8 z-50">
      <div
        class="flex flex-row md:flex-col gap-4 md:gap-8 text-xl md:text-2xl font-bold"
      >
        <router-link
          to="/"
          class="text-accent inline-block border-b-4 border-white pb-1 transform transition-all duration-300 hover:scale-110 hover:text-white cursor-pointer"
          >MAIN</router-link
        >
        <router-link
          to="/about"
          class="text-accent inline-block border-b-4 border-white pb-1 transform transition-all duration-300 hover:scale-110 hover:text-white cursor-pointer"
          >ABOUT ME</router-link
        >
      </div>
    </div>

    <!-- Hero Section: Profile + Name/Text/Socials -->
    <div
      class="flex flex-col md:flex-row items-center justify-center mt-2 gap-10 md:gap-20 relative w-full px-4"
      ref="heroSection"
      :class="[
        'transform transition-all duration-1000',
        isVisible.hero
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-20',
      ]"
    >
      <!-- Text Block -->
      <div class="flex flex-col items-center z-10 relative pt-24 pl-0 md:pl-10">
        <!-- Star SVG at top left of text block -->
        <img
          :src="svg051"
          alt="Star"
          class="hidden md:block absolute -top-24 -left-52 w-80 h-80 neon-sign-glow"
        />
        <h1
          class="text-accent text-6xl md:text-8xl font-bold text-center border-white transform transition-all duration-300 hover:scale-110 hover:text-white cursor-pointer"
        >
          YAHYA EYAD
        </h1>
        <div class="mt-2">
          <span
            class="text-white text-4xl md:text-6xl font-bold tracking-wider italic inline-block border-b-4 border-white pb-2 text-center"
            >LET'S CONNECT & CHAT</span
          >
        </div>
        <div class="flex flex-row items-center gap-4 mt-4 text-accent text-2xl">
          <a
            href="https://instagram.com/gaiden101/"
            target="gaiden101"
            class="transform transition-all duration-300 hover:scale-110 group"
          >
            <img
              :src="instagramIcon"
              alt="Instagram"
              class="w-8 h-8 group-hover:brightness-0 group-hover:invert"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/yahia-eyad-811bb9306/"
            target="Yahya Eyad"
            class="transform transition-all duration-300 hover:scale-110 group"
          >
            <img
              :src="linkedinIcon"
              alt="LinkedIn"
              class="w-8 h-8 group-hover:brightness-0 group-hover:invert"
            />
          </a>
          <a
            href="https://github.com/ZdezLaw"
            target="ZdezLaw"
            class="transform transition-all duration-300 hover:scale-110 group"
          >
            <img
              :src="githubIcon"
              alt="GitHub"
              class="w-8 h-8 group-hover:brightness-0 group-hover:invert"
            />
          </a>
          <button
            @click="downloadCV"
            class="ml-4 md:ml-[18rem] text-accent font-bold transform transition-all duration-300 hover:scale-110 hover:text-white inline-block border-b-4 border-white pb-1"
          >
            DOWNLOAD CV
          </button>
        </div>
      </div>
      <!-- Profile Image with Accent Background -->
      <div class="relative flex items-center justify-center">
        <div
          class="bg-accent rounded-full flex items-center justify-center w-[20rem] md:w-[28rem] h-[20rem] md:h-[28rem]"
        >
          <img
            :src="maskGroup"
            alt="profile"
            class="rounded-full w-[18rem] md:w-[25rem] h-[18rem] md:h-[25rem] object-cover border-8 border-accent bg-accent"
          />
        </div>
      </div>
    </div>

    <!-- From Concept to Code -->
    <div class="w-full flex flex-col items-center mt-12 px-4">
      <div
        ref="conceptSection"
        :class="[
          'border-4 border-accent rounded-2xl px-6 md:px-20 py-8 md:py-12 flex flex-col items-center max-w-5xl transform transition-all duration-1000',
          isVisible.concept
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20',
        ]"
      >
        <div class="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <img :src="svg101" alt="Pencil" class="w-20 md:w-28 h-20 md:h-28" />
          <span
            class="text-accent text-3xl md:text-6xl font-bold tracking-widest text-center md:text-left"
            >FROM CONCEPT TO CODE</span
          >
        </div>
        <div
          class="text-white text-xl md:text-2xl mt-6 tracking-wider text-center md:text-left md:ml-28"
        >
          TURNING IDEAS INTO INTERACTIVE, RESPONSIVE WEBSITES.
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div class="w-full flex flex-col items-center mt-20 relative px-4">
      <div
        ref="projectsSection"
        :class="[
          'transform transition-all duration-1000 w-full flex flex-col items-center relative',
          isVisible.projects
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20',
        ]"
      >
        <img
          :src="svg020"
          alt="lightning"
          class="hidden md:block absolute -top-20 -left-10 w-80 h-80 z-20 neon-sign-glow"
        />
        <div class="flex items-center gap-4 mb-12">
          <span
            class="text-accent text-4xl md:text-5xl font-bold tracking-widest"
            >PROJECTS</span
          >
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full"
        >
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            :class="[
              'group relative overflow-hidden rounded-2xl border-4 border-accent bg-darkbg/50 backdrop-blur-sm transform transition-all duration-700 hover:scale-105 shadow-[0_0_50px_rgba(255,255,0,0.5)]',
              isVisible.projects
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20',
            ]"
            :style="{ transitionDelay: `${index * 20}ms` }"
          >
            <div class="relative h-48 md:h-64 overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-darkbg/90 to-transparent"
              ></div>
            </div>
            <div class="p-4 md:p-6">
              <h3 class="text-accent text-xl md:text-2xl font-bold mb-2">
                {{ project.title }}
              </h3>
              <p class="text-white text-base md:text-lg mb-4">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Technologies -->
    <div class="w-full flex flex-col items-center mt-20 px-4">
      <div
        ref="technologiesSection"
        :class="[
          'transform transition-all duration-1000 w-full flex flex-col items-center',
          isVisible.technologies
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20',
        ]"
      >
        <div class="flex items-center gap-4">
          <span
            class="text-accent text-4xl md:text-5xl font-bold tracking-widest"
            >TECHNOLOGIES</span
          >
        </div>
        <div class="relative mt-5">
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-12 p-6 md:p-20"
          >
            <div class="transform transition-all duration-300 hover:scale-110">
              <img :src="vueIcon" alt="Vue" class="w-16 md:w-20 h-16 md:h-20" />
            </div>
            <div class="transform transition-all duration-300 hover:scale-110">
              <img
                :src="laravelIcon"
                alt="Laravel"
                class="w-16 md:w-20 h-16 md:h-20"
              />
            </div>
            <div class="transform transition-all duration-300 hover:scale-110">
              <img :src="jsIcon" alt="JS" class="w-16 md:w-20 h-16 md:h-20" />
            </div>
            <div class="transform transition-all duration-300 hover:scale-110">
              <img
                :src="unrealIcon"
                alt="Unreal"
                class="w-16 md:w-20 h-16 md:h-20"
              />
            </div>
            <div class="transform transition-all duration-300 hover:scale-110">
              <img
                :src="html5Icon"
                alt="HTML5"
                class="w-16 md:w-20 h-16 md:h-20"
              />
            </div>
            <div class="transform transition-all duration-300 hover:scale-110">
              <img
                :src="postgresIcon"
                alt="Postgres"
                class="w-16 md:w-20 h-16 md:h-20"
              />
            </div>
            <div class="transform transition-all duration-300 hover:scale-110">
              <img
                :src="nodejsIcon"
                alt="NodeJS"
                class="w-16 md:w-20 h-16 md:h-20"
              />
            </div>
            <div class="transform transition-all duration-300 hover:scale-110">
              <img
                :src="css3Icon"
                alt="CSS3"
                class="w-16 md:w-20 h-16 md:h-20"
              />
            </div>
            <div class="transform transition-all duration-300 hover:scale-110">
              <img
                :src="figmaIcon"
                alt="Figma"
                class="w-16 md:w-20 h-16 md:h-20"
              />
            </div>
            <div class="transform transition-all duration-300 hover:scale-110">
              <img
                :src="expressIcon"
                alt="Express"
                class="w-16 md:w-20 h-16 md:h-20"
              />
            </div>
            <div
              class="transform transition-all duration-300 hover:scale-110 col-span-2 sm:col-span-3 md:col-span-5 mx-auto"
            >
              <img
                :src="mysqlIcon"
                alt="MySQL"
                class="w-16 md:w-20 h-16 md:h-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Craft Experiences and Contact -->
    <div class="w-full flex flex-col items-center -mt-20 relative px-4">
      <div
        ref="contactSection"
        :class="[
          'transform transition-all duration-1000 w-full flex flex-col items-center relative',
          isVisible.contact
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20',
        ]"
      >
        <img
          :src="svg036"
          alt="Diamond"
          class="hidden md:block absolute top-0 right-5 w-80 h-80 z-20 neon-sign-glow"
        />
        <div
          class="relative w-full md:w-[800px] h-[800px] md:h-[800px] electric-container"
        >
          <div
            class="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(255,255,0,0.15)] -z-10"
          ></div>
          <img
            :src="svg104"
            alt="Designed Circle"
            class="w-full h-[1200px] md:h-full neon-sign-glow pb-[380px] md:pb-0"
          />
          <div
            class="absolute inset-0 flex flex-col items-center justify-center px-4"
          >
            <span
              class="text-2xl md:text-5xl text-accent font-bold tracking-widest text-center mb-1 md:mb-8"
            >
              I DON'T JUST BUILD WEBSITES<br />
              <div class="flex items-center justify-center gap-4">
                <img
                  :src="svg072"
                  alt="Arrow"
                  class="w-10 md:w-14 h-10 md:h-14"
                />
                <span class="text-white">I CRAFT EXPERIENCES.</span>
              </div>
            </span>
            <div class="flex items-center gap-1 md:gap-4">
              <img
                :src="svg099"
                alt="Arrow Left"
                class="w-6 md:w-10 h-6 md:h-10"
              />
              <a
                href="mailto:zdezlaw@gmail.com"
                class="text-accent text-xl md:text-3xl font-bold tracking-widest inline-block border-b-4 border-white pb-1 transform transition-all duration-300 hover:scale-110 hover:text-white cursor-pointer"
              >
                CONTACT ME
              </a>
              <img
                :src="svg100"
                alt="Arrow Right"
                class="w-6 md:w-10 h-6 md:h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import svg020 from "../resources/020.svg";
import svg036 from "../resources/036.svg";
import svg051 from "../resources/051.svg";
import svg072 from "../resources/072.svg";
import svg099 from "../resources/099.svg";
import svg100 from "../resources/100.svg";
import svg104 from "../resources/104.svg";
import svg101 from "../resources/101.svg";
import svg102 from "../resources/102.svg";
import maskGroup from "../resources/Mask group.svg";
import cvPdf from "../resources/yahya_eyad.pdf";
import project1 from "../resources/project1.png";
import project2 from "../resources/project2.png";
import project3 from "../resources/project3.png";

import vueIcon from "../resources/mdi_vuejs.svg";
import laravelIcon from "../resources/mdi_laravel.svg";
import jsIcon from "../resources/mdi_language-javascript.svg";
import unrealIcon from "../resources/mdi_unreal-engine.svg";
import html5Icon from "../resources/mdi_language-html5.svg";
import postgresIcon from "../resources/akar-icons_postgresql-fill.svg";
import nodejsIcon from "../resources/mdi_nodejs.svg";
import css3Icon from "../resources/mdi_language-css3.svg";
import figmaIcon from "../resources/fa6-brands_figma.svg";
import expressIcon from "../resources/skill-icons_expressjs-dark.svg";
import mysqlIcon from "../resources/lineicons_mysql.svg";

import instagramIcon from "../resources/ri_instagram-line.svg";
import linkedinIcon from "../resources/mdi_linkedin.svg";
import githubIcon from "../resources/mdi_github.svg";

const heroSection = ref(null);
const conceptSection = ref(null);
const projectsSection = ref(null);
const technologiesSection = ref(null);
const contactSection = ref(null);

const isVisible = ref({
  hero: false,
  concept: false,
  projects: false,
  technologies: false,
  contact: false,
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const section = entry.target;
      if (section === heroSection.value && entry.isIntersecting) {
        isVisible.value.hero = true;
        observer.unobserve(section);
      } else if (section === conceptSection.value && entry.isIntersecting) {
        isVisible.value.concept = true;
        observer.unobserve(section);
      } else if (section === projectsSection.value && entry.isIntersecting) {
        isVisible.value.projects = true;
        observer.unobserve(section);
      } else if (
        section === technologiesSection.value &&
        entry.isIntersecting
      ) {
        isVisible.value.technologies = true;
        observer.unobserve(section);
      } else if (section === contactSection.value && entry.isIntersecting) {
        isVisible.value.contact = true;
        observer.unobserve(section);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

const projects = ref([
  {
    title: "Pig Game",
    description: `a two-player dice game made with JavaScript, HTML, and CSS using DOM manipulation. Players take turns rolling a dice. Rolling a 1 resets the turn's score, while other numbers add to it. Players can "Hold" to save their score. The first to reach the target score wins. A "New Game" button resets the game.`,
    image: project2,
  },
  {
    title: "Guess my Number",
    description:
      "a simple game made with JavaScript, HTML, and CSS using DOM manipulation. The player guesses a number between 1 and 20. Feedback is given if the guess is too high or too low. The score decreases with each wrong guess, and the game tracks the highest score. A reset button allows replaying.",
    image: project1,
  },
  {
    title: "GameWise",
    description:
      "A game database type of website that showcases a collection of games and their details and the latest deals made with vue.js and tailwind css and numerous api's (Under Development).",
    image: project3,
  },
]);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = cvPdf;
  link.download = "yahya_eyad.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  if (heroSection.value) observer.observe(heroSection.value);
  if (conceptSection.value) observer.observe(conceptSection.value);
  if (projectsSection.value) observer.observe(projectsSection.value);
  if (technologiesSection.value) observer.observe(technologiesSection.value);
  if (contactSection.value) observer.observe(contactSection.value);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  observer.disconnect();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap");

@font-face {
  font-family: "PubliFluorNormale";
  src: local("PubliFluorNormale"),
    url("../resources/PubliFluorNormale.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

* {
  font-family: "PubliFluorNormale", sans-serif;
}

@keyframes electric-pulse {
  0% {
    filter: drop-shadow(0 0 10px rgba(255, 255, 0, 0.2));
  }
  50% {
    filter: drop-shadow(0 0 20px rgba(255, 255, 0, 0.35));
  }
  100% {
    filter: drop-shadow(0 0 15px rgba(255, 255, 0, 0.2));
  }
}

/* Lightning SVG specific styles */
.relative.mt-5 img[src*="020.svg"] {
  filter: drop-shadow(0 0 8px #ffd700) drop-shadow(0 0 16px #ffd700);
  animation: neon-pulse-star 2.5s ease-in-out infinite;
}

.relative.mt-5 img[src*="020.svg"] path {
  stroke: #ffd700 !important;
  filter: drop-shadow(0 0 8px #ffd700) drop-shadow(0 0 16px #ffd700);
}

.electric-container {
  animation: electric-pulse 5s ease-in-out infinite;
  overflow: hidden;
  border-radius: 50%;
}

.electric-container img {
  animation: electric-pulse 5s ease-in-out infinite;
}

/* Neon star animation */
::v-deep(.neon-star) {
  /* nothing here, but needed for scoping */
}
::v-deep(.neon-star) svg path {
  stroke: #ffd700 !important;
  filter: drop-shadow(0 0 8px #ffd700) drop-shadow(0 0 16px #ffd700);
  stroke-dasharray: 1800;
  stroke-dashoffset: 0;
  animation: neon-dash 2.5s linear infinite;
}
@keyframes neon-dash {
  0% {
    stroke-dashoffset: 0;
    filter: drop-shadow(0 0 8px #ffd700) drop-shadow(0 0 16px #ffd700);
  }
  80% {
    filter: drop-shadow(0 0 16px #ffd700) drop-shadow(0 0 32px #ffd700);
  }
  100% {
    stroke-dashoffset: 1800;
    filter: drop-shadow(0 0 8px #ffd700) drop-shadow(0 0 16px #ffd700);
  }
}

@keyframes neon-pulse-star {
  0%,
  100% {
    filter: drop-shadow(0 0 4px #ffd700) drop-shadow(0 0 8px #ffd700)
      brightness(1.08);
  }
  50% {
    filter: drop-shadow(0 0 2px #ffd700) drop-shadow(0 0 4px #ffd700)
      brightness(1.02);
  }
}

.neon-sign-glow {
  filter: drop-shadow(0 0 4px #ffd700) drop-shadow(0 0 8px #ffd700)
    brightness(1.08);
  animation: neon-pulse-star 2.5s ease-in-out infinite;
}
</style>
