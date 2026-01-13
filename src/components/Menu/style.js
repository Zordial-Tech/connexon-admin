import styled from "styled-components";

const Wrapper = styled.section`
  height: 100%;

  .menu-bar {
    // height: 100%;
    // background: linear-gradient(180deg, #7f5af0, #6b46e5);
    display: flex;
    flex-direction: column;
    color: #fff;
  }

  .heading {
    padding-top: 70px ;
    font-size: 14px;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    display: flex;                  
    justify-content: center;    
   
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 12px;
  }

  .section-title {
    font-size: 12px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin: 16px 12px 8px;
    opacity: 0.7;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    border-radius: 10px;
    cursor: pointer;
    color: rgba(255,255,255,0.9);
    transition: background 0.2s ease, padding-left 0.2s ease;

    svg {
      font-size: 16px;
      opacity: 0.9;
    }

    span {
      font-size: 14px;
      font-weight: 500;
    }

    &:hover {
      background: rgba(255,255,255,0.12);
      padding-left: 12px;
    }
  }

  .menu-item.active {
    background: rgba(255,255,255,0.18);
    box-shadow: inset 3px 0 0 #ffffff;
    color: #fff;
  }

  .divider {
    margin: auto 12px 12px;
    height: 1px;
    background: rgba(255,255,255,0.2);
  }

  .logout {
    color: #ffdddd;

    &:hover {
      background: rgba(255, 77, 79, 0.18);
    }
  }
    
`;

export default Wrapper;
