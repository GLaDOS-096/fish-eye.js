/* Object design:
   Node{
       name: name of this very node
       id: id of this node(not always)
       relates: array of nodes it is related to
       radius: the radius of this circle
       x: posX of the circle
       y: posY of the circle
       color: color string
   }
   Graph{
       scope: array of layers
       scope_radius: 
       parseRelations(node): function to read the dependency tree                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
   }
   Camera{
       target: the graph it is looking at
       setScope(scope): the function to set the scope to 
   }
 */

function Node(node){
    var self = this
    this.name = node.name || "anonymus_node"
    this.relates = node.relates || []
    this.radius = node.radius || 10
    this.x = node.x || 0
    this.y = node.y || 0
    this.color = node.color ||
        (function(){
            var __r__ = Math.floor(Math.random()*255)
            var __g__ = Math.floor(Math.random()*255)
            var __b__ = Math.floor(Math.random()*255)
            return '#'+__r__.toString(16)+__g__.toString(16)+__b__.toString(16)
        })()
}

function Graph(){
    var self = this
    this.tree = {}
    this.scope_radius = 30
    this.clearTree = function(){
        self.tree = undefined
    }
    this.parseRelation = function parseRelation(node){
        var id = Math.floor(Math.random()*65535).toString(16) + Math.floor(Math.random()*65535).toString(16)
        node.id = id
        self.tree[id] = node
        node.relates.forEach(function(node,index){
            self.parseRelation(node)
        });
    }
}

function Camera(canvas,target){
    var self = this
    this.canvas = canvas
    this.target = target
    this.setScope = function setScope(scope){}
}