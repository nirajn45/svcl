import React from 'react'



const Hero = () => {
    return (
        <div className='h-[90vh] text-white font-[Raleway]' style={{backgroundImage:`url(https://cofd2uo2s6.ufs.sh/f/LSgXeBx6oTrNJqg1PXsNHCBiEwX2zYqul5kc8reRTQMbL9jU)`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
            <div className="bg-[#000000b1] overlay h-full w-full flex flex-col justify-center">
                <div className="w-10/12 mx-auto py-6">
                   
                    <p className='text-4xl mb-6 font-bold'>
                    Infinite Horizons, One Campus

                    </p>
                    <p className='lg:text-lg text-sm font-sans font-normal text-justify lg:w-1/2 border-l-4 leading-6 border-[#fea700] pl-2'>
                    Swami Vivekanand College of Law was  Established in 2021 | Approved by BCI | Affiliated to Punjabi University under the aegis of Sh.Raghunath Rai Memorial Education & Charitable Trust. The governing body is headed by Sh. Ashwani Garg and Sh.Ashok Garg.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero