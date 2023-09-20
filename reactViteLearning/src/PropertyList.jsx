import Property from "./Property";

export default function PropertyList({propertyList}){
    return (
        <div>
            {propertyList.map((i) => {

                return <Property element={i}></Property>
})}
                
                
        </div>
    )
}