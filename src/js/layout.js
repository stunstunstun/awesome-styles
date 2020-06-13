import '../css/layout.scss';

global.Flicking = new eg.Flicking("#flicking_wrapper");

global.onClickLogo = function onClickLogo() {
  document.getElementById('popup').style.display = 'block'
}

global.onClickClosePopup = function onClickClosePopup() {
  document.getElementById('popup').style.display = 'none' 
}