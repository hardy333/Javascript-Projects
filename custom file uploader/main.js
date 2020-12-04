const realFileBtn = document.getElementById('real-file');
const customBtn = document.getElementById('custom-button');
const customText = document.getElementById('custom-text');

customBtn.addEventListener('click', () => {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", () => {
    if(realFileBtn.value){
        customText.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }else{
        customText.innerHTML = "No File Choosen, yet."
    }
})