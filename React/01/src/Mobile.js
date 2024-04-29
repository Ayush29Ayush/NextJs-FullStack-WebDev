import React from "react";
import MobileList from "./MobileList";
import books from "./books.json"; //! Here retreive the json file and then pass the objects as props

// //! Here create a dummy object aka dictionary
// const book1 = {
//   image:
//     "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=70",
//   title: "Motorola",
//   price: "25000",
// };

// const book2 = {
//   image:
//     "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
//   title: "iPhone 15",
//   price: "75000",
// };

// //! Here create an array with objects
// const array_books = [
//   {
//     image:
//       "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=70",
//     title: "Motorola",
//     price: "25000",
//   },
//   {
//     image:
//       "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
//     title: "iPhone 15",
//     price: "75000",
//   },
// ];

function Mobile() {
  return (
    <div>
      {/* !* Here it is a array with objects **/}
      {/* {array_books.map((book) => (
          <MobileList image={book.image} title={book.title} price={book.price} />
        ))} */}

      {/* Here it is a json file's data passed as props */}
      {books.map((book) => (
        <MobileList image={book.image} title={book.title} price={book.price} />
      ))}

      {/* <MobileList /> */}
      {/* <MobileList greet="Good Morning" /> */}
      {/* <MobileList image={book1.image} title={book1.title} price={book1.price} />
      <MobileList image={book2.image} title={book2.title} price={book2.price} /> */}
    </div>
  );
}

export default Mobile;
