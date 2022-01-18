<script>
  export let url;
</script>

<nav>
  <a href="/" class:active-link="{url === '/'}">Main</a>
  <a href="/hello-world" class:active-link="{url === '/hello-world'}">Hello World</a>
  <a href="/models" class:active-link="{url === '/models'}">Models</a>
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
