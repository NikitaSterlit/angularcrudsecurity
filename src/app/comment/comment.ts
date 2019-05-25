export class Comment {
  id: number;
  text: string;
  postid: number;
  constructor(id: number, text: string, postid: number) {
    this.id = id;
    this.text = text;
    this.postid = postid;
  }
}
