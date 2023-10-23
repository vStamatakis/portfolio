<script setup>
</script>

<template>
  <main class="my-[8%]">
    <div class="container flex flex-col desktop:flex-row h-[500px]">
      <div
        class="flex order-2 py-10 desktop:py-0 desktop:order-1 flex-col desktop:basis-1/6 desktop:pr-10 justify-start pt-5 desktop:pt-2 align-center">
        <ul class="flex flex-row desktop:flex-col social-icons gap-x-10 desktop:gap-y-10 justify-center">
          <li><a href=""><i class="fa-brands text-primary hover:text-secondary fa-linkedin-in fa-2x"></i></a></li>
          <li><a href=""><i class="fa-brands text-primary hover:text-secondary fa-instagram fa-2x"></i></a></li>
          <li><a href=""><i class="fa-brands text-primary hover:text-secondary fa-github fa-2x"></i></a></li>
        </ul>
      </div>
      <div class="flex order-3 desktop:order-2 flex-col desktop:basis-1/2 desktop:pr-10 gap-y-2">
        <h1 class="text-5xl font-bold text-primary text-center desktop:text-left">Hi, I'm Vaggelis</h1>
        <h4 class="text-lg font-light text-primary text-center desktop:text-left">Frontend Developer</h4>
        <p class="text-center desktop:text-left desktop:pt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptates culpa
          doloribus,
          pariatur sunt mollitia
          ea, consequuntur dolorem officiis dicta maiores nulla obcaecati nobis tempore ut corporis aspernatur quis
          aperiam optio?</p>
        <div class="pt-5 flex justify-center desktop:justify-start">
          <div
            class="button border border-2 rounded border-primary flex justify-center align-center w-[35%] p-2 desktop:p-3 transition ease-in-out delay-100 desktop:hover:cursor-pointer desktop:hover:bg-primary desktop:hover:text-white">
            <a href="" class="text-primary">Contact Me</a>
          </div>
        </div>
        <div class="desktop:pt-[35%] flex justify-end desktop:justify-start pt-[10%] pb-10">
          <div class="flex flex-row">
            <div class="flex gap-x-2 items-center">
              <i class="fa-solid text-primary hover:text-secondary fa-computer-mouse fa-2x"></i>
              <span class="text-primary">Scroll down</span>
              <i class="fa-solid text-primary hover:text-secondary fa-angles-down"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex order-1 desktop:order-3 flex-col justify-center desktop:justify-start desktop:pl-10 desktop:basis-1/2">
        <div class="flex justify-center">
          <img class="my-image w-[70%] desktop:w-full" src="../assets/images/profile.jpeg" alt="">
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@media only screen and (min-width: 1024px) {
  .button:hover a {
    color: white;
    font-weight: 600;
  }
}

.my-image {
  border-radius: 30% 70% 47% 53% / 30% 30% 70% 70%;
}
</style>