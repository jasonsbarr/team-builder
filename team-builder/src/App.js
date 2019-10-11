import React, { useState } from "react";
import TeamMemberForm from "./TeamMemberForm/TeamMemberForm";

const App = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const handleTeamMemberCreate = form => {
    // Guard against someone submitting
    // unauthorized form fields
    const fields = ["name", "email", "role"];

    // Fun with reducers!
    const member = fields.reduce((obj, field) => {
      obj[field] = form[field].value;
      return obj;
    }, {});

    setTeamMembers([...teamMembers, member]);
  };

  return (
    <>
      <TeamMemberForm onFormSubmit={handleTeamMemberCreate} />

      {teamMembers.length ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map(({ name, email, role }) => (
              <tr key={email}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No team members found...</div>
      )}
    </>
  );
};

export default App;
