const popUp=()=>{
var x = prompt("input name");

if (x == "") {
    alert("enter name");
    x = prompt("input name");
} else {
    console.log(x);
    alert("successful");

}
} 
popUp();