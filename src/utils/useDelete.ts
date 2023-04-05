import useFetch from "./useFetch";

const useDelete = (url: string) => useFetch(url, "DELETE");

export default useDelete;
