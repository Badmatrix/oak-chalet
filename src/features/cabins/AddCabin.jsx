import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm"; 
// export default function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         {isOpenModal ? "close form" : "add new cabin"}
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabinForm">
          <Button>add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabinForm">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
