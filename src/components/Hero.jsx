import React from 'react'



const Hero = () => {
    return (
        <div className='h-[90vh] text-white' style={{backgroundImage:`url(https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAum9f113voJQ5AcTPoua6UY3sS7XMiGqmnIVwtL)`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
            <div className="bg-[#000000b1] overlay h-full w-full flex flex-col justify-center">
                <div className="w-10/12 mx-auto py-6">
                   
                    <p className='text-4xl mb-6 font-bold'>
                    Infinite Horizons, One Campus

                    </p>
                    <p className='text-md w-1/2 border-l-4 border-[#fea700] pl-2'>
                    Swami Vivekanand Group of Institutes was established in 2004 under the aegis of Sh.Raghunath Rai Memorial Education & Charitable Trust. The governing body is headed by Sh. Ashwani Garg and Sh.Ashok Garg.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero