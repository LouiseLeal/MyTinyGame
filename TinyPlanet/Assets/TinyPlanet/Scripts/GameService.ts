
namespace game {

    /** New System */
    export class GameService{
        //start new game
        static newGame(world: ut.World) {
            console.log("NewGame")

            //Instantiate new entity group
            ut.EntityGroup.instantiate(world, "game.GameScene");

            //setup the initial state for the game
           let config = world.getConfigData(game.GameConfig);

        }
      
    }
}
