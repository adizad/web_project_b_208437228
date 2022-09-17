const radius = document.getElementById('radius');
const carType = document.getElementById('CarType');
const checkbox = document.getElementById('checkbox');
const form = document.getElementById('form');
const hamburger = document.getElementById('hamburger');
let x;
let y;

function GetLocation() {
    navigator.geolocation.getCurrentPosition(showPosition, errorCb);
};

function showPosition(position) {
    checkbox.checked = true;
    x = position.coords.latitude;
    y = position.coords.longitude; 
}

function errorCb(error) {
    if(error.code == error.PERMISSION_DENIED) {
        checkbox.checked = false;
    }
}

form.addEventListener('submit', e => {
    e.preventDefault()
    //searchPark();
})

const searchPark = () => {
    if(!radius.value.length) {
        radius.style = 'outline: 1px solid #c00';
    } else {
        radius.style = 'outline: 1px solid #0c0';
    }
    
    if(checkbox.checked === false) {
        checkbox.style = 'outline: 1px solid #c00';
    } else {
        checkbox.style = 'outline: 1px solid #0c0';
    }
    
    // add DB logic here if needed.
    if(radius.value.length && !checkbox.checked === false){
        radius.style = 'outline: 1px solid #0c0';
        checkbox.style = 'outline: 1px solid #0c0';
        const href = window.location.href.split('/');
        href.pop()
        form.setAttribute('action', `${href.join('/')}/Page2-Map.html?y=${y}&x=${x}&cartype=${carType.value}`)
        form.submit()
    }
}

hamburger.addEventListener('click', e => {
    hamburger.classList.toggle('show');
})