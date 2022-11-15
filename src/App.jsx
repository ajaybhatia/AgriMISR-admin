import { BrowserRouter, Route, Routes } from "react-router-dom";

import CropCategories from "./pages/Crops/CropCategories";
import CropList from "./pages/Crops/CropList";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="crops">
            <Route path="categories" element={<CropCategories />} />
            <Route path="list" element={<CropList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
