
import React, { useEffect, useState} from "react"
import './App.css';
import Video from "./pages/video"
import db from "./config/firebase"
import {collection, getDocs} from 'firebase/firestore/lite';

function App() {


   const [video,setVideos]= useState([])

    async function getVideos(){
      const videosCollection = collection(db,"videos")
      const videosSnapshot= await getDocs(videosCollection)
      const videoList = videosSnapshot.docs.map(doc=>doc.data())
      setVideos(videoList)
    }
    
   

   useEffect(()=>{
    getVideos();
   },[])
    
   



  return (
    <div className="App">
      <div className='app__videos'>
        {video.map((item)=>{
          return( 
            <Video
            curtidas={item.curtidas}
            mensagens={item.mensagens}
            compartilhamentos={item.compartilhamentos}
            nome= {item.nome}
            descricao={item.descricao}
            musica={item.musica}
            url={item.url}
            
            
            
            />

          )

        })}

        
        
         
      </div>
    </div>
  );
}

export default App;
