<template>
    <Button btnColor="btn-info" @on-handle-click="handleClick">
        <slot></slot>
    </Button>
</template>

<script>
export default {
    methods : {
        handleClick(e){
            this.$emit('on-handle-click', e)
        }
    }
}
</script>
