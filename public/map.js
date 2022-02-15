let opt = {
    center: {
        lat: 53.084294,
        lng: 70.299665
    },
    zoom: 16,
}
let pos = {
    lat: 53.084294,
    lng: 70.299665
}

function initMap() {
    var myMap = new google.maps.Map(document.getElementById("map"), opt);

    var marker = new google.maps.Marker({
        position: pos,
        map: myMap,
        title: 'Привет',
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });
    var info = new google.maps.InfoWindow({
        content: '<h3>База отдыха</h3><p style="color: #219653;">Подворье</p>'
    });
    marker.addListener("click", function () {
        info.open(myMap, marker);
    })

}