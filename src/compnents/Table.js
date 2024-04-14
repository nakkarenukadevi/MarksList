import React from 'react'
import { useSelector } from 'react-redux';

const Table = () => {

    let storedata = useSelector((student) => student.marks);

    return (
        <div className='mt-20'>
            <div className='flex justify-center items-center py-10 '>
                <table className="border-separate border-spacing-2 border border-slate-400 p-2 bg-slate-400 ">
                    <thead className=' bg-slate-400 '>
                        <tr className='bg-white w-full '>
                            <th className="border border-slate-300 p-4 " >Student id</th>
                            <th className="border border-slate-300 p-4 " >Student Name</th>

                            <th className="border border-slate-300 p-4 ">English</th>
                            <th className="border border-slate-300 p-4 ">Telugu</th>
                            <th className="border border-slate-300 p-4 ">science</th>
                            <th className="border border-slate-300 p-4 ">social</th>
                            <th className="border border-slate-300 p-4 ">Math</th>
                            <th className="border border-slate-300 p-4 ">City</th>
                            <th className="border border-slate-300 p-4 ">Total</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            storedata.sdata.map((stu) => {
                                return <tr className='bg-white text-center p-4 ' key={stu.id}>
                                    <td className="border border-slate-300 p-4">{stu.id}</td>
                                    <td className="border border-slate-300 p-4">{stu.name}</td>
                                    <td className="border border-slate-300 p-4">{stu.marks.english}</td>
                                    <td className="border border-slate-300 p-4">{stu.marks.telugu}</td>
                                    <td className="border border-slate-300 p-4">{stu.marks.science}</td>
                                    <td className="border border-slate-300 p-4">{stu.marks.social}</td>
                                    <td className="border border-slate-300 p-4">{stu.marks.math}</td>
                                    <td className="border border-slate-300 p-4">{stu.city}</td>
                                    <td className="border border-slate-300 p-4">{stu.marks.english + stu.marks.science + stu.marks.math + stu.marks.telugu + stu.marks.social}</td>
                                </tr>




                            })

                        }      </tbody>

                </table>
            </div>
            <div className='flex justify-center items-center mb-10'>
                <button className='px-8 py-4 bg-blue-600 text-white font-sans font-bold ' onClick={() => { }}>Back</button></div>
        </div>
    )
}

export default Table