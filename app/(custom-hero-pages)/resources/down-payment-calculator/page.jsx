"use client"


import { DefaultHero } from "../../components/DefaultHero"
import { useState, useRef, useEffect } from "react"


const DownPaymentCalculatorPage = () => {

    const [formattedPurchasePrice, setFormattedPurchasePrice] = useState("")
    const [formattedDownPaymentAmount, setFormattedDownPaymentAmount] = useState("")
    const [explanation, setExplanation] = useState("")
    const inputRef = useRef()

    // Function to format number with commas
    const formatNumber = (value) => {
        // remove all chars that aren't numbers
        const numericValue = value.replace(/[^0-9]/g, "");
        // add commas to denote thousands
        return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const formatCurrency = (value) => {
        return value.toLocaleString("en-CA", { 
            style: "currency", 
            currency: "CAD",
            minimumFractionDigits: 2
        });
    };

    const handleChange = (value) => {
        const formattedValue = formatNumber(value);
        setFormattedPurchasePrice(formattedValue);
    };

    const handleCalculateDownPayment = (e) => {
        e.preventDefault()
        const purchasePrice = +formattedPurchasePrice.replace(/,/g, '');

        if(purchasePrice <= 500000) {

            const downPaymentAmount = purchasePrice * 0.05
            const formatted = formatCurrency(downPaymentAmount)
            setFormattedDownPaymentAmount(formatted)
            const explanationText = `Since your purchase price is at or below $500,000 - your down payment will be 5% of your purchase price, which works out to ${formatted}.`
            setExplanation(explanationText) 

        } else if(purchasePrice > 500000 && purchasePrice <= 1500000) {

            const downPaymentOnFirst500K = 25000 //5% of the first $500K
            const amountAbove500K = purchasePrice - 500000
            const downPaymentOnAmountAbove = amountAbove500K * 0.10
            const downPaymentAmount = downPaymentOnFirst500K + downPaymentOnAmountAbove
            const formatted = formatCurrency(downPaymentAmount)
            setFormattedDownPaymentAmount(formatted)
            const explanationText=`Since your purchase price is above $500,000 but under $1,500,000 - your down payment is calculated as follows: <br /><br /> &bull; 5% on the first $500,000 - which is $25,000 <br /><br /> AND <br /><br />&bull; 10% on the amount above $500,000. <br />In your case, the amount above $500,000 is ${formatCurrency(amountAbove500K)}, 10% of which is ${formatCurrency(downPaymentOnAmountAbove)}. For a total down payment of ${formatted}`
            setExplanation(explanationText)

        } else if(purchasePrice > 1500000) {

            const downPaymentAmount = purchasePrice * .20
            const formatted = formatCurrency(downPaymentAmount)
            setFormattedDownPaymentAmount(formatted)
            const explanationText = `Since your purchase price is above $1,500,000 - your down payment will be 20% of your purchase price, which works out to ${formatted}.`
            setExplanation(explanationText)
        }
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])


    return(
        <main>
            <DefaultHero 
                heroClass="bg-[url('/images/pages/down-payment-calculator/down-payment-calculator-header-bg.png')]" 
                heroTitle="Down Payment Calculator"
            />
            <div className="px-5 sm:px-20 md:px-40 lg:px-20 py-20 md:py-22 bg-[url('/images/pages/down-payment-calculator/down-payment-calculator-page-bg.png')] bg-cover overflow-hidden">
                <h2 className="text-[1.4rem] text-center mb-4">Let&apos;s calculate your down payment!</h2>
                <form className="mx-auto px-10 py-5 w-full sm:w-[380px] bg-gray-100 rounded border-2 shadow-lg mb-4" onSubmit={handleCalculateDownPayment}>
                    <div className="mb-5">
                        <label htmlFor="purchase-price" className="block mb-2 text-[0.95rem] sm:text-[1rem]">Enter purchase price of your home</label>
                        <div className="flex items-center">
                            <span className="text-lg absolute -translate-x-[14px]">$</span>
                            <input 
                                type="text"
                                id="purchase-price"
                                className="h-10 w-full border-gray-300 oresta-form-input" 
                                placeholder="purchase price"
                                value={formattedPurchasePrice}
                                onChange={(e) => handleChange(e.target.value)}
                                ref={inputRef}
                                required 
                            />
                        </div>
                    </div>
                    <button className="h-10 w-full rounded oresta-action-orange">Calculate</button>
                </form>
                {/* results div */}
                {formattedDownPaymentAmount && (
                    <div className="mx-auto px-10 py-5 sm:w-[380px] rounded border-2 shadow-lg">
                        {formattedDownPaymentAmount && (
                            <p className="text-green-600">Your down payment amount is: <span className="font-bold">{formattedDownPaymentAmount}</span></p>
                        )}
                        {explanation && (
                            <p dangerouslySetInnerHTML={{__html: explanation}} className="text-sm mt-4" />
                        )}
                    </div>
                )}
            </div>
        </main>
    )
}


export default DownPaymentCalculatorPage