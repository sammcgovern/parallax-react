import { Course, Courses } from "../types";

type Props = {
    setLoading: (loading: boolean) => void;
    setCoursesList: (courses: Course[]) => void;
    setApiData: (courses: Courses) => void;
    coursesList: Course[]; 
    page: number;
    apiData: Courses | undefined;
};

export const getCoursesList = ({setLoading, setCoursesList, setApiData, coursesList, page, apiData}:Props) => {
  let url = `http://frontend-trial-api.qa.parallax.dev/api/courses`;
  if (page > 1) {
    url = apiData?.next_page_url || url
  }

    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setCoursesList([...coursesList, ...res.courses.data]);
        setApiData(res.courses)
        setLoading(false);
      });
  }