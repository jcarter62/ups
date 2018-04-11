function openSideMenu(){
  document.getElementById('side-menu').style.width ='250px';
  document.getElementById('main').style.marginLeft ='250px';
  document.getElementById('footer').style.marginLeft ='250px';
}

function closeSideMenu(){
  document.getElementById('side-menu').style.width ='0';
  document.getElementById('main').style.marginLeft ='0';
  document.getElementById('footer').style.marginLeft ='0';
}

function copyrightYear() {
  let d = new Date();
  document.getElementById('cryear').innerHTML = d.getFullYear();
}

function myInit() {
  this.copyrightYear();
}

myInit();