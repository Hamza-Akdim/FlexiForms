<template>
  <div class="w-full bg-[#003366] text-white p-1 px-5 flex justify-between">
    <div class="w-full flex items-center gap-3">
      <img class="w-[50px] h-[50px]" src="FormIcon.png" alt="/" />
      <div class="md:text-2xl sm:text-xl text-lg font-bold">FlexiForms</div>
    </div>
    <div class="flex justify-between items-center gap-4">
      <div class="flex gap-4">
        <div
          class="text-base cursor-pointer font-medium border-2 border-white text-white p-[6px] min-w-20 rounded-md text-center"
        >
          Save
        </div>
        <div
          class="text-base cursor-pointer font-medium border-2 border-white text-white p-[6px] min-w-20 rounded-md text-center"
        >
          Publish
        </div>
      </div>
      <div>
        <img
          class="cursor-pointer max-w-[35px]"
          src="moreOptions.png"
          alt="/"
        />
      </div>
    </div>

    <!-- <div class="h-full w-[40%] bg-[#003366] fixed top-0 left-0 z-10">
      <div class="w-full flex items-center gap-3 m-2">
        <img class="w-[50px] h-[50px]" src="formIcon.png" alt="/" />
        <div class="md:text-2xl sm:text-xl text-lg font-bold">FlexiForms</div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "FormHeader",
};
</script>

<style scoped>
.nav-bar {
  width: 100vw;
  height: 8%;
  /* position: fixed; */
}

.button {
  margin-left: 10px;
  font-size: 15px;
  font-weight: 500;
  text-transform: none;
  color: black;
  width: 6%;
}
</style>
