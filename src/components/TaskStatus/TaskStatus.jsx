import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({ clickedData, tickets, setTickets, resolvedData, setResolvedData, selected, setSelected }) => {
  const handleCompleteTask = () => {
    toast.success("Completed!")
    const newSelectedData = selected.filter(selectedData => selectedData.id !== clickedData.id);
    setSelected(newSelectedData);
    const newticketsData = tickets.filter(ticket => ticket.id !== clickedData.id);
    setTickets(newticketsData);
    setResolvedData([...resolvedData, clickedData])
    
  };

  return (
    <div className="bg-white p-4 rounded-sm shadow-lg mb-4">
      <h2 className="font-medium text-lg text-[#001931] mb-4">
        {clickedData.title}
      </h2>
      <button onClick={handleCompleteTask} className="bg-[#02A53B] w-full text-white py-3 rounded-sm font-semibold cursor-pointer">
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;
