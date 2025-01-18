"use client";

import { MessageSquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Comment() {
  const [addComment, setAddComment] = useState(false);

  return (
    <div className="p-5 shadow w-full rounded-md space-y-2">
      <h1>Comment</h1>
      <div className="flex items-center gap-2">
        <Image
          src={"/hero.svg"}
          alt="user profile pic"
          width={300}
          height={300}
          className="w-10 h-10 object-cover rounded-full bg-black"
        />
        <h1>name</h1>
      </div>
      <div>Created at</div>
      <div>
        {!addComment ? (
          <MessageSquare onClick={() => setAddComment(true)} />
        ) : (
          <div className="flex gap-2">
            <Input placeholder="enter your reply" />
            <Button onClick={() => setAddComment(false)}>Cancel</Button>
          </div>
        )}
      </div>
    </div>
  );
}
