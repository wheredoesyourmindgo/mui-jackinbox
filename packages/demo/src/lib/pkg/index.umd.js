!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("clsx"),require("next/head"),require("@material-ui/core")):"function"==typeof define&&define.amd?define(["react","clsx","next/head","@material-ui/core"],t):(e=e||self).nextMuiJackinbox=t(e.react,e.clsx,e.Head,e.core)}(this,function(e,t,n,a){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var i="animate__",l=a.makeStyles(function(){return a.createStyles({hidden:{visibility:"hidden"}})});return function(c){var o,d=c.children,s=c.className,u=c.animate,f=void 0===u||u,m=c.name,p=c.hideUntilAnimate,y=void 0!==p&&p,h=c.speed,x=c.infinite,v=c.delay,O=void 0!==v&&v,b=c.repeat,j=void 0!==b&&b,k=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(n=i[a])>=0||(r[n]=e[n]);return r}(c,["children","className","animate","name","hideUntilAnimate","speed","infinite","delay","repeat"]),g=l(),q=!!y&&!f,w=!0===O?1:O,E=!0===j?1:j;return e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",key:"animate.css"})),e.createElement(a.Box,r({className:t([(o={},o[i+"animated"]=f,o[""+i+m]=f&&m,o[""+i+h]=f&&h,o[i+"infinite"]=f&&x,o[i+"repeat-"+E]=f&&E,o[i+"delay-"+w+"s"]=f&&w,o[g.hidden]=q,o),s])},k),d))}});
//# sourceMappingURL=index.umd.js.map
