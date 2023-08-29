export default interface Project {
  name: string;
  startDate: Date;
  endDate: Date;
  description: string[];
  skills: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}
