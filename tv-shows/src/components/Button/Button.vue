<template>
    <button type="button" class="btn" :class="btnColor" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props : ['btnColor'],
    methods : {
        handleClick(e){
            this.$emit('on-handle-click', e)
        }
    }
}
</script>