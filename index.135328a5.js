var btnUp={el:document.querySelector(".back-to-top"),show:function(){this.el.classList.remove("back-to-top__hide")},hide:function(){this.el.classList.add("back-to-top__hide")},addEventListener:function(){var t=this;window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>400?t.show():t.hide()}))}};btnUp.addEventListener();
//# sourceMappingURL=index.135328a5.js.map
