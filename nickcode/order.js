window.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#form1");
  
    form.addEventListener("submit", function (e) {
      // go and collect user input from three input boxes and store them in js variables here
      let item = document.querySelector("#item").value;
      let quantity = document.querySelector("#quantity").value;
  
      addItemToList(item, quantity); //addBookToList() will create a new row in the table and insert title author and isbn there in the row
  
      e.preventDefault();
    });
  
    function addItemToList(i, q) {
      if (i === "" || q === "") {
        showAlert("No field should be empty", "error");
      } if (q < 0) {
        showAlert("Quantity number cannot be negative!")
      } else {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${t}</td><td>${a}</td><td>${i}</td><td><button class="delete">X</button></td>`;
        // append the newly created row in the table body with id book-list
        document.querySelector("#book-list").appendChild(row);
        clearFields();
        showAlert("Book successfully added!", "success");
      }
    }

    function clearFields() {
        document.querySelector("#item").value = "";
        document.querySelector("#quantity").value = "";
    }
});