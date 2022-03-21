import { Location } from "../types";

type Props = {
    setLoading: (loading: boolean) => void;
    setLocations: (locations: Location[]) => void;
};

export const getLocations = ({ setLoading, setLocations }: Props) => {
    setLoading(true);
    fetch("https://frontend-trial-api.qa.parallax.dev/api/locations")
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setLocations(res.courses.data)
            setLoading(false);
        });
}