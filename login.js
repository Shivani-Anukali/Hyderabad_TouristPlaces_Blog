let shwPassword=() =>{
    let passwordBox=document.querySelector('#pwd');
    let typeAttribute=passwordBox.getAttribute("type");
    if(typeAttribute==="text"){
        passwordBox.setAttribute("type","password");
    }
    else{
        passwordBox.setAttribute("type","text");
    }
}
//check box
let checkBox=document.querySelector('#check');
checkBox.addEventListener('click',function(){
    shwPassword();
});