
//seat-buy : seat : total-seat : append-seat-info

const seat = document.getElementsByClassName('seat');
let cnt = 0;

for (const item of seat) {
  item.addEventListener('click', function (event) {
    item.style.backgroundColor = 'green';
    cnt = cnt + 1;
    if (cnt > 4) {
      window.alert('You can buy only 4 seat');
    } else {
      const totalSeatElement = document.getElementById('total-seat');
      const totalSeatElementText = totalSeatElement.innerText;
      const totalSeat = parseInt(totalSeatElementText);
      const updated = totalSeat - 1;
  
      totalSeatElement.innerText = updated;
    }
    
    const buySeatElement = document.getElementById('seat-buy');
    const buySeatElementText = buySeatElement.innerText;
    const buySeat = parseInt(buySeatElementText);
    const buy = cnt;

    buySeatElement.innerText = buy;

    const value = event.target.value;
    console.log(value);
    appendFunc();

  

  })


}



document.getElementById('success').addEventListener('click', function () {
  const item = document.getElementById('modal');
  item.classList.remove('hidden');

  const item2 = document.getElementById('header');
  item2.classList.add('hidden');

  document.getElementById('main').classList.add('hidden');

  document.getElementById('footer').classList.add('hidden');
})


function appendFunc() {
  const appendElement = document.getElementById('append-seat-info');
    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'text-sm', 'font-bold', 'text-[#030712]');
    div.setAttribute('id', 'seat-buy-info');
    appendElement.appendChild(div);

    const message = document.getElementById('seat-buy-info');
    const one = document.createElement('h3');
  one.innerText = 'business class';
  message.appendChild(one);

    
    const two = document.createElement('h3');
  two.innerText = 'Business Class';
  message.appendChild(two);
    
    const three = document.createElement('h3');
  three.innerText = '550';
  message.appendChild(three);

    
}