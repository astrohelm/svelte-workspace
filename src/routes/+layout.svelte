<script>
  import '$styles';
  import { a, b } from '$client';
</script>

<header>
  <section class="container">
    Header {a()}
  </section>
</header>

<slot />

<footer>
  <section class="container">
    Footer {a()}
  </section>
</footer>

<style lang="scss">
  header,
  footer {
    padding: 10px 20px;
    color: #fff;
    background: #0ae;
  }
</style>
