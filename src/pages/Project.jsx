import React from "react";
import { useParams } from "react-router-dom";
import { ProjectContent } from "./ProjectContent";

export function Project() {
  const { id } = useParams();

  return (
    <>
      <ProjectContent id={id} />
    </>
  );
}
