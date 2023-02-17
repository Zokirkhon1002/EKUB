
        function myFunction() {
            let a1 = document.getElementById("aa").value;
            const a = Number(a1);
            let b1 = document.getElementById("bb").value;
            const b = Number(b1);

            let out = document.getElementById("output");
            if(a1 == '' && b1 == ''){
                out.innerHTML = `a va b sonlariga raqam kiriting.`;
                out.style.color = "red";
                event.preventDefault();
            } else if(a1 == ''|| a == ''){
                out.innerHTML = `a soniga raqam kiriting.`;
                out.style.color = "red";
                event.preventDefault();
            } else if(b1 == '' || b == ''){
                out.innerHTML = `b soniga raqam kiriting.`;
                out.style.color = "red";
                event.preventDefault();
            }else {

            let ekub = EKUB(a,b);
            out.innerHTML = `a: ${a1} va b: ${b1}<br> sonlarining<br> EKUB = ${ekub}`;
            out.style.color = "#4CAF50";
            
            event.preventDefault();
            }
        }

    function EKUB(a,b){
    while(a!=b)(a>b)?a-=b:b-=a;
    return a;
}
