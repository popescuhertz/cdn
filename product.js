const floatingMenu=$(".main-menu"),main=$(".main"),floatingMenuTop=floatingMenu.offset().top-main.offset().top-8;floatingMenu.hide(),main.on("scroll",(()=>{main.scrollTop()>=floatingMenuTop?floatingMenu.fadeIn(200):floatingMenu.fadeOut(200)})),$(window).on("scroll",(()=>{const e=$(".section").offset().top-2*parseFloat(getComputedStyle(document.documentElement).fontSize)-24;window.innerWidth<480&&(window.scrollY>=e?floatingMenu.fadeIn(200):floatingMenu.fadeOut(200))}));const productGallery=new Flickity(".product-image-gallery",{imagesLoaded:!0,contain:!0,wrapAround:!0,freeScroll:!0,pageDots:!1,percentPosition:!1,prevNextButtons:!1,cellAlign:"left"});let dragStartX=0;const dragThreshold=10;productGallery.on("dragStart",(function(e,t){dragStartX=t.clientX})),productGallery.on("dragMove",(function(e,t){Math.abs(t.clientX-dragStartX)>10&&(productGallery.slider.style.pointerEvents="none")})),productGallery.on("dragEnd",(function(){productGallery.slider.style.pointerEvents="auto"}));const flickitySlider=document.querySelector(".flickity-slider");if(flickitySlider){const e=window.innerWidth;flickitySlider.style.left=e>=991?"1.5rem":".875rem"}const hamburgerMenuIcon=document.querySelector(".hamburger-menu-icon"),productImageGallery=document.querySelector(".product-image-gallery"),overlay=document.querySelector(".overlay");hamburgerMenuIcon.addEventListener("click",(function(){hamburgerMenuIcon.classList.contains("is-open")&&(productImageGallery.style.zIndex=2)})),overlay.addEventListener("click",(function(){productImageGallery.style.zIndex=9999})),hamburgerMenuIcon.addEventListener("click",(function(){hamburgerMenuIcon.classList.contains("is-close")&&(productImageGallery.style.zIndex=9999)}));const productRatingWrapper=document.querySelector(".product-rating-wrapper"),productRatingContainer=document.querySelectorAll(".product-rating-container.is-header"),containerHeight=productRatingContainer[0].clientHeight;if(productRatingWrapper.clientHeight>=2*containerHeight){productRatingContainer[productRatingContainer.length-1].style.paddingLeft=0;productRatingContainer[productRatingContainer.length-2].style.borderRight="none"}class CuttrBreakpoints{constructor(e,t={},n=[]){this.selector=e,this.options={...defaults,...t},this.breakpoints=n,this._init()}_init(){const e=document.querySelectorAll(this.selector);e.length>0&&e.forEach((e=>{let t={...this.options};this.breakpoints.filter((e=>window.matchMedia(e.query).matches)).forEach((e=>t={...t,...e.options}));const n=new Cuttr(e,t);if("lines"===t.truncate){const o=parseInt(window.getComputedStyle(e).lineHeight),r=t.lines*o;let i=!1;for(;e.scrollHeight>r;){const n=e.textContent.split(" ");n.pop(),e.textContent=n.join(" ")+t.ending,i=!0}i&&(e.style.height=r+"px",e.style.overflow="hidden",n.recalculate())}}))}}const defaults={licenseKey:"2E864F64-86BB4151-AD9A08AF-B0B5C5BA",truncate:"words",length:100,ending:"...",loadedClass:"cuttr--loaded",title:!1,readMore:!1,readMoreText:"Read more",readLessText:"Read less",readMoreBtnPosition:"inside",readMoreBtnTag:"button",readMoreBtnSelectorClass:"read-more",readMoreBtnAdditionalClasses:"",lines:1},cuttrClasses=[{selector:".product-description.is-header",options:{lines:4},breakpoints:[{query:"(max-width: 480px)",options:{length:20}},{query:"(min-width: 481px) and (max-width: 768px)",options:{length:30}}]},{selector:".product-description.is-section",options:{length:60,readMore:!0,lines:3},breakpoints:[{query:"(max-width: 480px)",options:{length:40,lines:2}},{query:"(min-width: 481px) and (max-width: 768px)",options:{length:50,lines:2}}]}];Cuttr.prototype.defaults=defaults;const cuttrInstances=[];for(const e of cuttrClasses){const{selector:t,options:n,breakpoints:o}=e,r=new CuttrBreakpoints(t,n,o);cuttrInstances.push(r)}