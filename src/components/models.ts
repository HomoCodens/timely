export interface Project {
  name: string;
  uiColor: string;
  id: string;
}

export interface Timeblock {
  projectId: string;
  start: Date;
  end: Date;
}
