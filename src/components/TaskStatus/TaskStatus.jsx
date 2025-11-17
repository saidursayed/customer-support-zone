import React from "react";

const TaskStatus = ({ clickedData, tickets, setTickets, resolvedData, setResolvedData, selected, setSelected }) => {
  const handleResolved = () => {

    setSelected(selected.filter(selectedData => selectedData.id !== clickedData.id));
    setTickets(tickets.filter(ticket => ticket.id !== clickedData.id));
    setResolvedData([...resolvedData, clickedData])
    
  };

  return (
    <div className="bg-white p-4 rounded-sm shadow-lg mb-4">
      <h2 className="font-medium text-lg text-[#001931] mb-4">
        {clickedData.title}
      </h2>
      <button onClick={handleResolved} className="bg-[#02A53B] w-full text-white py-3 rounded-sm font-semibold">
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;
