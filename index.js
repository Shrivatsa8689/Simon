var level=0;
$(document).keypress(function()
{
    if(!level)
    {
        level++;
        $("h1").text("Level "+level);
        play();
    }
})


var colors=["red","yellow","green","coral"];
var randpattern=[];
var userpattern=[];
function play()
{
   var randc=Math.floor(Math.random()*4);
   randpattern.push(colors[randc]);
   userpattern=[];
   $("h1").text("Level "+level);
   $("#"+colors[randc]).fadeIn(200).fadeOut(200).fadeIn(200);
}

$("button").click(function()
{
    var butid=$(this).attr("id");
    userpattern.push(butid);
    animate(butid);
    check();
})

function check()
{
    if(userpattern[userpattern.length-1]==randpattern[userpattern.length-1])
    {
        if(userpattern.length==level)
        {
            level++;
            play();
        }
    }
    else
        gameover();
}

function gameover()
{
    randpattern=[];
    userpattern=[];
    level=0;
    $("h1").text("Wrong button ! .. Press Any key to continue");
    setTimeout(function()
    {
        $("h1").text("Level"+" "+ level);
    },1000)
    
        $("body").addClass("game-over");
        setTimeout(function()
        {
            $("body").removeClass("game-over");
        }, 2000);
    level=1;
    setTimeout(function()
    {
        play();
    },2000)
    
}

function animate(butid)
{
    $("#"+butid).addClass("pressed");
    setTimeout(function()
    {
        $("#"+butid).removeClass("pressed");
    },200);
}



