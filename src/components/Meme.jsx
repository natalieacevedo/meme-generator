import React, { useState, useEffect } from "react";
import memesData from "../memesData.js";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: memesData.data.memes[0].url,
  });

  const [memeImage, setMemeImage] = useState(memesData);

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = memeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme((prev) => {
      return { ...prev, randomImage: memesArray[randomNumber].url };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    return setMeme((prev) => {
      return { ...prev, [name]: value };
    });
  }

  console.log(meme);

  return (
    <main>
      <form>
        <input
          className="first-box"
          type="text"
          placeholder="nada"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="nadita"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottonText}
        />

        <button onClick={getMemeImage} className="submit">
          Get a new Image{" "}
        </button>
      </form>
      <div className="meme-outcome">
        <img
          className="mainImage"
          src={meme.randomImage}
          alt="different memes images"
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;

//   function toggleFavorite() {

//     setContact(prev => {
//         return {...prev, isFavorite : !prev.isFavorite}
//     })
// }

//APP:
// import React from "react"
// import boxes from "./boxes"
// import Box from "./Box"

// export default function App() {
//     const [squares, setSquares] = React.useState(boxes)

//     function toggle(id) {
//     setSquares(prev => {
//         return prev.map(el => {
//             return  el.id === id ? {...el, on : !el.on} : el;
//         })
//     })
// }

//     const squareElements = squares.map(square => (
//         <Box
//             key={square.id}
//             id={square.id}
//             on={square.on}
//             toggle={() => toggle(square.id)}
//         />
//     ))

//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }

//BOX:

// import React from "react"

// export default function Box(props) {
//     const styles = {
//         backgroundColor: props.on ? "#222222" : "transparent"
//     }

//     return (
//         <div
//             style={styles}
//             className="box"
//             onClick={props.toggle}
//         >
//         </div>
//     )
// }

// eslint-disable-next-line no-lone-blocks

//conditional
// eslint-disable-next-line no-lone-blocks
{
  /* <div>
            {
               messages.length === 0 ? <h1>You are all caught up</h1> : 
               <h1>You have {messages.length} unread {messages .length === 1 ? "message" : "messages"}</h1>
           }
        </div> */
}

//proud of my answer of challenge 41 form inputs practice

// const [personalInfo, setPersonalInfo] = React.useState({
//     firstName:"",
//     lastName:""
// })

// function handleChange(event){
//     setPersonalInfo(prev => {
//         return event.target.placeholder === "First Name" ? {...prev, firstName: event.target.value} : {...prev, lastName: event.target.value}
//     })
// };

// const [allInfo, setAllinfo]= React.useState({
//     firstName:"",
//     lastName:""
// });

// function keepingNames(event){
//     const nombre = event.target.value;
//     setAllinfo(prev => {
//         let newOne = {...prev};
//         newOne[event.target.name] = nombre;
//         return newOne;
//     })

// }

//solution profe worked when put dynamic name inside brackets

// function handleChange(event) {
//     setFormData(prevFormData => {
//         return {
//             ...prevFormData,
//             [event.target.name]: event.target.value
//         }
//     })
// }

//exercise form scrimba here:
// function App() {
//   const [allFormData, setAllFormData] = React.useState({
//     email: "",
//     password: "",
//     confirmation: "",
//     isOk: false,
//   });

//   console.log(allFormData);

//   function handleChange(event) {
//     const { name, value, checked, type } = event.target;
//     setAllFormData((prev) => {
//       return { ...prev, [name]: type === "checkbox" ? checked : value };
//     });
//   }

//   /**
//    * Challenge: Connect the form to local state
//    *
//    * 1. Create a state object to store the 4 values we need to save.
//    * 2. Create a single handleChange function that can
//    *    manage the state of all the inputs and set it up
//    *    correctly
//    * 3. When the user clicks "Sign up", check if the
//    *    password & confirmation match each other. If
//    *    so, log "Successfully signed up" to the console.
//    *    If not, log "passwords to not match" to the console.
//    * 4. Also when submitting the form, if the person checked
//    *    the "newsletter" checkbox, log "Thanks for signing
//    *    up for our newsletter!" to the console.
//    */

//   function handleSubmit(event) {
//     event.preventDefault();
//     if (allFormData.password === allFormData.confirmation) {
//       console.log("succesfully signed up");
//     } else {
//       console.log("passwords do not match");
//       return;
//     }
//     if (allFormData.isOk) {
//       alert("thanks for signing to our newsletter");
//     }
//   }

//   return (
//     <div className="form-container">
//       <form className="form" onSubmit={handleSubmit}>
//         <input
//           name="email"
//           type="email"
//           placeholder="Email address"
//           className="form--input"
//           onChange={handleChange}
//           value={allFormData.email}
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           className="form--input"
//           onChange={handleChange}
//           value={allFormData.password}
//         />
//         <input
//           name="confirmation"
//           type="password"
//           placeholder="Confirm password"
//           className="form--input"
//           onChange={handleChange}
//           value={allFormData.confirmation}
//         />

//         <div className="form--marketing">
//           <input
//             name="isOk"
//             id="okayToEmail"
//             type="checkbox"
//             checked={allFormData.isOk}
//             onChange={handleChange}
//           />
//           <label htmlFor="okayToEmail">I want to join the newsletter</label>
//         </div>
//         <button className="form--submit">Sign up</button>
//       </form>
//     </div>
//   );
// }
