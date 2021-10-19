import { useEffect, useState } from "react";

const useTest = () => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        fetch("/fakeTestInfo.JSON")
            .then((res) => res.json())
            .then((data) => setTests(data));
    }, []);
    return [tests];
};
export default useTest;
