<template>
    <transition name="fadeIn">
        <div class="backdrop-container" v-if="sidenavOpened" @click="closeSidenav"></div>
    </transition>
</template>

<script>
import CONSTANTS from 'Utils/constants.json';

export default {
    name: 'backdrop',
    computed: {
        sidenavOpened() {
            return this.$store.state.sidenav_status === CONSTANTS.CLASSES.OPENED;
        }
    },
    methods: {
        closeSidenav() {
            this.$store.commit(CONSTANTS.MUTATIONS.SIDENAV_CLOSE);
        }
    }
};

</script>

<style lang="scss" scoped>
@import '~Styles/variables';
.backdrop-container {
    @include common-transition;
    z-index: $backdrop-layer;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $backdrop-color;
}
</style>
