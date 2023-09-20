export default function ListPicker(prop){

    const randomIdx = Math.floor(Math.random() * prop.val.length) ;
    const randomElm = prop.val[randomIdx]
    return (
        <div>
            <p>The list of values: {randomElm}</p>
        </div>
    )
}