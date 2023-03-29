import React, { Fragment, useState,useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Create.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AuthContext, FirebaseContext } from "../../Store/Context";

const Create = () => {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const {user} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);

  const history = useHistory();
  const date = new Date();

  const handleSubmit = ()=>{
    firebase.storage().ref(`/images/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url:url,
          userId: user.uid,
          date: date.toDateString(),
        })
        history.push('/');
      })
    })
  }

  return (
    <Fragment>
      <Header />
      {/* <card> */}
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
              className="input" 
              type="number" 
              id="fname"
              value={price}
              onChange={(e)=>setPrice(e.target.value)} 
              name="Price" />
            <br />
          
          <br />
          <img alt="img" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>

            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      {/* </card> */}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Create;
