import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { studentdata } from './Store/StudentSlice';
const Header = () => {
    let StudentData = useSelector((stu) => stu.marks)
    let [search, setSearch] = useState('');


    let dispath = useDispatch()

    const handleSearch = () => {

        let x = StudentData.sdata.filter((student) => {
            if (student.name == search) {
                return true
            } else if (student.city == search) {
                return true
            } else {
                return false
            }
        })
        console.log(x);
        dispath(studentdata(x))


    }
    return (
        <div className=' text-white font-sans text-2xl text-center p-5  shadow bg-black  flex justify-between items-center w-full fixed'>
            <div className='mx-40'>Marks List</div>
            <div><input type="text" className='text-black p-2 rounded-lg' onChange={(e) => {
                setSearch(e.target.value)

            }} /><button className='text-black bg-white mx-3 p-2 rounded-lg' onClick={() => {
                if (search !== "") {
                    handleSearch()
                }
            }}>search</button>
            </div>

        </div>
    )
}

export default Header;