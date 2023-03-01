

// ANIMATION NAVBAR

let mainNav = document.querySelector('#main-nav');
let logoWhite = document.querySelector('.logo-white');
let logoBlack = document.querySelector('.logo-black');

window.addEventListener('scroll', ()=>{


    if(window.scrollY>0){

        mainNav.style.background='#291B25';
        logoWhite.classList.remove('d-none');
        logoBlack.classList.add('d-none');
       

    }
    else
    {
       mainNav.style.background='transparent';
       logoBlack.classList.remove('d-none');
       logoWhite.classList.add('d-none');
       }
})


// INCREMENT


let firstSpan = document.querySelector('#first-span');
let secondSpan = document.querySelector('#second-span');
let thirdSpan = document.querySelector('#third-span');

function createInterval(finalNumber,element){

    let counter = 0;

    let interval = setInterval(()=>{

        counter++

        if(counter<finalNumber){

            counter++

            element.innerHTML = counter;
         }

        else{

            clearInterval(interval);
        }


    },1)

}









let IntersectionInterval = true;

let h2Test = document.querySelector('#h2Test');

let observer = new IntersectionObserver( (entries)=>{

    entries.forEach( (entry) => {

        if(entry.isIntersecting){

            createInterval(1000,firstSpan);
            createInterval(2000,secondSpan);
            createInterval(3000,thirdSpan);

            IntersectionInterval = false;
        }
        
    });
})

observer.observe(h2Test);

    




 