function searchBanner() {
	var idmat = document.getElementById("idMat").value;
	var type = document.getElementById("Type").value;

	switch (type) {
		case "1":
			document.getElementById("qdlc").href = "https://my.pampanetwork.com/merchants/index.php#bannerView;%7B%22id%22:%22" + idmat + "%22,%20%22type%22:%22I%22,%20%22od%22:%22false%22%7D";
			break;
		case "2":
			document.getElementById("qdlc").href = "https://my.pampanetwork.com/merchants/index.php#bannerView;%7B%22id%22:%22" + idmat + "%22,%20%22type%22:%22E%22,%20%22od%22:%22false%22%7D";
			break;
		case "3":
			document.getElementById("qdlc").href = "https://my.pampanetwork.com/merchants/index.php#bannerView;%7B%22id%22:%22" + idmat + "%22,%20%22type%22:%22A%22,%20%22od%22:%22false%22%7D";
			break;
	}
};

function searchCampaign() {
	var idcam = document.getElementById("idCam").value;

	document.getElementById("qdlci").href = "https://my.pampanetwork.com/merchants/index.php#campaign;%7B%22id%22:%22" + idcam + "%22,%20%22type%22:%22I%22%7D";
};
function searchBanner() {
	var idmat = document.getElementById("idMat").value;
	var type = document.getElementById("Type").value;

	switch (type) {
		case "1":
			document.getElementById("qdlc").href = "https://my.pampanetwork.com/merchants/index.php#bannerView;%7B%22id%22:%22" + idmat + "%22,%20%22type%22:%22I%22,%20%22od%22:%22false%22%7D";
			break;
		case "2":
			document.getElementById("qdlc").href = "https://my.pampanetwork.com/merchants/index.php#bannerView;%7B%22id%22:%22" + idmat + "%22,%20%22type%22:%22E%22,%20%22od%22:%22false%22%7D";
			break;
		case "3":
			document.getElementById("qdlc").href = "https://my.pampanetwork.com/merchants/index.php#bannerView;%7B%22id%22:%22" + idmat + "%22,%20%22type%22:%22A%22,%20%22od%22:%22false%22%7D";
			break;
	}
};

function searchCampaign() {
	var idcam = document.getElementById("idCam").value;

	document.getElementById("qdlci").href = "https://my.pampanetwork.com/merchants/index.php#campaign;%7B%22id%22:%22" + idcam + "%22,%20%22type%22:%22I%22%7D";
};

function makePixel() {
	var typepixel = document.getElementById("TypePixel").value;
	var totalcost = document.getElementById("TotalCost").value;
	var accountid = document.getElementById("AccountID").value;
	var orderid = document.getElementById("OrderID").value;
	var actioncode = document.getElementById("ActionCode").value;
	var campaignid = document.getElementById("CampaignID").value;
	var currency = document.getElementById("Currency").value;
	var validador = document.getElementById("validador").value;
	var pixel_img = "";
	var pixel_frm = "";
	var pixel_gtm = "";
	var pixel_frm = "";
	var pixel = "";
	if (actioncode == 'lead') {
		pixel_img = "<img src='https://my.pampanetwork.com/scripts/sale.php?TotalCost=0&AccountId=" + accountid + "&OrderID=" + orderid + "&ActionCode=" + actioncode + "&CampaignID=" + campaignid + "' width='1' height='1'/>";
		pixel_frm = "<iframe src='https://my.pampanetwork.com/scripts/sale.php?TotalCost=0&AccountId=" + accountid + "&OrderID=" + orderid + "&ActionCode=" + actioncode + "&CampaignID=" + campaignid + "' width='1' height='1' frameborder='0'></iframe>";
		pixel_gtm = 'https://my.pampanetwork.com/scripts/sale.php?TotalCost=0&AccountId=' + accountid + '&OrderID={' + orderid + '}&ActionCode=' + actioncode + '&CampaignID=' + campaignid + ''
	} else {
		pixel_img = "<img src='https://my.pampanetwork.com/scripts/sale.php?TotalCost=" + totalcost + "&AccountId=" + accountid + "&OrderID=" + orderid + "&ActionCode=" + actioncode + "&CampaignID=" + campaignid + "&Currency=" + currency + "' width='1' height='1'/>";
		pixel_frm = "<iframe src='https://my.pampanetwork.com/scripts/sale.php?TotalCost=" + totalcost + "&AccountId=" + accountid + "&OrderID=" + orderid + "&ActionCode=" + actioncode + "&CampaignID=" + campaignid + "&Currency=" + currency + "' width='1' height='1'' frameborder='0'></iframe>";
		pixel_gtm = 'https://my.pampanetwork.com/scripts/sale.php?TotalCost={' + totalcost + '}&AccountId=' + accountid + '&OrderID={' + orderid + '}&ActionCode=' + actioncode + '&CampaignID=' + campaignid + '&Currency=' + currency + ''
	}
	
	
	switch (typepixel) {
		case "img":
			pixel = pixel_img
			break;

		case "ifr":
			pixel = pixel_frm
			break;

	}
	switch (validador) {
		case "gtm":
			pixel = pixel_gtm
			break;
		case "html":
			pixel = pixel_img
			break;


	}
	
	var mkpixel = document.getElementById("textarea").innerHTML = pixel;
		
};
function copyPixel() {
                var copyText = document.getElementById("textarea");
                copyText.select();
                document.execCommand("copy");
            }
