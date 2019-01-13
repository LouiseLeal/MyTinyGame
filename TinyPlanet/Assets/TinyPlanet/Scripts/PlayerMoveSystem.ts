
namespace game {

    /** New System */
    export class PlayerMoveSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([game.PlayerInput, ut.Core2D.TransformLocalPosition],
                (input,transform)=>{
                    let x = transform.position.x += input.Axis.x ;
                    let y = transform.position.y += input.Axis.y;

                    transform.position = new Vector3(x,y,0);

                 });
        }
    }
}
