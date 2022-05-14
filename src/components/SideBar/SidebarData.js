import React from "react";
import * as RiIcons from "react-icons/ri";
import {GoPrimitiveDot as Dot} from "react-icons/go";

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <img src={require('../../icons/icon-dashboard.svg').default} alt='mySvgImage' />,
    },
    {
        title: "Rekapitulasi",
        path: "/jadwal_wfh",
        icon: <img src={require('../../icons/icon-rekapitulasi.svg').default} alt='mySvgImage' />,
    },
    {
        title: "Kegiatan",
        path: "#",
        icon: <img src={require('../../icons/icon-kegiatan.svg').default} alt='mySvgImage' />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,

        subNav: [
            {
                title: "Daftar Kegiatan",
                path: "/pengajuan_izin",
                icon: <Dot />,
                cName: "sub-nav",
            },
            {
                title: "Tambah Pelatihan",
                path: "/reports/reports2",
                icon: <Dot />,
                cName: "sub-nav",
            },
            {
                title: "Tambah Pendidikan",
                path: "/reports/reports3",
                icon: <Dot />,
            },
        ],
    },
    {
        title: "Pencatatan",
        path: "#",
        icon: <img src={require('../../icons/icon-pencatatan.svg').default} alt='mySvgImage' />,
    },
    {
        title: "Analisa Kompetensi",
        path: "#",
        icon: <img src={require('../../icons/icon-pegawai.svg').default} alt='mySvgImage' />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,

        subNav: [
            {
                title: "Lihat Dashboard",
                path: "/pengajuan_izin",
                icon: <Dot />,
                cName: "sub-nav",
            },
            {
                title: "Kompetensi Pegawai",
                path: "/reports/reports2",
                icon: <Dot />,
                cName: "sub-nav",
            },
            {
                title: "Update Nilai Ujikom",
                path: "/reports/reports3",
                icon: <Dot />,
            },
        ],
    },
    {
        title: "Riwayat Aktivitas",
        path: "#",
        icon: <img src={require('../../icons/icon-analisis.svg').default} alt='mySvgImage' />,
    },
    {
        title: "Master Data",
        path: "#",
        icon: <img src={require('../../icons/icon-master-data.svg').default} alt='mySvgImage' />,

        iconClosed: <RiIcons.RiArrowDownSLine />,
        iconOpened: <RiIcons.RiArrowUpSLine />,

        subNav: [
            {
                title: "Pegawai",
                path: "/messages/message1",
                icon: <Dot />,
            },
            {
                title: "Penyelenggara",
                path: "/messages/message2",
                icon: <Dot />,
            },
            {
                title: "Kompetensi",
                path: "/master/kompetensi",
                icon: <Dot />,
            },
            {
                title: "Sub Kompetensi",
                path: "/messages/message2",
                icon: <Dot />,
            },
            {
                title: "Bentuk & Jalur Komp",
                path: "/messages/message2",
                icon: <Dot />,
            },
            {
                title: "Jenis Kepegawaian",
                path: "/messages/message2",
                icon: <Dot />,
            },
            {
                title: "Pangkat & Golongan",
                path: "/messages/message2",
                icon: <Dot />,
            },
            {
                title: "Jabatan",
                path: "/master/jabatan",
                icon: <Dot />,
            },
            {
                title: "Klasifikasi Jabatan",
                path: "/messages/message2",
                icon: <Dot />,
            },
            {
                title: "Kategori Jabatan",
                path: "/messages/message2",
                icon: <Dot />,
            },
            {
                title: "Unit Kerja",
                path: "/messages/message2",
                icon: <Dot />,
            },
            {
                title: "Penempatan",
                path: "/messages/message2",
                icon: <Dot />,
            },
            {
                title: "Role Akses",
                path: "/messages/message2",
                icon: <Dot />,
            },
            {
                title: "Manajemen User",
                path: "/messages/message2",
                icon: <Dot />,
            },
        ],
    },
];