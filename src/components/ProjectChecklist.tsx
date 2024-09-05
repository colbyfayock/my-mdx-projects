"use client";

import Checklist, { ChecklistProps } from "@/components/Checklist"

interface ProjectChecklistProps extends ChecklistProps {
  projectSlug: string;
  initialCheckable?: boolean;
}

const ProjectChecklist = ({ projectSlug, initialCheckable, ...props }: ProjectChecklistProps) => {
  return (
    <Checklist
      {...props}
      checkable={false}
    />
  )
}

export default ProjectChecklist;