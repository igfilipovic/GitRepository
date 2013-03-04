
// Title: Tigra Hints
// URL: http://www.softcomplex.com/products/tigra_hints/
// Version: 1.2
// Date: 04/18/2003 (mm/dd/yyyy)
// Feedback: feedback@softcomplex.com (specify product title in the subject)
// Note: Permission given to use this script in ANY kind of applications if
//    header lines are left unchanged.
// About us: Our company provides offshore IT consulting services.
//    Contact us at sales@softcomplex.com if you have any programming task you
//    want to be handled by professionals. Our typical hourly rate is $20.

function THints (o_cfg, items) {
	this.top = o_cfg.top ? o_cfg.top : 0;
	this.left = o_cfg.left ? o_cfg.left : 0;
	this.n_dl_show = o_cfg.show_delay;
	this.n_dl_hide = o_cfg.hide_delay;
	this.b_wise = o_cfg.wise;
	this.b_follow = o_cfg.follow;
	this.x = 0;
	this.y = 0;
	this.divs = [];
	this.show  = TTipShow;
	this.showD = TTipShowD;
	this.hide = TTipHide;
	this.move = TTipMove;
	if (document.layers) return;
	
	var b_IE = navigator.userAgent.indexOf('MSIE') > -1,
	s_tag = ['<div id="TTip%name%" style="visibility:hidden;position:absolute;top:470px;left:140px;',   b_IE ? 'width:100px;height:100px;' : '', o_cfg['z-index'] != null ? 'z-index:' + o_cfg['z-index'] : '', '"><table cellpadding="0" cellspacing="0" ><tr><td nowrap>%text%</td></tr><tr><td align="center" class="portrait_title">Jack of all, master of none;</td></tr><tr><td class="arrow" style="height:50px;"><img src="http://free-zg.t-com.hr/wsweb/m/images/arrow.gif" alt="arrow" /></td></tr></table></div>'].join('');

	this.getElem = 
		function (id) { return document.all ? document.all[id] : document.getElementById(id); };
	this.showElem = 
		function (id, hide) { this.divs[id].o_css.visibility = hide ? 'hidden' : 'visible'; };
	this.getWinSz = window.innerHeight != null 
		? function (b_hight) { return b_hight ? innerHeight : innerWidth; }
		: function (b_hight) { return document.body[b_hight ? 'clientHeight' : 'clientWidth']; };	
	this.getWinSc = window.innerHeight != null 
		? function (b_hight) { return b_hight ? pageYOffset : pageXOffset; }
		: function (b_hight) { return document.body[b_hight ? 'scrollTop' : 'scrollLeft']; };	
	if (window.opera) {
		this.getSize = function (id, b_hight) { 
			return this.divs[id].o_css[b_hight ? 'pixelHeight' : 'pixelWidth']
		};
		document.onmousemove = function () {
			myHint.x = event.clientX;
			myHint.y = event.clientY;
			if (myHint.b_follow && myHint.visible) myHint.move(myHint.visible)
			return true;
		};
	}
	else {
		this.getSize = function (id, b_hight) { 
			return this.divs[id].o_obj[b_hight ? 'offsetHeight' : 'offsetWidth'] 
		};
		document.onmousemove = b_IE
		? function () {
			myHint.x = event.clientX + document.body.scrollLeft;
			myHint.y = event.clientY + document.body.scrollTop;
			if (myHint.b_follow && myHint.visible) myHint.move(myHint.visible)
			return true;
		} 
		: function (e) {
			myHint.x = e.pageX;
			myHint.y = e.pageY;
			if (myHint.b_follow && myHint.visible) myHint.move(myHint.visible)
			return true;
		};
		}
	for (i in items) {
		document.write (s_tag.replace(/%text%/, items[i]).replace(/%name%/, i));
		this.divs[i] = { 'o_obj' : this.getElem('TTip' + i) };
		this.divs[i].o_css = this.divs[i].o_obj.style;
	}
	}

	function TTipShow (id) {
		if (document.layers) return;
		this.hide();
		if (this.divs[id]) {
			
				if (this.n_dl_show)
					this.divs[id].timer = setTimeout("myHint.showD(" + id + ")", this.n_dl_show);
				else
					this.showD(id);
			this.visible = id;
		}
	}

	function TTipShowD (id) {
		this.move(id);
		this.showElem(id);
		if (this.n_dl_hide) this.timer = setTimeout("myHint.hide()", this.n_dl_hide);
	}

	function TTipMove (id) {
		var n_x = this.x + this.left, n_y = this.y + this.top;
		if (this.b_wise) {
			var n_w = this.getSize(id), n_h = this.getSize(id, true),
			n_win_w = this.getWinSz(), n_win_h = this.getWinSz(true),
			n_win_l = this.getWinSc(), n_win_t = this.getWinSc(true);
			if (n_x + n_w > n_win_w + n_win_l) n_x = n_win_w + n_win_l - n_w;
			if (n_x < n_win_l) n_x = n_win_l;
			if (n_y + n_h > n_win_h + n_win_t) n_y = n_win_h + n_win_t - n_h;
			if (n_y < n_win_t) n_y = n_win_t;
		}
		this.divs[id].o_css.left = n_x;
		this.divs[id].o_css.top = n_y;
	}

	function TTipHide () {
		if (this.timer) clearTimeout(this.timer);
		if (this.visible != null) {
			if (this.divs[this.visible].timer) clearTimeout(this.divs[this.visible].timer);
			setTimeout("myHint.showElem(" + this.visible + ", true)", 10);
			this.visible = null;
		}
	}
	var HINTS_CFG = {
	'top'        : 0, // a vertical offset of a hint from mouse pointer
	'left'       : 0, // a horizontal offset of a hint from mouse pointer
	'show_delay' : 500, // a delay between object mouseover and hint appearing
	'hide_delay' : 9000, // a delay between hint appearing and hint hiding
	'wise'       : true,
	'follow'     : true,
	'z-index'    : 100 // a z-index for all hint layers
	},

	HINTS_ITEMS = [
		"Slika profila", //Test comment
		"<img src='http://free-zg.t-com.hr/wsweb/m/images/profile_pic.jpg'>",
		"<p class='row'> Natrag   </p>", 
		"<p class='alerter'>Naprijed",
		"<p class='alerter'>Napomena"
	];
	//alert(HINTS_ITEMS[0]+"=hits first item");
	var myHint = new THints (HINTS_CFG, HINTS_ITEMS);

