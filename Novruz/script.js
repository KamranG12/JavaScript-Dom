function myFunction() {
    var m = new Date();
    var n = m.getMinutes();
    var d = 60-n;
    if(d==60){
        d=0;
        document.getElementById("deqiqe").innerHTML ='deqiqe: ' + d;
    }else{
    document.getElementById("deqiqe").innerHTML ='deqiqe: ' + d;
    };
    var x = new Date();
    var y = x.getHours();
    var z = 0;
    if(d==60){
        z = 24 - y;
        document.getElementById("saat").innerHTML ='saat: '+ z;
    }else{
        z = 23 - y;
        document.getElementById("saat").innerHTML ='saat: '+ z;
    };
    var a = new Date();
    var b = a.getDate();
    var c = 0;
    if(z==24 && d==60){
        c = 20 - b;
        document.getElementById("gun").innerHTML ='gun: '+ c;
    }else{
        c = 19 - b;
        document.getElementById("gun").innerHTML ='gun: '+ c;
    };
}