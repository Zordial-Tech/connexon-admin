import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 160px); /* header + footer space */
  display: flex;
  justify-content: center;
`;


export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  background: #ffffff;
  padding: 20px;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
   
  display: flex;
  flex-direction: column;
  height: 100%;
`;


export const Header = styled.div`
  position: sticky;
  top: 0;
  - z-index: 10;
   + z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;

  margin-bottom: 25px;
  padding-bottom: 20px;

  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 6px;

  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c7d2fe;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;


export const Title = styled.h1`
  font-size: 2.4rem;
  color: #1e293b;
  margin-bottom: 4px;
  letter-spacing: -0.5px;
`;

export const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #64748b;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  background: ${({ $blue, $red, $green }) =>
    $blue ? "#2563eb"
    : $red ? "#dc2626"
    : $green ? "#16a34a"
    : "#e2e8f0"};
  color: ${({ $blue, $red, $green }) =>
    $blue || $red || $green ? "#fff" : "#111"};
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
    
  &:active {
    transform: scale(0.97);
  }
`;

export const Section = styled.div`
  background: #fafafa;
  border-radius: 14px;
//    padding: 8px;
  margin-bottom: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.25s ease;

  &:hover {
    background: #fff;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 600;
  color: #1e293b;
`;

export const SectionTitleInput = styled.input`
  font-size: 1.3rem;
  font-weight: 600;
  width: 100%;
  border: none;
  border-bottom: 2px solid #cbd5e1;
  background: transparent;
  outline: none;
  color: #1e293b;
  padding-bottom: 3px;

  &:focus {
    border-color: #2563eb;
  }
`;

export const SectionContent = styled.p`
  margin-top: 12px;
  color: #475569;
  line-height: 1.7;
  font-size: 0.97rem;
`;

export const RemoveButton = styled.button`
  font-size: 0.85rem;
  color: #ef4444;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #b91c1c;
  }
`;

export const TextArea = styled.textarea`
  margin-top: 12px;
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 12px;
  min-height: 110px;
  resize: none;
  outline: none;
  color: #1e293b;
  line-height: 1.6;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #2563eb;
  }
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 25px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
+ z-index: 1000;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
`;


export const Modal = styled.div`
  background: #fff;
  padding: 35px;
  border-radius: 18px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 520px;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 18px;
  color: #1e293b;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #2563eb;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
`;
