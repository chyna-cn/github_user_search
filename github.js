let body = document.body;
let light = document.getElementById('light_btn');
let mode = () => {
    body.classList.toggle('light');
}
light.addEventListener('click', mode);

let search = document.getElementById('search');
let username = document.getElementById('search_bar');
let name = username.value;
let url = `https://api.github.com/users/?q=${name}`

function fetchResult(e) {
    e.preventDefault();
    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        },
    }).then(function (res){
        return res.json();
    }).then(function (data){
        console.log(data);
    })

}
search.addEventListener('click', fetchResult);
   /* fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        },
    }).then((response)=>{
        response.json().then((d)=>{
            console.log(d)
}


fetch(url).then(function(result) {
  return result.json();
}).then(function(json) {
  displayResults(json);
});
*/
