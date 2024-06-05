import _LayoutCustomCard from "../../HOC/_LayoutCustomCard/_LayoutCustomCard";
import _LayoutGraphCard from "../../HOC/_LayoutGraphCard/_LayoutGraphCard";
import styled from "styled-components";
import useStatics from "./Hooks/useStatics";
import PieGraph from "../../components/charts/PieGraph";

const CenteredGridContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StaticsView = () => {
  const { fundsRaised, totalFundsRaised, interestRate, totalInterestRate } =
    useStatics();

  return (
    <_LayoutCustomCard
      title="Estadísticas"
      children={
        <CenteredGridContainer>
          <_LayoutGraphCard
            title="Porcentaje recaudado"
            children={<PieGraph fundsRaised={fundsRaised} />}
            overlayText={new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
            }).format(totalFundsRaised)}
          />

          <_LayoutGraphCard
            title="Porcentaje intereses recaudado"
            children={<PieGraph fundsRaised={interestRate} />}
            overlayText={new Intl.NumberFormat("es-CO", {
              style: "currency",
              currency: "COP",
            }).format(totalInterestRate)}
          />
        </CenteredGridContainer>
      }
    />
  );
};

export default StaticsView;
