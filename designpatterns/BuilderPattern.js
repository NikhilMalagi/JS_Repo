class FrogBuilder {
    constructor(name, gender) {
      this.name = name
      this.gender = gender
    }
    setWeight(weight) {
      this.weight = weight
      return this
    }
    setHeight(height) {
      this.height = height
      return this
    }
    build() {
      if (!('weight' in this)) {
        throw new Error('Weight is missing')
      }
      if (!('height' in this)) {
        throw new Error('Height is missing')
      }
      return new Frog(this.name, this.weight, this.height, this.gender)
    }
  }
  
  /* Trying to solve the many params problem */
  const leon = new FrogBuilder('Leon', 'male')
    .setWeight(14)
    .setHeight(3.7)
    .build()