import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Companylist() {

    const [companylist, setCompanylist] = useState();
    useEffect(() => {
        (async () => {
            try {

                const response = await axios.get('http://localhost:3001/api/detail');
                console.log("The response for response api call",response.data.data)
                if (response.status === 200) {
                    setCompanylist(response.data.data );
                    console.log("Company list",companylist);
                }

            } catch (error) {
                console.log("Error in Get Api");
            }
        })()
    }, [])



    const value = ["aditya", "ankit", "delhi"]
    const navigate = useNavigate();
    return (
        <>
            <div>companylist</div>
            { companylist &&
                companylist.map((item, index) => (
                    <ul>
                        <li>{index} , {item.company_name}</li>
                        <li> <button className=' bg-slate-500 ' onClick={() => navigate('/detail', { state: { reportid: "hello" } })}  >click</button></li>
                    </ul>
                ))
            }
        </>
    )
}

export default Companylist