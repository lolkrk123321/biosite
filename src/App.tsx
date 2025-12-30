import './App.css'

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1 className="nickname">lol_krk</h1>
        <p className="subtitle">Frontend Developer • Gamer • Anime fan</p>

        <div className="section">
          <h2>👾 About me</h2>
          <p>
            Я увлекаюсь программированием и играми.
            Люблю создавать интерфейсы и изучать новые технологии.
          </p>
        </div>

        <div className="section">
          <h2>🎮 Hobbies</h2>
          <ul>
            <li>Играю в <span>Dota 2</span></li>
            <li>Смотрю аниме</li>
            <li>Развиваюсь в программировании</li>
          </ul>
        </div>

        <div className="section">
          <h2>💻 Skills</h2>
          <div className="skills">
            <span>Java</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
