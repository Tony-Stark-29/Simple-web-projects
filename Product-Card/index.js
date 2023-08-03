let prevSelection = null;

document.querySelector(".product-color").addEventListener("click", (event) => {
   
   if(event.target.classList[0] =='tshirtColor')
   {
      if (prevSelection) 
      {
       prevSelection.classList.remove("img-selected");
        event.target.classList.toggle("img-selected");
        prevSelection = event.target;
        document.getElementById("preview-image").src=event.target.src;
        
      }
      else
      {
       event.target.classList.toggle("img-selected");
       prevSelection = event.target;
       document.getElementById("preview-image").src=event.target.src;
      }
   }
  
  
});

let prevSizeSelection=null
document.querySelector(".product-size").addEventListener("click", (event) => {
    
   if(event.target.classList[0] =='size')
   {
       
      if (prevSizeSelection) 
      {
         prevSizeSelection.classList.toggle("size-selected");
        event.target.classList.toggle("size-selected");
        prevSizeSelection = event.target;
      
        
      }
      else
      {
       event.target.classList.toggle("size-selected");
       prevSizeSelection = event.target;
        
      }
   }
  
  
});
