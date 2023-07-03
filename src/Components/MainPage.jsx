import "./style.css"
import React, { useState } from 'react';

export default function Random() {
  const [students, setStudents] = useState([
    'Torinke',
    'Tato',
    'Giorgi',
    'Mariami',
  ]);

  const [faculties, setFaculties] = useState([]);

  const facultyNames = [
    'Slytherin',
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw'
  ];

  const handleSorting = () => {
    const randomizedStudents = [...students];
    const randomizedFaculties = randomizedStudents.splice(0, randomizedStudents.length);
    for (let i = randomizedStudents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomizedStudents[i], randomizedStudents[j]] = [
        randomizedStudents[j],
        randomizedStudents[i]
      ];
    }
    setStudents([]);
    setFaculties(randomizedFaculties);
  };

  return (
    <div>
      <div className="Students">
        {students.map((student, index) => (
          <h2 key={index}>{student}</h2>
        ))}
      </div>
      <button onClick={handleSorting}>Sorting Hat</button>
      <div className="faculty">
        {faculties.map((faculty, index) => (
          <div key={index}>
            <h2>{facultyNames[index]}</h2>
            <p>{faculty}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
