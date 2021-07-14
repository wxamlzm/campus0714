// get dom
let uname = document.getElementById('uname');
let upwd = document.getElementById('upwd');
let upwdqr = document.getElementById('upwdqr');
let uphone = document.getElementById('uphone');
let btn = document.getElementById('btn');

// mointor dom event
btn.onclick = ()=> {
    // get dom value
    let unameVal = uname.innerHTML;
    let upwdVal = upwd.innerHTML;
    let upwdqrVal = upwdqr.innerHTML;
    let uphoneVal = uphone.innerHTML;

    ajax(unameVal, upwdVal, uphoneVal);
}

// create ajax()
function ajax(uname, upwd, uphone){
    
}