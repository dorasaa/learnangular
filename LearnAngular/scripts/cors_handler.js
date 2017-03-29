function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    }
    else if (typeof XDomainRequest != "undefined") {

        xhr = new XDomainRequest();
        xhr.open(method, url);

    }
    else {
        xhr = null;
    }
    return xhr;
}
var xhr = createCORSRequest('GET', url);
if (!xhr) {
    throw new Error('CORS not supported');
}
