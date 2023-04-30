let numin1 = document.getElementById('num1') as HTMLInputElement;
let numin2 = document.getElementById('num2') as HTMLInputElement;
let buttonele = document.querySelector('button')!;

// let numarr: number[] = [];
let numarr: Array<number> = [];

// let strarr: string[] = [];
let strarr: Array<string> = [];

type numstr = number | string;
// type resobj = { val: number; timestamp: Date };

interface resobj {
  val: number;
  timestamp: Date;
}

function add(num1: numstr, num2: numstr) {
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return (num1 + ' ' + num2);
  } else if (typeof num1 === 'number' && typeof num2 === 'number') {
    return (num1 + num2);
  }
  return +num1 + +num2;
}


function printResult(resultObj: resobj) {
  console.log(resultObj.val)
}

buttonele.addEventListener('click', () => {
  let num1 = numin1.value;
  let num2 = numin2.value;

  let res1 = add(+num1, +num2)
  numarr.push(res1 as number)

  let res2 = add(num1, num2)
  strarr.push(res2 as string)

  console.log(numarr, strarr)
  printResult({ val: res1 as number, timestamp: new Date() })
})


let myPromis = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('it work');
  },1000)
})

myPromis
  .then(res => {
    console.log(res.split('w'))
  })
  .catch(err => {
    console.log(err)
  })