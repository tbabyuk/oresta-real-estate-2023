import { CustomHeader } from "../../components/CustomHeader"



const MarketWatchPage = () => {

  const marketWatchReports = [
    {
        title: "July 2025 Market Watch Report",
        link: "/documents/market_watch_july_2025.pdf"
    },
    {
        title: "June 2025 Market Watch Report",
        link: "/documents/market_watch_june_2025.pdf"
    },
    {
        title: "May 2025 Market Watch Report",
        link: "/documents/market_watch_may_2025.pdf"
    },
    {
      title: "April 2025 Market Watch Report",
      link: "/documents/market_watch_april_2025.pdf"
    }
  ]



  return (
    <main>
        <CustomHeader 
            headerClass="bg-[url('/images/pages/market-watch/market-watch-header-bg.png')]" 
            headerTitle="Market Watch"
        />
        <div className="px-5 py-20 flex justify-center items-center">
            <div className="flex flex-col space-y-6 rounded-xl text-[0.9rem]">
                {marketWatchReports.map((report, index) => (
                    <a href={report.link} key={index} className="min-w-[220px] block text-center px-4 py-3 rounded oresta-action-orange" download>
                        {report.title}
                    </a>
                ))}
           </div>
        </div>
    </main>
  )
}

export default MarketWatchPage