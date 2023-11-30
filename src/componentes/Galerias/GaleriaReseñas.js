import React from "react";
import CardReseña from "../Cards/CardReseña";
function GaleriaReseñas(props) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-3 md:pr-[3em] md:pl-[3em] lg:pr-[7em] lg:pl-[7em]">
      <CardReseña />
      <CardReseña />
      <CardReseña />
      <CardReseña />
      <CardReseña />
      <CardReseña />
    </div>
  );
}

export default GaleriaReseñas;
