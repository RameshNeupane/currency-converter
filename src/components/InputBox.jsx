import { useId } from "react";

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) => {
    const inputAmountId = useId(); // generates unique id for input field

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label
                    htmlFor={inputAmountId}
                    className="text-black/40 mb-2 inline-block"
                >
                    {label}
                </label>
                <input
                    id={inputAmountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(event) =>
                        onAmountChange && onAmountChange(event.target.value)
                    }
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(event) =>
                        onCurrencyChange && onCurrencyChange(event.target.value)
                    }
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currencyOption) => (
                        <option key={currencyOption} value={currencyOption}>
                            {currencyOption}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default InputBox;
