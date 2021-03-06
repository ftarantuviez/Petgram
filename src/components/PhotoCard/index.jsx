import React, {useEffect, useRef, useState} from 'react';

import { ImgWrapper, Img, Article } from './styles';
import { FavButton } from '../FavButton/index';
import {useLocalStorage} from '../../hooks/useLocalStorage'
import {useNearScreen} from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';



export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE }) =>{
    
    const [show, ref] = useNearScreen()
    const key = `like-${id}`
    const [liked, setLiked] = useLocalStorage(key, false)
    const [likesState, setLikesState] = useState(likes)
    

    const handleFavClick = () => {
        setLiked(!liked);
        if(liked){
            setLikesState(likesState - 1)
        } else{
            setLikesState(likesState + 1)
        }
    }

    return (
        
        <Article ref={ref}>
            {
                show && <>
                    <a href={`/?detail=${id}`}>
                        <ImgWrapper>
                            <Img src={src} alt=""/>
                        </ImgWrapper>
                    </a>

                    <FavButton 
                        liked={liked} 
                        likes={likesState} 
                        onClick={handleFavClick} 
                    
                    />
                    
                    </>
            }
            

        </Article>
    )
}