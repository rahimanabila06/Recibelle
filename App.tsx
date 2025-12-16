import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppRoute } from './types';
import { Splash } from './pages/Splash';
import { Auth } from './pages/Auth';
import { Onboarding } from './pages/Onboarding';
import { Home } from './pages/Home';
import { Wardrobe } from './pages/Wardrobe';
import { OutfitDetails } from './pages/OutfitDetails';
import { ScanItem } from './pages/ScanItem';
import { EditItem } from './pages/EditItem';
import { MixMatch } from './pages/MixMatch';
import { ReWear } from './pages/ReWear';
import { Thrift } from './pages/Thrift';
import { StyleSwap } from './pages/StyleSwap';
import { LocationPage } from './pages/Location';
import { Profile } from './pages/Profile';
import { Visualizer } from './pages/Visualizer';
import { Planner } from './pages/Planner';
import { BottomNav } from './components/BottomNav';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const hideNavRoutes = [
    AppRoute.SPLASH,
    AppRoute.AUTH,
    AppRoute.ONBOARDING,
    AppRoute.SCAN,
    AppRoute.EDIT_ITEM,
    AppRoute.VISUALIZER,
    AppRoute.THRIFT,
    AppRoute.SEARCH_LOCATION,
    AppRoute.SET_LOCATION,
    AppRoute.STYLE_SWAP,
    AppRoute.MIX_MATCH,
    AppRoute.RE_WEAR,
    AppRoute.OUTFIT_DETAILS,
    AppRoute.PLANNER
  ];

  const shouldShowNav = !hideNavRoutes.includes(location.pathname as AppRoute);

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background-light shadow-2xl overflow-hidden relative">
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {children}
      </div>
      {shouldShowNav && <BottomNav />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path={AppRoute.SPLASH} element={<Splash />} />
          <Route path={AppRoute.AUTH} element={<Auth />} />
          <Route path={AppRoute.ONBOARDING} element={<Onboarding />} />
          <Route path={AppRoute.HOME} element={<Home />} />
          <Route path={AppRoute.WARDROBE} element={<Wardrobe />} />
          <Route path={AppRoute.OUTFIT_DETAILS} element={<OutfitDetails />} />
          <Route path={AppRoute.SCAN} element={<ScanItem />} />
          <Route path={AppRoute.EDIT_ITEM} element={<EditItem />} />
          <Route path={AppRoute.MIX_MATCH} element={<MixMatch />} />
          <Route path={AppRoute.RE_WEAR} element={<ReWear />} />
          <Route path={AppRoute.THRIFT} element={<Thrift />} />
          <Route path={AppRoute.STYLE_SWAP} element={<StyleSwap />} />
          <Route path={AppRoute.SEARCH_LOCATION} element={<LocationPage />} />
          <Route path={AppRoute.SET_LOCATION} element={<LocationPage />} />
          <Route path={AppRoute.PROFILE} element={<Profile />} />
          <Route path={AppRoute.VISUALIZER} element={<Visualizer />} />
          <Route path={AppRoute.PLANNER} element={<Planner />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;