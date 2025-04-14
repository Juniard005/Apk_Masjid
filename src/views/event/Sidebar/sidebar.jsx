import React, { useState } from 'react'
import BuatEvent from '../Modal/BuatEvent'
import DatePicker from 'react-datepicker'

function sidebar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="col-3">
        <div className="d-grid gap-2">
            <button className="btn btn-primary" onClick={() => setOpen(true)}>
              Create New Task
            </button>
        </div>
        <div className="m-t-20 text-white">
            <br />
            <div className="my-1 p-2 bg-primary">Rapat</div>
            <div className="my-1 p-2 bg-danger">Tugas</div>
        </div>
    </div>
  )
}

export default sidebar
