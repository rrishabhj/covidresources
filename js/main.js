function url_generator(city="delhi", args = []) {
    added_args = ["verified", "covid"];
    added_args.push(city);
    url = "https://twitter.com/search?q="+added_args.join("+")+"("+args.join("+OR+")+")";
    return url
}

console.log(url_generator(city="pune", args=["beds", "oxygen"]))
