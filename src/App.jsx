import './App.css'

import { AppBar, Toolbar, Typography } from "@mui/material"
import CarList from "./components/CarList"

function App() {

  return (
    <>
      <AppBar position="static" style={{width: "100%"}}>
        <Toolbar>
          <Typography variant="h6">Car App</Typography>
        </Toolbar>
      </AppBar>
      <CarList />
    </>
  )
}

export default App
