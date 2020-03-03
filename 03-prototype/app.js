// dengan prototype kita tidak harus membuat function methodPerson seperti di folder belajar sebelumnya, syaratya kita harus menggunakan constructor function

// cara penggunaan prototype adalah sbb :
// namaFunction.protoype.namaMethod = anonymousFunction(){}

// Constructor Function
// Prototypal inheritance

// function person(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   person.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `${this.nama}, makan sebanyak ${porsi} porsi, dan energinya bertambah ${porsi} menjadi ${this.energi}`;
//   };

//   person.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `${this.nama}, tidur selama ${jam} jam, energinya bertambah ${jam * 2} menjadi ${this.energi}`;
//   };

//   person.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `${this.nama} bermain selama ${jam} jam, energinya berkurang ${jam} dan tersisa ${this.energi}`;
//   };
// }

// let adhi = new person('adhi', 10);


// jika ingin membuat versi class
// versi class

class person {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `${this.nama}, makan sebanyak ${porsi} porsi, dan energinya bertambah ${porsi} menjadi ${this.energi}`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `${this.nama}, tidur selama ${jam} jam, energinya bertambah 2x lipat ${jam * 2} menjadi ${this.energi}`;
  }

  main(jam) {
    this.energi -= jam;
    return `${this.nama} bermain selama ${jam} jam, energinya berkurang ${jam} dan tersisa ${this.energi}`;
  }
}

let adhi = new person('adhi', 10);