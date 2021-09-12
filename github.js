let body = document.body;
let light = document.getElementById('light_btn');
let mode = ()=>{
    body.classList.toggle('light');
}
light.addEventListener('click', mode);

/*let key = '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';
let url =
fetch(url).then(function(result) {
    return result.json();
}).then(function(json) {
    displayResults(json);
});*/

/*<span id="enter_name">
        <i class="fas fa-search" id="enter_search"></i>
      <label>Search Github Username_</label>
    </span>
<span id="serach_btn">
      <button type="button" id="search">search</button>
    </span>
</div>
*/
