
import React from 'react';
import { Card } from 'primereact/card';
import BackgroundImg from '../Images/homeBackground.jpeg'
import { cardData } from "../mock-data/configData";

function CodashCard() {
    const list = cardData.map(item => (
        <Card key={item.id} header={item.icon} title={item.content} subTitle={item.content} className='lg:w-80 w-60 h-80 md:h-96 shadow-black'>
            {/* <Card className="taillwind classes here"> */}
            {item.content}
        </Card>
    ))

    return (
        <>
        <div className='flex flex-col h-96 bg-center bg-cover' style={{ background: `url(${BackgroundImg}) ` }}>
            <div   className='w-full flex flex-col items-center justify-center my-auto h-48'>
                <h1 className='sm:-mb-30 animate-slide-top font-serif text-lg sm:text-4xl text-slate-100 font-medium text-center'>
                Leading Website And Apps Devlopment Company
                </h1>
                <div className='py-6 flex flex-col items-center justify-center'>
                <p className='text-slate-100 font-medium animate-slide-top text-center text-xs'>Turn your great ideas into profitable mobile and software products with our <br/>excellent
                mobile app development and software development services</p>
                </div>

            </div>    
        </div>
        <div className="-mt-20 transition-all grid grid-cols-1 gap-4 lg:grid-cols-3 md:gap-8 md:grid-cols-2 top-48 mx-auto">
                {list}
                </div>
        </>
    )
}

export default CodashCard