function angularParser(input) {
    let date = {};
    let cachedData = {};
    for(let i = 0; i < input.length; i++) {
        let moduleRegex = /^\$app='(.+)'$/g;
        let controllerRegex = /\^$controller='(.+)'&app='(.+)'$/g;
        let moduleRegex = /^\$model='(.+)'&app='(.+)'$/g;
        let viewRegex = /^\$view='(.+)'&app='(.+)'$/g;
    }
}

angularParser(
    [
        "$app='MyApp'",
        "$controller='My Controller'&app='MyApp'",
        "$model='My Model'&app='MyApp'",
        "$view='My View'&app='MyApp'"
    ]
);