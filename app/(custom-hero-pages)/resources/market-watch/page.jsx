import { CustomHeader } from "../../components/CustomHeader"



const MarketWatchPage = () => {
  return (
    <main>
        <CustomHeader 
            headerClass="bg-[url('/images/pages/market-watch/market-watch-header-bg.png')]" 
            headerTitle="Market Watch"
        />
        <div className="px-5 py-20 flex justify-center items-center">

            <div className="flex flex-col space-y-6 rounded-xl">
                <a href="/documents/market_watch_april_2025.pdf" className="w-fit block text-center px-4 py-3 rounded text-white bg-oresta-orange" download>
                    Download April 2025 Market Watch Report
                </a>
                <a href="/documents/market_watch_may_2025.pdf" className="w-fit block text-center px-4 py-3 rounded text-white bg-oresta-orange" download>
                    Download May 2025 Market Watch Report
                </a>
           </div>

        </div>
    </main>  
  )
}

export default MarketWatchPage