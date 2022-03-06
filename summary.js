
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const currentUrl = window.location.href;

var url = new URL(currentUrl);
var article = url.searchParams.get("article");

// console.log(article);

var raw = JSON.stringify({
  "ARTICLE": article,
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://921c-34-74-47-59.ngrok.io/fastData", requestOptions)
  .then(response => response.json())
  .then(result => showData(result))
  .catch(error => console.log('error', error));





function showData(data) {
    console.log(data);
    document.getElementsByName("summary")[0].value = data.summary;
    document.getElementsByName("readScore")[0].value = data.readScore;
    document.getElementsByName("smogScore")[0].value = data.smogScore;

    fetch("http://921c-34-74-47-59.ngrok.io/slowData", requestOptions)
    .then(response => response.json())
    .then(result => showSlowData(result))
    .catch(error => console.log('error', error));
}

function yesOrNo(value) {
    console.log(value);
    if(value) return "   Yes";
    else return "   No";
}

function showSlowData(data) {
    document.getElementsByName("cookies")[0].value = yesOrNo(data.cookies);
    document.getElementsByName("personal")[0].value = yesOrNo(data.doesStorePersonalData);
    document.getElementsByName("world")[0].value = yesOrNo(data.dataAroundWorld);
    document.getElementsByName("activity")[0].value = yesOrNo(data.doTrackYour);

    
}
