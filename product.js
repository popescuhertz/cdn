const floatingMenu=$(".main-menu"),main=$(".main"),floatingMenuTop=floatingMenu.offset().top-main.offset().top-8;floatingMenu.hide(),main.on("scroll",(()=>{main.scrollTop()>=floatingMenuTop?floatingMenu.fadeIn(200):floatingMenu.fadeOut(200)})),$(window).on("scroll",(()=>{const e=$(".section").offset().top-2*parseFloat(getComputedStyle(document.documentElement).fontSize)-24;window.innerWidth<480&&(window.scrollY>=e?floatingMenu.fadeIn(200):floatingMenu.fadeOut(200))}));const productGallery=new Flickity(".product-image-gallery",{imagesLoaded:!0,contain:!0,wrapAround:!0,freeScroll:!0,pageDots:!1,percentPosition:!1,prevNextButtons:!1,cellAlign:"left"});let dragStartX=0;const dragThreshold=10;productGallery.on("dragStart",(function(e,t){dragStartX=t.clientX})),productGallery.on("dragMove",(function(e,t){Math.abs(t.clientX-dragStartX)>10&&(productGallery.slider.style.pointerEvents="none")})),productGallery.on("dragEnd",(function(){productGallery.slider.style.pointerEvents="auto"}));const flickitySlider=document.querySelector(".flickity-slider");if(flickitySlider){const e=window.innerWidth;flickitySlider.style.left=e>=991?"1.5rem":".875rem"}const hamburgerMenuIcon=document.querySelector(".hamburger-menu-icon"),productImageGallery=document.querySelector(".product-image-gallery"),overlay=document.querySelector(".overlay");hamburgerMenuIcon.addEventListener("click",(function(){hamburgerMenuIcon.classList.contains("is-open")&&(productImageGallery.style.zIndex=2)})),overlay.addEventListener("click",(function(){productImageGallery.style.zIndex=9999})),hamburgerMenuIcon.addEventListener("click",(function(){hamburgerMenuIcon.classList.contains("is-close")&&(productImageGallery.style.zIndex=9999)}));const productRatingWrapper=document.querySelector(".product-rating-wrapper"),productRatingContainer=document.querySelectorAll(".product-rating-container.is-header"),containerHeight=productRatingContainer[0].clientHeight;if(productRatingWrapper.clientHeight>=2*containerHeight){productRatingContainer[productRatingContainer.length-1].style.paddingLeft=0;productRatingContainer[productRatingContainer.length-2].style.borderRight="none"}Cuttr.prototype.defaults={licenseKey:"2E864F64-86BB4151-AD9A08AF-B0B5C5BA",truncate:"characters",length:100,ending:"...",loadedClass:"cuttr--loaded",title:!1,readMore:!1,readMoreText:"Read more",readLessText:"Read less",readMoreBtnPosition:"after",readMoreBtnTag:"button",readMoreBtnSelectorClass:"cuttr__readmore",readMoreBtnAdditionalClasses:""};const cuttrClasses=[{selector:".truncate-small",options:{length:50,readMore:!0,readMoreText:"Read more for Class 1"},breakpoints:{"(max-width: 480px)":{length:25,readMoreText:"Read more for Class 1 - Breakpoint 1"},"(min-width: 481px) and (max-width: 768px)":{length:35,readMoreText:"Read more for Class 1 - Breakpoint 2"}}},{selector:".truncate-medium",options:{truncate:"words",length:20,readMore:!0,readMoreText:"Read more for Class 2"},breakpoints:{"(max-width: 480px)":{length:10,readMoreText:"Read more for Class 2 - Breakpoint 1"},"(min-width: 481px) and (max-width: 768px)":{length:15,readMoreText:"Read more for Class 2 - Breakpoint 2"}}}],cuttrInstances=[];for(const e of cuttrClasses){const t=Object.assign({},Cuttr.prototype.defaults,e.options),r=document.querySelector(e.selector),n=new Cuttr(r,t);n.classSelector=e.selector,cuttrInstances.push(n);for(const[t,r]of Object.entries(e.breakpoints)){const e=window.matchMedia(t),o=()=>{n.updateOptionsPerClass(r)};e.matches&&o(),e.addListener(o)}}Cuttr.prototype.updateOptionsPerClass=function(e){if(this.classSelector){const t=cuttrInstances.filter((e=>e.classSelector===this.classSelector));for(const r of t)r.updateOptions(e)}};