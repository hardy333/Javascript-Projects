const form = document.querySelector("form");


form.addEventListener("submit", createPost);


async function createPost(e){
    e.preventDefault();
    console.log(form.title.value);
    console.log(form.body.value);

    const doc = {
        title: form.title.value,
        body: form.body.value,
        likes: 0,

        
    }
    console.log(doc);

    await fetch("http://localhost:3000/posts", {
        method: "POST",
        body: JSON.stringify(doc),
        headers: {"content-type": "application/json"}
    })

    form.title.value = "";
    form.body.value = "";

    window.location.replace("/index.html");


}


