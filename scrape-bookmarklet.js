javascript: (function(t){var r={eval:'"artoo.scrape(\\".s-result-list .s-result-item\\",{title:function(){return $(this).find(\\"h2 > a\\").first().text().trim()},url:function(){return $(this).find(\\"h2 > a\\").attr(\\"href\\")},img:function(){return $(this).find(\\"img\\").first().attr(\\"src\\")},author:function(){return $(this).find(\\".a-row.a-size-base.a-color-secondary > .a-size-base\\").eq(1).text().trim()},published:function(){var t=$(this).find(\\".a-row.a-size-base.a-color-secondary > .a-size-base\\").last().text().trim();return t.match(/\\\\d{4}/)?t:null},rating:function(){var t=$(this).find(\'[aria-label*=\\"out of\\"]\').first().attr(\\"aria-label\\");return t?parseFloat(t.substr(0,3)):null},reviews:function(){var t=$(this).find(\\"[aria-label]\\").eq(1).attr(\\"aria-label\\");return t?parseInt(t.replace(/,/g,\\"\\")):null},price_1:function(){var t=$(this).find(\\".a-price:not(.a-text-price)\\").first(),r=t.find(\\".a-price-whole\\").first().text()+t.find(\\".a-price-fraction\\").first().text();return r?parseFloat(r):null},price_2:function(){var t=$(this).find(\\".a-price:not(.a-text-price)\\").eq(1),r=t.find(\\".a-price-whole\\").first().text()+t.find(\\".a-price-fraction\\").first().text();return r?parseFloat(r):null},price_3:function(){var t=$(this).find(\\".a-price:not(.a-text-price)\\").eq(2),r=t.find(\\".a-price-whole\\").first().text()+t.find(\\".a-price-fraction\\").first().text();return r?parseFloat(r):null}},artoo.savePrettyJson);"'},e=!0;if("object"==typeof this.artoo&&(artoo.settings.reload||(artoo.log.verbose("artoo already exists within this page. No need to inject him again."),artoo.loadSettings(r),artoo.exec(),e=!1)),e){var i=document.getElementsByTagName("body")[0];i||(i=document.createElement("body"),document.firstChild.appendChild(i));var a=document.createElement("script");console.log("artoo.js is loading..."),a.src="//medialab.github.io/artoo/public/dist/artoo-latest.min.js",a.type="text/javascript",a.id="artoo_injected_script",a.setAttribute("settings",JSON.stringify(r)),i.appendChild(a)}}).call(this);