function decodeJwtResponse(jwt) {
    const base64Url = jwt.split('.')[1];
    const payLoad = JSON.parse(atob(base64Url))
    return payLoad;
}
function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);
    sendDataToServer(responsePayload);
}

function sendDataToServer(responsePayload) {
    fetch('/getData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(responsePayload)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        window.location.href = data.url;
    })
}