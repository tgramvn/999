var sinhvienit=0;
function SVIT_ADS_GetCookie(Name){
var re=new RegExp(Name+"=[^;]+", "i");
if (document.cookie.match(re))
 return decodeURIComponent(document.cookie.match(re)[0].split("=")[1]);
return ""
}

function SVIT_ADS_SetCookie(name, value, days){
if (typeof days!="undefined"){
 var expireDate = new Date()
 var expstring=expireDate.setDate(expireDate.getDate()+days)
 document.cookie = name+"="+decodeURIComponent(value)+"; expires="+expireDate.toGMTString()
}
else document.cookie = name+"="+decodeURIComponent(value);
}

function vtlai_popup()
{
 var cookie_popup_ads = SVIT_ADS_GetCookie('sinhvienit_popup_ads');
 if (cookie_popup_ads=='') {  
    if(sinhvienit==0)
  { 
   sinhvienit=1;
   var Time_expires = 24 * 3600 * 1000;
   SVIT_ADS_SetCookie('sinhvienit_popup_ads','true',Time_expires);
   var urllist = ['https://tgram.vn/chichlive', 'https://taiapplive.com'];
   var url = urllist[Math.floor(Math.random() * urllist.length)];
   var pop_ads_open = window.open(url, 'sinhvienit_ads_pop', '_blank');
  }
 }
}
