// global variable containing database of weather condition near gading serpong
// -6.262829, 106.592597(bottom) -6.213887, 106.667352(top)
// will be updated for each 1 hour
let dummy = '{"cod":"200","calctime":0.3107,"cnt":15,"list":[{"id":2208791,"name":"Yafran","coord":{"lon":12.52859,"lat":32.06329},"main":{"temp":9.68,"temp_min":9.681,"temp_max":9.681,"pressure":961.02,"sea_level":1036.82,"grnd_level":961.02,"humidity":85},"dt":1485784982,"wind":{"speed":3.96,"deg":356.5},"rain":{"3h":0.255},"clouds":{"all":88},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}]},{"id":2208425,"name":"Zuwarah","coord":{"lon":12.08199,"lat":32.931198},"main":{"temp":15.36,"temp_min":15.356,"temp_max":15.356,"pressure":1036.81,"sea_level":1037.79,"grnd_level":1036.81,"humidity":89},"dt":1485784982,"wind":{"speed":5.46,"deg":30.0002},"clouds":{"all":56},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}]},{"id":2212771,"name":"Sabratah","coord":{"lon":12.48845,"lat":32.79335},"main":{"temp":15.31,"temp_min":15.306,"temp_max":15.306,"pressure":1037.05,"sea_level":1037.55,"grnd_level":1037.05,"humidity":100},"dt":1485784982,"wind":{"speed":6.71,"deg":28.5002},"clouds":{"all":92},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}]},{"id":2217362,"name":"Gharyan","coord":{"lon":13.02028,"lat":32.172218},"main":{"temp":11.23,"temp_min":11.231,"temp_max":11.231,"pressure":1004.23,"sea_level":1037.06,"grnd_level":1004.23,"humidity":90},"dt":1485784982,"wind":{"speed":3.86,"deg":16.5002},"rain":{"3h":1.29},"clouds":{"all":92},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}]},{"id":2216885,"name":"Zawiya","coord":{"lon":12.72778,"lat":32.75222},"main":{"temp":17,"pressure":1024,"humidity":55,"temp_min":17,"temp_max":17},"dt":1485784982,"wind":{"speed":3.6,"deg":10},"clouds":{"all":40},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]},{"id":2210247,"name":"Tripoli","coord":{"lon":13.18746,"lat":32.875191},"main":{"temp":16,"pressure":1025,"humidity":59,"temp_min":16,"temp_max":16},"dt":1485781822,"wind":{"speed":3.6,"deg":360},"clouds":{"all":40},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]},{"id":2210221,"name":"Tarhuna","coord":{"lon":13.6332,"lat":32.43502},"main":{"temp":17,"pressure":1024,"humidity":55,"temp_min":17,"temp_max":17},"dt":1485784982,"wind":{"speed":3.6,"deg":10},"clouds":{"all":40},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]},{"id":2215163,"name":"Masallatah","coord":{"lon":14,"lat":32.616669},"main":{"temp":12.86,"temp_min":12.856,"temp_max":12.856,"pressure":1000.17,"sea_level":1036.49,"grnd_level":1000.17,"humidity":73},"dt":1485784982,"wind":{"speed":4.81,"deg":16.5002},"rain":{"3h":0.39},"clouds":{"all":88},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}]},{"id":2219905,"name":"Al Khums","coord":{"lon":14.26191,"lat":32.648609},"main":{"temp":15.18,"temp_min":15.181,"temp_max":15.181,"pressure":1023.35,"sea_level":1036.01,"grnd_level":1023.35,"humidity":73},"dt":1485784982,"wind":{"speed":5.26,"deg":26.0002},"clouds":{"all":88},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}]},{"id":2208485,"name":"Zlitan","coord":{"lon":14.56874,"lat":32.467381},"main":{"temp":15.18,"temp_min":15.181,"temp_max":15.181,"pressure":1023.35,"sea_level":1036.01,"grnd_level":1023.35,"humidity":73},"dt":1485784982,"wind":{"speed":5.26,"deg":26.0002},"clouds":{"all":88},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}]},{"id":2563191,"name":"Birkirkara","coord":{"lon":14.46111,"lat":35.897221},"main":{"temp":14,"pressure":1023,"humidity":62,"temp_min":14,"temp_max":14},"dt":1485784991,"wind":{"speed":4.1,"deg":10,"var_beg":330,"var_end":30},"clouds":{"all":40},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]},{"id":2523650,"name":"Ragusa","coord":{"lon":14.71719,"lat":36.928242},"main":{"temp":14.54,"pressure":1022,"humidity":50,"temp_min":13,"temp_max":16},"dt":1485781816,"wind":{"speed":3.1,"deg":20,"var_beg":350,"var_end":60},"clouds":{"all":20},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}]},{"id":2523693,"name":"Pozzallo","coord":{"lon":14.84989,"lat":36.730541},"main":{"temp":14,"pressure":1022,"humidity":50,"temp_min":14,"temp_max":14},"dt":1485781816,"wind":{"speed":3.1,"deg":20,"var_beg":350,"var_end":60},"clouds":{"all":20},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}]},{"id":2524119,"name":"Modica","coord":{"lon":14.77399,"lat":36.84594},"main":{"temp":15.74,"pressure":1022,"humidity":47,"temp_min":14,"temp_max":17},"dt":1485785168,"wind":{"speed":2.1,"deg":0},"clouds":{"all":40},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]},{"id":2523581,"name":"Rosolini","coord":{"lon":14.94779,"lat":36.824242},"main":{"temp":15.62,"pressure":1022,"humidity":47,"temp_min":14,"temp_max":17},"dt":1485784979,"wind":{"speed":2.1,"deg":0},"clouds":{"all":40},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]}]}';
let testData;

