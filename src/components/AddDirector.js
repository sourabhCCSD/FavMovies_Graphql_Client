import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";

const AddDirector = () => {

    const GET_DIRECTORS = gql`
    query{
        directors {
            name
            id
        }
    }
    `; 

  const [directorName, setDirectorName] = useState("");
  const [directorAge, setDirectorAge] = useState("");
  const [directorDirectorImage, setDirectorDirectorImage] = useState("");
  const [directorNationality, setDirectorNationality] = useState("");



  const directorAgeData = [
    "26","27","28","29","30", "31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72"
  ];

  console.log(
    directorName,
   directorAge,
    directorDirectorImage,
    directorNationality
  );

  const ADD_DIRECTOR = gql`
    mutation AddDirector(
      $name: String!
      $age: String!
      $directorImage: String!
      $nationality: String!
    ) {
      addDirector(
        name: $name
        age: $age
        directorImage: $directorImage
        nationality: $nationality
      ) {
        name
        age
        directorImage
        nationality
      }
    }
  `;

  const [addDirector, { error, loading, data }] = useMutation(ADD_DIRECTOR, {
    variables: {
      name: directorName,
      age: directorAge,
      nationality: directorNationality,
      directorImage: directorDirectorImage,
    },
   
     refetchQueries: [{query: GET_DIRECTORS}] 
  });

  return (
    <div style={{border: "1px solid", width: '30vw'}}>
        <div style={{width: '30vw', height: '30px', backgroundColor: 'black', display: 'flex', justifyContent: "center", alignItems: 'center'}}>
<span style={{color: "white"}}>Add Director</span>
        </div>
      <div style={{ width: "60vw", padding: "20px" }}>
        <div style={{ marginTop: "10px" }}>
          <span>Director Name : </span>
          <input
            value={directorName}
            onChange={(e) => setDirectorName(e.target.value)}
            style={{ width: "200px", height: "25px", borderRadius: "4px" }}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <span>Nationality : </span>
          <input
            value={directorNationality}
            onChange={(e) => setDirectorNationality(e.target.value)}
            style={{ width: "200px", height: "25px", borderRadius: "4px" }}
          />
        </div>

        {
          <div style={{ marginTop: "10px" }}>
            <span>Director Photo URL : </span>
            <input
              value={directorDirectorImage}
              onChange={(e) => setDirectorDirectorImage(e.target.value)}
              style={{ width: "200px", height: "25px", borderRadius: "4px" }}
            />
          </div>
        }

        <div style={{ marginTop: "10px" }}>
          <span>Age : </span>
          <select
            value={directorAge}
            style={{ width: "100px", height: "25px", borderRadius: "4px" }}
            onChange={(e) => setDirectorAge(e.target.value)}
          >
            {directorAgeData.map((age) => (
              <option value={age}>{age}</option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: "10px" }}>
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={() => addDirector()}
              style={{ height: "40px", width: "150px" }}
            >
              Add New Director
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDirector;
