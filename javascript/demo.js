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

// function add(){
//     let a=parseInt(document.getElementById("add1").value)
//     let b=parseInt(document.getElementById("add2").value)
//     console.log(a+b);
//     let h3=document.getElementById("h3")
//     h3.innerHTML=a+b
// }

// function sub(){
//     let a=parseInt(document.getElementById("sub1").value)
//     let b=parseInt(document.getElementById("sub2").value)
//     console.log(a-b);
//     let h3=document.getElementById("h4")
//     h3.innerHTML=a-b
// }

// function mul(){
//     let a=parseInt(document.getElementById("mul1").value)
//     let b=parseInt(document.getElementById("mul2").value)
//     console.log(a*b);
//     let h3=document.getElementById("h5")
//     h3.innerHTML=a*b
// }

// function div(){
//     let a=parseInt(document.getElementById("div1").value)
//     let b=parseInt(document.getElementById("div2").value)
//     console.log(a/b);
//     let h3=document.getElementById("h6")
//     h3.innerHTML=a/b
// }

// function mod(){
//     let a=parseInt(document.getElementById("mod1").value)
//     let b=parseInt(document.getElementById("mod2").value)
//     console.log(a%b);
//     let h3=document.getElementById("h7")
//     h3.innerHTML=a%b
// }


// let a=10
// let b=20
// if (a==b){
//     console.log('eql');
// }
// else if(a!=b){
//     console.log('not');
// }
// else{
//     console.log('else');
// }






// function fun1(){
//     let a=parseInt(document.getElementById("a").value)
//     let b=parseInt(document.getElementById("b").value)
//     let h3=document.getElementById("h1")
//     if (b>=5){
//         s=a*0.05
//         v=a+s
//         h3.innerHTML=v
//         }
//         else{
//         h3.innerHTML=('no bonus')
//         }
// }


let data=[,{id:'1',name:'fayas',age:22},{id:'2',name:'shahid',age:22},{id:'3',name:'althaf',age:22},{id:'4',name:'yasin',age:22},{id:'5',name:'aslam',age:22}]

function Display(){
    let tbody=document.querySelector("tbody")
    tbody.innerHTML=''
    data.forEach(element=>{
        let tbody=document.querySelector("tbody")
        let tr = document.createElement("tr")
        let id_td = document.createElement("td")
        id_td.innerHTML=element.id
        tr.appendChild(id_td)
        let name_td = document.createElement("td")
        name_td.innerHTML=element.name
        tr.appendChild(name_td)
        let age_td = document.createElement("td")
        age_td.innerHTML=element.age
        tr.appendChild(age_td)

        let edit_td = document.createElement("td")
        let edit_btn = document.createElement("button")
        edit_btn.innerHTML='Edit'
        edit_btn.onclick=function(){
            edit_form(element.id)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)
        
        let del_td=document.createElement("td")
        let del_btn=document.createElement("button")
        del_btn.innerHTML='DELETE'
        del_btn.onclick=function(){
            delete_data(element.id)
        }
        del_td.appendChild(del_btn)
        tr.appendChild(del_td)

        tbody.appendChild(tr)
    })
}

function delete_data(id){
    data=data.filter((user)=>{
        if(user.id!=id){
            return user
        }
    })
    Display()
}

document.getElementById('add_form').addEventListener('submit',function(event){
event.preventDefault()
let id=document.getElementById("id").value
let name=document.getElementById("name").value
let age=document.getElementById("age").value
data.push({id:id,name:name,age:age})
Display()
})

function edit_form(id){
    document.getElementById("add_form").style.display='none'
    document.getElementById("edit_form").style.display='block'
    console.log(id);
    let edit_data=data.find(user=>user.id==id)
    console.log(edit_data);
    document.getElementById('e_id').value=edit_data.id
    document.getElementById('e_name').value=edit_data.name
    document.getElementById('e_age').value=edit_data.age
    

}
document.getElementById("edit_form").addEventListener("submit",function(event){
    event.preventDefault()
    let id=document.getElementById9("e_id").value
    let name=document.getElementById9("e_name").value
    let age=document.getElementById9("e_age").value

    data=data.map((user)=>{
        if(user.id==edit_var){
            return{...user,id:id,name:name,age:age}

        }
        return user
    })
        document.getElementById("add_form").style.display='block'
        document.getElementById("edit_form").style.display='none'

    
})



Display()