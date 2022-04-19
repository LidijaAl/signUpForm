const inputs = document.getElementsByTagName("input");
const p = document.getElementsByTagName("p");
const error = document.getElementsByClassName("error");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateForm() {

    for (let i = 0; i < inputs.length; i++) {

        inputs[i].addEventListener("blur", function () {

            if (inputs[i].value === "") {
                error[i].classList.add("visible");
                inputs[i].classList.add("error-icon");
                inputs[i].style.borderColor = "red";
                inputs[i].placeholder = "";
               
            } else {
                error[i].classList.remove("visible");
                inputs[i].classList.remove("error-icon");
                inputs[i].style.borderColor = "grey";
            }

           
        });
        inputs[2].addEventListener("blur", function(){
            if (inputs[2].value.match(mailformat)) {
                error[2].classList.remove("visible");
                inputs[2].classList.remove("error-icon");
                inputs[2].style.borderColor = "grey";
            } else {
                inputs[2].value = "";
                error[2].classList.add("visible");
                inputs[2].classList.add("error-icon");
                inputs[2].style.borderColor = "red";
                inputs[2].placeholder = "email@example/com";
               
            }
        })

        inputs[i].addEventListener("focus", function () {
            error[i].classList.remove("visible");
            inputs[i].classList.remove("error-icon");
            inputs[i].style.borderColor = "grey";
            inputs[i].placeholder = "";
        });


    }


}

validateForm();












/*for (let input of inputs){
   input.addEventListener("focus",function(){
    this.value = " ";
    this.style.borderColor = "grey";
    this.classList.remove("error-icon");
    for(let p in pp){
        
    }

});
    input.addEventListener("blur",function(){
    this.style.borderColor = "red";
    this.classList.add("error-icon");
    pp.classList.add("error-text-fname");


});

}

*/
/*fname.addEventListener("focus",function(){
    fname.value = " ";
    fname.style.borderColor = "grey";
    fname.classList.remove("error-icon");
    p.style.display = "none";
    
});

fname.addEventListener("blur",function(){
    fname.style.borderColor = "red";
    fname.classList.add("error-icon");
    let p = document.getElementById("error-text-fname");
    p.style.display = "block";

});

*/