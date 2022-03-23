import { SiSpeedtest } from 'react-icons/si'
import { BsFileBarGraph } from 'react-icons/bs'
import { AiTwotoneSecurityScan } from 'react-icons/ai'
import { SiGoogleanalytics } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import {AiOutlineMobile} from 'react-icons/ai'
import {MdOutlineDesignServices} from 'react-icons/md'
const SectionData = [
	{
		key: "1",
		name: "lorem10asdnfdjas fbsdfbasdbf asbda kajsdbkjasdjkkja kajsdfkj adsjk sdalngjbasdgbaskdbgkbab a daskbga kd 1",
		icon: <SiSpeedtest className='h-9 w-9' />
	},
	{
		key: "2",
		name: "lorem10asdnfdjas fbsdfbasdbf asbda kajsdbkjasdjkkja kajsdfkj adsjk sdalngjbasdgbaskdbgkbab a daskbga kd 1",
		icon: <SiGoogleanalytics className='h-9 w-9' />
	},
	{
		key: "3",
		name: "lorem10asdnfdjas fbsdfbasdbf asbda kajsdbkjasdjkkja kajsdfkj adsjk sdalngjbasdgbaskdbgkbab a daskbga kd 1",
		icon: <SiSpeedtest className='h-9 w-9' />
	},
	{
		key: "4",
		name: "lorem10asdnfdjas fbsdfbasdbf asbda kajsdbkjasdjkkja kajsdfkj adsjk sdalngjbasdgbaskdbgkbab a daskbga kd 1",
		icon: <AiTwotoneSecurityScan className='h-9 w-9' />
	},
	{
		key: "5",
		name: "lorem10asdnfdjas fbsdfbasdbf asbda kajsdbkjasdjkkja kajsdfkj adsjk sdalngjbasdgbaskdbgkbab a daskbga kd 1",
		icon: <BsFileBarGraph className='h-9 w-9' />
	},
	{
		key: "6",
		name: "lorem10asdnfdjas fbsdfbasdbf asbda kajsdbkjasdjkkja kajsdfkj adsjk sdalngjbasdgbaskdbgkbab a daskbga kd 1",
		icon: <SiSpeedtest className='h-9 w-9' />
	}
]

const EmailFormData = [
	{
		id: '1',
		value: 'post 1',
		labelText: 'Name'
	},
	{
		id: '2',
		value: 'post 2',
		labelText: "Email address"
	},
	{
		id: '3',
		value: 'post 3',
		labelText: 'Subject'
	}
];

const footerData = [
	{ id: '1', value: 'post 1',labelText:'Home' },
	{ id: '2', value: 'post 2',labelText:"Our Work" },
	{ id: '3', value: 'post 3',labelText:'Services' },
	{ id: '4', value: 'post 3',labelText:'About us' },
	{ id: '5', value: 'post 3',labelText:'Verticals' },
];

const navDataConfig = {
	"nav": [
		{
			"label": "Home",
			"key": "home",
			"path": "/"
		},
		{
			"label": "Our Work",
			"key": "our-work",
			"path": "/our-work"
		},
		{
			"label": "Services",
			"key": "services",
			"path": "/services"
		},
		{
			"label": "About Us",
			"key": "about",
			"path": "/about"
		},
		{
			"label": "Verticals",
			"key": "verticals",
			"path": "/verticals"
		},
		{
			"label": "Contact Us",
			"key": "contact",
			"path": "/contact"
		}
	]
}

const cardData =  [
	{ id: '1', content: <div className='p-1 text-center'>WEB DEVLOPMENT</div>, icon: <FaGithub className='h-28 sm:w-20 w-10 mx-auto ' /> },
	{ id: '2', content: <div className='p-1 text-center'>MOBILE DEVLOPMENT</div> , icon: <AiOutlineMobile className='h-28 sm:w-20 w-10  mx-auto ' /> },
	{ id: '3', content: <div className='p-1 text-center'>PRODUCT DESIGN</div>, icon: <MdOutlineDesignServices className='h-28 sm:w-20 w-10 mx-auto ' /> },
	{ id: '4', content: <div className='p-1 text-center'>PRODU DESIGN</div>, icon: <MdOutlineDesignServices className='h-28 sm:w-20 w-10 mx-auto ' /> }
];

export {footerData,EmailFormData,SectionData,navDataConfig,cardData};