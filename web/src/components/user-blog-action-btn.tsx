import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export function Publish() {
  return <Button className="w-full">Publish</Button>;
}

export function Unpublish() {
  return <Button className="w-full">Unpublish</Button>;
}

export function Delete() {
  return (
    <Button variant={"destructive"}>
      <Trash2 />
    </Button>
  );
}
