import React from "react";

//! valida si un campo esta vacio
export const requireField = (value) => {
  return value.trim() !== "";
};
