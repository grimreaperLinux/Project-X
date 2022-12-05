import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Outpass from "./components/Outpass";


const AllOutpassRequests = () => {
  const emptyOutpass = {
    name: "",
    institute_id: "",
    gender: "",
    branch: "",
    hostel_room: "",
    contact_no: "",
    date_of_leaving: "",
    date_of_arriving: "",
    time_of_leaving: "",
    time_of_arrival: "",
    reason: "",
    status: "",
    uploaded_document: "",
  };

  const [outpass, setOutpass] = useState(emptyOutpass);
  const [showOutpassDialog, setShowOutpassDialog] = useState(false);

  
 
  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );
  const Requests = [
    {
      name: "Aman Gupta",
      institute_id: "20bds024@iiitdwd.ac.in",
      gender: "Male",
      branch: "DSAI",
      semester: "5th",
      hostel_room: "223",
      contact_no: "9036986178",
      date_of_leaving: "20/12/22",
      date_of_arriving: "22/12/22",
      time_of_leaving: "9:00AM",
      time_of_arrival: "9:00PM",
      reason: "Vacation",
      status: "Pending",
      uploaded_document: "",
    },
    {
      name: "Vipul Bawankar",
      institute_id: "20bds063@iiitdwd.ac.in",
      gender: "Male",
      branch: "DSAI",
      semester: "5th",
      hostel_room: "216",
      contact_no: "9653365589",
      date_of_leaving: "20/12/22",
      date_of_arriving: "22/12/22",
      time_of_leaving: "9:00AM",
      time_of_arrival: "9:00PM",
      reason: "Vacation",
      status: "Approved",
      uploaded_document: "",
    },
    {
      name: "Aniket Raj",
      institute_id: "20bds007@iiitdwd.ac.in",
      gender: "Male",
      branch: "DSAI",
      semester: "5th",
      hostel_room: "216",
      contact_no: "9619513423",
      date_of_leaving: "20/12/22",
      date_of_arriving: "22/12/22",
      time_of_leaving: "9:00AM",
      time_of_arrival: "9:00PM",
      reason: "Vacation",
      status: "Rejected",
      uploaded_document: "",
    },
  ];
  
  const showOutpass = (rowData) => {
    setOutpass(rowData);
    setShowOutpassDialog(true);
  };
  

  const statusbodytemplate = (rowData) => {
    return (
      <span className={`customer-badge status-${rowData.status}`}>
        {rowData.status}
      </span>
    );
  };

  return (
    <>
      <div className="px-5">
        <h1>All Outpass Requests</h1>
        <DataTable
          value={Requests}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          showGridlines
          selectionMode="single"
          onSelectionChange={(e) => showOutpass(e.value)}
        >
          <Column field="name" header="Name" />
          <Column field="institute_id" header="Institute Id" />
          <Column field="date_of_leaving" header="Date of Leaving" />
          <Column field="reason" header="Reason" />
          <Column field="date_of_arriving" header="Date of Arriving" />
          <Column field="status" header="Status" body={statusbodytemplate} />
        </DataTable>
        <Outpass outpass={outpass} showOutpassDialog={showOutpassDialog} setShowOutpassDialog={setShowOutpassDialog}/>
        
      </div>
    </>
  );
};

export default AllOutpassRequests;