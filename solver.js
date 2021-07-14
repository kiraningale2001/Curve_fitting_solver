function Straightline() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let Ax = x.split(",")
    let Ay = y.split(",")
    if (Ax.length == Ay.length && x!=''&& y!='') {
        let sx = 0;
        let sy = 0;
        let sxy = 0;
        let sxx = 0;
        for (let i = 0; i < Ax.length; i++) {
            sx += Number(Ax[i]); //sum of x
            sy += Number(Ay[i]); // sum of y
            sxy += Ax[i] * Ay[i];// sum of x*y
            sxx += Ax[i] * Ax[i];//square of x
        }
        document.getElementById("Heading").innerHTML = "Straight line ANSWER";
        document.getElementById("eq1").innerHTML = `${sx}a+${Ax.length}b=${sy}------eq(1)`;
        document.getElementById("eq2").innerHTML = `${sxx}a+${sx}b=${sxy}---------eq(2)`;
        document.getElementById("eq3").innerHTML ='';
    }
    else{
        alert("please enter a value!!");
         
     }
}

//parabola
function parabola() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let Ax = x.split(",")
    let Ay = y.split(",")
    if (Ax.length == Ay.length && x!=''&& y!='' ) {
        let sx = 0;
        let sy = 0;
        let sxy = 0;
        let sxx = 0;
        let sxxy=0;
        let sx3=0;
        let sx4=0;
        for (let i = 0; i < Ax.length; i++) {
            sx += Number(Ax[i]); //sum of x
            sy += Number(Ay[i]); // sum of y
            sxy += Ax[i] * Ay[i];// sum of x*y
            sxx += Ax[i] * Ax[i];//square of x
            sxxy+= (Ax[i] * Ax[i])*Ay[i];
            sx3+=Ax[i] * Ax[i] *Ax[i] ;
            sx4+=Ax[i] * Ax[i]*Ax[i] * Ax[i];
        }
        document.getElementById("Heading").innerHTML = "Parabola ANSWER";
        document.getElementById("eq1").innerHTML = `${sxx}a+${sx}b+${Ax.length}c=${sy}------eq(1)`;
        document.getElementById("eq2").innerHTML = `${sx3}a+${sxx}b+${sx}c=${sxy}---------eq(2)`;
        document.getElementById("eq3").innerHTML = `${sx4}a+${sx3}b+${sxx}c=${sxxy}---------eq(2)`;

    }
    else{
       alert("please enter a value!!");
        
    }
}