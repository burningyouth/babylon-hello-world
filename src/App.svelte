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
    import { Route } from "tinro";
    import HelloWorld from "./pages/HelloWorld.svelte";
    import BasicModel from "./pages/BasicModel.svelte";
    import Nav from "./components/Nav.svelte";

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

<Route let:meta>
    <Nav url="{meta.url}"/>
    <main>
        <Route path="/">
            <h1>This is the main page</h1>
        </Route>
        <Route path="/hello-world">
            <h1>Babylon hello world</h1>
            <HelloWorld />
        </Route>
        <Route path="/models">
            <h1>Models!</h1>
            <BasicModel />
        </Route>
    </main>
</Route>
