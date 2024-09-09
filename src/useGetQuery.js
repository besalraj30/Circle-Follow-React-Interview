import {useEffect, useState} from 'react';

export const useGetQuery= (url) =>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => res?.json())
    //     .then((json) => {
    //         setData(json);
    //         console.log(json)
    //     })
    //     .catch((err) => console.log(err))
    //     .finally(() => setIsLoading(false));
    // }, [])

    useEffect(() => {
        const fetchUsers = async() => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch(err) {
                console.log(err);
            }
            finally{
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, [])

    return {
        res: data,
        isLoading
    }
}