let myNumber=13;
if(typeof myNumber!=='number'){
console.log('This is not a number');
}else if(myNumber%3===0){
console.log('Gen');
}else if(myNumber&5===0){
  console.log("Buzz"); 
}else if(myNumber%3===0 && myNumber %5===0){
    console.log('GenBuzz');
}else{
    console.log(myNumber);
}
// **********second Question******
let items = 'Hat';
switch(items){
  case 'shoes':
      console.log('shoes are $50');
      break;
 case  'Jeans':
     console.log( 'Jeans are $25');
     break;

case  'Hat':
     console.log( 'Hat are $12');
     break;

     case  'socks':
        console.log( 'socks are $2');
        break;   
     default:
      console.log('invalid items');   

}

// *******Third Question******
var randomIntegers = Math.floor(Math.random()*(100-50+1)+50);
console.log(randomIntegers);


