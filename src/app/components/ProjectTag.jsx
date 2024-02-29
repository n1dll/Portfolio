import React from "react";
import { Button } from "./ui/button";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <Button
      variant={isSelected ? "" : 'outline'}
      onClick={() => onClick(name)}
    >
      {name}
    </Button>
  );
};

export default ProjectTag;
