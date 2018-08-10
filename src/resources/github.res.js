const myUser = 'sessa93';
const endpoints = {
    user: 'https://api.github.com/users/{user}',
    repos: 'https://api.github.com/users/{user}/repos'
};

export default class GithubRes {

    constructor(resource) {
        this.resource = resource;
    }

    fetchUser(user) {
        return this.resource(endpoints.user).get({ user });
    }

    fetchMe() {
        return this.fetchUser(myUser);
    }

    fetchRepos(user) {
        return this.resource(endpoints.repos).get({ user });
    }

    fetchMyRepos() {
        return this.fetchRepos(myUser);
    }

}
