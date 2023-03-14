import React, { useState } from "react";
import './loginPage.css'



export default function LoginPage() {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { name: name, adress: adress };
    setAllEntry([...allEntry, newEntry]);

    //the above line is used to store the future entries together with old entries

    console.log(allEntry);
  };


  const goToTravel = () =>{
    console.log("gototravel")


  };


  return (
    <>
    <div className="container bigBoss">

    <div className="my-5 box">
        <h1 className="heading">Enter Your Details</h1>
        <hr />
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="name" className="question">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="adress"className="question">Adress</label>
          <input
            type="text"
            name="adress"
            id="adress"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <button type="submit" className="go" onClick={goToTravel}>Submit</button>
      </form>
    </div>
    </div>
      {/* <div>
        {
            allEntry.map((currEle)=>{
                return(
                    <div >
                        <p>{currEle.name}</p>
                        <p>{currEle.adress}</p>

                    </div>
                )
            })
        }
      </div> */}
    </>
  );
}
