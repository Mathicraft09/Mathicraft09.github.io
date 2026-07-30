import ReactMarkdown from 'react-markdown';
import KanbanMarkdown from './README_projet/kanban_readme.md?raw'; // L'extension ?raw importe le texte brut
import EcoTrackerMarkdown from './README_projet/eco-tracker.md?raw';
import './Projet.css'

function Projet() {
    return (
        <main>
        <div className="projets">
          <h2>Mes Projets</h2>
            <section>
                <article id="gestionnaire-kanban">
                    <h3>
                        Kanban 
                    </h3>
                    <p>
                        Gestionnaire de Note personnelle stocker en localStorage.                        
                    </p>
                    <div>
                        <details>
                            <summary>
                                Voir le README du projet
                            </summary>
                            <div>
                                <ReactMarkdown>
                                    {KanbanMarkdown}
                                </ReactMarkdown>
                            </div>
                        </details>
                      
                    </div>
                      <a className="link-btn" href="https://github.com/Mathicraft09/Kanban" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                </article>
                <article id="eco-tracker">
                    <h3>
                        Eco-Tracker
                    </h3>
                    <p>
                        Gestionnaire de Budget.
                    </p>
                    <div>
                        <details>
                            <summary>
                                Voir le README du projet
                            </summary>
                            <div>
                                <ReactMarkdown>
                                    {EcoTrackerMarkdown}
                                </ReactMarkdown>
                            </div>
                        </details>
                    </div>
                    <a className="link-btn" href="https://github.com/Mathicraft09/Eco-Tracker" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                </article>
            </section>
        </div>
        </main>
    )
}

export default Projet;
