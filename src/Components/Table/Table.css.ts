import styled from 'styled-components'

export const Styles = styled.div`
  padding: 1rem;
  font-family: "Roboto", sans-serif;
 
  table {
    border-spacing: 0;
    border-radius: 20px;
    border-spacing: 0;
    border: 2px solid black;
    flex: 1;
    margin: 0 auto;
    margin-top: 2%;
    width: 55%;
    position: relative ;
    
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
    button {
      background: transparent;
      border-radius: 40px;
      border: 2px solid black;
      color: black;
      margin: 0 1em;
      padding: 0.25em 1em;
      cursor: pointer;

    }
    button:hover {
      background: red;
      color: white;
      border: 2px solid red;

  }
`

