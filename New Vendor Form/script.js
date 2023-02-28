function addressFunction() {
  document.getElementById("street-hide").setAttribute("name", "-Street");
  document.getElementById("unit-hide").setAttribute("name", "-Unit/Suite"); 
  document.getElementById("city-hide").setAttribute("name", "-City"); 
  document.getElementById("state-hide").setAttribute("name", "-State"); 
  document.getElementById("zip-hide").setAttribute("name", "-Zip");
  document.getElementById("country-hide").setAttribute("name", "-Country");   
}

function noaddressFunction() {
  document.getElementById("street-hide").setAttribute("name", "");
  document.getElementById("unit-hide").setAttribute("name", ""); 
  document.getElementById("city-hide").setAttribute("name", ""); 
  document.getElementById("state-hide").setAttribute("name", ""); 
  document.getElementById("zip-hide").setAttribute("name", "");
  document.getElementById("country-hide").setAttribute("name", "");   
}

function carrierFunction() {
  document.getElementById("restrictedcarriers").setAttribute("name", "Restricted-Carriers");
}

function dropshipminFunction() {
  document.getElementById("dropship-no-amount").setAttribute("value", "No");
}

function dropshipFunction() {
  document.getElementById("dropshipamount").setAttribute("name", "Dropship-Minimum-Amount");
}

function stockFunction() {
  document.getElementById("stockamount").setAttribute("name", "Stock-Minimum-Amount");
}

function freefreightFunction() {
  document.getElementById("freefreight").setAttribute("name", "Free-Freight-Minimum-Amount");
}

function toggle(source) {
    checkboxes = document.getElementsByName('UPS-Account-E66857');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
  }

  function toggle(source) {
    checkboxes = document.getElementsByName('UPS');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
  }

  function uncheckUps(obj) {
  	if (obj.checked == false) {
  		document.getElementById("upsacct").checked = false;
  	}
  }

  function toggle_visibility(dropship) {
  	var e = document.getElementById("dropship");
  	if (e.style.display == 'block')
  		e.style.display = 'none';
  	else
  		e.style.display = 'block';
  }

  function uncheckScale(obj) {
  	if (obj.checked == false) {
  		document.getElementById("scale").checked = false;
  	}
  }

  function uncheckCarriers(obj) {
  	if (obj.checked == false) {
  		document.getElementById("carrierlist").checked = false;
  	}
  }
  
  $(document).ready(function() {    
    $("#canadaship").click(function(){
      $("#canada").slideToggle("fast");
  });
  $("#internationalship").click(function(){
      $("#international").slideToggle("fast");
  });
      $("#carrierlist").click(function(){
      $("#approved").slideToggle("fast");
  });
  $("#ltl").click(function(){
    $("#approved").hide('fast');
  });
    $("#flatbed").click(function(){
    $("#flatbedlist").slideToggle("fast");
  });
    $("#noCheck").click(function(){
    $("#ifYes").hide('fast');
  });
    $("#yesCheck").click(function(){
    $("#ifYes").show('fast');
  });
    $("#stock-no").click(function(){
    $("#stock-amount").hide('fast');
  });
    $("#stock-yes").click(function(){
    $("#stock-amount").show('fast');
  });
  $("#stock-no1").click(function(){
    $("#free-amount").hide('fast');
  });
    $("#stock-yes1").click(function(){
    $("#free-amount").show('fast');
  });
    $("#ltl").click(function(){
    $("#arrangefreight").slideToggle("fast");
  });
    $("#dropship-no-amount").click(function(){
    $("#dropship-amount").hide('fast');
  });
    $("#dropship-yes-amount").click(function(){
    $("#dropship-amount").show('fast');
  });
});


// BEGIN PHONE # INPUT FORMATTING

const isNumericInput = (event) => {
	const key = event.keyCode;
	return ((key >= 48 && key <= 57) || 
		(key >= 96 && key <= 105) 
	);
};

const isModifierKey = (event) => {
	const key = event.keyCode;
	return (event.shiftKey === true || key === 35 || key === 36) || 
		(key === 8 || key === 9 || key === 13 || key === 46) || 
		(key > 36 && key < 41) ||
		(
		
			(event.ctrlKey === true || event.metaKey === true) &&
			(key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
		)
};

const enforceFormat = (event) => {

	if(!isNumericInput(event) && !isModifierKey(event)){
		event.preventDefault();
	}
};

const formatToPhone = (event) => {
	if(isModifierKey(event)) {return;}

	const target = event.target;
	const input = event.target.value.replace(/\D/g,'').substring(0,10);
	const zip = input.substring(0,3);
	const middle = input.substring(3,6);
	const last = input.substring(6,10);

	if(input.length > 6){target.value = `(${zip}) ${middle}-${last}`;}
	else if(input.length > 3){target.value = `(${zip}) ${middle}`;}
	else if(input.length > 0){target.value = `(${zip}`;}
};

const inputElement = document.getElementById('phonenumber');
inputElement.addEventListener('keydown',enforceFormat);
inputElement.addEventListener('keyup',formatToPhone);

// END PHONE # INPUT FORMATTING

// BEGIN CURRENCY INPUT FORMATTING

$("input[data-type='currency']").on({
  keyup: function() {
    formatCurrency($(this));
  },
  blur: function() { 
    formatCurrency($(this), "blur");
  }
});


function formatNumber(n) {
return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function formatCurrency(input, blur) {
var input_val = input.val();

if (input_val === "") { return; }

var original_len = input_val.length;

var caret_pos = input.prop("selectionStart");
  
if (input_val.indexOf(".") >= 0) {

  var decimal_pos = input_val.indexOf(".");

  var left_side = input_val.substring(0, decimal_pos);
  var right_side = input_val.substring(decimal_pos);

  left_side = formatNumber(left_side);

  right_side = formatNumber(right_side);
  
  if (blur === "blur") {
    right_side += "00";
  }
  
  right_side = right_side.substring(0, 2);

  input_val = "$" + left_side + "." + right_side;

} else {

  input_val = formatNumber(input_val);
  input_val = "$" + input_val;

  if (blur === "blur") {
    input_val += ".00";
  }
}

input.val(input_val);

var updated_len = input_val.length;
caret_pos = updated_len - original_len + caret_pos;
input[0].setSelectionRange(caret_pos, caret_pos);
}

// END CURRENCY INPUT FORMATTING

