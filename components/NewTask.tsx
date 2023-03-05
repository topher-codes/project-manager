"use client";
import { createNewTask } from "@/lib/api";
import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import Input from "./Input";
import { usePathname } from "next/navigation";

Modal.setAppElement("#modal");

const NewTask = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const pathname = usePathname();
  const projectId = pathname.split("/")[2];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewTask(name, description, projectId);
    closeModal();
  };

  return (
    <div className="flex items-center justify-center px-6 py-8 hover:scale-105 transition-all ease-in-out duration-200">
      <Button onClick={() => openModal()}>+ New Task</Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="bg-[rgba(0,0,0,.4)] flex justify-center items-center absolute top-0 left-0 h-screen w-screen"
        className="w-3/4 p-8 bg-white rounded-xl"
      >
        <h1 className="mb-6 text-3xl">New Task</h1>
        <form className="flex items-center" onSubmit={handleSubmit}>
          <Input
            placeholder="task name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit">Create</Button>
        </form>
      </Modal>
    </div>
  );
};

export default NewTask;
