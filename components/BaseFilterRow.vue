<template>
    <div class="filter-container">
        <div class="filter-group">
            <div>
                <label for="search-select">Search</label>
                <select id="search-select">
                    <option value="">Stories</option>
                    <option value="All">All</option>
                    <option value="comments">comments</option>
                </select>
            </div>
            <div>
                <label for="by-select">by</label>
                <select id="by-select">
                    <option value="">Popularity</option>
                    <option value="Date">Date</option>
                </select>
            </div>
            <div>
                <label for="for-select">for</label>
                <select id="for-select">
                    <option value="">All time</option>
                    <option value="Last 24">Last 24</option>
                    <option value="Past Week">Past Week</option>
                    <option value="Past Month">Past Month</option>
                    <option value="Past Year">Past Year</option>
                    <option value="Custom Range">Custum Range</option>
                </select>
            </div>
        </div>
        <div class="result-loaded-group">
            <p>19.118.531 results (0.008 seconds)</p>
            <span><font-awesome-icon :icon="['fas', 'share-alt']"/></span>
        </div>
    </div>
</template>

<style>
    .filter-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #F6F6EF;
        height:2.7rem;
        margin: 0 auto;
    }

    .filter-group {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin: 0 16px;
    }

    select {
        padding: 0 10px; 
        margin: 0 3px;
        height: 1.8rem;
    }

    .result-loaded-group {
        margin-left: auto;
        display: flex;
        flex-direction: row;
    }
</style>