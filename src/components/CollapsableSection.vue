<template>
    <div>
        <div class="header">
        <span v-if="open" 
        @click="open = !open"
         type="button" class="btn btn-warning "> &#x25B2; Collapse</span>

                <span v-if="!open"
                @click="open = !open"
                 type="button" class="btn btn-warning btn-block">&#x25BC; Expand a preview</span>
        </div>
        <slot v-if="open"></slot>

    </div>
</template>

<script>
export default {
    name: 'CollapsableSection',
    data: () => ({
        open: true,
    })
}
</script>

<style scoped>
 .header {
     display: flex;
     justify-content: flex-end;
 }
.btn {
    color:white;
    font-size: 1rem;
    font-weight: bold;
    width: 15rem;
    height: 30px;
    padding: 0;
}

</style>

