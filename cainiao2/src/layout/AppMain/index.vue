<template>
    <div class="index">
            <Applink v-if="flge"></Applink>
                  <router-view/>
    </div>
</template>
<script>
import Applink from './Link.vue'
export default {
    components: {
        Applink
    },
    computed: {
        flge () {
            return  !(this.$route.fullPath==='/indexs')
        },
    },
}
</script>