function savePixel() {
			  var textToWrite = document.getElementById("textarea").value;
			  var textFileAsBlob = new Blob([textToWrite], {
				type: 'text/plain'
			  });
			  var fileNameToSaveAs = document.getElementById("nameFile").value;

			  var downloadLink = document.createElement("a");
			  downloadLink.download = fileNameToSaveAs;
			  downloadLink.innerHTML = "Download File";
			  if (window.webkitURL != null) {
				downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
			  } else {
				downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
				downloadLink.onclick = destroyClickedElement;
				downloadLink.style.display = "none";
				document.body.appendChild(downloadLink);
			  }

			  downloadLink.click();
};	

function addZero(i) {
                if (i < 10) {
                    i = '0' + i;
                }
                return i;
			
			}

function createUrl()
            {
                var countrycodeurl = document.getElementById("CountryCodeURL").value.trim();
                var actioncodeurl = document.getElementById("ActionCodeURL").value;
                var totalcosturl = document.getElementById("TotalCostURL").value;
                var orderidurl = document.getElementById("OrderIDURL").value;
                var campaignidurl = document.getElementById("CampaignIDURL").value;
                var referralidurl = document.getElementById("RefIDURL").value;
                var dateurl = document.getElementById("DateURL").value;
                var currencyurl = document.getElementById("CurrencyURL").value;
				var url = "";
                if(dateurl == ''){
                    var dateurl = new Date();
                    var dd = dateurl.getDate();
                    var mm = dateurl.getMonth()+1;
                    var yyyy = dateurl.getFullYear();
                    dd = addZero(dd);
                    mm = addZero(mm);
                    dateurl = yyyy + '-' + mm + '-' + dd;
                }
                switch(actioncodeurl) {
                    case 'lead':
                    case 'lead1':
                    case 'lead2':
                    case 'lead3':
                    totalcosturl = 0;
                    if(countrycodeurl == ''){
                        url = "http://track.clickwise.net/pb?ActionCode="+ actioncodeurlurl + "&TotalCost="+ totalcosturl + "&OrderID="+ orderidurl + "&CampaignID=" + campaignidurl + "&RefId=" + referralidurl + "&Date=" + dateurl;
                    }
                    else{
                        url = "http://track.clickwise.net/pb?CountryCode="+ countrycodeurl + "&ActionCode="+ actioncodeurl + "&TotalCost="+ totalcosturl + "&OrderID="+ orderidurl + "&CampaignID=" + campaignidurl + "&RefId=" + referralidurl + "&Date=" + dateurl;
                    }
                        break;
                    default:
                    if(countrycodeurl == ''){
                        url = "http://track.clickwise.net/pb?ActionCode="+ actioncodeurl + "&TotalCost="+ totalcosturl + "&OrderID="+ orderidurl + "&CampaignID=" + campaignidurl + "&RefId=" + referralidurl + "&Date=" + dateurl + "&CountryCode=" + currencyurl;
                    }
                    else{
                        url = "http://track.clickwise.net/pb?CountryCode="+ countrycodeurl + "&ActionCode="+ actioncodeurl + "&TotalCost="+ totalcosturl + "&OrderID="+ orderidurl + "&CampaignID=" + campaignidurl + "&RefId=" + referralidurl + "&Date=" + dateurl + "&CountryCode=" + currencyurl;
                    }
                }
				
                var posturl = document.getElementById("textareaurl").innerHTML = url;
};
function copyS2S() {
                var copyText = document.getElementById("textareaurl");
                copyText.select();
                document.execCommand("copy");
            }	
