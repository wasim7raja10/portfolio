export default interface Project {
  name: string;
  startDate: Date;
  endDate: Date;
  description: string[];
  skills: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}
