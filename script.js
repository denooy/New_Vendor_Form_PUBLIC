// function noaddressFunction() {
//   document.getElementById("street-hide").setAttribute("name", "");
//   document.getElementById("unit-hide").setAttribute("name", ""); 
//   document.getElementById("city-hide").setAttribute("name", ""); 
//   document.getElementById("state-hide").setAttribute("name", ""); 
//   document.getElementById("zip-hide").setAttribute("name", "");
//   document.getElementById("country-hide").setAttribute("name", ""); 
// }

function addressFunction() {
  document.getElementByClassName("street-hide").setAttribute("name", "Street");
  document.getElementByClassName("unit-hide").setAttribute("name", "Unit/Suite");
  document.getElementByClassName("city-hide").setAttribute("name", "City"); 
  document.getElementByClassName("state-hide").setAttribute("name", "State"); 
  document.getElementByClassName("zip-hide").setAttribute("name", "Zip");
  document.getElementByClassName("country-hide").setAttribute("name", "Country"); 
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
    checkboxes = document.getElementsByName('ups');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
  }

  function toggle(source) {
    checkboxes = document.getElementsByName('ups');
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

// $(document).ready(function(){
//   $("input[name='warehouse']").live("change", function(){
//      if ($(this).val() == "B") {
//       $("input#street-hide").attr("name", "Street");               
//       $("input#unit-hide").attr("name", "Unit");             
//       $("input#city-hide").attr("name", "City");
//       $("input#state-hide").attr("name", "State");
//       $("input#zip-hide").attr("name", "Zip");
//       $("input#country-hide").attr("name", "Country");                     
//       }
//       else if ($(this).val() == "A") {
//         $("input#street-hide").attr("name", "");               
//         $("input#unit-hide").attr("name", "");             
//         $("input#city-hide").attr("name", "");
//         $("input#state-hide").attr("name", "");
//         $("input#zip-hide").attr("name", "");
//         $("input#country-hide").attr("name", "");                    
//       }
//   }); 
// });


