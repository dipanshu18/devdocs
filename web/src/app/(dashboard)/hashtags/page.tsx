import Link from "next/link";

export default function Hashtags() {
  return (
    <div>
      <h1 className="mb-5 text-xl font-bold">Hashtags</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
        <Link href={"/hashtags/:tag"}>
          <div className="shadow hover:shadow-lg duration-300 rounded-md p-5">
            <h1># hashtag</h1>
          </div>
        </Link>

        <Link href={"/hashtags/:tag"}>
          <div className="shadow hover:shadow-lg duration-300 rounded-md p-5">
            <h1># hashtag</h1>
          </div>
        </Link>

        <Link href={"/hashtags/:tag"}>
          <div className="shadow hover:shadow-lg duration-300 rounded-md p-5">
            <h1># hashtag</h1>
          </div>
        </Link>

        <Link href={"/hashtags/:tag"}>
          <div className="shadow hover:shadow-lg duration-300 rounded-md p-5">
            <h1># hashtag</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
