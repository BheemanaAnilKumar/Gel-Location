const Area = document.getElementById("map")


function getLocation() {
  let lattt = localStorage.getItem('lat');
  let longgg = localStorage.getItem('long');
  if(lattt && longgg){
    document.getElementById('getButton').disabled = true;
    document.getElementById('getButton').style.backgroundColor = '#89CFF0';
  }
  else{
    if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition(showPosition);
         }
        else{
          Area.innerHTML = "GeoLocation is not supported by this browser.";
         }
  }
}

let laat="";
let loong="";


function showPosition(position) {
   laat = position.coords.latitude;
   loong = position.coords.longitude;

  localStorage.setItem('lat', JSON.stringify(laat));
  localStorage.setItem('long', JSON.stringify(loong));

 Area.innerHTML = `
          <iframe src="https://maps.google.com/maps?q=${laat}, ${loong}&output=embed" width="800" height="450" frameborder="0" style="border:0"></iframe>
          `
}

function removeLocation(){
  document.getElementById('getButton').disabled = false;
  document.getElementById('getButton').style.backgroundColor = 'blue';
  laat=0;
  loong=0;

  Area.innerHTML = `
          <iframe src="https://maps.google.com/maps?q=${laat}, ${loong}&output=embed" width="800" height="450" frameborder="0" style="border:0"></iframe>
          `
          localStorage.clear();
}
 
