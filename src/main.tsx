import { render } from 'preact'
import { App } from './app'
import '@/styles/style.css'
import '@/styles/custom.css'

render(<App />, document.getElementById('app')!)
