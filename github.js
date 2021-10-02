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
function displayResult(data) {
    for(let i=0; i<data.length; i++){
        if(data[i] == name){
            console.log(data[i]);
            let img = document.createElement('img');
            img.src = data[i].avatar_url;
            section.appendChild(img);


        }
    }
}
search.addEventListener('click', fetchResult);
