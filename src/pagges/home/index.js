import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app"/>
        <div className='info'>
              <div>
                <input name="usuario" placeholder="@username do git"/>
                <button>Buscar</button>
              </div>
              <div className="perfil">
                <img src="https://avatars.githubusercontent.com/u/87847070?s=96&v=4" className="profile" alt='profile git' />
                <div>
                  <h3>Vinicius Carlos</h3>
                  <span>@viniciusjrcarlos</span>
                  <p>descrição</p>
                </div>
              </div>
              <hr />
              <div>
                <h4>Repositórios</h4>
              </div>
         </div>
      </div>
    </div>
   
  );
}

export default App;
