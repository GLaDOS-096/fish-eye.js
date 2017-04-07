/* Object design:
   Node{
       name: object of this very module
       exps: array of modules that depend on this module
       deps: array of dependencies of this module  
       radius: the radius of this circle
       x: posX of the circle
       y: posY of the circle
       color: color string
   }
   Graph{
       scope: array of layers
       init(,method,dir): function to read the dependency tree
       setScope(): the function to set the                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
   }
   Camera{
       target: the graph it is looking at
       setScope(scope): the function to set the scope to 
   }
 */

function Node(node){
    var self = this
    this.name = node.name
    this.exps = node.exps
    this.deps = node.deps
    this.radius = node.radius
    this.x = node.x
    this.y = node.y
    this.color = node.color ||
        (function(){
            var __r__ = Math.floor(Math.random()*255)
            var __g__ = Math.floor(Math.random()*255)
            var __b__ = Math.floor(Math.random()*255)
            return '#'+__r__.toString(16)+__g__.toString(16)+__b__.toString(16)
        })()
}

function Graph(){
    this.scope = []
    this.init = function init(method,dir){}
}

function Camera(target){
    this.target = target
    this.setScope = function setScope(){}
}