function weatherOnLoad(){
    // generate weather table data
    setInterval(requestWeatherData(), 1000*15);

    // attach event openDetailModal to every detailButton
    $("[id=detailButton]").click(prepareDetailModal);
}


// this is function to request weather data when page load or per interval
function requestWeatherData(){
    let weatherDatabase = store.get('weatherDatabase');

    // will be call if only already pas 1 hour after calling this function
    let key = '96971bf6cd0e149c9760bcc58c32bf9c';
    let bbox = '105.825024,-6.918643,107.208119,-6.181613,20';
    let address = 'https://api.openweathermap.org/data/2.5/box/city?bbox='
    +bbox+'&units=metric&APPID='+key;

    let trycount = 0; 
    let maxtry = 3;

    let request = $.ajax({method: "GET", url: address, dataType: "json"}).
    done((response)=>{
        weatherDatabase = response.list;
        console.log(weatherDatabase);
        store.set('weatherDatabase', weatherDatabase);
    }).fail((xhr, status, err)=>{
        console.log("fail")
        console.log(status);
        if(status == 'timeout'){
            trycount++;
            console.log("try: " + trycount);
            if(trycount < maxtry){
                $.ajax(this);
                return;
            }
            return;
        }
    });

    // generateWeatherData automatically
    if(weatherDatabase != undefined)
        generateWeatherData(weatherDatabase);
}

