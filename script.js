function computeTax(base, percent){
	return base * percent;
}

function calculateBill(){
	var baseAmount = parseFloat(baseTxt.value);		
	var salesTax = computeTax(baseAmount, parseFloat(salesTaxTxt.value) / 100);
	var costOfMeal = baseAmount + salesTax;
	var tipAmount = computeTax(baseAmount, parseFloat(tipTxt.value)/100);
	var totalAmount = costOfMeal + tipAmount;

	var bill = "Cost of the meal :  $" + baseAmount.toFixed(2) + 
		   "\nSales Tax :              $" + salesTax.toFixed(2) + 
		   "\nTip Amount :          $" + tipAmount.toFixed(2) + 
		   "\nTotal :                     $" + totalAmount.toFixed(2);
	
	alert(bill);
}