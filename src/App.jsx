import AppBimarq3d from "./components/AppBimarq3d"
import { AplicacionProvider } from "./context/AplicacionProvider"

const App = () => {
  return (
    <AplicacionProvider>
      <AppBimarq3d />
    </AplicacionProvider>
  )
}

export default App