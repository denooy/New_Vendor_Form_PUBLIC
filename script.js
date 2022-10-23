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
// format number 1000000 to 1,234,567
return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
// appends $ to value, validates decimal side
// and puts cursor back in right position.

// get input value
var input_val = input.val();

// don't validate empty input
if (input_val === "") { return; }

// original length
var original_len = input_val.length;

// initial caret position 
var caret_pos = input.prop("selectionStart");
  
// check for decimal
if (input_val.indexOf(".") >= 0) {

  // get position of first decimal
  // this prevents multiple decimals from
  // being entered
  var decimal_pos = input_val.indexOf(".");

  // split number by decimal point
  var left_side = input_val.substring(0, decimal_pos);
  var right_side = input_val.substring(decimal_pos);

  // add commas to left side of number
  left_side = formatNumber(left_side);

  // validate right side
  right_side = formatNumber(right_side);
  
  // On blur make sure 2 numbers after decimal
  if (blur === "blur") {
    right_side += "00";
  }
  
  // Limit decimal to only 2 digits
  right_side = right_side.substring(0, 2);

  // join number by .
  input_val = "$" + left_side + "." + right_side;

} else {
  // no decimal entered
  // add commas to number
  // remove all non-digits
  input_val = formatNumber(input_val);
  input_val = "$" + input_val;
  
  // final formatting
  if (blur === "blur") {
    input_val += ".00";
  }
}

// send updated string to input
input.val(input_val);

// put caret back in the right position
var updated_len = input_val.length;
caret_pos = updated_len - original_len + caret_pos;
input[0].setSelectionRange(caret_pos, caret_pos);
}


