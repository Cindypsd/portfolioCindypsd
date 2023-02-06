import { useState } from "react"



export const useModal = (intialValue=false) => {
  const [isOpen, setIsOpen] = useState(intialValue)
 
  const openModal= ()=> setIsOpen(true)
  const closeModal= ()=> setIsOpen(false)

  return [isOpen, openModal, closeModal]
}
