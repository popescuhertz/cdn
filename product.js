const floatingMenu=$(".main-menu"),main=$(".main"),floatingMenuTop=floatingMenu.offset().top-main.offset().top-8;floatingMenu.hide(),main.on("scroll",(()=>{main.scrollTop()>=floatingMenuTop?floatingMenu.fadeIn(200):floatingMenu.fadeOut(200)})),$(window).on("scroll",(()=>{const e=$(".section").offset().top-2*parseFloat(getComputedStyle(document.documentElement).fontSize)-24;window.innerWidth<480&&(window.scrollY>=e?floatingMenu.fadeIn(200):floatingMenu.fadeOut(200))}));const productGallery=new Flickity(".product-image-gallery",{imagesLoaded:!0,contain:!0,wrapAround:!0,freeScroll:!0,pageDots:!1,percentPosition:!1,prevNextButtons:!1,cellAlign:"left"});let dragStartX=0;const dragThreshold=10;productGallery.on("dragStart",(function(e,t){dragStartX=t.clientX})),productGallery.on("dragMove",(function(e,t){Math.abs(t.clientX-dragStartX)>10&&(productGallery.slider.style.pointerEvents="none")})),productGallery.on("dragEnd",(function(){productGallery.slider.style.pointerEvents="auto"}));const flickitySlider=document.querySelector(".flickity-slider");if(flickitySlider){const e=window.innerWidth;flickitySlider.style.left=e>=991?"1.5rem":".875rem"}const hamburgerMenuIcon=document.querySelector(".hamburger-menu-icon"),productImageGallery=document.querySelector(".product-image-gallery"),overlay=document.querySelector(".overlay");hamburgerMenuIcon.addEventListener("click",(function(){hamburgerMenuIcon.classList.contains("is-open")&&(productImageGallery.style.zIndex=2)})),overlay.addEventListener("click",(function(){productImageGallery.style.zIndex=9999})),hamburgerMenuIcon.addEventListener("click",(function(){hamburgerMenuIcon.classList.contains("is-close")&&(productImageGallery.style.zIndex=9999)}));const productRatingWrapper=document.querySelector(".product-rating-wrapper"),productRatingContainer=document.querySelectorAll(".product-rating-container.is-header"),containerHeight=productRatingContainer[0].clientHeight;if(productRatingWrapper.clientHeight>=2*containerHeight){productRatingContainer[productRatingContainer.length-1].style.paddingLeft=0;productRatingContainer[productRatingContainer.length-2].style.borderRight="none"}const truncateText=e=>{const t=e.querySelector("p, h2, h3, h4, h5, h6, div, span");if(!t)return;const n=t.innerHTML.trim();let r;r=window.innerWidth<768?parseInt(e.getAttribute("data-max-lines-mobile"))||parseInt(e.getAttribute("data-max-lines"))||1/0:window.innerWidth<1024?parseInt(e.getAttribute("data-max-lines-tablet"))||parseInt(e.getAttribute("data-max-lines"))||1/0:parseInt(e.getAttribute("data-max-lines-desktop"))||parseInt(e.getAttribute("data-max-lines"))||1/0;const i=getLineHeight(t)*r;t.style.height="auto";const o=t.offsetHeight;if(t.style.height="",o>i){let r,l=0,a=n.length-1;for(;l<=a;)r=Math.floor((l+a)/2),t.innerHTML=n.substring(0,r)+"...",t.offsetHeight>i?a=r-1:l=r+1;t.innerHTML=n.substring(0,a)+"...";const s=e.querySelector(".show-more"),c=e.querySelector(".show-less"),d=t.offsetHeight<o;s&&c?(s.style.display=d?"inline":"none",c.style.display="none",s.addEventListener("click",(()=>{t.innerHTML=n,s.style.display="none",c.style.display="inline"})),c.addEventListener("click",(()=>{t.innerHTML=n.substring(0,a)+"...",s.style.display="inline",c.style.display="none"}))):t.innerHTML=n.substring(0,a)+"..."}else{const t=e.querySelector(".show-more"),n=e.querySelector(".show-less");t&&n&&(t.style.display="none",n.style.display="none")}};