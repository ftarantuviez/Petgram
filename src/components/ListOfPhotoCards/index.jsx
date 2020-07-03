import React from 'react';
import { PhotoCard } from '../PhotoCard/index';
import { photos } from '../../api/db.json'

class ListOfPhotoCards extends React.Component{
    render()
    {
    let filter;
    this.props.categoryFilter === "all"  
        ? filter = photos
        : filter = photos.filter(photo => photo.categoryId === this.props.categoryFilter)
    return(
        <ul>
            {filter.length === 0 
                ?'No hay ninguno' 
                : filter.map(photo =>

                    <PhotoCard 
                        key={photo.id}
                        {...photo}
                    />
            
            )}
            
            
        </ul>
        )}
}

export default ListOfPhotoCards;