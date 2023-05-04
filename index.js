const fs = require('fs');

const writeFile = (i) => {
  if (i >= 100){
    return ;
  }

  const text = `write: ${i}`;
  fs.writeFile('./data1.txt', text, (err) =>{
    if (err){
      console.error(err);
      return false
    }
    console.log(text);
    writeFile(i+1);
  });
};
writeFile(90);
