var world;
var charmander, robot;
var position = 0;
var whalesong;
var whalename;
var bmid;
var bright,bleft;
var goat,cow;
var b1,b2,b3;
var parrotsound,cowsound,dogsound,goatsound,foxsound;
// array to hold some particles

var particles1 = [];
var particles2 = [];
var particles3= [];

function preload(){
whalesong = loadSound('resources/Whale2.mp3')
dogsound = loadSound('resources/dogbark.mp3')
cowsound = loadSound('resources/cowsound.mp3')
goatsound = loadSound('resources/goatsound.mp3')
parrotsound = loadSound('resources/parrotsound.mp3')
foxsound = loadSound('resources/foxsound.mp3')



}
function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// now that we have a world we can add elements to it using a series of wrapper classes
	// these classes are discussed in greater detail on the A-Frame P5 documentation site
	// http://cs.nyu.edu/~kapp/courses/cs0380fall2017/aframep5.php

	world.setUserPosition(0,2,6)
	// create a plane to serve as our "ground"
	var g = new Plane({x:0, y:0, z:0, width:100, height:100, red:0, green:102, blue:153, rotationX:-90, metalness:0.25});

	// add the plane to our world
	world.add(g);

	container = new Container3D({x:11, y:1, z:4,	});
	world.add(container);

	container2 = new Container3D({x:-11, y:1, z:5});
	world.add(container2);

	container3 = new Container3D({x:0, y:1, z:15});
	world.add(container3);


		// add the box to the world


		 bmid = new Tetrahedron({
								x:0,
								y:3,
								z:10,
								radius : 0.6,
								scaleX :0.6,
								scaleY:0.6,
								scaleZ:0.6,
								opacity:0.5,

								red:random(255), green:random(255), blue:random(255),
								clickFunction: function(theBox) {

									world.slideToObject( theBox, 2000 );
									position =2;
										console.log(position)
								}
			});

			// add the box to the world
			world.add(bmid);


			 bright = new Dodecahedron({
									x:7,
									y:2.5,
									z:4,
									radius:0.5,
									opacity:0.5,
										red:random(255), green:random(255), blue:random(255),

									clickFunction: function(theBox) {

										world.slideToObject( theBox, 2000 );
										position =3;
											console.log(position)
											container.rotationY =0;
									}
				});

				// add the box to the world
				world.add(bright);

				 bleft = new Ring({
										x:-7,
										y:2.5,
										z:5,
										radiusInner:0.5,
						radiusOuter: 1,
						side: 'double',
						red:random(255), green:random(255), blue:random(255),
						opacity:0.5,

										clickFunction: function(theBox) {

											world.slideToObject( theBox, 2000 );
											position =1;
												console.log(position)
										}
					});

					// add the box to the world
					world.add(bleft);


		goat = new OBJ({
			asset: 'goato',
			mtl: 'goatm',
			x: 1,
			y: 0,
			z: 1,
			scaleX:0.2,
			scaleY:0.2,
			scaleZ:0.2,
			rotationY:45,
		});
	  	container2.addChild(goat);

			var bgoat= new Box({
					x:1, y:0, z:1,

					blue:200,
					red:250,
					green:50,
					opacity:0.1,
					clickFunction: function(theBox) {

						goatsound.play();
						console.log("play music")
					}
			});
			container2.addChild(bgoat);



				fox = new OBJ({
					asset: 'foxo',
					mtl: 'foxm',
					x: 1,
					y: 0,
					z: 0,
					scaleX:0.5,
					scaleY:0.5,
					scaleZ:0.5,
				});
					container3.addChild(fox);


				var bfox= new Box({
						x:1, y:0, z:0,

						blue:200,
						red:250,
						green:50,
						opacity:0.1,
						clickFunction: function(theBox) {

							foxsound.play();
							console.log("play music")
						}
				});
				container3.addChild(bfox);

					pug = new OBJ({
						asset: 'pugo',
						mtl: 'pugm',
						x: 0,
						y: 0.5,
						z: -2,
						scaleX:1.3,
						scaleY:1.3,
						scaleZ:1.3,
						rotationY:180,
					});
						container3.addChild(pug);

						var bdog= new Box({
								x:0, y:0.5, z:-2,

								blue:200,
								red:250,
								green:50,
								opacity:0.1,
								clickFunction: function(theBox) {

									dogsound.play();
									console.log("play music")
								}
						});
						container3.addChild(bdog);

						cow = new OBJ({
							asset: 'cowo',
							mtl: 'cowm',
							x: 0,
							y: 0.5,
							z: -1,
							scaleX:0.7,
							scaleY:0.7,
							scaleZ:0.7,
							rotationY:160,

						});
							container2.addChild(cow);

							var bcow= new Box({
									x:0, y:0.5, z:-1,

									blue:200,
									red:250,
									green:50,
									opacity:0.1,
									clickFunction: function(theBox) {

									cowsound.play();
										console.log("play music")
									}
							});
							container2.addChild(bcow);


								parrot= new OBJ({
									asset: 'parroto',
									mtl: 'parrotm',
									x: -1,
									y: 1,
									z:-1,
									scaleX:1,
									scaleY:1,
									scaleZ:1,

								});
									container3.addChild(parrot);

									var bparrot= new Box({
											x:-1, y:1, z:-1,

											blue:200,
											red:250,
											green:50,
											opacity:0.1,
											clickFunction: function(theBox) {

												parrotsound.play();
												console.log("play music")
											}
									});
									container3.addChild(bparrot);


									 b1 = new Box({
												x:0, y:-0.5, z:0,
												scaleX:5,
												scaleY:0.2,
												scaleZ:5,
												blue:200,
												red:50,
												green:50,

										});
										container.addChild(b1)

										whale= new OBJ({
											asset: 'whaleo',
											mtl: 'whalem',
											x:1,
											y: 0.5,
											z: 1,
											scaleX:2,
											scaleY:2,
											scaleZ:2,
										});
											container.addChild(whale);

											var bwhale= new Box({
													x:1, y:0.5, z:1,

													blue:200,
													red:250,
													green:50,
													opacity:0.1,
													clickFunction: function(theBox) {

													 	whalesong.play();

														console.log("play music")
													}
											});
											container.addChild(bwhale);






											 b2 = new Box({
													x:0, y:-0.5, z:0,
													scaleX:5,
													scaleY:0.2,
													scaleZ:5,
													blue:50,
													red:100,
													green:200,

											});
											container2.addChild(b2)

											 b3 = new Box({
													x:0, y:-0.5, z:0,

													radius:0.7,
													scaleX:5,
													scaleY:0.2,
													scaleZ:5,
													blue:50,
													red:200,
													green:200,

											});
											container3.addChild(b3)

}

