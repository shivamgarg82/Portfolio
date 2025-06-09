let btn =document.querySelector(' .button');
let ul =document.querySelector('.u');

 btn.addEventListener('click', function my()
{
  if(ul.style.display=="block"){
     ul.style.display="none";
}
else{
  ul.style.display="block";
}   
});
