export interface Project {
    id : number;
    title: string;
    description: string;
    technologies : string[];
    imageUrl?: string;
    githubLink: string;
    demoLink: string;
    timeSpent: string
}