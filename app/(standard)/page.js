
export const metadata = {
  title: 'Kisil RES | Home',
  description: 'Buying and selling homes in Toronto, Mississauga, and the GTA!',
}


const Home = () => {

  return (
    <main className="px-5 md:px-20 py-20 md:py-28 text-gray-600">
      <h1 className="text-center text-4xl mb-20">Buying and Selling homes in Toronto, Mississauga, and the GTA!</h1>
      <div className="flex flex-col md:flex-row">
          <div className="shrink-0 flex justify-center md:me-6 mb-10 md:mb-0 overflow-hidden">
              <img src="/images/oresta_about_sm.jpg" className="rounded-md" style={{height: "260px"}} />
          </div>
          <div className="leading-8">
              <p className="mb-6">Oresta began her career in real estate in 2015. Now as an experienced Realtor, she is committed to nurturing long-lasting client relationships and making a positive difference in her community.</p>

              <p className="mb-6">When she is not running her real estate business, Oresta spends a great deal of time volunteering. She has been a Government Relations Committee Member and Climate Change Sub-Committee Member on the Toronto Regional Real Estate Board (TRREB) since 2021. Because of her love for her family, clients and community, she describes herself as a community advocate.</p>

              <p className="mb-6">&quot;My clients can rely on me as a resource for a lot of things. For me, there&apos;s no gate keeping—with clients, colleagues, or friends. I have traditional values around family and friends, so relationships always come first.&quot;</p>
          </div>
      </div>
      <div className="leading-8">            
            <p className="mb-6">When it comes to navigating the real estate industry, Oresta believes in the power of positivity, transparency and doing the right thing, which is why she was originally attracted to KW. The alignment in values really enabled her to design her business and her life as she saw fit.</p>

            <p className="mb-6">&quot;I&apos;m very transparent in the way that I do business. If something is 💩, I will be honest and say, &quot;Listen guys, this is 💩. This is going to take 20K to fix, but this is the return on investment that you&apos;re going to get.&quot;</p>

            <p className="mb-6">Oresta believes a happy and healthy community starts on a micro level, which is why she holds her relationships in such high esteem.</p>

            <p>&quot;It&apos;s not like we have to work hard at it. You just have to be human and kind.&quot;</p>
        </div>
    </main>
      
  )
}

export default Home

