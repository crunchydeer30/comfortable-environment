import { useQuery } from "@tanstack/react-query";
import submissionsApi from "../api/submissions.api";

const useSubmissions = () => {
  const {data: submissions, isLoading, isError, error} = useQuery({
    queryKey: ["submissions"],
    queryFn: submissionsApi.getAll,
  });

  return { submissions, isLoading, isError, error };
}

export default useSubmissions;