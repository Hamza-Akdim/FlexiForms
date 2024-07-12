<template>
    <div class="container">
        <FormHeader />
        <div class="container1">
            <FormQuestions />
            <FormDisplay />
        </div>
    </div>
</template>

<script>
import FormQuestions from './FormQuestions.vue'
import FormDisplay from './FormDisplay.vue'
import FormHeader from './FormHeader.vue'

export default {
    name: "FormBuilder",
    components: {
        FormQuestions,
        FormDisplay,
        FormHeader
    }
}
</script>

<style scoped>
    .container{
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
    }
    .container1{
        display: flex;
        padding: 0;
        justify-content: space-between;
        align-items: center;
    }
</style>