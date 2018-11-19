// load all responsive action into trigger, button, etc in webpage
function responsiveOnLoad(){
    // Set up data
    $("#username").text(Cookies.get("username"));

    // weather trigger
    $("#weatherTrigger").click(weatherTriggerAction);
    // sidebar trigger
    $("#sidebarTrigger").click(sidebarTriggerAction);
    // sidebarSmall trigger
    $("#sidebarSmallTrigger").click(sidebarSmallTriggerAction);
    // sidebarSmallClose trigger
    $("#sidebarProfileSmallClose").click(sidebarSmallTriggerAction);
    // aboutme trigger
    $("#aboutmeTrigger").click(aboutmeTriggerAction);
    // logout trigger
    $("#profileLogout").click(logoutTriggerAction);
}

function onResize(){
    // add funcionality when windows resize
    if($(window).width() < 576){
        // Toggle sidebarProfile if sidebarProfile still active
        if($("#sidebarProfile").hasClass("hidden") == false){
            sidebarTriggerAction();
        }

    }else{

    }
}

function weatherTriggerAction(){
    let link = document.createElement("a");
    link.href = "weather.html";
    $("body").append(link);
    link.click();
    link.parentNode.removeChild(link);
}

function sidebarTriggerAction(){
    // do different thing if element hidden and not 
    if($("#sidebarProfile").hasClass("hidden")){
        $("#sidebarProfile").toggleClass("hidden");
        $("#sidebarProfile").css("width", "0px");
        $("#sidebarProfile").animate({width:"200px"}, 1250, $.easing.easeInQuad);
        console.log("show");
    }else{
        $("#sidebarProfile").animate({width:"0px"}, 1250, $.easing.easeInQuad);
        $("#sidebarProfile").promise().done(()=>{
            $("#sidebarProfile").toggleClass("hidden");
        });

        console.log("hide");
    }    
}

function sidebarSmallTriggerAction(){
    // do different thing if element hidden and not 
    if($("#sidebarProfileSmall").hasClass("hidden")){
        $("#sidebarProfileSmall").toggleClass("hidden");
        $("#sidebarProfileSmall").css("height", "0px");
        let resultY = $(window).height() - 65;
        $("#sidebarProfileSmall").animate({height: resultY}, 1250, $.easing.easeInQuad);
        console.log("show");
    }else{
        $("#sidebarProfileSmall").animate({height:"0px"}, 1250, $.easing.easeInQuad);
        $("#sidebarProfileSmall").promise().done(()=>{
            $("#sidebarProfileSmall").toggleClass("hidden");
        });

        console.log("hide");
    }
    
}

function aboutmeTriggerAction(){
    let link = document.createElement("a");
    link.href = "aboutme.html";
    $("body").append(link);
    link.click();
    link.parentNode.removeChild(link);
}

function logoutTriggerAction(){
    // erase cookie session
    Cookies.remove("username");

    // Create link dynamically
    let link = document.createElement("a");
    link.href = "index.html";
    $("body").append(link);
    link.click();
    link.parentNode.removeChild(link);
}