import { Link } from "react-router-dom";
import { Submission } from "../../../types";

interface SubmissionListItemProps {
  submission: Submission;
}

const SubmissionListItem = (props: SubmissionListItemProps) => {
  return (
    <article className="flex flex-col gap-6 p-4 border-gray-200 border-[1px] rounded-2xl shadow-lg">
      <Link
        to={`/submissions/${props.submission.id}`}
        className="flex aspect-video overflow-hidden rounded-xl overflow-hidden shadow-xl"
        preventScrollReset={false}
      >
        <img
          src={props.submission.pictureAfter}
          alt="post"
          className="w-full h-full object-cover"
        />
      </Link>
      <section className="flex flex-col gap-4">
        <section className="flex flex-col gap-4">
          <Link to={`/submissions/${props.submission.id}`}>
            <h2 className="text-2xl">{props.submission.title}</h2>
          </Link>
          <p className="line-clamp-3">{props.submission.description}</p>
        </section>
        <section className="flex flex-col gap-1">
          <p>Author: {props.submission.user.username}</p>
          <p>Date: {props.submission.createdAt}</p>
          <p>Likes: {props.submission.likes}</p>
        </section>
      </section>
    </article>
  );
};

export default SubmissionListItem;
