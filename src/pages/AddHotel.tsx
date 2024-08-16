import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import ManageHotel from '../forms/hotel/ManageHotel'
import { addMyHotel } from '../utils/apiService';

export default function AddHotel() {
  const { mutate, isLoading } = useMutation(addMyHotel, {
    onSuccess: () => {
      toast.success('Hotel saved!')
    },
    onError: () => {
      toast.error('Error Saving Hotel')
    }
  })

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData)
  }

  return (
    <ManageHotel onSave={handleSave} isLoading={isLoading}/>
  )
}