import { ModelView } from './components/ModelView'

const App = () => {
  

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh'  }} >
      <div style={{ backgroundColor: 'gray', padding: '10px', width: '100%' }}>
      </div>
      <div style={{ backgroundColor: 'black', padding: '10px', width: '100%' , overflow:'hidden' }} >

      <ModelView></ModelView>
      
      </div>
    </div>
  )
}

export default App

// style={{ padding: '10px', width: '100%' , height:'100%' , objectFit:'contain' }}