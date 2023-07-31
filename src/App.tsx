import { RouterProvider } from "react-router-dom"
import { appRouters } from "./routers"
import { Providers } from "./providers"

function App() {
  return (
    <Providers>
      <RouterProvider router={appRouters} />
    </Providers>
  )
}

export default App
