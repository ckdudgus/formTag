function forminspector(formarray){
    var hpelement = formarray['phonenumber'];
    var hp = hpelement.value;
    if(hp ==""){      // isNaN -> true, false 
        alert('예시와 같이 010-0000-0000 기입해주세요.');
        hpelement.focus();
        console.log(hpelement);
        return false;
    }
    //동의 여부 
    // var agreechk = formarray['agree']; form 을 this 라고 할때 그 form 안에  name='agree' 인 객체
    // var agreeval = agreechk.value;
    // console.log(agreechk);
    // console.log(agreechk.checked);
    // console.log(agreeval);
    // if(!agreechk.checked){
    //     return false;
    // }else{
    //     return true;
    // }
}