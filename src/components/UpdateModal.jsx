import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { url } from '../../utils/Url';
import { MdClose } from 'react-icons/md';
import { UpdateModalContext } from '../context/updateModalContext';

const UpdateModal = () => {
    const { updateModal, setUpdateModal } = useContext(UpdateModalContext)
    const [formData, setFormData] = useState({
        ism: '',
        familiya: '',
        otasiningIsmi: '',
        pasportSeriyaRaqami: '',
        dtmTestBali: '',
        tugilganSanasi: '',
        telefonRaqami: '',
        qoshimchaRaqam: '',
        yonalish: '',
        talimTuri: ''
    });

    useEffect(() => {
        if (updateModal.id) {
            fetch(`${url}/users/${updateModal.id}`)
            .then(response => response.json())
            .then(data => {
                setFormData(data);
            })
            .catch(error => console.error(error));
        }
    }, [updateModal.id])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUpdate = async (e) => {
    e.preventDefault()
    console.log("Updating user data...", formData);

    try {
        const response = await fetch(`${url}/users/${updateModal.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        console.log("Response status:", response.status);

        if (response.ok) {
            const updatedData = await response.json();
            console.log("Updated data:", updatedData);
            setUpdateModal({isOpen: false, id: null});
            // Ma'lumotlarni qayta yuklash yoki boshqa kerakli amallarni bajarish
        } else {
            const errorData = await response.json();
            console.error("Error data:", errorData);
            // Xato xabarini ko'rsatish
        }
    } catch (error) {
        console.error("Fetch error:", error);
        // Xato xabarini ko'rsatish
    }
}
    return (
        <form className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white max-w-md mx-auto md:shadow p-10 md:border md:rounded-md ${updateModal.isOpen ? 'block' : 'hidden'}`} onSubmit={handleUpdate}>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        onChange={handleInputChange} 
                        value={formData.ism} 
                        type="text" 
                        name="ism" 
                        id="floating_first_name" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" " 
                        required 
                    />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Atı</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        onChange={handleInputChange} 
                        value={formData.familiya} 
                        type="text" 
                        name="familiya" 
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
                    onChange={handleInputChange} 
                    value={formData.otasiningIsmi} 
                    type="text" 
                    name="otasiningIsmi" 
                    id="floating_middle_name" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    required 
                />
                <label htmlFor="floating_middle_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ákesiniń atı</label>
            </div>
            {/* Qolgan input maydonlari uchun ham shu tarzda davom eting */}
            <Stack spacing={2}>
                <FormControl variant="standard" sx={{ minWidth: 120, width: '100%' }}>
                    <InputLabel id="demo-simple-select-standard-label-2">Jónelisti tańlań</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label-2"
                        id="demo-simple-select-standard-1"
                        value={formData.yonalish}
                        onChange={handleInputChange}
                        name="yonalish"
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
                        value={formData.talimTuri}
                        onChange={handleInputChange}
                        name="talimTuri"
                        label="Tálim túrin tańlań"
                        required
                    >
                        <MenuItem value="kunduzgi">Kúndizgi</MenuItem>
                        <MenuItem value="sirtqi">Sırtqı</MenuItem>
                        {
                            formData.yonalish === "markazlashtirilgan-post-operatori" && (<MenuItem value="dual">Dual</MenuItem>)
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