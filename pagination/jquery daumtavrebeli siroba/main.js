  let table = ".my-table";
  $("#maxRows").on("change",  function(){
     $(".pagination").html();
     let trnum = 0;
     let maxRows = parseInt($(this).val());
     let totalRows = $(".my-table tbody tr").length;
     console.log(maxRows);
     console.log(totalRows);


     $(".my-table tbody tr").each(function(){
        trnum++;
        if(trnum > maxRows){
            $(this).hide();
        }
        if(trnum < maxRows){
            $(this).show();
        }
     })

     let pagenum;
     if(totalRows > maxRows){
          pagenum = Math.ceil(totalRows / maxRows);
          for(let i = 1; i <= pagenum; ){
              $(".pagination").append(`<li data-page="${i}">\<span>
                ${i++}
                        <span class="sr-only">(current)<span/>
                </span>\</li>
              `).show();
          }
     }



  })