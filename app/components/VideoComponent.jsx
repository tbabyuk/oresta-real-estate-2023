

export const VideoComponent = ({poster, src}) => {


    return (
          <video 
              controls width="100%" 
              height="100%"
              poster={poster}
              className="rounded-xl overflow-hidden"
          >
              <source 
                  src={src}
                  type="video/mp4"
              />
              Your browser does not support the video tag.
          </video>
      )
  }