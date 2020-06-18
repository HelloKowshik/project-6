class UI{
    constructor() {
        this.profile = document.getElementById('profile');
    }
    displayProfile(user) {
        const { avatar_url, html_url, public_repos, public_gists, followers, following, company, blog, location, created_at ,name} = user;
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${avatar_url}">
                <a href="${html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${public_gists}</span>
                <span class="badge badge-success">Followers: ${followers}</span>
                <span class="badge badge-info">Following: ${following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Full Name: ${name}</li>
                    <li class="list-group-item">Company: ${company}</li>
                    <li class="list-group-item">Website/Blog: ${blog}</li>
                    <li class="list-group-item">Location: ${location}</li>
                    <li class="list-group-item">Member Since: ${created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
        `;
    }
    displayRepos(repos) {
        let result = '';
        repos.forEach(repo => { 
            const { html_url,name,stargazers_count,watchers_count,forks_count} = repo;
            result += `
            <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${html_url}" target="_blank">${name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${stargazers_count}</span>
                <span class="badge badge-secondary">Watchers: ${watchers_count}</span>
                <span class="badge badge-success">Forks: ${forks_count}</span>
                </div>
            </div>
        </div>
            `;
        });
        document.getElementById('repos').innerHTML = result;
    }
    displayAlert(alertMsg,alertClass) {
        this.clearMsg();
        let div = document.createElement('div');
        div.className = alertClass;
        let text = document.createTextNode(alertMsg);
        div.appendChild(text);
        const containerBox = document.querySelector('.searchContainer');
        const searchBox = document.querySelector('.search');
        containerBox.insertBefore(div, searchBox);
        setTimeout(() => {
            this.clearMsg();
        }, 2000);
    }
    clearMsg() {
        const currentMsg = document.querySelector('.alert');
        if (currentMsg) {
            currentMsg.remove();
        }
    }
    clearAll() {
        this.profile.innerHTML = '';
    }

}