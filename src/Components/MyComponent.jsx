import Marquee from 'react-fast-marquee';

const MarqueeComponent = Marquee.default || Marquee;

const MyComponent = () => {
  return (
    <MarqueeComponent speed={40} pauseOnHover={true} gradient={false}  className="bg-[#6b6060] text-white max-w-7xl mx-auto rounded-2xl mt-8 ">
      
        <p className="p-2 font-mono">
        Our weekly holiday is Tuesday, and we are open for the remaining six days, including Friday. From 10 am to 8 pm, you can also contact our hotline number 01317313100 for any information.
        
      </p>
      
      
    </MarqueeComponent>
  );
};

export default MyComponent;