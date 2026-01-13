import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;

  .home {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .heading {
    display: flex;
    flex: 1;
    width: 100%;
    min-height: 0;
  }

  .menu {
    width: 210px;
    flex-shrink: 0;
    background: #7f5af0;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: width 0.3s ease;
  }

  // .menu h1 {
  //   font-size: 25px;
   
  //   width: 100%;
  //   text-align: center;
  // }

  // .menu .icon {
  //   font-size: 24px;
  
  //   cursor: pointer;
  // }

  .main-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
  }

  .header {
    flex-shrink: 0;
    width: 100%;
  }

  /* IMPORTANT FIX */
  .outlet {
    flex: 1;
    overflow-y: auto;   /* allow page scroll */
    //padding: 20px;
    background: #e6e6e6;
  }

  /* Footer is NORMAL FLOW (NOT FIXED) */
  .footer {
    margin-top: auto;   /* pushes footer down when content is small */
    // padding: 14px 20px;
    background: #7f5af0;
    text-align: center;
    // border-top: 1px solid rgba(255,255,255,0.2);  
  }

  /* Responsive */
  @media (max-width: 768px) {
    .menu {
      width: 150px;
    }

    .menu h1 {
      display: none;
    }

    .outlet {
      padding: 10px;
    }
  }
`;

export default Wrapper;
