import projects from "@/data/project.json";

export function getProjects() {
  return projects;
}

export function getProject(wantedReference: string) {
  return projects.find(({ reference }) => reference === wantedReference);
}
