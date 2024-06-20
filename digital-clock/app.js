const hour = document.querySelector('#hour');
const min = document.querySelector('#minutes');
const sec = document.querySelector('#seconds');
const am_pm = document.querySelector('#time');

function updateTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let time = "AM";
    if(h>12){
        h = h-12;
        time = "PM"
    }

    if(h<10){
        h = '0'+h;
    }else{
        h=h;
    }
    if(m<10){
        m = '0'+m;
    }else{
        m=m;
    }
    if(s<10){
        s = '0'+s;
    }else{
        s=s;
    }

    hour.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    am_pm.innerText = time;
    
    setTimeout(() => {
       updateTime(); 
    }, 1000);
}
updateTime();