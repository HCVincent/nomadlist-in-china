import { Dialog } from "@/components/ui/dialog";
import { closeModal } from "@/redux/modal-slice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { LoginOrSignupModal } from "./login-signup-modal";

export const RootModal: React.FC = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: RootState) => state.modal.isModalOpen
  );
  const activeModal = useSelector(
    (state: RootState) => state.modal.activeModal
  );

  return (
    <Dialog open={isModalOpen} onOpenChange={() => dispatch(closeModal())}>
      {activeModal === "signup" && <LoginOrSignupModal />}
    </Dialog>
  );
};
