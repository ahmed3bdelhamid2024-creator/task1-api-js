// =========================================Ajax=========================

/*
function getApi() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var result = this.responseText; // string
            var mohamed = JSON.parse(result);
            var basket = "";

            for (var i = 0; i < mohamed.length; i++) {
                var cartoona = `<div class="md:col-4 text-center">
                <img src="${mohamed[i].url}" class="w-100">
                <h5>${mohamed[i].title}</h5>
                <h6>${mohamed[i].id}</h6>
            </div>`;
                basket += cartoona;
            }

            document.querySelector(".test").innerHTML = basket;
        }
    }

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
    xhttp.send();
}

getApi();


*/



//========================================================== fetch1 ========================

/*


function getApi() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(function (result) {
            return result.json();
        })
        .then(function (mohamed) {
            var basket = "";

            for (var i = 0; i < mohamed.length; i++) {
                var cartoona = `<div class="md:col-4 text-center">
                <img src="${mohamed[i].url}" class="w-100">
                <h5>${mohamed[i].title}</h5>
                <h6>${mohamed[i].id}</h6>
            </div>`;
                basket += cartoona;
            }

            document.querySelector(".test").innerHTML = basket;
        });
}

getApi();

*/





//==========================================================



//========================================= fetch2 =============================


async function getApi() {
    var result = await fetch("https://jsonplaceholder.typicode.com/photos");
    var mohamed = await result.json();
    var basket = "";

    for (var i = 0; i < mohamed.length; i++) {
        var cartoona = `<div class="md:col-4 text-center">
                <img src="${mohamed[i].url}" class="w-100">
                <h5>${mohamed[i].title}</h5>
                <h6>${mohamed[i].id}</h6>
            </div>`;
        basket += cartoona;
    }

    document.querySelector(".test").innerHTML = basket;
}

getApi();