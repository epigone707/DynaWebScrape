let $curr;
let data = {};
let surveyid="";
var attrChoices=$('#question-wrap').attr('sid');
var domain='aol.comalenoris.com';
var count=0;
var pipeline='sau.bbcrystal.com';
var zipcode="";
var state_selected="";

var states={"AL":"Alabama", "AK":"Alaska", "AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District Of Columbia","FL":"Florida","GA":"Georgia","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine", "MD":"Maryland", "MA":"Massachusetts", "MI":"Michigan", "MN":"Minnesota", "MS":"Mississippi", "MO":"Missouri", "MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PA":"Pennsylvania","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota", "TN":"Tennessee", "TX":"Texas", "UT":"Utah","VT":"Vermont","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming"}

if($('body').find('#question-wrap').length && typeof attrChoices !== 'undefined' && attrChoices !== false && attrChoices !=='' && $.isNumeric(attrChoices)){
   surveyid=$('#question-wrap').attr('sid');
}
$('.skip-mail').click(function(){
	$('.skip-mail').removeAttr('onclick');
});
$('#noEmail').click(function(){
	$('#noEmail').removeAttr('onclick');
});
function birthdayFill(){
	/*birthday*/
	var month= ["Month","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var year=[];
	var date = new Date();
	
	for(var i=1929; i<date.getFullYear()-18; i++){
		year.push(i);
	}

	for(var y=0; y<year.length; y++){
		if($("select#years").children("option:selected").val()==year[y]){
			$("select#years").children("option:selected").text(year[y]);
		}else{
			$("#years").append(`<option value="`+year[y]+`">`+year[y]+`</option>`);
		}
	}
	
	for(var m=0; m<month.length; m++){
		if($("select#months").children("option:selected").val()==m){
			$("select#months").children("option:selected").text(month[m]);
		}else{
			if(month[m]!="Month"){
				$("#months").append(`<option value="`+(m+1)+`">`+month[m]+`</option>`);
			}
		}	
	}
	for(var d=1; d<32; d++){
		if($("select#days").children("option:selected").val()==d){
			$("select#days").children("option:selected").text(d);
		}else{
			$("#days").append(`<option value="`+d+`">`+d+`</option>`);
		}	
	}
}
function beforeShowQuestion() {
  $curr = $curr.removeClass('active');
  $curr = $curr.addClass('done');
  $curr = $curr.next();
  $curr = $curr.addClass('active');
  return false;
}

function showOfferWall() {
	$("#content1,#comment-page, .footer").fadeOut(function () {
		$("#content2").fadeIn(500);
	});
	$("#result1, #result2, #result3").fadeIn(1000);
	setTimeout(
		function(){
			$("#divresult1 i").css({'color': '#28A745'});
			$(".circle-r1").css({'border-color': '#28A745'});
			$("#divresult1 p").css({'color': '#000', 'font-weigth':'600'});
			$(".circle-r1 i").css({'font-size':'20px'});
	}, 2000);
	setTimeout(
		function(){
			$("#divresult2 i").css({'color': '#28A745'});
			$(".circle-r2").css({'border-color': '#28A745'});
			$("#divresult2 p").css({'color': '#000', 'font-weigth':'600'});
			$(".circle-r2 i").css({'font-size':'20px'});
	}, 4000);
	setTimeout(
		function(){
			$("#divresult3 i").css({'color': '#28A745'});
			$(".circle-r3").css({'border-color': '#28A745'});
			$("#divresult3 p").css({'color': '#000', 'font-weigth':'600'});
			$(".circle-r3 i").css({'font-size':'20px'});
	}, 6000);
	setTimeout(
	function(){
	$("#content2").hide();
	$(".reward-page, #policy-container, .comment-page,.footer,#how_was_survey_text_container").show();
	$('#p_modal1').modal('show');
	$("#content3").fadeIn();

	}, 7500);
}

function createQuestion(step, totalsteps){
	if($(window).width()<576){
		var p = $(".intro-sub").last();
		var offset = p.offset();
		window.scrollTo(0,offset.top-10,'smooth'); 
	}
	setTimeout(
		function(){
			$(".progress").css({'display':'flex'});
			$('#questionText').html("<span style='font-size: 18px'><strong>"+questiontx+" "+step+" "+of+" "+totalsteps+":</strong></span><p class='question mt-2'>"+data.questionText+"</p>");
			// for 1.2PB
			$('#questionText2').html("<span style='font-size: 18px'></span><p class='question mt-2'>"+data.questionText+"</p>");
			//
			$('#questionBody').html('');
			$(".cta").css({backgroundImage: 'none'});
			$(".question").slideDown();
			$("#questionText").removeClass('email-title');
			$("#questionFooter").removeClass('email-sub');
			$("#questionText").slideDown();
			$("#questionFooter").slideDown();
			$(".question span").slideDown();
			
			switchTypeQuestions(data);
	},200);

	$("#question-wrap").fadeIn();
}

//get next question
function nextQuestion(token,sid,question,answer,formName="",answerValue=""){
$('.survey_button').removeAttr('onclick');
$("#question-wrap").fadeOut();
  let params = new FormData();
	params.append('trackingGuid', token);
	params.append('surveyID', sid);
	params.append('questionID',question);
	params.append('answerID',answer);
	if(formName!=""){
		params.append(formName,answerValue);
	}
	
  $.ajax({
    type: "POST",
    url: "https://"+domain+"/survey/submitAnswer",
    data: params,
    dataType: "json",
    contentType: false,
    processData: false,
    success: function(res){
		//progress begin
		answered=res.surveyStep-1;
		stepsTotal = res.totalSurveySteps;
		//get current progress
		progress =  (answered / stepsTotal)*100;
		prevProgress = $('.pb-percent').text();
		cheers(progress);
		data = res;
	  if($('.pqtotal').text()==''){
	   	$('.pqtotal').text(data.totalSurveySteps);
	  }
      if(!data.isFinalQuestion){
        beforeShowQuestion();
		createQuestion(data.surveyStep, data.totalSurveySteps);
      }else{
		  $(".disclaimer").fadeOut();
		  progress=100;
		  cheers(progress);
		  if($("#questionText2").length!=0){
			setTimeout(
				function(){
				showOfferWall(1);
			}, 1000);
		  }else{
			 showOfferWall(1);
		  }
      }
		$({
		  someValue:prevProgress}).animate({someValue: progress}, {
		  duration: 1000,
		  easing:'swing', // can be anything
		  step: function() { // called on every step
			  // Update the element's text with rounded-up value:
			  $('.pb-percent').text(Math.round(this.someValue));
		  }
		});
		$('.front').css({'clip-path':'inset(0 0 0 '+progress+'%)', '-webkit-clip-path':'inset(0 0 0 '+progress+'%)'});
    }
  });
}

window.onload = function() {
  var fiveMinutes = 30 * 13,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};

function replaceUrlParam(url, paramName, paramValue) {
  if (paramValue == null) {
    paramValue = '';
  }
  var pattern = new RegExp('\\b(' + paramName + '=).*?(&|#|$)');
  if (url.search(pattern) >= 0) {
    return url.replace(pattern, '$1' + paramValue + '$2');
  }
  url = url.replace(/[?#]$/, '');
  return url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue;
}

$(document).ready(function(){
  $curr = $("#curr");

  $(".remove_link").click(function() {
    var url = $(this).attr('id');
    url = replaceUrlParam(url, 's1', aff_id);
    url = replaceUrlParam(url, 's2', click_id);
    url = replaceUrlParam(url, 's3', Brand);
    url = replaceUrlParam(url, 's4', lpid);

    window.open(url, '_blank');
  });

  if($('.datehax').length){
    $('.datehax').text(datehax());
  }
   $( "#policy-btn" ).click(function() {	
    $("#policy-wrap").delay("500").fadeIn();
    $("#wrap-content").css("filter", "blur(4px)");
  });
  $( "#policy-close" ).click(function() {	
    $("#policy-wrap").delay("100").fadeOut();
    $("#wrap-content").css("filter", "");
  });
  $( "#terms-btn" ).click(function() {	
    $("#policy-wrap").delay("500").fadeIn();
    $("#wrap-content").css("filter", "blur(4px)");
  });
  $('.continue-btn').click(function() {
    $(".continue-btn").fadeOut(500);
		$(".time-text").fadeOut(500);
	    if($("#questionText2").length!=0){
			$(".cta").fadeOut(500);
			 $(".intro-text").slideUp(function(){
				$(".cta").fadeIn(500);
			});
		}else{
			$(".cta").fadeOut(500);
			$(".intro-text").fadeOut(500,function(){
				$(".cta").fadeIn();
			});
		}
    beforeShowQuestion();
  });

});
function startsurvey(st1,st2,st3,st4){
	$('.continue-btn').removeAttr('onclick');
	var startSurvey = {surveyID:st,s1:st1,s2:st2,s3:st3,s4:st4,ln:languageCode};
	$.ajax({
		type: "POST",
		url: "https://"+domain+"/survey/startSurvey",
		data: JSON.stringify(startSurvey),
		success: function(res){
		  data = res;
		  if(data.isFinalQuestion!=true){
			  	$('#trackingGuid').attr('value',data.trackToken);
			  	if($('#ipZip').val()!=""){
				   	sendZipIp(data.trackToken);
				}
			  	$(".progress").slideDown();
				$(".text-percent-container").slideDown();
			   createQuestion(data.surveyStep, data.totalSurveySteps);
		  }else{
			  showOfferWall(1);
		  }
	}
  });
}
var box_trying=2;
var oneclick=true;

$('#p_modal_button2').click(function() {
	oneclick=true;
});

$(".try").click(function(){
	if(oneclick){
		oneclick=false;
	   	if(!$(this).hasClass("open")){
		$(this).addClass("open");
			if(box_trying==2){
				setTimeout(function(){
					$("#p_modal2").modal({
                        backdrop: 'static',
                        keyboard: false
					});
					box_trying=1;
				}, 3000);
			}else{
				$(this).addClass("prize");
				setTimeout(function(){
					$("#p_modal3").modal({
                        backdrop: 'static',
                        keyboard: false
					});
				}, 3000);
			}
		}
	}
});

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
	return '' + match[1] + '-' + match[2] + '-' + match[3];
  }else{ return null;}

}

function switchTypeQuestions(d){
	var inputs=0;
	var answers="";
	var answersValues="";
	var valP=false;
	var valE=false;
	var valZ=false;
	var valN=false;
	var valLN=false;
	var valWH=false;
	var valB=false;
	var skipBtn=false;
	for(var i=0; i<d.answers.length; i++){
		if(answers==""){
			if(d.answers[i].value!='Skip' && d.answers[i].value!='skip'){
			  answers+=d.answers[i].answerID;
			}
		}else{
			if(d.answers[i].value!='Skip' && d.answers[i].value!='skip'){
				answers+=','+d.answers[i].answerID;
			}
		}
		if(answersValues==""){
			if(d.answers[i].value!='Skip' && d.answers[i].value!='skip'){
				answersValues+=d.answers[i].value;
			}
		}else{
			if(d.answers[i].value!='Skip' && d.answers[i].value!='skip'){
			answersValues+=','+d.answers[i].value;
			}
		}
		
		if(d.answers[i].value!='Skip' && d.answers[i].value!='skip'){
			switch(d.answers[i].actionType){
				case 3:
					$(".cta").css({backgroundImage: 'url(assets/images/email-bg.jpg)', 'background-size': 'cover','min-height': '250px'});
					$("#questionBody").append(
					`<div class="input-container">
						<input type='text' id="email-data" onkeypress ="return preventS(event);" placeholder="`+$('#input-placeholder').val()+`" class="input-data" value="`+emailURL+`" data="false">
						<button class="continue_s btn-color btn-tx-color" id="email-data-btn" onClick="validateEmail('`+d.trackToken+`',`+surveyid+`,`+d.questionID+`,`+d.answers[i].answerID+`,'`+d.formName+`','`+d.answers[i].value+`')">`+$('#submit-lang').val()+`</button></div>`);
					inputs++;
					valE=true;
				break;

				case 4:	
						$(".cta").css({backgroundImage: 'url(assets/images/email-bg.jpg)', 'background-size': 'cover','min-height': '250px'});
						$('#questionBody').append(`<div class="input-container"><input id="phone-data" class="input-data" data="false" value="`+phoneURL+`"
						onkeypress ="return alpha(event);"
						onkeyup="	var nval= dashedNumber(this);
									var patt = new RegExp('[0-9]{3}[ -]{0,1}[0-9]{3}[ -]{0,1}[0-9]{4}');
									var res = patt.test(nval);
									if(this.value.length==10 && res){
										this.value=nval
									}
									"
						maxlength="10"
						inputmode="tel"
						pattern="[0-9][-]*"
						placeholder="xxx-xxx-xxxx">
						<button id="phone-data-btn" class="continue_s btn-color btn-tx-color" onClick="validatePhone('`+d.trackToken+`',`+surveyid+`,`+d.questionID+`,`+d.answers[i].answerID+`,'`+d.formName+`','`+d.answers[i].value+`')" type="button">`+$('#submit-lang').val()+`</button></div>`);
					inputs++;
						if(phoneURL.length>0){
							var valueURL=dashedNumber($('#phone-data')[0]);
							$('#phone-data').val(valueURL);
						}
					valP=true;
				break;

				case 5:	
						$(".cta").css({backgroundImage: 'url(assets/images/email-bg.jpg)', 'background-size': 'cover','min-height': '250px'});
						$('#questionBody').append(
						`	<div class="street-container">
								<input id="street-data" placeholder="Street" class="input-data">
							</div>
							<div class="input-container">
								<input id="zip-data" value="`+zipcodeURL+`" class="input-data" data="false" type="number" placeholder="Zip Code"
								oninput="javascript:
									if(this.value.length>5){
									var num_sf=this.value;
									var num_cf=''
									num_cf=num_sf.substring(0,5)
									this.value=num_cf;
									}"
								onkeyup="showStreetState()";
								ontouchstart="this.removeAttribute('readonly');" 
								onfocus="this.removeAttribute('readonly');"
								inputmode="tel"
								maxlength="5" >
							</div>
							<label id="state-data" class="stateselect input-data inline">
								<select class="state">
									<option value="State" selected disabled>State</option>
								</select>
							</label>
							<div class="city-container inline">
								<input id="city-data" placeholder="City" class="input-data" value="`+cityURL+`">
							</div>
							<button id="zip-data-btn" class="continue_s btn-color btn-tx-color" onClick="validateZip('`+d.trackToken+`',`+surveyid+`,`+d.questionID+`,`+d.answers[i].answerID+`,'`+d.formName+`','`+d.answers[i].value+`')" type="button">`+$('#submit-lang').val()+`</button>`);
						inputs++;
						valZ=true;
				break;
				case 11:
						$('#questionBody').append(
						`<div class="title-wh">Height</div>
						<input id="heightF-data" value="" class="input-data" data="false" type="number" placeholder="ft"
						oninput="javascript:
							if(this.value.length>1){
								var num_sf=this.value;
								var num_cf=''
								num_cf=num_sf.substring(0,1)
								this.value=num_cf;
							}
							if(this.value>7 || this.value<4){
								this.value='';
							}"

						onkeypress ="return alpha(event);"
						ontouchstart="this.removeAttribute('readonly');" 
						onfocus="this.removeAttribute('readonly');"
						inputmode="tel"
						maxlength="1"
						>
						<button id="heightF-data-btn" class="continue_s btn btn-danger" onClick="validateHeightF('`+d.trackToken+`',`+surveyid+`,`+d.questionID+`,`+d.answers[i].answerID+`,'`+d.formName+`','`+d.answers[i].value+`')" type="button">Next</button>`);
						inputs++;
						valWH=true;

					break;
								
				case 12:
					$('#questionBody').append(
					`<input id="heightI-data" value="" class="input-data" data="false" type="number" placeholder="in"
					oninput="javascript:
						if(this.value.length>2){
						var num_sf=this.value;
						var num_cf=''
						num_cf=num_sf.substring(0,2)
						this.value=num_cf;
						}
						if(this.value>11){
							this.value='';
						}"
					onkeypress ="return alpha(event);"
					ontouchstart="this.removeAttribute('readonly');" 
					onfocus="this.removeAttribute('readonly');"
					inputmode="tel"
					maxlength="2" >
					<button id="heightI-data-btn" class="continue_s btn btn-danger" onClick="validateHeightI('`+d.trackToken+`',`+surveyid+`,`+d.questionID+`,`+d.answers[i].answerID+`,'`+d.formName+`','`+d.answers[i].value+`')" type="button">Next</button>`);
					inputs++;
					valWH=true;

				break;

				case 13:
					$('#questionBody').append(
					`<div class="title-wh mt-2">Weight</div>
						<input id="weight-data" value="" class="input-data mb-4" data="false" type="number" placeholder="lbs"
					oninput="javascript:
						if(this.value.length>3){
						var num_sf=this.value;
						var num_cf=''
						num_cf=num_sf.substring(0,3)
						this.value=num_cf;
						}if(this.value.length==3 && this.value>350){
							this.value='';
						}"
					onkeypress ="return alpha(event);"
					ontouchstart="this.removeAttribute('readonly');" 
					onfocus="this.removeAttribute('readonly');"
					inputmode="tel"
					maxlength="3" >
					<div id="weightbad" class="redtext">The weight must be (50-350)</div>
					<button id="weight-data-btn" class="continue_s btn btn-danger" onClick="validateWeight('`+d.trackToken+`',`+surveyid+`,`+d.questionID+`,`+d.answers[i].answerID+`,'`+d.formName+`','`+d.answers[i].value+`')" type="button">Next</button>`);
					inputs++;
					valWH=true;

				break;
					
				case 14:
					$('#questionBody').append(
						`<div class="input-container">
							<div class="name-container text-center">
								<input id="fname-data" data="false" onkeypress="return validateKeyStrokes(event)" placeholder="`+d.answers[i].answerText+`" class="input-data">
							</div>
						</div>`);
					inputs++;
					valN=true;
				break;
				case 15:
					$('#questionBody').append(
						`<div class="input-container">
							<div class="name-container text-center">
								<input id="lname-data" data="false" onkeypress="return validateKeyStrokes(event)" placeholder="`+d.answers[i].answerText+`" class="input-data">
							</div>
						</div>`)
					inputs++;
					valLN=true;
				break;
															
				case 16:
					$('#questionBody').append(
						`<div class="input-container">
							<div id="birthday-data" class="row justify-content-between birthday" style="width:98%; margin: auto">
								<label id="month" class="col-12 col-lg-4 birth-container">
									 <select id="months" class="bdata" onChange="daysInMonth()">
										 <option value='Month' disabled selected>Month</option>">
									 </select>
								</label>
								<label id="day" class="col-12 col-lg-4 birth-container">
									 <select id="days" class="bdata">
										<option value='Day' disabled selected>Day</option>">
									 </select>
								</label>
								<label id="year" class="col-12 col-lg-3 box birth-container">
									 <select id="years" class="bdata">
										  <option value='Year' disabled selected>Year</option>">
									 </select>
								</label>
							</div>
						</div>
						<button class="continue_s btn btn-primary btn-tx button bh-color btxh-color" id="birth-data-btn" onClick="validateBirthday('`+d.trackToken+`',`+surveyid+`,`+d.questionID+`,`+d.answers[i].answerID+`,'`+d.formName+`','`+d.answers[i].value+`')">`+$('#submit-lang').val()+`</button>`);
					inputs++;
					valB=true;
					birthdayFill();
				break;	
					
				default: 
						if(d.questionID!=430){
							$('#questionBody').append(
								`<button  id="`+d.answers[i].answerID+`" 
										  class="answerOption continue-btn btn-color btn-tx-color" 
										  value="`+d.answers[i].value+`" 
										  onClick="nextQuestion('`+d.trackToken+`',`+surveyid+`,`+d.questionID+`,`+d.answers[i].answerID+`,'`+d.formName+`', '`+d.answers[i].value+`')">
										  `+d.answers[i].answerText+`
								</button>`
							);
						}
				break;
			}
		}else if(d.answers[i].value=='Skip' || d.answers[i].value=='skip'){
				skipBtn=true;
				$('#questionBody').append(`
					<button class="btn btn-light mt-2" style="display: block; margin:auto" onClick="nextQuestion('`+d.trackToken+`',`+surveyid+`,`+d.questionID+`,`+d.answers[i].answerID+`,'`+d.formName+`','`+d.answers[i].value+`')" type="button">`+$('#skip-lang').val()+`</button>`);
		}
	}
	if(inputs>1){
		setTimeout(function () {
			$(".sprogressbar").slideUp();
		},1000);
		setTimeout(function () {    
			$("#questionText,#questionFooter,#questionBody").fadeIn(500);
		},1200);
		$('.continue_s').hide();
		$('#questionBody').css({"text-align":"center"});
		if(skipBtn){
		$(`
			<button id="all-data" class="continue_s btn-color btn-tx-color" onClick="validateAll('`+d.trackToken+`',`+surveyid+`,`+d.questionID+`,'`+answers+`','`+d.formName+`','`+answersValues+`','`+valP+`','`+valE+`','`+valZ+`','`+valN+`','`+valWH+`','`+valLN+`','`+valB+`')" type="button">`+$('#submit-lang').val()+`</button>`).insertBefore('.btn-light');
		}else{
		   	$('#questionBody').append(`
			<button id="all-data" class="continue_s btn-color btn-tx-color" onClick="validateAll('`+d.trackToken+`',`+surveyid+`,`+d.questionID+`,'`+answers+`','`+d.formName+`','`+answersValues+`','`+valP+`','`+valE+`','`+valZ+`','`+valN+`','`+valWH+`','`+valLN+`','`+valB+`')" type="button">`+$('#submit-lang').val()+`</button>`);
		}
	}
	if(d.questionDisclaimer!="" && d.questionDisclaimer!=null){
		$('#questionBody').append(`<div class="arrow-container" style="position:relative" onclick="showDisclaimer()"><div class="disclaimer_s">`+d.questionDisclaimer+`</div><i class="arrow fa fa-arrow-down" aria-hidden="true"></i></div>`);
		$('.disclaimer_s').show();
	}
	for(var key in states){
		if($("select.state").children("option:selected").val()==key){
			$("select.state").children("option:selected").text(states[key]);
		}else{
			$(".state").append(`<option value="`+key+`">`+states[key]+`</option>`);
		}
	}
	if(zipcodeURL.length>0){
		showStreetState(zipcodeURL);
	}
}


function validatePhone(token,sID,questionID,answerID,formName,answerValue,send="true"){
	var phone=$('#phone-data').val();

	if(phone.length==12 && phone!='xxx-xxx-xxxx'){
		$('#phone-data').removeClass("formbad");
		$('#phone-data').attr("data","true");
		$("#red2").css({"display":"none"});
		$("#phone-data-btn").removeAttr('onclick');
		if(send=="true"){
			var data = {"trackingGuid": token, "phone": phone, "optout": false, "accepted": true}
			leadgenForm(data).then((data) => {
				nextQuestion(token,sID,questionID,answerID,formName,answerValue);
			});
		}

	}else{
		$("#red2").remove();
		$('#phone-data').addClass("formbad");
		$('#phone-data').attr("data","false");
		$(`<div id="red2" class="redtext">You must provide a phone number</div>`).insertAfter("#phone");
	}

}

function validateEmail(token,sid,question,answer,formName, answerValue,send="true"){
	var email=($("#email-data").val()).replace(/\s+/g, '');
	var emails1= email.split("@")[0];
	var emails2= email.split("@")[1];
	var dom= emails2.split(".")[0];
	var dom2= emails2.split(".")[1];
	
	var charDot=emails1.match(/\./g);
	var charHyp=emails1.match(/\-/g);
	var charUnd=emails1.match(/\_/g);
	var charsValid=0;

	if(charDot==null || charDot.length<=1){charsValid++}
	if(charHyp==null || charHyp.length<=1){charsValid++}
	if(charUnd==null || charUnd.length<=1){charsValid++}
	
	var bad=false;
	
	if(emails2!="" && emails2!=undefined && /^[a-z]*$/.test(email.charAt(email.length-1))){
		if(/^[a-zA-Z0-9]*$/.test(emails1.charAt(0)) && 
		   /^[a-zA-Z0-9]*$/.test(emails1.charAt(emails1.length-1)) && 
		   /^[a-zA-Z0-9-_.]*$/.test(emails1) && charsValid==3){	
			if(/^[a-zA-Z0-9]*$/.test(dom.charAt(0)) && 
		   	   /^[a-zA-Z0-9]*$/.test(dom.charAt(dom.length-1)) && 
		   	   /^[a-zA-Z0-9-]*$/.test(dom.charAt(dom.length-1))){
				if(dom2!="" && dom2!=undefined && /^[a-zA-Z]*$/.test(dom2)){
				   	$('#email-data-btn').removeAttr('onclick');
					$("#email-data").removeClass("formbad"); 
					$('#email-data').attr("data","true");
					$('#invalid').remove();
					if(send=="true"){
						var data = {"trackingGuid": $('#trackingGuid').val(), "email": email, "optout": false, "accepted": true}
						leadgenForm(data).then((data) => {
							nextQuestion(token,sid,question,answer,formName,answerValue);
						});
					}
				}else{bad=true;}
			}else{bad=true;}
		}else{bad=true;}
	}else{bad=true;}
	
	if(bad){
		$('#invalid').remove();
		$("#email-data").addClass("formbad");
		$('#email-data').attr("data","false");
		$("<div id='invalid'>Please Enter a Valid Email Address</div>").insertBefore('#email');
	}
}
function validateZip(token,sID,questionID,answerID,formName,answerValue,send="true"){
	var street=$("#street-data").val();
	var zip=$("#zip-data").val();
	var city=$("#city-data").val();
	if(zip.length==5){
		street=$("#street-data").val().trim();
	}
	if(zip.length==5 && state_selected!="" && street!="" && city!=""){
		$("#zip-data, #state-data, #street-data, #city-data").removeClass("formbad");
		$("#zip-data").attr("data","true");

		if(send=="true"){
			var data = {"trackingGuid": $('#trackingGuid').val(), "postalCode": zip, "street": street, "state": state_selected, "city": city,  "optout": false, "accepted": true}
			leadgenForm(data).then((data) => {
				nextQuestion(token,sID,questionID,answerID,formName,answerValue);
			});
		}
	}else{
		if(state_selected==""){$("#state-data").addClass("formbad");}else{$("#state-data").removeClass("formbad");}
		if(city==""){$("#city-data").addClass("formbad");}else{$("#city-data").removeClass("formbad");}
		if(street==""){$("#street-data").addClass("formbad");}else{$("#street-data").removeClass("formbad");}
		if(zip==""){$("#zip-data").addClass("formbad");}else{$("#zip-data").removeClass("formbad");}
		$("#zip-data").attr("data","false");
	}
}
function sendZipIp(token){
	var data = {
		"trackingGuid": token, 
		"postalCode": $('#ipZip').val(), 
		"state": $('#ipState').val(), 
		"city": $('#ipCity').val(),  
		"country": $('#ipCountry').val(),  
		"optout": false, 
		"accepted": true
	}
	leadgenForm(data)
}
function validateHeightF(token,sID,questionID,answerID,formName,answerValue,send="true"){
	var heightF=$("#heightF-data").val();
	
	if(heightF!=""){
		$("#heightF-data").removeClass("formbad");
		$("#heightF-data").attr("data","true");
		if(send=="true"){
			nextQuestion(token,sID,questionID,answerID,formName,heightF,linkout);
		}
	}else{
		$("#heightF-data").addClass("formbad");
		$("#heightF-data").attr("data","false");
	}
}
function validateHeightI(token,sID,questionID,answerID,formName,answerValue,send="true"){
	var heightI=$("#heightI-data").val();
	
	if(heightI!=""){
		$("#heightI-data").removeClass("formbad");
		$("#heightI-data").attr("data","true");
		if(send=="true"){
			leadgenForm(data).then((data) => {
				nextQuestion(token,sID,questionID,answerID,formName,answerValue);
			});
		}
	}else{
		$("#heightI-data").addClass("formbad");
		$("#heightI-data").attr("data","false");
	}
}
function validateWeight(token,sID,questionID,answerID,formName,answerValue,send="true"){
	var weight=$("#weight-data").val();
	
	if(weight!="" && weight>=50){
		$("#weightbad").hide();
		$("#weight-data").removeClass("formbad");
		$("#weight-data").attr("data","true");
		if(send=="true"){
			leadgenForm(data).then((data) => {
				nextQuestion(token,sID,questionID,answerID,formName,answerValue);
			});
		}
	}else{
		$("#weightbad").show();
		$("#weight-data").addClass("formbad");
		$("#weight-data").attr("data","false");
	}
}
function validateAll(token,sID,questionID,answerID,formName,answerValues,valP,valE,valZ,valN,valWH,valLN,valB){
	var sendP='true';
	var sendE='true';
	var sendZ='true';
	var sendN='true';
	var sendLN='true';
	var sendW='true';
	var sendHI='true';
	var sendHF='true';
	var sendB='true';
	if(valP=='true'){
		validatePhone(token,sID,questionID,answerID,formName,answerValues,"false");
		sendP=$("#phone-data").attr("data");
	}
	if(valE=='true'){
		validateEmail(token,sID,questionID,answerID,formName,answerValues,"false");
		sendE=$("#email-data").attr("data");
	}
	if(valZ=='true'){
		validateZip(token,sID,questionID,answerID,formName,answerValues,"false");
		sendZ=$("#zip-data").attr("data");
	}
	if(valN=='true'){
		validateName(token,sID,questionID,answerID,formName,answerValues,"false");
		sendN=$("#fname-data").attr("data");
	}
	if(valLN=='true'){
		validateLName(token,sID,questionID,answerID,formName,answerValues,"false");
		sendLN=$("#lname-data").attr("data");
	}
	if(valB=='true'){
		validateBirthday(token,sID,questionID,answerID,formName,answerValues,"false");
		sendB=$("#birthday-data").attr("data");
	}
	if(valWH=='true'){
		validateHeightF(token,sID,questionID,answerID,formName,answerValues,"false");
		validateHeightI(token,sID,questionID,answerID,formName,answerValues,"false");
		validateWeight(token,sID,questionID,answerID,formName,answerValues,"false");
		sendW=$("#weight-data").attr("data");
		sendHI=$("#heightI-data").attr("data");
		sendHF=$("#heightF-data").attr("data");
	}
	if(	sendP=='true' && sendE=='true' && sendZ=='true' && sendN=='true' && sendLN=='true' && sendW=='true' && sendHI=='true' && sendHF=='true' && sendB=='true'){
		var data = {
			"trackingGuid": $('#trackingGuid').val(),
			"optout": false, "accepted": true
		}
		if(valP=='true'){data.phone=$("#phone-data").val()}
		if(valE=='true'){data.email=$("#email-data").val().replace(/\s+/g, '')}
		if(valZ=='true'){
			data.street=$("#street-data").val().trim();
			data.postalCode=$("#zip-data").val();
			data.state=state_selected,
			data.city=$("#city-data").val()
		}
		if(valN=='true'){
			data.firstName=$("#fname-data").val().trim();
		}
		if(valWH=='true'){
			data.weight=$("#weight-data").val();
			data.heightFt=$("#heightI-data").val();
			data.heightIn=$("#heightF-data").val();
		}
		if(valLN=='true'){
			data.lastName=$("#lname-data").val().trim();
		}
		if(valB=='true'){
			data.dayOfBirth=$("#months").children("option:selected").val();
			data.monthOfBirth=$("#days").children("option:selected").val();
			data.yearOfBirth=$("#years").children("option:selected").val();
		}
		leadgenForm(data).then((data) => {
			nextQuestion(token,sID,questionID,answerID,formName,answerValues);
		});
	}
}
function validateName(token,sID,questionID,answerID,formName,answerValues,send="true"){
	var valid=0;
	var firstName=$('#fname-data').val();
	
	if(firstName.trim().length==0){ 
		$('#fname-data').addClass("formbad"); 
		$("#fname-data").attr("data","false");
	} else { 
		$('#fname-data').removeClass("formbad"); valid++; 	
		$("#fname-data").attr("data","true");}

	if(valid==1){
		if(send=="true"){
			var data = {
				"trackingGuid": token,
				"firstName": firstName.trim(),
				"optout": false, "accepted": true
			}
			leadgenForm(data).then((data) => {
				nextQuestion(token,sID,questionID,answerID,formName,answerValues);
			});
		}
	}
}
function validateLName(token,sID,questionID,answerID,formName,answerValues,send="true"){
	var valid=0;
	var lastName=$('#lname-data').val();

	if(lastName.trim().length==0){ 
		$('#lname-data').addClass("formbad"); 
		$("#lname-data").attr("data","false");
	} else { 
		$('#lname-data').removeClass("formbad"); valid++; 
		$("#lname-data").attr("data","true");
	}
	if(valid==2){
		if(send=="true"){
			var data = {
				"trackingGuid": token,
				"lastName": lastName.trim(),
				"optout": false, "accepted": true
			}
			leadgenForm(data).then((data) => {
				nextQuestion(token,sID,questionID,answerID,formName,answerValues);
			});
		}
	}
}
function validateBirthday(token,sID,questionID,answerID,formName,answerValues,send="true"){
	var valid=0;
	var month=$("#months").children("option:selected").val();
	var day=$("#days").children("option:selected").val();
	var year=$("#years").children("option:selected").val();
	
	if(month!="Month"){$("#month").removeClass("formbad"); valid++;}else{$("#month").addClass("formbad")}
	if(day!="Day"){$("#day").removeClass("formbad"); valid++;}else{$("#day").addClass("formbad")}
	if(year!="Year"){$("#year").removeClass("formbad"); valid++;}else{$("#year").addClass("formbad")}

	if(valid==3){
		$("#birthday-data").attr("data","true");
		if(send=="true"){
			var data = {
				"trackingGuid": token,
				"yearOfBirth": year,
				"monthOfBirth": month,
				"dayOfBirth": day,
				"optout": false, "accepted": true
			}
			leadgenForm(data).then((data) => {
				nextQuestion(token,sID,questionID,answerID,formName,answerValues);
			});
		}
	}
}
function days(n){
	var dayData= [];
	$("#days").empty();
	for(var i=1; i<n+1; i++){
			dayData.push(i);
	}
	for(var d=0; d<dayData.length; d++){
		$("#days").append(`<option value="`+dayData[d]+`">`+dayData[d]+`</option>`);
	}
	$("#days").prepend(`<option value="Day" disabled selected>Day</option>`);
}
function daysInMonth() {
		var m=$("select#months").children("option:selected").val();
		var data;
		if(m==2){
		   data= 29;
		   days(data);
		}else if(m==9 || m==4 || m==6 || m==11){
			data= 30;
			days(data);
		}else{
			data= 31
			days(data);
		}		
}
function dashedNumber(phone){
	const afterIndices = [3,6]; 
	var length;
	var value='';
	value=phone.value;
	length = phone.value.length;
	if(length==10){
		phone.setAttribute('maxlength','12');
	}
	if(phone.getAttribute('maxlength')>10){
		var patt = new RegExp('[0-9]{3}[ -]{0,1}[0-9]{3}[-]{0,1}');
		var res = patt.test(value);
		if(!res){
			phone.setAttribute('maxlength','10');
		}
	}
    let newValue = '' 
    for(let i=0; i<length; i++){
      if(afterIndices.includes(i))
        newValue+='-'
      newValue+=value[i];
    }
    return newValue;
}
function alpha(e) { 
	var k; 
	document.all ? k = e.key : k = e.which; 
	return (k == 189 || (k >= 48 && k <= 57)); 
}
function validateKeyStrokes(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode >= 65 && charCode <=90 || charCode >= 97 && charCode <=122 ||  charCode ==32 ||  charCode ==45) {
        return true;
    }
    return false;
}
function showStreetState(){
	$('.state').on('change', function(){
		 state_selected=$("select.state").children("option:selected").val();
	});
	if($('#zip-data').val()!=zipcode){
		zipcode =$('#zip-data').val();
		if(zipcode.length==5){
			$.ajax({
				type: "GET",
				url: "https://"+pipeline+"/api/service/getCityState/"+zipcode,
				success: function(d){
					if(d.state.length>0 && d.state!=""){
						state_selected=d.state;
						$("#state-data option[value="+d.state+"]").prop('selected', true);
						$("#city-data").val(d.city);
					}
				}
			});
		}
	}else{$("#state-data option[value="+state_selected+"]").prop('selected', true);}
	$('.inline').css({'display':'inline-block'});
}
function leadgenForm(data){
	var email=false;
	if(typeof data.email != 'undefined'){
	   	email=true;
	}
	return new Promise((resolve, reject) => {
		$.ajax({
			type: "POST",
			url: "https://"+domain+"/survey/leadgen",
			data:  JSON.stringify(data),
			contentType: false,
			success: function(d){
				if(d.success==true && d.duplicate_email==false && email==true){
					$.ajax({
						url: "",
						data:'_type=ajax&_action=master-pixel_email&s2='+click_id+'&s3='+Brand,
						dataType:'json',
						type: 'POST',
					});
				}
				resolve(data)
			},
			error: 
			function (error) {
				reject(error)
			}
		});
	});
}
function showDisclaimer(){
	if($('.disclaimer_s').hasClass('all_tx')){
		$('.arrow-container i').removeClass('fa-arrow-up').addClass('fa-arrow-down');
		$('.disclaimer_s').removeClass('all_tx');
	}else{
		$('.arrow-container i').addClass('fa-arrow-up').removeClass('fa-arrow-down');
		$('.disclaimer_s').addClass('all_tx');				 
	}
}
function preventS(e){
	  if(e.keyCode == 32 || e.code == "Space") {
		return false;
	  }
}