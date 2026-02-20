type OptionProps={
    title: string
}

export default function Option({title}:OptionProps){
    return (
        <button className="opciones">
            <h3>{title}</h3>
        </button>
    )
}

