function getUserInput(){
    var userInput = document.getElementById("userInput").value
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + userInput + "') and u='c'"
    var endpoint="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + userInput + "%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    fetch(endpoint)
    .then(function(data){
        return data.json();
    })
    .then(function(json){
        console.log(json);
        
        var title = document.createElement("h1");
        title.setAttribute("id", "header")
        title.style.textTransform = "uppercase"
        title.style.letterSpacing = "15px"
        title.innerHTML = json.query.results.channel.location.city + "<br>" + '<span id="region">' + json.query.results.channel.location.region + ", " + json.query.results.channel.location.country + "</span><br><br><br>"
        document.body.appendChild(title)
        
        var region = document.createElement("p")
        region.setAttribute("id", "region")
        region.style.textTransform = "uppercase"
        region.style.letterSpacing = "15px"
        // region.innerHTML = json.query.results.channel.location.region + ", " + json.query.results.channel.location.country
        // document.body.appendChild(region)
        
        var datePath = json.query.results.channel.item.condition.date;
        var date = document.createElement("p")
        date.innerHTML = '<span class="glyphicon glyphicon-calendar"></span><span id="spandate">Date</span> ' + datePath
        date.style.color = "black"
        date.style.fontSize = "30px"
        date.style.fontFamily = '"Open Sans", sans-serif'
        document.body.appendChild(date)
        
        var tempPath = json.query.results.channel.item.condition.temp;
        var temp = document.createElement("p")
        temp.innerHTML = '<span class="glyphicon glyphicon-globe"></span><span id="spantemp">Temperature</span> ' + tempPath + "&deg; Fahrenheit"
        temp.style.color = "black"
        temp.style.fontSize = "30px"
        temp.style.fontFamily = '"Open Sans", sans-serif'
        document.body.appendChild(temp)
        
        var humPath = json.query.results.channel.atmosphere.humidity
        var hum = document.createElement("p")
        hum.innerHTML = '<span class="glyphicon glyphicon-tint"></span><span id="spanhum">Humidity</span> ' + humPath + "%"
        hum.style.color = "black"
        hum.style.fontSize = "30px"
        hum.style.fontFamily = '"Open Sans", sans-serif'
        document.body.appendChild(hum)
        
        var visPath = json.query.results.channel.atmosphere.visibility
        var vis = document.createElement("p")
        vis.innerHTML = '<span class="glyphicon glyphicon-eye-open"></span><span id="spanvis">Visibility</span> ' + visPath + " miles"
        vis.style.color = "black"
        vis.style.fontSize = "30px"
        vis.style.fontFamily = '"Open Sans", sans-serif'
        document.body.appendChild(vis)
        
        var sunPath = json.query.results.channel.astronomy.sunrise
        var sun = document.createElement("div")
        sun.setAttribute("class", "col-ms-4")
        sun.innerHTML = '<span id="spansun">Sunrise</span><br>' + sunPath
        sun.style.color = "black"
        sun.style.fontSize = "30px"
        sun.style.fontFamily = '"Open Sans", sans-serif'
        document.body.appendChild(sun)
        
        var nightPath = json.query.results.channel.astronomy.sunset
        var night = document.createElement("div")
        night.setAttribute("class", "col-ms-4")
        night.setAttribute("id", "night")
        night.innerHTML = '<span id="spannight">Sunset</span><br>' + nightPath
        night.style.color = "black"
        night.style.fontSize = "30px"
        night.style.fontFamily = '"Open Sans", sans-serif'
        document.body.appendChild(night)
        
        var textPath = json.query.results.channel.item.condition.text;
        var text = document.createElement("p")
        text.setAttribute("id", "spantext")
        text.innerHTML = textPath
        text.style.color = "black"
        text.style.fontSize = "30px"
        text.style.fontFamily = '"Open Sans", sans-serif'
        document.body.appendChild(text)
        
        
        

    })
    
    function hideInput() {
        var input = document.getElementById("start")
        input.style.display = "none"
    }
    hideInput()
    
    function showInput() {
        var input = document.getElementbyId("start")
        input.style.display = "block"
    }
    
}


// glyphicon glyphicon-tint = humidity
// glyphicon glyphicon-eye-open = visibility
// glyphicon glyphicon-calendar = date
// glyphicon glyphicon-globe = temperature
