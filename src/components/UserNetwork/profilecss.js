import styled from "styled-components";

const Wrapper = styled.section`

  /* prevent unwanted horizontal scrolling inside this component */
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  .heading{
    margin: 10px 10px 9px 10px;
  }

  .profile-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px; /* reduced outer padding to avoid overflow */
    background-color: #f4f6f9;
    margin-top: 5px;
  }
    
  .profile-content {
    display: flex;
    width: 100%;
    max-width: 1100px; /* constrain content so it doesn't create horizontal scroll */
    height: auto;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    padding: 24px;
    gap: 20px;
    align-items: center;
    box-sizing: border-box;
  }

  /* Left side - Profile Image */
 .profile-image-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;  /* Center items horizontally */
    padding: 10px;
    position: relative;
}

  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #007bff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* Right side - Profile Details */
  .profile-details {
    flex: 2;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left; 
  }

  .attendee-table {
  width: 100%;
  border: none;
  margin-top: 1rem;
  font-size: 27px;
}

.attendee-table th {
  text-align: left;
  padding: 8px 12px;
  font-weight: 600;
}

.attendee-table td {
  padding: 8px 12px;
}

/////*
//   .profile-header {
//   font-size: 32px;
//   font-weight: bold;
//   margin-bottom: 10px;
//   text-align: center; /* Aligns text to the left */
//   //position: absolute;
//   margin-top: -45px;
//   left: 750px;
// }
.profile-header {
  flex: 1;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin: 0;
}
.user-leads-header .back-button {
  background: transparent;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

  .profile-info {
    font-size: 26px; /* Bigger text */
    margin-bottom: 6px;
    color: #444;
    display: flex;
    align-items: center;
  }

  .profile-info strong {
    color: #222;
    min-width: 200px; /* Ensures alignment */
    display: inline-block;
    font-size: 30px; /* Bigger labels */
  }
// .back-button {
//   background-color: transparent;
//   color: black;
//   padding: 14px 28px;       /* Increased padding */
//   font-size: 35px;          /* Larger text */
//   font-weight: 2000;         /* Bold text */
//   border: none;
//   cursor: pointer;
//   margin-left: -15px;
//   margin-top: -10px;
//   transition: color 0.3s ease, text-decoration 0.2s ease;
// }

.back-button:hover {
  
  color: #222; /* Slightly darker on hover */
}

.wholeprofile{
overflow-y:auto;
max-height:540px;

}

    .event-list-container {
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 15px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}
  .linkedin-button {
  
    display: inline-block;
    padding: 20px 20px;
    font-size: 16px;
    color: white;
    background-color: #0077b5;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    width:100%;
    transition: background 0.3s;
    margin-top:40px; /* Ensure proper spacing */
}

.linkedin-button:hover {
    background-color: #005582;
}

.event-list-title {
  font-size: 22px;
  margin-bottom: 10px;
}

/* Wrapper for scroll */
.event-table-container {
  margin-top: 20px;
  width: 100%;
  height: 300px;
  overflow-y: auto;   /* vertical scroll */
  overflow-x: auto;
}

/* Table */
.event-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}

/* Cells */
.event-table th,
.event-table td {
  padding: 12px;
  border: 1px solid #5b2f2fff;
  text-align: left;
}

/* ✅ Sticky Header */
.event-table thead th {
  position: sticky;
  top: 0;
  background-color: #7F5AF0; /* must be set */
  color: #000;
  z-index: 10; /* keeps header above rows */
}



/* Dropdown container */
.dropdown {
    position: relative;
    display: inline-block;
}

.view-connection-btn {
    background-color: #7f5af0;
    color: #000;
    padding: 10px 14px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s;
}

.dropbtn:hover {
    background-color: #005582;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: white;
    min-width: 200px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 10px;
    border-radius: 5px;
}

/* Show dropdown when button is clicked */
.dropdown .dropdown-content {
    display: block;
}

/* Dropdown item */
.dropdown-item {
    padding: 8px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
}

.dropdown-item:last-child {
    border-bottom: none;
}

.dropdown-item strong {
    color: #007bff;
}


.event-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.no-events {
  font-size: 18px;
  color: gray;
  text-align: center;
}

/* Fade-in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.user-leads-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  width: 100%;
  margin: 10px 0 20px 0;
  padding: 12px 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

// .user-leads-header .back-button {
//   background: none;
//   border: none;
//   font-size: 32px;
//   cursor: pointer;
//   color: #000;
//   padding: 0;
// }
// .profile-header {
//   flex: 1;
//   // text-align: center;
//   font-size: 28px;
//   font-weight: bold;
//   margin: 0;
// }

.leads-without-events-btn {
  background-color: #7f5af0;
  color: #000;
  border: none;
  padding: 10px 16px;
  margin-right: 30px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: background 0.2s ease, transform 0.1s ease;
}

.leads-without-events-btn:hover {
  background-color: #6b4de6;
  transform: translateY(-1px);
}


/* ensure button stays on the right side of the header when present */
// .user-leads-header .leads-without-events-btn {
//   margin-left: auto;
// }

.toggle-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 24px;
  margin-bottom: 16px;
}


// .profile-header-section {
//   display: flex;
//   flex-direction: column;
//   // align-items: right;
//   margin-top: 10px;
//   //  margin-left:50px;
//   // margin-bottom: 20px;
// }
 linkedin-button-start
  {
 
    padding: 20px 200px;
    font-size: 16px;
    color: white;
    background-color: #0077b5;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    width:100%;
    transition: background 0.3s;
    margin-top:70px; /* Ensure proper spacing */
  }



.toggle-btn {
 background-color: #34495e;
  color: #fff;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

.toggle-btn .dropdown-icon {
  margin-left: 12px;
  transition: transform 0.3s ease;
}

/* Rotate icon when active */
.toggle-btn .dropdown-icon.rotated {
  transform: rotate(180deg);
}


td.event-name {
  max-width: 220px;
  white-space: normal;
  word-break: break-word;
  padding: 4px;
}

.event-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;          
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease-in-out;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 25px 20px;
  width: 40%;
  max-width: 500px;
  max-height: 500px; /* Limit height for scroll */
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: left;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

.modal-content h2 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #333;
  padding: 0;
  border-bottom: 1px solid #ddd;
}

/* Scroll only the list part */
.modal-scroll-body {
  overflow-y: auto;
  flex: 1;
}

/* Meeting block inside scroll area */
.meeting-block {
  margin-bottom: 20px;
}

.meeting-block h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.table-responsive {
  overflow-x: auto;
}

.meeting-table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}

.meeting-table th,
.meeting-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.meeting-table th {
  background-color: #34495e;
  font-weight: bold;
  color : white;
}

.modal-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.modal-content li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.modal-content li:last-child {
  border-bottom: none;
}

.close-modal-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #555;
  transition: color 0.3s;
}

.close-modal-btn:hover {
  color: red;
}
@media (max-width: 768px) {
  .user-leads-header {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  // .leads-without-events-btn {
  //   width: 100%;
  //   text-align: center;
  //   margin-top: 8px;
  // }

  .profile-content {
    flex-direction: column;
    padding: 16px;
    gap: 12px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

`;

export default Wrapper;
