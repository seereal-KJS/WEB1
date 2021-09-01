function nightdayhandler(){
  if(document.querySelector('#but2').value === 'Night'){
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    document.querySelector('#but2').value = 'Day';
  }
  else{
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    document.querySelector('#but2').value = 'Night';
  }
}
