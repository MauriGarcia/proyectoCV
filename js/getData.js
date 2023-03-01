fetch('https://randomuser.me/api/?nat=ES')
    .then(response => response.json())
    //.then(json => console.log(json.results[0].name.last))
    .then(function(data) {
        document.getElementById("completeName").innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`
        if (data.results[0].gender === "male") {
            document.getElementById("gender").innerHTML = `Masculino`
        } else {
            document.getElementById("gender").innerHTML = `Femenino`
        }
        document.getElementById("email").innerHTML = `${data.results[0].email}`
        document.getElementById("age").innerHTML = `${data.results[0].dob.age}`
        let date1 = new Date(data.results[0].dob.date)
        document.getElementById("dateBorn").innerHTML = `${date1.getDate()}/${date1.getMonth()}/${date1.getFullYear()}`
        document.getElementById("phone").innerHTML = `${data.results[0].phone}`
        document.getElementById("cell").innerHTML = `${data.results[0].cell}`
        document.getElementById("address").innerHTML = `${data.results[0].location.street.name} ${data.results[0].location.street.number}, ${data.results[0].location.city}, ${data.results[0].location.state}, España.`
        document.getElementById("profileImg").setAttribute("src", `${data.results[0].picture.medium}`)
    })
    .catch(err => console.log(err))