<style>
    canvas {
        width: 100%;
        height: 600px;
    }
</style>

<script lang="ts">
  import { onMount } from "svelte";
  import { BasicModelScene } from "../scenes/BasicModel";

  let canvas: HTMLCanvasElement;


  onMount(() => {
    const basicModelscene = new BasicModelScene(canvas);
    basicModelscene.createScene();
  });
</script>

<canvas bind:this="{canvas}"></canvas>
