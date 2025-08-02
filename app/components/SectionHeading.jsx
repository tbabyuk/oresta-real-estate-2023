



export const SectionHeading = ({title, color = "text-oresta-blue/40", mb="mb-10"}) => {

    return(
        <h2 className={`text-center font-semibold ${color} text-[35px] ${mb}`}>{title}</h2>
    )
}