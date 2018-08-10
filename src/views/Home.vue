<template>
    <div class="home view">
        <section>
            <header class="profile-card">
                <figure class="picture">
                    <img style="border-radius: 40%;" height="125" width="125" src="~Static/portrait.jpeg">
                </figure>
                <div class="details">
                    <h1>Andrea Sessa</h1>
                    <h2>Software Engineer</h2>
                </div>
            </header>
            <article class="main">
                <p>
                    Hey, I'm a Software Engineer from Italy, Milan. I am currently working as Backend Engineer
                    at <a class="link" target="_blank" href="https://www.cleafy.com">.Cleafy</a>. I work primarly with Java but
                    I love to experiment with new technologies.
                </p>
                <p>
                    Have a look through some of my
                    <router-link class="link" to="/projects">projects</router-link> or learn a bit more
                    <router-link class="link" to="/about">about me</router-link>.
                </p>
            </article>
            <footer>
                <ul>
                    <li class="link" v-for="link in home.links">
                        <i class="icon" :class="link.icon"></i>
                        <a class="link" target="_blank" :href="link.url">{{ link.text }}</a>
                    </li>
                </ul>
            </footer>
        </section>
    </div>
</template>

<script>
import home from 'Utils/home.data.json';

export default {
    name: 'home',
    data() { return { home }; }
};
</script>

<style lang="scss" scoped>
@import '~Styles/variables';
@import '~Styles/mixins';

.home {
    overflow: auto;
    section {
        width: $common-block-width;
        .profile-card {
            padding-bottom: 30px;
            border-bottom: 2px solid $orange-color;
            @include flex-row;
            .picture {
                width: 125px;
                height: 125px;
                margin-right: 40px;
            }
            .details {
                @include flex-col;
                justify-content: center;
                h1,
                h2 {
                    display: block;
                    margin-top: 0;
                    margin-bottom: 10px;
                }
                h2 {
                    font-weight: 100;
                    color: rgba($black-color, 0.7);
                }
            }
        }
        .main {
            margin: 30px 0px;
        }
        footer ul {
            @include flex-row;
            li.link {
                width: 33.33%;
                @include flex-row;
                align-items: center;
                font-size: 16px;
                font-family: Lato, serif;
                margin-bottom: 15px;
                margin-left: auto;
                margin-right: auto;
                transition: color linear .4s;
                color: $black-color;
                .icon {
                    font-size: 35px;
                }
                a {
                    transition: none;
                    color: inherit;
                }
                &:hover {
                    cursor: pointer;
                    color: $orange-color;
                }
            }
        }
    }
}

@include mobile-width-breakpoint {
    .home {
        section {
            width: 100%;
            padding: 50px 50px 30px 50px;
            header.profile-card {
                display: block;
                text-align: center;
                padding-bottom: 15px;
                .picture {
                    margin: auto;
                    margin-bottom: 15px;
                }
            }
            .main {
                margin: 25px 0px;
            }
            footer ul {
                flex-direction: column;
                align-items: center;
            }
        }
    }
}

@include mobile-height-breakpoint {
    div.home {
        display: block;
        section {
            width: 100%;
            display: block;
            padding: 25px 50px;
            header {
                .picture {
                    display: none;
                }
                .details {
                    display: block;
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }
}
</style>
