"use client";

import Link from "next/link";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AuthForm({ type }: { type: "login" | "signup" }) {
  return (
    <form className="my-5">
      <div className="grid grid-cols-1 gap-3">
        <div className="grid gap-2">
          <Label>Email</Label>
          <Input placeholder="enter your email" type="email" />
        </div>
        <div className="grid gap-2">
          <Label>Password</Label>
          <Input placeholder="enter your password" type="password" />
        </div>
        <div className="space-y-2">
          <Label className="font-light">
            {type !== "signup" ? (
              <>
                Don{`'`}t have an account?{" "}
                <Link href={"/signup"} className="underline">
                  Signup
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link href={"/login"} className="underline">
                  Login
                </Link>
              </>
            )}
          </Label>
          <Button className="w-full">
            {type === "signup" ? "Signup" : "Login"}
          </Button>
        </div>

        <div>
          <p className="text-center">or</p>
        </div>

        <div className="space-y-2">
          <Button className="w-full" variant={"outline"}>
            <FaGoogle />
            Continue with Google
          </Button>
          <Button className="w-full" variant={"outline"}>
            <FaGithub />
            Continue with GitHub
          </Button>
        </div>
      </div>
    </form>
  );
}
