function getData(){
    var enteredgif = document.getElementById("addtype").value;
    console.log(enteredgif)
    document.getElementById("giphyme").innerHTML = ""
    request = new XMLHttpRequest;
    request.open('GET', 'http://api.giphy.com/v1/gifs/search?q='+enteredgif+'&api_key=HvWrZWWHHKtPa376l5XiBRTbQFA9o9tS', true);
    request.onload = function() {
		if (request.status >= 200 && request.status < 400){
            let dataItems = JSON.parse(request.responseText).data;
            console.log(dataItems)
            dataItems.forEach(element => {
                let gif = element["images"]["downsized"]["url"]
                let title = element["title"]
                console.log(gif)
                document.getElementById("giphyme").innerHTML += '<center><h3>'+title+'</h3><img src = "'+gif+'"></center>';            }); 
            //console.log(title);
			//document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
        } else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
    }
    //console.log(enteredgif);

