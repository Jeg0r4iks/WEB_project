<template>
  <div>
    <h1>History of Fashion</h1>
    <p>Explore different designers</p>
    <input 
      v-model="filter"
      type="text"
      placeholder="Search"
    />

    <div class="brand-list">
      <button v-for="brand in filteredBrands" 
      :key="brand.id"
      class="brand-item"
      @click="selectBrand(brand)"
    >
      {{ brand.name }}
      </button>
    </div>
    <div v-if="selectedBrand" class="brand-details">
      <h2>{{ selectedBrand.name }}</h2>
      <p>{{ selectedBrand.description }}</p>	
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryView', 
  data() {
    return {
      brands: [
        { id: 0, name: 'All', description: 'All brands'},
        { id: 1, name: 'Alexander McQueen', description: 'British fashion designer known for his unconventional designs.'},
        { id: 2, name: 'Balenciaga', description: 'Spanish luxury fashion house founded by Cristóbal Balenciaga.' },
        { id: 3, name: 'Comme des Garçons', description: 'Japanese fashion label founded by Rei Kawakubo.' },
        { id: 4, name: 'Dsquared2', description: 'Canadian fashion label founded by twin brothers Dean and Dan Caten.'}, 
      ],
      filter: '',
      selectedBrand: null
    };
  },
  computed: {
    filteredBrands() {
      return this.brands.filter((brand) =>
        brand.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  }, 
  methods: {
    selectBrand(brand) {
      this.selectedBrand = brand;
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
  background-color: whitesmoke;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  text-align: center;
  color: black;
  margin-top: 45px;
  font-size: 25px;
  font-family: 'Gill Sans';
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 20px;
}

.brand-list {
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  display: flex;
  list-style: none;
  font-weight: bold;
  color: black; 
  padding: 5px 10px; 
}

.brand-item {
  text-decoration: none; 
  color: black; 
  padding: 5px 10px; 
  border: 1px solid black; 
  border-radius: 25px;
  background-color: whitesmoke;
}

input {
  margin: 50px auto;
  display: block; 
  padding: 5px;
  font-family: 'Gill Sans';
  font-size: 20px;
  background-color: whitesmoke;
}

h2 {
  text-align: center;
  color: black;
  font-size: 35px;
  font-family: 'Gill Sans';
}
</style>
