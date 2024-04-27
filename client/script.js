const input = document.getElementById('cityInput');
const button = document.getElementById('submitButton')
input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        button.click();
    }
});

button.addEventListener('click', async function () {
    var city = input.value;
    const response = await fetch(`/weather?city=${city}`)
    if (response.status === 200) {
        const data = await response.json();
        const result = document.getElementById('result')
        result.innerHTML = '';
        const divs = [];
        for (i = 0; i < 6; i++) {
            divs[i] = document.createElement('div');
            divs[i].id = `id${i + 1}`
        }
        result.appendChild(divs[0])
        result.appendChild(divs[3])
        divs[0].appendChild(divs[1])
        divs[0].appendChild(divs[2])
        divs[3].appendChild(divs[4])
        divs[3].appendChild(divs[5])
        const icon = data['weather']['icon']
        const weather = data['weather']['main']
        const temp = data['temp'] + ' C'
        divs[1].style.backgroundImage = `url('https://openweathermap.org/img/wn/${icon}@2x.png')`
        divs[2].textContent = weather
        divs[5].textContent = temp


    }
    else if (response.status === 400) {
        const result = document.getElementById('result')
        result.innerHTML = "<h2>Internet connectivity issue</h2>";
    }
    else {
        const result = document.getElementById('result')
        result.innerHTML = "<h2>city not found</h2>";
    }

});
