import { Bookmark } from "@/components/bookmark";
import { Comment } from "@/components/comment";
import { CommentInput } from "@/components/comment-input";
import { LikeBtn } from "@/components/like-btn";
import { Reply } from "@/components/reply";

export default function BlogContent() {
  return (
    <div className="">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Blog Title</h1>
        <p>Render the markdown here</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          explicabo ipsam eveniet numquam, odit ullam laboriosam non error nihil
          quas mollitia labore voluptatem animi quos quod eum earum nam eos vel
          possimus consequatur qui tenetur. A quas molestiae vero qui, sunt
          harum mollitia consequuntur magnam! Excepturi similique voluptatibus
          cum in et, iure ratione deserunt esse praesentium, quia, perferendis
          rerum? Nihil est distinctio nobis illum quibusdam amet enim explicabo
          repellendus vel, impedit corrupti eligendi magnam sequi neque
          molestias quae facilis repellat consequatur? Nostrum quasi corporis
          magnam quos, facere eveniet quibusdam ducimus dolores ab. Est
          voluptatum corporis molestiae odio, recusandae cupiditate natus.
        </p>
      </div>

      <div className="flex w-full justify-between my-5">
        <LikeBtn />

        <Bookmark />
      </div>

      <div className="my-5 w-full">
        <h1 className="text-xl font-semibold">Comments</h1>
        <CommentInput />
        <div className="grid grid-cols-1 gap-5">
          <div>
            <Comment />
            <div>
              <div className="bg-neutral-50 max-w-96 md:max-w-xl lg:max-w-2xl xl:max-w-3xl ml-auto my-5">
                <Reply />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
