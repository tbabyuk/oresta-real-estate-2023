



export const TiltDivider = ({style}) => {

    // return(
    //     <div className={style}>
    //         <svg dataName="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    //             <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
    //         </svg>
    //     </div>
    // )
    return(
//         <div className={style}>
//     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
//         <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
//     </svg>
// </div>
//         <div className={style}>
// <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
// <path d="M0,0V7.23C60,65.52,268.63,112.77,600,112.77S1140,65.52,1200,7.23V0Z" class="shape-fill"></path>
// </svg>
// </div>




<div className="shape-divider">
  <svg
    width="100%"
    height="37"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    style={{ transform: "none" }}
  >
    <path
      fill="#747ac8"
      d="M1440,320L720,0L0,320L0,320L1440,320Z"
    />
  </svg>
</div>



    )
}