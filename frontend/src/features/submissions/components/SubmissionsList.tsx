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
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {submissions.map((submission) => (
        <SubmissionListItem key={submission.id} submission={submission} />
      ))}
    </section>
  );
};

export default SubmissionsList;
