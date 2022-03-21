import { Category } from "../types";

type Props = {
    setLoading: (loading: boolean) => void;
    setCategories: (categories: Category[]) => void;
};

export const getCategories = ({ setLoading, setCategories }: Props) => {
    setLoading(true);
    fetch("https://frontend-trial-api.qa.parallax.dev/api/categories")
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setCategories(res.courses.data)
            setLoading(false);
        });
}