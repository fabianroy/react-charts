import axios from "axios";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Oval } from 'react-loader-spinner'


const Phones = () => {

    const [loading, setLoading] = useState(true);

    const [phones, setPhones] = useState([]);

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phoneWithData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phoneWithData);
            setLoading(false);
        })

    return (
        <div>
            <h3 className="my-12 text-center text-3xl">Phone : {phones.length}</h3>

            {
                loading &&
                <div className="w-fit mx-auto">
                    <Oval
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            }

            <BarChart width={1200} height={400} data={phones}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Phones;