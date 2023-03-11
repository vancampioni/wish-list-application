import { BsSearch } from 'react-icons/bs'

const Header = () => {

  return (
    <>
      <div>
        <div>
          <h1>MagaNets</h1>
        </div>
        <div>
          <p>Cidade: São Paulo</p>
        </div>
        <div>
          <span>Central de atendimento</span>
        </div>
        <div>
          <p>Lista de desejos</p>
        </div>
      </div>
      <div>
        <form autoComplete='off'>
          <button><BsSearch /></button>
          <input type='search' placeholder='Busca'/>
        </form>
      </div>
    </>
  )
}

export default Header
