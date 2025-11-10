/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById('myLinks')
  if (x.style.display === 'block') {
    x.style.display = 'none'
  } else {
    x.style.display = 'block'
  }
}

// body,
// .body {
//   margin-inline: 20px;
//   background-color: #cde3f8;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='40' viewBox='0 0 50 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%233484bc' fill-opacity='0.4'%3E%3Cpath d='M40 10L36.67 0h-2.11l3.33 10H20l-2.28 6.84L12.11 0H10l6.67 20H10l-2.28 6.84L2.11 10 5.44 0h-2.1L0 10l6.67 20-3.34 10h2.11l2.28-6.84L10 40h20l2.28-6.84L34.56 40h2.1l-3.33-10H40l2.28-6.84L47.89 40H50l-6.67-20L50 0h-2.1l-5.62 16.84L40 10zm1.23 10l-2.28-6.84L34 28h4.56l2.67-8zm-10.67 8l-2-6h-9.12l2 6h9.12zm-12.84-4.84L12.77 38h15.79l2.67-8H20l-2.28-6.84zM18.77 20H30l2.28 6.84L37.23 12H21.44l-2.67 8zm-7.33 2H16l-4.95 14.84L8.77 30l2.67-8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
// }

// header,
// .header {
//   background-color: #e1e7ef;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%2392a9f1' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
//   color: rgb(2, 14, 233);
//   /* padding: 15px; */
//   text-align: center;
//   /* text-align: center;flex-wrap: wrap; */
//   padding: 10px;
// }
// h1 {
//   font-size: 25px;
// }
// h2,
// .header h2 {
//   color: #a9a9a9;
//   text-align: center;
// }

// nav,
// .nav {
//   margin-top: 10px;
//   background-color: #e1e7ef;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%2392a9f1' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
//   padding: 10px;
//   text-align: center;
// }

// nav a {
//   color: rgb(6, 34, 245);
//   text-decoration: none; /* menghilangkan garis bawah teks/link */
//   border-radius: 22px; /* menghaluskan sudut*/
//   background: white;
//   border: 2px solid #e5e7eb;
//   flex-wrap: wrap;
// }

// nav ul {
//   display: flex;
//   gap: 25px;
//   flex-direction: column; /* menurun */
//   align-items: stretch; /* isi lebar penuh */
//   gap: 0.5rem;
//   padding: 12px;
//   margin: 0 !important;
//   list-style: none;
// }

// nav li a {
//   display: block;
//   padding: 0.75rem 1rem;
// }

// section,
// .section {
//   background-color: #e1e7ef;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%2392a9f1' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
//   padding: 15px;
//   border-radius: 10px;
//   border: 2px solid #e5e7eb;
// }

// .active {
//   background: blue;
//   color: white;
// }

// .h {
//   border-left: 4px solid #22c55e;
//   padding-left: 10px;
// }

// .imgfoto {
//   width: 190px; /* atau 250px sesuai kebutuhan */
//   height: 190px; /* samakan dengan width untuk bulat sempurna */
//   object-fit: cover; /* isi area tanpa distorsi */
//   border-radius: 100%;
// }

// .imglogo {
//   margin-top: 10px;
//   width: 90px;
//   height: 90px;
//   text-align: center;
// }

// footer,
// .footer {
//   background: #333;
//   color: #fff;
//   padding: 1px;
//   text-align: center;
//   border-radius: 8px;
// }

// .galery {
//   text-align: center;
// }

// .galery .card {
//   display: inline-block;
//   width: 200px;
//   border: 1px solid #ddd;
//   margin: 10px;
//   background: #fff;
//   border-radius: 8px;
//   overflow: hidden;
// }
// .galery .card img {
//   width: 100%;
//   height: 140px;
//   object-fit: cover;
// }
// .galery .card figcaption {
//   font-size: 14px;
//   color: white;
//   background-color: burlywood;
//   margin-top: -8px;
//   padding: 4px;
// }

// iframe,
// .iframe {
//   border-radius:5px;
//   /* max-width: 400px; */
// }

// table,
// .table {
//   background-color: blue;
//   color: white;
//   width: 30%;
//   text-align: center;
//   padding: 0px;
//   margin: 10px;
// }

