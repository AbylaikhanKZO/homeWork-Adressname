let listAcademy = document.querySelector("#users_adress")
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>{
    for(items of json){
      listAcademy.innerHTML += `<li>
        <h1>${items.name}</h1>
        <p> street: ${items.address.street}, ${items.address.suite}<br><br> City: ${items.address.city}</p>
        <p>${items.company.name}</p>
        </li>`
    }
  })
