<style>
    canvas {
        width: 100%;
        height: 600px;
    }
</style>

<script lang="ts">
    import { onMount } from "svelte";
    import { SceneWithTextures } from "../scenes/sceneWithTextures";
    import { SimpleScene } from "../scenes/simpleScene";
    import { PBRTexturesScene } from "../scenes/PBRTextures";

    let simpleSceneCanvas: HTMLCanvasElement;

    let simpleTextureCanvas: HTMLCanvasElement;

    let PBRTexturesCanvas: HTMLCanvasElement;

    onMount(() => {
        const simpleScene = new SimpleScene(simpleSceneCanvas);
        const simpleTexturesScene = new SceneWithTextures(simpleTextureCanvas);
        const PBRScene = new PBRTexturesScene(PBRTexturesCanvas);
        simpleScene.createScene();
        simpleTexturesScene.createScene();
        PBRScene.createScene();
    });
</script>

<canvas bind:this="{simpleSceneCanvas}"></canvas>
<br />
<canvas bind:this="{simpleTextureCanvas}"></canvas>
<br />
<canvas bind:this="{PBRTexturesCanvas}"></canvas>
