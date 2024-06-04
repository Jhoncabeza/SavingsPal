// DataTable
import Datatable from "../../../../components/common/table";

// Form and Hooks
import UserForm from "../../Form/UsersForm";

// Types
import _LayoutCustomCard from "../../../../HOC/_LayoutCustomCard/_LayoutCustomCard";
import useUser from "../../Hooks/useUser";
import ModalGeneric from "../../../../components/common/modal/ModalGeneric";
import { IColumn } from "../../../../types";

const UserView = () => {
  const {
    allUsers,
    showForm,
    loading,
    currentUser,
    handleCreateUserClick,
    handleSwitchState,
    handleRowClick,
  } = useUser();

  const columns: IColumn[] = [
    { id: "nombres", label: "Nombres", type: "string" },
    { id: "apellidos", label: "Apellidos", type: "string" },
    { id: "cedula", label: "Cédula", type: "string" },
    { id: "correo", label: "Correo", type: "string" },
    { id: "numerodecuenta", label: "N° Cuenta", type: "string" },
    { id: "banco", label: "Banco", type: "string" },
    { id: "tipodecuenta", label: "Tipo Cuenta", type: "string" },
    { id: "fecha", label: "Fecha", type: "string" },
    {
      id: "estado",
      label: "Estado",
      type: "switch",
      handleSwitchState: (cedula: number, value: boolean) =>
        handleSwitchState(cedula, value),
    },
  ];

  return (
    <>
      {!showForm ? (
        <Datatable
          title="Usuarios"
          data={allUsers}
          columns={columns}
          handleCreateUserClick={handleCreateUserClick}
          handleRowClick={handleRowClick}
          isNewCreate={true}
        />
      ) : (
        <_LayoutCustomCard
          title={!currentUser ? "Crear Usuario" : "Editar Usuario"}
          children={
            <UserForm
              handleCreateUserClick={handleCreateUserClick}
              currentUser={currentUser}
            />
          }
        />
      )}
      <ModalGeneric loading={loading} />
    </>
  );
};

export default UserView;
