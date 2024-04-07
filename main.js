const root = document.querySelector('.window');

function updateTime(){
    let date = new Date();

    root.innerHTML = date.getDate() + "d " + date.getHours() +"h " +  date.getMinutes() + "m " + date.getSeconds() + "s ";
}

setInterval(updateTime, 1000)