import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detalis  =  () => {
    const {id} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setUser(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [id]);
  
    
    function albumClick () { 
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
            .then(res => res.json())
            .then(
            (result) => {
                setIsLoaded(true);
                setAlbums(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    };

    function photoClick (albumId) {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setPhotos(result);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    };

    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
    return <div>Loading...</div>;
    } else { 
    
    return (
    <div> 
        {user && (
            <div>
                <h1>{user.name}</h1>
                <button onClick={() => albumClick()}>Albums</button>
                {albums.map(album => (
                    <ul className="album" key={album.id} to={`/users/${album.userId}/albums`}>
                        <li>{album.title} </li>
                        <button onClick={() => photoClick(album.id)}>Photos</button>
                    </ul>
                    ))}
                {photos.map(photo => (
                    <ul  key={photo.id} to={`/albums/${photo.albumId}/photos`}>
                        <li className="photo"> {photo.title} </li>
                    </ul>
                ))} 
            </div>
            
        )} 

        
    </div>
    
)}

};

export  {Detalis};