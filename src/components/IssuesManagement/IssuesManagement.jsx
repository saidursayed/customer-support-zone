import React, { use } from "react";
import CountBox from "../CountBox/CountBox";
import Container from "../Container/Container";
import Card from "../Card/Card";


const IssuesManagement = ({ fetchPromise }) => {
  const fetchData = use(fetchPromise);

  return (
    <div className="bg-[#E5E7EB]">
      {/* Count Box */}
      <CountBox></CountBox>

      <Container>
        <div className="grid grid-cols-2 gap-3">
          {fetchData.map((elem) => {
            return (
              <Card key={elem.id} elem={elem}></Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default IssuesManagement;
