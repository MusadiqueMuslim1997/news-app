


let apiKey = 'pub_4443486bab1cb3f1d1124664c510cf1cda6f7';
let url = 'https://newsapi.org/v2/everything?q=pakistan';

let vid = document.getElementById("vid")
async function news() {
    let response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_4443486bab1cb3f1d1124664c510cf1cda6f7&q=cricket `)
    let data = await response.json();
    console.log(data);
    vid.innerHTML = data.results[0].source_url;

}
news()