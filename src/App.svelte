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

    let canvas: HTMLCanvasElement;

    onMount(() => {
        const scene = new SceneWithTextures(canvas);
        scene.createScene()
    });
</script>

<main>
    <h1>Babylon Hello world</h1>
    <canvas bind:this="{canvas}"></canvas>
</main>
