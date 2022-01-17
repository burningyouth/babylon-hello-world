<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

    canvas {
        width: 100%;
        height: 600px;
    }
</style>

<script lang="ts">
    import { onMount } from "svelte";
    import { SceneWithTextures } from "./scenes/sceneWithTextures";
    import { SimpleScene } from "./scenes/simpleScene";
    import { PBRTexturesScene } from "./scenes/PBRTextures";

    let simpleSceneCanvas: HTMLCanvasElement;

    let simpleTextureCanvas: HTMLCanvasElement;

    let PBRTexturesCanvas: HTMLCanvasElement;


    onMount(() => {
        const simpleScene = new SimpleScene(simpleSceneCanvas);
        const simpleTexturesScene = new SceneWithTextures(simpleTextureCanvas);
        const PBRScene = new PBRTexturesScene(PBRTexturesCanvas);
        simpleScene.createScene()
        simpleTexturesScene.createScene()
        PBRScene.createScene()
    });
</script>

<main>
    <h1>Babylon Hello world</h1>
    <canvas bind:this="{simpleSceneCanvas}"></canvas>
    <br/>
    <canvas bind:this="{simpleTextureCanvas}"></canvas>
    <br/>
    <canvas bind:this="{PBRTexturesCanvas}"></canvas>
</main>
