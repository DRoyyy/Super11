import bgShadow from "../../assets/images/bg-shadow.png";

const Subscription = () => {
    return (
        <div className="absolute inset-x-0 -translate-y-1/2 max-w-6xl mx-auto p-5 border-2 rounded-2xl">
            <div className="bg-white bg-cover bg-center flex flex-col items-center rounded-xl gap-y-4 py-20"
            style={{ backgroundImage: `url(${bgShadow})` }}
        >
            <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-[#131313B3]">Get the latest updates and news right in your inbox!</p>
            <div className="flex gap-2">
                <input className="w-[300px] border-gray-200 border rounded-lg text-center text-sm" type="email" placeholder="Enter Your Email Address" />
                <button className="px-3 py-2 rounded-xl font-medium bg-yellow-400">Subscribe</button>
            </div>
        </div>
        </div>
        
    );
};

export default Subscription;