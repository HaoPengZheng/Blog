(function(window){var svgSprite='<svg><symbol id="icon-liulan" viewBox="0 0 1024 1024"><path d="M510.557138 204.354248c-302.839283 0-458.323497 306.150702-458.323497 306.150702s117.330242 306.189587 458.323497 306.189587c308.802088 0 458.300984-304.995389 458.300984-304.995389S818.167075 204.354248 510.557138 204.354248L510.557138 204.354248 510.557138 204.354248zM511.245823 701.866279c-110.729917 0-190.772928-83.72589-190.772928-191.364399 0-107.647719 80.049151-191.352119 190.772928-191.352119 110.723777 0 190.763718 83.697237 190.763718 191.352119C702.010565 618.140389 621.970624 701.866279 511.245823 701.866279L511.245823 701.866279 511.245823 701.866279zM511.245823 395.675668c-63.286372 0.145309-114.460892 53.321416-114.460892 114.827235 0 61.473073 51.175543 114.821095 114.460892 114.821095 63.282279 0 114.453728-53.352115 114.453728-114.821095C625.703645 448.975595 574.529125 395.556964 511.245823 395.675668L511.245823 395.675668 511.245823 395.675668z"  ></path></symbol><symbol id="icon-aixin" viewBox="0 0 1024 1024"><path d="M890.2 208.2c-91.8-91.9-242.1-91.9-334 0L544.4 220c-18.2 18.2-47.6 18.2-65.8 0l-11.8-11.8c-91.9-91.9-242.1-91.9-334 0C41 300 24.7 533.9 203.6 722.1 304 827.8 412.4 882.3 470 905.9c26.6 10.9 56.5 10.9 83 0 57.6-23.6 166-78.1 266.4-183.8 178.9-188.2 162.6-422 70.8-513.9z"  ></path></symbol><symbol id="icon-tubiaozhizuo-1" viewBox="0 0 1024 1024"><path d="M410.39 512l340.14-335.13a63.74 63.74 0 0 0 0-91 65.92 65.92 0 0 0-92.29 0l-384.93 379.3a67.39 67.39 0 0 0 0 93.68l384.93 379.32a66 66 0 0 0 92.29 0 63.74 63.74 0 0 0 0-91z"  ></path></symbol><symbol id="icon-tubiaozhizuo-2" viewBox="0 0 1024 1024"><path d="M613.61 512L273.47 176.87a63.74 63.74 0 0 1 0-91 65.92 65.92 0 0 1 92.29 0l384.93 379.3a67.39 67.39 0 0 1 0 93.68L365.76 938.17a66 66 0 0 1-92.29 0 63.74 63.74 0 0 1 0-91z"  ></path></symbol><symbol id="icon-tubiaozhizuo-" viewBox="0 0 1024 1024"><path d="M512 67C266.24 67 67 241.33 67 456.37c0 122.9 65.23 232.32 166.87 303.69V957l195-118.3a508.35 508.35 0 0 0 83.17 7c245.77 0 445-174.32 445-389.37S757.77 67 512 67zM289.5 512a55.62 55.62 0 1 1 55.62-55.62A55.62 55.62 0 0 1 289.5 512z m222.5 0a55.62 55.62 0 1 1 55.62-55.62A55.62 55.62 0 0 1 512 512z m222.5 0a55.62 55.62 0 1 1 55.62-55.62A55.62 55.62 0 0 1 734.5 512z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
