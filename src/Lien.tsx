import './Lien.css'

function Lien () {
  return (
    <div className="Liens">
      <h2>Mes Liens</h2>
      
      <section className="liens-section">
        <h3>Réseaux Sociaux</h3>
        <ul>
          <li>
            <a href="https://github.com/Mathicraft09" target="_blank" rel="noopener noreferrer" className="link-btn">
              GitHub
            </a>
          </li>
        </ul>
      </section>

      <section className="liens-section">
        <h3>Me contacter</h3>
        <ul>
          <li>
            <span>Mail : </span>
            <a href="mailto:abbetmathieu.am@gmail.com" className="email-link">
              abbetmathieu.am@gmail.com
            </a>
          </li>
        </ul>
      </section>
    </div>
  )       
}

export default Lien
