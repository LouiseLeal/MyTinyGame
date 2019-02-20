
namespace game {

    /** New System */
    export class InputShootSystem extends ut.ComponentSystem {
        
        OnUpdate():void {
            if(ut.Runtime.Input.getKey(ut.Core2D.KeyCode.Space))
            {
                console.log("press space ");

                let playerPosition = new Vector3(0,0,0);

                this.world.forEach([game.PlayerTag, ut.Core2D.TransformLocalPosition], (tag, position) => {
                    playerPosition = position.position;
                    console.log("find player");
                });


                this.world.forEach([game.BulletTag,game.SpawnerGroup], (tag,spawner) =>{
                    

                    //Todo put some time delay
                    let aux  = ut.EntityGroup.instantiate(this.world, spawner.spawnerGroup); 
                    this.world.usingComponentData(aux[0], [ut.Core2D.TransformLocalPosition], (bulltePos) => {
                       bulltePos.position = playerPosition;
                    });
                    console.log("try to stantiate  ");

                });
             }
        }
    }
    
}
