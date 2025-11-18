import React, { use, useState } from "react";
import CountBox from "../CountBox/CountBox";
import Container from "../Container/Container";
import Card from "../Card/Card";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";
import { toast } from "react-toastify";

const TicketManagement = ({ fetchPromise }) => {
  const fetchData = use(fetchPromise);
  const [tickets, setTickets] = useState(fetchData);
  const [selected, setSelected] = useState([]);
  const [resolvedData, setResolvedData] = useState([]);

  const handleClickedCard = (currentData) => {
    const alreadyClicked = selected.find((item) => item.id === currentData.id);

    if (alreadyClicked) {
      toast.warning("Already in progress!");
      return;
    }

    toast.success("In-Progress!");
    setSelected([...selected, currentData]);
  };

  return (
    <div className="bg-[#E5E7EB] pb-10 md:pb-20">
      {/* Count Box */}
      <CountBox selected={selected} resolvedData={resolvedData}></CountBox>

      <Container>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-4 md:gap-8 md:px-0 px-4">
          {/* Card */}
          <div className="w-full md:w-7/10">
            <h2 className="font-semibold text-2xl text-[#34485a] mb-4">
              Customer Tickets
            </h2>
            <div className="grid md:grid-cols-2 gap-4 ">
              {tickets.map((ticket) => {
                return (
                  <Card
                    key={ticket.id}
                    handleClickedCard={handleClickedCard}
                    ticket={ticket}
                  ></Card>
                );
              })}
            </div>
          </div>

          <div className="w-full md:w-3/10">
            {/* Task Status */}
            <div>
              <h2 className="font-semibold text-2xl text-[#34485a] mb-4">
                Task Status
              </h2>

              {selected.length == 0 && (
                <h2 className="text-[#627382]">
                  Select a ticket to add to Task Status
                </h2>
              )}

              {selected.map((clickedData) => {
                return (
                  <TaskStatus
                    key={clickedData.id}
                    resolvedData={resolvedData}
                    setResolvedData={setResolvedData}
                    setTickets={setTickets}
                    tickets={tickets}
                    selected={selected}
                    setSelected={setSelected}
                    clickedData={clickedData}
                  ></TaskStatus>
                );
              })}
            </div>

            {/* Resolved Task */}
            <div className="mt-4 md:mt-10">
              <h2 className="font-semibold text-2xl text-[#34485a] mb-4">
                Resolved Task
              </h2>
              {resolvedData.length == 0 && (
                <h2 className="text-[#627382]">No resolved tasks yet.</h2>
              )}
              {resolvedData.map((resData) => {
                return (
                  <ResolvedTask
                    key={resData.id}
                    resData={resData}
                  ></ResolvedTask>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TicketManagement;
