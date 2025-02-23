import footerLogo from "../../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <div className="bg-[#06091A]">
      <div className="flex flex-col items-center justify-center pt-60">
        <img src={footerLogo} alt="" />
      </div>

      <div className="flex justify-center items-center gap-20 max-w-screen-2xl mx-auto py-20">
        <div className="w-1/3 text-white flex flex-col gap-y-2">
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="w-[300px] text-[#FFFFFF99]">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="w-1/3 text-white flex flex-col gap-y-2">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="text-[#FFFFFF99]">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="w-1/3 flex flex-col gap-y-2">
          <h2 className="text-lg font-semibold text-white"> Subscribe</h2>
          <p className="w-[300px] text-[#FFFFFF99]">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex gap-2">
            <input
              className="w-[250px] border-gray-200 border rounded-lg text-center text-sm"
              type="email"
              placeholder="Enter Your Email Address"
            />
            <button className="px-3 py-2 rounded-xl font-medium text-sm bg-yellow-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr />
      <h3 className="text-center text-white py-10">
        2025 All Rights Reserved ©Super 11{" "}
      </h3>
    </div>
  );
};

export default Footer;
