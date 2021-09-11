
// style of body is here

function main(){
    document.getElementById("slider").innerHTML
    slider.style.backgroundColor="blue";
    
}
main();

// style of div

function slide(){
    document.getElementById("slider1").innerHTML
    slider1.style.backgroundColor="black";
    slider1.style.margin="10px";
    slider1.style.padding="15px"
    slider1.style.textAlign="center";
    slider1.style.fontSize="18px"
}
slide()



// style of simple calculator is goes here

// for addition

function topick(){
    let x = document.getElementById("add").value;
    let y = document.getElementById("add1").value;
    x=Number(x)
    y=Number(y)

    let total = document.getElementById("result").innerHTML=(x+y)
   
}

// for subtraction

function toget(){
    let a = document.getElementById("sub").value;
    let b = document.getElementById("sub1").value;
    a=Number(a)
    b=Number(b)

    let total = document.getElementById("total").innerHTML=(a-b)
}

// for multiplication

function totake(){
    let r = document.getElementById("multi").value;
    let s = document.getElementById("multi1").value;
    r=Number(r)
    s=Number(s)

    let total = document.getElementById("answer").innerHTML= (r*s)
}

// for division

function tohold(){
    let t = document.getElementById("divi").value;
    let u = document.getElementById("divi1").value;
    t=Number(t)
    u=Number(u)

    let total = document.getElementById("output").innerHTML=(t/u)
}

// for reminder

function tobring(){
    let v = document.getElementById("remi").value;
    let w = document.getElementById("remi1").value;
    v=Number(v)
    w=Number(w)

    let total = document.getElementById("solution").innerHTML=(v%w)
}

