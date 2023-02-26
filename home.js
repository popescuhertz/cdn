function applyVerticalCardPadding(){document.querySelectorAll(".card.is-vertical").forEach((e=>{const t=e.querySelector(".card-vertical-image-wrapper"),r=(e.clientWidth-t.clientWidth)/2,a=Math.min(r,32);e.style.paddingTop=`${a}px`}))}function adjustCardVisibility(){const e=window.innerWidth;[{className:".grid.is-horizontal-cards",cardClassName:".card.is-horizontal",maxRows:2,breakpoints:[{breakpoint:865,maxRows:3}]},{className:".grid.is-vertical-cards",cardClassName:".card.is-vertical",maxRows:1,breakpoints:[{breakpoint:865,maxRows:2}]},{className:".grid.is-vertical-cards.has-background",cardClassName:".card.is-vertical.has-background",maxRows:1,breakpoints:[{breakpoint:865,maxRows:1}]},{className:".grid.is-large-cards",cardClassName:".card.is-large",maxRows:1,breakpoints:[{breakpoint:865,maxRows:2}]}].forEach((t=>{const{className:r,cardClassName:a,maxRows:s,breakpoints:i}=t;document.querySelectorAll(r).forEach((t=>{const r=t.offsetWidth,l=t.querySelector(a).offsetWidth;let o=s;for(let t=0;t<i.length;t++){const r=i[t];if(!(e<r.breakpoint))break;o=r.maxRows}const d=Math.floor(r/l)*o;t.querySelectorAll(a).forEach(((e,t)=>{e.style.display=t>=d?"none":""}))}))}))}function setLabelBorderRadius(){const e=document.querySelectorAll(".card-label");for(let t=0;t<e.length;t++){const r=e[t],a=r.querySelectorAll(".card-label-text"),s=a.length;if(s>1&&r.offsetHeight>a[0].offsetHeight){r.style.textAlign="center",a[0].classList.add("border-top-left"),a[0].classList.add("border-top-right"),a[s-1].classList.add("border-bottom-left"),a[s-1].classList.add("border-bottom-right");let e=0;for(let t=0;t<s;t++){const r=a[t].offsetWidth;e=Math.max(e,r)}for(let t=0;t<s;t++)a[t].style.width=`${e}px`}else{r.style.textAlign="";for(let e=0;e<s;e++){const t=a[e];0===e?(t.classList.add("border-top-left"),t.classList.add("border-bottom-left"),t.classList.remove("border-top-right"),t.classList.remove("border-bottom-right")):e===s-1?(t.classList.remove("border-top-left"),t.classList.remove("border-bottom-left"),t.classList.add("border-top-right"),t.classList.add("border-bottom-right")):(t.classList.remove("border-top-left"),t.classList.remove("border-bottom-left"),t.classList.remove("border-top-right"),t.classList.remove("border-bottom-right"))}}1===s&&a[0].classList.add("border-radius")}}window.addEventListener("load",applyVerticalCardPadding),window.addEventListener("resize",applyVerticalCardPadding),window.addEventListener("load",adjustCardVisibility),window.addEventListener("resize",adjustCardVisibility),setLabelBorderRadius(),window.addEventListener("resize",setLabelBorderRadius);const mainSlider=new Flickity(".slider-main",{percentPosition:!1,pageDots:!1,prevNextButtons:!1,wrapAround:!0,fade:!0,imagesLoaded:!0,dragThreshold:100,cellAlign:"left"}),thumbnailsSlider=new Flickity(".slider-thumbs",{asNavFor:".slider-main",cellSelector:".carousel-cell-thumb",pageDots:!1,prevNextButtons:!1,freeScroll:!0,dragThreshold:30,freeScrollFriction:.04,wrapAround:!0,imagesLoaded:!0,cellAlign:"left"}),searchBarInput=document.querySelector(".search-input"),searchBar=document.querySelector(".search");searchBarInput.addEventListener("focus",(()=>{searchBar.style.boxShadow="0 0 1px 1px #f2f2f2"})),searchBarInput.addEventListener("blur",(()=>{searchBar.style.boxShadow="none"}));const flickitySliders=document.getElementsByClassName("flickity-slider");if(flickitySliders.length>=2){const e=window.innerWidth;flickitySliders[1].style.left=e>=991?"4rem":e>=480&&e<991?"2rem":"1rem"}const starRatings=document.querySelectorAll(".star-rating .stars");starRatings.forEach((e=>{const t=parseFloat(e.getAttribute("data-rating")),r=Math.round(2*t)/2,a=Math.floor(r),s=Math.round(2*(r-a))/2;let i="";for(let e=0;e<a;e++)i+='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="ic:baseline-star"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"></path></svg>';s&&(i+='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="ic:baseline-star-half"><path fill="currentColor" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"></path></svg>');for(let e=0;e<5-Math.ceil(r);e++)i+='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="ic:baseline-star-outline"><path fill="currentColor" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"></path></svg>';e.innerHTML=i}));