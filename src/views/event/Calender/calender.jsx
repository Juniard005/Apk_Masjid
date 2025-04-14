import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

function Calender() {
  let isToggle = true;
  const marginLeftCalendar = isToggle ? "ml-[256px]" : "";
  return (
    <div className="container pl-[256px] mx-auto col-9">
      <div className="w-[100%]">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,listWeek",
          }}
          height={350}
          contentHeight={350}
        />
      </div>
    </div>
  );
}

export default Calender;
