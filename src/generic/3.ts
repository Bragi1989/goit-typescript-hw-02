

function merge<T extends {}, U extends {}> (objA: T, objB: U): T & U {
  return { ...objA, ...objB }
}

export {}
