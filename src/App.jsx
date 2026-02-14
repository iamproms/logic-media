import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ThankYou from './pages/ThankYou';
import RecruitmentForm from './pages/RecruitmentForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="media-recruitment" element={<RecruitmentForm />} />
        <Route path="thank-you" element={<ThankYou />} />
      </Route>
    </Routes>
  );
}

export default App;
