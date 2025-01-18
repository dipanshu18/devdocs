import { PenBox, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Publish() {
  return <Button className="w-full">Publish</Button>;
}

export function Unpublish() {
  return <Button className="w-full">Unpublish</Button>;
}

export function Edit() {
  return (
    <Link href={"write/:id"}>
      <Button>
        <PenBox />
      </Button>
    </Link>
  );
}

export function Delete() {
  return (
    <Button className="bg-red-600 hover:bg-red-500">
      <Trash2 />
    </Button>
  );
}
