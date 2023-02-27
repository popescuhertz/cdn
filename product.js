const menuLink=document.querySelector(".menu-link"),hamburgerIcon=document.querySelector(".hamburger-menu-icon"),sidebarMenu=document.querySelector(".sidebar-menu");menuLink.addEventListener("click",(()=>{sidebarMenu.style.zIndex="99999"})),hamburgerIcon.addEventListener("click",(()=>{sidebarMenu.style.zIndex=""})),window.addEventListener("resize",(()=>{window.innerWidth<=480?(menuLink.addEventListener("click",(()=>{sidebarMenu.style.zIndex="99999"})),hamburgerIcon.addEventListener("click",(()=>{sidebarMenu.style.zIndex=""}))):(menuLink.removeEventListener("click",(()=>{sidebarMenu.style.zIndex="99999"})),hamburgerIcon.removeEventListener("click",(()=>{sidebarMenu.style.zIndex=""})))}));const floatingMenu=$(".main-menu"),main=$(".main"),floatingMenuTop=floatingMenu.offset().top-main.offset().top-8;function formatNumber(e){return e<1e3?e.toString():e>=1e3&&e<1e4?(e/1e3).toFixed(1)+"K":e>=1e4&&e<1e6?Math.round(e/1e3)+"K":e>=1e6?(e/1e6).toFixed(1)+"M":void 0}floatingMenu.hide(),main.on("scroll",(()=>{main.scrollTop()>=floatingMenuTop?floatingMenu.fadeIn(200):floatingMenu.fadeOut(200)})),$(window).on("scroll",(()=>{const e=$(".section").offset().top-2*parseFloat(getComputedStyle(document.documentElement).fontSize)-24;window.innerWidth<480&&(window.scrollY>=e?floatingMenu.fadeIn(200):floatingMenu.fadeOut(200))}));const formattedElements=document.querySelectorAll(".formatted");formattedElements.forEach((e=>{const t=parseInt(e.textContent.trim());isNaN(t)?console.error(`Invalid number for element with class "formatted": ${e.textContent}`):e.textContent=formatNumber(t)}));const productGallery=new Flickity(".product-image-gallery",{imagesLoaded:!0,contain:!0,wrapAround:!0,freeScroll:!0,pageDots:!1,percentPosition:!1,prevNextButtons:!1,cellAlign:"left"});let dragStartX=0;const dragThreshold=10;productGallery.on("dragStart",(function(e,t){dragStartX=t.clientX})),productGallery.on("dragMove",(function(e,t){Math.abs(t.clientX-dragStartX)>10&&(productGallery.slider.style.pointerEvents="none")})),productGallery.on("dragEnd",(function(){productGallery.slider.style.pointerEvents="auto"}));const flickitySlider=document.querySelector(".flickity-slider");if(flickitySlider){const e=window.innerWidth;flickitySlider.style.left=e>=991?"1.5rem":".875rem"}const hamburgerMenuIcon=document.querySelector(".hamburger-menu-icon"),productImageGallery=document.querySelector(".product-image-gallery"),overlay=document.querySelector(".overlay");hamburgerMenuIcon.addEventListener("click",(function(){hamburgerMenuIcon.classList.contains("is-open")&&(productImageGallery.style.zIndex=2)})),overlay.addEventListener("click",(function(){productImageGallery.style.zIndex=9999})),hamburgerMenuIcon.addEventListener("click",(function(){hamburgerMenuIcon.classList.contains("is-close")&&(productImageGallery.style.zIndex=9999)}));const productRatingWrapper=document.querySelector(".product-rating-wrapper"),productRatingContainer=document.querySelectorAll(".product-rating-container.is-header"),containerHeight=productRatingContainer[0].clientHeight;if(productRatingWrapper.clientHeight>=2*containerHeight){productRatingContainer[productRatingContainer.length-1].style.paddingLeft=0;productRatingContainer[productRatingContainer.length-2].style.borderRight="none"}const searchBarInput=document.querySelector(".search-input"),searchBar=document.querySelector(".search");searchBarInput.addEventListener("focus",(()=>{searchBar.style.boxShadow="0 0 1px 1px #f2f2f2"})),searchBarInput.addEventListener("blur",(()=>{searchBar.style.boxShadow="none"}));const activePage=document.querySelector(".active-page");window.innerWidth<480&&(activePage.style.display="block");class CuttrBreakpoints{constructor(e,t={},n=[]){this.selector=e,this.options={...defaults,...t},this.breakpoints=n,this._init()}_init(){const e=document.querySelectorAll(this.selector);e.length>0&&e.forEach((e=>{let t={...this.options};this.breakpoints.filter((e=>window.matchMedia(e.query).matches)).forEach((e=>t={...t,...e.options})),new Cuttr(e,t)}))}}const defaults={licenseKey:"2E864F64-86BB4151-AD9A08AF-B0B5C5BA",truncate:"words",length:100,ending:"...",loadedClass:"cuttr--loaded",title:!1,readMore:!0,readMoreText:"Read more",readLessText:"Read less",readMoreBtnPosition:"inside",readMoreBtnTag:"button",readMoreBtnSelectorClass:"read-more",readMoreBtnAdditionalClasses:""},cuttrClasses=[{selector:".section-container.is-header",options:{length:15,readMoreBtnPosition:"after"},breakpoints:[{query:"(max-width: 480px)",options:{length:20}},{query:"(min-width: 481px) and (max-width: 768px)",options:{length:30}}]},{selector:".section-container.is-about",options:{length:60},breakpoints:[{query:"(max-width: 480px)",options:{length:40}},{query:"(min-width: 481px) and (max-width: 768px)",options:{length:50}}]},{selector:".section-container.is-specs",options:{length:40},breakpoints:[{query:"(max-width: 480px)",options:{length:30}},{query:"(min-width: 481px) and (max-width: 768px)",options:{length:40}}]}];Cuttr.prototype.defaults=defaults;const cuttrInstances=[];for(const e of cuttrClasses){const{selector:t,options:n,breakpoints:r}=e,o=new CuttrBreakpoints(t,n,r);cuttrInstances.push(o)}