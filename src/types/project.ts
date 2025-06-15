export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  pictureUrl: string;
  webLink: string;
  repoLink: string;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
};
