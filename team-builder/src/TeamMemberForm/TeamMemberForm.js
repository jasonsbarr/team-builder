import React, { useState } from "react";

const TeamMemberForm = ({ onFormSubmit }) => {
  const initialState = {
    name: "",
    email: "",
    role: "",
  };

  const [formState, setFormState] = useState(initialState);

  const setInitialPageState = form => {
    setFormState(initialState);
    form.name.focus();
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onFormSubmit(event.target);
    setInitialPageState(event.target);
  };

  // Navid - check out this neat thing you can do
  // with nested destructuring and event.target
  const handleFieldChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  return (
    <form name="team-member-form" onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name</label>
      <input
        autoFocus
        type="text"
        name="name"
        placeholder="Name"
        value={formState.name}
        onChange={handleFieldChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formState.email}
        onChange={handleFieldChange}
      />

      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formState.role}
        onChange={handleFieldChange}
      />
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default TeamMemberForm;
