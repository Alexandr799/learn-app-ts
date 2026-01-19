<template>
    <button class="button">
        <span class="wrap">
            <slot name="icon"></slot>
        </span>
        <span class="text">
            <slot name="text"></slot>
        </span>
    </button>
</template>

<style scoped>
.button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.wrap {
    width: 62px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
}

.text {
    color: var(--color-fg);
    font-weight: 400;
    font-size: 12px;
    padding-top: 5px;
}
</style>