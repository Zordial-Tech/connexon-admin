import styled from "styled-components";

const PRIMARY = "#7f5af0";

/* ================= MAIN SCROLL AREA ================= */
export const Wrapper = styled.div`
  height: calc(100vh - 70px); /* adjust if header height differs */
  overflow-y: auto; /* ✅ INNER SCROLL */
  padding: 20px;
  background: linear-gradient(180deg, #f8f7ff, #ffffff);

  /* Smooth scroll */
  scroll-behavior: smooth;

  /* Remove scrollbar look (optional) */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    // background: ${PRIMARY};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 768px) {
    padding: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

/* ================= HEADER ================= */
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;

  p {
    font-size: 13px;
    color: #6b7280;
    margin-top: 4px;
  }

  select {
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    background: #fff;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const GradientText = styled.h2`
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(90deg, ${PRIMARY}, #5b3df5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

/* ================= SUMMARY ================= */
export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SummaryCard = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 8px 24px rgba(127, 90, 240, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ accent, danger }) =>
      accent
        ? `linear-gradient(135deg, ${PRIMARY}22, transparent)`
        : danger
        ? "linear-gradient(135deg, #fee2e2, transparent)"
        : "transparent"};
  }

  span {
    font-size: 13px;
    color: #6b7280;
    position: relative;
    z-index: 1;
  }

  h3 {
    margin-top: 8px;
    font-size: 22px;
    font-weight: 700;
    position: relative;
    z-index: 1;
    color: ${({ danger }) => (danger ? "#dc2626" : "#111827")};
  }
`;

/* ================= CHARTS ================= */
export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 14px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

  h4 {
    margin-bottom: 12px;
    font-size: 15px;
    font-weight: 600;
  }
`;

/* ================= TABLE ================= */
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    font-size: 13px;
    color: #6b7280;
    padding-bottom: 8px;
    text-align: left;
  }

  td {
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
    font-size: 14px;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;
