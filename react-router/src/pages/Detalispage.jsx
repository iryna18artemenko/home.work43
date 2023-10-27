import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Detalis  = () => {
    const {id} = useParams();
    const {albumId} = useParams();
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
  
      useEffect(() => {
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
          }, [id]);

    useEffect(() => {
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
        }
        )
    }, [albumId]);
    
    function albumClick () { 
        setAlbums (albums.filter(album => (

                <ul key={album.id} to={`/users/${albums.userId}/albums`}>
                    <li>{album.title} </li>
                    <button onClick={() => photoClick()}>Photos</button>
                </ul>
        )))
    };

    function photoClick () {
        console.log (photos.filter(photo => (
            <ul key={photo.id} to={`/albums/${photos.albumId}/photos`}>
                <li> {photo.title} </li>
                <li> {photo.url} </li>
                <li> {photo.thumbnailUrl} </li>
            </ul>
             ))
       )
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
            <button onClick={() => albumClick()}>Album</button>
            {albums.map(album => (
                <ul key={album.id} to={`/users/${albums.userId}/albums`}>
                     <li>{album.title} </li>
                     <button onClick={() => photoClick()}>Photos</button>
                 </ul>
                ))}
            </div>
            
        )} 

        
    </div>
    
)}

};

export  {Detalis};