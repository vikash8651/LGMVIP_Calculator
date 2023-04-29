let insert=(num)=>{
    document.calci.text.value=document.calci.text.value+num;
}
let equalto=()=>{
    let exp=document.calci.text.value;
    if(exp){
        document.calci.text.value=eval(exp);
    }
}
let do_back=()=>{
    let exp=document.calci.text.value;
    document.calci.text.value=exp.substring(0,exp.length-1);
}