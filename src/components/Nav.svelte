<script>
  export let url;
</script>

<nav>
  <a href="/" class:active-link="{url === '/'}">Main</a>
  <a href="/model1" class:active-link="{url === '/models'}">Models and shadows</a>
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
    }

    a {
        margin: 0 12px;
    }

    .active-link {
        color: orange;
    }
</style>
