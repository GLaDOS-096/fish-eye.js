/* Object design:
   Eye{
       level: the higher it is, the higher level it will be
       radius: the radius of this circle
       x: posX of the circle
       y: posY of the circle
       color: color string
   }
   DepNode{
       name: object of this very module
       exps: array of modules that depend on this module
       deps: array of dependencies of this module                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
   }
   Camera{
       center: it be the center of the camera as said
       scope: array of layers
       formColor(): function that forms a color
   }
 */

function Eye(eye){
    var self = this
    this.x = eye.x
    this.y = eye.y
    this.color = eye.color
}

function DepNode{

}

function Camera{

}