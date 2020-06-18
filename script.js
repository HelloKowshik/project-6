const app = new App();  
const ui = new UI();

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if(userText !== '') {
        app.getUser(userText)
        .then(data => { 
		const {profile,repos} = data;
            if(data.profile.message === 'Not Found') {
                ui.showAlert('User Not Found', 'alert alert-info');
            } else {
                ui.showProfile(profile);
                ui.showRepos(repos);
            }
        })
    } else {
        ui.clearProfile();
    }
});