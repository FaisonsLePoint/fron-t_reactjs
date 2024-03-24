import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { accountService } from '@/_services';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';

const Login = () => {
    let navigate = useNavigate()

    // Attention ici mise en place de valeur par défaut pour travailler.
    // NE JAMAIS FAIRE CELA
    const [credentials, setCredentials] = useState({
        userName: 'mickpicart',
        password: 'Xucnh9np!'
    })

    let validateForm = true;
    
    // Gestion de la modification des champs du formulaire
    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    //     if ((credentials.userName.length > 0) && (credentials.password.length > 0)) {
    //         validateForm = true;
    // } else validateForm = false;
}

    // Soumission du formulaire
    const onSubmit = (e) => {
        e.preventDefault()
        accountService.login(credentials)
            .then(res => {
                // Sauvegarde du token et envoi vers admin
                accountService.saveToken(res.data.token)
                navigate('/admin', {replace: true})
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }
    
    return (
        <MDBContainer className="my-5">

            <MDBCard>
            <MDBRow className='g-0'>

                <MDBCol md='6'>
                <MDBCardImage src='../logo_app_big.png' alt="login form" className='rounded-start w-100' />
                </MDBCol>

                <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column mt-4'>

                    <div className='d-flex flex-row mt-5 mb-5'>
                    <img src='../logo_app_small.png' alt='A&P logo' className='logo mt-5' />
                    </div>

                    <form className="fw-normal my-4 pb-3 mt-5 was-validated" onSubmit={onSubmit}>
                    <MDBInput wrapperClass='mb-4' label='Identifiant' id='formControlLg1' type='text' size="lg" value={credentials.userName} onChange={onChange} required />
                    <MDBInput wrapperClass='mb-4' label='Mot de passe' id='formControlLg2' type='password' size="lg" value={credentials.password} onChange={onChange} required />
                    <MDBBtn className="mb-4 px-5" color='dark' size='lg' type='submit' disabled={!validateForm}>Se Connecter</MDBBtn>
                    </form>

                </MDBCardBody>
                </MDBCol>

            </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
};

export default Login;