import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClock, faPlus, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import _ from 'lodash';
import Skeleton from 'react-loading-skeleton'
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import axios from 'axios';
import Swal from 'sweetalert2'
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import ServiceApi from '../../../api/MyApi';
import Select from 'react-select';

const iconPerson = new L.Icon({

});

const EditPenyelenggara = () => {
    const [listKlasifikasi, setListKlasifikasi] = useState([]);
    const [klasifikasiID, setKlasifikasiID] = useState('');
    const [addKategori, setAddKategori] = useState('');
    const location = useLocation();
    const myparam = location.state;
    const [penyelenggara, setPenyelenggara] = useState('');
    const [alamat, setAlamat] = useState('');
    const [email, setEmail] = useState('');
    const [telp, setTelp] = useState('');

    useEffect(() => {
        setPenyelenggara(myparam.nama_penyelenggara);
        setAlamat(myparam.alamat);
        setEmail(myparam.email);
        setTelp(myparam.telp);
    }, [])

    const updateData = async (e) => {
        e.preventDefault();

        const data = {
            'key': myparam.id,
            'nama_penyelenggara': e.target.elements.nama_penyelenggara.value,
            'alamat': e.target.elements.alamat.value,
            'email': e.target.elements.email.value,
            'telp': e.target.elements.telp.value,
        }

        console.log(data)

        new ServiceApi().editPenyelenggara(data)
            .then(response => {
                Swal.fire({
                    title: 'Sukses!',
                    html: '<i>' + myparam.nama_penyelenggara + ' berhasil diupdate</i>',
                    icon: 'success'
                }).then(function () {
                    window.location = '/master/penyelenggara'
                })
            }).catch(err => {
                Swal.fire({
                    title: 'Gagal!',
                    html: '<i>' + (err.response.data.data.nama_penyelenggara ? err.response.data.data.nama_penyelenggara + '<br/>' : '') + (err.response.data.data.alamat ? err.response.data.data.alamat + '<br/>' : '') + (err.response.data.data.email ? err.response.data.data.email + '<br/>' : '') + (err.response.data.data.telp ? err.response.data.data.telp + '<br/>' : '') + '</i>',
                    icon: 'error',
                    confirmButtonColor: '#0058a8',
                })
            });
    }

    return (
        <div className='main-animation'>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div>
                    <Link className="content-link" to={{ pathname: `/master/penyelenggara` }}><h3 className="content-title"><FontAwesomeIcon icon={faArrowLeft} size="sm" />&nbsp; Update Penyelenggara</h3></Link>
                </div>
            </div>

            <Form onSubmit={updateData}>
                <Card className="card-main-content">
                    <Card.Body>
                        <h4 className="card-main-content-title">Detail Penyelenggara</h4>
                        <p className="card-main-content-subtitle">Masukkan detail penyelenggara kegiatan</p>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2" className="mb-3">
                                Nama Penyelenggara
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" value={penyelenggara} name="nama_penyelenggara" placeholder="Masukkan nama penyelenggara" onChange={(e) => setPenyelenggara(e.target.value)} autoComplete="off"  />
                            </Col>
                            <Form.Label column sm="2" className="mb-3">
                                Alamat
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" value={alamat} name="alamat" placeholder="Masukkan alamat penyelenggara" onChange={(e) => setAlamat(e.target.value)} autoComplete="off"  />
                            </Col>
                            <Form.Label column sm="2" className="mb-3">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" value={email} name="email" placeholder="Masukkan email penyelenggara" onChange={(e) => setEmail(e.target.value)} autoComplete="off"  />
                            </Col>
                            <Form.Label column sm="2" className="mb-3">
                                No. Telp
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" value={telp} name="telp" placeholder="Masukkan no. telp penyelenggara" onChange={(e) => setTelp(e.target.value)} autoComplete="off"  />
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>

                <div className="button-submit d-flex flex-row justify-content-between align-items-center">
                    <div></div>
                    <div>
                        <Button className="content-button-submit" variant="primary" type="submit">Simpan</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default EditPenyelenggara;