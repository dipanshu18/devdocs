import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export function CommentInput() {
  return (
    <div className="my-5">
      <Textarea placeholder="enter your comment" />
      <Button className="my-2">Submit</Button>
    </div>
  );
}
