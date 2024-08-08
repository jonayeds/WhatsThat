import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
export const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  &:hover {
    background-color: rgba(239, 241, 226, 0.3);
  }
`;

export const InputBox = styled("input")`
  width: 100%;
  height: 80%;
  border: none;
  outline: none;
  padding: 0 3rem;
  border-radius: 1.5rem;
  background-color: #f8f9f1;
`;

export const SearchField = styled("input")`
  padding: 0.7rem  1rem;
  width: 20vmax;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  background-color: #efefefa3;
  font-size: 1.1rem;
`;
export const CurveButton = styled("button")`
  border-radius:1.5rem;
  padding:0.8rem 2rem;
  border:none;
  outline:none;
  cursor:pointer;
  background-color: #a4ab7d;
  color: white;
  font-size:1.1rem;
  transition-duration: 500ms;
  &:hover{
    background-color: #a4ab7dc7;
}
`;
