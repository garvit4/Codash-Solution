import React from 'react'
import { SectionData } from "../mock-data/configData";

function Section() {

	const list = SectionData.map(item => (
		<div className='text-slate-100 font-medium animate-slide-top text-center flex p-5 text-xl max-w-sm' key={item.key}>
			<div>
				{item.icon}
			</div>
			{item.name}
		</div>
	))
	return (
		<div className='bg-cyan-700  mt-9 mx-auto h-fit'>
			<div className='flex justify-center text-3xl text-slate-100 pb-6'>
				we create awesomeness</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-5 md:gap-8">
				{list}
			</div>
		</div>
	)
}
export default Section