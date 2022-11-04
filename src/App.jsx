import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  
  const [data,setData] = useState({});
  const [modal,setModal] = useState(false);
  const [errors,setErrors] = useState({
    name: false,
    lastName: false,
    birthdate: false,
    phone: false,
  })
  const { handleSubmit, register } = useForm();

  const submit = d=>{
    setErrors({
      name: !Boolean(d.name.trim()),
      lastName: !Boolean(d.lastName.trim()),
      birthdate: !Boolean(d.birthdate),
      phone: !Boolean(d.phone.trim()),
    })

    if (Boolean(d.name.trim()) && Boolean(d.lastName.trim()) && Boolean(d.birthdate) && Boolean(d.phone.trim())) {
      setData(d);
      setModal(true);
    };
  };

  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div className='inputBx'>
          <div>
            <label htmlFor='name'>Nombre: </label>
            <input type={'text'} id='name' className={ errors.name ? 'bad' : '' } {...register('name')}/>
          </div>
          <div>
            <label htmlFor='lastName'>Apellido: </label>
            <input type={'text'} id='lastName' className={ errors.lastName ? 'bad' : '' } {...register('lastName')}/>
          </div>
        </div>
        <div className='inputBx'>
          <label htmlFor='birthdate'>Fecha de Nacimiento: </label>
          <input type={'date'} id='birthdate' className={ errors.birthdate ? 'bad' : '' } {...register('birthdate')}/>
        </div>
        <div className='inputBx'>
          <label htmlFor='phone'>Telefono: </label>
          <input type={'number'} id='phone' className={ errors.phone ? 'bad' : '' } {...register('phone')}/>
        </div>
        <button>Enviar</button>
      </form>
      {
        modal?
        <div className='modal'>
          <div className='blur' onClick={()=>setModal(false)}></div>
          <div className='content'>
            <div className='close' onClick={()=>setModal(false)}>
              <p>x</p>
            </div>
            <div>
              <p>Mi nombre es: {data.name}</p>
              <p>Mi apellido es: {data.lastName}</p>
              <p>Mi cumpleaños es: {data.birthdate}</p>
              <p>Mi numero es: {data.phone}</p>
            </div>
          </div>
        </div> :
        <></>
      }
    </div>
  )
}

export default App
