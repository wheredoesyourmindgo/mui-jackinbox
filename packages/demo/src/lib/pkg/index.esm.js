import e,{useCallback as n}from"react";import i from"clsx";import{Box as a,makeStyles as t,createStyles as r}from"@material-ui/core";function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}var d=t(function(){return r({root:function(e){return o({"--animate-delay":e.delayBy,"--animate-duration":e.speedBy,"--animate-repeat":e.repeatBy},e.hidden&&{visibility:"hidden"},e.noDisplay&&{display:"none"})}})});function l(t){var r,l=t.children,p=t.className,y=t.animate,s=void 0===y||y,m=t.name,f=t.prefix,c=void 0===f?"animate__":f,u=t.hideUntilAnimate,v=void 0!==u&&u,B=t.noDisplayUntilAnimate,h=void 0!==B&&B,A=t.delayBy,x=void 0===A?"1s":A,O=t.speedBy,b=void 0===O?"1s":O,g=t.repeatBy,D=void 0===g?1:g,E=t.speed,U=t.infinite,j=t.delay,N=void 0!==j&&j,P=t.repeat,_=void 0!==P&&P,k=t.onAnimateEnd,w=function(e,n){if(null==e)return{};var i,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n.indexOf(i=r[a])>=0||(t[i]=e[i]);return t}(t,["children","className","animate","name","prefix","hideUntilAnimate","noDisplayUntilAnimate","delayBy","speedBy","repeatBy","speed","infinite","delay","repeat","onAnimateEnd"]),q=d({hidden:!!v&&!s,noDisplay:!!h&&!s,delayBy:x,speedBy:b,repeatBy:D}),z=!0===N?1:N,C=!0===_?1:_,F=n(function(e){null==k||k(e),null==e||e.stopPropagation()},[k]);return e.createElement(a,o({className:i([(r={},r[c+"animated"]=s,r[""+c+m]=s&&m,r[""+c+E]=s&&E,r[c+"infinite"]=s&&U,r[c+"repeat-"+C]=s&&C,r[c+"delay-"+z+"s"]=s&&z,r),q.root,p]),onAnimationEnd:F},w),l)}export default l;
//# sourceMappingURL=index.esm.js.map
