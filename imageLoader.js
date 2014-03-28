/*                                 imageLoader.js
* this small library is written to avoid writing codes to rotate images  
* 
*/

CanvasRenderingContext2D.prototype.draw_image = function(image,center,srcSize,dstPos,dstSize,angle){
    if(angle == undefined || angle == null) angle = 0;

    this.save();
    this.setTransform(1,0,0,1,0,0);
    var x = dstPos[0],
        y = dstPos[1],
        halfWidth = srcSize[0]/2,
        halfHeight = srcSize[1]/2,
        angleInRads = angle * Math.PI / 180;
    this.translate(x+halfWidth,y+halfHeight);
    this.rotate(angleInRads);
    this.drawImage(image,Math.floor(center[0]/srcSize[0])*srcSize[0],Math.floor(center[1]/srcSize[1])*srcSize[1],srcSize[0],srcSize[1],-halfWidth,-halfHeight,dstSize[0],dstSize[1]);
    this.restore();


};
