import React from "react";
import "./MobileList.css";

//! Here it was a static component where all the fields were hardcoded.
// function MobileList() {
//   return (
//     <div className="main">
//       <img
//         className="image"
//         src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=70"
//         alt="Mobile"
//       />
//       <div>
//         <h2>Motorola</h2>
//         <p>Rs. 25000</p>
//         <button>Add to Cart</button>
//       </div>
//     </div>
//   );
// }

//! Here it is a dynamic component where all the fields were dynamic.
// function MobileList(props) {
//   const image =
//     "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=70";
//   const title = "Motorola";
//   const price = "25000";

//   return (
//     <div className="main">
//         {console.log(props)}
//         {console.log(props.greet)}
//       <img className="image" src={image} alt="Mobile" />
//       <div>
//         <h2>{title}</h2>
//         <p>Rs. {price}</p>
//         <button>Add to Cart</button>
//       </div>
//     </div>
//   );
// }

//! Dynamic component with props v1
// function MobileList(props) {
//     return (
//       <div className="main">
//         <img className="image" src={props.image} alt="Mobile" />
//         <div>
//           <h2>{props.title}</h2>
//           <p>Rs. {props.price}</p>
//           <button>Add to Cart</button>
//         </div>
//       </div>
//     );
//   }

//! Dynamic component with props v2 => destructuring props
function MobileList(props) {
    const {image, title, price} = props;
    return (
      <div className="main">
        <img className="image" src={image} alt="Mobile" />
        <div>
          <h2>{title}</h2>
          <p>Rs. {price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  }

export default MobileList;
