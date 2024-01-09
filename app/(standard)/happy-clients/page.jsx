
export const metadata = {
  title: "OK+Co. | Happy Clients",
  description: "See what our clients are saying!",
}

const HappyClients = () => {
  
    return (
      <main className="px-5 md:px-20 py-20 md:py-28 text-gray-600">
        <h1 className="text-center text-4xl mb-20">Happy Clients</h1>
        <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-1 flex flex-col mb-12 md:mb-0">
                <p className="italic leading-8 mb-6">&quot;My fiancé and I had a terrific experience working with Oresta to find a condo to rent. She is incredibly professional and hardworking. And went the extra mile to ensure that we found a place that we loved. I can&apos;t recommend her highly enough. We&apos;ll definitely be working with her in the near future when we purchase our house.&quot;</p>
                <p className="font-semibold">- Eriver and Marie</p>
            </div>
            <div className="flex-1 flex flex-col">
                <p className="italic leading-8 mb-6">&quot;Oresta was a pleasure to work with and made the process as easy as possible. She went out of her way to rent my property and I would recommend her. Thanks again.&quot;</p>
                <p className="font-semibold">- Francis</p>
            </div>
        </div>
      </main>
        
    )
  }
  
  export default HappyClients
  
  