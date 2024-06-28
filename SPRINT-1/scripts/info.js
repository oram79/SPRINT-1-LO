window.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#form1");

    form.addEventListener("submit", function (e){
       // go and collect user input from three input boxes and store them in js variables here
      let quantity = document.querySelector("#quantity").value;
      let fullname = document.querySelector("#fullname").value;
      let phoneoremail = document.querySelector("#phoneoremail").value;
      let cardnumber = document.querySelector("#cardnumber").value;

      addItemtoList(quantity, fullname, phoneoremail, cardnumber);

      e.preventDefault();
    });

    let submit = document.querySelector("#submit");

    submit.addEventListener("click", function (e) {
        if(q === "" | fn === "" || poe === "" || cn === "") {
            alert("No field should be empty", "error")
        } if(cn.length !== 16 || isNaN(c)) {
            alert("Card Number must be a 16-digit number.")
        } if (isNaN(q) || Number(q) < 0) {
            alert("Quantities cannot be negative numbers.")
        }
    });
});
    