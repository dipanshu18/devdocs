"use client";

import { UserMinus2, UserPlus2 } from "lucide-react";
import { Button } from "./ui/button";

export function FollowBtn() {
  return (
    <Button>
      <UserPlus2 /> Follow
    </Button>
  );
}

export function UnfollowBtn() {
  return (
    <Button>
      <UserMinus2 /> Unfollow
    </Button>
  );
}
