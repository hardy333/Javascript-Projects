const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", (e) => {
        // Rmove active class and height from all accordion-item exapt The one which was clicked 
        accordionItemHeaders.forEach(x => {
            if(x !== accordionItemHeader ){
                // Remove active class
                x.classList.remove("active");

                // Set Height to 0px 
                const accordionItemBody = x.nextElementSibling;
                accordionItemBody.style.maxHeight = 0 + "px";      
            }
        }) 

        
        // Toggle active class and height to clicked accordion.
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";      

        }else{
            accordionItemBody.style.maxHeight = 0 + "px";      

        }




        // console.log(accordionItemHeader);

        // accordionItemHeader.classList.toggle("active");
        
        // accordionItemHeaders.forEach(x => {
        //     if(x !== accordionItemHeader ){
        //         // Remove active class
        //         x.classList.remove("active");
        //         console.log(x);

                    
        //     }
        // })

    })
})
  