import SubmissionListItem from "./SubmissionListItem";
import Spinner from "../../../ui/Spinner";
import useSubmissions from "../hooks/useSubmissions";


const SubmissionsList = () => {
  const { submissions, isLoading } = useSubmissions();

  if (isLoading) return <Spinner />;
  if (!submissions) {
    return <div>Submissions not found</div>;
  }

  return (
    <section>
      {submissions.map((submission) => (
        <SubmissionListItem key={submission.id} submission={submission} />
      ))}
    </section>
  );
};

export default SubmissionsList;
