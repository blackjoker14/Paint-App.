canvas = document.getElementById("myCanvas");
width_of_line = 2;
ctx = canvas.getContext("2d");
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 100;
var last_position_of_x, last_position_of_y;
var radius = 2;
color = "Black";
var mouseEvent = "empty"

if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

}


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    width_of_line = document.getElementById("width").value;
    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
};

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent = "mouseup";
};

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
  mouseEvent = "mouseleave";
};






canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    console.log("touchmove")

    
        ctx.beginPath();    
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        

        console.log("Last position of x and y coordinates = ");
        console.log("x =" + last_position_of_x + "y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
};









canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();    
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius,0, 2 * Math.PI);

        console.log("Last position of x and y coordinates = ");
        console.log("x =" + last_position_of_x + "y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
};


function clearArea(){
    ctx.clearRect(0, 0, 1000, 450);
}