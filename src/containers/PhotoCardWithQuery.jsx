import React from 'react';
import { PhotoCard } from '../components/PhotoCard'

import { photos } from '../api/db.json';

class PhotoCardWithQuery extends React.Component{

    render(){
        const photoAlone = photos.filter(photo => photo.id  === this.props.photoIdOnly)
        const photo = photoAlone[0];

        return(
            <>
                
                {photoAlone.length === 0
                    ? 'This is not available'
                    : <PhotoCard {...photo} />
                    
                }
            </>
        )
    }
}


export default PhotoCardWithQuery;