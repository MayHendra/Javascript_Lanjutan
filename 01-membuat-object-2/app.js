/** @format */

// 4. Object.create()

const methodPerson = {
  makan: function(porsi) {
    this.energi += porsi;
  },
  tidur: function(jam) {
    this.energi += jam * 2;
  },
  main: function(jam) {
    this.energi -= jam;
  }
};

function person(nama, energi) {
  let person = Object.create(methodPerson);
  person.nama = nama;
  person.energi = energi;

  return person;
}

let adhi = person('adhi', 10);
