// modellet

let lagretOrd = '____';

let ordUt = [
    '',
    'red',
    'blue',
    'tiger',
    'frog',
    'huge',
    'tiny',
    'dance',
    'run',
    'go',
    'Terje',
    'Linn',
    'Bjørnar',
    'Monday',
    'hat',
    'kid',
    'dragon',
    'nail',
    'sword',
    'Halloween',
    'scream',
    'eye',
    'unicorn',
    'trash panda',
    'tired',
    'flying',

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
    '____',
    '____',
    '____',
    '____',
    '____',
]

let erValgt = [
    '',
    // '',
    // '',
    // '',
    // '',
    // '',
    // '',
    // '',
    // '',
    // '',

]

//view


showView();


function showView() {
    document.getElementById('app').innerHTML = `
    <section id='historie'>  
       I can't believe it's already 
      <div onclick="slipp(1,this)">${ordInn[1]}</div>!
      I can't wait to put on my 
      <div onclick="slipp(2,this)">${ordInn[2]}</div>
      and visit every 
      <div onclick="slipp(3,this)">${ordInn[3]}</div>
      in my neighborhood. This year, I am going to dress up as (a/an) 
      <div onclick="slipp(4,this)">${ordInn[4]}</div>
      with 
      <div onclick="slipp(5,this)">${ordInn[5]}</div> 
      <div onclick="slipp(6,this)">${ordInn[6]}</div>(s).
      Before I
      <div onclick="slipp(7,this)">${ordInn[7]}</div>,
      I make sure to grab my
      <div onclick="slipp(8,this)">${ordInn[8]}</div>
      <div onclick="slipp(9,this)">${ordInn[9]}</div>
      to hold my
      <div onclick="slipp(10,this)">${ordInn[10]}</div>.
      Finally, all of my 
      <div onclick="slipp(11,this)">${ordInn[11]}</div>(s)
      are ready to go! When
      <div onclick="slipp(12,this)">${ordInn[12]}</div>
      answers the door, I say, 
      "<div onclick="slipp(13,this)">${ordInn[13]}</div> or
      <div onclick="slipp(14,this)">${ordInn[14]}</div>!"

    </section>


    <section id='ordUt'>  
      <div class="${erValgt[1]}" onclick="grab(1, this)">${ordUt[1]}</div> 
      <div class="${erValgt[2]}" onclick="grab(2, this)">${ordUt[2]}</div> 
      <div class="${erValgt[3]}" onclick="grab(3, this)">${ordUt[3]}</div>
      <div class="${erValgt[4]}" onclick="grab(4, this)">${ordUt[4]}</div>
      <div class="${erValgt[5]}" onclick="grab(5, this)">${ordUt[5]}</div> 
      <div class="${erValgt[6]}" onclick="grab(6, this)">${ordUt[6]}</div><br>
      <div class="${erValgt[7]}" onclick="grab(7, this)">${ordUt[7]}</div>
      <div class="${erValgt[8]}" onclick="grab(8, this)">${ordUt[8]}</div>
      <div class="${erValgt[9]}" onclick="grab(9, this)">${ordUt[9]}</div>
      <div class="${erValgt[10]}" onclick="grab(10, this)">${ordUt[10]}</div>
      <div class="${erValgt[11]}" onclick="grab(11, this)">${ordUt[11]}</div>
      <div class="${erValgt[12]}" onclick="grab(12, this)">${ordUt[12]}</div><br>
      <div class="${erValgt[13]}" onclick="grab(13, this)">${ordUt[13]}</div>
      <div class="${erValgt[14]}" onclick="grab(14, this)">${ordUt[14]}</div>
      <div class="${erValgt[15]}" onclick="grab(15, this)">${ordUt[15]}</div>
      <div class="${erValgt[16]}" onclick="grab(16, this)">${ordUt[16]}</div>
      <div class="${erValgt[17]}" onclick="grab(17, this)">${ordUt[17]}</div>
      <div class="${erValgt[18]}" onclick="grab(18, this)">${ordUt[18]}</div><br>
      <div class="${erValgt[19]}" onclick="grab(19, this)">${ordUt[19]}</div>
      <div class="${erValgt[20]}" onclick="grab(20, this)">${ordUt[20]}</div>
      <div class="${erValgt[21]}" onclick="grab(2|, this)">${ordUt[21]}</div>
      <div class="${erValgt[22]}" onclick="grab(22, this)">${ordUt[22]}</div>
      <div class="${erValgt[23]}" onclick="grab(23, this)">${ordUt[23]}</div>
      <div class="${erValgt[24]}" onclick="grab(24, this)">${ordUt[24]}</div>
      <div class="${erValgt[25]}" onclick="grab(25, this)">${ordUt[25]}</div>
      
    </section>
      `;



}
//controller


function grab(nummer, x) {
    lagretOrd = x.innerHTML;
    // x.classList.toggle('highlight');
    erValgt = ['',]
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