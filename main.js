let boton = document.getElementById("boton");

boton.addEventListener("click",()=>{
    let conta = 0;

    let res1 = document.getElementById("2").checked;
    let res2 = document.getElementById("7").checked;
    let res3 = document.getElementById("11").checked;
    let res4 = document.getElementById("16").checked;
    let res5 = document.getElementById("19").checked;
    let res6 = document.getElementById("22").checked;
    let res7 = document.getElementById("25").checked;
    let res8 = document.getElementById("31").checked;
    let res9 = document.getElementById("36").checked;
    let res10 = document.getElementById("37").checked;

    if(res1)conta++;
    if(res2)conta++;
    if(res3)conta++;
    if(res4)conta++;
    if(res5)conta++;
    if(res6)conta++;
    if(res7)conta++;
    if(res8)conta++;
    if(res9)conta++;
    if(res10)conta++;
    localStorage.setItem("puntos",conta);
    window.location.href ="resultado/index.html"
})