const loading = document.querySelector(".loading");
const posts = document.querySelector(".posts");

let scrollMaxHeight;

function updatetScrollMaxHeight(){
    scrollMaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
}

window.onload = () => {
    fetchPosts();

}

function fetchPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
            .then(ress => ress.json())
            .then(ress => showPosts(ress));

}

function showPosts(posts){
    const TenPosts = posts.splice(0,3);
    TenPosts.forEach(post => {
        const result = `
            <div class="post">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-body">
                    ${post.body}
                </p>
            </div> `;
            document.querySelector(".posts").innerHTML += result;
    })


    //
    setTimeout(() => {
        updatetScrollMaxHeight();
    }, 200);

    //
    loading.classList.remove("active");

    //
    window.addEventListener("scroll",fun )

}


window.addEventListener("scroll",fun )

function fun() {

    if(document.documentElement.scrollTop >= scrollMaxHeight ){
        window.removeEventListener("scroll",fun );

        loading.classList.add("active");
        setTimeout(() => {
                fetchPosts();
            
        }, 300);

           
    }
}