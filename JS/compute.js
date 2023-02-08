var total_pricephp = function(){
    var total_pricemb = document.getElementById("mb").value * 20;

    var total_pricesmt = document.getElementById("smt").value * 30;

    var total_pricephp = total_pricemb+total_pricesmt;
    return alert("Total Price pf Items In Pesos: PHP" +total_pricephp);
}