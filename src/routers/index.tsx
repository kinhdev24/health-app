import { CLIENT_URL } from "@/constants/client-url"
import { Columns } from "@/pages/Colums"
import Dashboard from "@/pages/Dashboard"
import { Profile } from "@/pages/Profile"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

export const appRouters = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={CLIENT_URL.DASHBOARD} element={<Dashboard />} />
      <Route path={CLIENT_URL.COLUMNS} element={<Columns />} />
      <Route path={CLIENT_URL.PROFILE} element={<Profile />} />
    </>
  )
)
