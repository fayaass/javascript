// var a=10
// var a=20
// alert(a)

// let a=10
// a=20

// const a=10
// a=20

// console.log(a);


// var let const


// let a=10.20
// let a="welcome"
// let a="123"
// let a=[1,2,3,['abc']]
// let a={name:"fayas",age:22}
// let a=null  for null values
// let a=false for false value

// console.log(typeof a);


// operators

// arithmetic -,*,/,**,++,--,+

// console.log(10+5)
// console.log(10-5)
// console.log(1085)

// a=10
// ++a
// ++a
// console.log(a)


// assignment =,+=,-=,*=,/=,**+

// console.log(10=="10");
// console.log(10==="10")

// console.log(10!="11");
// console.log(10!="10");

// console.log(10==10 && 10==11); and
// console.log(10==10 || 10==11); or


// function fun1(){


        // Number

    // let a=parseInt(document.getElementById("demo").value)
    // let h3=document.getElementById("h3")
    // h3.innerHTML=a

         // text


    // let a=document.getElementById("demo").value
    // let h3=document.getElementById("h3")
    // h3.innerHTML=a

    // console.log(typeof a);
    // console.log(a)

    // console.log('welcome')

// }

function add(){
    let a=parseInt(document.getElementById("add1").value)
    let b=parseInt(document.getElementById("add2").value)
    console.log(a+b);
    let h3=document.getElementById("h3")
    h3.innerHTML=a+b
}

function sub(){
    let a=parseInt(document.getElementById("sub1").value)
    let b=parseInt(document.getElementById("sub2").value)
    console.log(a-b);
    let h3=document.getElementById("h4")
    h3.innerHTML=a-b
}

function mul(){
    let a=parseInt(document.getElementById("mul1").value)
    let b=parseInt(document.getElementById("mul2").value)
    console.log(a*b);
    let h3=document.getElementById("h5")
    h3.innerHTML=a*b
}

function div(){
    let a=parseInt(document.getElementById("div1").value)
    let b=parseInt(document.getElementById("div2").value)
    console.log(a/b);
    let h3=document.getElementById("h6")
    h3.innerHTML=a/b
}

function mod(){
    let a=parseInt(document.getElementById("mod1").value)
    let b=parseInt(document.getElementById("mod2").value)
    console.log(a%b);
    let h3=document.getElementById("h7")
    h3.innerHTML=a%b
}