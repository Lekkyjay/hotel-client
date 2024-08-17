/// <reference types="vite/client" />
interface IHotelFormData {
  name: string
  city: string
  country: string
  description: string
  type: string
  pricePerNight: number
  starRating: number
  facilities: string[]
  imageFiles: FileList
  imageUrls: string[]
  adultCount: number
  childCount: number
}

interface HotelType {
  id: string
  userId: string
  name: string
  city: string
  country: string
  description: string
  type: string
  adultCount: number
  childCount: number
  facilities: string[]
  pricePerNight: number
  starRating: number
  imageUrls: string[]
  lastUpdated: Date
  bookings: BookingType[]
}

interface IHotel {
  id: string
  userId: string
  name: string
  city: string
  country: string
  description: string
  type: string
  adultcount: number
  childcount: number
  facilities: string[]
  price_pernight: number
  star_rating: number
  image_urls: string[]
  lastupdated: Date
}


interface IMyHotel {
  message: string
  data: IHotel[]
  success: boolean
}