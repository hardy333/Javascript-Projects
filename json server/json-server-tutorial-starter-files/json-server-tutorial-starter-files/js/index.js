window.addEventListener('DOMContentLoaded', () => {
    const blogs = document.querySelector('.blogs');
    const searchForm = document.querySelector(".search");
    let isLoading = true;


    function CheckLoading(){
        if(isLoading){
            blogs.innerHTML += "<h1>Loading . . .</h1>";
        }
    }
    CheckLoading();
   

	const fetchData = async () => {
        const posts = await fetch(`http://localhost:3000/posts?_sort=likes&_order=desc`).then((ress) => ress.json());

        setTimeout(() => {

            isLoading = false;
            

            let html = '';
            posts.forEach((post, index) => {
                html += `
                <div class="post">
                    <h2>${post.title}</h2>
                    <p><small>${post.likes}</small></p>
                    <p>${post.body.slice(0,200)} ...</p>
                    <a href="details.html?id=${post.id}">read more ... </a>
                </div>
            `;
            });

            blogs.innerHTML = html;

        },100);
		
	};
    fetchData();
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const term = searchForm.term.value;
        console.log(term);

        searchForm.term.value = "";
    })
});


