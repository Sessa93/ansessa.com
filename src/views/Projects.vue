<template>
    <div id="projects" class="project_view">
        <transition name="fadeIn" mode="out-in">
            <section v-if="!repos" class="wrapper spinner-wrapper" key="spinner">
                <spinner size="200px"></spinner>
            </section>
            <section v-else class="wrapper repos" key="repos">
                <h1 class="main-title">GitHub</h1>
                <gh-repo v-for="repo in reposByStars" :key="repo.name" v-if="repo.description" :repo="repo"></gh-repo>
            </section>
        </transition>
    </div>
</template>

<script>
    import store from 'Src/store';
    import Spinner from 'Components/Spinner';
    import GhRepo from 'Components/GhRepo';
    import CONSTANTS from 'Utils/constants.json';
    import { GithubRes } from 'Src/resources';

    export default {
        name: 'projects',
        components: { Spinner, GhRepo },
        computed: {
            repos() {
                console.log(store.state.fetched_data.my_repos);
                return store.state.fetched_data.my_repos;
            },
            /* leaving this as it is but will implement dynamic sorting later */
            reposByStars() {
                return this.repos.sort((r1, r2) => r2.stargazers_count - r1.stargazers_count);
            }
        },
        beforeRouteEnter(_1, _2, next) {
            next();
            if (!store.state.fetched_data.my_repos) {
                GithubRes.fetchMyRepos()
                    .then(res => store.commit(CONSTANTS.MUTATIONS.UPDATE_MY_REPOS, res.body))
                    .catch(err => console.warn(`[${err.status}] Couldn't fetch repos.`));
            }
        }
    };

</script>

<style lang="scss" scoped>
    @import '~Styles/variables';
    @import '~Styles/mixins';
    #projects {
        .wrapper {
            @include common-transition;
            text-align: center;
            
            @include in-mobile {
                padding: 50px 0;
            }
            @include in-tablet {
                padding-top: 200px;
            }
        }
        .spinner-wrapper {
            @include in-mobile {
                 padding-top: 125px;
            }
        }
        .main-title {
            padding-top: 200px;
            margin-left: auto;
            margin-right: auto;
            margin-top: -60px;
            padding-bottom: 15px;
            width: 50%;
            border-bottom: 2px solid $orange-color;

            @include in-mobile {
                 padding-top: 80px;
            }
            @include in-tablet {
                padding-top: 10px;
            }
        }
    }

</style>
