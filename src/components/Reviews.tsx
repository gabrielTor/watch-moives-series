import getSrc from "@/utils/getFullImgSrc";
import Image from "next/image";

export const Reviews = ({ results }: ReviewsResponse) => {
  if (!results.length) return null;
  return (
    <section className="max-w-8xl mx-auto text-white grid gap-4 mb-4">
      <h2 className="text-3xl font-bold bg-navy rounded-lg p-4">Reviews</h2>
      {results?.map((review) => (
        <div key={review.id} className="bg-navy rounded-xl p-4">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full flex-shrink-0">
              {review.author_details.avatar_path ? (
                <Image
                  src={getSrc(review.author_details.avatar_path)}
                  alt={review.author}
                  width={500}
                  height={500}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <p className="w-full h-full rounded-full grid place-items-center bg-aqua capitalize">
                  {review.author_details.name[0]}
                </p>
              )}
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">
                {review.author_details.name}
              </h2>
              <p className="text-sm text-gray-300">
                @{review.author_details.username}
              </p>
            </div>
          </div>
          <div className="mb-2">
            <span className="text-liteBlue">
              Rating: {review.author_details.rating}
            </span>
          </div>
          <p className="whitespace-pre-line mb-2">{review.content}</p>
          <a
            href={review.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-liteBlue hover:underline"
          >
            Read full review
          </a>
          <p className="text-xs text-gray-300 mt-2">
            Reviewed on {new Date(review.created_at).toLocaleDateString()}
          </p>
        </div>
      ))}
    </section>
  );
};
