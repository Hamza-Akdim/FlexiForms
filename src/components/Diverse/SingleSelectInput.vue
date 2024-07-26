<template>
  <div class="parent-div">
    <div
      class="div-input"
      v-for="(option, index) in singleSelect.data.options"
      :key="index"
    >
      <input
        v-if="index == 0"
        type="radio"
        name="oneSelect"
        :id="index"
        checked
      />

      <input
        v-else
        type="radio"
        name="oneSelect"
        :id="index"
      />

      <label :for="index">
        {{ option }}
      </label>
    </div>

    <!-- <div class="div-input">
      <input type="radio" name="oneSelect" :id="singleSelect.data.options[1]" />
      <label :for="singleSelect.data.options[1]">
        {{ singleSelect.data.options[1] }}
      </label>
    </div>

    <div class="div-input">
      <input type="radio" name="oneSelect" :id="singleSelect.data.options[0]" />
      <label :for="singleSelect.data.options[0]">
        {{ singleSelect.data.options[0] }}
      </label>
    </div>

    <div class="div-input">
      <input type="radio" name="oneSelect" :id="singleSelect.data.options[0]" />
      <label :for="singleSelect.data.options[0]">
        {{ singleSelect.data.options[0] }}
      </label>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "single-select-input",
  inject: ["singleSelect"],
};
</script>

<style scoped>
.parent-div {
  padding: 5px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.div-input {
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

input,
label {
  cursor: pointer;
}

input {
  accent-color: rgb(79, 79, 79);
}
</style>
