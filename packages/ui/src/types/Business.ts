export interface Location {
  id: string
  name: string
}

export interface Business {
  id: string
  name: string
  locations: Location[]
}
