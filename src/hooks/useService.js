import { useEffect, useState } from "react";

const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(
            "/fakeService.JSON"
        )
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return [services];
};
export default useService;
