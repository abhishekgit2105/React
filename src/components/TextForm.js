import React, { useState } from "react";

export default function TextForm() {

  const [text, setText] = useState("Enter email ID");
  // setText("AABBHHII");
  
  const upperCase = () => {
    console.log(text.toUpperCase);
    let newtxt = text.toUpperCase();
    setText(newtxt);
    // this is a onclick func. the the buttuon is getting clicked an on click function(upperCase) is being executed
  };
  
  const handleOnChange = (event) => {
    console.log("Heloo on change");
    setText(event.target.value);
  };
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={text}
            onChange={handleOnChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button type="submit" onClick={upperCase} className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="container my-3">
        <h1>
          this is the heading
        </h1>
        <p>
          Number of characters are {text.length} and Number of wrords are {text.split(" ").length}
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
