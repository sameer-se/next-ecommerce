import React from "react";

export default function Signin() {
  function handelSubmit(event) {
    event.preventDefaut();
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
