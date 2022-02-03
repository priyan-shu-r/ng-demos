var m=0;
var y=0;

function start()
{
    y=setInterval(run, 1000);
    console.log("start"+y);


    function run()
    {
        if(m==1200)
        {
            clearInterval(x);
            m=0;
        }
        else
        {
            m+=20;
            var x= document.getElementById("im");
            x.style.marginLeft=m+'px';
        }
        console.log("run"+y);
    }
    
}

function stop()
{
    clearInterval(y);
}

