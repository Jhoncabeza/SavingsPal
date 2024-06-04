import _LayoutCustomCard from "../../../../HOC/_LayoutCustomCard/_LayoutCustomCard";
import ModalGeneric from "../../../../components/common/modal/ModalGeneric";
import Datatable from "../../../../components/common/table";
import { IColumn } from "../../../../types";
import LoandsForm from "../../Form/LoandsForm";

import useLoans from "../../Hooks/useLoans";

const LoansView = () => {
  const columns: IColumn[] = [
    { id: "nombre", label: "Nombres", type: "string" },
    { id: "apellido", label: "Apellidos", type: "string" },
    { id: "cedula", label: "Cédula", type: "string" },
    { id: "valorPrestamo", label: "Valor", type: "string" },
    { id: "plazoPago", label: "Meses", type: "string" },
    { id: "valorMensual", label: "Valor Mensual", type: "string" },
    { id: "fecha", label: "Fecha Requerida", type: "string" },
    { id: "estadoPago", label: "Estado", type: "string" },
  ];

  const { allLoands, loadingLoand, showFormLoand, handleRowClick } = useLoans();

  return (
    <>
      {!showFormLoand ? (
        <Datatable
          title="Prestámos"
          data={allLoands}
          columns={columns}
          handleRowClick={handleRowClick}
          isNewCreate={false}
        />
      ) : (
        <_LayoutCustomCard
          title={"Editar Préstamo"}
          children={<LoandsForm />}
        />
      )}
      <ModalGeneric loading={loadingLoand} />
    </>
  );
};

export default LoansView;
