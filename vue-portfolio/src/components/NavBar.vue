<template>
  <nav class="bg-white">
    <div class="container h-[100px] flex justify-between items-center text-white desktop:text-lg">
      <div
        class="transition ease-in-out delay-80 w-[50px] h-[50px] bg-primary hover:cursor-pointer hover:bg-secondary hover:text-white rounded-full flex justify-center align-center">
        <div class="m-auto">
          <span class="flex font-bold text-xl">VS</span>
        </div>
      </div>
      <div class="nav-items">
        <ul class="flex flex-row gap-5 text-primary">
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>About</li>
          </a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped></style>