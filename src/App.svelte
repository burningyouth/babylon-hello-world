<style>
    main {
        text-align: center;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 100;
    }
</style>

<script lang="ts">
    import { Route } from "tinro";
    //import HelloWorld from "./pages/HelloWorld.svelte";
    import BasicModel from "./pages/BasicModel.svelte";
    import Nav from "./components/Nav.svelte";

</script>

<Route let:meta>
    <Nav url="{meta.url}"/>
    <main>
        <Route path="/">
            <h1>This is the main page</h1>
        </Route>
        <!--Route path="/hello-world">
            <h1>Babylon hello world</h1>
            <HelloWorld />
        </Route-->
        <Route path="/model1">
            <h1>Model and basic shadows</h1>
            <BasicModel />
        </Route>
    </main>
</Route>
