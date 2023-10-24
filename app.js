console.log('app.js');
document.addEventListener('DOMContentLoaded', e => {
  var btn_read = document.getElementById('btn_read');
  var div_msg = document.getElementById('message');
  btn_read.addEventListener('click', e => {
    div_msg.innerText = 'Hello, at ' + new Date().toISOString();
  });
});
