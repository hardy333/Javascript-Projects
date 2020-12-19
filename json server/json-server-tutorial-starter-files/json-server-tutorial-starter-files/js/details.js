const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

window.addEventListener('DOMContentLoaded', async () => {
    await fetch(`http://localhost:3000/posts/${id}`)
        .then(ress => {
            if(!ress.ok){
                window.location.replace("/");

            }
            return ress.json();
        })
        .then((ress) => {
           
            const post = ress;
        
            const html = `
                <h1>${post.title}</h1>
                <p><small>${post.likes}</small></p>
                <p>${post.body}</p>
        
            `;
            container.innerHTML = html;

        })
        .catch(error => error);
       
});

deleteBtn.addEventListener('click', async () => {
	const ress = await fetch('http://localhost:3000/posts/' + id, {
		method: 'DElETE'
	});

	window.location.replace("/index.html");
});
