import React from 'react'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { EmailFormData } from "../mock-data/configData";

export default function EmailForm() {
	const setValue = () => { console.log("helo") }
	const list = EmailFormData.map(item => (
		<span key={item.id} className="p-float-label w-full lg:max-w-xl mx-auto">
			<InputText id={item.id} className="w-full" value={item.value} onChange={(e) => setValue(e.target.value)} />
			<label className='pt-1 w-full' htmlFor={item.id}>{item.labelText}</label>
		</span>
	))

	return (
		<div className="relative px-10 mt-20 top-10 mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-10 gap-4 ">
			<div className=' text-xl font-sans text-center row-span-3'>
				Write a message
				<div className='text-center lg:text-right mt-2'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dolor est a cum molestias eum dolorum, veniam blanditiis excepturi cumque!
				</div>
			</div>
			{list}
			<label className='pt-1 text-lg flex md:justify-self-end row-span-4'>Message:</label>
			<InputTextarea className='row-span-3 h-52' autoResize />
		</div>
	)
}