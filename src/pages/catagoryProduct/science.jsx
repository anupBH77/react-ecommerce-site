import { ProductCard } from "../../components/productcard/ProductCard";
import { bookCatagory } from "../shopPage/shopPageData"
    import './manga.css'
const Science=()=>{
    return(
        <div className="productItems-holder">
            
            {bookCatagory.science.map((items)=><ProductCard key={items.key} item={items}></ProductCard>
                // <p>fgf</p>
        )}
        </div>
        
    )  
}
export default Science;