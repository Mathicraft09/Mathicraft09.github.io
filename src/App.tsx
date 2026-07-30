import { useState, useEffect } from "react";
import "./App.css"
import Accueil from './Accueil';
import Projet from './Projet.tsx'
import Lien from './Lien.tsx'

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  // État pour savoir vers quelle ancre aller sur la page Projet
  const [targetAnchor, setTargetAnchor] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  // Fonction pour aller sur la page Projet + ouvrir l'ancre
  const handleGoToProjet = (anchorId: string) => {
    setTargetAnchor(anchorId);
    setCurrentPage(1); // On bascule sur la page Projet
  };
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        // On passe targetAnchor à Projet
        return <Projet targetAnchor={targetAnchor} setTargetAnchor={setTargetAnchor} />;
      case 2:
        return <Lien />;
      case 0:
      default:
        // On passe la fonction à Accueil
        return <Accueil onSelectProjet={handleGoToProjet} />;
    }
  };

  return (
    <>
      <header className="app-header header-container">
        <h1 className="header-logo" onClick={() => { setCurrentPage(0); setTargetAnchor(null); }} style={{ cursor: "pointer" }}>
          Mathieu Abbet
        </h1>
        <div className="nav-menu">
          <button className="nav-link" onClick={() => { setCurrentPage(1); setTargetAnchor(null); }}>Mes Projets</button>
          <button className="nav-link" onClick={() => { setCurrentPage(2); setTargetAnchor(null); }}>Mes Liens</button>
          <button className="theme-toogle-btn" onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>        
        
        </div>
      </header>

      <main>
        {renderPage()}
      </main>

      <footer>
        <div>© {new Date().getFullYear()} Mathieu Abbet</div>
      </footer>
    </>
  );
}export default App;
