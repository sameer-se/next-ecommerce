import React from "react";

export default function Login() {
  function handelSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  return (
    <form action="" onSubmit={handelSubmit}>
      <label htmlFor="email">Email </label>
      <input type="email" />

      <label htmlFor="password">password </label>
      <input type="password" />

      <button type="submit">submit</button>
    </form>
  );
}
