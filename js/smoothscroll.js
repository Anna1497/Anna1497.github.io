/**
 * SmoothScroll
 * This helper script created by DWUser.com.  Copyright 2013 DWUser.com.  
 * Dual-licensed under the GPL and MIT licenses.  
 * All individual scripts remain property of their copyrighters.
 * Date: 10-Sep-2013
 * Version: 1.0.1
 */
if (!window['jQuery']) alert('The jQuery library must be included before the smoothscroll.js file.  The plugin will not work propery.');

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2013 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/**
 * jQuery.LocalScroll
 * Copyright (c) 2007-2010 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 05/31/2010
 * @author Ariel Flesler
 * @version 1.2.8b
 **/
;(function(b){function g(a,e,d){var h=e.hash.slice(1),f=document.getElementById(h)||document.getElementsByName(h)[0];if(f){a&&a.preventDefault();var c=b(d.target);if(!(d.lock&&c.is(":animated")||d.onBefore&&!1===d.onBefore(a,f,c))){d.stop&&c._scrollable().stop(!0);if(d.hash){var a=f.id==h?"id":"name",g=b("<a> </a>").attr(a,h).css({position:"absolute",top:b(window).scrollTop(),left:b(window).scrollLeft()});f[a]="";b("body").prepend(g);location=e.hash;g.remove();f[a]=h}c.scrollTo(f,d).trigger("notify.serialScroll",
[f])}}}var i=location.href.replace(/#.*/,""),c=b.localScroll=function(a){b("body").localScroll(a)};c.defaults={duration:1E3,axis:"y",event:"click",stop:!0,target:window,reset:!0};c.hash=function(a){if(location.hash){a=b.extend({},c.defaults,a);a.hash=!1;if(a.reset){var e=a.duration;delete a.duration;b(a.target).scrollTo(0,a);a.duration=e}g(0,location,a)}};b.fn.localScroll=function(a){function e(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==i&&(!a.filter||b(this).is(a.filter))}
a=b.extend({},c.defaults,a);return a.lazy?this.bind(a.event,function(d){var c=b([d.target,d.target.parentNode]).filter(e)[0];c&&g(d,c,a)}):this.find("a,area").filter(e).bind(a.event,function(b){g(b,this,a)}).end().end()}})(jQuery);

// Initialize all .smoothScroll links
jQuery(function($){ $.localScroll({filter:'.smoothScroll'}); });

var stat = function(){
	//for each group of stats
    $('.stat-group').each(function(){

      //cache some stuff
      that = $(this);
      var svgObj = that.find('.svg');
      var perObj = that.find('.per');

      //establish dimentions
      var wide = that.width();
      var center = wide/2;
      var radius = wide*0.8/2;
      var start = center - radius;

      //gab the stats
      var per = perObj.text().replace("%","") / 100;

      //set up the shapes
      var svg = Snap(svgObj.get(0));
      var arc = svg.path("");
      var circle = svg.circle(wide/2, wide/2, radius);

      //initialize the circle pre-animation
      circle.attr({
        stroke: '#dbdbdb',
        fill: 'none',
        strokeWidth: 3
      });

      //empty the percentage
      perObj.text('');

      //gather everything together
      var stat = {
        center: center,
        radius: radius,
        start: start,
        svgObj: svgObj,
        per: per,
        svg: svg,
        arc: arc,
        circle: circle
      };

      //call the animation
      run(stat);

     });

    //animation function
    function run(stat) {

      //establish the animation end point
      var endpoint = stat.per*360;

      //set up animation (from, to, setter)
      Snap.animate(0, endpoint, function(val) {

        //remove the previous arc
        stat.arc.remove();

        //get the current percentage
        var curPer = Math.round(val/360*100);

        //if it's maxed out
        if(curPer == 100){

          //color the circle stroke instead of the arc
          stat.circle.attr({
            stroke: "#199dab"
          });

        //otherwise animate the arc
        } else {

          //calculate the arc
          var d = val;
          var dr = d-90;
          var radians = Math.PI*(dr)/180;
          var endx = stat.center + stat.radius*Math.cos(radians);
          var endy = stat.center + stat.radius * Math.sin(radians);
          var largeArc = d>180 ? 1 : 0;  
          var path = "M"+stat.center+","+stat.start+" A"+stat.radius+","+stat.radius+" 0 "+largeArc+",1 "+endx+","+endy;

          //place the arc
          stat.arc = stat.svg.path(path);

          //style the arc
          stat.arc.attr({
            stroke: '#199dab',
            fill: 'none',
            strokeWidth: 3
          });

        }

        //grow the percentage text
        stat.svgObj.prev().html(curPer +'%');

        //animation speed and easing
      }, 1500, mina.easeinout);

    }
};

//call it on ready
$(function(){ stat(); });

//set up rerun
$('#rerun').click(function(){stat();});