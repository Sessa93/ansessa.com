<template>
    <div class="sidenav-wrapper">
            <hamburger></hamburger>
        <aside class="sidenav-container" v-bind:class="sidenavStatus">
            <ul>
                <li v-for="link in links" :key="link.path" @click="navigate(link)" v-bind:class="linkClass(link)">{{ link.name }}</li>
                <li class="download">
                    <a class="download-anchor" href="static/resume.pdf" download="Resume.pdf">CV / Résumé <span class="icon fi-download"></span></a>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
import router from 'Src/router';
import Hamburger from 'Components/Hamburger';
import CONSTANTS from 'Utils/constants.json';

export default {
    name: 'sidenav',
    components: { Hamburger },
    data() {
        return {
            links: filterValidRoutes(router.options.routes)
        };
    },
    computed: {
        sidenavStatus() {
            return this.$store.state.sidenav_status;
        }
    },
    methods: {
        navigate(link) {
            router.push(link.path);
            this.$store.commit(CONSTANTS.MUTATIONS.SIDENAV_CLOSE);
        },
        linkClass(link) {
            if (this.$store.state.current_path === link.path) {
                return CONSTANTS.CLASSES.SELECTED;
            }
            return null;
        }
    }
};

/* duplicated in Navbar, should create some kind of Utils for this */
function filterValidRoutes(routes) {
    return routes.filter(
        route => route.path !== CONSTANTS.WILDCARD 
            && route.path !== CONSTANTS.NOT_FOUND
    );
}

</script>

<style lang="scss" scoped>
@import '~Styles/variables';
$translationX: $sidenav-width;
$paddingX: 30px;
$paddingY: 85px;

.download {
    position: absolute;
    bottom: 30px;
    font-size: 16px !important;
    .download-anchor {
        text-decoration: none;
        color: $black-color;
    }
    .icon.fi-download {
        margin-left: 5px;
        color: $orange-color;
    }
}

.sidenav-wrapper {
    .sidenav-container {
        @include common-transition;
        z-index: $second-layer;
        position: fixed;
        right: 0;
        top: 0;
        background-color: $soft-white-color;
        width: $sidenav-width;
        height: 100%;
        transform: translate3d($translationX, 0px, 0px);
        padding: $paddingY $paddingX;
        &.opened {
            transform: translate3d(0px, 0px, 0px);
        }
        ul {
            border-top: 2px solid $orange-color;
            li {
                margin: 30px 0px;
                font-family: monospace, serif;
                font-size: 20px;
                display: block;
                &:hover {
                    cursor: pointer;
                }
                &.selected {
                    font-weight: bold;
                }
            }
        }
    }
}

@include in-desktop {
    .sidenav-wrapper {
        display: none !important;
    }
}
</style>
