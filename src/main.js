jQuery( function ($){

    $('.testimonial-carousel').slick({
        slidesToShow:2,
        prevArrow:`
            <svg class="left-arrow" width="60" height="60" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.9168 36.4999C66.9168 53.2986 53.2988 66.9166 36.5002 66.9166C19.7015 66.9166 6.0835 53.2986 6.0835 36.4999C6.0835 19.7013 19.7015 6.08325 36.5002 6.08325C53.2988 6.08325 66.9168 19.7013 66.9168 36.4999Z" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M40.3331 25.7629L29.6265 36.5L40.3331 47.2371" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        nextArrow:`
            <svg class="right-arrow" width="60" height="60" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.08317 36.4999C6.08317 53.2986 19.7012 66.9166 36.4998 66.9166C53.2985 66.9166 66.9165 53.2986 66.9165 36.4999C66.9165 19.7013 53.2985 6.08325 36.4998 6.08325C19.7012 6.08325 6.08317 19.7013 6.08317 36.4999Z" stroke="#0082FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M32.6669 25.7629L43.3735 36.5L32.6669 47.2371" stroke="#0082FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        responsive:[
            {
                breakpoint: 800,
                settings:{
                    slidesToShow:1,
                }
            }

        ]
    });
        
    $('.customers-carousel').slick({
        slidesToShow:2,
        prevArrow:`
            <svg class="left-arrow" width="60" height="60" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.9168 36.4999C66.9168 53.2986 53.2988 66.9166 36.5002 66.9166C19.7015 66.9166 6.0835 53.2986 6.0835 36.4999C6.0835 19.7013 19.7015 6.08325 36.5002 6.08325C53.2988 6.08325 66.9168 19.7013 66.9168 36.4999Z" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M40.3331 25.7629L29.6265 36.5L40.3331 47.2371" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        nextArrow:`
            <svg class="right-arrow" width="60" height="60" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.08317 36.4999C6.08317 53.2986 19.7012 66.9166 36.4998 66.9166C53.2985 66.9166 66.9165 53.2986 66.9165 36.4999C66.9165 19.7013 53.2985 6.08325 36.4998 6.08325C19.7012 6.08325 6.08317 19.7013 6.08317 36.4999Z" stroke="#0082FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M32.6669 25.7629L43.3735 36.5L32.6669 47.2371" stroke="#0082FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        responsive:[
            {
                breakpoint: 800,
                settings:{
                    slidesToShow:1,
                }
            }

        ]
    });
});

const secondaryBtns =document.querySelectorAll('.secondary-btn');
const btns = document.querySelectorAll('.primary-btn');
const ALLContents = document.querySelectorAll('.primary-btn-content');
console.log(btns);
console.log(ALLContents);
 
btns.forEach((btn,index)=>{
    btn.addEventListener('click',(e) => {
        btns.forEach(btn =>{btn.classList.remove('active')});
        btn.classList.add('active');

        ALLContents.forEach(content=>{content.classList.remove('active')})
        ALLContents[index].classList.add('active');
    });

});

secondaryBtns.forEach((btn,index)=>{
    btn.addEventListener('click',(e) => {
        secondaryBtns.forEach(btn =>{btn.classList.remove('active')});
        btn.classList.add('active');

        ALLContents.forEach(content=>{content.classList.remove('active')})
        ALLContents[index].classList.add('active');
    });

});


const tabs = document.querySelectorAll('.btn');
const contents = document.querySelectorAll('.btn-content');
console.log(tabs);
console.log(contents);
 
tabs.forEach((tab,index)=>{
    tab.addEventListener('click',(e) => {
        tabs.forEach(tab =>{tab.classList.remove('active')});
        tab.classList.add('active');

        contents.forEach(content=>{content.classList.remove('active')})
        contents[index].classList.add('active');
    });

});


const buttons  = document.querySelectorAll('.button');
const allContents = document.querySelectorAll('.button-content');
console.log(buttons);
console.log(allContents);
 
buttons.forEach((button,index)=>{
    button.addEventListener('click',(e) => {
        buttons.forEach(button =>{button.classList.remove('active')});
        button.classList.add('active');

        allContents.forEach(content=>{content.classList.remove('active')})
        allContents[index].classList.add('active');
    });

});

const accordians  = document.querySelectorAll('.accordian');
const answers = document.querySelectorAll('.answer');

accordians.forEach((accordian,index)=>{
    accordian.addEventListener('click',(e) => {
        accordians.forEach(accordian =>{accordian.classList.remove('active')});
        accordian.classList.add('active');

        answers.forEach(content=>{content.classList.remove('active')})
        answers[index].classList.add('active');
    });

});

const currencys = document.querySelectorAll('.currency-btn');
const imges = document.querySelectorAll('.currency-image')

currencys.forEach((currency,index)=>{
    currency.addEventListener('click',(e) => {
        currencys.forEach(currency =>{currency.classList.remove('active')});
        currency.classList.add('active');

        imges.forEach(content=>{content.classList.remove('active')})
        imges[index].classList.add('active');
    });

});


const year= document.querySelector('.pricing.year');
const life = document.querySelector('.pricing.life');
const yearly = document.querySelectorAll ('.yearly');
const lifetime =document.querySelectorAll('.lifetime');
  
life.onclick = () => {
    life.classList.add('active');
    year.classList.remove('active');

    yearly.forEach(y =>{y.style.display ='none'});
    lifetime.forEach(l =>{l.style.display ='block'});
        
};

year.onclick = () => {
    life.classList.remove('active');
    year.classList.add('active');

    yearly.forEach(y =>{y.style.display ='block'});
    lifetime.forEach(l =>{l.style.display ='none'});
        
};

const tables = document.querySelectorAll('.table');
tables.forEach((t,index)=>{
    console.log(t);
    t.addEventListener('click',() => {
        tables.forEach(t=>{t.classList.remove('active')});
        t.classList.add('active');

    
    });

});