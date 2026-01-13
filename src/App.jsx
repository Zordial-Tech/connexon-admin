import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import User from './components/User';
import PlanManagement from './components/PlanManagement';
import UserPayments from './components/UserPayments'
import UserNetwork from './components/UserNetwork';
import Setting from './components/Setting';
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ResetPass from "./components/ResetPass"
import Activation from './components/Activation';
import Profile from './components/UserNetwork/profile.jsx';
import Terms_condition from './components/Terms_condition';
import Help_support from './components/Help_support';
import RevenueDashboard from './components/RevenueDashboard';
import RegisterAdmin from './components/RegisterAdmin';
import SuperAdminLogin from './components/SuperAdmin/login/index.jsx';
import AdminManagement from './components/SuperAdmin/AdminManagement/index.jsx';
import IntegrationDetail from './components/Integrations/IntegrationDetail/index.jsx';
import IntegrationList from './components/Integrations/IntegrationList/index.jsx';
import CreateIntegration from './components/Integrations/CreateIntegration/index.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/resetNewPassword/:token" element={<ResetPass />} />
        <Route path="/activate/:token" element={<Activation />} />
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/super-admin/login" element={<SuperAdminLogin />} />
        <Route path="/super-admin/admin-management" element={<AdminManagement />} />
        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/usernetwork/profile/:id"
            element={<Profile />}
          />
          <Route index element={<Navigate to="/revenue-dashboard" replace />} />
           <Route path="revenue-dashboard" element={<RevenueDashboard />} />
          <Route path="user" element={<User />} />
          <Route path="plan-management" element={<PlanManagement />} />
          <Route path="User-Payments" element={<UserPayments />} />
          <Route path="Help_support" element={<Help_support />} />
          <Route path="UserNetwork" element={<UserNetwork />} />
          <Route path="UserNetwork/profile" element={<Profile />} />
          <Route path="terms_condition" element={<Terms_condition />} />
          <Route path="setting" element={<Setting />} />
          <Route path="integration-list" element={<IntegrationList />} />
          <Route path="integration-detail/:id" element={<IntegrationDetail />} />
          <Route path="create-integration" element={<CreateIntegration />} />
         
        </Route>
        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
