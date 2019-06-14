import * as React from 'react'

import * as styles from './index.modules.scss'


export interface Props { compiler: string; framework: string }

class Loading extends React.Component<Props, object> {

  render() {
    return (
      <div className={`${styles.loading} ${styles.obscuration}` }>
        
      </div>
    )
  }
}

export default Loading 
