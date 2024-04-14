import React from 'react'
import { useDispatch } from 'react-redux';
import { studentdata } from './Store/StudentSlice';
import mockdata from "../mockdata.json"
import Table from './Table';

const Home = () => {

    let dispath = useDispatch()
    dispath(studentdata(mockdata.students))

    return (
        <div className='home py-8'> <Table /></div>

    )
}

export default Home
