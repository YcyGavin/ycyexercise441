const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('please write your name');
  alert('Welocme ' + name + '!');
}
/*ChengyangYe Gavin
1.JavaScript is an object-based scripting language that not only creates objects, but also uses existing objects
2.JavaScript is interpreted line by line as the program runs.
3.The JavaScript scripting language is independent of the operating system and only requires browser support.
*/
function jiafa(){
    var a=document.getElementById('a').value;
    var b=document.getElementById('b').value;
    var c=document.getElementById('c');
    c.value=Number(a)+Number(b);
}