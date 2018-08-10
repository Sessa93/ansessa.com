<template>
    <div id="app">
        <Navbar></Navbar>
        <Backdrop></Backdrop>
        <sidenav></sidenav>
        <transition name="viewFade" appear>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Navbar from 'Components/Navbar';
    import Backdrop from 'Components/Backdrop';
    import Sidenav from 'Components/Sidenav';

    export default {
        name: 'app',
        components: {
            Navbar,
            Backdrop,
            Sidenav
        }
    };

</script>

<style lang="scss">
    @import '~Styles/global.scss';

</style>
