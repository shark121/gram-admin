import PhoneProducts from "../../../components/products/phonesComponents/phones";
import Airpods from "../../../components/airpods/airpods";

type ComponentMapType={
    [key : string] : JSX.Element
}


let ComponentMap:ComponentMapType  = {
    Phones : <PhoneProducts/>,
    Airpods : <Airpods/>,
}

export default ComponentMap