<template>
  <div class="formDispaly">
    <div class="parent">
      <div class="header-parent">
        <div style="font-size: 20px ;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">in your web app</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrows-fullscreen"
          viewBox="0 0 16 16"
          style="cursor: pointer;"
        >
          <path
            fill-rule="evenodd"
            d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
          />
        </svg>
      
      </div>

      <div class="display-form">
        <FreeText />
      </div>
    </div>
  </div>
</template>

<script>
import FreeText from "./QuestionTypes/FreeText.vue";
export default {
  name: "FormDisplay",
  components: {
    FreeText,
  },
};
</script>

<style scoped>
.formDispaly {
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
}
.parent {
  width: 80%;
  height: 80%;
  background-color: rgb(238,238,238);
  border-radius: 8px;
  padding: 5px;
}

.header-parent{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px ;
  width: 100%;
  height: 10% ;
}

.display-form{
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
