
// style.js
import styled from "styled-components";

const PRIMARY = "#7f5af0";

export const Wrapper = styled.div`
  height: calc(100vh - 70px);
  overflow-y: auto;
  padding: 20px;
  background: #e6e6e6;
`;

export const TemplateScroll = styled.div`
  max-height: 360px;          /* control height */
  overflow-y: auto;
  padding-right: 6px;

  /* smooth scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #7f5af0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const PageHeader = styled.div`
  margin-bottom: 20px;

  h2 { font-size: 22px; font-weight: 700; }
  p { font-size: 13px; color: #6b7280; }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const LimitsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f1f1f1;

  input {
    width: 120px;
    padding: 8px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
  }

  &:last-child { border-bottom: none; }
`;

export const ValueText = styled.span`
  font-weight: 600;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
`;

export const ActionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: ${({ primary, danger }) =>
    danger ? "#fee2e2" : primary ? PRIMARY : "#e5e7eb"};
  color: ${({ primary, danger }) => (primary ? "#fff" : danger ? "#dc2626" : "#111")};
`;


export const TemplateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const TemplateList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TemplateItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 12px;
  background: #f9fafb;

  h4 { font-size: 14px; margin-bottom: 4px; }
  p { font-size: 12px; color: #6b7280; }

  button { margin-left: 6px; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  width: 420px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  label { font-size: 13px; color: #6b7280; margin-bottom: 6px; }

  input, textarea {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
  }

  textarea { resize: none; }
`;
