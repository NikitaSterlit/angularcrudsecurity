export class Post {
  id: number;
  title: string;
  description: string;
  content: string;
 constructor(id: number, title: string, description: string, content: string) {
   this.id = id;
   this.title = title;
   this.description = description;
   this.content = content;
}
}
