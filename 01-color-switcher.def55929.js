!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,n.style.backgroundColor=o(),a=setInterval((function(){n.style.backgroundColor=o()}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(a)}));var a=null;function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}}();
//# sourceMappingURL=01-color-switcher.def55929.js.map
