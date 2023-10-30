import React from 'react'

export const Transaction = ({ transaction } ) => {
  return (
    <div>
        <li class="minus">
          {transaction.text} <span>-$400</span><button class="delete-btn">x</button>
        </li>
    </div>
  )
}


