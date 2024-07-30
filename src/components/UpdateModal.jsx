import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { url } from '../../utils/Url';
import { MdClose } from 'react-icons/md';
import { UpdateModalContext } from '../context/updateModalContext';

const UpdateModal = () => {
    const {updateModal, setUpdateModal } = useContext(UpdateModalContext)
    const [data, setData] = useState(null)

    
    useEffect(() => {
        fetch(`${url}/users/${updateModal.id}`)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, [updateModal.id])
    
    const [firstName, setFirstName] = useState(data?.ism)
        // useEffect(() => {
        //     setOpen(isOpen)
        // }, [isOpen])
        // console.log(isOpen);


    const [direction, setDirection] = useState(data?.yonalish);
    const [typeOfEducation, setTypeOfEducation] = useState(data?.talimTuri);

    // console.log(updateModal);

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

    const handleUpdate = async (e) => {
        e.preventDefault()

        toast('Please wait...')
            const response = await fetch(`${url}/users/`, {
            method: 'PATCH',
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
            }
    }
  return (
    <form className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white max-w-md mx-auto md:shadow p-10 md:border md:rounded-md ${updateModal.isOpen ? 'block' : 'hidden'}`} onSubmit={handleUpdate}>
            {/* <div className='flex justify-center mb-4'>
                <span className='font-bold text-blue-300'>Hújjet tapsırıw ushın formanı toltırıń</span>
            </div> */}
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} ref={firstNameRef} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Atı</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={data?.familiya} ref={lastNameRef} type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Familiyası</label>
                </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input value={data?.otasiningIsmi} ref={middleNameRef} type="middle_name" name="floating_middle_name" id="floating_middle_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_middle_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ákesiniń atı</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input value={data?.pasportSeriyaRaqami} ref={passportRef} type="passport" name="floating_passport" id="floating_passport" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_passport" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pasport seriya nomer</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input value={data?.dtmTestBali} ref={dtmTestBaliRef} type="dtm_test" name="floating_dtm_test" id="floating_dtm_test" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_dtm_test" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DTM test balı</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input value={data?.tugilganSanasi} ref={dateOfBirthRef} type="date" name="floating_date_of_birth" id="floating_date_of_birth" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                <label htmlFor="floating_date_of_birth" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tuwılǵan sánesi</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input value={data?.telefonRaqami} ref={phoneNumberRef} type="text" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefon nomer</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={data?.qoshimchaRaqam} ref={phoneNumber2Ref} type="text" name="floating_phone2" id="floating_phone2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
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
                        {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
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
                        {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
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