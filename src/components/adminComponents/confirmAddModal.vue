<template>
    <div class="modal-background" >
        <div :class="`modal-card modal-card-${success}`">
            <h1 v-if="success">Element has been successfully added</h1>
            <h1 v-if="!success">Error! <br> Element has not been added</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        success: Boolean,
    },
}
</script>