// table {
//   width: 50%;
//   border-collapse: collapse;
// }

// tbody td {
//   background-color: #fdfefe;
//   color: #333;
//   padding: 8px 12px;
//   border: 1px solid #e0e0e0;
// }

// label,
// .label {
//   /* display: block; */
//   margin-top: 15px;
//   font-weight: bold;
// }

// input,
// select,
// textarea {
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   font-size: 14px;
// }

// /* Mobile-first: tulis style dasar di sini */

// /* Tablet */
// @media (min-width: 600px) and (max-width: 1023px) {
//   /* penyesuaian tablet */
//   body,
//   .body {
//     margin-inline: 20px;
//     background-color: #d8d8f6;
//     background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c8.284 0 15-6.716 15-15zM0 15c0 8.284 6.716 15 15 15 0-8.284-6.716-15-15-15zm30 0c0-8.284-6.716-15-15-15 0 8.284 6.716 15 15 15zm0 0c0 8.284-6.716 15-15 15 0-8.284 6.716-15 15-15z' fill='%239e9fe9' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
//   }

//   header,
//   .header {
//     background-color: #e1e7ef;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%2392a9f1' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
//     color: rgb(2, 14, 233);
//     padding: 15px;
//     /* text-align: center;flex-wrap: wrap; */
//   }
//   h2,
//   .header h2 {
//     color: #a9a9a9;
//     text-align: center;
//   }

//   nav,
//   .nav {
//     margin-top: 10px;
//     background: white;
//     padding: 10px;
//     background-color: #e1e7ef;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%2392a9f1' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
//   }

//   nav a {
//     color: rgb(6, 34, 245);
//     text-decoration: none; /* menghilangkan garis bawah teks/link */
//     border-radius: 22px; /* menghaluskan sudut*/
//     background: white;
//     padding: 6px 14px; /* 6px jarak atas & bawah */
//     margin-right: 8px; /* jarak luar samping antar elemen */
//     border: 2px solid #e5e7eb;
//   }

//   nav ul {
//     list-style: none;
//     display: flex;
//     justify-content: center;
//     flex-direction: row;
//     gap: 15px;
//     flex-wrap: wrap;
//   }

//   section,
//   .section {
//     background-color: #e1e7ef;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%2392a9f1' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
//     padding: 15px;
//     border-radius: 10px;
//     border: 2px solid #e5e7eb;
//   }

//   .active {
//     background: blue;
//     color: white;
//   }

//   .h {
//     border-left: 4px solid #22c55e;
//     padding-left: 10px;
//   }

//   .imgfoto {
//     width: 190px; /* atau 250px sesuai kebutuhan */
//     height: 190px; /* samakan dengan width untuk bulat sempurna */
//     object-fit: cover; /* isi area tanpa distorsi */
//     border-radius: 100%;
//   }

//   .imglogo {
//     width: 90px;
//     height: 90px;
//     text-align: center;
//   }

//   footer,
//   .footer {
//     background: #333;
//     color: #fff;
//     padding: 1px;
//     text-align: center;
//     border-radius: 8px;
//   }

//   .galery {
//     text-align: center;
//   }

//   .galery .card {
//     display: inline-block;
//     width: 200px;
//     border: 1px solid #ddd;
//     margin: 10px;
//     background: #fff;
//     border-radius: 8px;
//     overflow: hidden;
//   }
//   .galery .card img {
//     width: 100%;
//     height: 140px;
//     object-fit: cover;
//   }
//   .galery .card figcaption {
//     font-size: 14px;
//     color: white;
//     background-color: burlywood;
//     margin-top: -8px;
//     padding: 4px;
//   }

//   iframe,
//   .iframe {
//     border-radius: 8px;
//   }

//   table,
//   .table {
//     background-color: blue;
//     color: white;
//     width: 30%;
//     text-align: center;
//     padding: 0px;
//     margin: 10px;
//   }

//   table {
//     width: 50%;
//     border-collapse: collapse;
//   }

