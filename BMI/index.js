function BMI(weight,height){
    var t = height/100 ;
    var bmi = weight / (t*t);
    return bmi ;
}   

let weight = 53
let height = 163

let BB = BMI(weight,height)
console.log(BB)