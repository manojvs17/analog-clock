function showTime(){
    let h=document.getElementsByClassName('hr')[0];
    let m=document.getElementsByClassName('mn')[0];
    let s=document.getElementsByClassName('sec')[0];
    let date=new Date;
    let hr=date.getHours();
    let mn=date.getMinutes();
    let sec=date.getSeconds();
    let ampm="AM";
    h.style.transform=`rotate(${30*hr + (mn /2)}deg)`;
    m.style.transform=`rotate(${6*mn}deg)`;
    s.style.transform=`rotate(${6*sec}deg)`;
    let result=document.getElementById('digital');
    result.innerHTML=digitalTime();
    function digitalTime(){
        if(hr>12)
        {
            hr-=12;
            hr="0"+hr;
            ampm="PM";
        }
        if(mn<10)
        {
            mn="0"+mn;
        }
        if(sec<10)
        {
            sec="0"+sec;
        }
        return hr+":"+mn+":"+sec+" "+ampm;
    } 
}
setInterval(showTime,1000);
