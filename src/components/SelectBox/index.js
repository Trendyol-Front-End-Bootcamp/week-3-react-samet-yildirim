const SelectBox=({name,options,onChange,className,selectDescription})=>{
    return(
        <select onChange={onChange} className={className??""} name={name}>
            <option value="">{selectDescription}</option>
            {options.map(option=>(
                <option value={option.value}>{option.text}</option>
            ))}
        </select>
    )
}
export default SelectBox;