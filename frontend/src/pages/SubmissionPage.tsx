import { useParams } from "react-router-dom";
import useSubmission from "../features/submissions/hooks/useSubmission";
import SubmissionInfo from "../features/submissions/components/SubmissionInfo";
import PageHeading from "../ui/PageHeading";
import Spinner from "../ui/Spinner";

const SubmissionPage = () => {
  const { id } = useParams();
  const { submission, isLoading } = useSubmission(id as string);

  if (isLoading) return <Spinner />;

  if (!submission) {
    return <div>Submission not found</div>;
  }

  return (
    <>
      <PageHeading>{submission.title}</PageHeading>
      <SubmissionInfo submission={submission} />
    </>
  );
};

export default SubmissionPage;
