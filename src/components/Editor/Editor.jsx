import React from 'react'
import { useState } from 'react';
import styles from './Editor.module.css'
import { formatText } from '../../layout/layout';


const Editor = () => {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
  }

  const formattedText = formatText(text)

  return (
    <div className={styles.container}>
      <div className={styles.editor} >
        <textarea className={styles.input} value={text} onChange={onChange} name="" id="" cols="30" rows="10"></textarea>
        <span>
          <p className={styles.textLayout} >
            { formattedText.map((attribute, index) => {
                const isLast = formattedText.length === (index + 1);
                return !isLast ? <>{attribute}<br/></> : attribute;
              }) 
            }
          </p>
        </span>
      </div>
    </div>
  )
}

export default Editor