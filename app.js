const toggleBtn = document.querySelector('.toggle-btn');
const closeToggle = document.querySelector('.mobile_close');
const mobileLinks = document.querySelector('ul.mobile_links');
//const mobileLinks = document.querySelector('.mobile_links');
function toggleMobilelink(e){
    
    mobileLinks.classList.toggle('show')
    // e.preventDefault();
    console.log(123);
    //const mobileLinks = document.querySelector('ul.mobile_links');
    console.log(mobileLinks);
console.log(e.target);
    // if(mobileLinks.style.display === "none"){
    //     mobileLinks.style.display === "block";
    // }else{
    //     mobileLinks.style.display === "none";
    // }
}
function closeMobileToggle(e){

    e.preventDefault();
    if(mobileLinks.style.display === "block"){
        mobileLinks.style.display === "none";
    }else{
        mobileLinks.style.display === "block";
    }
    
    console.log(124);
}
toggleBtn.addEventListener('click',toggleMobilelink);
closeToggle.addEventListener('click',closeMobileToggle);