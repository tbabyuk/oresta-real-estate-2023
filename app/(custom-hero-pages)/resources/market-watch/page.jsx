import { CustomHeader } from "../../components/CustomHeader"



const MarketWatchPage = () => {
  return (
    <main>
        <CustomHeader 
            headerClass="bg-[url('/images/pages/market-watch/market-watch-header-bg.png')]" 
            headerTitle="Market Watch"
        />
        <div className="px-5 py-20 flex justify-center items-center bg-cover">
            <div className="max-w-[500px] rounded-xl overflow-hidden">
                <a href="/documents/market_watch_april_2025.pdf" className="oresta-link" download>
                    Download April 2025 Market Watch Report
                </a>
          </div>
        </div>
    </main>  
  )
}

export default MarketWatchPage