function draw() {
	if(position !=2){
		container3.spinY(0.2)
		for (var i = 0; i < particles2.length; i++) {
			var result = particles2[i].move();
			if (result == "gone") {
				particles2.splice(i, 1);
				i-=1;
			}
		}

	}else{
		container3.setRotation(0,0,0)
		var temp = new Particle(0, 0, 15);

	// add to array
	particles2.push( temp );

	// draw all particles
	for (var i = 0; i < particles2.length; i++) {
		var result = particles2[i].move();
		if (result == "gone") {
			particles2.splice(i, 1);
			i-=1;
		}
	}

	}
		if(position !=1){
			container2.spinY(0.2)
			for (var i = 0; i < particles1.length; i++) {
				var result = particles1[i].move();
				if (result == "gone") {
					particles1.splice(i, 1);
					i-=1;
				}
			}}
		else{
		container2.setRotation(0,0,0)
		var temp = new Particle(-11, 0, 5);

	// add to array
	particles1.push( temp );

	// draw all particles
	for (var i = 0; i < particles1.length; i++) {
		var result = particles1[i].move();
		if (result == "gone") {
			particles1.splice(i, 1);
			i-=1;
		}
	}

		}

			if(position !=3){
				container.spinY(0.2)
				for (var i = 0; i < particles3.length; i++) {
					var result = particles3[i].move();
					if (result == "gone") {
						particles3.splice(i, 1);
						i-=1;
					}
				}
			}
			else{
				container.setRotation(0,0,0)
				var temp = new Particle(11, 0, 4);

			// add to array
			particles3.push( temp );

			// draw all particles
			for (var i = 0; i < particles3.length; i++) {
				var result = particles3[i].move();
				if (result == "gone") {
					particles3.splice(i, 1);
					i-=1;
				}
			}
			}
    bmid.spinY(1)
		bright.spinY(1)
		bleft.spinY(1)


}


class Particle {

	constructor(x,y,z) {

		// construct a new Box that lives at this position
		this.myBox = new Sphere({
								x:x, y:y, z:z,
								red: random(255), green:random(255), blue:random(255),
								radius: 0.3,
								opacity:0.6,

		});

		// add the box to the world
		world.add(this.myBox);

		// keep track of an offset in Perlin noise space
		this.xOffset = random(1000);
		this.zOffset = random(2000, 3000);
	}

	// function to move our box
	move() {
		// compute how the particle should move
		// the particle should always move up by a small amount
		var yMovement = 0.01;

		// the particle should randomly move in the x & z directions
		var xMovement = map( noise(this.xOffset), 0, 1, -0.05, 0.05);
		var zMovement = map( noise(this.zOffset), 0, 1, -0.05, 0.05);

		// update our poistions in perlin noise space
		this.xOffset += 0.01;
		this.yOffset += 0.01;

		// set the position of our box (using the 'nudge' method)
		this.myBox.nudge(xMovement, yMovement, zMovement);

		// make the boxes shrink a little bit
		var boxScale = this.myBox.getScale();
		this.myBox.setScale( boxScale.x-0.005, boxScale.y-0.005, boxScale.z-0.005);

		// if we get too small we need to indicate that this box is now no longer viable
		if (boxScale.x <= 0) {
			// remove the box from the world
			world.remove(this.myBox);
			return "gone";
		}
		else {
			return "ok";
		}
	}
}
