class WeatherCep {
  constructor(cep) {
    this.cep = cep;
  }
  
  
  formatCep() {
   if (this.cep > 1 ) {
      return 'oi'
   } else {
      return 'tchau'
   }
  }

  getCep() {
    return this.cep;
  }
  
}

// 
export default WeatherCep;