//   tbody td {
//     background-color: #fdfefe;
//     color: #333;
//     padding: 8px 12px;
//     border: 1px solid #e0e0e0;
//   }

//   label,
//   .label {
//     display: block;
//     margin-top: 15px;
//     font-weight: bold;
//   }

//   input,
//   select,
//   textarea {
//     width: 100%;
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 8px;
//     font-size: 14px;
//   }
// }

// /* Desktop */
// @media (min-width: 1024px) {
//   /* penyesuaian desktop */
//   body,
//   .body {
//     margin-inline: 20px;
//     background-color: #d8d8f6;
//     background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c8.284 0 15-6.716 15-15zM0 15c0 8.284 6.716 15 15 15 0-8.284-6.716-15-15-15zm30 0c0-8.284-6.716-15-15-15 0 8.284 6.716 15 15 15zm0 0c0 8.284-6.716 15-15 15 0-8.284 6.716-15 15-15z' fill='%239e9fe9' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
//   }

//   header,
//   .header {
//     background-color: #e1e7ef;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%2392a9f1' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
//     color: rgb(2, 14, 233);
//     padding: 15px;
//     /* text-align: center;flex-wrap: wrap; */
//   }
//   h2,
//   .header h2 {
//     color: #a9a9a9;
//     text-align: center;
//   }

//   nav,
//   .nav {
//     margin-top: 10px;
//     background: white;
//     padding: 10px;
//     background-color: #e1e7ef;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%2392a9f1' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
//   }

//   nav a {
//     color: rgb(6, 34, 245);
//     text-decoration: none; /* menghilangkan garis bawah teks/link */
//     border-radius: 22px; /* menghaluskan sudut*/
//     background: white;
//     padding: 6px 14px; /* 6px jarak atas & bawah */
//     margin-right: 8px; /* jarak luar samping antar elemen */
//     border: 2px solid #e5e7eb;
//   }

//   nav ul {
//     list-style: none;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     gap: 15px;
//     flex-wrap: wrap;
//   }

//   section,
//   .section {
//     background-color: #e1e7ef;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%2392a9f1' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E");
//     padding: 15px;
//     border-radius: 10px;
//     border: 2px solid #e5e7eb;
//   }

//   .active {
//     background: blue;
//     color: white;
//   }

//   .h {
//     border-left: 4px solid #22c55e;
//     padding-left: 10px;
//   }

//   .imgfoto {
//     width: 190px; /* atau 250px sesuai kebutuhan */
//     height: 190px; /* samakan dengan width untuk bulat sempurna */
//     object-fit: cover; /* isi area tanpa distorsi */
//     border-radius: 100%;
//   }

//   .imglogo {
//     width: 90px;
//     height: 90px;
//     text-align: center;
//   }

//   footer,
//   .footer {
//     background: #333;
//     color: #fff;
//     padding: 1px;
//     text-align: center;
//     border-radius: 8px;
//   }

//   .galery {
//     text-align: center;
//   }

//   .galery .card {
//     display: inline-block;
//     width: 200px;
//     border: 1px solid #ddd;
//     margin: 10px;
//     background: #fff;
//     border-radius: 8px;
//     overflow: hidden;
//   }
//   .galery .card img {
//     width: 100%;
//     height: 140px;
//     object-fit: cover;
//   }
//   .galery .card figcaption {
//     font-size: 14px;
//     color: white;
//     background-color: burlywood;
//     margin-top: -8px;
//     padding: 4px;
//   }

//   iframe,
//   .iframe {
//     border-radius: 8px;
//   }

//   table,
//   .table {
//     background-color: blue;
//     color: white;
//     width: 30%;
//     text-align: center;
//     padding: 0px;
//     margin: 10px;
//   }

//   table {
//     width: 50%;
//     border-collapse: collapse;
//   }

//   tbody td {
//     background-color: #fdfefe;
//     color: #333;
//     padding: 8px 12px;
//     border: 1px solid #e0e0e0;
//   }

//   label,
//   .label {
//     display: block;
//     margin-top: 15px;
//     font-weight: bold;
//   }

//   input,
//   select,
//   textarea {
//     width: 100%;
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 8px;
//     font-size: 14px;
//   }
// }
