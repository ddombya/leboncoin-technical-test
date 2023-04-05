import useFetch from "./useFetch";

const usePost = (url: string) => useFetch(url, "POST");

export default usePost;
