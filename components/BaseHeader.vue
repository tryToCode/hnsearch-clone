<template>
    <!--nav class="navbar">
      <ul class="nav">
        <li>
          <font-awesome-icon :icon="['fab', 'houzz']"/>
        </li>
        <li>
          Searchbar Hacker News
        </li>
        <li>
          <BaseSearchbar/>
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'cog']"/>
          Settings
        </li>
      </ul>
    </nav-->

<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item">
        <span class="icon">
          <font-awesome-icon :icon="['fab', 'houzz']"/>
        </span> 
        <span class="is-hidden-desktop-only">
          Search Hacker News
        </span>
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="nav-center-search">
      <BaseSearchbar />  
    </div>
    
    <div class="navbar-end">
      <a class="navbar-item">
        <span class="icon">
          <font-awesome-icon :icon="['fas', 'cog']"/>
        </span>
        <span class="is-hidden-desktop-only">
          Settings
        </span>
      </a>
    </div>
  </div>
</nav>
</template>

<script>
import BaseSearchbar from './BaseSearchbar'
export default {
  components: {
    BaseSearchbar
  }
}
</script>

<style>

 .nav-center-search {
   display: flex;
   flex-grow: 1; 
   justify-content: center;
   align-items: center;
 }
</style>