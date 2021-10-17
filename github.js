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
    fetch(`https://api.github.com/users/${name}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        },
    }).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data);
        displayResult(data);
    })

}

function displayResult(data) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    console.log(data);
    const {
        avatar_url,
        bio,
        blog,
        company,
        created_at,
        email,
        event_url,
        followers,
        following,
        gravatar_id,
        gists_url,
        html_url,
        location,
        login,
        name,
        public_repos,
        repos_url,
        twitter_username,
        url
    } = data

    let head = document.createElement('div');
    head.setAttribute('id', 'nameDate');

    let imgElement = document.createElement('img');
    imgElement.src = avatar_url;

    let p = document.createElement('p');
    p.setAttribute('id', 'login')
    p.textContent = login;


    let span = document.createElement('span');
    span.setAttribute('id', 'created_at')
    span.textContent = created_at;

    head.appendChild(p);
    head.appendChild(span);
    head.appendChild(imgElement);

    let bioDeets = document.createElement('p');
    bioDeets.setAttribute('id', 'bio');
    if(bio == null){
    bioDeets.textContent = 'this profile has no bio';
    }
    else {
        bioDeets.textContent = bio;
    }

    let div = document.createElement('div');
    div.setAttribute('id', 'userCounts');

    let repos = document.createElement('span');
    repos.setAttribute('class', 'userCountHead');
    repos.textContent = 'repos';

    let followersCount = document.createElement('span');
    followersCount.setAttribute('class', 'userCountHead');
    followersCount.textContent = 'followers';

    let followingCount = document.createElement('span');
    followingCount.setAttribute('class', 'userCountHead');
    followingCount.textContent = 'following';

    let divVal = document.createElement('div');
    divVal.setAttribute('id', 'userValue');


    let reposValue = document.createElement('span');
    reposValue.setAttribute('class', 'userCountValue');
    reposValue.textContent = public_repos;

    let followerValue = document.createElement('span');
    followerValue.setAttribute('class', 'userCountValue');
    followerValue.textContent = followers;

    let followingValue = document.createElement('span');
    followingValue.setAttribute('class', 'userCountValue');
    followingValue.textContent = following;


    div.appendChild(repos);
    div.appendChild(followersCount);
    div.appendChild(followingCount);
    divVal.appendChild(reposValue);
    divVal.appendChild(followerValue);
    divVal.appendChild(followingValue);

    let bottom1 = document.createElement('div');
    bottom1.setAttribute('id', 'top');

    let span1 = document.createElement('span');
    span1.setAttribute('class', 'topClass');
    if(location==null){
        span1.textContent = 'not available';
    }
    else {
        span1.textContent = location;
    }

   let span2 = document.createElement('span');
    span2.setAttribute('class', 'topClass');
    if(twitter_username==null){
        span2.textContent = 'not available';
    }
    else {
        span2.textContent = twitter_username;
    }

    bottom1.appendChild(span2);
    bottom1.appendChild(span1);


    let bottom2 = document.createElement('div');
    bottom2.setAttribute('id', 'bottom');

    let span3 = document.createElement('span');
    span3.setAttribute('class', 'bottomClass');
    if(blog==""){
        span3.textContent = 'not available';
    }
    else {
        span3.textContent = blog;
    }

    let span4 = document.createElement('span');
    span4.setAttribute('class', 'bottomClass');
    span4.textContent = url;

    bottom2.appendChild(span3);
    bottom2.appendChild(span4);


    section.appendChild(head);
    section.appendChild(bioDeets);
    section.appendChild(div);
    section.appendChild(divVal);
    section.appendChild(bottom1);
    section.appendChild(bottom2);




}


search.addEventListener('click', fetchResult);
