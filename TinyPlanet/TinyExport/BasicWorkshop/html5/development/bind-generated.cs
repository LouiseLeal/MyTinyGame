using Unity.Collections.LowLevel.Unsafe;
namespace entities.game.BulletGroup
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.EnemyGroup
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.ExplosionGroup
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.MainGroup
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Boundaries : UTiny.IComponentData
    {


        public float minX;
        public float maxX;
        public float minY;
        public float maxY;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct BulletTag : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ChangeOverTime : UTiny.IComponentData
    {


        public float changePerSecond;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct EnemyTag : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct InitialPosition : UTiny.IComponentData
    {


        public Unity.Mathematics.float3 position;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Lazer : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct MoveSpeed : UTiny.IComponentData
    {


        public float speed;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct MoveWithInput : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Name : UTiny.IComponentData
    {


        public string EntityName;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct PlayerTag : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct ScrollingBackground : UTiny.IComponentData
    {


        public float speed;
        public float threshold;
        public float distance;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Spawner : UTiny.IComponentData
    {


        public float time;
        public float delay;
        public bool isPaused;
        public string spawnedGroup;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct SpawnerGroup : UTiny.IComponentData
    {


        public string spawnerGroup;



    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Default : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct TransparentFX : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct IgnoreRaycast : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Water : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct UI : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct PostProcessing : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Cutscene : UTiny.IComponentData
    {





    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceAnimationClip : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceAudioClip : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceSprite : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceSpriteAtlas : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTMP_FontAsset : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTexture2D : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTile : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CameraCullingMask : UTiny.IComponentData
    {


        public int mask;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct EntityLayer : UTiny.IComponentData
    {


        public int layer;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct BulletBehaviour_State : UTiny.IComponentData
    {


        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct EnemyBehavior_State : UTiny.IComponentData
    {


        public bool initialized;
        public bool enabled;
        public bool onEnableCalled;
        public bool onDisableCalled;



    }
}



