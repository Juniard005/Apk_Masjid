import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import BuatEvent from "../Modal/BuatEvent";

function Calender() {
  let isToggle = true;
  const marginLeftCalendar = isToggle ? "ml-[256px]" : "";
  return (
    <div className="container px-20 py-3 mx-auto flex flex-col text-black">
      <div className="w-[100%] mt-10">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,listWeek",
          }}
          aspectRatio={1}
          contentHeight={500}
        />
      </div>
      <div className="container col-3 my-10">
        <div className="flex gap-5 px-5 py-5 justify-center">
          <button
            className="btn bg-blue-700"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Create New Task
          </button>
        </div>
        <div className="container col-3 text-black">
          <br />
          <div className="mx-1 p-2 bg-primary">Rapat</div>
          <div className="mx-1 p-2 bg-danger">Tugas</div>
        </div>
      </div>

      <BuatEvent />
    </div>
  );
}

export default Calender;
