import { MultiValue } from "react-select";
import { Category, Course, Courses, Location } from "../types";

type Props = {
    categories: Category[];
    locations: Location[];
    setLoading: (loading: boolean) => void;
    selectedCategories: MultiValue<{ value: string; label: string; }>;
    selectedLocations: MultiValue<{ value: string; label: string; }>;
    setCoursesList: (courseList: Course[]) => void;
    setApiData: (apiData: Courses) => void;
};

export const filterCourses = ({ categories, locations, setLoading, selectedCategories, selectedLocations, setCoursesList, setApiData }: Props) => {
    const payload = {
        "categories": selectedCategories.map(x => x.value).length > 0 ? selectedCategories.map(x => x.value) : categories.map(x => x.slug),
        "locations": selectedLocations.map(x => x.value).length > 0 ? selectedLocations.map(x => x.value) : locations.map(x => x.slug),
    };
    setLoading(true);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    fetch('https://frontend-trial-api.qa.parallax.dev/api/courses', requestOptions)
        .then(response => response.json())
        .then(res => {
            console.log(res);
            setCoursesList(res.courses.data);
            setApiData(res.courses)
            setLoading(false);
        });
};
