import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { url } from '../../utils/Url';
import { MdClose } from 'react-icons/md';
import { UpdateModalContext } from '../context/updateModalContext';
import { toast } from 'react-toastify';

const UpdateModal = () => {
    const { updateModal, setUpdateModal } = useContext(UpdateModalContext)
    const [data, setData] = useState(null)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [passport, setPassport] = useState('');
    const [dtmTestBali, setDtmTestBali] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumber2, setPhoneNumber2] = useState('');
    const [direction, setDirection] = useState('');
    const [typeOfEducation, setTypeOfEducation] = useState('');

    useEffect(() => {
        if (updateModal.id) {
            fetch(`${url}/users/${updateModal.id}`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFirstName(data.ism || '');
                setLastName(data.familiya || '');
                setMiddleName(data.otasiningIsmi || '');
                setPassport(data.pasportSeriyaRaqami || '');
                setDtmTestBali(data.dtmTestBali || '');
                setDateOfBirth(data.tugilganSanasi || '');
                setPhoneNumber(data.telefonRaqami || '');
                setPhoneNumber2(data.qoshimchaRaqam || '');
                setDirection(data.yonalish || '');
                setTypeOfEducation(data.talimTuri || '');
            })
            .catch(error => console.error(error));
        }
    }, [updateModal.id])

    const handleChangeDirection = (event) => {
        setDirection(event.target.value);
    };

    const handleChangeTypeOfEducation = (event) => {
        setTypeOfEducation(event.target.value);
    };

    const handleUpdate = async (e) => {
        e.preventDefault()

        toast('Iltimos, kuting...');
        const response = await fetch(`${url}/users/${updateModal.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ism: firstName,
                familiya: lastName,
                otasiningIsmi: middleName,
                tugilganSanasi: dateOfBirth,
                telefonRaqami: phoneNumber,
                qoshimchaRaqam: phoneNumber2,
                yonalish: direction,
                talimTuri: typeOfEducation,
                pasportSeriyaRaqami: passport,
                dtmTestBali: dtmTestBali,
                source: "website",
            })
        });
        
        if (response.ok) {
            toast.success('Muvaffaqiyatli yangilandi!');
            setUpdateModal({isOpen: false, id: null});
            // Ma'lumotlarni qayta yuklash yoki boshqa kerakli amallarni bajarish
        } else {
            toast.error('Xatolik yuz berdi');
        }
    }

    return (
        <form className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white max-w-md mx-auto md:shadow p-10 md:border md:rounded-md ${updateModal.isOpen ? 'block' : 'hidden'}`} onSubmit={handleUpdate}>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        onChange={(e) => setFirstName(e.target.value)} 
                        value={firstName} 
                        type="text" 
                        name="floating_first_name" 
                        id="floating_first_name" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" " 
                        required 
                    />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Atı</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        onChange={(e) => setLastName(e.target.value)} 
                        value={lastName} 
                        type="text" 
                        name="floating_last_name" 
                        id="floating_last_name" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" " 
                        required 
                    />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Familiyası</label>
                </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    onChange={(e) => setMiddleName(e.target.value)} 
                    value={middleName} 
                    type="text" 
                    name="floating_middle_name" 
                    id="floating_middle_name" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required 
                />
                <label htmlFor="floating_middle_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ákesiniń atı</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    onChange={(e) => setPassport(e.target.value)} 
                    value={passport} 
                    type="text" 
                    name="floating_passport" 
                    id="floating_passport" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required 
                />
                <label htmlFor="floating_passport" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pasport seriya nomer</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    onChange={(e) => setDtmTestBali(e.target.value)} 
                    value={dtmTestBali} 
                    type="text" 
                    name="floating_dtm_test" 
                    id="floating_dtm_test" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required 
                />
                <label htmlFor="floating_dtm_test" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DTM test balı</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    onChange={(e) => setDateOfBirth(e.target.value)} 
                    value={dateOfBirth} 
                    type="date" 
                    name="floating_date_of_birth" 
                    id="floating_date_of_birth" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    required 
                />
                <label htmlFor="floating_date_of_birth" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tuwılǵan sánesi</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                        value={phoneNumber} 
                        type="text" 
                        name="floating_phone" 
                        id="floating_phone" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" " 
                        required 
                    />
                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefon nomer</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        onChange={(e) => setPhoneNumber2(e.target.value)} 
                        value={phoneNumber2} 
                        type="text" 
                        name="floating_phone2" 
                        id="floating_phone2" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" " 
                        required 
                    />
                    <label htmlFor="floating_phone2" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Qosımsha telefon nomer</label>
                </div>
            </div>
            <Stack spacing={2}>
                <FormControl variant="standard" sx={{ minWidth: 120, width: '100%' }}>
                <InputLabel id="demo-simple-select-standard-label-2">Jónelisti tańlań</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label-2"
                        id="demo-simple-select-standard-1"
                        value={direction}
                        onChange={handleChangeDirection}
                        label="Jónelisti tańlań"
                        required
                    >
                        <MenuItem value="stomatologiya-ishi">Стоматология иши</MenuItem>
                        <MenuItem value="hamshiralik-ishi">Ҳамширалик иши</MenuItem>
                        <MenuItem value="markazlashtirilgan-post-operatori">Марказлаштирилган пост оператори</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ minWidth: 120, width: '100%' }}>
                    <InputLabel id="demo-simple-select-standard-label-2">Tálim túrin tańlań</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label-2"
                        id="demo-simple-select-standard-2"
                        value={typeOfEducation}
                        onChange={handleChangeTypeOfEducation}
                        label="Tálim túrin tańlań"
                        required
                    >
                        <MenuItem value="kunduzgi">Kúndizgi</MenuItem>
                        <MenuItem value="sirtqi">Sırtqı</MenuItem>
                        {
                            direction === "markazlashtirilgan-post-operatori" && (<MenuItem value="dual">Dual</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Stack>
            <div className='flex justify-end mt-4 gap-4'>
                <Button onClick={() => setUpdateModal({isOpen: false, id: null})} type="button" variant="contained" endIcon={<MdClose />}>Biykar etiw</Button>
                <Button type="submit" variant="contained" endIcon={<SendIcon />}>Jiberiw</Button>
            </div>
        </form>
    )
}

export default UpdateModal
