import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Getsingle() {
    var { empno } = useParams()
    const [ename, setEname] = useState('')
    const [job, setJob] = useState('')
    const [mgr, setMgr] = useState('')
    const [hiredate, setHiredate] = useState('')
    const [sal, setSal] = useState('')
    const [comm, setComm] = useState('')
    const [deptno, setDeptno] = useState('')

    useEffect(() => {
        fetch('http://localhost:6383/getsingle/'+empno)
            .then(res => res.json())
            .then((data) => {
                setEname(data[0].ename)
                setJob(data[0].job)
                setMgr(data[0].mgr)
                setHiredate(data[0].hiredate)
                setSal(data[0].sal)
                setComm(data[0].comm)
                setDeptno(data[0].deptno)
            })
    })
    return (
        <>
            <h1 className="text-center">Product</h1>
            <table className="table table-striped mt-2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Manager</th>
                        <th>Job</th>
                        <th>Hiredate</th>
                        <th>Sal</th>
                        <th>Comm</th>
                        <th>Dept No</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{empno}</td>
                        <td>{ename}</td>
                        <td>{mgr}</td>
                        <td>{job}</td>
                        <td>{hiredate}</td>
                        <td>{sal}</td>
                        <td>{comm}</td>
                        <td>{deptno}</td>
                    </tr>
                </tbody>
            </table>
        </>
        );
}