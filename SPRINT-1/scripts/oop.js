
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed.");

  let form = document.querySelector("#form1");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    let quantities = document.querySelectorAll(".quantitybox");
    let fullName = document.querySelector("#fullName").value.trim();
    let cardNumber = document.querySelector("#cardNumber").value.trim();

    let isValid = true;
    let message = "";

    let valueFound = false;

    quantities.forEach(function (quantity) {
      let quantityInput = quantity.value;

      if (quantityInput !== "") {
        if (isNaN(quantityInput) || Number(quantityInput) < 0) {
          showAlert("Invalid Quantity", "error");
          valueFound = false;
          return;
        }
        valueFound = true;
      }
    });

    if (!valueFound) {
      showAlert("At least one valid quantity is required.", "error");
      return;
    }

    if (!fullName) {
      isValid = false;
      message += "Customer Name cannot be blank.\n";
    } else if (!/^[a-zA-Z\s.'-]+$/.test(fullName)) {
      isValid = false;
      message += "Customer Name contains invalid characters.\n";
    }

    if (!cardNumber) {
      isValid = false;
      message += "Credit Card Number cannot be blank.\n";
    } else if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
      isValid = false;
      message +=
        "Credit Card Number must be in the format XXXX XXXX XXXX XXXX.\n";
    }

    if (isValid) {
      showAlert("Form submitted successfully!", "success");
      setTimeout(function () {
        window.location.href = "thankyou.html";
      }, 3000);
    } else {
      showAlert(message, "error");
    }
  });

  function showAlert(message, className) {
    let div = document.createElement("div");
    div.innerText = message;
    div.className = "alert " + className;
    document.querySelector("#alert").appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 1000);
  }
});
