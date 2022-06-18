function prime(num){
    //looping through 2 to number -1 
    for (let i=2;i<num;i++){
        if (num% i==0){
            isPrime=false;
            break;
        }
    }
    return isPrime;
}
 function solution(arg){
     return prime(arg);
 }
 if(typeof require !=="undefined" && require.main===module){
     if(process.argv.length<=2){
         throw Error("Require argument");
     }
     const arg=process.argv[2];
     console.log(solution(arg));
 }
 module.exports = {solution}