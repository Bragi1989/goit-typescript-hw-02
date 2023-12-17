

type AllType = {
  name: string
  position: number
  color: string
  weight: number
}

function compare (
  top: Pick<AllType, 'name' | 'position' | 'color' | 'weight'>,
  bottom: Pick<AllType, 'name' | 'position' | 'color' | 'weight'>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight
  }
}

export {}
