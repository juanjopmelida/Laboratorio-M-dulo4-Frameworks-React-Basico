import React from "react";
import { useHistory } from "react-router-dom";
import {StyledButton, StyledTextField, StyledColumnBox, StyledRowBox, StyledLabel } from "./login.styles"

export const LoginPage: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "test") {
      history.push("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <StyledColumnBox>
      <h2>Hello, enter your identification</h2>
      <form onSubmit={handleNavigation}>
        <StyledRowBox>
          <StyledLabel>Username: </StyledLabel>
          <StyledTextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </StyledRowBox>
        <StyledRowBox>
          <StyledLabel>Password: </StyledLabel>
          <StyledTextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </StyledRowBox>
        <StyledButton type="submit">login</StyledButton>
      </form>
    </StyledColumnBox>
  );
};
