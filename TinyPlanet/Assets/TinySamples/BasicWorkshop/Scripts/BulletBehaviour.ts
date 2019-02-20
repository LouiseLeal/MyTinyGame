
namespace game {

    export class BulletBehaviourFilter extends ut.EntityFilter {
        entity: ut.Entity;
        tag: game.BulletTag;
        position: ut.Core2D.TransformLocalPosition;
        speed: game.MoveSpeed;
        initialPoition : Vector3;

    }

    export class BulletBehaviour extends ut.ComponentBehaviour {

        data: BulletBehaviourFilter;

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the BulletBehaviourFilter signature, once when enabled
        OnEntityEnable():void { 
            
            console.log("bullet initialized");
        }
        
        // this method is called for each entity matching the BulletBehaviourFilter signature, every frame it's enabled
        //OnEntityUpdate():void { }

        // this method is called for each entity matching the BulletBehaviourFilter signature, once when disabled
        //OnEntityDisable():void { }

     
    }

   
}
