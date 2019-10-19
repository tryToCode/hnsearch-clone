<template>
    <nav class="navbar">
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

 .nav {
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     background-color: #FF742B;
     height: 3rem;
     line-height: 3rem;
 }

 ul {
   list-style: none;
 }

 ul li {
   padding: 16px;
 }
</style>