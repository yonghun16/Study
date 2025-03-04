<script>
  import Main from './pages/Main.svelte'
  import Login from './pages/Login.svelte'
  import Signup from './pages/Signup.svelte'
  import Write from './pages/Write.svelte'
  import NotFound from './pages/NotFound.svelte'
  import Router from 'svelte-spa-router'
  import "./css/styles.css"

  const routes = {
    '/': Main,
    '/login': Login,
    '/signup': Signup,
    '/write': Write,
    "/*":NotFound,
  }
</script>

<Router routes={routes} />

<main>
</main>
