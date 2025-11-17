import React, { use, useState } from "react";
import CountBox from "../CountBox/CountBox";
import Container from "../Container/Container";
import Card from "../Card/Card";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";

const IssuesManagement = ({ fetchPromise }) => {
  const fetchData = use(fetchPromise);
  const [tickets, setTickets] = useState(fetchData);
  const [selected, setSelected] = useState([]);
  const [resolvedData, setResolvedData] = useState([]);

  const handleClickedCard = (currentData) => {
    console.log("handle clicked country");
    const already = selected.find((item) => item.id === currentData.id);
    if (!already) {
      setSelected([...selected, currentData]);
    }
  };

  return (
    <div className="bg-[#E5E7EB] pb-20">
      {/* Count Box */}
      <CountBox selected={selected} resolvedData={resolvedData}></CountBox>

      <Container>
        <div className="flex justify-between items-start gap-8">
          <div className="w-7/10">
            <h2 className="font-semibold text-2xl text-[#34485a] mb-4">
              Customer Tickets
            </h2>
            <div className="grid grid-cols-2 gap-4">
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

          <div className="w-3/10">
            <div>
              <h2 className="font-semibold text-2xl text-[#34485a] mb-4">
                Task Status
              </h2>
              {selected.map((clickedData) => {
                return (
                  <TaskStatus
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

            <div className="mt-10">
              <h2 className="font-semibold text-2xl text-[#34485a] mb-4">
                Resolved Task
              </h2>
              {resolvedData.map((resData) => {
                return <ResolvedTask resData={resData}></ResolvedTask>;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IssuesManagement;
