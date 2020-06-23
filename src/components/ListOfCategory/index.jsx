import React, { useEffect, useState } from 'react';

import { Category } from '../Category/index';
import { categories as mockCategories } from '../../api/db.json'
import { List, Item } from './styles';

export const ListOfCategories = () =>{
  const [categories, setCategories] = useState([])   
  const [showFixed, setShowFixed] = useState(false)


  useEffect(() =>{
      new Promise((resolve, reject) =>{
          if(resolve) setCategories(mockCategories);
          else if(reject) throw Error();
      },[])
  })

  useEffect(() => {
      const onScroll = e =>{
          const newShowFixed = window.scrollY > 200;
          
          (showFixed !== newShowFixed) && setShowFixed(newShowFixed)
      }
      document.addEventListener('scroll', onScroll);

      return() => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
        {
            categories.map(category =>(
                
                <Item key={category.id}>
                    <Category
                        {...category}
                    />
                </Item>)
            )
        }
    </List>
  )

  return(
    <>
        {renderList()}
        {showFixed && renderList(true)}
    </>
  )
}