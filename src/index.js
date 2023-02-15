module.exports = function toReadable (number) {
  const ed = ['one','two','three','four','five',
            'six','seven','eight','nine'];
  
const d1 = ['eleven','twelve','thirteen','fourteen','fifteen',
  'sixteen','seventeen','eighteen','nineteen'];
  
const de = ['ten','twenty','thirty','forty','fifty',
            'sixty','seventy','eighty','ninety'];
  
let res = number===0?'zero':'';
let c1=0, c2=0, c3=0;
let a=number;

c1 = a % 10;       //единицы
a = (a-c1) / 10;

c2 = a % 10;       //десятки
a = (a-c2) / 10;

c3 = a % 10;       //сотни

if (c3 > 0)  
  res = ed[c3-1] + ' hundred'
  
if (c2===1 && c1!==0)                  // от 11 до 19
  res = res + (res===''?'':' ') + d1[c1-1];
else if(c2 > 1 || (c2===1 && c1===0))  // 10 и далее от 20
  res = res + (res===''?'':' ') + de[c2-1];

if (c1>0 && c2!==1)
  res = res + (res===''?'':' ') + ed[c1-1];
  
  return res;

}
