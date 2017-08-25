// Material Select Initialization
$(document).ready(function() {
   $('.mdb-select').material_select();
 });

 var progress = 0;

 function displayForm() {
     console.log("clicked");
     var form = document.getElementById("engage-form-id");
     if (form.style.visibility == "hidden") {
         form.style.visibility = "visible";
     } else {
         form.style.visibility = "hidden";
     }
 }
 