function saveURL() {
			  var textToWrite = document.getElementById("textareaurl").value;
			  var textFileAsBlob = new Blob([textToWrite], {
				type: 'text/plain'
			  });
			  var fileNameToSaveAs = document.getElementById("nameFileURL").value;

			  var downloadLink = document.createElement("a");
			  downloadLink.download = fileNameToSaveAs;
			  downloadLink.innerHTML = "Download File";
			  if (window.webkitURL != null) {
				downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
			  } else {
				downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
				downloadLink.onclick = destroyClickedElement;
				downloadLink.style.display = "none";
				document.body.appendChild(downloadLink);
			  }

			  downloadLink.click();
};	

function makeid(length) {
			   var result           = '';
			   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			   var charactersLength = characters.length;
			   for ( var i = 0; i < length; i++ ) {
				  result += characters.charAt(Math.floor(Math.random() * charactersLength));
			   }
		   return result;
};

function makeGIT()
            {
                var campaignname = document.getElementById("CampaignName").value;                
                var currencyadded = document.getElementById("CurrencyAdded").value;
                var typecommis = document.getElementById("TypeCommis").value;
				var actioncodeurl = document.getElementById("ActionCodeURL").value;
                var campaignidurl = document.getElementById("CampaignIDURL").value;
				var commis = document.getElementById("Commis").value;
				var added = "";
				var addedcommis = "";
				
				

                if(typecommis == '%'){
                    added = campaignidurl + ";" + campaignname + ";" + makeid(40) + ";";
                }
                else{
					added = campaignidurl + ";" + campaignname + ";" + makeid(40) + ";";

                }

                document.getElementById("textareacampaign").innerHTML = added;
				

				if(typecommis == '%'){
					addedcommis = campaignidurl + ";" + actioncodeurl + ";" + typecommis + ";" + commis + ";" + currencyadded + ";" ;  
                }
                else{
					addedcommis = campaignidurl + ";" + actioncodeurl + ";" + typecommis + ";" + commis + ";" + currencyadded + ";" ; 
                } 
				
				document.getElementById("textareacommis").innerHTML = addedcommis;
				
            };
function copyCampaign() {
                var copyText = document.getElementById("textareacampaign");
                copyText.select();
                document.execCommand("copy");
            };	
function copyCommis() {
                var copyText = document.getElementById("textareacommis");
                copyText.select();
                document.execCommand("copy");
            };
			
function createTestLink(){
                var affiliateid = document.getElementById("AffiliateID").value;
                var bannerid = document.getElementById("BannerID").value;
                var extradata = document.getElementById("ExtraData").value;
                var extradata1 = document.getElementById("ExtraData1").value;
				var testurl = "";
                if (bannerid != ''){
                    if(extradata == ''){
                        testurl = 'http://my.pampanetwork.com/scripts/click.php?a_aid=' + affiliateid + '&a_bid=' + bannerid;                        
                    }
                    else if (extradata1 == ''){
                        testurl = 'http://my.pampanetwork.com/scripts/click.php?a_aid=' + affiliateid + '&a_bid=' + bannerid + '&data1=' + extradata;                    
                    }
					else {
						testurl = 'http://my.pampanetwork.com/scripts/click.php?a_aid=' + affiliateid + '&a_bid=' + bannerid + '&data1=' + extradata + '&data2=' + extradata1;
					}
					
                }
                else{
                    $('#Alerta').modal(focus)
                }
				document.getElementById("textareateste").innerHTML = testurl
            
			
};	
function copyTest() {
                var copyText = document.getElementById("textareateste");
                copyText.select();
                document.execCommand("copy");
            };