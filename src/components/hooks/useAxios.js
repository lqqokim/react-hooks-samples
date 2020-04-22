/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import defaultAxios from 'axios';

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    const [trigger, setTrigger] = useState(0);

    if (!opts.url) {
        return;
    }

    // trigger를 사용하여 refetch 기능 구현
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });

        setTrigger(Date.now());
    }

    useEffect(() => {
        axiosInstance(opts).then(data => {
            setState({
                ...state,
                loading: false,
                data
            })
        }).catch(error => {
            setState({
                ...state,
                loading: false,
                error
            })
        })
    }, [trigger]); // useEffect가 trigger를 watch

    return { ...state, refetch };
};

const Init = () => {
    console.log('Init !');
    const { loading, data, error, refetch } = useAxios({
        url: 'http://dummy.restapiexample.com/api/v1/employees'
    });
    // console.log(`Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`);

    return (
        <div className="App">
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    )
}

export {
    Init as useAxios
}