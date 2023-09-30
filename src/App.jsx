import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";

const App = () => {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("usd");
    const [toCurrency, setToCurrency] = useState("npr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(fromCurrency);
    const currencyOptions = Object.keys(currencyInfo);

    const handleSwap = () => {
        setAmount(convertedAmount);
        setConvertedAmount(amount);
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    const convertCurrency = () => {
        setConvertedAmount(Number(amount) * currencyInfo[toCurrency]);
    };

    console.log("currency");
    return (
        <div className="w-full bg-black h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convertCurrency();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(value) => setAmount(value)}
                                onCurrencyChange={(value) =>
                                    setFromCurrency(value)
                                }
                                currencyOptions={currencyOptions}
                                selectCurrency={fromCurrency}
                                key={"from"}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={handleSwap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                amountDisable
                                currencyOptions={currencyOptions}
                                selectCurrency={toCurrency}
                                onCurrencyChange={(value) =>
                                    setToCurrency(value)
                                }
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        >
                            Convert {fromCurrency.toUpperCase()} to{" "}
                            {toCurrency.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default App;
