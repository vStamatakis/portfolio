<script setup>
</script>

<template>
  <main class="">
    <div class="container flex flex-row py-[60px] h-[500px]">
      <div class="flex flex-col basis-1/6 pr-10 justify-center align-center">
        <ul class="flex flex-col social-icons gap-y-10">
          <li><a href=""><i class="fa-brands fa-linkedin-in fa-2x"></i></a></li>
          <li><a href=""><i class="fa-brands fa-instagram fa-2x"></i></a></li>
          <li><a href=""><i class="fa-brands fa-github fa-2x"></i></a></li>
        </ul>
      </div>
      <div class="flex flex-col basis-1/2 pr-10 gap-y-2">
        <h1 class="text-5xl font-bold text-primary">Hi, I'm Vaggelis</h1>
        <h4 class="text-lg font-light text-primary">Frontend Developer</h4>
        <p class="text-left pt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates culpa doloribus,
          pariatur sunt mollitia
          ea, consequuntur dolorem officiis dicta maiores nulla obcaecati nobis tempore ut corporis aspernatur quis
          aperiam optio?</p>
        <div class="pt-5">
          <div
            class="button border border-2 rounded border-primary flex justify-center align-center w-[35%] p-3 transition ease-in-out delay-100 hover:cursor-pointer hover:bg-primary hover:text-white">
            <a href="" class="text-primary">Contact Me</a>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center basis-1/2">
        <img src="../assets/images/profile.jpeg" alt="">
      </div>
    </div>

  </main>
</template>

<style scoped>
.button:hover a {
  color: white;
  font-weight: 600;
}

img {
  border-radius: 30% 70% 47% 53% / 30% 30% 70% 70%;
}
</style>