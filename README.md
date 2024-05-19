yshx<html>

<head>

<title> My website </title>

<style>

*{

margin:0;

padding:0;

box-sizing:border-box;

font-family:'Poppins',sans-serif;

}

.a{

position:relative;

width:100%;

height:100vh;

padding:0 5%;

display:flex;

align-items:center;

justify-content:center;

}

nav{

width: 100%;

position:absolute;

top:0;

left:0;

padding: 20px 8%;

display: flex;

align-items:center;

justify-content:space-between;

color:white;

}

nav ul li{

display:inline-block;

list-style-type:none;

margin-left:40px;

}

nav ul li a{

text-decoration:none;

color:#fff;

font-size:17px;

}

.v{

z-index:-1;

position:absolute;

top:0;

right:0;

bottom:0;

}

@media (min-aspect-ratio:16/9){

.v{

width:100%;

height:auto;

}

}

@media (max-aspect-ratio:16/9){

.v{

width:100%;

height:auto;

}

}

#Content{

position:absolute;

left: 30px;

color:#efa;

line-height: 25px;

font-weight:bold;s

}

#Contact{

position:absolute;

top: 500px;

height: 250px;

width: 500px;

padding-left:20px;

padding-top:10px;

border-radius:30px;

background-color:sky blue;

color:dfa;

box-shadow:10px 10px 20px 4px #faf;

}

form{

}

input{

width:300px;

border-radius:20px;

}

textarea{

width:300px;

border-radius:20px;

}

#p{

font-size:25px;

color: #cfa;

}

#p:hover{

    font-size:30px;

}

.b{

height: 20px;

width: 20px;

background-color: transparent;

color:white;

}

.u{

background-color: #777;

height: 500px;

width: 800px;

color: white;

display: none;

z-index: -10;

}

h3{

  animation-name: color;

animation-duration: 6s;

 animation-iteration-count: 1000;

 aniamtion-timming-function: linear;

  

}

@keyframes color{

 0%{

   box-shadow: inset 0 0 10px red;

}

24.9%{

   box-shadow: inset 0 0 10px red;





}

25%{

   box-shadow: inset 0 0 10px yellow;

color: skyblue;



}

49.9%{

   box-shadow: inset 0 0 10px yellow;

color: skyblue;



}

50%{

   box-shadow: inset 0 0 10px #ddd;

color: #bef;



}

74.9%{

   box-shadow: inset 0 0 10px #ddd;

color: #bef;



}

75%{

   box-shadow: inset 0 0 10px 4px red;

color: cef;



}

100%{

   box-shadow: 0 0 10px 4px  red;

color: cef;



}



</style>

</head>

<body>



<div class="a">

<video class="v" autoplay muted loop plays-inline>

<source src="6962-197634410.mp4">

</video>



<nav>

<div class="hi">

<button class="b" style="text-align:right;">&#x2630;</button>

<ul class="u">

<li>Home</li>

<li>About Us</li>

<li>Contact</li>

<li>Faq</li>

<li>Help</li>

</ul>

</div>



<ul>

<li><a href="#">Home</a></li>

<li><a href="#Content">About Us</a></li>

<li><a href="#Contact">Contact</a></li>

<li><a href="#">Faq</a></li>

<li><a href="#">Help</a></li>

</ul>

</nav>



<div id="Content">

<h3 style="box-shadow: 0 0 10px 6px red; width: 170px; border-radius:20px;">Meet Shivam Garg</h3><br>

<pre id="p">

i'm

Frontend-

developer

</pre><br>

<pre>

Experienced frontened developer 

with a passion for creating visually 

stunning and user-friendly 

websites.

</pre>

</div>



<div id="Contact">

<form>

<label>Name:</label><br>

<input type="text" placeholder="E.g.Maria" required autofocus><br><br>

<label>Email:</label><br>

<input type="email" placeholder="E.g.Maria123@gmail.com" required autocomplete><br><br>

<label>Phone Number:</label><br>

<input type="number" placeholder="E.g.123-4567-890" ><br><br>

<textarea rows="2">Message</textarea><br><br>

<button id="btn">Submit</button>

<button>Reset</button>



</form>

</div>

</div>



<script>

let btn =document.querySelector(' .b');

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



let btn=document.getElementById('btn');



</script>

</body>

</html>
