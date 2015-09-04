/*                                 imageLoader.js
* this small library is written to avoid writing codes to rotate images  
* 
*/

CanvasRenderingContext2D.prototype.draw_image = function (image, center, srcSize, dstPos, dstSize, angle) {
    if(angle === undefined || angle === null || angle === 0) 
    	this.drawImage(image,Math.floor(center[0]/srcSize[0])*srcSize[0],Math.floor(center[1]/srcSize[1])*srcSize[1],srcSize[0],srcSize[1],dstPos[0],dstPos[1],dstSize[0],dstSize[1]);
    else{
	    this.save();
	    var x = dstPos[0],
	        y = dstPos[1],
	        halfWidth = srcSize[0]/2,
	        halfHeight = srcSize[1]/2,
	        angleInRads = angle * Math.PI / 180;
	    this.translate(x+halfWidth,y+halfHeight);
	    this.rotate(angleInRads);
	    this.drawImage(image,Math.floor(center[0]/srcSize[0])*srcSize[0],Math.floor(center[1]/srcSize[1])*srcSize[1],srcSize[0],srcSize[1],-halfWidth,-halfHeight,dstSize[0],dstSize[1]);
	    this.restore();
	}
};

//Line Drawing
CanvasRenderingContext2D.prototype.drawLine = function (start, end, width, color) {
    this.strokeStyle= color;
    this.lineWidth = width;
    this.lineCap = "square";
    this.beginPath();
    this.moveTo(start[0],start[1]);
    this.lineTo(end[0],end[1]);
    this.stroke();
    this.closePath();
};

CanvasRenderingContext2D.prototype.drawText =function () {
    return;
};

CanvasRenderingContext2D.prototype.drawCircle = function (x, y, radius, color) {
    this.beginPath();
    this.fillStyle = color;
    this.arc(x,y,radius,2*Math.PI,0,true);
    this.fill();
    this.closePath();
};
