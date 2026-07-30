import './Accueil.css';
import './Projet.tsx';

type AccueilProps = {
  onSelectProjet: (anchorId: string) => void;
};

function Accueil({onSelectProjet}: AccueilProps) {
  return (
    <>
    <div className="conteneur-princ">
      <section className="description-perso">
        <h2>Ma Personne :</h2>
        <ul className="liste-description">
          <li>Développeur Backend & Étudiant (en plein domptage de serveurs)</li>
          <li>
            Langages :
            <ul className="liste-langages">
              <li><strong>Main Python :</strong> du script rapide aux architectures robustes</li>
              <li>Aussi à l'aise avec <strong>JavaScript / TypeScript</strong> quand le Frontend appelle à l'aide</li>
              <li>Bases en <strong>C# et C++</strong> (assez pour comprendre la mémoire et prier à la compilation)</li>
            </ul>
          </li>
          <li>Passionné d'algorithmique et de résolution de problèmes complexes</li>
          <li>En guerre ouverte avec le CSS (il n'avait qu'à pas commencer aussi)</li>
          <li>Traduit efficacement le café en code fonctionnel</li>
        </ul>
      </section>
      <section className="projets-cours">
        <h2>Mes Projets :</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Description</th>
                <th>Lien GitHub</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kanban Basique</td>
                <td>Petit gestionnaire de note et React en localStorage</td>
                <td>
                  <button 
                    className="link-btn" 
                    onClick={() => onSelectProjet('gestionnaire-kanban')}
                    >
                      Kanban
                  </button>
                </td>
              </tr>
              <tr>
                <td>Eco-Tracker</td>
                <td>Petit gestionnaire de budget en Svelte</td>
                <td>
                  <button 
                    className="link-btn" 
                    onClick={() => onSelectProjet('eco-tracker')}
                  >
                    Eco-Tracker
                  </button>               
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      </div>
    </>
  );
}

export default Accueil;
