import React, { useState } from 'react';

function SkillsList() {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
  const [newSkill, setNewSkill] = useState('');

  function removeSkill(skillToRemove) {
    const updatedSkills = skills.filter(function (skill) {
      return skill !== skillToRemove;
    });
    setSkills(updatedSkills);
  }

  function addSkill() {
    if (newSkill.trim() === '') {
      return;
    }
    setSkills([...skills, newSkill]);
    setNewSkill('');
  }

  return (
    <div>
      <h2>My Skills</h2>
      <input
        type="text"
        value={newSkill}
        onChange={function (event) {
          setNewSkill(event.target.value);
        }}
        placeholder="Add a new skill"
      />
      <button onClick={addSkill}>Add</button>

      {skills.length === 0 && <p>No skills yet — add one below!</p>}

      <ul>
        {skills.map(function (skill) {
          return (
            <li key={skill}>
              {skill}
              <button
                onClick={function () {
                  removeSkill(skill);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SkillsList;
