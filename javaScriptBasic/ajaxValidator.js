function ajaxValidator(inputRows) {
    let hash = inputRows.pop().split("");

    for(let i = 0; i < inputRows.length; i += 3) {
        let methodPattern = /^Method: (GET|POST|PUT|DELETE$)/g;
        let credentialPattern = /^Credentials: (Basic|Bearer) ([a-zA-Z0-9]+$)/g;
        let contentPattern = /^Content: ([a-zA-Z0-9.]+$)/g;

        let methodMatch = methodPattern.exec(inputRows[i]);
        let credentialsMatch = credentialPattern.exec(inputRows[i + 1]);
        let contentMatch = contentPattern.exec(inputRows[i + 2]);

        let resultResponse =  '';

        if(methodMatch && credentialsMatch && contentMatch) {
            let method = methodMatch[1];
            let authenticationType = credentialsMatch[1];
            let authenticationToken = credentialsMatch[2];

            switch (method) {
                case "GET":
                    resultResponse = `Response-Method:${method}&Code:200&Header:${authenticationToken}`;
                    break;
                case "POST":
                case "PUT":
                case "DELETE":
                    if (authenticationType == "Basic") {
                        resultResponse = `Response-Method:${method}&Code:401`;
                    } else {
                        resultResponse = `Response-Method:${method}&Code:200&Header:${authenticationToken}`;
                    }
                    break;
            }

            if(!validateToken(hash, authenticationToken) && resultResponse.indexOf("Header") > 1) {
                resultResponse = `Response-Method:${method}&Code:403`;
            }
        } else {
            resultResponse = "Response-Code:400";
        }

        console.log(resultResponse);

        function validateToken(hash, token) {
            for(let i = 0; i < hash.length; i += 2) {
                let neededOccurences = Number(hash[i]);
                let neededCharacter = hash[i + 1];

                if((token.match(new RegExp(neededCharacter, "g")) || [] ).length == neededOccurences) {
                    return true;
                }
            }

            return false;
        }
    }
}

ajaxValidator([
    'Method: GET',
    'Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd.1782452.278asd',
    'Method: POST',
    'Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    '2q'
]);