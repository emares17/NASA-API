//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//  API Key = wQ2BrqSaVPG3uRDnve1jncXd9fewfBmiZXnVPTo4


const apiKey = 'wQ2BrqSaVPG3uRDnve1jncXd9fewfBmiZXnVPTo4';

fetch("https://api.nasa.gov/planetary/apod?&api_key=" + apiKey)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.url
            document.querySelector('.title').innerText = data.title
            document.querySelector('.description').innerText = data.explanation
    
        })


document.querySelector('button').addEventListener('click', getDate)


function getDate() {
    
    let inputDate = document.querySelector('input').value
    
       fetch("https://api.nasa.gov/planetary/apod?date=" + inputDate + "&api_key=" + apiKey)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.url
            document.querySelector('.title').innerText = data.title
            document.querySelector('.description').innerText = data.explanation
    
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}
    



    
    
    
