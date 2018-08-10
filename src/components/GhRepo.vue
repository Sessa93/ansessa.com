<template>
    <div class="repo card-shadow">
        <div class="repo-content">
            <div class="data">
                <a class="name hover-border" :href="repo.html_url" target="_blank">{{repo.name}}</a>
                <p class="description">{{repo.description}}</p>
            </div>
            <ul class="info">
                <li :title="starsTooltip" class="item link link-hover-grow stars">
                    <i class="icon fi-star"></i>{{stars}}</li>
                <li :title="watchersTooltip" class="item link link-hover-grow watchers" >
                    <i class="icon fi-eye"></i>{{watchers}}</li>
                <li :title="issuesTooltip" class="item link link-hover-grow issues">
                    <i class="icon fi-flag"></i>{{issues}}</li>
                <li :title="forksTooltip" class="item link link-hover-grow forks">
                    <i class="icon fi-torsos-all"></i>{{forks}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
const createTooltip = (name, count) => `Repository has ${count} ${name}`;

export default {
    name: 'gh-repo',
    props: ['repo'],
    computed: {
        stars() {
            return this.repo.stargazers_count;
        },
        starsTooltip() {
            const name = this.stars === 1 ? 'star' : 'stars';
            return createTooltip(name, this.stars);
        },
        watchers() {
            return this.repo.watchers_count;
        },
        watchersTooltip() {
            const name = this.watchers === 1 ? 'watcher' : 'watchers';
            return createTooltip(name, this.watchers);
        },
        issues() {
            return this.repo.open_issues_count;
        },
        issuesTooltip() {
            const name = this.issues === 1 ? 'issue' : 'issues';
            return createTooltip(name, this.issues);
        },
        forks() {
            return this.repo.forks_count;
        },
        forksTooltip() {
            const name = this.forks === 1 ? 'fork' : 'forks';
            return createTooltip(name, this.forks);
        }
    }
};

</script>

<style lang="scss" scoped>
@import '~Styles/variables';
.repo {
    display: inline-block;
    width: 35%;
    height: 150px;
    margin: 20px;
    vertical-align: top;
    border-radius: 5px;
    .repo-content {
        position: relative;
        text-align: left;
        height: 100%;
        .data {
            padding: 20px;
            font-family: monospace, sans-serif;
            .name,
            .description {
                margin: 0 0 10px 0;
            }
            .name {
                color: inherit;
                text-decoration: none;
                font-size: 25px;
                font-family: monospace, serif;
                font-weight: bold;
                display: inline-block;
                padding-bottom: 5px;
            }
            .description {
                color: $gray-color;
                font-size: 14px;
                font-weight: 100;
            }
        }
        .info {
            position: absolute;
            bottom: 0px;
        }
        .info {
            left: 10px;
            padding: 10px;
            font-size: 14px;
            .item {
                margin-right: 10px;
            }
            .icon {
                margin-right: 5px;
            }
        }
    }
}

@include mobile-width-breakpoint {
    .repo {
        width: 80%;
        .repo-content {
            text-align: center;
        }
    }
}
</style>
