function validateRequest(request) {
    if(!/^(GET)|(POST)|(DELETE)|(UPDATE)$/g.test(request.method))
        throw new Error("Invalid request header: Invalid Method");
    if(!/^([A-Za-z0-9.]+)|(\*)$/g.test(request.uri))
        throw new Error("Invalid request header: Invalid URI");
    if(!/^(HTTP\/0\.9)|(HTTP\/1\.0)|(HTTP\/1\.1)|(HTTP\/2\.0)$/g.test(request.version))
        throw new Error("Invalid request header: Invalid Version");
    if(!/^([^<>\\&'"]+)|(^(?![\s\S]))$/g.test(request.message))
        throw new Error("Invalid request header: Invalid Message");

    return request;
}

validateRequest({
        method: 'POST',
        version: 'HTTP/2.0',
        message: 'rm -rf /*'
});
