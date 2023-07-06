import { Navbar } from "./Global/Navbar"
import Sidebar from "./Global/Sidebar";




const data = [
    {
        name: "Akram",
        age: 21,
        gender: "Male",
        Roll_Number: "2019meb1235",
    },
    {
        name: "Michael",
        age: 22,
        gender: "FeMale",
        Roll_Number: "2019csb1225",
    },
    { name: "Manisha", age: 22, gender: "Female", Roll_Number: "2018meb1236" },
    { name: "Tanishq", age: 21, gender: "Male", Roll_Number: "2018eeb1190" },
    { name: "Stark", age: 19, gender: "Female", Roll_Number: "2019csb1212" },
];

export const Campaings = () => {
    return (
        <>
            <section className='Sidebar'>
                <div className='dashboard-box'>
                    <div className='container-fluid'>
                        <Navbar />
                        <div className='row'>
                            <Sidebar />
                            <div className='col-10'>
                                <div className='tables'>
                                    <div className="App">
                                        <h1>Students Table</h1>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Age</th>
                                                    <th>Gender</th>
                                                    <th>Roll Number</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((value, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td>{value.name}</td>
                                                            <td>{value.age}</td>
                                                            <td>{value.gender}</td>
                                                            <td>{value.Roll_Number}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}