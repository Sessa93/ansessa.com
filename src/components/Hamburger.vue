<template>
    <div class="hamburger-container" v-bind:class="sidenavStatus" @click="toggleSidenav">
        <div class="bar arrow-top"></div>
        <div class="bar arrow-middle"></div>
        <div class="bar arrow-bottom"></div>
    </div>
</template>

<script>
import CONSTANTS from 'Utils/constants.json';

export default {
    name: 'hamburger',
    computed: {
        sidenavStatus() {
            return this.$store.state.sidenav_status;
        }
    },
    methods: {
        toggleSidenav() {
            this.$store.commit(CONSTANTS.MUTATIONS.SIDENAV_TOGGLE);
        }
    }
};

</script>

<style lang="scss" scoped>
@import '~Styles/variables';

$bar-height: 5px;
$hamburger-width: 50px;
$hamburger-width-mobile: $bar-height;
$page-border-distance: 30px;
$page-border-distance-mobile: $page-border-distance / 2;
$translationX: -($sidenav-width - 100px);
$translationX-mobile: $translationX - $hamburger-width;

.hamburger-container {
    z-index: $first-layer;
    position: fixed;
    top: $page-border-distance;
    right: $page-border-distance;
    @include common-transition;
    transform: translate3d(0, 0, 0);
    .bar {
        display: block;
        height: $bar-height;
        width: $hamburger-width;
        background: $black-color;
        margin: 10px auto;
        border-radius: 2px;
        @include common-transition;
        &.arrow-top {
            margin-top: 0px;
        }
        &.arrow-bottom {
            margin-bottom: 0px;
        }
    }
    &.opened {
        transform: translate3d($translationX, 0px, 0px);
        .arrow-top {
            transform: translate3d(14px, 8px, 0px) rotate(45deg);
            width: 25px;
        }
        .arrow-middle {
            width: 40px;
        }
        .arrow-bottom {
            transform: translate3d(14px, -8px, 0px) rotate(-45deg);
            width: 25px;
        }
    }
}

@include mobile-width-breakpoint {
    .hamburger-container {
        top: $page-border-distance-mobile;
        right: $page-border-distance-mobile;
        &.opened {
            transform: translate3d($translationX-mobile, 0px, 0px);
            .arrow-top,
            .arrow-middle,
            .arrow-bottom {
                width: $hamburger-width-mobile;
                transform: none;
            }
        }
        .bar {
            border-radius: 2.5px;
            width: $hamburger-width-mobile;
        }
    }
}
</style>
