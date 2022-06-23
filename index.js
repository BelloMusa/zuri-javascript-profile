let fullName = prompt('What is your full name')
let height = prompt('What is your height')
let country = prompt('Name of Your country')



document.getElementById('fullName').innerHTML = `Fullname:: ${fullName}`
document.getElementById('height').innerHTML = `Height (inches):: ${height}`
document.getElementById('country').innerHTML = `Country:: ${country}`
