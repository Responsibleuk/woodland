"use strict";
function eggbfc(winw, resultoption) {
	var lasttop = winw,
		lastbottom = 0,
		smallest = 9999,
		largest = 0,
		samount = 0,
		lamoung = 0,
		lastamount = 0,
		resultid = 0,
		resultidb = 0,
		responsiveEntries = [{
			width: 1400,
			amount: 2,
			mmheight: 0
		}, {
			width: 1170,
			amount: 2,
			mmheight: 0
		}, {
			width: 1024,
			amount: 2,
			mmheight: 0
		}, {
			width: 960,
			amount: 2,
			mmheight: 0
		}, {
			width: 778,
			amount: 2,
			mmheight: 0
		}, {
			width: 640,
			amount: 2,
			mmheight: 0
		}, {
			width: 480,
			amount: 1,
			mmheight: 0
		}];
	if (responsiveEntries != undefined && responsiveEntries.length > 0)
		jQuery.each(responsiveEntries, function(index, obj) {
			var curw = obj.width != undefined ? obj.width : 0,
				cura = obj.amount != undefined ? obj.amount : 0;
			if (smallest > curw) {
				smallest = curw;
				samount = cura;
				resultidb = index;
			}
			if (largest < curw) {
				largest = curw;
				lamount = cura;
			}
			if (curw > lastbottom && curw <= lasttop) {
				lastbottom = curw;
				lastamount = cura;
				resultid = index;
			}
		});
	if (smallest > winw) {
		lastamount = samount;
		resultid = resultidb;
	}
	var obj = new Object;
	obj.index = resultid;
	obj.column = lastamount;
	if (resultoption == "id")
		return obj;
	else
		return lastamount;
}
if ("masonry" == "even") {
	var coh = 0,
		container = jQuery("#esg-grid-1-2");
	var cwidth = container.width(),
		ar = "4:3",
		gbfc = eggbfc(jQuery(window).width(), "id"),
		row = 3;
	ar = ar.split(":");
	aratio = parseInt(ar[0], 0) / parseInt(ar[1], 0);
	coh = cwidth / aratio;
	coh = coh / gbfc.column * row;
	var ul = container.find("ul").first();
	ul.css({
		display: "block",
		height: coh + "px"
	});
}
var essapi_1;
jQuery(document).ready(function() {
	essapi_1 = jQuery("#esg-grid-1-2").tpessential({
		gridID: 1,
		layout: "masonry",
		forceFullWidth: "off",
		lazyLoad: "off",
		row: 3,
		loadMoreAjaxToken: "8c11758e46",
		loadMoreAjaxUrl: "http://stevenwatkins.axiomthemes.com/wp-admin/admin-ajax.php",
		loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
		ajaxContentTarget: "ess-grid-ajax-container-",
		ajaxScrollToOffset: "0",
		ajaxCloseButton: "off",
		ajaxContentSliding: "on",
		ajaxScrollToOnLoad: "on",
		ajaxNavButton: "off",
		ajaxCloseType: "type1",
		ajaxCloseInner: "false",
		ajaxCloseStyle: "light",
		ajaxClosePosition: "tr",
		space: 29,
		pageAnimation: "fade",
		paginationScrollToTop: "off",
		spinner: "spinner0",
		lightBoxMode: "single",
		animSpeed: 1000,
		delayBasic: 1,
		mainhoverdelay: 1,
		filterType: "single",
		showDropFilter: "hover",
		filterGroupClass: "esg-fgc-1",
		googleFonts: ['Open+Sans:300,400,600,700,800', 'Raleway:100,200,300,400,500,600,700,800,900', 'Droid+Serif:400,700'],
		aspectratio: "4:3",
		responsiveEntries: [{
			width: 1400,
			amount: 2,
			mmheight: 0
		}, {
			width: 1170,
			amount: 2,
			mmheight: 0
		}, {
			width: 1024,
			amount: 2,
			mmheight: 0
		}, {
			width: 960,
			amount: 2,
			mmheight: 0
		}, {
			width: 778,
			amount: 2,
			mmheight: 0
		}, {
			width: 640,
			amount: 2,
			mmheight: 0
		}, {
			width: 480,
			amount: 1,
			mmheight: 0
		}]
	});

});
