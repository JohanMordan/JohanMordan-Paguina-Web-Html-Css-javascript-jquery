# JohanMordan-Paguina-Web-Html-Css-javascript-jquery
Esta paguina esta realizada Html, Css, javascript, jquery

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8"/>
	<title>Proyecto con JavaScript</title>

	<!-- Estilos css -->

	<link rel="stylesheet" type="text/css" href="css/styles.css"/>
	<link id="theme" rel="stylesheet" type="text/css" href="css/green.css"/>
	
	
	<!--jQuery-->
	 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

	<!--Slider-->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">
 
  <script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>


<!--mis scrips-->
<script type="text/javascript" src="js/main.js"></script>


</head>

<body>

	<div id="selector-theme">
		
		<div id="to-green"></div>
		<div id="to-red"></div> 
		<div id="to-blue"></div>
	</div>

	<section id= "global">

		<!-- cabecera-->
			<header>
				<div id="logo">
					<h1>Proyecto JS</h1>
				</div>

				<div class="clearfix"></div>

				<nav id="menu">
					<ul >
						<li><a href="#">Inicio</a></li>
						<li><a href="#">Reloj</a></li>
						<li><a href="#">Contacto</a></li>
						<li><a href="#">Sobre Mi</a></li>
						<li><a href="#">Contacto</a></li>

					</ul>

				</nav>


			</header>

			<!--Slider-->

			<div id="slider"></div>

						<div class="galeria">
			  <div><img src="img/verde.jpg" title="hojas"></div>
			  <div><img src="img/azul.jpg" title="El cielo"></div>
			  <div><img src="img/rojo.jpg" title="Hojas"></div>
			</div>

			<!--Contenido-->
			<section id="content">
				<div id="posts">
					<article Class="post">
						<h2>Prueba con el titulo</h2>
						<span class="date">Fecha de Publicacion</span>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus dapibus dui sit amet varius. Phasellus lacinia, nulla sit amet sodales ullamcorper, urna nibh tincidunt turpis, sit amet scelerisque metus metus a lorem. Sed non venenatis turpis. Nullam vulputate ac ex a imperdiet. Ut porttitor est sit amet enim hendrerit suscipit. Morbi consectetur fermentum dui sit amet cursus. Sed justo lectus, bibendum non arcu id, luctus semper tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vehicula fringilla massa, vel elementum quam convallis eu. Suspendisse nec faucibus eros, eleifend ornare est.							
			</p>
					<a href="#" class="button-more">Leer mas</a>	

					</article>

					<article Class="post">
						<h2>Prueba con el titulo</h2>
						<span class="date">Fecha de Publicacion</span>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus dapibus dui sit amet varius. Phasellus lacinia, nulla sit amet sodales ullamcorper, urna nibh tincidunt turpis, sit amet scelerisque metus metus a lorem. Sed non venenatis turpis. Nullam vulputate ac ex a imperdiet. Ut porttitor est sit amet enim hendrerit suscipit. Morbi consectetur fermentum dui sit amet cursus. Sed justo lectus, bibendum non arcu id, luctus semper tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vehicula fringilla massa, vel elementum quam convallis eu. Suspendisse nec faucibus eros, eleifend ornare est.							
			</p>
					<a href="#" class="button-more">Leer mas</a>	

					</article>


				</div>

				<aside id="sidebar">
					<div id="abaut">
					<h4><span>Quien soy?</span></h4>
					<img src="img/babosas.jpg"/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus dapibus dui sit amet varius.
					</p>
					</div>
					
					<div id="login">
					<h4><span>identificate?</span></h4>
					<form>
						<label for="name">
							Nombre
						</label>
						<input type="text" name="name" id="form_name"/>


						<label for="email">
							Correo
						</label>
						<input type="text" name="email"/>

						<label for="Password">
							Contraseña
						</label>
						<input type="Password" name="Password"/>

						<input type="submit" value="Entrar"/>

					</form>
					</div>

				</aside>

				<div class="clearfix"></div>

			</section>


	</section>

	<footer id="footer">
		
		Johan Mordan Programador Web Junior

		
		<a href="#" class="subir">Ir arriba</a>
		

	</footer>



</body>
</html>
