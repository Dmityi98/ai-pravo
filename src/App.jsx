import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Компоненты
import Header from './components/Header';
import Footer from './components/Footer';

// Страницы
import Home from './components/Home';
import Articles from './components/Articles';
import ArticleDetail from './components/ArticleDetail';
import Contact from './components/Contact';
import Legal from './components/Legal';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            
            {/* 404 - Страница не найдена */}
            <Route 
              path="*" 
              element={
                <div className="container" style={{ 
                  padding: '80px 24px', 
                  textAlign: 'center',
                  minHeight: '60vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <h1 style={{ 
                    fontSize: '4rem', 
                    color: 'var(--purple-primary)',
                    marginBottom: '16px'
                  }}>
                    404
                  </h1>
                  <h2 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>
                    Страница не найдена
                  </h2>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    marginBottom: '24px'
                  }}>
                    Возможно, она была удалена или перемещена
                  </p>
                  <a href="/" className="btn">← Вернуться на главную</a>
                </div>
              } 
            />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;