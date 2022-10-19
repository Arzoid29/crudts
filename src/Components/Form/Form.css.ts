import styled from "styled-components";

export const Style = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2%;
  width: fit-content;
  position: relative;
  border-radius: 20px;
  border-spacing: 0;
  border: 2px solid black;
  padding: 1rem;

  font-family: "Roboto", sans-serif;
  input {
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 40px;
  }
  button {
    background: white;
    color: Black;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 40px;
    cursor: pointer;
  }
  button:hover {
    background: green;
    color: white;
    border: 2px solid green;
  }
  input:focus {
    outline: none;
    border: 2px solid blue;
    border-radius: 40px;
  }
  input:valid {
    border: 2px solid green;
    border-radius: 40px;
  }
  input:invalid {
    border: 2px solid red;
    border-radius: 40px;
  }
  

`;
