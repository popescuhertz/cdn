const floatingMenu=$(".main-menu"),main=$(".main"),floatingMenuTop=floatingMenu.offset().top-main.offset().top-8;floatingMenu.hide(),main.on("scroll",(()=>{main.scrollTop()>=floatingMenuTop?floatingMenu.fadeIn(200):floatingMenu.fadeOut(200)})),$(window).on("scroll",(()=>{const e=$(".section").offset().top-2*parseFloat(getComputedStyle(document.documentElement).fontSize)-24;window.innerWidth<480&&(window.scrollY>=e?floatingMenu.fadeIn(200):floatingMenu.fadeOut(200))}));const productGallery=new Flickity(".product-image-gallery",{imagesLoaded:!0,contain:!0,wrapAround:!0,freeScroll:!0,pageDots:!1,percentPosition:!1,prevNextButtons:!1,cellAlign:"left"});let dragStartX=0;const dragThreshold=10;productGallery.on("dragStart",(function(e,t){dragStartX=t.clientX})),productGallery.on("dragMove",(function(e,t){Math.abs(t.clientX-dragStartX)>10&&(productGallery.slider.style.pointerEvents="none")})),productGallery.on("dragEnd",(function(){productGallery.slider.style.pointerEvents="auto"}));const flickitySlider=document.querySelector(".flickity-slider");if(flickitySlider){const e=window.innerWidth;flickitySlider.style.left=e>=991?"1.5rem":".875rem"}const hamburgerMenuIcon=document.querySelector(".hamburger-menu-icon"),productImageGallery=document.querySelector(".product-image-gallery"),overlay=document.querySelector(".overlay");hamburgerMenuIcon.addEventListener("click",(function(){hamburgerMenuIcon.classList.contains("is-open")&&(productImageGallery.style.zIndex=2)})),overlay.addEventListener("click",(function(){productImageGallery.style.zIndex=9999})),hamburgerMenuIcon.addEventListener("click",(function(){hamburgerMenuIcon.classList.contains("is-close")&&(productImageGallery.style.zIndex=9999)}));const productRatingWrapper=document.querySelector(".product-rating-wrapper"),productRatingContainer=document.querySelectorAll(".product-rating-container.is-header"),containerHeight=productRatingContainer[0].clientHeight;if(productRatingWrapper.clientHeight>=2*containerHeight){productRatingContainer[productRatingContainer.length-1].style.paddingLeft=0;productRatingContainer[productRatingContainer.length-2].style.borderRight="none"}const debounce=(e,t)=>{let n;return(...r)=>{n&&clearTimeout(n),n=setTimeout((()=>{e(...r)}),t)}},lineHeightCache=new Map,getLineHeight=e=>{const t=e.tagName+e.className;if(lineHeightCache.has(t))return lineHeightCache.get(t);const n=parseFloat(getComputedStyle(e).lineHeight);return lineHeightCache.set(t,n),n},truncateText=e=>{const t=e.querySelector("p, h2, h3, h4, h5, h6, div, span");if(!t)return;const n=t.innerHTML;let r;r=window.innerWidth<768?parseInt(e.getAttribute("data-max-lines-mobile"))||parseInt(e.getAttribute("data-max-lines"))||1/0:window.innerWidth<1024?parseInt(e.getAttribute("data-max-lines-tablet"))||parseInt(e.getAttribute("data-max-lines"))||1/0:parseInt(e.getAttribute("data-max-lines-desktop"))||parseInt(e.getAttribute("data-max-lines"))||1/0;const o=getLineHeight(t)*r;t.style.height="auto";const i=t.offsetHeight;if(t.style.height="",i>o){let r=n;for(;t.offsetHeight>o&&r.length>0;)r=r.slice(0,-1),t.innerHTML=r+"...";const a=e.querySelector(".show-more"),l=e.querySelector(".show-less"),s=t.offsetHeight<i;a&&l?(a.style.display=s?"inline":"none",l.style.display="none",a.addEventListener("click",(()=>{t.innerHTML=n,a.style.display="none",l.style.display="inline"})),l.addEventListener("click",(()=>{t.innerHTML=r+"...",a.style.display="inline",l.style.display="none"}))):t.innerHTML=r+"..."}else{const t=e.querySelector(".show-more"),n=e.querySelector(".show-less");t&&n&&(t.style.display="none",n.style.display="none")}},intersectionObserverConfig={root:null,rootMargin:"200px",threshold:0},observer=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){if(e.target.dataset.truncated)return;truncateText(e.target),e.target.dataset.truncated=!0,observer.unobserve(e.target);const t=e.intersectionRatio;t>0&&t<1?(truncateText(e.target),e.target.dataset.truncated=!0,observer.unobserve(e.target)):debounce((()=>{truncateText(e.target),e.target.dataset.truncated=!0,observer.unobserve(e.target)}),50)()}}))}),{rootMargin:"200px 0px",threshold:0}),observeElements=()=>{document.querySelectorAll("[data-max-lines]").forEach((e=>{observer.observe(e)}))};window.addEventListener("load",observeElements),window.addEventListener("resize",debounce(observeElements,50));