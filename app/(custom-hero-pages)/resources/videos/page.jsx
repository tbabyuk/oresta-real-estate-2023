
import { CustomHeader } from "../../components/CustomHeader"
import { VideoComponent } from "@/app/components/VideoComponent"


const VideosPage = () => {
  return (
    <main>
        <CustomHeader 
            headerClass="bg-[url('/images/pages/videos/video-page-header-bg.png')]" 
            headerTitle="Videos"
        />
        <div className="px-5 py-20 flex justify-center items-center bg-[url('/images/pages/videos/video-page-bg.png')] bg-cover">
            <div className="max-w-[500px] rounded-xl overflow-hidden">
              <VideoComponent 
                  poster="/images/pages/videos/mortgage-strategies-video-thumbnail.png" 
                  src="/the_smith_manoeuvre.mp4"
              />
          </div>
        </div>
    </main>  
  )
}
// /the_smith_manoeuvre.mp4
export default VideosPage