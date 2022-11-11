import {
  hello,
  Props
} from 'pkg-ts'

const props: Props = 'rikko'

const msg = hello(props)

console.log(msg)
