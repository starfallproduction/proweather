var database = JSON.parse('[{"name": "user","password": "uaspti"},{"name": "ryan","password": "ryan"}]');

function OnLoad(){
    // check if session still active
    let username = Cookies.get("username");
    if(username != null){
        Cookies.set("username", username, {expires: 1});
        let link = document.createElement("a");
        link.href = "weather.html";
        $("body").append(link);
        link.click();
        link.parentNode.removeChild(link);
    }

    // Assign submit button some event
    $("#submit").click(OnSubmit);
}

function OnSubmit(){
    event.preventDefault();
    console.log("prevent default");
    let username = $("#username").val();
    let password = $("#password").val();

    for(let data in database){
        if(username == database[data].name && password == database[data].password){
            console.log("pass");
            Cookies.set("username", username, {expires: 1});
            let link = document.createElement("a");
            link.href = "weather.html";
            $("body").append(link);
            link.click();
            link.parentNode.removeChild(link);
            break;
        }   
    }
}