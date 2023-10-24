console.log('app.js');
document.addEventListener('DOMContentLoaded', () => {
  
  var btn_read = document.getElementById('btn_read');
  var div_msg = document.getElementById('message');
  btn_read.addEventListener('click', async () => {
    div_msg.innerText = 'clicked read button.';
    // NFC読み込みイベント登録
    try {    
      const ndef = new NDEFReader();
      await ndef.scan();
      div_msg.innerText = 'scan started';
  
      ndef.addEventListener('error', e => {
        div_msg.innerText = 'error:' + e;
      });
      
      ndef.addEventListener('reading', e => {
        div_msg.innerText = `message=${e.message}, serialNumber=${e.serialNumber}`;
        for(const record of e.message.records){
          if(record.recordType === 'text'){
            const decorder = new TextDecoder(record.encoding);
            const data = decoder.decode(record.data);
            div_msg.innerText = data;
          }
        }
      });
      
    } catch (error) {
      div_msg.innerText = 'try:error:' + error;
    }

  });
});
