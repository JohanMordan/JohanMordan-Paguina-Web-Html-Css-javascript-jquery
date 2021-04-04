$(document).ready(function(){

		//slider

		  $('.galeria').bxSlider({
	    mode: 'fade',
	    captions: false,
	    slideWidth: 1200,
	    responsive: true,
	    pager: true
	  });

		//posts
		var posts = [
		{
			title:'Prueba de titulo 1',
			date: new Date(),
			content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus dapibus dui sit amet varius. Phasellus lacinia, nulla sit amet sodales ullamcorper, urna nibh tincidunt turpis, sit amet scelerisque metus metus a lorem. Sed non venenatis turpis. Nullam vulputate ac ex a imperdiet. Ut porttitor est sit amet enim hendrerit suscipit. Morbi consectetur fermentum dui sit amet cursus. Sed justo lectus, bibendum non arcu id, luctus semper tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vehicula fringilla massa, vel elementum quam convallis eu. Suspendisse nec faucibus eros, eleifend ornare est.	'

		},
		{
			title:'Prueba de titulo 2',
			date: new Date(),
			content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus dapibus dui sit amet varius. Phasellus lacinia, nulla sit amet sodales ullamcorper, urna nibh tincidunt turpis, sit amet scelerisque metus metus a lorem. Sed non venenatis turpis. Nullam vulputate ac ex a imperdiet. Ut porttitor est sit amet enim hendrerit suscipit. Morbi consectetur fermentum dui sit amet cursus. Sed justo lectus, bibendum non arcu id, luctus semper tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vehicula fringilla massa, vel elementum quam convallis eu. Suspendisse nec faucibus eros, eleifend ornare est.	'

		},
		{	title:'Prueba de titulo 3',
			date: new Date(),
			content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus dapibus dui sit amet varius. Phasellus lacinia, nulla sit amet sodales ullamcorper, urna nibh tincidunt turpis, sit amet scelerisque metus metus a lorem. Sed non venenatis turpis. Nullam vulputate ac ex a imperdiet. Ut porttitor est sit amet enim hendrerit suscipit. Morbi consectetur fermentum dui sit amet cursus. Sed justo lectus, bibendum non arcu id, luctus semper tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vehicula fringilla massa, vel elementum quam convallis eu. Suspendisse nec faucibus eros, eleifend ornare est.	'
		},
		{	title:'Prueba de titulo 4',
			date: new Date(),
			content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus dapibus dui sit amet varius. Phasellus lacinia, nulla sit amet sodales ullamcorper, urna nibh tincidunt turpis, sit amet scelerisque metus metus a lorem. Sed non venenatis turpis. Nullam vulputate ac ex a imperdiet. Ut porttitor est sit amet enim hendrerit suscipit. Morbi consectetur fermentum dui sit amet cursus. Sed justo lectus, bibendum non arcu id, luctus semper tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vehicula fringilla massa, vel elementum quam convallis eu. Suspendisse nec faucibus eros, eleifend ornare est.	'
		},
		{	title:'Prueba de titulo 5',
			date: new Date(),
			content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus dapibus dui sit amet varius. Phasellus lacinia, nulla sit amet sodales ullamcorper, urna nibh tincidunt turpis, sit amet scelerisque metus metus a lorem. Sed non venenatis turpis. Nullam vulputate ac ex a imperdiet. Ut porttitor est sit amet enim hendrerit suscipit. Morbi consectetur fermentum dui sit amet cursus. Sed justo lectus, bibendum non arcu id, luctus semper tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vehicula fringilla massa, vel elementum quam convallis eu. Suspendisse nec faucibus eros, eleifend ornare est.	'
		},
		];

		posts.forEach((item, index) => {
			var post = ` 
			<article Class="post">
						<h2>${item.title}</h2>
						<span class="date">${item.date} de Publicacion</span>
			<p>
				${item.content}						
			</p>
					<a href="#" class="button-more">Leer mas</a>	
					</article>
			`;
			$("#posts").append(post);

		});


		//SELECTOR DE TEMA

		var theme = $("#theme");

		$("#to-green").click(function(){
			theme.attr("href", "css/green.css");
		});

		$("#to-red").click(function(){
			theme.attr("href", "css/red.css");
		});
		
		$("#to-blue").click(function(){
					theme.attr("href", "css/blue.css");
				});

		//Scroll arriba de la web

		$('.subir').click(function(e){
			e.preventDefault();

			$('html, body').animate({
				scrollTop:0

			},500);


			return false;

		});


		//login falso

		$("#login form").submit(function(){
			var form_name = $("#form_name").val();

			localStorage.setItem("form_name", form_name);
				

		});


		var form_name = localStorage.getItem("form_name");

		if(form_name != null && form_name !="undefined"){
			var about_parrafo = $("#about p");

			about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
			about_parrafo.append("<a href='#' id='logout'>Carrar sesion</a>");
			
			$("#login").hide();

			$("#logout").click(function(){

				localStorage.clear();
				location.reload();
			});
	}
});