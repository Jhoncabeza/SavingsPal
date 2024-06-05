import _LayoutCustomCard from "../../HOC/_LayoutCustomCard/_LayoutCustomCard";
import _LayoutGraphCard from "../../HOC/_LayoutGraphCard/_LayoutGraphCard";
import styled from "styled-components";
import useStatics from "./Hooks/useStatics";
import PieGraph from "../../components/charts/PieGraph";
import _LayoutGraphLoandCard from "../../HOC/_LayoutGraphLoandCard/_LayoutGraphLoandCard";
import _LayoutGraphMoneyCard from "../../HOC/_LayoutGraphMoneyCard/_LayoutGraphMoneyCard";
import BarGraph from "../../components/charts/BarGraph";
import BarHGraph from "../../components/charts/BarHGraph";

const CenteredGridContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StaticsView = () => {
  const {
    fundsRaised,
    totalFundsRaised,
    interestRate,
    totalInterestRate,
    totalLoanedMoney,
    raisedMoney,
    fineType,
  } = useStatics();

  return (
    <_LayoutCustomCard
      title="Estadísticas"
      children={
        <>
          <CenteredGridContainer>
            <_LayoutGraphCard
              title="Porcentaje recaudado"
              children={<PieGraph fundsRaised={fundsRaised} />}
              overlayText={new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              }).format(totalFundsRaised)}
            />

            <_LayoutGraphCard
              title="Porcentaje intereses recaudado"
              children={<PieGraph fundsRaised={interestRate} />}
              overlayText={new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              }).format(totalInterestRate)}
            />
          </CenteredGridContainer>
          <CenteredGridContainer>
            <_LayoutGraphMoneyCard
              title="Tipos de multas"
              children={<BarHGraph raisedMoney={fineType} />}
              overlayText={""}
            />
            <_LayoutGraphMoneyCard
              title="Dinero recaudado"
              children={<BarGraph raisedMoney={raisedMoney} />}
              overlayText={""}
            />
            <_LayoutGraphLoandCard
              title="Dinero prestado"
              overlayText={new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              }).format(totalLoanedMoney)}
            />
          </CenteredGridContainer>
        </>
      }
    />
  );
};

export default StaticsView;
