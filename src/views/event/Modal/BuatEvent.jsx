import React from 'react'
import DatePicker from 'react-datepicker'

const BuatEvent = (props) => {
    const {
        eventTitle,
        dateStart,
        dateEnd,
        checkbox,
        colorSelected,
        colorOption,
        eventTitlechange,
        checkboxChange,
        colorChange,
        dateChange,
        eventSubmit,
        isShowTime
    } = props
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                <svg className="size-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg font-semibold text-gray-800" id="modal-title">Membuat Jadwal Baru</h3>
                            </div>
                            <div className="mt-2">
                                <form action="" method="post">
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Judul Acara</label>
                                        <input type="text" className="form-control" placeholder="Silahkan Di Enter" name="judul_event" value={eventTitle} onChange={eventTitlechange}/>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" name="checkbox" placeholder="Enter Title" value={checkbox} onChange={checkboxChange} />
                                        <label htmlFor="" className="form-label">Apakah Acara Satu Hari?</label>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="" className="form-label">
                                                    Mulai Acara
                                                </label>
                                                {
                                                    !isShowTime?
                                                    <DatePicker selected={dateStart} onChange={dateChange('start')} showTimeSelect timeFormat={'p'} timeIntervals={40} dateFormat="Pp" className='form-control' /> :
                                                    <DatePicker selected={dateStart} onChange={dateChange('start')} dateFormat="Pp" className='form-control' />
                                                }
                                            </div>
                                            <div className="col">
                                                <label htmlFor="" className="form-label">
                                                    Selesai Acara
                                                </label>
                                                {
                                                    !isShowTime?
                                                    <DatePicker selected={dateEnd} onChange={dateChange('end')} showTimeSelect timeFormat={'p'} timeIntervals={40} dateFormat="Pp" className='form-control' /> :
                                                    <DatePicker selected={dateEnd} onChange={dateChange('end')} dateFormat="Pp" className="form-control" />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label">Silahkan Pilih Event</label>
                                        <select name="event_warna" id="" className="form-control" onChange={colorChange} value={colorSelected}>
                                            <option value="-"> - </option>
                                            {
                                                colorOption.map(color => {
                                                    <option value={color.toLowerCase()} key={color}>
                                                        {color.charAt(0).toUpperCase() + color.slice(1)}
                                                    </option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </form>                   
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto" onClick={eventSubmit} disabled={!eventTitle || !dateStart || !dateEnd }>Buat Jadwal</button>
                        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setOpen(false)}>Gak Jadi Deh</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

  )
}

export default BuatEvent





// export default function BuatEvent({ open, onClose, children }) {
//     return (
//         // backdrop
//         <div onClick={onClose} className={`fixed inset-0-flex-justify-center items-center transition-color ${open ? "visible bg-black/20" : "invisible"}`}>
//             {/* Modal */}
//             <div className={`bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
//                 <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"><X/></button>
//                 {children}
//             </div>
//         </div>
//     )
// }