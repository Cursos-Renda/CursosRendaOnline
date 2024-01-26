export const Input = ({label, type, placeholder, id}: any) => {
    return(
        <>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <input type={type} id={id} placeholder={placeholder} name={id} />
        </>
    )
}