// get dom
let uname = document.getElementById('uname');
let upwd = document.getElementById('upwd');
let btn = document.getElementById('ubtn')

// listen event
btn.onclick = ()=> {
    let unameVal = uname.value;
    let upwdVal = upwd.value;

    // call ajax
    ajax(unameVal, upwdVal);
}

// define ajax()
function ajax(uname, upwd){
    // state obj
    let xhr = new XMLHttpRequest();
    // listen req/res
    xhr.onreadystatechange = ()=> {
        if(4 == xhr.reardyState){
            if(xhr.status >= 200 && xhr.status < 300){
                let result = JSON.parse(xhr.responseText);
            }else {
                alert('response fail')
            }
        }
    }

    xhr.open('POST', 'user/login', true);

    xhr.send(`uname=${uname}&upwd=${upwd}`)
}