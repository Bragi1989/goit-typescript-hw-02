

interface Page {
  title: string
}

class Component<T> {
  constructor (public props: T) {}
}

class Page extends Component<Page> {
  pageInfo () {
    console.log(this.props.title)
  }
}

export {}
