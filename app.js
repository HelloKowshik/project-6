class App{
    constructor() {
        this.clientID = 'bb5d49f49f2a3a6c1706';
        this.clientSecret = '41bab1fcfd20957ecec0280a7323dbbabb201877';
        this.totalRepo = 10;
        this.sortRepo = 'created:asc';
    }
    async getUser(user) {
        let userInfo = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`);
        let repoInfo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.totalRepo}&sort=${this.sortRepo}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        let profile = await userInfo.json();
        let repos = await repoInfo.json();
        return {
            profile,
            repos
        }
    }
}