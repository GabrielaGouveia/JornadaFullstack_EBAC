
import './App.css';
import Video from "./pages/video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video
        curtidas={100}
        mensagens={200}
        compartilhamentos={300}
        nome="Pedro"
        descricao="Brecker o goleiro"
        musica="musica épica"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        
        
        />

        <Video
        curtidas={430}
        mensagens={550}
        compartilhamentos={698}
        nome="Paulo"
        descricao="Bird olhando para a câmera"
        musica="Clap your hands"
        url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        
        
        
        />
        
         
      </div>
    </div>
  );
}

export default App;
