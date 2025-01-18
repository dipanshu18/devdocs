import Image from "next/image";

export function Reply() {
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
    </div>
  );
}
