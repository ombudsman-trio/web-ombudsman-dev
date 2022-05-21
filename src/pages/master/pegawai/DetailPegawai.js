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

const iconPerson = new L.Icon({

});


const DetailPegawai = () => {
    const location = useLocation();
    const myparam = location.state;

    return (
        <div className='main-animation'>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div>
                    <Link className="content-link" to={{ pathname: `/master/pegawai` }}><h3 className="content-title"><FontAwesomeIcon icon={faArrowLeft} size="sm" />&nbsp; Detail Pegawai</h3></Link>
                </div>
            </div>

            <Form>
                <Card className="card-main-content">
                    <Card.Body>
                        <div className="d-flex flex-row justify-content-between">
                            <div>
                                <h4 className="card-main-content-title">Detail Pegawai</h4>
                                <p className="card-main-content-subtitle">Data lengkap dari pegawai.</p>
                            </div>
                            <div>
                                <Button className="btn-detail" variant="link"><BsIcons.BsThreeDots /></Button>
                            </div>
                        </div>
                        <Row>
                            <Col lg="3" md="3"><p>Nama</p></Col>
                            <Col className="text-secondary" lg="3" md="3"><p>{myparam.nama_pegawai ? myparam.nama_pegawai : '-'}</p></Col>

                            <Col lg="3" md="3"><p>Klasifikasi jabatan</p></Col>
                            <Col className="text-secondary" lg="3" md="3"><p>{myparam.klasifikasi_jabatan ? myparam.klasifikasi_jabatan : '-'}</p></Col>

                            <Col lg="3" md="3"><p>Jenis Kepegawaian</p></Col>
                            <Col className="text-secondary" lg="3" md="3"><p>{myparam.jenis_kepegawaian ? myparam.jenis_kepegawaian : '-'}</p></Col>

                            <Col lg="3" md="3"><p>Kategori jabatan</p></Col>
                            <Col className="text-secondary" lg="3" md="3"><p>{myparam.kategori_jabatan ? myparam.kategori_jabatan : '-'}</p></Col>

                            <Col lg="3" md="3"><p>Pangkat</p></Col>
                            <Col className="text-secondary" lg="3" md="3"><p>{myparam.pangkat ? myparam.pangkat : '-'}</p></Col>

                            <Col lg="3" md="3"><p>Unit Kerja</p></Col>
                            <Col className="text-secondary" lg="3" md="3"><p>{myparam.unit_kerja ? myparam.unit_kerja : '-'}</p></Col>

                            <Col lg="3" md="3"><p>Golongan</p></Col>
                            <Col className="text-secondary" lg="3" md="3"><p>{myparam.golongan ? myparam.golongan : '-'}</p></Col>

                            <Col lg="3" md="3"><p>Penempatan</p></Col>
                            <Col className="text-secondary" lg="3" md="3"><p>{myparam.penempatan ? myparam.penempatan : '-'}</p></Col>

                            <Col lg="3" md="3"><p>Jabatan</p></Col>
                            <Col className="text-secondary" lg="3" md="3"><p>{myparam.jabatan ? myparam.jabatan : '-'}</p></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Form>
        </div>
    );
};

export default DetailPegawai;