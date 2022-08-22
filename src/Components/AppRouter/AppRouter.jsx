import { Route, Routes } from "react-router-dom"
import { Home } from "../Sites/Home/Home"

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
}