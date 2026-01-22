<script setup lang="ts">
import AboutPanel from '@/components/AboutPanel.vue'
import MeditationList from '@/components/MeditationList.vue'
</script>
<template>
    <div class="wrapper">
        <div class="about">
            <AboutPanel />
        </div>
        <div class="list">
            <MeditationList />
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
}

.about {
    width: 40%;
    padding: 0 30px 0 0;
}

.list {
    width: 60%;
    padding-left: 15px;
}
</style>
