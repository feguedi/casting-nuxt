<script lang="ts" setup>
import 'animate.css';

useHead({
  script: [
    { tagPosition: 'head', innerHTML: "!function(f,b,e,v,n,t,s){if(f.fbq){return}n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq){f._fbq=n}n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1411310475836326');fbq('track','PageView');" },
    { tagPosition: 'head', innerHTML: '{"@context":"https:\/\/schema.org","@graph":[{"@type":"WebSite","@id":"https:\/\/mondragonmexico.edu.mx\/#website","url":"https:\/\/mondragonmexico.edu.mx\/","name":"Universidad Mondrag\u00f3n M\u00e9xico","description":"La Universidad Mondrag\u00f3n M\u00e9xico ubicada en Quer\u00e9taro, forma parte de la Corporaci\u00f3n MONDRAG\u00d3N, uno de los 10 grupos industriales m\u00e1s grandes de Espa\u00f1a con presencia en 41 pa\u00edses y una red de universidades internacionales en Pa\u00eds Vasco, M\u00e9xico, Colombia y Arabia Saudita.","publisher":{"@id":"https:\/\/mondragonmexico.edu.mx\/#organization"}},{"@type":"Organization","@id":"https:\/\/mondragonmexico.edu.mx\/#organization","name":"Universidad Mondrag\u00f3n M\u00e9xico","url":"https:\/\/mondragonmexico.edu.mx\/","logo":{"@type":"ImageObject","@id":"https:\/\/mondragonmexico.edu.mx\/#organizationLogo","url":"https:\/\/mondragonmexico.edu.mx\/wp-content\/uploads\/2016\/05\/logo-2-2.png","width":"1500","height":"500"},"image":{"@id":"https:\/\/mondragonmexico.edu.mx\/#organizationLogo"},"contactPoint":{"@type":"ContactPoint","telephone":"+524424021000","contactType":"Customer Support"}},{"@type":"BreadcrumbList","@id":"https:\/\/mondragonmexico.edu.mx\/registrocasting\/#breadcrumblist","itemListElement":[{"@type":"ListItem","@id":"https:\/\/mondragonmexico.edu.mx\/#listItem","position":"1","item":{"@type":"WebPage","@id":"https:\/\/mondragonmexico.edu.mx\/","name":"Inicio","description":"Bienvenido a la Universidad Mondrag\u00f3n M\u00e9xico. Viaje Internacional asegurado. Egresa con 2 a\u00f1os de experiencia laboral o tu propia empresa.","url":"https:\/\/mondragonmexico.edu.mx\/"},"nextItem":"https:\/\/mondragonmexico.edu.mx\/registrocasting\/#listItem"},{"@type":"ListItem","@id":"https:\/\/mondragonmexico.edu.mx\/registrocasting\/#listItem","position":"2","item":{"@type":"WebPage","@id":"https:\/\/mondragonmexico.edu.mx\/registrocasting\/","name":"Casting Carreras Profesionales: Registro","description":"Queremos conocerte. Reg\u00edstrate y asiste al Casting de Admisi\u00f3n UMX, es gratuito y te ayudar\u00e1 a conocer m\u00e1s de nuestra universidad, la carrera que estudiar\u00e1s y continuar tu proyecto de vida.","url":"https:\/\/mondragonmexico.edu.mx\/registrocasting\/"},"previousItem":"https:\/\/mondragonmexico.edu.mx\/#listItem"}]}]}', type: 'application/ld+json' },
    { tagPosition: 'head', src: 'https://www.google-analytics.com/analytics.js', async: "true" },
    { tagPosition: 'head', innerHTML: 'window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/mondragonmexico.edu.mx\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.8"}};!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode;p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([10084,65039,8205,55357,56613],[10084,65039,8203,55357,56613])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(n=t.source||{}).concatemoji?c(n.concatemoji):n.wpemoji&&n.twemoji&&(c(n.twemoji),c(n.wpemoji)))}(window,document,window._wpemojiSettings);' },
    { tagPosition: 'head', src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async: true },
    { tagPosition: 'head', innerHTML: '(adsbygoogle = window.adsbygoogle || []).push({"google_ad_client":"ca-pub-6957914393344666","enable_page_level_ads":true,"tag_partner":"site_kit"});' },
    { tagPosition: 'head', innerHTML: '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f)})(window,document,"script","dataLayer","GTM-5XSWP2");' },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

#hero-casting:hover {
  cursor: url('img/banner-cursor.png'), auto;
}
</style>
