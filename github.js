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
    fetch(`https://api.github.com/users?q=${name}`, {
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
function displayResult(data){
   /* while (section.firstChild) {
        section.removeChild(section.firstChild);
    }*/

    const{avatar_url,followers,following,html,login,url,repos} = data;
    let img = document.createElement('img')
    img.src = avatar_url;
    section.appendChild(img);
let h2 = document.createElement('h2');
h2.textContent = login;
section.appendChild(h2);
}
search.addEventListener('click', fetchResult);
