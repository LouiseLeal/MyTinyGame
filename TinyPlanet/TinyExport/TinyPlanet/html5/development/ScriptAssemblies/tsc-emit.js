var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//namespace game {
/** New System */
///    export class GameService{
////start new game
//        static newGame(world: ut.World) {
//          console.log("NewGame")
//          //Instantiate new entity group
//          ut.EntityGroup.instantiate(world, "game.GameScene");
//
//           //setup the initial state for the game
//          let config = world.getConfigData(game.);
//
//        }
//     
//    }
//}
var game;
(function (game) {
    /** New System */
    var PlayerInputSystem = /** @class */ (function (_super) {
        __extends(PlayerInputSystem, _super);
        function PlayerInputSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerInputSystem.prototype.OnUpdate = function () {
            this.world.forEach([game.PlayerInput], function (input) {
                var axis = new Vector2();
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A))
                    axis.x -= 1;
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D))
                    axis.x += 1;
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.W))
                    axis.y += 1;
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.S))
                    axis.y -= 1;
                input.Axis = axis;
            });
        };
        return PlayerInputSystem;
    }(ut.ComponentSystem));
    game.PlayerInputSystem = PlayerInputSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var PlayerMoveSystem = /** @class */ (function (_super) {
        __extends(PlayerMoveSystem, _super);
        function PlayerMoveSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerMoveSystem.prototype.OnUpdate = function () {
            this.world.forEach([game.PlayerInput, ut.Core2D.TransformLocalPosition], function (input, transform) {
                var x = transform.position.x += input.Axis.x;
                var y = transform.position.y += input.Axis.y;
                transform.position = new Vector3(x, y, 0);
            });
        };
        return PlayerMoveSystem;
    }(ut.ComponentSystem));
    game.PlayerMoveSystem = PlayerMoveSystem;
})(game || (game = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map