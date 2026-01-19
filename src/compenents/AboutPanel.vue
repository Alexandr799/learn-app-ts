<script setup lang="ts">
import IconCalm from './icon/IconCalm.vue'
import IconFocus from './icon/IconFocus.vue'
import IconRelax from './icon/IconRelax.vue'
import VButtonIcon from './ui/VButtonIcon.vue'
</script>

<template>
    <div>
        <div class="image-wrapper">
            <img class="image" src="" alt="Фото профиля" />
        </div>
    </div>

    <div>
        <h1 class="title">Добро пожаловать, Наталья!</h1>
        <div class="lead">Как вы сегодня себя чувствуете?</div>
    </div>

    <div class="button-wrapper">
        <div>
            <VButtonIcon>
                <template #icon>
                    <IconCalm />
                </template>
                <template #text> Спокойно </template>
            </VButtonIcon>
        </div>

        <div>
            <VButtonIcon>
                <template #icon>
                    <IconRelax />
                </template>
                <template #text> Расслабленно </template>
            </VButtonIcon>
        </div>

        <div>
            <VButtonIcon>
                <template #icon>
                    <IconFocus />
                </template>
                <template #text> Фокусировано </template>
            </VButtonIcon>
        </div>

        <div>
            <VButtonIcon>
                <template #icon>
                    <IconRelax />
                </template>
                <template #text> Тревожно </template>
            </VButtonIcon>
        </div>
    </div>
</template>

<style scoped>
.image {
    width: 100%;
    height: 100%;
}

.image-wrapper {
    width: 129px;
    height: 129px;
    border-radius: 50%;
    overflow: hidden;
}

.title {
    margin: 0;
    padding: 0;
    margin-top: 30px;
    margin-bottom: 10px;
}

.button-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    padding-top: 40px;
} 

.lead {
    color: rgba(255, 255, 255, 0.7);
}
</style>
