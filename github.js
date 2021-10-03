let body = document.body;
let light = document.getElementById('light_btn');
let mode = () => {
    body.classList.toggle('light');
}
light.addEventListener('click', mode);

let search = document.getElementById('search');
let username = document.getElementById('search_bar');
let section = document.querySelector('section');
function fetchResult(e) {
    e.preventDefault();
    let name = username.value;
    fetch(`https://api.github.com/search/users?q=${name}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        },
    }).then(function (res){
        return res.json();
    }).then(function (data){
        console.log(data);
        displayResult(data);
    })

}
function displayResult(data) {
const{avatar_url,login,followers_url, following_url, html_url,repos_url,url} = data
    let p = document.createElement('p');
p.textContent = login.items;
section.appendChild(p);



    
}
search.addEventListener('click', fetchResult);
