const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
function is prime(numbers){
    if (numbers<=1){
        return false;
    }
for (let i=2;i<=Math.sqrt(numbers); i++){
    if (numbers%i==0){
        return false;
    }
}
}  