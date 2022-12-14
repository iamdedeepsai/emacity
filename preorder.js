let airem = 0;
let waterem = 0;
let cost = 0;

let selected = "AirEm";

function cls() {
    document.getElementById('popup').style.display = 'none'
}

function change() {
    let e = document.getElementById("ret");
    let text = e.options[e.selectedIndex].text;

    switch (text) {
        case "AirEm":
            selected = "AirEm";
            document.getElementById("image2").style.display = "none";
            document.getElementById("image1").style.display = "block";

            document.getElementById("model").innerText = "Model: AirEm";
            document.getElementById("cost").innerText = "Upfront cost: $119";
            document.getElementById("sub").innerText = "Subscription cost: $9/monthly";
            break;
        case "WaterEm":
            selected = "WaterEm";
            document.getElementById("image1").style.display = "none";
            document.getElementById("image2").style.display = "block";

            document.getElementById("model").innerText = "Model: WaterEm";
            document.getElementById("cost").innerText = "Upfront cost: $299";
            document.getElementById("sub").innerText = "";
            break;
    }
}

function addNo(n) {
    let num = parseInt(document.getElementById(n).value);

    if (isNaN(num)) {
        switch (n) {
            case "quantityA":
                airem = 0;
                cost = 119 * airem + 299 * waterem;
                break;
            case "quantityW":
                waterem = 0;
                cost = 119 * airem + 299 * waterem;
                break;
        }
        document.getElementById('total').innerText = "Total cost: $" + cost;
        return;
    }

    if (num < 0) {
        document.getElementById(n).value = 0;
        console.log(num <= 0);
        return;
    }

    switch (n) {
        case "quantityA":
            airem = num;
            cost = 119 * airem + 299 * waterem;
            break;
        case "quantityW":
            waterem = num;
            cost = 119 * airem + 299 * waterem;
            break;
    }

    document.getElementById('total').innerText = "Total cost: $" + cost;
}

function ord() {
    let a = document.getElementById('quantityA');
    let b = document.getElementById('quantityW');
    let c = document.getElementById('email');

    if (parseInt(a.value) === 0 && parseInt(b.value) === 0) {
        return;
    } else if (c.value === "") {
        return
    }

    $.ajax({
        url:'https://api.apispreadsheets.com/data/0SJQBMU4880uFYYx/',
        type:'post',
        data:$("#form").serializeArray(),
        success: function(){
            custombg5();
        },
        error: function(){
            custombg4();
        }
    });
    cls();
    airem = 0;
    waterem = 0;
    cost = 0;
}