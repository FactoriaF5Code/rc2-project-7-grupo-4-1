import React from "react";
import { Button } from "primereact/button";

export default function ButtonModal({ onClick }) {
  return (
    <Button
      className="button__modal"
      label="Añadir"
      icon="pi pi-plus-circle"
      onClick={onClick}
    />
  );
}
