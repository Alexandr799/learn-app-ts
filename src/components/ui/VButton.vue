<template>
    <button class="button">
        <span>
            <slot></slot>
        </span>
        <slot name="icon"></slot>
    </button>
</template>

<style scoped>
.button {
    font-weight: 500;
    font-size: 15px;
    color: var(--color-fg);
    padding: 9px 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;
    background-color: var(--color-bg);
    
}
</style>
