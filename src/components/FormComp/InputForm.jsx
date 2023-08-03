import { Provider, useSelector } from 'react-redux'
import { store } from '../../store/store'
import './inputForm.css'
import React from 'react'
import { selectUser } from '../../reducers/slices/userSlice'
export const InpputForm=({changeHandler,Label,validOutline, ...otherProps})=>
{
    const us= useSelector(selectUser)
    console.log(us)
    return(
       <Provider store={store}>
        <div >
            {
                        console.log(validOutline)

            }
            <input 
            placeholder={`${Label}`}
            className={`text-input ${validOutline}`}
            onChange={changeHandler} 
            {...otherProps}
            />
            
            
        </div>
        </Provider>
    )
}