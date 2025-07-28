export interface DRODisplay {
  x: number
  y: number
  z: number
}

export interface DROSettings {
  units: 'mm' | 'inch'
  resolution: number
  zeroOffset: DRODisplay
}

export interface DROState {
  display: DRODisplay
  settings: DROSettings
  isZeroing: boolean
  isAbsolute: boolean
}