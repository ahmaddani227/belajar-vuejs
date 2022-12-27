const dt = {
    name: 'Vue JS',
    message: 'Anda memuat halaman ini pada ' + new Date().toLocaleString(),
    terlihat: true,
    qty: 3,
    namaDepan: 'Ahmad ',
    namaBelakang: 'Dani',
    bilangan: 1,
    bilangan2: 1,
    link: '<a href="">Link Belajar Vue Js</a>',
    gambar: 'assets/img/Logo-Javascript.png',
    gambar2: 'assets/img/logo-vuejs.png',
    gambar3: 'assets/img/Logo-Javascript.png',
    menu: 'home',
    pesanTerbalik: 'Halo Vue JS!',
    vModel: 'v-model membuat pengikatan dua arah antara input formulir dan status aplikasi menjadi mudah',
    twoWayDB: 'Konsep 2 Arah',
    kelas: ['HTML5', 'CSS3', 'JavaScript'],
    numbers: [1, 2, 3, 4, 5],
    kelasKosong: [],
    menuLink: 'home',
    kelasBaru: ''
}

// METHOD
const meth = {
    getName: function(){
        return 'Hi, ' + this.name
    },
    ubahNama: function(namaBaru){
        this.name = namaBaru;
        return this.getName();
    },
    hendleClick: function() {
        this.bilangan2++
        this.gambar3 = this.bilangan2%2 == 0 ? this.gambar2 : this.gambar
    },
    infoMenu: function(namaMenu){
        this.menu = namaMenu;
    },
    reverseMessage: function() {
        this.pesanTerbalik = this.pesanTerbalik.split('').reverse().join('')
    },
    // cariBilGenap: () => {
        // Arrow function, Teknik JavaScript Modern
        // },
    cariBilGenap: function(num) {
        return num.filter(angka => {
            return angka % 2 == 0 
        })
    },
    infoLinkMenu: function(namaLinkMenu, event){
        event.preventDefault();
        console.log(event);
        this.menuLink = namaLinkMenu;
    },
    eventModfr: function(namaLinkMenu){
        this.menuLink = namaLinkMenu;
    },
    submit: function(event){
        console.log(event)
        let text = event.target.value 
        this.kelas.push(text)   //.push() menambahkan diakhir
        // this.kelas.unshift(text)  //menambahkan di awal
        event.target.value = ''
    },
    submit2: function(){
        this.kelas.push(this.kelasBaru)
        this.kelasBaru = ''
    }
}

const comp = {
    totalBayar: function() {
        return this.qty * 10000;
    },
    namaLengkap: function() {
        return this.namaDepan + this.namaBelakang;
    },
    infoBilangan: function(){
        return this.bilangan%2 == 0 ? 'Genap' : 'Ganjil';
    },
    infoBilangan2: function(){
        return this.bilangan2%2 == 0 ? 'Genap' : 'Ganjil';
    }
}
  
const app = new Vue({
    el: "#app",
    data: dt,
    methods: meth,
    computed: comp
});