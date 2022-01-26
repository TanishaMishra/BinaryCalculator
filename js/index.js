var a=document.getElementById("btn0");
var b=document.getElementById("btn1");
var c=document.getElementById("btnClr");
var e=document.getElementById("btnEql");
var sum=document.getElementById("btnSum");
var sub=document.getElementById("btnSub");
var mul=document.getElementById("btnMul");
var div=document.getElementById("btnDiv");
var r=document.getElementById("res");
var x='';
a.onclick=function(){
    x+='0';
    r.innerHTML=x;
}
b.onclick=function(){
    x+='1';
    r.innerHTML=x;
}
sum.onclick=function(){
    x+='+';
    r.innerHTML=x;
}
sub.onclick=function(){
    x+='-';
    r.innerHTML=x;
}
mul.onclick=function(){
    x+='*';
    r.innerHTML=x;
}
div.onclick=function(){
    x+='/';
    r.innerHTML=x;
}
c.onclick=function(){
    x='';
    r.innerHTML=x;
}
e.onclick=function(){
    var t1='';
    var t2='';
    var p1,p2,p3;
    var o,i;
    for(i=0;i<x.length;i++)
    {
         if(x[i]=='+'||x[i]=='-'||x[i]=='*'||x[i]=='/')
             {
                 o=x[i];
                 i++;
                 break;
             }
        else
            {
                t1+=x[i];
            }
    }
    while(i<x.length)
        {
            t2+=x[i];
            i++;
        }
    p1=parseInt(t1, 2);
    p2=parseInt(t2, 2);
    if(o=='+')
        {
            p3=p1+p2;
        }
    else if(o=='-')
        {
            p3=p1-p2;
        }
    else if(o=='*')
        {
            p3=p1*p2;
        }
    else if(o=='/')
        {
            p3=Math.floor(p1/p2);
        }
    x=p3.toString(2);
    r.innerHTML=x;
}