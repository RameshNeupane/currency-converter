import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});

    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

        const fetchCurrency = async () => {
            try {
                const response = await fetch(url);
                const resData = await response.json();
                setData(resData[currency]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCurrency();
    }, [currency]);

    return data;
};

export default useCurrencyInfo;
