const btnA=document.querySelector(".nav-toggle");
const linksContainer=document.querySelector(".links-container");
const links=document.querySelector(".links");
btnA.addEventListener('click', ()=>{
    const linksContainerHeigth=linksContainer.getBoundingClientRect().height;
    const linksHeight=links.getBoundingClientRect().height;
   if(linksContainerHeigth==0){
       linksContainer.style.height=`${linksHeight}px`;
   }else{
    linksContainer.style.height="0";
   }
});