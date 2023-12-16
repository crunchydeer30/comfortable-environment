import { Link } from "react-router-dom";
import { Submission } from "../../../types";

interface SubmissionListItemProps {
  submission: Submission;
}

const SubmissionListItem = (props: SubmissionListItemProps) => {
  return (
    <article className="flex gap-16 border-t-[1px] border-b-[1px] border-t-gray-200 border-b-gray-200 py-5 justify-between">
      <section className="flex flex-col gap-4">
        <section className="flex gap-2 items-center">
          <p>{props.submission.user.username}</p>
          <p>{props.submission.createdAt}</p>
        </section>
        <section>
          <Link to={`/submissions/${props.submission.id}`}>
            <h2 className="text-2xl">{props.submission.title}</h2>
          </Link>
          <p>{props.submission.description}</p>
        </section>
      </section>
      <Link
        to={`/submissions/${props.submission.id}`}
        className="flex h-[150px] w-[150px] shrink-0 rounded-xl overflow-hidden shadow-xl"
        preventScrollReset={false}
      >
        <img
          src={props.submission.pictureAfter}
          alt="post"
          className="w-full h-full object-cover"
        />
      </Link>
    </article>
  );
};

export default SubmissionListItem;
