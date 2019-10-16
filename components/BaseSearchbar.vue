<template>
    <div class="search-container">
        <span class="search-icon"><font-awesome-icon :icon="['fas', 'search']"/></span>
        <input class="search-input" type="search" placeholder="Search Stories by title, url or author" value="">
    </div>
</template>

<style scoped>
 .search-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
 }

 .search-input {
    border-radius: 0;
    border: none;
    height: 42px;
    width: calc(100% - 100px);
    box-shadow: none;
    padding: 16px 144px 16px 54px;
    font-weight: 300;
    color: rgba(0,0,0,.8)
 }
</style>