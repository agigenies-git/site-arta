import { Routes, Route, Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollManager from './components/ScrollManager'
import { usePageMeta } from './hooks/usePageMeta'
import Home from './pages/Home'
import Profissionais from './pages/Profissionais'
import AreasDeAtuacao from './pages/AreasDeAtuacao'
import Novidades from './pages/Novidades'

export default function App() {
  const { pathname } = useLocation()
  usePageMeta(pathname)

  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profissionais" element={<Profissionais />} />
          <Route path="/areas-de-atuacao" element={<AreasDeAtuacao />} />
          <Route path="/novidades" element={<Novidades />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
