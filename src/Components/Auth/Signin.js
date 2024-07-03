import React, { useState } from 'react';
import LayoutSignin from '../../Views/SigninLayout';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import './Signin-CSS.scss';
import LanguageDropdown from '../Language-Dropdown/LanguageDropdown';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useForm } from "react-hook-form";
import logo from "../../images/logo.svg";

const Signin = () => {
    const [passwordType, setPasswordType] = useState(true);
    const [cbToggle, setCbToggle] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        alert(data.email + ', ' + data.password)
        console.log(data);
    }

    const { t } = useTranslation();
    const handleLanguageChange = (e) => {
        i18next.changeLanguage(e.target.value);
    }

    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

    const passwordTypeChange = () => {
        setPasswordType(!passwordType);
    }

    const handleCb = () => {
        setCbToggle(!cbToggle);
    }

    return (
        <LayoutSignin>
            <div className='logo'>
                <img src={logo} alt="logo NOVENTIQ" title="logo NOVENTIQ" />
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Container className='form-container'>
                    <Row>
                        <Col xs={12} md={3}>
                            <Form.Label htmlFor='email'>{t('email')}:</Form.Label>
                        </Col>
                        <Col>
                            <i className="bi bi-envelope"></i>
                            <Form.Control
                                id='email'
                                type="email"
                                placeholder="email@address.com"
                                {...register("email", {
                                    required: t('errorMessageEmail'),
                                    pattern: {
                                        value: emailPattern,
                                        message: t('errorMessageEmailValid'),
                                    },
                                })}
                            />
                            {errors.email && <div className='error-message'>{errors.email.message}</div>}
                        </Col>
                    </Row>
                    <Row className='marginBottom0'>
                        <Col xs={12} md={3}>
                            <Form.Label htmlFor='password'>{t('password')}:</Form.Label>
                        </Col>
                        <Col>
                            <i className="bi bi-lock"></i>
                            <Form.Control
                                id="password"
                                type={passwordType ? 'password' : 'text'}
                                placeholder={passwordType ? '••••••' : 'password'}
                                {...register("password", {
                                    required: t('errorMessagePassword'),
                                    pattern: {
                                        value: passwordPattern,
                                        message: t('errorMessagePasswordPattern'),
                                    },
                                })}
                            />
                            {errors.password && <div className='error-message'>{errors.password.message}</div>}
                            <i className="bi bi-eye" onClick={passwordTypeChange}></i>
                        </Col>
                    </Row>
                    <Row className='forgot-password marginTop0'>
                        <Col xs={12} md={3} className='col-hide'>&nbsp;</Col>
                        <Col><span>{t('forgotPassword')}</span></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                            <Form.Label>{t('language')}:</Form.Label>
                        </Col>
                        <Col>
                            <LanguageDropdown onChange={(e) => handleLanguageChange(e)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>&nbsp;</Col>
                        <Col>
                            <div className='col-rememberMe'>
                                {
                                    cbToggle ? <span onClick={handleCb}><i className="bi bi-toggle-on"></i></span> : <span onClick={handleCb}><i className="bi bi-toggle-off"></i></span>
                                }
                                <span className='rememberMe-text'>{t('rememberMe')}</span>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={cbToggle}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className='signin-button-row'>
                    <Button variant="primary" type='submit'>{t('logIn')}</Button>
                </Container>
            </Form>
        </LayoutSignin>
    )
}

export default React.memo(Signin);