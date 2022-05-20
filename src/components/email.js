import React, {useState} from 'react';
import emailjs from 'emailjs-com';


const Email = ({correo}) => {

    console.log(correo)
    const frmContact = { userEmail:'', completeName:'', cellNumber:'', emailDetails:'' };
    const [contact,setContact] = useState(frmContact);
    const [showMessage, setShowMessage] = useState(false);
    const handleChange = e => { 
            const {name,value} = e.target;
            setContact({...contact,[name]:value}); 
    };
    const handleSubmit = e =>{
            e.preventDefault();
        
            emailjs.send('service_3x4m02u','template_f1yf7kj', contact, 'user_FknniEQl7e1Bqkq7yvNfD')
            .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setContact(frmContact);
                    setShowMessage(true);
            }, (err) => {
                    console.log('FAILED...', err);
            });
    }
  return (
    <div className="container-fluid pt-2 text-center">
		
		{ showMessage ? <div className="alert alert-success col-md-5 mx-auto" role="alert">¡Envio Exitoso, nos podremos en contacto contigo!</div> : ``}
	
		<form onSubmit={handleSubmit}>
            <div className="pt-3"><h1 className="font-weight-bold"> ¡¡ Contáctanos y envia tus dudas !! </h1>
            {//telefonos...
            }
            <h3>{correo}</h3>
            </div>
            
            <div className="pt-3 col-md-5 mx-auto">
                <div className="form-group text-left" > <h3>Tu correo</h3> <br/>
                    <input required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} className="form-control form-control-lg" placeholder="Tu email" />
                </div>
            </div>
            <div className="pt-3 col-md-5 mx-auto">
                <div className="form-group text-left"> <h3>Tu Nombre Completo</h3> <br/>
                    <input required type="text" value={contact.completeName} name="completeName" onChange={handleChange} className="form-control form-control-lg" placeholder="Nombre Completo"/>
                </div>
            </div>
            <div className="pt-3 col-md-5 mx-auto">
                <div className="form-group text-left" id="inputGroup-sizing-lg"> <h3>Número de contacto</h3> <br/>
                    <input value={contact.cellNumber} required type="text" name="cellNumber" onChange={handleChange}  className="form-control form-control-lg" placeholder="Número"  />
                </div>
            </div>
            <div className="pt-3 col-md-5 mx-auto"  >
                <div className="form-group text-left"> <h3>Escribe tus dudas y/o comentarios</h3> <br/>
                    <textarea required name="emailDetails" onChange={handleChange} className="form-control" placeholder="" value={contact.emailDetails}></textarea>
                </div>
            </div>
            <div className="pt-3 col-md-5 mx-auto text-left">
                <button className="btn btn-primary btn-lg">Enviar</button>
            </div>
		</form>	
	</div>
  );
}
export default Email;