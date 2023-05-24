const date = new Date();

let dates = document.querySelector(".date");
dates.innerHTML = date.getDate();

let month = document.querySelector(".month");
month.innerHTML = date.getMonth()+1;

let year =  document.querySelector(".year");
year.innerHTML = date.getFullYear();

let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let seco = document.querySelector(".seconds");

function clock(){
    let date = new Date();
    hour.innerHTML= date.getHours();
    min.innerHTML = date.getMinutes();
    seco.innerHTML = date.getSeconds();
}
setInterval(clock,1000);

let sun = document.querySelector(".sun");
let mon = document.querySelector(".mon");
let tus = document.querySelector(".tus");
let wen = document.querySelector(".wen");
let th = document.querySelector(".th");
let fri = document.querySelector(".fri");
let sat = document.querySelector(".sat");

let day = date.getDay();
console.log(day);
switch(day){
    case 0:
        sun.setAttribute('checked','checked');
        sun.removeAttribute('disabled');
        break;
        case 1:
            mon.setAttribute('checked','checked');
             mon.removeAttribute('disabled');

            break;
            case 2:
                tus.setAttribute('checked','checked');
                tus.removeAttribute('disabled');
                break;
                case 3:
                    wen.setAttribute('checked','checked');
                    wen.removeAttribute('disabled');

                    break;
                    case 4:
                        th.setAttribute('checked','checked');
                         th.removeAttribute('disabled');

                        break;
                        case 5:
                            fri.setAttribute('checked','checked');
                            fri.removeAttribute('disabled');

                            break;
                            case 6:
                                sat.setAttribute('checked','checked');
                                  sat.removeAttribute('disabled');
                                break;
}

let am = document.querySelector(".am");
let pm  = document.querySelector(".pm");

let hours = date.getHours();

if(hours <12){
    am.setAttribute('checked','checked');
    am.removeAttribute('disabled');
}
else{
    pm.setAttribute('checked','checked');
    pm.removeAttribute('disabled');
}