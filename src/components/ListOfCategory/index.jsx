import React, { useEffect, useState } from 'react';

import { Category } from '../Category/index';
import { categories as mockCategories } from '../../api/db.json'
import { List, Item } from './styles';

function useCategoriesData(){
    const [categories, setCategories] = useState([])   
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        new Promise((resolve, reject) =>{
            if(resolve) setCategories(mockCategories);
            else if(reject) throw Error();
            setLoading(false)
        })
        
    }, [])

    return { categories, loading }
}

export const ListOfCategories = () =>{
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

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
            loading 
            ? <Item key='Loading'> <Category/> </Item>
            : categories.map(category =>(
                
                <Item key={category.id}>
                    <Category
                        {...category}
                    />
                </Item>)
            )
        }
    </List>
  )
  if(loading) return 'Loading...'
  return(
    <>
        {renderList()}
        {showFixed && renderList(true)}
    </>
  )
}