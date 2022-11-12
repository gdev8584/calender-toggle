var date = new Date();
var today = new Date();
var set = new Set();

function dateRender(){ 
    let xuv=0;
    if(set.has(today.getDate())){
        xuv = 1;
        set.delete(today.getDate())
    }else{
        set.add(today.getDate())
    }
    console.log(set)
    date.setDate(1)
    var dy = date.getDay();
    var endDate = new Date(
        date.getFullYear(),
        date.getMonth() +1,
        0
    ).getDate()

    var day = "";
    for(let x=dy;x>0;x-- ){
        day += "<div>" + " " + "</div>"
    }
    for(let i=1;i<=endDate;i++){
        if(i==today.getDate() && xuv===0){
            day += "<div class='today'>" + i + "</div>";
        }else if(set.has(i)){
            day += "<div class='today'>" + i + "</div>";
        }else{
            day += "<div>" + i + "</div>";
        }
    }
    for(let y=(dy+endDate);y<42;y++){
        day += "<div>" + " " + "</div>";
    }

    document.getElementsByClassName("days")[0].innerHTML = day;
}
dateRender()

const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    let smonth = (document.getElementById("month").value)
    let syear = (document.getElementById("year").value)
    let sdate = (document.getElementById("input").value)
    
    var months = ["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"]
    let m = smonth ==="select"?months[date.getMonth()]:smonth
    let y = syear === "select"?date.getFullYear():syear
    let d = sdate === ""?today.getDate():parseInt(sdate)

    let mc = months.indexOf(m)

    date.setMonth(mc)
    date.setFullYear(y)
    today.setDate(d)
    dateRender()
})
