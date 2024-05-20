


let apiKey = 'pub_4443486bab1cb3f1d1124664c510cf1cda6f7';
let url = 'https://newsapi.org/v2/everything?q=pakistan';
let card = document.getElementById('card');
        let searchInput = document.getElementById('search');

        async function news(title) {
            let response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_4443486bab1cb3f1d1124664c510cf1cda6f7&q=` + title);
            let data = await response.json();
            console.log(data);

            card.innerHTML = '';  // Clear previous results

            data.results.forEach(element => {
                card.innerHTML += `
                <div class="card">
                    <div class="iframe"><img src="${element.image_url}" alt="News Image"></div>
                    <div class="channel">${element.country}</div>
                    <div class="content">${element.creator}</div>
                    <button class = "btn1"><a href="${element.link}" target="_blank">View Site</a></button>
                </div>`;
            });
        }

        function search() {
            news(searchInput.value);
        }

        // Call news with a default value on page load
        news('sports');