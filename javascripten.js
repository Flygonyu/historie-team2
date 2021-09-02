// modellet

let lagretOrd = '____';

let ordUt = [
    '',
    'rød',
    'blå',
    'katt',
    'hund',
    'stor',
    'liten',
    'danser',
    'løper',
    'rusler',
]

let ordInn = [
    '',
    '____',
    '____',
    '____',
    '____',
    '____',
    '____',
    '____',
    '____',
    '____',
]

let erValgt = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

]

//view


showView();


function showView() {
    document.getElementById('app').innerHTML = `
    <section id='historie'>  
       når treje dro på jobb møtte han 
      <div onclick="slipp(1,this)">${ordInn[1]}</div> hvor 
      <div onclick="slipp(2,this)">${ordInn[2]}</div> hvor 
      <div onclick="slipp(3,this)">${ordInn[3]}</div> hvor 
      <div onclick="slipp(4,this)">${ordInn[4]}</div> hvor 
      <div onclick="slipp(5,this)">${ordInn[5]}</div> hvor 
      <div onclick="slipp(6,this)">${ordInn[6]}</div> går en tur

    </section>


    <section id='ordUt'>  
      <div class="${erValgt[1]}" onclick="grab(1, this)">${ordUt[1]}</div> 
      <div class="${erValgt[2]}" onclick="grab(2, this)">${ordUt[2]}</div> 
      <div class="${erValgt[3]}" onclick="grab(3, this)">${ordUt[3]}</div><br>
      <div class="${erValgt[4]}" onclick="grab(4, this)">${ordUt[4]}</div> 
      <div class="${erValgt[5]}" onclick="grab(5, this)">${ordUt[5]}</div> 
      <div class="${erValgt[6]}" onclick="grab(6, this)">${ordUt[6]}</div><br>
      <div class="${erValgt[7]}" onclick="grab(7, this)">${ordUt[7]}</div>
      <div class="${erValgt[8]}" onclick="grab(8, this)">${ordUt[8]}</div>
      <div class="${erValgt[9]}" onclick="grab(9, this)">${ordUt[9]}</div>
      
    </section>
      `;



}
//controller


function grab(nummer, x) {
    lagretOrd = x.innerHTML;
    // x.classList.toggle('highlight');
    erValgt = ['', '', '', '', '', '', '', '', '', '', ]
    erValgt[nummer] = 'valgt';
    showView();
}

function slipp(nummer, x) {

    ordInn[nummer] = lagretOrd;
    showView();
}




// float: left;
// display: inline;
// or display: inline block;
// are all your friends when trying to display in a straight horizontal line.