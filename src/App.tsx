import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import BuyersDashboard from '../pages/BuyerDashboard';
import FarmersDashboard from '../pages/FarmerDashboard';
import SellerDashboard from '../pages/SellerDashboard';
import InvestorDashboard from '../pages/InvestorDashboard';
import Home from '../pages/Home';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/buyer" element={<BuyersDashboard />} />
        <Route path="/farmer" element={<FarmersDashboard />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/investor" element={<InvestorDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
