<template>
    <transition name="viewFade" appear>
        <nav class="navbar-container" v-if="!isIn404">
            <h1 class="name" @click="navigate()">A·S</h1>
            <ul class="navbar-wrapper">
                <li class="nav-link" v-for="link in links" :key="link.path" @click="navigate(link)" v-bind:class="linkClass(link)">{{ link.name }}</li>
                <li class="nav-link download">
                    <a class="download-anchor" href="static/resume.pdf" download="Resume.pdf"><span class="icon fi-download"></span>CV</a>
                </li>
            </ul>
        </nav>
    </transition>
</template>

<script>
import router from 'Src/router';
import CONSTANTS from 'Utils/constants.json';

export default {
    name: 'navbar',
    data() {
        return {
            links: filterValidRoutes(router.options.routes)
        };
    },
    computed: {
        isIn404() {
            return this.$store.state.current_path === CONSTANTS.NOT_FOUND;
        }
    },
    methods: {
        navigate(link) {
            router.push(link ? link.path : '/');
        },
        linkClass(link) {
            if (this.$store.state.current_path === link.path) {
                return CONSTANTS.CLASSES.SELECTED;
            }
            return null;
        }
    }
};

/* duplicated in Sidenav, should create some kind of Utils for this */
function filterValidRoutes(routes) {
    return routes.filter(
        route => route.path !== CONSTANTS.WILDCARD 
            && route.path !== CONSTANTS.NOT_FOUND
    );
}

</script>

<style lang="scss" scoped>
@import '~Styles/variables';

.download {
    margin-left: 30px !important;
    .download-anchor {
        text-decoration: none;
        color: $black-color;
    }
    .icon.fi-download {
        color: $orange-color;
    }
}

.navbar-container {
    @include common-transition;
    height: 80px;
    text-align: center;
    background: hsla(0, 0%, 100%, .8);
    border-bottom: 1px solid #EFEFEF;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 999;
    .name {
        float: left;
        margin-left: 15%;
        font-family: 'Monospace';
        font-size: 30px;
        &:hover {
            cursor: pointer;
        }
    }
    .navbar-wrapper {
        height: 100%;
        float: right;
        margin-right: 15%;
        display: flex;
        align-items: center;
        .nav-link {
            margin: 0 15px;
            &.selected {
                font-weight: bold;
            }
            &:hover {
                cursor: pointer;
            }
        }
    }
}

@include not-in-desktop {
    .navbar-container {
        display: none !important;
    }
}
</style>
