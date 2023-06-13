const tampilkanDeretA = (jumlahAngka) => {
    for (let i = 0; i < jumlahAngka; i++) {
      console.log(i * i);
    }
  }

const tampilkanDeretB = (jumlahAngka) => {
    let angka = 1;
    let selisih = 1;
    
    for (let i = 0; i < jumlahAngka; i++) {
        console.log(angka)
        angka += selisih;
        selisih += 2;
      
    }
  }

const tampilkanDeretC = (jumlahAngka) => {
    let angka1 = 0;
    let angka2 = 1;
    
    for (let i = 0; i < jumlahAngka; i++) {
      console.log(angka1);
      let temp = angka1 + angka2;
      angka1 = angka2;
      angka2 = temp;
    }
  }


  