import Priceoption from "../priceoption/Priceoption";


const Priceoptions = () => {

    const products = [
        {
            "id": 0,
            "name": "1GB Cloud",
            "feature": "300Mbps Bandwidth",
            "price": 0.49
        },

        {
            "id": 1,
            "name": "10GB Cloud",
            "feature": "500Mbps Bandwidth",
            "price": 1.99
        },
        {
            "id": 2,
            "name": "100GB Cloud",
            "feature": "800Mbps Bandwidth",
            "price": 10.99
        },
        {
            "id": 3,
            "name": "200GB Cloud",
            "feature": "1Gbps Bandwidth",
            "price": 15.99
        },
        {
            "id": 4,
            "name": "500GB Cloud",
            "feature": "1Gbps Bandwidth",
            "price": 30.99
        },
        {
            "id": 5,
            "name": "1TB Cloud",
            "feature": "1.5Gbps Bandwidth",
            "price": 50.99
        },
        {
            "id": 6,
            "name": "2TB Cloud",
            "feature": "2Gbps Bandwidth",
            "price": 75.99
        },
        {
            "id": 7,
            "name": "5TB Cloud",
            "feature": "4Gbps Bandwidth",
            "price": 125.99
        },
        {
            "id": 8,
            "name": "10TB Cloud",
            "feature": "10Gbps Bandwidth",
            "price": 200.99
        },
        {
            "id": 11,
            "name": "100TB Cloud",
            "feature": "15Gbps Bandwidth",
            "price": 1500.99
        },
        {
            "id": 12,
            "name": "100TB Cloud",
            "feature": "20Gbps Bandwidth",
            "price": 1800.99
        },
        {
            "id": 13,
            "name": "Unlimited Cloud",
            "feature": "20Gbps Bandwidth",
            "price": 9900.99
        }
    ];

    return (
        <div className="m-12 w-fit mx-auto text-center">
            <h2 className="text-5xl mb-12">Exlpore our new packages !!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-fit mx-auto">
                {
                    products.map(product => <Priceoption key={product.id} product={product}></Priceoption>)
                }
            </div>
        </div>
    );
};

export default Priceoptions;