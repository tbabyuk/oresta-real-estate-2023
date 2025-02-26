import { NeighbourhoodsHero } from "../../components/NeighbourhoodsHero"


export const metadata = {
    title: "OK+Co. | Markland Wood Toronto Neighbourhood",
    description: "Learn about the wonderful Etobicoke neighbourhood of Markland Wood",
}


const MarklandWoodNeighbourhoodPage = () => {

    return (
      <main>
        <NeighbourhoodsHero 
          neighbourhoodClass="bg-[url('/images/neighbourhoods/markland-wood/markland-wood-7.png')]" 
          neighbourhoodTitle="Markland Wood" 
        />
        <div className="px-5 sm:px-20 md:px-40 lg:px-20 py-20 md:py-22">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quam expedita voluptatum recusandae illo nisi, amet possimus, facere eum odit esse harum, asperiores enim. Commodi, officiis consequatur nisi eius eaque tempore minus velit vitae esse magnam odio distinctio, delectus aperiam. Doloremque veritatis, hic cumque quam at fugiat dolore similique consequatur?</p>
        </div>
      </main>
    )
  }
  
  export default MarklandWoodNeighbourhoodPage
  
  