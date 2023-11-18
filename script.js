let check=document.getElementById('check')
let password=document.getElementById('password')
let uname=document.getElementById('uname')



check.addEventListener('click',hi)

function hi(){
    if(password.type=='password'){
        password.type='text'
    }
        else{
            password.type='password'
        }
}


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    validate()
})

function validate(){
    let unamevalue=uname.value.trim()
    let passwordvalue=password.value.trim()

    if(unamevalue==''){
        setError(uname,'user name cannot be empty')
    }
    else if(uname.value.length<6){
        setError(uname,"user name should be min 6 charecters")
    }
    else{
        setSuccesss(uname)
    }

    if(passwordvalue===""){
        setError(password,"password cannot be empty")
    }
    else if(password.value.length<8){
        setError(password,"password can contain 8 charecters")
    }
    else{
        setSuccesss(password)
    }
}

function setError(input,msg){
    let parent=input.parentElement;
    let small=parent.querySelector('small')
    small.innerText=msg
    parent.classList.add("error")
    parent.classList.remove("sucess")
}
function setSuccesss(input){
    let parent=input.parentElement
    parent.classList.add("sucess")
    parent.classList.remove("error")
}