const themesSwitcher = document.querySelector(".theme-switcher-outer");


themesSwitcher.addEventListener("click", () => {
    const switcherBall = themesSwitcher.querySelector(".theme-switcher-inner");
    if(!document.body.classList.contains("dark")){
        switcherBall.style.transform = "translate(25px, 0px)"

    }else{
        switcherBall.style.transform = "translate(0px, 0px)"


    }
    document.body.classList.toggle("dark");

    
    console.log(22);
});
