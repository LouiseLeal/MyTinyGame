
namespace game {

    export class BulletBehaviourFilter extends ut.EntityFilter {
        entity: ut.Entity;
        tag: game.BulletTag;
        position: ut.Core2D.TransformLocalPosition;
        speed: game.MoveSpeed;
        initialPoition : Vector3;
        bounds: game.Boundaries;
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
        OnEntityUpdate():void { 
             let localPosition = this.data.position.position;
            localPosition.y += this.data.speed.speed * ut.Time.deltaTime();

            this.data.position.position = localPosition;

            if(localPosition.y >= this.data.bounds.maxY)    
                //this.world.addComponent(this.entity, ut.Disabled);
                this.world.destroyEntity(this.data.entity);
        }

        // this method is called for each entity matching the BulletBehaviourFilter signature, once when disabled
        //OnEntityDisable():void { }

     
    }

   
}
