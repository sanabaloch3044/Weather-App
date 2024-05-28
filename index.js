

var weatherName = prompt("ENTER YOUR WEATHER: Ex: sunny,rainy.cloudy,lightning,thunderstorm");

if (weatherName == 'sunny'){
    document.write('<div class="card carddd rounded-5 p-4 w-50 m-auto" style="width: 18rem;">'
    +
    '<img src="images/sunny.png" class=" m-auto img-fluid rounded-5 cardimg1" alt="..." width="100vw">'
    +
    '<div class="card-body">' + '<h1 class="card text-center cardtext1 mb-3 p-5">' + 'Its ' +  weatherName + ' today' + '</h1>' 
    + '</div>' + '</div>');
}

else if
    (weatherName == 'cloudy'){
        document.write('<div class="card carddd rounded-5 p-4 w-50 m-auto" style="width: 18rem;">'
        +
        '<img src="images/cloudy.png" class=" m-auto img-fluid rounded-5 cardimg1" alt="..." width="100vw">'
        +
        '<div class="card-body">' + '<h1 class="card text-center cardtext1 mb-3 p-5">' + 'Its ' +  weatherName + ' today' + '</h1>' 
        + '</div>' + '</div>');

    }

    else if
    (weatherName == 'rainy'){
        document.write('<div class="card carddd rounded-5 p-4 w-50 m-auto" style="width: 18rem;">'
        +
        '<img src="images/rainyyy.png" class=" m-auto img-fluid rounded-5 cardimg1" alt="..." width="100vw">'
        +
        '<div class="card-body">' + '<h1 class="card text-center cardtext1 mb-3 p-5">' + 'Its ' +  weatherName + ' today' + '</h1>' 
        + '</div>' + '</div>');

    }

    else if
    (weatherName == 'thunderstorm'){
        document.write('<div class="card carddd rounded-5 p-4 w-50 m-auto" style="width: 18rem;">'
        +
        '<img src="images/thunderstorm.png" class=" m-auto img-fluid rounded-5 cardimg1" alt="..." width="100vw">'
        +
        '<div class="card-body">' + '<h1 class="card text-center cardtext1 mb-3 p-5">' + 'Its ' +  weatherName + ' today' + '</h1>' 
        + '</div>' + '</div>');

    }

    else if
    (weatherName == 'lightning'){
        document.write('<div class="card carddd rounded-5 p-4 w-50 m-auto" style="width: 18rem;">'
        +
        '<img src="images/lightning.png" class=" m-auto img-fluid rounded-5 cardimg1" alt="..." width="100vw">'
        +
        '<div class="card-body">' + '<h1 class="card text-center cardtext1 mb-3 p-5">' + 'Its ' +  weatherName + ' today' + '</h1>' 
        + '</div>' + '</div>');

    }

    else{
        document.write('<div class="card carddd rounded-5 p-4 w-50 m-auto" style="width: 18rem;">'
        +
        '<img src="images/pngwing.com (1).png" class=" m-auto img-fluid rounded-5 cardimg1" alt="..." width="100vw">'
        +
        '<div class="card-body">' + '<h1 class="card text-center cardtext1 mb-3 p-5">' + 'Do not ' + 'disturb ' + '</h1>' 
        + '</div>' + '</div>');
    }
