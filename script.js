let tbody = document.getElementById("body");
let users;

let currentpageCount = 10;
let currentPage = 0;

fetch("https://615042b3a706cd00179b73dc.mockapi.io/users")
    .then(msg => msg.json())
    .then((msg1) => {
        users = msg1;

        for (let i = 0; i < currentpageCount; i++) {
            insertNewRow(users[i])
        }
    })

function insertNewRow(data) {
    let row = tbody.insertRow()

    let col0 = row.insertCell(0);
    let col1 = row.insertCell(1);
    let col2 = row.insertCell(2);

    col0.innerHTML = data.id;
    col1.innerHTML = data.name;
    col2.innerHTML = data.Email;

}



function changenext(direction) {

    if (direction == "next") {

        if (currentPage < 9) {

            tbody.innerHTML = ''
            currentPage++
            console.log(currentPage)
            for (i = currentPage * currentpageCount; i < currentPage * currentpageCount + currentpageCount; i++) {
                insertNewRow(users[i])
            }
        } else {
            alert("No Page FOund")
            return
        }

    } else if (direction == "prev") {


        if (currentPage > 0) {

            tbody.innerHTML = ''
            currentPage--
            for (i = currentPage * currentpageCount; i < currentPage * currentpageCount + currentpageCount; i++) {
                insertNewRow(users[i])
            }
        } else {
            alert("No Page FOund")
            return
        }
    }
}