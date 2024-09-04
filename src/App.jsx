
import { Profile } from "./components/MenuItems/Profile"
import catImage from "./assets/cat-image.png"

function App() {

  return (
    <>
      <h1>StoryBook - Practice</h1>
      
      <Profile  
        name='Amanda Miguel'
        points="120"
        image={catImage} />
    </>
  )
}

export default App
