
namespace game {

    /** New System */
    //Only update after input
    @ut.executeAfter(ut.Shared.InputFence)
    export class InputMovimentSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            let dt = ut.Time.deltaTime();

            this.world.forEach([game.MoveSpeed, game.MoveWithInput, game.Boundaries, ut.Core2D.TransformLocalPosition],
                (speed,tag,bounds, position) => {
                    let localPosition = position.position;

                    if(ut.Runtime.Input.getKey(ut.Core2D.KeyCode.W))
                        localPosition.y += speed.Speed * dt;
                    if(ut.Runtime.Input.getKey(ut.Core2D.KeyCode.S))
                        localPosition.y -= speed.Speed * dt;
                    if(ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A))
                        localPosition.x -= speed.Speed * dt;
                    if(ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D))
                        localPosition.x += speed.Speed * dt;


                    localPosition.x = Math.max(bounds.minX,Math.min(bounds.maxX, localPosition.x));
                    localPosition.y = Math.max(bounds.minY,Math.min(bounds.maxY, localPosition.y));

                    //shoot bullet (need the information of player position)
//                    if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.Space)) {
//
//                        let bullet = ut.EntityGroup.Instantiate(this.world, )
//                    }

                    position.position = localPosition;

                });
        }
    }
}
