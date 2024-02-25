document.getElementById('menuButton').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var but = document.getElementById("menuButton")
    if (menu.style.left === '-250px') {
      menu.style.left = '0';
      but.innerText="x"
      menu.style.boxShadow= '40px 0px 50px black';
    } else {
      menu.style.boxShadow= 'none';
      menu.style.left = '-250px';
      but.innerText="="
    }
  });