// generate database
function generateWeatherData(weatherDatabase){
    // erase all previous body
    $("#tableBody").remove("tr");

    // create table body
    for(let i in weatherDatabase){
        let data = weatherDatabase[i];
        console.log(data);

        // create new row
        let newRow = document.createElement("tr");
        $(newRow).addClass("table-light d-flex justify-content-start");

        // create th in newRow
        let newth = document.createElement("th");
        $(newth).addClass("flex-fill col-1 textTruncate");
        $(newth).attr("scope", "row");
        let number = parseInt(i)+1;
        $(newth).text(number);

        // create td in newRow
        // td img
        let newImg = document.createElement("td");
        $(newImg).addClass("flex-fill col");
        // Weather Image
        let weatherImg = document.createElement("img");
        let imgSrc = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        $(weatherImg).addClass("fluid-img weatherImg center");
        $(weatherImg).attr("src", imgSrc);
        // add weather image into td img
        $(newImg).append(weatherImg);

        // td coord
        let newCoord = document.createElement("td");
        $(newCoord).addClass("flex-fill col textTruncate");
        let coord = data.coord.Lat + ", " + data.coord.Lon;
        $(newCoord).text(coord);

        // td detail
        let newDetail = document.createElement("td");
        $(newDetail).addClass("flex-fill col-2 textTruncate");
        // button detail
        let buttonDetail = document.createElement("button");
        $(buttonDetail).addClass("detailButton center");
        $(buttonDetail).attr({'type': 'button', 'id' : 'detailButton', 'name': data.name});
        $(buttonDetail).text("Detail");
        // add button detail into td detail
        $(newDetail).append(buttonDetail);

        // add all th and td into tr
        $(newRow).append(newth);
        $(newRow).append(newImg);
        $(newRow).append(newCoord);
        $(newRow).append(newDetail);

        // add newRow into tableBody
        $("#tableBody").append(newRow);
    }
}

// this is function that detail button will have
// prepare detail for modal when detailButton clicked
function prepareDetailModal(event){
    let cityName = $(event.target).attr("name");
    let weatherDatabase = store.get("weatherDatabase");
    
    for(let i in weatherDatabase){
        if(weatherDatabase[i].name == cityName){
            openDetailModal(weatherDatabase[i]);
            break;
        }
    }
}

// open detailModal with detail in that button row
function openDetailModal(weatherDetail){
    console.log("Show Detail");
    // get all detail data
    let cityName = weatherDetail.name;
    let coord = weatherDetail.coord.Lat + ", " + weatherDetail.coord.Lon;
    let temperature = weatherDetail.main.temp;
    let temperatureMin = weatherDetail.main.temp_min;
    let temperatureMax = weatherDetail.main.temp_max;
    let moisture = weatherDetail.main.humidity;
    let windDeg = weatherDetail.wind.deg;
    let windSpeed = weatherDetail.wind.speed;

    let text;

    // Manipule all data inside
    $("#detailModalCityName").empty();
    text = document.createElement("p");
    $(text).addClass("text-center");
    $(text).text(cityName);
    $("#detailModalCityName").append(text);

    $("#detailModalCoord").empty();
    text = document.createElement("p");
    $(text).addClass("text-center");
    $(text).text(coord);
    $("#detailModalCoord").append(text);

    $("#detailModalTempMin").empty();
    text = document.createElement("p");
    $(text).addClass("text-center");
    $(text).text("Min : "+temperatureMin+" celcius");
    $("#detailModalTempMin").append(text);

    $("#detailModalTemp").empty();
    text = document.createElement("p");
    $(text).addClass("text-center");
    $(text).text("Current : "+temperature+" celcius");
    $("#detailModalTemp").append(text);

    $("#detailModalTempMax").empty();
    text = document.createElement("p");
    $(text).addClass("text-center");
    $(text).text("Max : "+temperatureMax+" celcius");
    $("#detailModalTempMax").append(text);

    $("#detailModalMoist").empty();
    text = document.createElement("p");
    $(text).addClass("text-center");
    $(text).text(moisture);
    $("#detailModalMoist").append(text);

    $("#detailModalWind").empty();
    text = document.createElement("p");
    $(text).addClass("text-center");
    $(text).text("Speed : "+windSpeed);
    $("#detailModalWind").append(text);

    $("#detailModalWindDeg").empty();
    text = document.createElement("p");
    $(text).addClass("text-center");
    $(text).text("Degree : "+windDeg);
    $("#detailModalWindDeg").append(text);

    // show modal
    $("#detailModal").modal("show");
}

// this is function that generate data by city name
function searchBy(anything){

}