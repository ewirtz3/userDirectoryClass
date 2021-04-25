export default class Employee {
  constructor(data) {
    this.results = data;
  }

  getResults() {
    console.log("Employee method:", this.results);
  }
}
