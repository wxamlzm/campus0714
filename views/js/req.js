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
    // state obj
    let xhr = new XMLHttpRequest;
    // monitor req/res
    xhr.onreadystatechange = ()=>{
        if(4 == xhr.readyState){
            if(xhr.status >= 200 && xhr.status < 300){
                let result = JSON.parse(xhr.responseText);
                console.log(result);
            }else{
                alert('response fail');
            }
        }
    }

    xhr.open('POST', 'user/req', true);

    let strUrl = '';
    xhr.send();
}