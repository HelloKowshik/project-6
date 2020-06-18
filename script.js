let app = new App();
let ui = new UI();
let searchInput = document.getElementById('searchUser');
searchInput.addEventListener('keyup', getUserInfo);

function getUserInfo(e) {
    let inputText = e.target.value;
    if (inputText !== '') {
        app.getUser(inputText)
            .then(data => { 
                const { profile, repos } = data;
                console.log(repos);
                if (profile.message === 'Not Found') {
                    ui.displayAlert('User Not Found', 'alert alert-info');
                } else {
                    ui.displayProfile(profile);
                    ui.displayRepos(repos);
            }
        })
    } else {
        ui.clearAll();
    }
}