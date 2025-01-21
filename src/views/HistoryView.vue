<template>
  <div>
    <h1>History of Fashion</h1>
    <p>Explore different designers</p>

    <ul class="brand-list">
      <li v-for="brand in filteredBrands" 
      :key="brand.id"
      class="brand-item"
      >
        {{ brand.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HistoryView', 
  data() {
    return {
      brands: [
        { id: 0, name: 'All'},
        { id: 1, name: 'Alexander Mcqueen' },
        { id: 2, name: 'Balenciaga' },
        { id: 3, name: 'Comme des Garcons' },
        { id: 4, name: 'Dsquared' }
      ],
      filter: ''
    };
  },
  computed: {
    filteredBrands() {
      return this.brands.filter((brand) =>
        brand.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: black;
  font-size: 35px;
  font-family: 'Gill Sans';
}

p { 
  text-align: center;
  color: black;
  margin-top: 45px;
  font-size: 25px;
  font-family: 'Gill Sans';
  font-weight: normal;
}

.brand-list {
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  display: flex;
  list-style: none;
  font-family: Arial;
  font-weight: bold;
  color: black; 
  padding: 5px 10px; 
}

.brand-item {
  text-decoration: none; 
  font-family: Arial;
  color: black; 
  padding: 5px 10px; 
  border: 1px solid black; 
  border-radius: 25px;
  background-color: blanchedalmond; 
}
</style>
