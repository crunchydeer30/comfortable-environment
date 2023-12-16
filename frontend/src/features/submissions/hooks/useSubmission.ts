import { useQuery } from "@tanstack/react-query";
import submissionsApi from "../api/submissions.api";

const useSubmission = (id: string) => {
  const {data: submission, isLoading, isError, error} = useQuery({
    queryKey: ["submission", id],
    queryFn: () => submissionsApi.getById(id),
  });

  return { submission, isLoading, isError, error };
}

export default useSubmission;