function resize(multiplier) { 
	if (document.body.style.fontSize == "")
	{ 
		document.body.style.fontSize = "14px"; 
	} 
	document.body.style.fontSize = parseFloat(document.body.style.fontSize) + multiplier + "px";
}
function MM_openBrWindow(theURL,winName,features) { 
	  window.open(theURL,winName,features); 
	} 

function sendMail() {
    var link = "mailto:igor.filipovich1@gmail.com"
             + "?cc=igor1982ster@gmail.com"
             + "&subject=" + escape("Job proposal")
             + "&body=" + escape(document.getElementById('body_text').value)
    ;

    window.location.href = link;
}

function toggle(){
	var flag = false;
	//var pass = "2fa14704e47ae296f9dde0cfacec71a41c151d1c";
	//var hash = document.getElementById("hash_passw").value;
	//window.alert('test1');
	if(!flag)
	{
		flag = true;
		//if(pass == hash)
		//{
		//	window.alert('test2');
			var pan = document.getElementById("contentDiv").style.display;
		//	window.location = "http://free-zg.t-com.hr/wsweb/index.html";
			if(pan == "block")
			{
				document.getElementById("contentDiv").style.display = "none";
			}
			else
			{
				document.getElementById("contentDiv").style.display = "block";
			}
		//}
		//else
		//	alert('Lozinka je neispravna!');
	}
}

function Clickheretoprint()
{ 
	var disp_setting="toolbar=yes,location=no,directories=yes,menubar=yes,"; 
	disp_setting+="scrollbars=yes,width=650, height=600, left=100, top=25"; 
	var content_vlue = document.getElementById("print_div").innerHTML; 
	var docprint=window.open("","",disp_setting); 
    docprint.document.open(); 
	docprint.document.write('<html><head><title>Inel Power System</title>'); 
	docprint.document.write('</head><body onLoad="self.print()">');          
	docprint.document.write(content_vlue);          
	docprint.document.write('</body></html>'); 
	docprint.document.close(); 
	docprint.focus(); 
}




