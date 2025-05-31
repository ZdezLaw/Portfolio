<template>
  <div
    class="min-h-screen w-full bg-darkbg text-white font-publi flex flex-col items-center px-2 pb-0"
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

    <!-- About Me Content -->
    <div class="w-full max-w-6xl mt-6 md:mt-10 px-4">
      <h1
        class="text-accent text-4xl md:text-6xl font-bold text-left md:text-center lg:text-left lg:pl-4 mb-8"
      >
        ABOUT ME
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <!-- Right Column - Main Content (appears first on mobile) -->
        <div class="md:col-span-9 order-1 mb-8 md:mb-0">
          <div
            class="bg-darkbg/50 backdrop-blur-sm border-4 border-accent rounded-2xl p-6 md:p-8"
          >
            <p class="text-lg md:text-xl leading-relaxed">
              Hello! I'm Yahya Eyad, a passionate web developer with a keen eye
              for creating beautiful and functional digital experiences. My
              journey in web development started with a curiosity about how
              things work on the internet, which led me to dive deep into the
              world of coding and design.
            </p>

            <p class="text-lg md:text-xl leading-relaxed mt-6">
              I specialize in modern web technologies and frameworks, with a
              particular focus on creating responsive and user-friendly
              applications. My approach combines technical expertise with
              creative problem-solving to deliver solutions that not only meet
              but exceed expectations.
            </p>

            <div class="mt-8">
              <h2 class="text-accent text-2xl md:text-3xl font-bold mb-4">
                My Journey
              </h2>
              <p class="text-lg md:text-xl leading-relaxed">
                From my first "Hello World" to building complex web
                applications, every project has been a learning experience. I
                believe in continuous learning and staying up-to-date with the
                latest technologies and best practices in web development.
              </p>
            </div>

            <div class="mt-8">
              <h2 class="text-accent text-2xl md:text-3xl font-bold mb-4">
                What Drives Me
              </h2>
              <p class="text-lg md:text-xl leading-relaxed">
                I'm passionate about creating digital experiences that make a
                difference. Whether it's building a portfolio website,
                developing a full-stack application, or crafting an interactive
                game, I put my heart into every project.
              </p>
            </div>
          </div>
        </div>

        <!-- Left Column - Courses Card (appears second on mobile) -->
        <div class="md:col-span-3 order-2 mb-8 md:mb-0">
          <div
            class="bg-darkbg/50 backdrop-blur-sm border-4 border-accent rounded-2xl p-6"
          >
            <h2 class="text-accent text-2xl md:text-3xl font-bold mb-4">
              Courses
            </h2>
            <div class="space-y-4">
              <div class="border-l-4 border-white pl-4">
                <h3 class="text-xl font-bold text-accent">
                  The Complete JavaScript Course: From Zero to Expert
                </h3>
                <p class="text-sm text-gray-300">2023</p>
                <p class="mt-2">
                  Deep dive into modern JavaScript concepts and frameworks.
                </p>
              </div>
              <div class="border-l-4 border-white pl-4">
                <h3 class="text-xl font-bold text-accent">
                  javascript algorithms and data structures
                </h3>
                <p class="text-sm text-gray-300">2024</p>
                <p class="mt-2">
                  Deep dive into modern JavaScript concepts and frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
