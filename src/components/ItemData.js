import { CDN_URL } from "../utils/constants";
const ItemData = (item) =>{

    console.log(item)
    const {id,name,price,imageId,description} = item
    
    return (
                    
        <div>
            <div 
                data-testid = "fooditems"
                key={id} 
                className="w-9/12 p-2 m-2 border-gray-200 border-b-2 text-left">
                <div className="py-2 flex justify-between">
                    <div>
                        <span className="font-bold">{name}</span>
                        <p className="font-mono font-extrabold">Rs  -{price/100}</p>
                    </div>
                    <div className="w-3/12">
                        
                        <img className="rounded-lg"
                        alt="item-card"
                        src={ CDN_URL+ imageId}/><div className="absolute">
                        <div className="flex justify-between">
                            <button className=" rounded-lg mx-1 p-1 bg-white-500 text-white shadow-lg "
                            onClick={()=>handleRemoveItem(item,id)}
                            
                            >
                                ➖
                            </button>
                            <p>{}</p>
                            <button className=" rounded-sm mx-1 p-1 bg-white-500 text-white shadow-lg "
                            onClick={()=>handleAddItem(item,id)}
                            
                            >
                                Add +
                            </button>
                        </div>

                        </div>

                        
                        
                    </div>
                    
                

                </div>
                <p className="text-xs ">{description}</p>
            </div>
            
        </div>

    )
}
export default ItemData;

