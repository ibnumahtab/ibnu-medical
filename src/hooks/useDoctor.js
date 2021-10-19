import { useEffect, useState } from "react";


const useService = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("/fakeDocInfo.JSON")
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);
    return [doctors];
};
export default useService;
