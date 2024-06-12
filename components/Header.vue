<script setup lang="ts">
const {locale, setLocale} = useI18n();
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="/">Nuxt STORE</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">
              {{ $t('home') }}
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/products">
              {{ $t('products') }}
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/categories">
              {{ $t('categories') }}
            </NuxtLink>
          </li>
        </ul>

          <button class="btn btn-primary me-2" @click="setLocale('en')">English</button>
          <button class="btn btn-secondary" @click="setLocale('sl')">Slovenščina</button>
      </div>
    </div>
  </nav>
</template>
