import React from "react";
import DatePicker from "react-datepicker";

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
    isShowTime,
  } = props;

  const handleCalendarStart = (date) => {
    console.log("Selected date/time:", date);
    // If you want to format it as a string:
    console.log(date.toString());
    // Or using toISOString():
    console.log(date.toISOString());
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white">
        <h3 className="font-bold text-lg">Buat Jadwal Acara</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form action="" method="dialog" className="w-[100%] h-[50%]">
            <div className="flex flex-col text-black bg-white mx-4 my-4">
              <label className="form-label text-xl">Title</label>
              <div className="my-2">
                <input
                  type="text"
                  className="input"
                  placeholder="My awesome page"
                />
              </div>

              <label className="form-label text-xl">Slug</label>
              <div className="my-2">
                <input
                  type="text"
                  className="input"
                  placeholder="my-awesome-page"
                />
              </div>

              <label className="form-label text-xl">Author</label>
              <div className="my-2">
                <input type="text" className="input" placeholder="Name" />
              </div>
            </div>
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default BuatEvent;

// fixed inset-0 z-10 w-screen overflow-y-auto
