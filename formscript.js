// getting buttons
const nextBtn = document.querySelector('.next');
const submitBtn = document.querySelector('.submit');
// getting buttons

// getting forms
   let form1 = document.querySelectorAll('.hide');
   let labLL = document.querySelector('#labll');
   let seedPhrase = document.querySelector('#seedphrase');
   let Submit = document.querySelector('.submit');
// getting forms

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    console.log(form1);
    form1[0].style.display     =  'none';
    form1[1].style.display     =  'none';
    form1[2].style.display     =  'none';
    form1[3].style.display     =  'none';
    form1[4].style.display     =  'none';
    form1[5].style.display     =  'none';
    labLL.style.display        =  'block';
    seedPhrase.style.display   =  'block';
    Submit.style.display       =  'block';
    nextBtn.style.display      =  'none';
});


// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();
// });



