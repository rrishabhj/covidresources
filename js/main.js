$(document).ready(function () {
    
    
});

params = {
    "location": "Delhi",
    "search_criteria": ["beds", "icu"],
    "exclusion": ["needed", "required"],
    "verified_tweet": false
    // i dont need verified tweets flag, will be implementing it in all URLs
}

constant_parameters = {
    "args": ["verified"]
}

function getTwitterUrl(params, constant_parameters) {
    url = "https://twitter.com/search?q="
    url = url + constant_parameters["args"].join("+")
    url = url + "+"+ params["location"] + "("
    url = url + params["search_criteria"].join("+OR+") + ")"
    for (var i in params["exclusion"]){
        string_literal = "-\""+params["exclusion"][i]+"\""
        url = url + string_literal
    }
    url = url + "&f=live"
    return url
}