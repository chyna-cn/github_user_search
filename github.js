let body = document.body;
let light = document.getElementById('light_btn');
let mode = () => {
    body.classList.toggle('light');
}
light.addEventListener('click', mode);


let username = document.getElementById('search_bar');
let name = username.value;
let url = `https://api.github.com/users/?q=${name}`

function submitSearch(e) {
    fetchResults(e);
}

function fetchResults(e) {
    e.preventDefault();
    name = username.value;
    if (name == "") {
        alert("please enter a username");
        return;
    }
    fetch(url).then(res=> res.json()).then(res=>{
        console.log(res);
        displayResults(res);
    });
}
function displayResults(res){


}





