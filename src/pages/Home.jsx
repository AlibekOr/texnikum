import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {useRef, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Stack} from '@mui/material';
import licensePDF from '../assets/files/license.pdf'
import toast, {Toaster} from 'react-hot-toast';
import {url} from '../../utils/Url';

const Home = () => {
    const [direction, setDirection] = useState('');
    const [typeOfEducation, setTypeOfEducation] = useState('');

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const middleNameRef = useRef()
    const passportRef = useRef()
    const dtmTestBaliRef = useRef()
    const dateOfBirthRef = useRef()
    const phoneNumberRef = useRef()
    const phoneNumber2Ref = useRef()

    const handleChangeDirection = (event) => {
        setDirection(event.target.value);
    };

    const handleChangeTypeOfEducation = (event) => {
        setTypeOfEducation(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        // const handleDelete = async (id) => {
        toast('Please wait...')
        const response = await fetch(`${url}/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //   'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(
                // {
                //     first_name: firstNameRef.current.value,
                //     last_name: lastNameRef.current.value,
                //     middle_name: middleNameRef.current.value,
                //     date_of_birth: dateOfBirthRef.current.value,
                //     phone_number: phoneNumberRef.current.value,
                //     secondary_phone_number: phoneNumber2Ref.current.value,
                //     direction: direction,
                //     type_of_education: typeOfEducation,
                //     pasportSeriyaRaqami: passportRef.current.value,
                //     dtmTestBali: dtmTestBaliRef.current.value,
                //     source: "website",
                // }
                {
                    ism: firstNameRef.current.value,
                    familiya: lastNameRef.current.value,
                    otasiningIsmi: middleNameRef.current.value,
                    tugilganSanasi: dateOfBirthRef.current.value,
                    telefonRaqami: phoneNumberRef.current.value,
                    qoshimchaRaqam: phoneNumber2Ref.current.value,
                    yonalish: direction,
                    talimTuri: typeOfEducation,
                    pasportSeriyaRaqami: passportRef.current.value,
                    dtmTestBali: dtmTestBaliRef.current.value,
                    source: "website",
                }
            )
        });

        if (response.ok) {
            toast.success('Success!')
            window.location.reload()
        }
        //   }

    }
    return (
        <div className='py-10 min-h-screen flex flex-col justify-center items-center'>
            <div className='mb-4'>
                <p className='text-xl font-bold text-center'>ARALBOYI MEDICINA HÁM TRANSPORT TEXNIKUMÍ</p>
            </div>
            <div className='h-32 mb-4'>
                <img className='h-full' src="/logo-aralboyi-texnikumi.png" alt="Logo"/>
            </div>
            <form className="max-w-md mx-auto md:shadow p-10 md:border md:rounded-md" onSubmit={handleSubmit}>
                <div className='flex justify-center mb-4'>
                    <span className='font-bold text-blue-300'>Hújjet tapsırıw ushın formanı toltırıń</span>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input ref={firstNameRef} type="text" name="floating_first_name" id="floating_first_name"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_first_name"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Atı</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input ref={lastNameRef} type="text" name="floating_last_name" id="floating_last_name"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_last_name"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Familiyası</label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input ref={middleNameRef} type="middle_name" name="floating_middle_name" id="floating_middle_name"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_middle_name"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ákesiniń
                        atı</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input ref={passportRef} type="passport" name="floating_passport" id="floating_passport"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_passport"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pasport
                        seriya nomer</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input ref={dtmTestBaliRef} type="dtm_test" name="floating_dtm_test" id="floating_dtm_test"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_dtm_test"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DTM
                        test balı</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input ref={dateOfBirthRef} type="date" name="floating_date_of_birth" id="floating_date_of_birth"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           required/>
                    <label htmlFor="floating_date_of_birth"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tuwılǵan
                        sánesi</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input ref={phoneNumberRef} type="text" name="floating_phone" id="floating_phone"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_phone"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefon
                            nomer</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input ref={phoneNumber2Ref} type="text" name="floating_phone2" id="floating_phone2"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_phone2"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Qosımsha
                            telefon nomer</label>
                    </div>
                </div>
                <Stack spacing={2}>
                    <FormControl variant="standard" sx={{minWidth: 120, width: '100%'}}>
                        <InputLabel id="demo-simple-select-standard-label-2">Jónelisti tańlań</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label-2"
                            id="demo-simple-select-standard-1"
                            value={direction}
                            onChange={handleChangeDirection}
                            label="Jónelisti tańlań"
                            required
                        >
                            {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
                            <MenuItem value="stomatologiya-ishi">Стоматология иши</MenuItem>
                            <MenuItem value="hamshiralik-ishi">Ҳамширалик иши</MenuItem>
                            <MenuItem value="markazlashtirilgan-post-operatori">Марказлаштирилган пост
                                оператори</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="standard" sx={{minWidth: 120, width: '100%'}}>
                        <InputLabel id="demo-simple-select-standard-label-2">Tálim túrin tańlań</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label-2"
                            id="demo-simple-select-standard-2"
                            value={typeOfEducation}
                            onChange={handleChangeTypeOfEducation}
                            label="Tálim túrin tańlań"
                            required
                        >
                            {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
                            <MenuItem value="kunduzgi">Kúndizgi</MenuItem>
                            <MenuItem value="sirtqi">Sırtqı</MenuItem>
                            <MenuItem value="keshki">Keshki</MenuItem>
                            {
                                direction === "markazlashtirilgan-post-operatori" && (
                                    <MenuItem value="dual">Dual</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Stack>
                <div className='flex justify-end mt-4'>
                    <Button type="submit" variant="contained" endIcon={<SendIcon/>}>Jiberiw</Button>
                </div>
            </form>
            <p className='mt-10 font-semibold text-gray-600'>Aralboyı medicina hám transport texnikumı</p>
            <a className='text-blue-600 hover:underline' href={licensePDF} download>Mámleketlik licenziya</a>
            <Toaster/>
        </div>
    )
}

export default Home