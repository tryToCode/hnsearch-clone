<template>
  <footer class="bottom-footer">
    <div class="footer-items">
      <nuxt-link class="bottom-footer__link" to="/en/sitemap">About</nuxt-link>
      <nuxt-link class="bottom-footer__link" to="/en/sitemap">Setting</nuxt-link>
      <nuxt-link class="bottom-footer__link" to="/en/sitemap">Help</nuxt-link>
      <nuxt-link class="bottom-footer__link" to="/en/sitemap">API Dokumentation</nuxt-link>
      <nuxt-link class="bottom-footer__link" to="/en/sitemap">Hacker News</nuxt-link>
      <nuxt-link class="bottom-footer__link" to="/en/sitemap">Fork/Contribute</nuxt-link>
      <nuxt-link class="bottom-footer__link" to="/en/sitemap">Cool Apps</nuxt-link>
    </div>
  </footer>
</template>


<style>
.bottom-footer {
  /* position: absolute;
  bottom: 0; */
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 3rem;
  line-height: 3rem; /* Vertically center the text there */
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.bottom-items {
  text-decoration: none;
}

.bottom-footer__link {
  padding: 10px;
}

</style>