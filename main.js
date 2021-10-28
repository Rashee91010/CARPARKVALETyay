canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
greencarwidth=75;
greencarheight=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=310;

function add() {
	background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;
    
    greencar_imgtag=new Image();
    greencar_imgtag.onload=uploadgreencar;
    greencar_imgtag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgtag, 0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgtag, greencar_x,greencar_y,greencarwidth,greencarheight);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_y >= 0)
        {
            greencar_y=greencar_y - 10;
            uploadBackground();
            uploadgreencar();
        }
}

function down()
{
	if (greencar_y <= 350)
        {
            greencar_y=greencar_y + 10;
            uploadBackground();
            uploadgreencar();
        }
}

function left()
{
	if (greencar_x >= 0)
        {
            greencar_x=greencar_x - 10;
            uploadBackground();
            uploadgreencar();
        }
}

function right()
{
	if (greencar_x <= 750)
        {
            greencar_x=greencar_x + 10;
            uploadBackground();
            uploadgreencar();
        }
}
