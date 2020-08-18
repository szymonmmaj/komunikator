
 var client = null;

function showMessage(value) {

    var newResponse = document.createElement('p');

    response.appendChild(document.createTextNode(value));

    var response = document.getElementById('repose');

    response.appendChild(newResponse);



}

function connect() {
    client = Stomp.client('ws://localhost8080/message');
    client.connect({}, function (frame) {
        client.subscribe("/topic/information", function (message) {

            showMessage(JSON.parse(message.body).value)
        });
    })

    function sendMessage() {
        //Client.prototype.send = function(destination, headers, body)
        var messageToSend = document.getElementById('messageToSend').value;
        client.send("/app/message", {}, JSON.stringify({'value': messageToSend}));


    }
}