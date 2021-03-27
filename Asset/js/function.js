var coverImage = [];

const room = [
  {
    name: "Superior Room",
    desc: "Kamar dengan dua tempat tidur",
    image: "",
  },
  {
    name: "Double Room",
    desc: "Kamar dengan satu tempat tidur",
    image: "",
  },
  {
    name: "Delux Room",
    desc: "Kamar dengan satu tempat tidur dan besar",
    image: "",
  },
];

const service = [
  {
    icon: "fa fa-cutlery",
    name: "Food and Beverages",
    desc: ["Restoran", "24 Hours Room Service", "Free Breakfast"],
  },
  {
    icon: "fa fa-wifi",
    name: "Internet",
    desc: ["Free Wi-Fi"],
  },
  {
    icon: "fa fa-credit-card-alt",
    name: "Payment",
    desc: ["Cash", "Credit Card", "Debit Card"],
  },
  {
    icon: "fa fa-bell",
    name: "Service",
    desc: ["24 Hours Receptionist"],
  },
  {
    icon: "fa fa-bed",
    name: "Room",
    desc: ["Air Conditioner", "Hot water", "Premium TV Cable"],
  },
  {
    icon: "fa fa-car",
    name: "Parking Lot",
    desc: ["Free parking lot"],
  },
];

const review = [
  {
    image: "",
    name: "Put R",
    review:
      "Yang jelas bersih, harganya pun terjangkau,,,,, air minum yang gratis nya kalau bisa ganti yang 600 mili",
    star: "5",
    time: "sebulan yang lalu",
  },
  {
    image: "",
    name: "Jefril S",
    review: "Tempat bersih aman nyaman..",
    star: "5",
    time: "sebulan yang lalu",
  },
  {
    image: "",
    name: "nusantara a",
    review: "Pelayanannya baik, dan hotelnya bersih dan nyaman",
    star: "5",
    time: "3 bulan lalu",
  },
];

const gallery = [
  "https://lh3.googleusercontent.com/iuvQjMqqk1KzUxkh_iIwcv3NmkXCyP3jNY8Fkn2i5a5aneNeFMpqRzcBxNDaQVYDcfWFTGmV-5j7VrOj=w960-h960-n-o-v1",
  "https://lh3.googleusercontent.com/UCx1mL6p0y5lZvkE2VLu813M1xhVjZ5LMr4XQCtldfc0xkmIJdqQITTlr_RSLnPj0wJXUzMU3ABELKcT=w960-h960-n-o-v1",
  "https://lh3.googleusercontent.com/-E1FpbtHyyxo/WeCOyKckEQI/AAAAAAAAAFo/kC4kQin7Zfc9plL24WsDazaEWVaBYJwXwCLIBGAYYCw/w960-h960-n-o-k-v1/",
  "https://lh3.googleusercontent.com/-hQCsCaDt-vs/X4lAeOBMrdI/AAAAAAAAHLc/uDDleJGXbBY_CuESTwklUYROO8JJHWHpQCJUFGAYYCw/w960-h960-n-o-k-v1/",
  "https://lh3.googleusercontent.com/-BxyB4MRUrD0/WljlC7-P45I/AAAAAAAABCY/tBaIBTgzlwcWPZ0KRT41HwwE9112OrwGACLIBGAYYCw/w960-h960-n-o-k-v1/",
  "https://lh3.googleusercontent.com/-eoqtBymqIzc/W6JfJzi0ndI/AAAAAAAACfY/5XU7oN5TssAO66F5BtNGZZs104MQgD_MACLIBGAYYCw/w960-h960-n-o-k-v1/",
  "https://lh3.googleusercontent.com/-bbvQAr2721Y/XyEtUhMqpzI/AAAAAAAA2d0/jy1D_vHDkJMC-34Ur3gwK3znQ-Fibmv_wCLIBGAYYCw/w960-h960-n-o-k-v1/",
  "https://lh3.googleusercontent.com/-I9o0ntnZz8Y/XyDWkg7srqI/AAAAAAAA2cI/cqFk1Gsg1u8Gd4YeAcDRcR8dUrkBwopMgCLIBGAYYCw/w960-h960-n-o-k-v1/",
  "https://lh3.googleusercontent.com/-kL8vAOhV1Pg/VxCFc8TsuWI/AAAAAAAACko/pP4A7HRH5gAAPk6a4wKI1rqn28cIDBNLwCJkC/w960-h960-n-o-k-v1/",
];

const image = [
  "./Asset/img/room/DELUXE_DOUBLE/cover.jpg",
  "./Asset/img/room/DELUXE_DOUBLE/DSC06050.jpg",
  "./Asset/img/room/DELUXE_DOUBLE/DSC06053.jpg",
  "./Asset/img/room/DELUXE_DOUBLE/DSC06063.jpg",
  "./Asset/img/room/DELUXE_DOUBLE/DSC06095.jpg",
  "./Asset/img/room/DELUXE_DOUBLE/DSC06164.jpg",
  "./Asset/img/room/STANDARD_DOUBLE/cover.jpg",
  "./Asset/img/room/STANDARD_DOUBLE/DSC06100.jpg",
  "./Asset/img/room/STANDARD_DOUBLE/DSC06106.jpg",
  "./Asset/img/room/STANDARD_DOUBLE/DSC06112.jpg",
  "./Asset/img/room/STANDARD_DOUBLE/DSC06141.jpg",
  "./Asset/img/room/STANDARD_DOUBLE/DSC06157.jpg",
  "./Asset/img/room/STANDARD_TWIN_ROOM/cover.jpg",
  "./Asset/img/room/STANDARD_TWIN_ROOM/DSC06031.jpg",
  "./Asset/img/room/STANDARD_TWIN_ROOM/DSC06037.jpg",
  "./Asset/img/room/STANDARD_TWIN_ROOM/DSC06040.jpg",
  "./Asset/img/room/STANDARD_TWIN_ROOM/DSC06083.jpg",
  "./Asset/img/room/SUIT_DOUBLE/cover.jpg",
  "./Asset/img/room/SUIT_DOUBLE/DSC06352.jpg",
  "./Asset/img/room/SUIT_DOUBLE/DSC06356.jpg",
  "./Asset/img/room/SUIT_DOUBLE/DSC06359.jpg",
  "./Asset/img/room/SUIT_DOUBLE/DSC06373.jpg",
  "./Asset/img/BATHROOM/Diptych_1.jpg",
  "./Asset/img/BATHROOM/Diptych_3.jpg",
];

function addHTML(classname, id, content) {
  return '<div class="' + classname + '" id="' + id + '">' + content + "</div>";
}

function addImage(classname, image) {
  return (
    "<a href='https://www.instagram.com/k77hotel/' target='_blank'><img src=\"" +
    image +
    '" class="' +
    classname +
    '" /></a>'
  );
}

function addGallery(classname, id, image) {
  return '<img src="' + image + '" class="' + classname + '" id="' + id + '" onClick=\"popUp(this.id, this.src)\"/>';
}

function addIcon(classname) {
  return '<i class="' + classname + '"></i>';
}

function book() {
  alert("tes");
}

console.log(addGallery("", "", ""));