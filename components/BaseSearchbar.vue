<template>
    <!--div class="searchContainer">
        <i class="searchIcon"><font-awesome-icon :icon="['fas', 'search']"/></i>
        <input class="searchBox" 
                type="search" 
                name="search" 
                placeholder="Search Stories by title, url or author">
    </div-->

    <div>
        <button class="button">Button</button>
    </div>
</template>

<style scoped>
 .searchContainer {
  display: inline-flex;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
}

.searchIcon {
  padding: 0.5rem;
}

.searchBox {
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