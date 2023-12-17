

type User = {
  name: string
  surname: string
  email: string
  password: string
}

function createOrUpdateUser (initialValues: Omit<User, 'name' | 'surname'>) {
  
}

createOrUpdateUser({ email: 'user@mail.com', password: 'password123' })

export {}
