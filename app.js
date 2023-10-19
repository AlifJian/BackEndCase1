
// Class User
class User{

    // Membuat atribut-atribut class
    constructor(id,nama,alamat){
        this.id = id;
        this.nama = nama;
        this.alamat = alamat;
    }

    // Mendapatkan info profile User
    getInfo(cart){
        return (`Nama : ${this.nama}\nAlamat: ${this.alamat}\nTotal Barang: ${cart.items.length}\nTotal Harga: ${cart.totalHarga()}`);
    }

}


// Class Order
class Order{

    // Membuat atribut-atribut class
    constructor(id,user,tanggalPesan,total){
        this.id = id;
        this.user = user;
        this.item = tanggalPesan;
        this.total = total
    }
}

// Class Cart
class Cart{

    constructor(id,items,user){
        this.id = id;
        this.items = items;
        this.user = user;
    }

    totalHarga(){
        let harga = 0;
        this.items.map( (item) => {
            harga += item.total 
        });

        return harga;
    }

    hapusBarang(id){
        try{
            this.items.map((item,i) => {
                if (item.id == id) {
                    this.items.splice(i,1);
                    return "Success";
                }else{
                    return `Item dengan ID: ${id} tidak ada`;
                }
            })
        }catch(err){
            return (err)
        }
    }

    tambahBarang(item){
        try {
            if( item.length <= 0) {
                this.items.push(item[0])
            }else{
                for(let i = 0; i < item.length; i++){
                    this.items.push(item[i]);
                }
            }
        } catch (error) {
            return error;
        }
    }
}


// Simulasi Pemesanan

// Membuat user dengan nama Asep di simpan dalam variable asep
const asep = new User(0,"Asep", "Dimana Aja");

// membuat Keranjang
const keranjang = new Cart(0,[],asep);

// Asep membuat pesanan 2 barang
keranjang.tambahBarang([new Order(0,asep, new Date(), 2.5),new Order(1,asep,new Date, 3.8)])

// Mendapatan info User
console.log(asep.getInfo(keranjang));
// Mencoba menghapus barang dri keranjang
keranjang.hapusBarang(1);
console.log("\n");
// Tampilkan lagi info user
console.log(asep.getInfo(keranjang));
