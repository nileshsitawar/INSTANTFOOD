
import { CDN_URL } from "../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { addItem,removeItem } from "../utils/cartSlice";
import {useState} from "react"


const ItemList = ({items}) =>{


    
    const cartItems = useSelector((store)=> store.cart.items);

    const [itemQuantity, setItemQuantity] = useState(0);
    
    const dispatch = useDispatch();

    const handleRemoveItem = (item,Id) =>{
        dispatch(removeItem(item,Id))
        
        setItemQuantity(Math.max(0,itemQuantity-1));
    }

    const handleAddItem = (item,Id) =>{
        //dispatch an action
        // if (Id != item.card.info.id )
        dispatch(addItem(item))
        setItemQuantity(itemQuantity+1)
    };


 
    return (
        <div>
            {items.map((item)=> (
             <div 
                data-testid = "fooditems"
                key={item.card.info.id} 
                 className="w-9/12 p-2 m-2 border-gray-200 border-b-2 text-left">
                <div className="py-2 flex justify-between">
                    <div>
                        <span className="font-bold">{item.card.info.name}</span>
                           <p className="font-mono font-extrabold">Rs  -{item.card.info.price/100 || item.card.info.defaultPrice/100}</p>
                    </div>
                    <div className="w-3/12">
                        
                        <img className="rounded-lg"
                        alt="item-card"
                        src={ CDN_URL+ item.card.info.imageId}/><div className="absolute">
                        <div className="flex justify-between">
                            <button className=" rounded-lg mx-1 p-1 bg-white-500 text-white shadow-lg "
                            onClick={()=>handleRemoveItem(item,item.card.info.id)}
                            
                            >
                                ➖
                            </button>
                            <p>{}</p>
                            <button className=" rounded-sm mx-1 p-1 bg-gray-400 text-green shadow-sm "
                            onClick={()=>handleAddItem(item,item.card.info.id)}
                            
                            >
                                Add +
                            </button>
                        </div>

                        </div>

                        
                        
                    </div>
                    
                

                </div>
                <p className="text-xs ">{item.card.info.description}</p>
             </div>
             ))
             }
        </div>
    )
    
}

export default ItemList;