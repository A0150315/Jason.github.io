import fs from 'fs';

fs.writeFile('./message.txt', '第一行\r\n第1行', function(err) {
  if (err) console.log(1);
  else console.log('写文件操作成功');
});
