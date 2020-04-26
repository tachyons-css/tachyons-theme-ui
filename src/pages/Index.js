/** @jsx jsx */
import { jsx } from 'theme-ui'
import { sample } from 'lodash'
import chroma from 'chroma-js'
import * as findColor from 'find-color'
import accessiblePairs from '../lib/accessible-related-colors'


export default props => {


  return (
    <div sx={{ minHeight: '100vh', p: 5, bg: ['black', 'black-90', 'black-80'] }}>
      <h1 sx={{my: 0, color: 'white', fontSize: [2,3,5] }}>Tachyons Theme UI</h1> 
    </div>
)
}
