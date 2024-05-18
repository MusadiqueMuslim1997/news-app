


let apiKey = '7c21d020c7be4608b7816af5393971dd';
let url = 'https://newsapi.org/v2/everything?q=tesla';


async function news(){
    let response = await fetch(url + `&apiKey=${apiKey}`)
    let data = await response.json();
    console.log(data);
}
news()