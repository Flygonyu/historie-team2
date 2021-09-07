// modellet

let lagretOrd = '____';

let ordUt = [
    '',
    'red',
    'blue',
    'cat',
    'dog',
    'huge',
    'tiny',
    'dance',
    'run',
    'go',
    'Terje',
    'Linn',
    'Bjørnar',
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
      <div class="${erValgt[4]}" onclick="grab(4, this)">${ordUt[4]}</div><br>
      <div class="${erValgt[5]}" onclick="grab(5, this)">${ordUt[5]}</div> 
      <div class="${erValgt[6]}" onclick="grab(6, this)">${ordUt[6]}</div>
      <div class="${erValgt[7]}" onclick="grab(7, this)">${ordUt[7]}</div>
      <div class="${erValgt[8]}" onclick="grab(8, this)">${ordUt[8]}</div><br>
      <div class="${erValgt[9]}" onclick="grab(9, this)">${ordUt[9]}</div>
      <div class="${erValgt[10]}" onclick="grab(10, this)">${ordUt[10]}</div>
      <div class="${erValgt[11]}" onclick="grab(11, this)">${ordUt[11]}</div>
      <div class="${erValgt[12]}" onclick="grab(12, this)">${ordUt[12]}</div>

      
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