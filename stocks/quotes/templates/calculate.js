function calculateAmor() {
    var principal = get("principalamor").value;
    var interest = get("interestamor").value;
    var term = get("termamor").value;
    var finalamount = get("finalamount")

    var finance = new Finance();
    var payment = finance.AM(principal, interest, term)
    finalamount.textContent = payment;


}

function calculateFv() {
    var rate = get("fvrate").value;
    var cashflow = get("fvcashflow").value;
    var termfv = get("fvterm").value;
    var finalamount1 = get("finalamount1")

    var finance = new Finance();
    var payment = finance.FV(rate, cashflow, termfv)
    finalamount1.textContent = payment;

}

function calculateCag() {
    var begiValue = get("cagrBeginningvalue").value;
    var endValue = get("cagrEndingvalue").value;
    var term = get("cagrterm").value;
    var finalamount2 = get("finalamount2")

    var finance = new Finance();
    var payment = finance.FV(begiValue, endValue, term)
    finalamount2.textContent = payment;

}

function showcalc() {

    var amorcalc = get("amor");
    var fvcalc = get("fv");
    var cagrcalc = get("cagr");
    hide(amorcalc);
    hide(fvcalc);
    hide(cagrcalc);
    var selectelement = get("calculatorOptions");
    var selectvalue = selectelement.value;
    if (selectvalue == "amor") {
        console.log("show amortization");
        show(amorcalc);



    } else if (selectvalue == "fv") {
        console.log("show fv");
        show(fvcalc);
    } else {
        console.log("show cagr")
        show(cagrcalc);
    }

}


function get(id) {
    return document.getElementById(id);


}

function show(el) {
    el.style.display = "";


}

function hide(el) {
    el.style.display = "none";
}