import React, { useState } from 'react'
import moment from 'moment'
import BuatEvent from './BuatEvent'

const FormEvent = () => {
    
    const [eventTitle, setEventTitle] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [isShowTime, setIsShowTime] = useState(false)
    const [dateStart, setDateStart] = useState(new Date())
    const [dateEnd, setDateEnd] = useState(new Date())
    const [colorSelected, setColorSelected] = useState('')

    const onEventTitleChange = (event) => {
        setEventTittle(event.target.value)
    }

    const onCheckboxChange = (event) => {
        if(event.target.checked === true) {
            setIsShowTime(true)
            setCheckbox(true)
        } else {
            setIsShowTime(false)
            setCheckbox(false)
        }
    }

    const onDateChange = (propertyName) => (event) => {
        if(propertyName === 'start') {
            setDateStart(event)
        }
        if(propertyName === 'end') {
            setDateEnd(event)
        }
    }

    const onColorChange = (event) => {
        if(event.target.value === '-') {
            setColorSelected(event.target.value)
        } else {
            setColorSelected('-')
        }
    }

    const setEvent = id => {
        let start = ''
        let end = ''
        if (checkbox) {
            start = `${moment(dateStart).format(YYYY-MM-DD)}`
            end = `${moment(dateEnd).format(YYYY-MM-DD)}`
        } else {
            start = `${moment(dateStart).format()}`
            end = `${moment(dateEnd).format()}`
        }

        const event = {
            id,
            title: eventTitle,
            start,
            end,
            allDay: checkbox,
            color: colorSelected
        }

        return event
    }

    const reset = () => {
        setColorSelected('')
        setEventTitle('')
        setCheckbox(false)
        setIsShowTime(false)
        setDateStart(new Date())
        setDateEnd(new Date())
        setColorSelected('')
    }

    const eventSubmit = () => {
        const event = setEvent(1);
        console.log(event)
        reset()
    }


    return <BuatEvent
        EventTitleChange={eventTitle}
        dateStart={dateStart}
        dateEnd={dateEnd}
        checkbox={checkbox}
        colorSelected={colorSelected}
        colorOption={["success","primary"]}
        eventTitleChange={onEventTitleChange}
        checkboxChange={onCheckboxChange}
        colorChange={onColorChange}
        dateChange={onDateChange}
        isShowTime={isShowTime}
        eventSubmit={eventSubmit}
    />
}

export default FormEvent
