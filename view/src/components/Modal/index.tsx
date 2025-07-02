import { ModalProps } from "../../types/interfaces";
import { Button } from "../Button";

export const Modal = ({ isOpen, confirmHandler, cancelHandler, title }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="flex flex-col bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        {title && (
          <div className="flex justify-center">
            <h2 className="text-xl font-semibold text-custom-dark-blue mb-4">
              {title}
            </h2>
          </div>
        )}
        <div className="flex justify-center">
          {cancelHandler &&
            <div className='p-6'>
              <Button
                onClick={cancelHandler}
                text="Cancel"
                className="!bg-red-600"
              />
            </div>
          }
          <div className='p-6'>
            <Button
              onClick={confirmHandler}
              text="Delete"
            />
          </div>
        </div>
      </div>
    </div>
  );
};