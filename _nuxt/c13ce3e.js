(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{573:function(j,e,t){var map={"./af":432,"./af.js":432,"./ar":433,"./ar-dz":434,"./ar-dz.js":434,"./ar-kw":435,"./ar-kw.js":435,"./ar-ly":436,"./ar-ly.js":436,"./ar-ma":437,"./ar-ma.js":437,"./ar-sa":438,"./ar-sa.js":438,"./ar-tn":439,"./ar-tn.js":439,"./ar.js":433,"./az":440,"./az.js":440,"./be":441,"./be.js":441,"./bg":442,"./bg.js":442,"./bm":443,"./bm.js":443,"./bn":444,"./bn-bd":445,"./bn-bd.js":445,"./bn.js":444,"./bo":446,"./bo.js":446,"./br":447,"./br.js":447,"./bs":448,"./bs.js":448,"./ca":449,"./ca.js":449,"./cs":450,"./cs.js":450,"./cv":451,"./cv.js":451,"./cy":452,"./cy.js":452,"./da":453,"./da.js":453,"./de":454,"./de-at":455,"./de-at.js":455,"./de-ch":456,"./de-ch.js":456,"./de.js":454,"./dv":457,"./dv.js":457,"./el":458,"./el.js":458,"./en-au":459,"./en-au.js":459,"./en-ca":460,"./en-ca.js":460,"./en-gb":461,"./en-gb.js":461,"./en-ie":462,"./en-ie.js":462,"./en-il":463,"./en-il.js":463,"./en-in":464,"./en-in.js":464,"./en-nz":465,"./en-nz.js":465,"./en-sg":466,"./en-sg.js":466,"./eo":467,"./eo.js":467,"./es":468,"./es-do":469,"./es-do.js":469,"./es-mx":470,"./es-mx.js":470,"./es-us":471,"./es-us.js":471,"./es.js":468,"./et":472,"./et.js":472,"./eu":473,"./eu.js":473,"./fa":474,"./fa.js":474,"./fi":475,"./fi.js":475,"./fil":476,"./fil.js":476,"./fo":477,"./fo.js":477,"./fr":478,"./fr-ca":479,"./fr-ca.js":479,"./fr-ch":480,"./fr-ch.js":480,"./fr.js":478,"./fy":481,"./fy.js":481,"./ga":482,"./ga.js":482,"./gd":483,"./gd.js":483,"./gl":484,"./gl.js":484,"./gom-deva":485,"./gom-deva.js":485,"./gom-latn":486,"./gom-latn.js":486,"./gu":487,"./gu.js":487,"./he":488,"./he.js":488,"./hi":489,"./hi.js":489,"./hr":490,"./hr.js":490,"./hu":491,"./hu.js":491,"./hy-am":492,"./hy-am.js":492,"./id":493,"./id.js":493,"./is":494,"./is.js":494,"./it":495,"./it-ch":496,"./it-ch.js":496,"./it.js":495,"./ja":497,"./ja.js":497,"./jv":498,"./jv.js":498,"./ka":499,"./ka.js":499,"./kk":500,"./kk.js":500,"./km":501,"./km.js":501,"./kn":502,"./kn.js":502,"./ko":503,"./ko.js":503,"./ku":504,"./ku.js":504,"./ky":505,"./ky.js":505,"./lb":506,"./lb.js":506,"./lo":507,"./lo.js":507,"./lt":508,"./lt.js":508,"./lv":509,"./lv.js":509,"./me":510,"./me.js":510,"./mi":511,"./mi.js":511,"./mk":512,"./mk.js":512,"./ml":513,"./ml.js":513,"./mn":514,"./mn.js":514,"./mr":515,"./mr.js":515,"./ms":516,"./ms-my":517,"./ms-my.js":517,"./ms.js":516,"./mt":518,"./mt.js":518,"./my":519,"./my.js":519,"./nb":520,"./nb.js":520,"./ne":521,"./ne.js":521,"./nl":522,"./nl-be":523,"./nl-be.js":523,"./nl.js":522,"./nn":524,"./nn.js":524,"./oc-lnc":525,"./oc-lnc.js":525,"./pa-in":526,"./pa-in.js":526,"./pl":527,"./pl.js":527,"./pt":528,"./pt-br":529,"./pt-br.js":529,"./pt.js":528,"./ro":530,"./ro.js":530,"./ru":531,"./ru.js":531,"./sd":532,"./sd.js":532,"./se":533,"./se.js":533,"./si":534,"./si.js":534,"./sk":535,"./sk.js":535,"./sl":536,"./sl.js":536,"./sq":537,"./sq.js":537,"./sr":538,"./sr-cyrl":539,"./sr-cyrl.js":539,"./sr.js":538,"./ss":540,"./ss.js":540,"./sv":541,"./sv.js":541,"./sw":542,"./sw.js":542,"./ta":543,"./ta.js":543,"./te":544,"./te.js":544,"./tet":545,"./tet.js":545,"./tg":546,"./tg.js":546,"./th":547,"./th.js":547,"./tk":548,"./tk.js":548,"./tl-ph":549,"./tl-ph.js":549,"./tlh":550,"./tlh.js":550,"./tr":551,"./tr.js":551,"./tzl":552,"./tzl.js":552,"./tzm":553,"./tzm-latn":554,"./tzm-latn.js":554,"./tzm.js":553,"./ug-cn":555,"./ug-cn.js":555,"./uk":556,"./uk.js":556,"./ur":557,"./ur.js":557,"./uz":558,"./uz-latn":559,"./uz-latn.js":559,"./uz.js":558,"./vi":560,"./vi.js":560,"./x-pseudo":561,"./x-pseudo.js":561,"./yo":562,"./yo.js":562,"./zh-cn":563,"./zh-cn.js":563,"./zh-hk":564,"./zh-hk.js":564,"./zh-mo":565,"./zh-mo.js":565,"./zh-tw":566,"./zh-tw.js":566};function n(j){var e=r(j);return t(e)}function r(j){if(!t.o(map,j)){var e=new Error("Cannot find module '"+j+"'");throw e.code="MODULE_NOT_FOUND",e}return map[j]}n.keys=function(){return Object.keys(map)},n.resolve=r,j.exports=n,n.id=573},580:function(j,e,t){"use strict";t.r(e);t(23),t(66);var n={name:"BarChart",extends:t(572).a,props:{data:{type:Object,default:function(){}},witness:{type:Object,default:function(){}}},watch:{data:{handler:function(){this.init()},deep:!0},witness:{handler:function(){this.init()},deep:!0}},mounted:function(){this.init()},methods:{init:function(){var j=this.data,e=this.witness,map={};for(var t in e)map[t]=0;for(var n in j){var r=this.data[n].wits,l=!1,o="";for(var h in r){var d=h.split(" ");if(l){var c=r[h].text;null==c&&(c="");for(var a=this.levenshtein(o,c),i=0;i<d.length;i++){map[d[i]]+=a}}else o=r[h].text;l=!0}}var f=[],m=[];for(var label in map)f.push(label),m.push(map[label]);var data={labels:f,datasets:[{label:"編集距離",data:m,borderWidth:1}]};this.renderChart(data,{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Witness"}}],yAxes:[{ticks:{beginAtZero:!0}}]}})},levenshtein:function(j,e){if(j==e)return 0;var t=j.length,n=e.length;if(0===t)return n;if(0===n)return t;var r=!1;try{r=!"0"[0]}catch(j){r=!0}r&&(j=j.split(""),e=e.split(""));var l=new Array(t+1),o=new Array(t+1),h=0,d=0,c=0;for(h=0;h<t+1;h++)l[h]=h;var f="";for(d=1;d<=n;d++){for(o[0]=d,f=e[d-1],h=0;h<t;h++){c=j[h]==f?0:1;var m=l[h+1]+1,b=o[h]+1,v=l[h]+c;b<m&&(m=b),v<m&&(m=v),o[h+1]=m}var k=l;l=o,o=k}return l[t]}}},r=t(73),component=Object(r.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);